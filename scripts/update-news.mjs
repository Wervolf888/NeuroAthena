// НейроАтлас: автоматический сбор новостей из официальных лент вендоров.
// Запускается GitHub Actions раз в сутки; результат — data/news.json.
// Формат записи совместим с assets/app.js: {date, title, text, product, url, auto:true}
// Ручные записи куратора (без поля auto) сохраняются при каждом проходе.
import { readFile, writeFile } from 'node:fs/promises';

const FEEDS = [
  { product: 'OpenAI', url: 'https://openai.com/news/rss.xml' },
  { product: 'Google DeepMind', url: 'https://deepmind.google/blog/rss.xml' },
  { product: 'Gemini', url: 'https://blog.google/products/gemini/rss/' },
  { product: 'Google AI', url: 'https://blog.google/technology/ai/rss/' },
  { product: 'Meta AI', url: 'https://about.fb.com/news/feed/' },
  { product: 'Mistral / Vibe', url: 'https://mistral.ai/rss.xml' },
  { product: 'Microsoft', url: 'https://blogs.microsoft.com/feed/' },
  { product: 'Microsoft Copilot', url: 'https://www.microsoft.com/en-us/microsoft-365/blog/feed/' },
  { product: 'ElevenLabs', url: 'https://elevenlabs.io/blog/rss.xml' },
  { product: 'Suno', url: 'https://suno.com/blog/rss.xml' },
  { product: 'Cursor', url: 'https://cursor.com/changelog/rss.xml' },
  { product: 'GitHub Copilot', url: 'https://github.blog/changelog/feed/' },
  { product: 'GitHub', url: 'https://github.blog/feed/' },
  { product: 'Ollama', url: 'https://ollama.com/blog/rss.xml' },
  { product: 'Ollama', url: 'https://github.com/ollama/ollama/releases.atom' },
  { product: 'Goose', url: 'https://github.com/block/goose/releases.atom' },
  { product: 'OpenCode', url: 'https://github.com/sst/opencode/releases.atom' },
  { product: 'LM Studio', url: 'https://lmstudio.ai/rss.xml' },
  { product: 'Hugging Face', url: 'https://huggingface.co/blog/feed.xml' },
  { product: 'dev.ua', url: 'https://dev.ua/rss', aiOnly: true },
  { product: 'Gagadget', url: 'https://gagadget.com/uk/rss/', aiOnly: true },
  { product: 'ITC.ua', url: 'https://itc.ua/feed/', aiOnly: true },
];

const DAYS = 45;
const MAX_ITEMS = 60;
const OUT = new URL('../data/news.json', import.meta.url);

function decodeEntities(s) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#0?39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&amp;/g, '&');
}
function cleanText(s, limit = 280) {
  const t = decodeEntities(String(s || '')).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  return t.length > limit ? t.slice(0, limit - 1).trimEnd() + '…' : t;
}
function tag(block, name) {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, 'i'));
  return m ? decodeEntities(m[1]).trim() : '';
}
function atomLink(block) {
  const m = block.match(/<link[^>]*rel="alternate"[^>]*href="([^"]+)"/i) || block.match(/<link[^>]*href="([^"]+)"/i);
  return m ? m[1] : '';
}
function feedImage(block) {
  const ok = u => u && !u.includes('avatars.githubusercontent.com');
  let m = block.match(/<media:thumbnail[^>]*url="([^"]+)"/i) || block.match(/<media:content[^>]*url="([^"]+\.(?:png|jpe?g|webp))"/i);
  if (m && ok(m[1])) return decodeEntities(m[1]);
  m = block.match(/<enclosure[^>]*url="([^"]+)"[^>]*type="image\//i) || block.match(/<enclosure[^>]*type="image\/[^"]*"[^>]*url="([^"]+)"/i);
  if (m && ok(m[1])) return decodeEntities(m[1]);
  m = block.match(/<img[^>]+src="(https?:\/\/[^"]+)"/i);
  if (m && ok(m[1])) return decodeEntities(m[1]);
  return '';
}
function parseFeed(xml, product) {
  const items = [];
  const blocks = xml.match(/<item[\s\S]*?<\/item>/gi) || xml.match(/<entry[\s\S]*?<\/entry>/gi) || [];
  for (const b of blocks) {
    const isAtom = /^<entry/i.test(b.trimStart().slice(0, 7)) || b.includes('<entry');
    const title = cleanText(tag(b, 'title'), 200);
    const url = isAtom && !tag(b, 'link') ? atomLink(b) : (tag(b, 'link') || atomLink(b));
    const rawDate = tag(b, 'pubDate') || tag(b, 'dc:date') || tag(b, 'published') || tag(b, 'updated');
    const d = rawDate ? new Date(rawDate) : null;
    const text = cleanText(tag(b, 'description') || tag(b, 'summary') || tag(b, 'content'));
    if (title && url && d && !isNaN(d)) { const it = { date: d.toISOString(), title, text, product, url, auto: true }; const img = feedImage(b); if (img) it.image = img; items.push(it); }
  }
  return items;
}

