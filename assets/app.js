'use strict';
/* Этап 6: вход Google. Впишите ID приложения Google (OAuth 2.0) — и вход заработает.
   Пока строка пуста, кнопка входа показывает честное сообщение о подключении при размещении. */
const CONFIG = { GOOGLE_CLIENT_ID: '583275153497-5a6gih2292m33o6a35sv7e8j63fcl99d.apps.googleusercontent.com' };
/* ============================================================
   НейроАфина — переработка подачи (между этапом 2 и 3).
   Данные не трогаются: каталог, цены, логотипы читаются как есть.
   Вся подача — здесь и в assets/style.css.
   ============================================================ */

/* ---------- Языки интерфейса: RU / UK / EN ---------- */
const I18N = {
  ru: {
    'page.home': 'Главная', 'page.chats': 'Общие чаты', 'page.images': 'Картинки',
    'page.video': 'Видео', 'page.audio': 'Звук', 'page.code': 'Код',
    'page.agents': 'Агенты', 'page.local': 'Локальные модели', 'page.prices': 'Цены',
    'page.offers': 'Акции', 'page.discounts': 'Скидки', 'page.coupons': 'Купоны',
    'page.news': 'Новости', 'page.compare': 'Конструктор сравнений',
    'page.free': 'Бесплатное и пробы', 'page.rankings': 'Рейтинги по задачам',
    'page.calendar': 'Календарь релизов', 'page.community': 'Выбор пользователей', 'page.converter': 'Конвертер валют',
    'desc.chats': 'Универсальные помощники', 'desc.images': 'Генерация и обработка',
    'desc.video': 'Создание видео', 'desc.audio': 'Голос и музыка',
    'desc.code': 'Помощники разработчика', 'desc.agents': 'Автономные инструменты',
    'desc.local': 'Работа на своём устройстве',
    'desc.prices': 'Все цены по странам', 'desc.offers': 'Акции сервисов',
    'desc.discounts': 'Скидки и распродажи', 'desc.coupons': 'Промокоды и купоны',
    'desc.news': 'Главное из мира ИИ', 'desc.compare': 'Сравнение моделей',
    'desc.free': 'Бесплатное и пробы', 'desc.rankings': 'Рейтинги по задачам',
    'desc.calendar': 'Календарь релизов', 'desc.community': 'Выбор пользователей', 'desc.converter': 'Подписка в вашей валюте',
    'skip': 'Перейти к содержанию', 'brandTag': 'НАВИГАТОР ПО МИРУ ИИ',
    'navCatalog': 'Каталог', 'navPrices': 'Цены', 'navCompare': 'Сравнение', 'navNews': 'Новости',
    'menuAll': 'Все разделы', 'menuClose': 'Закрыть',
    'footerTag': 'Все нейросети. Все цены. Все новости.',
    'footerNote': 'Неподтверждённые данные не публикуются.',
    'footerAnim': 'Анимация Земли:',
    'metaDesc': 'НейроАфина — каталог нейросетей, цен и новостей.',
    'dateUnavailable': 'Дата недоступна',
    'notConfirmed': 'Не подтверждено', 'yes': 'Да', 'no': 'Нет',
    'freeYes': 'Есть; условия не подтверждены', 'freeNo': 'Нет (по данным каталога)',
    'badgeFree': 'Есть бесплатный', 'badgeRu': 'Русский есть', 'badgeUk': 'Украинский есть',
    'priceUA': 'Украина', 'priceUS': 'США', 'priceEU': 'Европа',
    'cheapest': 'Выгоднее всего по данным каталога: {v}. Сравнимость тарифов и условия требуют проверки.',
    'priceFileTitle': 'Данные из файла цен куратора',
    'priceFileNote': 'Суммы и условия приведены как в файле. Валюта или упомянутая страна не означают подтверждённую цену для Украины.',
    'checkedOn': 'проверено: {v}', 'checkUnconfirmed': 'проверка не подтверждена',
    'perMonth': ' / мес.', 'perYear': ' / год', 'perMonthUAH': ' ₴ / мес.', 'priceFileTag': '(файл цен, {v})',
    'official': 'Официальный сайт ↗', 'officialMissing': 'Официальный адрес не подтверждён',
    'details': 'Подробнее', 'collapse': 'Свернуть',
    'whatIs': 'Что это и чем сильна', 'modelOrVersion': 'Модель или версия',
    'pricesTitle': 'Цены по данным куратора',
    'termsTitle': 'Условия и доступность',
    'fldFree': 'Бесплатный тариф', 'fldTrial': 'Пробный период',
    'cardNeeded': 'Нужна ли карта: не подтверждено',
    'fldRu': 'Русский язык интерфейса', 'fldUk': 'Украинский язык интерфейса',
    'fldPlatforms': 'Платформы', 'fldRating': 'Оценка пользователей',
    'expTitle': 'Опыт пользователей', 'fldPros': 'Плюсы', 'fldCons': 'Минусы', 'fldBugs': 'Баги и ограничения',
    'checkedLine': 'Дата проверки данных в каталоге: {v}',
    'notConfirmedList': 'Не подтверждено: {v}',
    'fldStrength': 'описание', 'fldFlagship': 'модель или версия',
    'fldPriceUA': 'цена для Украины', 'fldPriceUS': 'цена для США', 'fldPriceEU': 'цена для Европы',
    'fldChecked': 'дата проверки',
    'backHome': '← На главную',
    'catalogUnavailable': 'Каталог недоступен', 'checkFile': 'Проверьте файл data/catalog.js.',
    'catalogNotice': 'Сведения и цены приведены из файлов куратора; неподтверждённые поля отмечены. Наличие сервиса и условия могут отличаться по странам.',
    'indexLabel': 'Модели раздела:',
    'found': 'Найдено: {n}. Фильтры учитывают только подтверждённые значения.',
    'noMatches': 'Совпадений нет. Для многих моделей язык и платформы пока не подтверждены.',
    'heroEyebrow': 'Ваш навигатор в мире искусственного интеллекта',
    'heroTag': 'Все нейросети. Все цены. Все новости.',
    'openCatalog': 'Открыть каталог ↓', 'compareModels': 'Сравнить модели ↗',
    'ratesTitle': 'Курс НБУ', 'refreshRates': 'Обновить курсы',
    'ratesLoading': 'Загружаем данные НБУ…',
    'ratesFail': 'Не удалось получить курс НБУ. Попробуйте позже.',
    'ratesOn': 'Курс на {v} · источник НБУ',
    'converterIntro': 'Сколько стоит подписка в ваших деньгах? Введите сумму, выберите валюты — пересчитаем по официальному курсу НБУ.',
    'convAmount': 'Сумма', 'convFrom': 'Из валюты', 'convTo': 'В валюту', 'convSwap': 'Поменять валюты местами',
    'convQuick': 'Частые суммы подписок', 'convEnterAmount': 'Введите сумму', 'convNoRate': 'Нет курса выбранной валюты',
    'convNote': 'Официальный курс НБУ, без комиссий. Это не цена покупки или продажи валюты.',
    'convOther': 'Другие валюты НБУ', 'convBanner': 'Пересчитать подписку в свою валюту', 'collapseBlock': 'Свернуть блок', 'expandBlock': 'Развернуть блок',
    'cur.UAH': 'Гривна', 'cur.USD': 'Доллар США', 'cur.EUR': 'Евро', 'cur.PLN': 'Польский злотый', 'cur.GBP': 'Фунт стерлингов',
    'searchTitle': 'Найдите свой инструмент', 'searchSub': 'Поиск по нейросетям и фильтры',
    'searchPlaceholder': 'Название модели или сервиса', 'findBtn': 'Найти',
    'filterLang': 'Язык интерфейса', 'filterFree': 'Бесплатный тариф', 'filterPlatform': 'Платформа',
    'optAny': 'Любой', 'optRu': 'Русский', 'optUk': 'Украинский',
    'optFreeYes': 'Есть бесплатный', 'optAnyF': 'Любая', 'optWeb': 'Веб',
    'searchNote': 'Фильтры показывают только модели с подтверждёнными данными.',
    'catEyebrow': 'Исследуйте по направлениям', 'catTitle': 'Категории',
    'catSub': 'Выберите задачу — найдите подходящий инструмент.',
    'catNum': 'КАТАЛОГ', 'secNum': 'РАЗДЕЛ',
    'weekEyebrow': 'В центре внимания', 'weekTitle': 'На этой неделе',
    'featWeek': 'Модель недели', 'featWeekNone': 'Подборка ещё не готова',
    'featWeekText': 'Здесь появится выбранная модель, когда будут подтверждены данные.',
    'featTop': 'Топ недели', 'featTopNone': 'Пока нет данных',
    'featTopText': 'Не составляем рейтинг без подтверждённых оснований.',
    'newEyebrow': 'Что нового', 'newTitle': 'Следите за изменениями',
    'pulseLabel': 'Цены', 'pulseTitle': 'Пульс цен',
    'pulseText': 'Для сравнения за неделю нужны подтверждённые данные за разные даты.',
    'toPrices': 'К ценам ↗',
    'newsLabel': 'Новости', 'newsTitle': 'Официальные новости',
    'newsText': 'Файл новостей пока не предоставлен.', 'toNews': 'К новостям ↗',
    'offersLabel': 'Предложения', 'offersTitle': 'Текущие акции',
    'offersText': 'Файл акций пока не предоставлен.', 'pulseRates': 'Курс НБУ на сегодня:', 'toOffers': 'К акциям ↗',
    'stubEyebrow': 'НейроАфина / раздел в разработке',
    'stubTitle': 'Раздел ещё готовится',
    'stubText': 'Содержимое и функции появятся на следующих этапах после проверки данных.',
    'toTop': 'Наверх', 'langLabel': 'Язык интерфейса',
    'citySuffix': ' · Киев',
    'pricesIntro': 'Все модели каталога и их цены по странам. Украина — первая.',
    'filterAll': 'Все категории',
    'filterCatLabel': 'Фильтр по категориям',
    'pricesSearchPh': 'Название модели',
    'colModel': 'Модель',
    'colCategory': 'Категория',
    'colCheapest': 'Выгоднее всего',
    'noPrice': 'официальной цены нет',
    'foundCount': 'Найдено моделей: {n}',
    'noModelsFound': 'По этим фильтрам ничего не найдено.',
    'offersIntro': 'Предложения из файла куратора — продукт, суть, срок и ссылка на официальный источник.',
    'offersEmpty': 'Сейчас здесь пусто. Предложения обновляются каждый день.',
    'offersLoading': 'Загружаем предложения…',
    'offersLoadFail': 'Не удалось загрузить предложения. Попробуйте позже.',
    'offerUntil': 'Срок: {v}',
    'offerOpen': 'Открыть предложение ↗',
    'freeIntro': 'Модели с бесплатным тарифом или пробным периодом — что бесплатно и на каких условиях.',
    'compareIntro': 'Сравните 2–4 модели по ценам, условиям и возможностям — прямо из данных каталога.',
    'compareSelected': 'Выбрано: {n} из 4',
    'compareAdd': 'Добавить',
    'compareAdded': 'Добавлено',
    'compareRemove': 'Убрать',
    'compareLimit': 'В сравнении уже 4 модели. Уберите одну, чтобы добавить другую.',
    'pickTwo': 'Выберите 2–4 модели из списка, чтобы построить сравнение.',
    'pickMore': 'Выбрана 1 модель. Выберите ещё одну, чтобы построить сравнение.',
    'rowEssence': 'Суть',
    'rowFlagship': 'Флагманская модель',
    'noData': 'нет данных',
    'langYes': 'Подтверждено',
    'langNo': 'Нет',
    'compareTableLabel': 'Таблица сравнения',
    'newsIntro': 'Новости из файла куратора — новые сверху.',
    'newsEmpty': 'Новостей пока нет. Новости обновляются автоматически каждый день.',
    'newsLoading': 'Загружаем новости…',
    'newsLoadFail': 'Не удалось загрузить новости. Попробуйте позже.',
    'newsSource': 'Источник ↗',
    'newsViewGrid': 'Сетка', 'newsViewList': 'Список',
    'calendarIntro': 'Запланированные релизы из файла новостей — по месяцам.',
    'calendarEmpty': 'Запланированных релизов в данных пока нет.',
    'ratingsIntro': 'Модели каждой категории — по оценке пользователей, от высокой к низкой. Источник оценок: G2, ноябрь 2026 г.',
    'ratingsEmpty': 'Оценок пользователей пока нет — куратор собирает первые данные.',
    'choiceIntro': 'Лучшие модели всего каталога по оценке пользователей. Источник оценок: G2, ноябрь 2026 г.',
    'placeLine': 'Место: {n}',
    'authSignIn': 'Войти через Google',
    'authPending': 'Вход будет подключён при размещении сайта.',
    'authLoadFail': 'Не удалось загрузить вход Google. Попробуйте позже.',
    'authSignOut': 'Выйти',
    'favOnly': '★ Избранное',
    'favTitle': 'Избранное',
    'favEmpty': 'Пока ничего не отмечено. Нажмите звезду на карточке модели.',
    'favAdd': 'В избранное',
    'favRemove': 'Убрать из избранного',
    'presetTitle': 'Пресеты сравнений',
    'presetNamePh': 'Название пресета',
    'presetSave': 'Сохранить сравнение',
    'presetOpen': 'Открыть',
    'presetDelete': 'Удалить',
    'presetEmpty': 'Сохранённых пресетов пока нет.',
    'presetNeedModels': 'Выберите хотя бы одну модель.',
    'presetSaved': 'Пресет сохранён.',
    'presetDefault': 'Пресет {n}',
    'adminBar': 'Режим администратора',
    'adminDownload': 'Скачать обновлённые файлы данных',
    'adminReset': 'Сбросить правки',
    'adminSaved': 'Правки сохранены.',
    'adminEditTitle': 'Правки администратора',
    'adminSave': 'Сохранить правки',
    'adminResetDone': 'Правки сброшены.',
    'adminNote': 'Правки хранятся на этом устройстве до выгрузки. Файлы комплекта не меняются.',
    'plural': ['позиция', 'позиции', 'позиций'], 'catalogOf': 'Каталог / {n} {w}'
  },
  uk: {
    'page.home': 'Головна', 'page.chats': 'Загальні чати', 'page.images': 'Картинки',
    'page.video': 'Відео', 'page.audio': 'Звук', 'page.code': 'Код',
    'page.agents': 'Агенти', 'page.local': 'Локальні моделі', 'page.prices': 'Ціни',
    'page.offers': 'Акції', 'page.discounts': 'Знижки', 'page.coupons': 'Купони',
    'page.news': 'Новини', 'page.compare': 'Конструктор порівнянь',
    'page.free': 'Безкоштовне і проби', 'page.rankings': 'Рейтинги за задачами',
    'page.calendar': 'Календар релізів', 'page.community': 'Вибір користувачів', 'page.converter': 'Конвертер валют',
    'desc.chats': 'Універсальні помічники', 'desc.images': 'Генерація та обробка',
    'desc.video': 'Створення відео', 'desc.audio': 'Голос і музика',
    'desc.code': 'Помічники розробника', 'desc.agents': 'Автономні інструменти',
    'desc.local': 'Робота на власному пристрої',
    'desc.prices': 'Усі ціни за країнами', 'desc.offers': 'Акції сервісів',
    'desc.discounts': 'Знижки та розпродажі', 'desc.coupons': 'Промокоди й купони',
    'desc.news': 'Головне зі світу ШІ', 'desc.compare': 'Порівняння моделей',
    'desc.free': 'Безкоштовне та проби', 'desc.rankings': 'Рейтинги за задачами',
    'desc.calendar': 'Календар релізів', 'desc.community': 'Вибір користувачів', 'desc.converter': 'Підписка у вашій валюті',
    'skip': 'Перейти до змісту', 'brandTag': 'НАВІГАТОР СВІТОМ ШІ',
    'navCatalog': 'Каталог', 'navPrices': 'Ціни', 'navCompare': 'Порівняння', 'navNews': 'Новини',
    'menuAll': 'Всі розділи',
    'footerTag': 'Всі нейромережі. Всі ціни. Всі новини.',
    'footerNote': 'Непідтверджені дані не публікуються.',
    'footerAnim': 'Анімація Землі:',
    'metaDesc': 'НейроАфіна — каталог нейромереж, цін і новин.',
    'dateUnavailable': 'Дату недоступно',
    'notConfirmed': 'Не підтверджено', 'yes': 'Так', 'no': 'Ні',
    'freeYes': 'Є; умови не підтверджено', 'freeNo': 'Немає (за даними каталогу)',
    'badgeFree': 'Є безкоштовний', 'badgeRu': 'Російська є', 'badgeUk': 'Українська є',
    'priceUA': 'Україна', 'priceUS': 'США', 'priceEU': 'Європа',
    'cheapest': 'Найвигідніше за даними каталогу: {v}. Порівнянність тарифів та умови потребують перевірки.',
    'priceFileTitle': 'Дані з файлу цін куратора',
    'priceFileNote': 'Суми та умови наведено як у файлі. Валюта або згадана країна не означають підтверджену ціну для України.',
    'checkedOn': 'перевірено: {v}', 'checkUnconfirmed': 'перевірку не підтверджено',
    'perMonth': ' / міс.', 'perYear': ' / рік', 'perMonthUAH': ' ₴ / міс.', 'priceFileTag': '(файл цін, {v})',
    'official': 'Офіційний сайт ↗', 'officialMissing': 'Офіційну адресу не підтверджено',
    'details': 'Докладніше', 'collapse': 'Згорнути',
    'whatIs': 'Що це і чим сильна', 'modelOrVersion': 'Модель або версія',
    'pricesTitle': 'Ціни за даними куратора',
    'termsTitle': 'Умови та доступність',
    'fldFree': 'Безкоштовний тариф', 'fldTrial': 'Пробний період',
    'cardNeeded': 'Чи потрібна картка: не підтверджено',
    'fldRu': 'Російська мова інтерфейсу', 'fldUk': 'Українська мова інтерфейсу',
    'fldPlatforms': 'Платформи', 'fldRating': 'Оцінка користувачів',
    'expTitle': 'Досвід користувачів', 'fldPros': 'Плюси', 'fldCons': 'Мінуси', 'fldBugs': 'Баги та обмеження',
    'checkedLine': 'Дата перевірки даних у каталозі: {v}',
    'notConfirmedList': 'Не підтверджено: {v}',
    'fldStrength': 'опис', 'fldFlagship': 'модель або версія',
    'fldPriceUA': 'ціна для України', 'fldPriceUS': 'ціна для США', 'fldPriceEU': 'ціна для Європи',
    'fldChecked': 'дата перевірки',
    'backHome': '← На головну',
    'catalogUnavailable': 'Каталог недоступний', 'checkFile': 'Перевірте файл data/catalog.js.',
    'catalogNotice': 'Відомості та ціни наведено з файлів куратора; непідтверджені поля позначено. Наявність сервісу та умови можуть відрізнятися за країнами.',
    'indexLabel': 'Моделі розділу:',
    'found': 'Знайдено: {n}. Фільтри враховують лише підтверджені значення.',
    'noMatches': 'Збігів немає. Для багатьох моделей мову та платформи поки не підтверджено.',
    'heroEyebrow': 'Ваш навігатор у світі штучного інтелекту',
    'heroTag': 'Всі нейромережі. Всі ціни. Всі новини.',
    'openCatalog': 'Відкрити каталог ↓', 'compareModels': 'Порівняти моделі ↗',
    'ratesTitle': 'Курс НБУ', 'refreshRates': 'Оновити курси',
    'ratesLoading': 'Завантажуємо дані НБУ…',
    'ratesFail': 'Не вдалося отримати курс НБУ. Спробуйте пізніше.',
    'ratesOn': 'Курс на {v} · джерело НБУ',
    'converterIntro': 'Скільки коштує підписка у ваших грошах? Введіть суму, оберіть валюти — перерахуємо за офіційним курсом НБУ.',
    'convAmount': 'Сума', 'convFrom': 'З валюти', 'convTo': 'У валюту', 'convSwap': 'Поміняти валюти місцями',
    'convQuick': 'Часті суми підписок', 'convEnterAmount': 'Введіть суму', 'convNoRate': 'Немає курсу обраної валюти',
    'convNote': 'Офіційний курс НБУ, без комісій. Це не ціна купівлі чи продажу валюти.',
    'convOther': 'Інші валюти НБУ', 'convBanner': 'Перерахувати підписку у свою валюту', 'collapseBlock': 'Згорнути блок', 'expandBlock': 'Розгорнути блок',
    'cur.UAH': 'Гривня', 'cur.USD': 'Долар США', 'cur.EUR': 'Євро', 'cur.PLN': 'Польський злотий', 'cur.GBP': 'Фунт стерлінгів',
    'searchTitle': 'Знайдіть свій інструмент', 'searchSub': 'Пошук нейромереж і фільтри',
    'searchPlaceholder': 'Назва моделі або сервісу', 'findBtn': 'Знайти',
    'filterLang': 'Мова інтерфейсу', 'filterFree': 'Безкоштовний тариф', 'filterPlatform': 'Платформа',
    'optAny': 'Будь-яка', 'optRu': 'Російська', 'optUk': 'Українська',
    'optFreeYes': 'Є безкоштовний', 'optAnyF': 'Будь-яка', 'optWeb': 'Веб',
    'searchNote': 'Фільтри показують лише моделі з підтвердженими даними.',
    'catEyebrow': 'Досліджуйте за напрямами', 'catTitle': 'Категорії',
    'catSub': 'Оберіть задачу — знайдіть потрібний інструмент.',
    'catNum': 'КАТАЛОГ', 'secNum': 'РОЗДІЛ',
    'weekEyebrow': 'У центрі уваги', 'weekTitle': 'Цього тижня',
    'featWeek': 'Модель тижня', 'featWeekNone': 'Добірки ще немає',
    'featWeekText': 'Тут з’явиться обрана модель, коли буде підтверджено дані.',
    'featTop': 'Топ тижня', 'featTopNone': 'Поки немає даних',
    'featTopText': 'Не складаємо рейтинг без підтверджених підстав.',
    'newEyebrow': 'Що нового', 'newTitle': 'Стежте за змінами',
    'pulseLabel': 'Ціни', 'pulseTitle': 'Пульс цін',
    'pulseText': 'Для порівняння за тиждень потрібні підтверджені дані за різні дати.',
    'toPrices': 'До цін ↗',
    'newsLabel': 'Новини', 'newsTitle': 'Офіційні новини',
    'newsText': 'Файл новин поки не надано.', 'toNews': 'До новин ↗',
    'offersLabel': 'Пропозиції', 'offersTitle': 'Поточні акції',
    'offersText': 'Файл акцій поки не надано.', 'pulseRates': 'Курс НБУ на сьогодні:', 'toOffers': 'До акцій ↗',
    'stubEyebrow': 'НейроАфіна / розділ у розробці',
    'stubTitle': 'Розділ ще готується',
    'stubText': 'Вміст і функції з’являться на наступних етапах після перевірки даних.',
    'toTop': 'Нагору', 'langLabel': 'Мова інтерфейсу',
    'citySuffix': ' · Київ',
    'pricesIntro': 'Усі моделі каталогу та їхні ціни за країнами. Україна — перша.',
    'filterAll': 'Всі категорії',
    'filterCatLabel': 'Фільтр за категоріями',
    'pricesSearchPh': 'Назва моделі',
    'colModel': 'Модель',
    'colCategory': 'Категорія',
    'colCheapest': 'Найвигідніше',
    'noPrice': 'офіційної ціни немає',
    'foundCount': 'Знайдено моделей: {n}',
    'noModelsFound': 'За цими фільтрами нічого не знайдено.',
    'offersIntro': 'Пропозиції з файлу куратора — продукт, суть, термін і посилання на офіційне джерело.',
    'offersEmpty': 'Зараз тут порожньо. Пропозиції оновлюються щодня.',
    'offersLoading': 'Завантажуємо пропозиції…',
    'offersLoadFail': 'Не вдалося завантажити пропозиції. Спробуйте пізніше.',
    'offerUntil': 'Термін: {v}',
    'offerOpen': 'Відкрити пропозицію ↗',
    'freeIntro': 'Моделі з безкоштовним тарифом або пробним періодом — що безкоштовно і на яких умовах.',
    'compareIntro': 'Порівняйте 2–4 моделі за цінами, умовами та можливостями — просто з даних каталогу.',
    'compareSelected': 'Вибрано: {n} з 4',
    'compareAdd': 'Додати',
    'compareAdded': 'Додано',
    'compareRemove': 'Прибрати',
    'compareLimit': 'У порівнянні вже 4 моделі. Приберіть одну, щоб додати іншу.',
    'pickTwo': 'Виберіть 2–4 моделі зі списку, щоб побудувати порівняння.',
    'pickMore': 'Вибрано 1 модель. Виберіть ще одну, щоб побудувати порівняння.',
    'rowEssence': 'Суть',
    'rowFlagship': 'Флагманська модель',
    'noData': 'немає даних',
    'langYes': 'Підтверджено',
    'langNo': 'Немає',
    'compareTableLabel': 'Таблиця порівняння',
    'newsIntro': 'Новини з файлу куратора — нові зверху.',
    'newsEmpty': 'Новин поки немає. Новини оновлюються автоматично щодня.',
    'newsLoading': 'Завантажуємо новини…',
    'newsLoadFail': 'Не вдалося завантажити новини. Спробуйте пізніше.',
    'newsSource': 'Джерело ↗',
    'newsViewGrid': 'Сітка', 'newsViewList': 'Список',
    'calendarIntro': 'Заплановані релізи з файлу новин — за місяцями.',
    'calendarEmpty': 'Запланованих релізів у даних поки немає.',
    'ratingsIntro': 'Моделі кожної категорії — за оцінкою користувачів, від високої до низької. Джерело оцінок: G2, листопад 2026 р.',
    'ratingsEmpty': 'Оцінок користувачів поки немає — куратор збирає перші дані.',
    'choiceIntro': 'Найкращі моделі всього каталогу за оцінкою користувачів. Джерело оцінок: G2, листопад 2026 р.',
    'placeLine': 'Місце: {n}',
    'authSignIn': 'Увійти через Google',
    'authPending': 'Вхід буде підключено під час розміщення сайту.',
    'authLoadFail': 'Не вдалося завантажити вхід Google. Спробуйте пізніше.',
    'authSignOut': 'Вийти',
    'favOnly': '★ Обране',
    'favTitle': 'Обране',
    'favEmpty': 'Поки нічого не позначено. Натисніть зірку на картці моделі.',
    'favAdd': 'В обране',
    'favRemove': 'Прибрати з обраного',
    'presetTitle': 'Пресети порівнянь',
    'presetNamePh': 'Назва пресету',
    'presetSave': 'Зберегти порівняння',
    'presetOpen': 'Відкрити',
    'presetDelete': 'Видалити',
    'presetEmpty': 'Збережених пресетів поки немає.',
    'presetNeedModels': 'Виберіть хоча б одну модель.',
    'presetSaved': 'Пресет збережено.',
    'presetDefault': 'Пресет {n}',
    'adminBar': 'Режим адміністратора',
    'adminDownload': 'Завантажити оновлені файли даних',
    'adminReset': 'Скинути правки',
    'adminSaved': 'Правки збережено.',
    'adminEditTitle': 'Правки адміністратора',
    'adminSave': 'Зберегти правки',
    'adminResetDone': 'Правки скинуто.',
    'adminNote': 'Правки зберігаються на цьому пристрої до вивантаження. Файли комплекту не змінюються.',
    'plural': ['позиція', 'позиції', 'позицій'], 'catalogOf': 'Каталог / {n} {w}'
  },
  en: {
    'page.home': 'Home', 'page.chats': 'General chats', 'page.images': 'Images',
    'page.video': 'Video', 'page.audio': 'Audio', 'page.code': 'Code',
    'page.agents': 'Agents', 'page.local': 'Local models', 'page.prices': 'Prices',
    'page.offers': 'Deals', 'page.discounts': 'Discounts', 'page.coupons': 'Coupons',
    'page.news': 'News', 'page.compare': 'Comparison builder',
    'page.free': 'Free & trials', 'page.rankings': 'Task ratings',
    'page.calendar': 'Release calendar', 'page.community': 'Community picks', 'page.converter': 'Currency converter',
    'desc.chats': 'General-purpose assistants', 'desc.images': 'Generation & editing',
    'desc.video': 'Video creation', 'desc.audio': 'Voice & music',
    'desc.code': 'Developer assistants', 'desc.agents': 'Autonomous tools',
    'desc.local': 'Run on your own device',
    'desc.prices': 'All prices by country', 'desc.offers': 'Service promotions',
    'desc.discounts': 'Discounts & sales', 'desc.coupons': 'Promo codes & coupons',
    'desc.news': 'Top AI news', 'desc.compare': 'Model comparison',
    'desc.free': 'Free tiers & trials', 'desc.rankings': 'Rankings by task',
    'desc.calendar': 'Release calendar', 'desc.community': 'Users\' choice', 'desc.converter': 'Subscriptions in your currency',
    'skip': 'Skip to content', 'brandTag': 'NAVIGATOR OF THE AI WORLD',
    'navCatalog': 'Catalog', 'navPrices': 'Prices', 'navCompare': 'Compare', 'navNews': 'News',
    'menuAll': 'All sections',
    'footerTag': 'All neural networks. All prices. All news.',
    'footerNote': 'Unconfirmed data is not published.',
    'footerAnim': 'Earth animation:',
    'metaDesc': 'NeuroAthena — a catalog of neural networks, prices and news.',
    'dateUnavailable': 'Date unavailable',
    'notConfirmed': 'Not confirmed', 'yes': 'Yes', 'no': 'No',
    'freeYes': 'Available; terms not confirmed', 'freeNo': 'No (per catalog data)',
    'badgeFree': 'Free plan', 'badgeRu': 'Russian available', 'badgeUk': 'Ukrainian available',
    'priceUA': 'Ukraine', 'priceUS': 'USA', 'priceEU': 'Europe',
    'cheapest': 'Cheapest per catalog data: {v}. Tariff comparability and terms need checking.',
    'priceFileTitle': 'Data from the curator price file',
    'priceFileNote': 'Amounts and terms are shown as in the file. A currency or a mentioned country does not mean a confirmed price for Ukraine.',
    'checkedOn': 'checked: {v}', 'checkUnconfirmed': 'check not confirmed',
    'perMonth': ' / mo.', 'perYear': ' / yr.', 'perMonthUAH': ' ₴ / mo.', 'priceFileTag': '(price file, {v})',
    'official': 'Official website ↗', 'officialMissing': 'Official URL not confirmed',
    'details': 'Details', 'collapse': 'Collapse',
    'whatIs': 'What it is and what it does best', 'modelOrVersion': 'Model or version',
    'pricesTitle': 'Prices per curator data',
    'termsTitle': 'Terms & availability',
    'fldFree': 'Free plan', 'fldTrial': 'Trial period',
    'cardNeeded': 'Card required: not confirmed',
    'fldRu': 'Russian UI', 'fldUk': 'Ukrainian UI',
    'fldPlatforms': 'Platforms', 'fldRating': 'User rating',
    'expTitle': 'User experience', 'fldPros': 'Pros', 'fldCons': 'Cons', 'fldBugs': 'Bugs & limits',
    'checkedLine': 'Catalog data checked on: {v}',
    'notConfirmedList': 'Not confirmed: {v}',
    'fldStrength': 'description', 'fldFlagship': 'model or version',
    'fldPriceUA': 'price for Ukraine', 'fldPriceUS': 'price for the USA', 'fldPriceEU': 'price for Europe',
    'fldChecked': 'check date',
    'backHome': '← Home',
    'catalogUnavailable': 'Catalog unavailable', 'checkFile': 'Check the data/catalog.js file.',
    'catalogNotice': 'Details and prices come from the curator files; unconfirmed fields are marked. Availability and terms may vary by country.',
    'indexLabel': 'Models in this section:',
    'found': 'Found: {n}. Filters use confirmed values only.',
    'noMatches': 'No matches. For many models, language and platforms are not confirmed yet.',
    'heroEyebrow': 'Your navigator in the world of artificial intelligence',
    'heroTag': 'All neural networks. All prices. All news.',
    'openCatalog': 'Open the catalog ↓', 'compareModels': 'Compare models ↗',
    'ratesTitle': 'NBU rate', 'refreshRates': 'Refresh rates',
    'ratesLoading': 'Loading NBU data…',
    'ratesFail': 'Could not get the NBU rate. Try again later.',
    'ratesOn': 'Rate for {v} · source: NBU',
    'converterIntro': 'What does a subscription cost in your money? Enter an amount, pick the currencies — we convert at the official NBU rate.',
    'convAmount': 'Amount', 'convFrom': 'From', 'convTo': 'To', 'convSwap': 'Swap currencies',
    'convQuick': 'Common subscription amounts', 'convEnterAmount': 'Enter an amount', 'convNoRate': 'No rate for the selected currency',
    'convNote': 'Official NBU rate, no fees. This is not a buy or sell price.',
    'convOther': 'Other NBU currencies', 'convBanner': 'Convert a subscription into your currency', 'collapseBlock': 'Collapse section', 'expandBlock': 'Expand section',
    'cur.UAH': 'Ukrainian hryvnia', 'cur.USD': 'US dollar', 'cur.EUR': 'Euro', 'cur.PLN': 'Polish złoty', 'cur.GBP': 'British pound',
    'searchTitle': 'Find your tool', 'searchSub': 'Search neural networks and filters',
    'searchPlaceholder': 'Model or service name', 'findBtn': 'Search',
    'filterLang': 'Interface language', 'filterFree': 'Free plan', 'filterPlatform': 'Platform',
    'optAny': 'Any', 'optRu': 'Russian', 'optUk': 'Ukrainian',
    'optFreeYes': 'Has a free plan', 'optAnyF': 'Any', 'optWeb': 'Web',
    'searchNote': 'Filters show only models with confirmed data.',
    'catEyebrow': 'Explore by task', 'catTitle': 'Categories',
    'catSub': 'Pick a task — find the right tool.',
    'catNum': 'CATALOG', 'secNum': 'SECTION',
    'weekEyebrow': 'In the spotlight', 'weekTitle': 'This week',
    'featWeek': 'Model of the week', 'featWeekNone': 'No pick yet',
    'featWeekText': 'The chosen model will appear here once its data is confirmed.',
    'featTop': 'Top of the week', 'featTopNone': 'No data yet',
    'featTopText': 'We do not rank without confirmed grounds.',
    'newEyebrow': 'What is new', 'newTitle': 'Follow the changes',
    'pulseLabel': 'Prices', 'pulseTitle': 'Price pulse',
    'pulseText': 'Comparing a week needs confirmed data for different dates.',
    'toPrices': 'To prices ↗',
    'newsLabel': 'News', 'newsTitle': 'Official news',
    'newsText': 'The news file has not been provided yet.', 'toNews': 'To news ↗',
    'offersLabel': 'Offers', 'offersTitle': 'Current deals',
    'offersText': 'The deals file has not been provided yet.', 'pulseRates': "Today's NBU rate:", 'toOffers': 'To deals ↗',
    'stubEyebrow': 'NeuroAthena / section in progress',
    'stubTitle': 'This section is still being prepared',
    'stubText': 'Content and features will appear in later stages after the data is checked.',
    'toTop': 'Back to top', 'langLabel': 'Interface language',
    'citySuffix': ' · Kyiv',
    'pricesIntro': 'Every catalog model and its prices by country. Ukraine first.',
    'filterAll': 'All categories',
    'filterCatLabel': 'Filter by category',
    'pricesSearchPh': 'Model name',
    'colModel': 'Model',
    'colCategory': 'Category',
    'colCheapest': 'Cheapest',
    'noPrice': 'no official price',
    'foundCount': 'Models found: {n}',
    'noModelsFound': 'Nothing matches these filters.',
    'offersIntro': 'Offers from the curator file — product, terms, validity and a link to the official source.',
    'offersEmpty': 'Nothing here right now. Offers are updated every day.',
    'offersLoading': 'Loading offers…',
    'offersLoadFail': 'Could not load the offers. Try again later.',
    'offerUntil': 'Valid until: {v}',
    'offerOpen': 'Open the offer ↗',
    'freeIntro': 'Models with a free plan or a trial period — what is free and on what terms.',
    'compareIntro': 'Compare 2–4 models by price, terms and capabilities — straight from the catalog data.',
    'compareSelected': 'Selected: {n} of 4',
    'compareAdd': 'Add',
    'compareAdded': 'Added',
    'compareRemove': 'Remove',
    'compareLimit': 'The comparison already has 4 models. Remove one to add another.',
    'pickTwo': 'Pick 2–4 models from the list to build the comparison.',
    'pickMore': '1 model selected. Pick one more to build the comparison.',
    'rowEssence': 'Essence',
    'rowFlagship': 'Flagship model',
    'noData': 'no data',
    'langYes': 'Confirmed',
    'langNo': 'No',
    'compareTableLabel': 'Comparison table',
    'newsIntro': 'News from the curator file — newest first.',
    'newsEmpty': 'No news yet. News is updated automatically every day.',
    'newsLoading': 'Loading news…',
    'newsLoadFail': 'Could not load the news. Try again later.',
    'newsSource': 'Source ↗',
    'newsViewGrid': 'Grid', 'newsViewList': 'List',
    'calendarIntro': 'Planned releases from the news file — by month.',
    'calendarEmpty': 'No planned releases in the data yet.',
    'ratingsIntro': 'Models in each category — by user rating, from high to low. Rating source: G2, November 2026.',
    'ratingsEmpty': 'No user ratings yet — the curator is collecting the first data.',
    'choiceIntro': 'The best models in the whole catalog by user rating. Rating source: G2, November 2026.',
    'placeLine': 'Place: {n}',
    'authSignIn': 'Sign in with Google',
    'authPending': 'Sign-in will be connected when the site is deployed.',
    'authLoadFail': 'Could not load Google sign-in. Try again later.',
    'authSignOut': 'Sign out',
    'favOnly': '★ Favorites',
    'favTitle': 'Favorites',
    'favEmpty': 'Nothing marked yet. Tap the star on a model card.',
    'favAdd': 'Add to favorites',
    'favRemove': 'Remove from favorites',
    'presetTitle': 'Comparison presets',
    'presetNamePh': 'Preset name',
    'presetSave': 'Save comparison',
    'presetOpen': 'Open',
    'presetDelete': 'Delete',
    'presetEmpty': 'No saved presets yet.',
    'presetNeedModels': 'Select at least one model.',
    'presetSaved': 'Preset saved.',
    'presetDefault': 'Preset {n}',
    'adminBar': 'Admin mode',
    'adminDownload': 'Download updated data files',
    'adminReset': 'Reset edits',
    'adminSaved': 'Edits saved.',
    'adminEditTitle': 'Admin edits',
    'adminSave': 'Save edits',
    'adminResetDone': 'Edits reset.',
    'adminNote': 'Edits are stored on this device until export. The kit files are not changed.',
    'plural': ['item', 'items'], 'catalogOf': 'Catalog / {n} {w}'
  }
};
let lang = 'ru';
try { const saved = localStorage.getItem('neuroatlas-lang'); if (saved && I18N[saved]) lang = saved; } catch (e) {}
const t = k => (I18N[lang] && I18N[lang][k] !== undefined ? I18N[lang][k] : I18N.ru[k] !== undefined ? I18N.ru[k] : k);
const tr = (k, vars) => { let s = String(t(k)); for (const key in vars) s = s.replace('{' + key + '}', vars[key]); return s; };
function plural(n) {
  const forms = t('plural');
  if (lang === 'en') return n === 1 ? forms[0] : forms[1];
  const a = Math.abs(n) % 10, b = Math.abs(n) % 100;
  if (a === 1 && b !== 11) return forms[0];
  if (a >= 2 && a <= 4 && (b < 12 || b > 14)) return forms[1];
  return forms[2];
}
const pageName = id => t('page.' + id);
const brandName = () => lang === 'uk' ? 'НейроАфіна' : lang === 'en' ? 'NeuroAthena' : 'НейроАфина';
const pageIds = ['home', 'chats', 'images', 'video', 'audio', 'code', 'agents', 'local', 'prices', 'converter', 'offers', 'discounts', 'coupons', 'news', 'compare', 'free', 'rankings', 'calendar', 'community'];
const categories = pageIds.slice(1, 8);