const AI_RE = /нейросет|нейромереж|штучн\w* інтелект|искусствен\w* интеллект|машинн\w* (навчанн|обучен)|чат-?бот|chatbot|gpt|llm|openai|anthropic|claude|gemini|deepmind|mistral|llama|copilot|midjourney|генератив|промпт|prompt|deepseek|qwen|grok|runway|elevenlabs|suno|ideogram|(^|[\s«"'(])(ии|ші|ai)([\s»"').,:;!?]|$)/i;

async function fetchFeed(f) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 20000);
  try {
    const r = await fetch(f.url, { signal: ctrl.signal, headers: { 'user-agent': 'NeuroAtlas-Updater/1.0 (+https://github.com/Wervolf888/neuroatlas)' } });
    if (!r.ok) { console.log(`SKIP ${f.product}: HTTP ${r.status}`); return []; }
    const xml = await r.text();
    let items = parseFeed(xml, f.product);
    items = items.filter(it => !/^b\d+$/.test(it.title.trim()));
    if (f.aiOnly) { const before = items.length; items = items.filter(it => AI_RE.test(it.title + ' ' + it.text)); console.log(`AI filter ${f.product}: ${items.length}/${before} kept`); }
    items.sort((a, b) => new Date(b.date) - new Date(a.date));
    const cap = f.url.includes('releases.atom') ? 3 : 6;
    items = items.slice(0, cap);
    console.log(`OK ${f.product}: ${items.length} items (capped)`);
    return items;
  } catch (e) {
    console.log(`SKIP ${f.product}: ${e.message}`);
    return [];
  } finally { clearTimeout(timer); }
}

const cutoff = Date.now() - DAYS * 24 * 3600 * 1000;
let existing = { items: [] };
try { existing = JSON.parse(await readFile(OUT, 'utf8')); } catch { /* first run */ }
const manual = (existing.items || []).filter(it => !it.auto);

const all = [];
for (const f of FEEDS) all.push(...await fetchFeed(f));
const fresh = all.filter(it => new Date(it.date).getTime() >= cutoff);
const prevByUrl = new Map();
for (const it of (existing.items || [])) if (it.url) prevByUrl.set(it.url, it);
const byUrl = new Map();
for (const it of fresh) if (!byUrl.has(it.url)) byUrl.set(it.url, it);
for (const it of byUrl.values()) {
  const prev = prevByUrl.get(it.url);
  if (!prev) continue;
  for (const k of ['title_ru', 'text_ru', 'title_uk', 'text_uk']) if (prev[k] && !it[k]) it[k] = prev[k];
  if (!it.image && prev.image) it.image = prev.image;
}
const auto = [...byUrl.values()].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, MAX_ITEMS);

if (!auto.length && FEEDS.length) {
  console.error('No items collected from any feed — keeping the old file.');
  process.exit(1);
}
const merged = [...manual, ...auto].sort((a, b) => new Date(b.date || b.published || 0) - new Date(a.date || a.published || 0));
await writeFile(OUT, JSON.stringify({ items: merged }, null, 2) + '\n', 'utf8');
console.log(`Done: ${auto.length} auto + ${manual.length} manual = ${merged.length} items.`);