/* ---------- Этап 6: перевод содержимого (механизм) ---------- */
/* Есть перевод поля на выбранном языке — показываем перевод; нет — русский текст как сейчас. */
function locText(obj, base, uk, en) {
  if (!obj) return '';
  if (lang === 'uk' && obj[uk]) return obj[uk];
  if (lang === 'en' && obj[en]) return obj[en];
  return obj[base] || '';
}
function locPrice(p, key) {
  if (!p) return null;
  if (lang === 'uk' && p[key + '_uk']) return p[key + '_uk'];
  if (lang === 'en' && p[key + '_en']) return p[key + '_en'];
  return p[key] || null;
}

/* ---------- Этап 6: вход Google, избранное, пресеты, правки админа (localStorage) ---------- */
const ADMIN_EMAIL = 'Pitbuller1@gmail.com';
let authUser = null;
try { const s = localStorage.getItem('neuroatlas-auth'); if (s) authUser = JSON.parse(s); } catch (e) { authUser = null; }
function isAdmin() { return !!(authUser && authUser.email === ADMIN_EMAIL); }
function storeGet(key, fallback) { try { const v = JSON.parse(localStorage.getItem(key) || 'null'); return v === null || v === undefined ? fallback : v; } catch (e) { return fallback; } }
function storeSet(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {} }
const FAV_KEY = 'neuroatlas-favs', PRESET_KEY = 'neuroatlas-compare-presets', EDIT_KEY = 'neuroatlas-admin-edits';
function loadFavs() { const a = storeGet(FAV_KEY, []); return Array.isArray(a) ? a : []; }
function isFav(key) { return loadFavs().includes(key); }
function toggleFav(key) { const a = loadFavs(); const i = a.indexOf(key); if (i >= 0) a.splice(i, 1); else a.push(key); storeSet(FAV_KEY, a); return a.includes(key); }
function loadPresets() { const a = storeGet(PRESET_KEY, []); return Array.isArray(a) ? a : []; }
function loadEdits() { const o = storeGet(EDIT_KEY, {}); return o && typeof o === 'object' ? o : {}; }
/* Модель с правками админа (базовые поля) — для выгрузки и для показа. */
function rawEditedModel(cat, m) {
  const e = loadEdits()[cat + '--' + m.id];
  if (!e) return m;
  const out = { ...m, prices: { ...(m.prices || {}) } };
  if (e.strength !== undefined) out.strength = e.strength;
  if (e.flagship !== undefined) out.flagship = e.flagship;
  if (e.free !== undefined) out.free = e.free;
  if (e.trial !== undefined) out.trial = e.trial;
  if (e.prices) Object.assign(out.prices, e.prices);
  return out;
}
/* Модель для показа: правки админа + перевод содержимого на выбранном языке. */
function displayModel(cat, m) {
  const e = rawEditedModel(cat, m);
  const out = { ...e, prices: { ...(e.prices || {}) } };
  out.strength = locText(e, 'strength', 'essence_uk', 'essence_en');
  out.flagship = locText(e, 'flagship', 'flagship_uk', 'flagship_en');
  for (const k of ['UA', 'US', 'EU', 'cheapest']) out.prices[k] = locPrice(e.prices, k);
  return out;
}
/* Выгрузка: catalog.json с правками; prices.json — файл подписок, в нём правок моделей нет. */
function buildCatalogExport() {
  const copy = JSON.parse(JSON.stringify(catalog));
  const edits = loadEdits();
  for (const [key, e] of Object.entries(edits)) {
    const i = key.indexOf('--'); if (i < 0) continue;
    const cat = key.slice(0, i), id = key.slice(i + 2);
    const group = copy.categories?.[cat]; if (!group) continue;
    const m = (group.models || []).find(x => x.id === id); if (!m) continue;
    if (e.strength !== undefined) m.strength = e.strength;
    if (e.flagship !== undefined) m.flagship = e.flagship;
    if (e.free !== undefined) m.free = e.free;
    if (e.trial !== undefined) m.trial = e.trial;
    if (e.prices) { m.prices = { ...(m.prices || {}) }; Object.assign(m.prices, e.prices); }
  }
  return JSON.stringify(copy, null, 2);
}
function buildPricesExport() { return JSON.stringify(priceFile, null, 2); }
function downloadJson(filename, text) {
  const blob = new Blob([text], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

/* ---------- Статика шапки/подвала и меню ---------- */
const main = document.querySelector('#main'), nav = document.querySelector('#allNav'),
  menu = document.querySelector('#menu'), button = document.querySelector('#menuButton'),
  backdrop = document.querySelector('#menuBackdrop'), closeBtn = document.querySelector('#menuClose');
function buildNav() { nav.innerHTML = pageIds.map((id, i) => `<a href="#/${id}" data-page="${id}"><span class="nav-num">${String(i + 1).padStart(2, '0')}</span>${esc(pageName(id))}</a>`).join(''); markActiveNav(); }
function markActiveNav() { const cur = document.body.dataset.route || 'home'; nav.querySelectorAll('a').forEach(a => a.classList.toggle('active', a.dataset.page === cur)); }
function openMenu() { menu.hidden = false; backdrop.hidden = false; button.setAttribute('aria-expanded', 'true'); }
function closeMenu() { menu.hidden = true; backdrop.hidden = true; button.setAttribute('aria-expanded', 'false'); }
function applyStaticI18n() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content', t('metaDesc'));
  const ls = document.querySelector('.lang-switch');
  if (ls) ls.setAttribute('aria-label', t('langLabel'));
  const tt = document.getElementById('toTop');
  if (tt) tt.setAttribute('aria-label', t('toTop'));
  document.querySelectorAll('.lang-switch button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  buildNav();
  renderAuth();
  renderAdminBar();
}
function setLang(next) {
  if (!I18N[next] || next === lang) return;
  lang = next;
  try { localStorage.setItem('neuroatlas-lang', lang); } catch (e) {}
  applyStaticI18n();
  time();
  route();
}
document.querySelector('.lang-switch')?.addEventListener('click', e => {
  const b = e.target.closest('button[data-lang]');
  if (b) setLang(b.dataset.lang);
});
button.addEventListener('click', () => { menu.hidden ? openMenu() : closeMenu(); });
closeBtn.addEventListener('click', closeMenu);
backdrop.addEventListener('click', closeMenu);
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) { closeMenu(); button.focus(); } });

/* ---------- Этап 6: вход Google (Google Identity Services) ---------- */
function showToast(msg) {
  let el = document.getElementById('authToast');
  if (!el) { el = document.createElement('div'); el.id = 'authToast'; el.className = 'auth-toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
  el.textContent = msg;
  el.hidden = false;
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => { el.hidden = true; }, 5000);
}
function renderAuth() {
  const area = document.getElementById('authArea');
  if (!area) return;
  if (authUser) {
    area.innerHTML = `<span class="auth-user">${authUser.picture ? `<img src="${esc(authUser.picture)}" alt="" referrerpolicy="no-referrer">` : ''}<strong>${esc(authUser.name || authUser.email || '')}</strong><button class="auth-signout" id="authSignOut" type="button">${t('authSignOut')}</button></span>`;
    document.getElementById('authSignOut')?.addEventListener('click', signOut);
  } else {
    area.innerHTML = `<button class="auth-btn" id="authBtn" type="button"><span class="auth-full">${t('authSignIn')}</span><span class="auth-short">Google</span></button>`;
    document.getElementById('authBtn')?.addEventListener('click', onAuthClick);
  }
}
function renderAdminBar() {
  const bar = document.getElementById('adminBar');
  if (!bar) return;
  if (!isAdmin()) { bar.innerHTML = ''; bar.hidden = true; return; }
  bar.hidden = false;
  bar.innerHTML = `<span>${t('adminBar')}</span><button class="button" id="adminDownload" type="button">${t('adminDownload')}</button><button class="button" id="adminReset" type="button">${t('adminReset')}</button>`;
  document.getElementById('adminDownload')?.addEventListener('click', () => {
    downloadJson('catalog.json', buildCatalogExport());
    setTimeout(() => downloadJson('prices.json', buildPricesExport()), 300);
  });
  document.getElementById('adminReset')?.addEventListener('click', () => {
    storeSet(EDIT_KEY, {});
    showToast(t('adminResetDone'));
    route();
  });
}
function onAuthClick() {
  if (!CONFIG.GOOGLE_CLIENT_ID) { showToast(t('authPending')); return; }
  loadGis().then(() => {
    google.accounts.id.initialize({ client_id: CONFIG.GOOGLE_CLIENT_ID, callback: onGisCredential });
    google.accounts.id.prompt();
  }).catch(() => showToast(t('authLoadFail')));
}
let gisPromise = null;
function loadGis() {
  if (window.google?.accounts?.id) return Promise.resolve();
  if (gisPromise) return gisPromise;
  gisPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = 'https://accounts.google.com/gsi/client';
    s.async = true; s.defer = true;
    s.onload = resolve; s.onerror = reject;
    document.head.appendChild(s);
  });
  return gisPromise;
}
function onGisCredential(resp) {
  try {
    const payload = JSON.parse(atob(String(resp.credential).split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
    authUser = { name: payload.name || '', email: payload.email || '', picture: payload.picture || '' };
    storeSet('neuroatlas-auth', authUser);
    renderAuth(); renderAdminBar(); route();
  } catch (e) { showToast(t('authLoadFail')); }
}
function signOut() {
  authUser = null;
  try { localStorage.removeItem('neuroatlas-auth'); } catch (e) {}
  renderAuth(); renderAdminBar(); route();
}

/* ---------- Часы (Киев) ---------- */
const LOCALES = { ru: 'ru-RU', uk: 'uk-UA', en: 'en-GB' };
function time() {
  const d = new Date(), loc = LOCALES[lang] || 'ru-RU';
  const c = document.querySelector('#clock'), dt = document.querySelector('#date');
  if (c) c.textContent = new Intl.DateTimeFormat(loc, { timeZone: 'Europe/Kyiv', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(d);
  if (dt) dt.textContent = new Intl.DateTimeFormat(loc, { timeZone: 'Europe/Kyiv', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(d) + t('citySuffix');
}
time(); setInterval(time, 1000);

/* ---------- Данные (только чтение) ---------- */
const catalog = window.NEURO_CATALOG, priceFile = window.NEURO_PRICES, logos = window.NEURO_LOGOS || {};
const categoryCards = () => categories.map((id, i) => `<a class="cat illustrated-cat" href="#/${id}" style="background-image:linear-gradient(90deg,rgba(5,16,28,.95),rgba(5,16,28,.55)),url('assets/categories/${id}.webp')"><span class="cat-num">0${i + 1} / ${t('catNum')}</span><h3>${esc(pageName(id))}</h3><p>${esc(t('desc.' + id))}</p></a>`).join('');
const sectionCards = () => pageIds.slice(8).map((id, i) => `<a class="cat illustrated-cat" href="#/${id}" style="background-image:linear-gradient(90deg,rgba(5,16,28,.95),rgba(5,16,28,.55)),url('assets/backgrounds/bg-${id}.jpg')"><span class="cat-num">${String(i + 8).padStart(2, '0')} / ${t('secNum')}</span><h3>${esc(pageName(id))}</h3><p>${esc(t('desc.' + id))}</p></a>`).join('');
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const boolValue = v => v === true ? t('yes') : v === false ? t('no') : t('notConfirmed');
const textValue = v => v == null || v === '' ? t('notConfirmed') : esc(v);
const listValue = v => Array.isArray(v) && v.length ? v.map(esc).join(', ') : t('notConfirmed');
const dataItems = () => Object.entries(catalog?.categories || {}).flatMap(([cat, group]) => (group.models || []).map(m => ({ cat, m })));
const priceIds = { 'muse': ['muse'], 'chatgpt': ['chatgpt-plus'], 'claude': ['claude-pro', 'claude-max'], 'gemini': ['gemini-ai-pro', 'gemini-ai-ultra'], 'grok': ['supergrok'], 'copilot': ['copilot'], 'mistral-vibe': ['mistral'], 'deepseek': ['deepseek'], 'qwen': ['qwen'], 'kimi': ['kimi'], 'perplexity': ['perplexity-pro'], 'poe': ['poe'] };
function priceRecords(cat, m) { if (cat !== 'chats') return []; const ids = priceIds[m.id] || []; return (priceFile?.items || []).filter(p => ids.includes(p.id)); }
function uahItems(cat, m) { return priceRecords(cat, m).filter(x => x.currency === 'UAH' && typeof x.price_month === 'number' && x.checked); }

/* ---------- Цены: только подтверждённые страны ---------- */
function priceDetails(cat, m) {
  const p = m.prices || {}, items = priceRecords(cat, m), uah = uahItems(cat, m);
  const blocks = [];
  if (p.UA || uah.length) blocks.push(`<div class="price-ua"><span>${t('priceUA')}</span>${p.UA ? `<strong>${textValue(p.UA)}</strong>` : ''}${uah.map(x => `<p>${textValue(x.plan)}: <b>${esc(x.price_month)}${t('perMonthUAH')}</b> <small>${tr('priceFileTag', { v: esc(x.checked) })}</small></p>`).join('')}</div>`);
  if (p.US) blocks.push(`<div><span>${t('priceUS')}</span><p>${textValue(p.US)}</p></div>`);
  if (p.EU) blocks.push(`<div><span>${t('priceEU')}</span><p>${textValue(p.EU)}</p></div>`);
  const priceItems = items.map(x => {
    const amount = typeof x.price_month === 'number' ? `${esc(x.price_month)} ${esc(x.currency)}${t('perMonth')}` : t('notConfirmed');
    const annual = typeof x.price_year === 'number' ? ` · ${esc(x.price_year)} ${esc(x.currency)}${t('perYear')}` : '';
    return `<li><strong>${textValue(x.plan)}</strong>: ${amount}${annual}${x.note ? ` <span class="price-note">— ${esc(x.note)}</span>` : ''}${x.checked ? ` <span class="price-note">(${tr('checkedOn', { v: esc(x.checked) })})</span>` : ` <span class="price-note">(${t('checkUnconfirmed')})</span>`}</li>`;
  }).join('');
  if (!blocks.length && !priceItems) return '';
  return `${blocks.length ? `<div class="price-grid cols-${blocks.length}">${blocks.join('')}</div>` : ''}${p.cheapest ? `<p class="cheapest">${tr('cheapest', { v: esc(p.cheapest) })}</p>` : ''}${priceItems ? `<details class="price-extra"><summary>${t('priceFileTitle')}</summary><p>${t('priceFileNote')}</p><ul>${priceItems}</ul></details>` : ''}`;
}
function priceSummary(m, cat) {
  const p = m.prices || {};
  return { ua: p.UA || null, others: [...(p.US ? [`${t('priceUS')}: ${esc(p.US)}`] : []), ...(p.EU ? [`${t('priceEU')}: ${esc(p.EU)}`] : [])] };
}
function essence(s) {
  if (!s) return '';
  const txt = String(s);
  if (txt.length <= 120) return esc(txt);
  const cut = txt.slice(0, 120), sp = cut.lastIndexOf(' ');
  return esc(sp > 60 ? cut.slice(0, sp) : cut) + '…';
}
/* Неподтверждённые поля модели — ровно те, что пусты в данных. */
function missingFields(cat, m) {
  const p = m.prices || {}, lg = m.languages || {}, out = [];
  if (!m.strength) out.push(t('fldStrength'));
  if (!m.flagship) out.push(t('fldFlagship'));
  if (!p.UA && !uahItems(cat, m).length) out.push(t('fldPriceUA'));
  if (!p.US) out.push(t('fldPriceUS'));
  if (!p.EU) out.push(t('fldPriceEU'));
  if (m.free !== true && m.free !== false) out.push(t('fldFree'));
  if (!m.trial) out.push(t('fldTrial'));
  if (typeof lg.ru !== 'boolean') out.push(t('fldRu'));
  if (typeof lg.uk !== 'boolean') out.push(t('fldUk'));
  if (!Array.isArray(m.platforms) || !m.platforms.length) out.push(t('fldPlatforms'));
  if (typeof m.user_rating !== 'number') out.push(t('fldRating'));
  if (!Array.isArray(m.pros) || !m.pros.length) out.push(t('fldPros'));
  if (!Array.isArray(m.cons) || !m.cons.length) out.push(t('fldCons'));
  if (!Array.isArray(m.bugs) || !m.bugs.length) out.push(t('fldBugs'));
  if (!m.checked) out.push(t('fldChecked'));
  return out;
}

/* ---------- Карточка: свёрнутая по умолчанию, разворот на месте ---------- */
function modelCard(cat, m, opts = {}) {
  const rawModel = m;
  m = displayModel(cat, m);
  const logo = logos[`${cat}--${m.id}`];
  const badUrl = m.url === 'https://openai.com/index/gpt-image-1/';
  let url = '';
  try { const parsed = new URL(m.url); if (parsed.protocol === 'https:' && !badUrl) url = parsed.href; } catch (e) {}
  const lg = m.languages || {};
  const badges = [m.free === true ? t('badgeFree') : '', lg.ru === true ? t('badgeRu') : '', lg.uk === true ? t('badgeUk') : ''].filter(Boolean);
  const name = esc(m.name), id = esc(m.id);
  const missing = missingFields(cat, m);
  const ps = priceSummary(m, cat);
  const ess = essence(m.strength);
  const freeLines = [];
  if (opts.showTrial) {
    if (m.free === true) freeLines.push(`<p class="free-line"><span>${t('fldFree')}</span> ${t('freeYes')}</p>`);
    if (m.trial) freeLines.push(`<p class="free-line"><span>${t('fldTrial')}</span> ${esc(m.trial)} <span class="small-note">${t('cardNeeded')}</span></p>`);
  }
  const ratingLines = [];
  if (opts.showRating && typeof m.user_rating === 'number') ratingLines.push(`<p class="free-line">${tr('placeLine', { n: opts.showRating })} · <span>${t('fldRating')}</span> ${esc(m.user_rating)} / 10</p>`);
  const introBlocks = [];
  if (m.strength) introBlocks.push(`<div><h3>${t('whatIs')}</h3><p>${textValue(m.strength)}</p></div>`);
  if (m.flagship) introBlocks.push(`<div><h3>${t('modelOrVersion')}</h3><p>${textValue(m.flagship)}</p></div>`);
  const priceHtml = priceDetails(cat, m);
  const facts = [];
  if (m.free === true) facts.push(`<div><span>${t('fldFree')}</span><p>${t('freeYes')}</p></div>`);
  else if (m.free === false) facts.push(`<div><span>${t('fldFree')}</span><p>${t('freeNo')}</p></div>`);
  if (m.trial) facts.push(`<div><span>${t('fldTrial')}</span><p>${textValue(m.trial)}</p><p class="small-note">${t('cardNeeded')}</p></div>`);
  if (typeof lg.ru === 'boolean') facts.push(`<div><span>${t('fldRu')}</span><p>${boolValue(lg.ru)}</p></div>`);
  if (typeof lg.uk === 'boolean') facts.push(`<div><span>${t('fldUk')}</span><p>${boolValue(lg.uk)}</p></div>`);
  if (Array.isArray(m.platforms) && m.platforms.length) facts.push(`<div><span>${t('fldPlatforms')}</span><p>${listValue(m.platforms)}</p></div>`);
  if (typeof m.user_rating === 'number') facts.push(`<div><span>${t('fldRating')}</span><p>${esc(m.user_rating)} / 10</p></div>`);
  const exp = [];
  if (Array.isArray(m.pros) && m.pros.length) exp.push(`<div><span>${t('fldPros')}</span><p>${listValue(m.pros)}</p></div>`);
  if (Array.isArray(m.cons) && m.cons.length) exp.push(`<div><span>${t('fldCons')}</span><p>${listValue(m.cons)}</p></div>`);
  if (Array.isArray(m.bugs) && m.bugs.length) exp.push(`<div><span>${t('fldBugs')}</span><p>${listValue(m.bugs)}</p></div>`);
  const detailsHtml = `${introBlocks.length ? `<div class="model-intro${introBlocks.length === 1 ? ' single' : ''}">${introBlocks.join('')}</div>` : ''}`
    + `${priceHtml ? `<section class="card-section"><h3>${t('pricesTitle')}</h3>${priceHtml}</section>` : ''}`
    + `${facts.length ? `<section class="card-section"><h3>${t('termsTitle')}</h3><div class="facts">${facts.join('')}</div></section>` : ''}`
    + `${exp.length ? `<section class="card-section"><h3>${t('expTitle')}</h3><div class="facts">${exp.join('')}</div></section>` : ''}`
    + `${m.checked ? `<p class="checked">${tr('checkedLine', { v: esc(m.checked) })}</p>` : ''}`
    + `${missing.length ? `<p class="missing-line">${tr('notConfirmedList', { v: esc(missing.join(', ')) })}</p>` : ''}`
    + `${isAdmin() ? adminEditHtml(cat, rawModel) : ''}`;
  const favKey = `${esc(cat)}--${id}`;
  const favOn = isFav(cat + '--' + m.id);
  return `<article class="model-card" id="model-${esc(cat)}-${id}" ${url ? `data-official="${esc(url)}"` : ''}>`
    + `<div class="model-top">${logo ? `<div class="model-logo"><img src="${esc(logo)}" alt="${t('official')} ${name}" loading="lazy"></div>` : ''}<div class="model-name"><span class="model-developer">${textValue(m.developer)}</span><h2>${name}</h2></div><button class="fav-btn" type="button" data-fav="${favKey}" aria-pressed="${favOn}" aria-label="${favOn ? t('favRemove') : t('favAdd')}">${favOn ? '★' : '☆'}</button></div>`
    + `${ess ? `<p class="model-essence" title="${esc(m.strength)}">${ess}</p>` : ''}`
    + `${badges.length ? `<div class="badge-row">${badges.map(b => `<span>${esc(b)}</span>`).join('')}</div>` : ''}`
    + `${(ps.ua || ps.others.length) ? `<div class="model-prices">${ps.ua ? `<div class="price-main"><span>${t('priceUA')}</span><strong title="${esc(ps.ua)}">${esc(ps.ua)}</strong></div>` : ''}${ps.others.length ? `<div class="price-sub" title="${esc(ps.others.join(' · '))}">${ps.others.join(' · ')}</div>` : ''}</div>` : ''}`
    + `${(freeLines.length || ratingLines.length) ? `<div class="free-lines">${freeLines.join('')}${ratingLines.join('')}</div>` : ''}`
    + `<div class="model-actions">${url ? `<a class="button official" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${t('official')}</a>` : `<span class="link-unavailable">${t('officialMissing')}</span>`}<button class="button details-btn" type="button" aria-expanded="false" aria-controls="details-${esc(cat)}-${id}">${t('details')}</button></div>`
    + `<div class="model-details" id="details-${esc(cat)}-${id}" hidden>${detailsHtml}</div></article>`;
}
function setCardExpanded(card, on) {
  const det = card.querySelector('.model-details');
  const btn = card.querySelector('.details-btn');
  card.classList.toggle('expanded', on);
  if (det) det.hidden = !on;
  if (btn) { btn.setAttribute('aria-expanded', String(on)); btn.textContent = on ? t('collapse') : t('details'); }
}

/* ---------- Этап 6: форма правок администратора на карточке ---------- */
function adminEditHtml(cat, raw) {
  const e = rawEditedModel(cat, raw);
  const p = e.prices || {};
  return `<section class="card-section admin-edit"><h3>${t('adminEditTitle')}</h3><p class="small-note">${t('adminNote')}</p>`
    + `<label class="admin-field"><span>${t('fldStrength')}</span><textarea data-admin-field="strength" rows="2">${esc(e.strength || '')}</textarea></label>`
    + `<label class="admin-field"><span>${t('fldFlagship')}</span><input type="text" data-admin-field="flagship" value="${esc(e.flagship || '')}"></label>`
    + `<label class="admin-field"><span>${t('fldFree')}</span><select data-admin-field="free"><option value=""${e.free !== true && e.free !== false ? ' selected' : ''}>${t('notConfirmed')}</option><option value="true"${e.free === true ? ' selected' : ''}>${t('freeYes')}</option><option value="false"${e.free === false ? ' selected' : ''}>${t('freeNo')}</option></select></label>`
    + `<label class="admin-field"><span>${t('fldTrial')}</span><input type="text" data-admin-field="trial" value="${esc(e.trial || '')}"></label>`
    + `<label class="admin-field"><span>${t('priceUA')}</span><input type="text" data-admin-field="prices.UA" value="${esc(p.UA || '')}"></label>`
    + `<label class="admin-field"><span>${t('priceUS')}</span><input type="text" data-admin-field="prices.US" value="${esc(p.US || '')}"></label>`
    + `<label class="admin-field"><span>${t('priceEU')}</span><input type="text" data-admin-field="prices.EU" value="${esc(p.EU || '')}"></label>`
    + `<label class="admin-field"><span>${t('colCheapest')}</span><input type="text" data-admin-field="prices.cheapest" value="${esc(p.cheapest || '')}"></label>`
    + `<button class="button admin-save" type="button" data-admin-save="${esc(cat)}--${esc(raw.id)}">${t('adminSave')}</button></section>`;
}

/* ---------- Этап 6: избранное — раздел на главной и фильтр в разделе ---------- */
function favSectionHtml() {
  const favs = loadFavs().map(findCompareModel).filter(Boolean);
  return `<div class="section-head"><div><div class="eyebrow">${t('favTitle')}</div><h2>${t('favTitle')}</h2><p>${tr('foundCount', { n: favs.length })}</p></div></div>`
    + (favs.length ? `<div class="model-list">${favs.map(({ cat, m }) => modelCard(cat, m)).join('')}</div>` : `<div class="empty"><p>${t('favEmpty')}</p></div>`);
}
function refreshFavSection() {
  const s = document.getElementById('favSection');
  if (s) s.innerHTML = favSectionHtml();
}
function renderCatList(cat, onlyFavs) {
  const box = document.getElementById('catModelList');
  if (!box) return;
  const models = (catalog?.categories?.[cat]?.models || []);
  const list = onlyFavs ? models.filter(m => isFav(cat + '--' + m.id)) : models;
  box.innerHTML = list.length ? list.map(m => modelCard(cat, m)).join('') : `<p class="search-empty">${t('favEmpty')}</p>`;
  const count = document.getElementById('favFilterCount');
  if (count) count.textContent = onlyFavs ? tr('foundCount', { n: list.length }) : '';
}

/* ---------- Страница раздела ---------- */
function categoryPage(cat) {
  const c = catalog?.categories?.[cat];
  if (!c) return `<div class="container route"><h1>${t('catalogUnavailable')}</h1><p>${t('checkFile')}</p></div>`;
  const models = Array.isArray(c.models) ? c.models : [];
  const countLine = tr('catalogOf', { n: models.length, w: plural(models.length) });
  return `<div class="container route category-route"><a class="back" href="#/home">${t('backHome')}</a>`
    + `<section class="category-hero"><div class="category-hero-text"><div class="eyebrow">${countLine}</div><h1>${esc(pageName(cat))}</h1><p>${esc(t('desc.' + cat))}</p></div>${heroMark(cat)}</section>`
    + `<nav class="model-index" aria-label="${t('indexLabel')}"><span class="model-index-label">${t('indexLabel')}</span>${models.map(m => `<button type="button" data-cat="${esc(cat)}" data-model="${esc(m.id)}">${esc(m.name)}</button>`).join('')}</nav>`
    + `<div class="fav-filter"><button type="button" id="favFilterBtn" data-cat="${esc(cat)}" aria-pressed="false">${t('favOnly')}</button><span class="result-count" id="favFilterCount"></span></div>`
    + `<p class="catalog-notice">${t('catalogNotice')}</p><div class="model-list" id="catModelList">${models.map(m => modelCard(cat, m)).join('')}</div></div>`;
}
function platformMatch(platforms, selected) {
  if (!selected) return true;
  return Array.isArray(platforms) && platforms.some(x => { let z = String(x).toLowerCase().trim(); const aliases = { web: ['web', 'веб'], windows: ['windows', 'windows app'], android: ['android'], ios: ['ios', 'iphone', 'ipad'] }; return (aliases[selected] || [selected]).includes(z); });
}
function initSearch() {
  const form = document.getElementById('modelSearch'), output = document.getElementById('searchResults');
  if (!form || !output) return;
  const update = () => {
    const q = form.querySelector('[name=q]').value.trim().toLocaleLowerCase('ru');
    const l = form.querySelector('[name=language]').value, fr = form.querySelector('[name=free]').value, platform = form.querySelector('[name=platform]').value;
    if (!q && !l && !fr && !platform) { output.innerHTML = ''; return; }
    const hits = dataItems().filter(({ m }) => {
      const hay = [m.name, m.developer, m.strength, m.flagship].filter(Boolean).join(' ').toLocaleLowerCase('ru');
      return (!q || hay.includes(q)) && (!l || m.languages?.[l] === true) && (!fr || m.free === true) && platformMatch(m.platforms, platform);
    });
    output.innerHTML = `<p class="result-count">${tr('found', { n: hits.length })}</p>${hits.length ? `<div class="search-results-list">${hits.map(({ cat, m }) => `<a href="#/${esc(cat)}?model=${encodeURIComponent(m.id)}"><strong>${textValue(m.name)}</strong><span>${esc(pageName(cat))} · ${textValue(m.developer)} ↗</span></a>`).join('')}</div>` : `<p class="search-empty">${t('noMatches')}</p>`}`;
  };
  form.addEventListener('submit', e => { e.preventDefault(); update(); });
  form.addEventListener('input', update);
  form.addEventListener('change', update);
}

/* ---------- Этап 3: цены, предложения, бесплатное ---------- */
let pricesFilter = { cat: '', q: '' };


/* Живые эмблемы-шапки страниц (в духе hero-marks Персонального портала). */
const HERO_MARKS = {
  converter: '<svg viewBox="0 0 64 64" fill="none" stroke="#80e8ed" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 24h33M37 15l9 9-9 9"/><path d="M52 42H19M27 33l-9 9 9 9"/></svg>',
  chats: '<svg viewBox="0 0 64 64" fill="none" stroke="#80e8ed" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14h30v20H22l-8 7v-7h-4z"/><path d="M44 26h10v16h-4v6l-7-6h-5" opacity=".65"/><circle class="hm-pulse" cx="19" cy="24" r="2.4" fill="#80e8ed"/><circle class="hm-pulse" cx="27" cy="24" r="2.4" fill="#80e8ed" style="animation-delay:.3s"/><circle class="hm-pulse" cx="35" cy="24" r="2.4" fill="#80e8ed" style="animation-delay:.6s"/></svg>',
  images: '<svg viewBox="0 0 64 64" fill="none" stroke="#80e8ed" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="12" width="48" height="40" rx="6"/><circle class="hm-pulse" cx="24" cy="26" r="4"/><path d="M10 46l14-12 10 8 8-6 12 10"/></svg>',
  video: '<svg viewBox="0 0 64 64" fill="none" stroke="#80e8ed" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="14" width="48" height="36" rx="8"/><path class="hm-pulse" d="M28 24l14 8-14 8z" fill="#80e8ed"/></svg>',
  audio: '<svg viewBox="0 0 64 64" fill="none" stroke="#80e8ed" stroke-width="4" stroke-linecap="round"><g class="hm-eq"><line x1="14" y1="26" x2="14" y2="38"/><line x1="24" y1="18" x2="24" y2="46" style="animation-delay:.15s"/><line x1="34" y1="24" x2="34" y2="40" style="animation-delay:.3s"/><line x1="44" y1="14" x2="44" y2="50" style="animation-delay:.45s"/><line x1="54" y1="27" x2="54" y2="37" style="animation-delay:.6s"/></g></svg>',
  code: '<svg viewBox="0 0 64 64" fill="none" stroke="#80e8ed" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M22 20L10 32l12 12M42 20l12 12-12 12"/><line class="hm-blink" x1="36" y1="46" x2="50" y2="46" stroke="#ffd98a"/></svg>',
  agents: '<svg viewBox="0 0 64 64" fill="none" stroke="#80e8ed" stroke-width="3" stroke-linecap="round"><circle cx="32" cy="32" r="6" fill="#80e8ed" class="hm-pulse"/><circle cx="14" cy="14" r="4"/><circle cx="50" cy="14" r="4"/><circle cx="14" cy="50" r="4"/><circle cx="50" cy="50" r="4"/><path d="M27 27L17 17M37 27l10-10M27 37L17 47M37 37l10 10" opacity=".6"/></svg>',
  local: '<svg viewBox="0 0 64 64" fill="none" stroke="#80e8ed" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M10 30L32 12l22 18M16 28v22h32V28"/><rect class="hm-pulse" x="26" y="34" width="12" height="12" rx="2"/></svg>',
  prices: '<svg viewBox="0 0 64 64" fill="none" stroke="#80e8ed" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 54h44"/><path class="hm-dash" d="M12 46l12-10 9 6 15-16"/><path d="M42 26h8v8" stroke="#ffd98a"/></svg>',
  offers: '<svg viewBox="0 0 64 64" fill="none" stroke="#80e8ed" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><g class="hm-sway"><rect x="12" y="26" width="40" height="8"/><path d="M16 34v20h32V34M32 26v28"/><path d="M32 26c-8 0-12-4-12-8 0-3 2-5 5-5 5 0 7 6 7 13zm0 0c8 0 12-4 12-8 0-3-2-5-5-5-5 0-7 6-7 13z"/></g></svg>',
  discounts: '<svg viewBox="0 0 64 64" fill="none" stroke="#80e8ed" stroke-width="3.2" stroke-linecap="round"><circle cx="20" cy="20" r="6"/><circle cx="44" cy="44" r="6"/><line class="hm-pulse" x1="46" y1="14" x2="18" y2="50"/></svg>',
  coupons: '<svg viewBox="0 0 64 64" fill="none" stroke="#80e8ed" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M8 22a6 6 0 016-6h36a6 6 0 016 6v6a5 5 0 000 10v6a6 6 0 01-6 6H14a6 6 0 01-6-6v-6a5 5 0 000-10z"/><line x1="38" y1="20" x2="38" y2="48" stroke-dasharray="3 5" opacity=".7"/><path class="hm-pulse" d="M20 28l2.2 4.4 4.8.7-3.5 3.4.8 4.8L20 39l-4.3 2.3.8-4.8-3.5-3.4 4.8-.7z" fill="#ffd98a" stroke="none"/></svg>',
  news: '<svg viewBox="0 0 64 64" fill="none" stroke="#80e8ed" stroke-width="3" stroke-linecap="round"><circle cx="32" cy="32" r="17"/><ellipse cx="32" cy="32" rx="8" ry="17"/><path d="M15 32h34M18 22h28M18 42h28"/><g class="hm-spin"><circle cx="32" cy="6" r="3" fill="#ffd98a" stroke="none"/></g></svg>',
  compare: '<svg viewBox="0 0 64 64" fill="none" stroke="#80e8ed" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><g class="hm-sway"><path d="M32 12v6M14 18h36M32 18v26M22 50h20"/><path d="M14 18l-6 12a8 6 0 0012 0zM50 18l-6 12a8 6 0 0012 0z"/></g><circle cx="32" cy="12" r="3" fill="#80e8ed"/></svg>',
  free: '<svg viewBox="0 0 64 64" fill="none" stroke="#80e8ed" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 54V12h28v42M18 54h28"/><path class="hm-pulse" d="M24 50V18l16-4v32z" fill="rgba(128,232,237,.18)"/><circle cx="36" cy="32" r="1.8" fill="#80e8ed"/></svg>',
  rankings: '<svg viewBox="0 0 64 64" fill="none" stroke="#80e8ed" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M10 54h12V38H10zM26 54h12V28H26zM42 54h12V44H42z"/><path class="hm-pulse" d="M32 8l2.4 4.9 5.4.8-3.9 3.8.9 5.4L32 20.4l-4.8 2.5.9-5.4-3.9-3.8 5.4-.8z" fill="#ffd98a" stroke="none"/></svg>',
  calendar: '<svg viewBox="0 0 64 64" fill="none" stroke="#80e8ed" stroke-width="3" stroke-linecap="round"><rect x="10" y="14" width="44" height="40" rx="5"/><path d="M10 26h44M22 14v40M36 14v40M10 40h44"/><rect class="hm-blink" x="39" y="29" width="12" height="8" fill="#ffd98a" stroke="none"/></svg>',
  community: '<svg viewBox="0 0 64 64" fill="none" stroke="#80e8ed" stroke-width="3" stroke-linecap="round"><circle class="hm-pulse" cx="32" cy="22" r="6"/><circle cx="15" cy="38" r="5"/><circle cx="49" cy="38" r="5"/><path d="M27 26l-8 8M37 26l8 8M20 38h24" opacity=".6"/><path d="M22 52c1-5 5-8 10-8s9 3 10 8" /></svg>'
};
function heroMark(id) { const m = HERO_MARKS[id]; return m ? `<div class="hero-mark" aria-hidden="true">${m}</div>` : ''; }
function pageHead(id, introKey) {
  return `<a class="back" href="#/home">${t('backHome')}</a><div class="page-head"><div class="page-head-text"><div class="eyebrow">${brandName()} / ${esc(pageName(id))}</div><h1>${esc(pageName(id))}</h1><p>${t(introKey)}</p></div>${heroMark(id)}</div>`;
}
function priceCell(v) {
  return v ? `<strong>${esc(v)}</strong>` : `<span class="no-price">${t('noPrice')}</span>`;
}
function priceEditInput(cat, m, key, labelKey, v) {
  return `<input class="price-edit" type="text" data-price-edit="${esc(cat)}--${esc(m.id)}:${key}" value="${esc(v || '')}" aria-label="${t(labelKey)}">`;
}
function priceRow(cat, m) {
  m = displayModel(cat, m);
  const p = m.prices || {};
  const logo = logos[`${cat}--${m.id}`];
  const admin = isAdmin();
  return `<article class="price-row"><div class="price-model">${logo ? `<span class="price-logo"><img src="${esc(logo)}" alt="" loading="lazy"></span>` : ''}<div><strong>${esc(m.name)}</strong><span>${esc(pageName(cat))}</span></div></div><div class="price-cell price-cat"><span class="price-cell-label">${t('colCategory')}</span>${esc(pageName(cat))}</div><div class="price-cell price-ua"><span class="price-cell-label">${t('priceUA')}</span>${admin ? priceEditInput(cat, m, 'UA', 'priceUA', p.UA) : priceCell(p.UA)}</div><div class="price-cell"><span class="price-cell-label">${t('priceUS')}</span>${admin ? priceEditInput(cat, m, 'US', 'priceUS', p.US) : priceCell(p.US)}</div><div class="price-cell"><span class="price-cell-label">${t('priceEU')}</span>${admin ? priceEditInput(cat, m, 'EU', 'priceEU', p.EU) : priceCell(p.EU)}</div><div class="price-cell"><span class="price-cell-label">${t('colCheapest')}</span>${admin ? priceEditInput(cat, m, 'cheapest', 'colCheapest', p.cheapest) : (p.cheapest ? `<strong>${esc(p.cheapest)}</strong>` : '—')}</div></article>`;
}
function pricesPage() {
  return `<div class="container route page-route">${pageHead('prices', 'pricesIntro')}<a class="conv-banner" href="#/converter"><span>${t('convBanner')}</span><span aria-hidden="true">⇄</span></a><div class="filter-bar"><div class="filter-chips" role="group" aria-label="${t('filterCatLabel')}"><button type="button" data-cat="" class="on">${t('filterAll')}</button>${categories.map(id => `<button type="button" data-cat="${id}">${esc(pageName(id))}</button>`).join('')}</div><div class="searchbar"><input id="priceSearch" type="search" placeholder="${t('pricesSearchPh')}" aria-label="${t('pricesSearchPh')}"></div></div><p class="result-count" id="priceCount"></p><div class="price-head" aria-hidden="true"><span>${t('colModel')}</span><span>${t('colCategory')}</span><span>${t('priceUA')}</span><span>${t('priceUS')}</span><span>${t('priceEU')}</span><span>${t('colCheapest')}</span></div><div class="price-list" id="priceList"></div></div>`;
}
function renderPriceList() {
  const box = document.getElementById('priceList'), count = document.getElementById('priceCount');
  if (!box) return;
  const q = pricesFilter.q.trim().toLowerCase();
  const rows = dataItems().filter(({ cat, m }) => {
    if (pricesFilter.cat && cat !== pricesFilter.cat) return false;
    if (q && !(m.name + ' ' + (m.vendor || '')).toLowerCase().includes(q)) return false;
    return true;
  });
  if (count) count.textContent = tr('foundCount', { n: rows.length });
  box.innerHTML = rows.length ? rows.map(({ cat, m }) => priceRow(cat, m)).join('') : `<p class="search-empty">${t('noModelsFound')}</p>`;
}
function initPrices() {
  const search = document.getElementById('priceSearch');
  if (search) search.addEventListener('input', () => { pricesFilter.q = search.value; renderPriceList(); });
  document.querySelectorAll('.filter-chips button').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-chips button').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    pricesFilter.cat = btn.dataset.cat;
    renderPriceList();
  }));
  renderPriceList();
}
const jsonCache = {};
async function loadJsonFile(path) {
  if (jsonCache[path]) return jsonCache[path];
  try {
    const r = await fetch(path, { cache: 'no-store' });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    jsonCache[path] = await r.json();
  } catch (e) { jsonCache[path] = { error: true }; }
  return jsonCache[path];
}
async function loadOffers() {
  return loadJsonFile('data/offers.json');
}
function offerKind(item) {
  const raw = String(item.type ?? item.kind ?? item.category ?? item.tag ?? '').toLowerCase().trim();
  if (['offer', 'offers', 'акция', 'акции', 'пропозиція', 'пропозиції'].includes(raw)) return 'offers';
  if (['discount', 'discounts', 'скидка', 'скидки', 'знижка', 'знижки'].includes(raw)) return 'discounts';
  if (['coupon', 'coupons', 'купон', 'купоны', 'купон', 'купони'].includes(raw)) return 'coupons';
  return '';
}
function offerCard(item) {
  const product = item.product || item.name || item.title || '';
  const text = item.text || item.description || item.summary || item.details || '';
  const until = item.until || item.expires || item.ends || item.date || item.validUntil || '';
  const url = item.url || item.link || '';
  return `<article class="offer-card"><h3>${esc(product)}</h3>${text ? `<p>${esc(text)}</p>` : ''}${until ? `<p class="offer-until">${tr('offerUntil', { v: esc(until) })}</p>` : ''}${url && /^https?:\/\//i.test(url) ? `<a class="button official" href="${esc(url)}" target="_blank" rel="noopener">${t('offerOpen')}</a>` : ''}</article>`;
}
function offersPage(kind) {
  return `<div class="container route page-route">${pageHead(kind, 'offersIntro')}<div class="offer-list" id="offersList"><p class="muted">${t('offersLoading')}</p></div></div>`;
}
async function initOffers(kind) {
  const box = document.getElementById('offersList');
  if (!box) return;
  const data = await loadOffers();
  if (data.error) { box.innerHTML = `<p class="search-empty">${t('offersLoadFail')}</p>`; return; }
  const items = (data.items || []).filter(it => { const k = offerKind(it); return k === kind || (k === '' && kind === 'offers'); });
  if (!items.length) { box.innerHTML = `<div class="empty offers-empty"><p>${t('offersEmpty')}</p></div>`; return; }
  box.innerHTML = items.map(offerCard).join('');
}
function freePage() {
  const items = dataItems().filter(({ m }) => m.free === true || !!m.trial);
  return `<div class="container route page-route">${pageHead('free', 'freeIntro')}<p class="result-count">${tr('foundCount', { n: items.length })}</p><div class="model-list">${items.map(({ cat, m }) => modelCard(cat, m, { showTrial: true })).join('')}</div></div>`;
}

/* ---------- Этап 4: конструктор сравнений ---------- */
let compareSel = [];
let compareQ = '';
function compareKey(cat, id) { return cat + '--' + id; }
function findCompareModel(key) {
  const i = key.indexOf('--');
  if (i < 0) return null;
  const cat = key.slice(0, i), id = key.slice(i + 2);
  const c = catalog?.categories?.[cat];
  const m = Array.isArray(c?.models) ? c.models.find(x => x.id === id) : null;
  return m ? { cat, m } : null;
}
function resolveCompareId(id) {
  const hit = dataItems().find(({ m }) => m.id === id);
  return hit ? { cat: hit.cat, m: hit.m } : null;
}
function parseCompareQuery(query) {
  const raw = new URLSearchParams(query || '').get('models') || '';
  const out = [], seen = new Set();
  for (const id of raw.split(',').map(s => s.trim()).filter(Boolean)) {
    const hit = resolveCompareId(id);
    if (!hit) continue;
    const key = compareKey(hit.cat, hit.m.id);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(key);
    if (out.length >= 4) break;
  }
  return out;
}
function officialLink(m) {
  const badUrl = m.url === 'https://openai.com/index/gpt-image-1/';
  try { const p = new URL(m.url); return (p.protocol === 'https:' && !badUrl) ? p.href : ''; } catch (e) { return ''; }
}
function langCell(v) {
  if (v === true) return t('langYes');
  if (v === false) return t('langNo');
  return t('noData');
}
function comparePage() {
  return `<div class="container route page-route">${pageHead('compare', 'compareIntro')}<div class="compare-picker"><div class="searchbar"><input id="compareSearch" type="search" placeholder="${t('pricesSearchPh')}" aria-label="${t('pricesSearchPh')}"></div><p class="result-count" id="compareCount"></p><div class="compare-selected" id="compareSelected"></div><div class="compare-list" id="compareList"></div><p class="compare-note" id="compareNote" hidden>${t('compareLimit')}</p></div><div class="preset-block"><h3>${t('presetTitle')}</h3><div class="preset-form"><input id="presetName" type="text" placeholder="${t('presetNamePh')}" aria-label="${t('presetNamePh')}"><button class="button" id="presetSaveBtn" type="button">${t('presetSave')}</button></div><div class="preset-list" id="presetList"></div></div><div id="compareTable"></div></div>`;
}
function renderPresets() {
  const box = document.getElementById('presetList');
  if (!box) return;
  const list = loadPresets();
  box.innerHTML = list.length ? list.map((p, i) => {
    const names = p.models.map(k => { const h = findCompareModel(k); return h ? h.m.name : ''; }).filter(Boolean).join(', ');
    return `<div class="preset-item"><strong>${esc(p.name)}</strong><span>${esc(names)}</span><button type="button" data-preset-open="${i}">${t('presetOpen')}</button><button type="button" data-preset-del="${i}">${t('presetDelete')}</button></div>`;
  }).join('') : `<p class="muted">${t('presetEmpty')}</p>`;
}
function renderCompareSelected() {
  const box = document.getElementById('compareSelected');
  const count = document.getElementById('compareCount');
  const note = document.getElementById('compareNote');
  if (!box) return;
  if (count) count.textContent = tr('compareSelected', { n: compareSel.length });
  if (note) note.hidden = compareSel.length < 4;
  box.innerHTML = compareSel.map(key => {
    const hit = findCompareModel(key);
    if (!hit) return '';
    const logo = logos[key];
    return `<span class="compare-chip">${logo ? `<img src="${esc(logo)}" alt="">` : ''}<strong>${esc(hit.m.name)}</strong><button type="button" data-remove="${esc(key)}" aria-label="${t('compareRemove')} ${esc(hit.m.name)}">×</button></span>`;
  }).join('');
}
function renderComparePicker() {
  const box = document.getElementById('compareList');
  if (!box) return;
  const q = compareQ.trim().toLowerCase();
  const rows = dataItems().filter(({ cat, m }) => {
    if (!q) return true;
    return (m.name + ' ' + (m.vendor || '') + ' ' + pageName(cat)).toLowerCase().includes(q);
  });
  box.innerHTML = rows.length ? rows.map(({ cat, m }) => {
    const key = compareKey(cat, m.id);
    const logo = logos[key];
    const selected = compareSel.includes(key);
    const full = compareSel.length >= 4 && !selected;
    return `<div class="compare-item"><span class="compare-item-logo">${logo ? `<img src="${esc(logo)}" alt="">` : ''}</span><div class="grow"><strong>${esc(m.name)}</strong><span>${esc([m.vendor, pageName(cat)].filter(Boolean).join(' · '))}</span></div><button type="button" data-add="${esc(key)}" ${selected || full ? 'disabled' : ''}>${selected ? t('compareAdded') : t('compareAdd')}</button></div>`;
  }).join('') : `<p class="search-empty">${t('noMatches')}</p>`;
}
function compareTableHtml() {
  const sel = compareSel.map(findCompareModel).filter(Boolean).map(hit => ({ cat: hit.cat, m: displayModel(hit.cat, hit.m) }));
  if (sel.length < 2) return `<div class="empty compare-empty"><p>${sel.length === 0 ? t('pickTwo') : t('pickMore')}</p></div>`;
  const rows = [
    { label: t('colCategory'), val: ({ cat }) => esc(pageName(cat)) },
    { label: t('rowEssence'), val: ({ m }) => m.strength ? `<span title="${esc(m.strength)}">${essence(m.strength)}</span>` : t('noData') },
    { label: t('rowFlagship'), val: ({ m }) => m.flagship ? esc(m.flagship) : t('noData') },
    { label: t('priceUA'), val: ({ m }) => (m.prices || {}).UA ? esc(m.prices.UA) : t('noData') },
    { label: t('priceUS'), val: ({ m }) => (m.prices || {}).US ? esc(m.prices.US) : t('noData') },
    { label: t('priceEU'), val: ({ m }) => (m.prices || {}).EU ? esc(m.prices.EU) : t('noData') },
    { label: t('colCheapest'), val: ({ m }) => (m.prices || {}).cheapest ? esc(m.prices.cheapest) : t('noData') },
    { label: t('fldFree'), val: ({ m }) => m.free === true ? t('freeYes') : m.free === false ? t('freeNo') : t('noData') },
    { label: t('fldTrial'), val: ({ m }) => m.trial ? esc(m.trial) : t('noData') },
    { label: t('fldRu'), val: ({ m }) => langCell((m.languages || {}).ru) },
    { label: t('fldUk'), val: ({ m }) => langCell((m.languages || {}).uk) },
    { label: t('fldPlatforms'), val: ({ m }) => Array.isArray(m.platforms) && m.platforms.length ? esc(m.platforms.join(', ')) : t('noData') },
  ];
  const head = sel.map(({ cat, m }) => {
    const key = compareKey(cat, m.id);
    const logo = logos[key];
    const url = officialLink(m);
    return `<th scope="col"><div class="compare-model-head">${logo ? `<img src="${esc(logo)}" alt="">` : ''}<strong>${esc(m.name)}</strong>${url ? `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${t('official')}</a>` : ''}<button type="button" class="compare-remove" data-remove="${esc(key)}">${t('compareRemove')}</button></div></th>`;
  }).join('');
  const body = rows.map(r => `<tr><th scope="row">${r.label}</th>${sel.map(s => `<td>${r.val(s)}</td>`).join('')}</tr>`).join('');
  return `<div class="compare-scroll"><table class="compare-table" aria-label="${t('compareTableLabel')}"><thead><tr><th scope="col"></th>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
}
function renderCompareTable() {
  const box = document.getElementById('compareTable');
  if (box) box.innerHTML = compareTableHtml();
}
function updateCompareUrl() {
  const ids = compareSel.map(k => findCompareModel(k)).filter(Boolean).map(({ m }) => encodeURIComponent(m.id));
  const hash = '#/compare' + (ids.length ? '?models=' + ids.join(',') : '');
  history.replaceState(null, '', hash);
}
function refreshCompare() {
  renderCompareSelected();
  renderComparePicker();
  renderCompareTable();
  updateCompareUrl();
}
function initCompare() {
  const search = document.getElementById('compareSearch');
  if (search) search.addEventListener('input', () => { compareQ = search.value; renderComparePicker(); });
  const page = document.querySelector('.compare-picker');
  if (page) page.addEventListener('click', e => {
    const add = e.target.closest('button[data-add]');
    if (add && !add.disabled) {
      if (compareSel.length >= 4 || compareSel.includes(add.dataset.add)) return;
      compareSel.push(add.dataset.add);
      refreshCompare();
      return;
    }
    const rem = e.target.closest('button[data-remove]');
    if (rem) {
      compareSel = compareSel.filter(k => k !== rem.dataset.remove);
      refreshCompare();
    }
  });
  const table = document.getElementById('compareTable');
  if (table) table.addEventListener('click', e => {
    const rem = e.target.closest('button[data-remove]');
    if (rem) {
      compareSel = compareSel.filter(k => k !== rem.dataset.remove);
      refreshCompare();
    }
  });
  const saveBtn = document.getElementById('presetSaveBtn');
  if (saveBtn) saveBtn.addEventListener('click', () => {
    if (!compareSel.length) { showToast(t('presetNeedModels')); return; }
    const nameInput = document.getElementById('presetName');
    const list = loadPresets();
    const name = (nameInput?.value || '').trim() || tr('presetDefault', { n: list.length + 1 });
    list.push({ name, models: compareSel.slice() });
    storeSet(PRESET_KEY, list);
    if (nameInput) nameInput.value = '';
    renderPresets();
    showToast(t('presetSaved'));
  });
  const plist = document.getElementById('presetList');
  if (plist) plist.addEventListener('click', e => {
    const open = e.target.closest('button[data-preset-open]');
    if (open) {
      const p = loadPresets()[Number(open.dataset.presetOpen)];
      if (p) { compareSel = p.models.filter(k => findCompareModel(k)).slice(0, 4); refreshCompare(); }
      return;
    }
    const del = e.target.closest('button[data-preset-del]');
    if (del) {
      const list = loadPresets();
      list.splice(Number(del.dataset.presetDel), 1);
      storeSet(PRESET_KEY, list);
      renderPresets();
    }
  });
  renderPresets();
  refreshCompare();
}

/* ---------- Этап 5: новости, календарь, рейтинги, выбор пользователей ---------- */
function newsLocale() { return lang === 'uk' ? 'uk-UA' : lang === 'en' ? 'en-GB' : 'ru-RU'; }
function parseNewsDate(s) {
  if (!s) return null;
  const d = new Date(String(s));
  return isNaN(d) ? null : d;
}
function fmtDate(d) { return d.toLocaleDateString(newsLocale(), { day: 'numeric', month: 'long', year: 'numeric' }); }
function fmtMonth(d) {
  const s = d.toLocaleDateString(newsLocale(), { month: 'long', year: 'numeric' });
  return s.charAt(0).toUpperCase() + s.slice(1);
}
const NEWS_LOGOS = { 'OpenAI': 'chats--chatgpt', 'GitHub Copilot': 'code--github-copilot', 'GitHub': 'code--github-copilot', 'Gemini': 'chats--gemini', 'Google DeepMind': 'chats--gemini', 'Google AI': 'chats--gemini', 'Meta AI': 'chats--meta-ai', 'Microsoft': 'chats--copilot', 'Microsoft Copilot': 'chats--copilot', 'ElevenLabs': 'audio--elevenlabs', 'Suno': 'audio--suno', 'Goose': 'agents--goose', 'OpenCode': 'agents--opencode', 'Ollama': 'local--ollama', 'LM Studio': 'local--lm-studio', 'Cursor': 'code--cursor', 'Mistral / Vibe': 'chats--mistral-vibe' };
function newsLoc(it, base, uk, ru) { if (lang === 'uk') return it[uk] || it[base] || ''; if (lang === 'ru') return it[ru] || it[base] || ''; return it[base] || ''; }
function newsItem(it) {
  const rawDate = it.date || it.published || it.publishedAt || '';
  const d = parseNewsDate(rawDate);
  const title = newsLoc(it, 'title', 'title_uk', 'title_ru');
  const text = newsLoc(it, 'text', 'text_uk', 'text_ru');
  const product = it.product || it.model || '';
  const url = it.url || it.link || it.source || '';
  const logoKey = NEWS_LOGOS[product];
  const logo = logoKey ? logos[logoKey] : '';
  const media = it.image ? `<div class="news-media"><img src="${esc(it.image)}" alt="" loading="lazy"></div>`
    : logo ? `<div class="news-media logo"><img src="${esc(logo)}" alt="" loading="lazy"></div>` : '';
  return `<article class="news-card">${media}<p class="news-date">${d ? fmtDate(d) : esc(rawDate)}</p><h3>${esc(title)}</h3>${text ? `<p class="news-text">${esc(text)}</p>` : ''}${product ? `<p class="news-product">${esc(product)}</p>` : ''}${url && /^https?:\/\//i.test(url) ? `<a class="button official" href="${esc(url)}" target="_blank" rel="noopener">${t('newsSource')}</a>` : ''}</article>`;
}
function newsItemsSorted(data) {
  const items = Array.isArray(data.items) ? data.items.slice() : [];
  const dated = items.map(it => ({ it, d: parseNewsDate(it.date || it.published || it.publishedAt || '') }));
  dated.sort((a, b) => {
    if (a.d && b.d) return b.d - a.d;
    if (a.d) return -1;
    if (b.d) return 1;
    return 0;
  });
  return dated.map(x => x.it);
}
function newsPage() {
  return `<div class="container route page-route">${pageHead('news', 'newsIntro')}<div class="news-view-toggle" role="group"><button type="button" id="nvGrid" aria-pressed="true">${t('newsViewGrid')}</button><button type="button" id="nvList" aria-pressed="false">${t('newsViewList')}</button></div><div class="news-list" id="newsList"><p class="muted">${t('newsLoading')}</p></div></div>`;
}
async function initNews() {
  const box = document.getElementById('newsList');
  if (!box) return;
  const data = await loadJsonFile('data/news.json');
  if (data.error) { box.innerHTML = `<p class="search-empty">${t('newsLoadFail')}</p>`; return; }
  const items = newsItemsSorted(data);
  if (!items.length) { box.innerHTML = `<div class="empty offers-empty"><p>${t('newsEmpty')}</p></div>`; return; }
  let view = storeGet('neuroatlas-news-view', 'grid');
  if (view !== 'list') view = 'grid';
  const gridBtn = document.getElementById('nvGrid'), listBtn = document.getElementById('nvList');
  const apply = () => {
    box.classList.toggle('grid', view === 'grid');
    box.innerHTML = items.map(newsItem).join('');
    if (gridBtn) gridBtn.setAttribute('aria-pressed', view === 'grid' ? 'true' : 'false');
    if (listBtn) listBtn.setAttribute('aria-pressed', view === 'list' ? 'true' : 'false');
  };
  if (gridBtn) gridBtn.addEventListener('click', () => { view = 'grid'; storeSet('neuroatlas-news-view', view); apply(); });
  if (listBtn) listBtn.addEventListener('click', () => { view = 'list'; storeSet('neuroatlas-news-view', view); apply(); });
  apply();
}
function calendarPage() {
  return `<div class="container route page-route">${pageHead('calendar', 'calendarIntro')}<div id="calendarList"><p class="muted">${t('newsLoading')}</p></div></div>`;
}
async function initCalendar() {
  const box = document.getElementById('calendarList');
  if (!box) return;
  const data = await loadJsonFile('data/news.json');
  if (data.error) { box.innerHTML = `<p class="search-empty">${t('newsLoadFail')}</p>`; return; }
  const events = (Array.isArray(data.items) ? data.items : [])
    .map(it => ({ it, d: parseNewsDate(it.date || it.published || it.publishedAt || '') }))
    .filter(x => x.d)
    .sort((a, b) => a.d - b.d);
  if (!events.length) { box.innerHTML = `<div class="empty offers-empty"><p>${t('calendarEmpty')}</p></div>`; return; }
  const groups = {};
  for (const e of events) {
    const key = e.d.getFullYear() + '-' + String(e.d.getMonth() + 1).padStart(2, '0');
    (groups[key] = groups[key] || []).push(e);
  }
  box.innerHTML = Object.keys(groups).sort().map(key => {
    const list = groups[key];
    return `<section class="calendar-month"><h2>${fmtMonth(list[0].d)}</h2>${list.map(({ it, d }) => {
      const title = newsLoc(it, 'title', 'title_uk', 'title_ru');
      const product = it.product || it.model || '';
      const url = it.url || it.link || it.source || '';
      return `<div class="calendar-event"><span class="calendar-day">${d.getDate()}</span><div><strong>${esc(title)}</strong>${product ? `<span>${esc(product)}</span>` : ''}</div>${url && /^https?:\/\//i.test(url) ? `<a href="${esc(url)}" target="_blank" rel="noopener">${t('newsSource')}</a>` : ''}</div>`;
    }).join('')}</section>`;
  }).join('');
}
function ratingRow(cat, m, place) {
  const logo = logos[`${cat}--${m.id}`];
  const rated = typeof m.user_rating === 'number';
  return `<div class="rating-row"><span class="rating-place">${place ? place : '—'}</span><span class="rating-logo">${logo ? `<img src="${esc(logo)}" alt="">` : ''}</span><strong>${esc(m.name)}</strong><span class="rating-value">${rated ? esc(m.user_rating) + ' / 10' : t('noData')}</span></div>`;
}
function ratingsPage() {
  return `<div class="container route page-route">${pageHead('rankings', 'ratingsIntro')}${categories.map(cat => {
    const models = Array.isArray(catalog?.categories?.[cat]?.models) ? catalog.categories[cat].models : [];
    const rated = models.filter(m => typeof m.user_rating === 'number').sort((a, b) => b.user_rating - a.user_rating);
    const unrated = models.filter(m => typeof m.user_rating !== 'number');
    if (!rated.length) return `<section class="rating-cat"><h2>${esc(pageName(cat))}</h2><div class="empty ratings-empty"><p>${t('ratingsEmpty')}</p></div></section>`;
    const rows = rated.map((m, i) => ratingRow(cat, m, i + 1)).join('') + unrated.map(m => ratingRow(cat, m, null)).join('');
    return `<section class="rating-cat"><h2>${esc(pageName(cat))}</h2><div class="rating-list">${rows}</div></section>`;
  }).join('')}</div>`;
}
function choicePage() {
  const rated = dataItems().filter(({ m }) => typeof m.user_rating === 'number').sort((a, b) => b.m.user_rating - a.m.user_rating).slice(0, 10);
  if (!rated.length) return `<div class="container route page-route">${pageHead('community', 'choiceIntro')}<div class="empty ratings-empty"><p>${t('ratingsEmpty')}</p></div></div>`;
  return `<div class="container route page-route">${pageHead('community', 'choiceIntro')}<p class="result-count">${tr('foundCount', { n: rated.length })}</p><div class="model-list">${rated.map(({ cat, m }, i) => modelCard(cat, m, { showRating: i + 1 })).join('')}</div></div>`;
}

/* ---------- Сворачиваемые блоки главной ---------- */
function collState() { try { return JSON.parse(localStorage.getItem('neuroathena-collapsed') || '{}'); } catch (e) { return {}; } }
function collClosed(key) { return collState()[key] !== false; }
function collapseBtn(key) { const c = collClosed(key); return `<button type="button" class="collapse-btn${c ? ' closed' : ''}" data-collapse="${key}" aria-expanded="${!c}" title="${c ? t('expandBlock') : t('collapseBlock')}">▾</button>`; }
function collWrapStart(key) { return `<div class="collapsible" data-collapsible="${key}"${collClosed(key) ? ' hidden' : ''}>`; }
function initCollapse() { document.querySelectorAll('[data-collapse]').forEach(b => b.addEventListener('click', () => { const key = b.dataset.collapse; const body = document.querySelector(`[data-collapsible="${key}"]`); if (!body) return; const nowHidden = !body.hidden; body.hidden = nowHidden; b.classList.toggle('closed', nowHidden); b.setAttribute('aria-expanded', String(!nowHidden)); b.title = nowHidden ? t('expandBlock') : t('collapseBlock'); const st = collState(); st[key] = nowHidden; try { localStorage.setItem('neuroathena-collapsed', JSON.stringify(st)); } catch (e) {} })); }

/* ---------- Конвертер валют (форма как на Персональном портале) ---------- */
const CONV_FIRST = ['UAH', 'USD', 'EUR', 'PLN', 'GBP'];
let convRatesCache = null;
let convState = { amount: '100', from: 'USD', to: 'UAH' };
try { const s = JSON.parse(localStorage.getItem('neuroathena-converter') || 'null'); if (s) { if (typeof s.amount === 'string' && s.amount.length < 40) convState.amount = s.amount; if (/^[A-Z]{3}$/.test(s.from || '')) convState.from = s.from; if (/^[A-Z]{3}$/.test(s.to || '')) convState.to = s.to; } } catch (e) {}

function converterBlock(p) {
  return `<div class="conv" data-conv="${p}"><div class="conv-field"><label for="${p}Amt">${t('convAmount')}</label><input id="${p}Amt" type="number" min="0" step="any" inputmode="decimal" value="${esc(convState.amount)}"></div><div class="conv-pair"><div class="conv-field"><label for="${p}From">${t('convFrom')}</label><select id="${p}From"></select></div><button class="conv-swap" id="${p}Swap" type="button" title="${t('convSwap')}" aria-label="${t('convSwap')}">⇄</button><div class="conv-field"><label for="${p}To">${t('convTo')}</label><select id="${p}To"></select></div></div><div class="conv-quick"><span>${t('convQuick')}</span><button type="button" data-chip-amount="20" data-chip-cur="USD">$20</button><button type="button" data-chip-amount="10" data-chip-cur="USD">$10</button><button type="button" data-chip-amount="8" data-chip-cur="USD">$8</button><button type="button" data-chip-amount="229.99" data-chip-cur="UAH">229,99 ₴</button></div><div class="conv-out" id="${p}Out" role="status" aria-live="polite">${t('ratesLoading')}</div><p class="muted conv-note" id="${p}Note"></p></div>`;
}

function converterPage() {
  return `<div class="container route page-route">${pageHead('converter', 'converterIntro')}${converterBlock('conv')}</div>`;
}

async function initConverter(p) {
  const root = document.querySelector(`[data-conv="${p}"]`);
  if (!root) return;
  const amt = root.querySelector('#' + p + 'Amt'), fromSel = root.querySelector('#' + p + 'From'), toSel = root.querySelector('#' + p + 'To'), out = root.querySelector('#' + p + 'Out'), note = root.querySelector('#' + p + 'Note'), swap = root.querySelector('#' + p + 'Swap');
  if (!convRatesCache) {
    try {
      const r = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', { cache: 'no-store' });
      const data = await r.json();
      const map = { UAH: { rate: 1, txt: '' } };
      for (const x of data) if (/^[A-Z]{3}$/.test(x.cc) && Number.isFinite(x.rate) && x.rate > 0 && !/^X(AU|AG|PT|PD|DR)$/.test(x.cc)) map[x.cc] = { rate: x.rate, txt: x.txt || '' };
      convRatesCache = { map, date: (data.find(x => x.cc === 'USD') || {}).exchangedate || '' };
    } catch (e) { out.textContent = t('ratesFail'); return; }
  }
  const map = convRatesCache.map;
  const first = CONV_FIRST.filter(cc => map[cc]);
  const extra = Object.keys(map).filter(cc => !CONV_FIRST.includes(cc)).sort((a, b) => a.localeCompare(b));
  const optFirst = cc => `<option value="${cc}">${cc} — ${esc(t('cur.' + cc))}</option>`;
  const optExtra = cc => `<option value="${cc}">${cc} — ${esc(map[cc].txt || cc)}</option>`;
  const options = first.map(optFirst).join('') + (extra.length ? `<optgroup label="${esc(t('convOther'))}">${extra.map(optExtra).join('')}</optgroup>` : '');
  fromSel.innerHTML = options; toSel.innerHTML = options;
  fromSel.value = map[convState.from] ? convState.from : 'USD';
  toSel.value = map[convState.to] ? convState.to : 'UAH';
  const fmtAmt = v => v.toLocaleString(newsLocale(), { maximumFractionDigits: 8 });
  const fmtRes = v => v.toLocaleString(newsLocale(), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const run = persist => {
    const raw = amt.value, a = Number(raw), from = fromSel.value, to = toSel.value;
    convState = { amount: raw, from, to };
    if (persist) { try { localStorage.setItem('neuroathena-converter', JSON.stringify(convState)); } catch (e) {} }
    if (raw === '' || !Number.isFinite(a) || a < 0) { out.textContent = t('convEnterAmount'); return; }
    const f = map[from], tt = map[to];
    if (!f || !tt) { out.textContent = t('convNoRate'); return; }
    const v = from === to ? a : a * f.rate / tt.rate;
    out.textContent = `${fmtAmt(a)} ${from} = ${fmtRes(v)} ${to}`;
  };
  amt.addEventListener('input', () => run(true));
  fromSel.addEventListener('change', () => run(true));
  toSel.addEventListener('change', () => run(true));
  swap.addEventListener('click', () => { const v = fromSel.value; fromSel.value = toSel.value; toSel.value = v; run(true); });
  root.querySelectorAll('[data-chip-amount]').forEach(b => b.addEventListener('click', () => { amt.value = b.dataset.chipAmount; if (map[b.dataset.chipCur]) fromSel.value = b.dataset.chipCur; run(true); }));
  note.textContent = (convRatesCache.date ? tr('ratesOn', { v: convRatesCache.date }) + ' · ' : '') + t('convNote');
  run(false);
}

/* ---------- Главная ---------- */
function home() {
  return `<div class="hero"><section class="hero-panel"><div class="hero-copy"><div class="eyebrow">${t('heroEyebrow')}</div><h1>Нейро<span>Афина</span></h1><p>${t('heroTag')}</p><div class="hero-actions"><a class="button primary" href="#categories">${t('openCatalog')}</a><a class="button" href="#/compare">${t('compareModels')}</a></div></div><div class="hero-medal"><video autoplay muted loop playsinline poster="assets/athena-hero.webp" src="assets/athena-live.mp4" aria-label="Афина"></video></div><div class="hero-clock"><strong id="clock">--:--:--</strong><span id="date"></span></div></section></div>`
    + `<div class="container"><div class="status-strip"><div class="rates"><strong>${t('ratesTitle')}</strong><span>USD <strong id="usd">—</strong></span><span>EUR <strong id="eur">—</strong></span><button type="button" class="rate-refresh" id="refreshRates">${t('refreshRates')}</button></div><span class="muted" id="ratesInfo" role="status">${t('ratesLoading')}</span></div>`
    + `<section class="section conv-section" aria-labelledby="convTitle"><div class="section-head"><div><h2 id="convTitle">${t('page.converter')}</h2><p>${t('converterIntro')}</p></div>${collapseBtn('conv')}</div>${collWrapStart('conv')}${converterBlock('home')}</div></section>`
    + `<section class="section" aria-labelledby="searchTitle"><div class="section-head"><div><h2 id="searchTitle">${t('searchTitle')}</h2><p>${t('searchSub')}</p></div>${collapseBtn('search')}</div>${collWrapStart('search')}<div class="search-panel"><form id="modelSearch"><div class="searchbar"><input name="q" aria-label="${t('searchTitle')}" placeholder="${t('searchPlaceholder')}"><button class="button primary" type="submit">${t('findBtn')}</button></div><div class="filter-controls"><label>${t('filterLang')}<select name="language"><option value="">${t('optAny')}</option><option value="ru">${t('optRu')}</option><option value="uk">${t('optUk')}</option></select></label><label>${t('filterFree')}<select name="free"><option value="">${t('optAny')}</option><option value="yes">${t('optFreeYes')}</option></select></label><label>${t('filterPlatform')}<select name="platform"><option value="">${t('optAnyF')}</option><option value="web">${t('optWeb')}</option><option value="windows">Windows</option><option value="android">Android</option><option value="ios">iOS</option></select></label></div></form><div id="searchResults" role="status" aria-live="polite"></div><p class="search-note">${t('searchNote')}</p></div></div></section>`
    + `<section class="section" id="categories"><div class="section-head"><div><div class="eyebrow">${t('catEyebrow')}</div><h2>${t('catTitle')}</h2><p>${t('catSub')}</p></div></div><div class="cards">${categoryCards()}${sectionCards()}</div></section>`
    + `<section class="section" id="favSection">${favSectionHtml()}</section>`
    + `<section class="section"><div class="section-head"><div><div class="eyebrow">${t('weekEyebrow')}</div><h2>${t('weekTitle')}</h2></div></div><div class="editorial"><article class="feature" id="weekModel"><span class="label">${t('featWeek')}</span><h3>${t('featWeekNone')}</h3><p>${t('featWeekText')}</p></article><article class="feature" id="weekTop"><span class="label">${t('featTop')}</span><h3>${t('featTopNone')}</h3><p>${t('featTopText')}</p></article></div></section>`
    + `<section class="section"><div class="section-head"><div><div class="eyebrow">${t('newEyebrow')}</div><h2>${t('newTitle')}</h2></div></div><div class="three"><article class="empty" id="homePulse"><span class="label">${t('pulseLabel')}</span><h3>${t('pulseTitle')}</h3><p>${t('pulseText')}</p><a href="#/prices">${t('toPrices')}</a></article><article class="empty" id="homeNews"><span class="label">${t('newsLabel')}</span><h3>${t('newsTitle')}</h3><p>${t('newsText')}</p><a href="#/news">${t('toNews')}</a></article><article class="empty" id="homeOffer"><span class="label">${t('offersLabel')}</span><h3>${t('offersTitle')}</h3><p>${t('offersText')}</p><a href="#/offers">${t('toOffers')}</a></article></div></section></div>`;
}

async function initHome() {
  const rated = dataItems().filter(({ m }) => typeof m.user_rating === 'number').sort((a, b) => b.m.user_rating - a.m.user_rating);
  const wm = document.getElementById('weekModel');
  if (wm && rated.length) {
    const top = rated[0].m;
    const topLogo = logos[`${rated[0].cat}--${top.id}`];
    wm.innerHTML = `<span class="label">${t('featWeek')}</span>${topLogo ? `<div class="home-logo"><img src="${esc(topLogo)}" alt="" loading="lazy"></div>` : ''}<h3>${esc(top.name)}</h3><p>${esc(locText(top, 'essence', 'essence_uk', 'essence_en'))}</p><p class="free-line">${t('fldRating')}: ${esc(top.user_rating)} / 10 \u00b7 G2</p>`;
  }
  const wt = document.getElementById('weekTop');
  if (wt && rated.length) {
    const top3 = rated.slice(0, 3);
    const topRows = top3.map(({ cat, m }, i) => { const lg = logos[`${cat}--${m.id}`]; return `${i + 1}. ${lg ? `<img class="top-logo" src="${esc(lg)}" alt=""> ` : ''}${esc(m.name)} \u2014 ${esc(m.user_rating)} / 10`; }).join('<br>');
    wt.innerHTML = `<span class="label">${t('featTop')}</span><h3>${esc(top3[0].m.name)}</h3><p>${topRows}</p>`;
  }
  const hn = document.getElementById('homeNews');
  if (hn) {
    const data = await loadJsonFile('data/news.json');
    const items = (data && Array.isArray(data.items)) ? [...data.items].sort((a, b) => String(b.date || b.published || '').localeCompare(String(a.date || a.published || ''))) : [];
    if (items.length) {
      const it = items[0];
      const d = it.date || it.published || it.publishedAt || '';
      const ds = d ? new Date(d).toLocaleDateString(newsLocale()) : '';
      const txt = newsLoc(it, 'text', 'text_uk', 'text_ru');
      hn.querySelector('h3').textContent = newsLoc(it, 'title', 'title_uk', 'title_ru') || t('newsTitle');
      hn.querySelector('p').textContent = (ds ? ds + ' \u2014 ' : '') + (txt || '').slice(0, 160);
      const nLogoKey = NEWS_LOGOS[it.product || it.model || ''];
      const nLogo = nLogoKey ? logos[nLogoKey] : '';
      const media = it.image ? `<div class="news-media"><img src="${esc(it.image)}" alt="" loading="lazy"></div>` : nLogo ? `<div class="news-media logo"><img src="${esc(nLogo)}" alt="" loading="lazy"></div>` : '';
      if (media) { const lbl = hn.querySelector('.label'); if (lbl) lbl.insertAdjacentHTML('afterend', media); }
    }
  }
  const ho = document.getElementById('homeOffer');
  if (ho) {
    const data = await loadOffers();
    const items = (data && Array.isArray(data.items)) ? data.items : [];
    const pick = items.find(x => offerKind(x) === 'offers') || items[0];
    if (pick) {
      const txt = pick.text || pick.description || pick.summary || '';
      ho.querySelector('p').textContent = ((pick.product || pick.name || '') + (txt ? ' \u2014 ' + txt : '')).slice(0, 180);
      const oName = pick.product || pick.name || '';
      let oLogo = (NEWS_LOGOS[oName] && logos[NEWS_LOGOS[oName]]) || '';
      if (!oLogo) { const hit = dataItems().find(({ m }) => m.name === oName); if (hit) oLogo = logos[`${hit.cat}--${hit.m.id}`] || ''; }
      if (oLogo) { const lbl = ho.querySelector('.label'); if (lbl) lbl.insertAdjacentHTML('afterend', `<div class="home-logo"><img src="${esc(oLogo)}" alt="" loading="lazy"></div>`); }
    }
  }
  const hp = document.getElementById('homePulse');
  if (hp) {
    try {
      const r = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', { cache: 'no-store' });
      const arr = await r.json();
      const usd = arr.find(x => x.cc === 'USD'), eur = arr.find(x => x.cc === 'EUR');
      if (usd && eur) hp.querySelector('p').textContent = `${t('pulseRates')} USD \u2014 ${usd.rate.toFixed(2).replace('.', ',')} \u20b4 \u00b7 EUR \u2014 ${eur.rate.toFixed(2).replace('.', ',')} \u20b4`;
    } catch (e) { /* оставляем прежний текст */ }
  }
}

/* ---------- Маршруты ---------- */
function route() {
  const hash = location.hash;
  const raw = hash.replace(/^#\//, '');
  const [path, query = ''] = raw.split('?');
  let id = path;
  if (!id || hash === '#categories') id = 'home';
  if (id === 'ratings') id = 'rankings';
  if (id === 'choice') id = 'community';
  if (!pageIds.includes(id)) id = 'home';
  document.body.dataset.route = id; markActiveNav(); time();
  if (id === 'home') {
    main.innerHTML = home(); rates(); initSearch(); initHome(); initConverter('home'); initCollapse();
    if (hash === '#categories') document.getElementById('categories').scrollIntoView();
  } else if (categories.includes(id)) {
    main.innerHTML = categoryPage(id);
    const model = new URLSearchParams(query).get('model');
    if (model) {
      requestAnimationFrame(() => {
        const el = document.getElementById(`model-${id}-${model}`);
        if (el) { setCardExpanded(el, true); el.scrollIntoView({ block: 'start' }); }
      });
    }
  } else if (id === 'prices') {
    pricesFilter = { cat: '', q: '' };
    main.innerHTML = pricesPage();
    initPrices();
  } else if (id === 'converter') {
    main.innerHTML = converterPage();
    initConverter('conv');
  } else if (id === 'offers' || id === 'discounts' || id === 'coupons') {
    main.innerHTML = offersPage(id);
    initOffers(id);
  } else if (id === 'free') {
    main.innerHTML = freePage();
  } else if (id === 'compare') {
    compareSel = parseCompareQuery(query);
    compareQ = '';
    main.innerHTML = comparePage();
    initCompare();
  } else if (id === 'news') {
    main.innerHTML = newsPage();
    initNews();
  } else if (id === 'calendar') {
    main.innerHTML = calendarPage();
    initCalendar();
  } else if (id === 'rankings') {
    main.innerHTML = ratingsPage();
  } else if (id === 'community') {
    main.innerHTML = choicePage();
  } else {
    main.innerHTML = `<div class="container route"><a class="back" href="#/home">${t('backHome')}</a><div class="eyebrow" style="margin-top:35px">${t('stubEyebrow')}</div><h1>${esc(pageName(id))}</h1><div class="empty"><h3>${t('stubTitle')}</h3><p>${t('stubText')}</p></div></div>`;
  }
  document.title = (id === 'home' ? brandName() : pageName(id) + ' — ' + brandName());
}
main.addEventListener('click', e => {
  const favBtn = e.target.closest('button[data-fav]');
  if (favBtn) {
    const on = toggleFav(favBtn.dataset.fav);
    favBtn.setAttribute('aria-pressed', String(on));
    favBtn.setAttribute('aria-label', on ? t('favRemove') : t('favAdd'));
    favBtn.textContent = on ? '★' : '☆';
    refreshFavSection();
    const ff = document.getElementById('favFilterBtn');
    if (ff && ff.getAttribute('aria-pressed') === 'true') renderCatList(ff.dataset.cat, true);
    return;
  }
  const favFilter = e.target.closest('#favFilterBtn');
  if (favFilter) {
    const on = favFilter.getAttribute('aria-pressed') !== 'true';
    favFilter.setAttribute('aria-pressed', String(on));
    renderCatList(favFilter.dataset.cat, on);
    return;
  }
  const saveBtn = e.target.closest('button[data-admin-save]');
  if (saveBtn) {
    const card = saveBtn.closest('.model-card');
    const key = saveBtn.dataset.adminSave;
    const edits = loadEdits();
    const ed = {};
    card.querySelectorAll('[data-admin-field]').forEach(el => {
      const f = el.dataset.adminField;
      if (f === 'free') { if (el.value === 'true') ed.free = true; else if (el.value === 'false') ed.free = false; return; }
      if (f.startsWith('prices.')) { ed.prices = ed.prices || {}; ed.prices[f.slice(7)] = el.value; return; }
      ed[f] = el.value;
    });
    edits[key] = ed;
    storeSet(EDIT_KEY, edits);
    showToast(t('adminSaved'));
    const hit = findCompareModel(key);
    if (hit && card) {
      const tmp = document.createElement('div');
      tmp.innerHTML = modelCard(hit.cat, hit.m);
      const fresh = tmp.firstElementChild;
      card.replaceWith(fresh);
      setCardExpanded(fresh, true);
    }
    return;
  }
  const idxBtn = e.target.closest('.model-index button[data-model]');
  if (idxBtn) {
    const card = document.getElementById(`model-${idxBtn.dataset.cat}-${idxBtn.dataset.model}`);
    if (card) { const on = !card.classList.contains('expanded'); setCardExpanded(card, on); if (on) card.scrollIntoView({ block: 'start' }); }
    return;
  }
  const detBtn = e.target.closest('.details-btn');
  if (detBtn) {
    const card = detBtn.closest('.model-card');
    if (card) setCardExpanded(card, !card.classList.contains('expanded'));
    return;
  }
  const top = e.target.closest('.model-top');
  if (top && !e.target.closest('.fav-btn')) {
    const card = top.closest('.model-card');
    if (card) setCardExpanded(card, !card.classList.contains('expanded'));
    return;
  }
  const card = e.target.closest('.model-card[data-official]');
  if (!card || e.target.closest('a,button,summary,details,input,select,textarea') || String(window.getSelection()).length) return;
  window.open(card.dataset.official, '_blank', 'noopener,noreferrer');
});
main.addEventListener('change', e => {
  const inp = e.target.closest('input[data-price-edit]');
  if (!inp) return;
  const parts = inp.dataset.priceEdit.split(':');
  const key = parts[0], field = parts[1];
  const edits = loadEdits();
  const cur = edits[key] || {};
  cur.prices = { ...(cur.prices || {}) };
  cur.prices[field] = inp.value;
  edits[key] = cur;
  storeSet(EDIT_KEY, edits);
  showToast(t('adminSaved'));
});

/* ---------- Курсы НБУ ---------- */
async function rates() {
  const info = document.getElementById('ratesInfo');
  const r = document.getElementById('refreshRates');
  if (!r) return;
  r.onclick = rates; r.disabled = true; info.textContent = t('ratesLoading');
  try {
    const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', { cache: 'no-store' });
    if (!response.ok) throw Error('HTTP');
    const list = await response.json();
    const usd = list.find(x => x.cc === 'USD'), eur = list.find(x => x.cc === 'EUR');
    if (!usd || !eur || !Number.isFinite(usd.rate) || !Number.isFinite(eur.rate)) throw Error('data');
    document.getElementById('usd').textContent = usd.rate.toFixed(2) + ' ₴';
    document.getElementById('eur').textContent = eur.rate.toFixed(2) + ' ₴';
    info.textContent = tr('ratesOn', { v: usd.exchangedate });
  } catch (e) { info.textContent = t('ratesFail'); } finally { r.disabled = false; }
}
window.addEventListener('hashchange', route);

/* ---------- Кнопка «Наверх» ---------- */
const toTop = document.getElementById('toTop');
if (toTop) {
  toTop.addEventListener('click', () => {
    const beh = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    window.scrollTo({ top: 0, behavior: beh });
  });
  window.addEventListener('scroll', () => { toTop.classList.toggle('visible', window.scrollY > 600); }, { passive: true });
}

applyStaticI18n();
route();

// The globe is decorative. Honour the device's reduced-motion setting.
const earthVideo = document.querySelector('#earthVideo');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
function syncGlobeMotion() { if (!earthVideo) return; if (motionPreference.matches) { earthVideo.pause(); try { earthVideo.currentTime = 0; } catch (e) {} } else { earthVideo.play().catch(() => {}); } }
if (motionPreference.addEventListener) motionPreference.addEventListener('change', syncGlobeMotion);
else if (motionPreference.addListener) motionPreference.addListener(syncGlobeMotion);
syncGlobeMotion();
