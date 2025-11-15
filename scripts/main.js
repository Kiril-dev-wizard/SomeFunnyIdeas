const themeToggle = document.querySelector('[data-theme-toggle]');
const themeIcon = themeToggle?.querySelector('[data-theme-icon]');
const themeLabel = themeToggle?.querySelector('[data-theme-label]');

const themeStorageKey = 'preferred-theme';
const localeStorageKey = 'preferred-locale';
const fallbackLocale = 'ru';

const translations = {
    ru: {
        meta: {
            title: 'Астролог Кирилл — астрология, руны и авторские ритуалы',
            description: 'Астролог и рунический практик Кирилл: разбор натальной карты, прогнозы на год, индивидуальные ритуалы и консультации на рунах. Запишитесь, чтобы получить чёткий план и поддержку.',
            keywords: 'астролог Кирилл, разбор натальной карты, прогноз на год, ритуалы на заказ, руническая консультация'
        },
        schema: {
            name: 'Кирилл',
            jobTitle: 'Астролог и рунический практик',
            description: 'Провожу разборы натальной карты, годовые прогнозы, ритуалы на заказ и консультации на рунах.'
        },
        theme: {
            lightLabel: 'Светлая тема',
            darkLabel: 'Тёмная тема',
            toggleTitle: 'Переключить тему'
        },
        hero: {
            tagline: 'Астрология • Руны • Ритуалы',
            title: 'Кирилл — ваш проводник в ясность и магию',
            subtitle: 'Уже 3 года сочетаю астрологию и рунические практики, чтобы вы быстрее проживали кармические уроки, усиливали отношения и управляли энергией собственной жизни.',
            ctaPrimary: 'Выбрать услугу',
            ctaSecondary: 'Связаться'
        },
        bio: {
            title: 'О Кирилле',
            paragraph1: 'Меня зовут Кирилл. В магии и астрологии уже 3 года. Решаю свои жизненные задачи с помощью магии, строю на каждый месяц план, улучшаю отношения, развиваю себя в каждой сфере с помощью ритуалов намного быстрее — ускоряю получение инсайтов и результатов.',
            paragraph2: 'Выстроил сбалансированную систему работы: руны + астрология. Руны — для влияния на жизнь, события и внутренние процессы. Астрология — для построения плана по каждой сфере жизни на годы вперёд. Это помогает держать под контролем всё, что происходит, максимально удачно использовать каждый период и при этом чувствовать себя гармонично.',
            formulaTitle: 'Формула работы',
            points: [
                'Диагностика через натальную карту и транзиты',
                'Подбор ритуалов и рунических настроек под запрос',
                'Сопровождение до устойчивого результата'
            ],
            note: 'Работаю экологично и конфиденциально, с уважением к личной свободе и темпу изменений.'
        },
        services: {
            title: 'Услуги и форматы',
            natal: {
                title: 'Базовый разбор натальной карты',
                price: '80&nbsp;$',
                description: 'Глубокий анализ личностных качеств, потенциалов и жизненных задач. Получите ясные шаги для проработки зон роста и усиления сильных сторон.',
                extrasTitle: 'Дополнительные блоки <span>(каждый по 20&nbsp;$)</span>',
                extras: {
                    magicProfile: {
                        title: 'Магический профиль',
                        description: 'Раскроем врождённые способности и инструменты усиления.'
                    },
                    synastry: {
                        title: 'Синастрия',
                        description: 'Разбор любовных и партнёрских сценариев, зоны притяжения и роста.'
                    },
                    career: {
                        title: 'Профориентация',
                        description: 'Определим наиболее ресурсные сферы занятости и векторы развития.'
                    },
                    progressiveSynastry: {
                        title: 'Прогрессивная синастрия',
                        description: 'Глубокая динамика отношений с учётом прогрессий и транзитов.'
                    }
                },
                summaryTitle: 'Состав консультации',
                summaryBase: 'Базовый разбор натальной карты',
                summaryWithExtras: 'Базовый разбор + {{extras}}',
                summaryTotal: 'Итого: <span id="extras-total"></span>',
                cta: 'Записаться'
            },
            forecast: {
                title: 'Персональный прогноз на год',
                oldPrice: '150&nbsp;$',
                price: '100&nbsp;$',
                description: '12-месячный план с акцентом на важные периоды, возможности и зоны повышенного внимания. Помогает заранее распределять ресурсы и выбирать точные даты для проектов.',
                points: [
                    'Помесячные рекомендации по ключевым сферам жизни',
                    'Фокус на отношениях, финансах и саморазвитии',
                    'Сопровождение в течение 30 дней после консультации'
                ],
                cta: 'Получить прогноз'
            },
            rituals: {
                title: 'Ритуалы на заказ',
                price: '60&nbsp;$',
                description: 'Индивидуальные энергетические настройки под конкретный запрос. В работу интегрирую руны, свечную магию и астрологические тайминги.',
                tags: [
                    'Ускорение кармических уроков',
                    'Чистка и восстановление',
                    'Подогрев чувств в паре'
                ],
                note: 'Перед началом созваниваемся, чтобы настроить ритуал под вас.',
                cta: 'Обсудить ритуал'
            },
            runes: {
                title: 'Консультация на рунах',
                price: '30&nbsp;$/час',
                description: 'Гадание на рунах для оперативных вопросов. Получите ясные ответы и рекомендации по любым сферам — от отношений до бизнеса.',
                points: [
                    'Сессия в формате онлайн-звонка',
                    'Работаем до выявления оптимального решения',
                    'При необходимости дополняю руническими настройками'
                ],
                cta: 'Записаться на звонок'
            }
        },
        testimonials: {
            title: 'Отзывы',
            items: [
                {
                    text: '«Благодаря разбору карты я наконец увидела структуру своей жизни. Кирилл мягко подсветил сильные стороны и дал план действий на ближайшие месяцы.»',
                    author: 'Марина'
                },
                {
                    text: '«Годовой прогноз совпал с ключевыми событиями почти до дня. Теперь планирую все запуски только по космическому календарю от Кирилла.»',
                    author: 'Анастасия'
                },
                {
                    text: '«Ритуал чистки снял затяжное напряжение и помог вернуть ресурсное состояние. Чувствую поддержку даже после сессии.»',
                    author: 'Олег'
                }
            ]
        },
        contact: {
            title: 'Запись и связь',
            description: 'Опишите запрос и желаемый формат работы. Я отвечу в течение суток, уточню детали и предложу ближайшие даты.',
            telegram: '@your_astrologist',
            email: 'hello@example.com'
        },
        form: {
            ariaLabel: 'Форма обратной связи',
            nameLabel: 'Имя',
            namePlaceholder: 'Ваше имя',
            contactLabel: 'Контакт для связи',
            contactPlaceholder: 'Telegram или телефон',
            messageLabel: 'Запрос',
            messagePlaceholder: 'Расскажите о цели, с которой приходите',
            submit: 'Отправить заявку',
            success: 'Заявка отправлена! Свяжусь с вами в ближайшее время.'
        },
        footer: {
            logo: 'Кирилл • Астрология & Руны',
            note: '© 2024. Индивидуальные консультации, ритуалы и сопровождение. Все права защищены.',
            telegram: 'Telegram',
            instagram: 'Instagram',
            email: 'Email'
        }
    },
    uk: {
        meta: {
            title: 'Астролог Кирило — астрологія, руни та авторські ритуали',
            description: 'Астролог і рунічний практик Кирило: розбір натальної карти, річні прогнози, індивідуальні ритуали та консультації на рунах. Запишіться, щоб отримати чіткий план і підтримку.',
            keywords: 'астролог Кирило, розбір натальної карти, прогноз на рік, ритуали на замовлення, рунічна консультація'
        },
        schema: {
            name: 'Кирило',
            jobTitle: 'Астролог і рунічний практик',
            description: 'Проводжу розбори натальної карти, річні прогнози, ритуали на замовлення та консультації на рунах.'
        },
        theme: {
            lightLabel: 'Світла тема',
            darkLabel: 'Темна тема',
            toggleTitle: 'Змінити тему'
        },
        hero: {
            tagline: 'Астрологія • Руни • Ритуали',
            title: 'Кирило — ваш провідник у ясність і магію',
            subtitle: 'Вже 3 роки поєдную астрологію та рунічні практики, щоб ви швидше проходили кармічні уроки, посилювали стосунки й керували енергією власного життя.',
            ctaPrimary: 'Обрати послугу',
            ctaSecondary: "Зв'язатися"
        },
        bio: {
            title: 'Про Кирила',
            paragraph1: 'Мене звати Кирило. В магії та астрології вже 3 роки. Розв’язую свої життєві задачі за допомогою магії, вибудовую щомісяця план, покращую стосунки, розвиваю себе в кожній сфері через ритуали значно швидше — пришвидшую отримання інсайтів і результатів.',
            paragraph2: 'Створив збалансовану систему роботи: руни + астрологія. Руни — для впливу на життя, події та внутрішні процеси. Астрологія — для побудови плану по кожній сфері життя на роки вперед. Це допомагає тримати під контролем усе, що відбувається, максимально вдало використовувати кожен період і водночас почуватися гармонійно.',
            formulaTitle: 'Формула роботи',
            points: [
                'Діагностика через натальну карту та транзити',
                'Добір ритуалів і рунічних налаштувань під запит',
                'Супровід до стійкого результату'
            ],
            note: 'Працюю екологічно й конфіденційно, з повагою до особистої свободи та темпу змін.'
        },
        services: {
            title: 'Послуги та формати',
            natal: {
                title: 'Базовий розбір натальної карти',
                price: '80&nbsp;$',
                description: 'Глибокий аналіз особистісних якостей, потенціалів і життєвих задач. Отримайте чіткі кроки для опрацювання зон росту та посилення сильних сторін.',
                extrasTitle: 'Додаткові блоки <span>(кожен по 20&nbsp;$)</span>',
                extras: {
                    magicProfile: {
                        title: 'Магічний профіль',
                        description: 'Розкриємо вроджені здібності та інструменти підсилення.'
                    },
                    synastry: {
                        title: 'Синастрія',
                        description: 'Аналіз любовних і партнерських сценаріїв, зони тяжіння та росту.'
                    },
                    career: {
                        title: 'Профорієнтація',
                        description: 'Визначимо найресурсніші сфери зайнятості та вектори розвитку.'
                    },
                    progressiveSynastry: {
                        title: 'Прогресивна синастрія',
                        description: 'Глибока динаміка стосунків з урахуванням прогресій і транзитів.'
                    }
                },
                summaryTitle: 'Склад консультації',
                summaryBase: 'Базовий розбір натальної карти',
                summaryWithExtras: 'Базовий розбір + {{extras}}',
                summaryTotal: 'Разом: <span id="extras-total"></span>',
                cta: 'Записатися'
            },
            forecast: {
                title: 'Персональний прогноз на рік',
                oldPrice: '150&nbsp;$',
                price: '100&nbsp;$',
                description: '12-місячний план з акцентом на важливі періоди, можливості та зони підвищеної уваги. Допомагає завчасно розподіляти ресурси та обирати точні дати для проєктів.',
                points: [
                    'Помісячні рекомендації щодо ключових сфер життя',
                    'Фокус на стосунках, фінансах і саморозвитку',
                    'Супровід протягом 30 днів після консультації'
                ],
                cta: 'Отримати прогноз'
            },
            rituals: {
                title: 'Ритуали на замовлення',
                price: '60&nbsp;$',
                description: 'Індивідуальні енергетичні налаштування під конкретний запит. У роботу інтегрую руни, свічкову магію та астрологічні таймінги.',
                tags: [
                    'Прискорення кармічних уроків',
                    'Очищення та відновлення',
                    'Підігрів почуттів у парі'
                ],
                note: "Перед стартом зв'язуємося, щоб налаштувати ритуал під вас.",
                cta: 'Обговорити ритуал'
            },
            runes: {
                title: 'Консультація на рунах',
                price: '30&nbsp;$/година',
                description: 'Ворожіння на рунах для оперативних питань. Отримайте чіткі відповіді та рекомендації щодо будь-яких сфер — від стосунків до бізнесу.',
                points: [
                    'Сесія у форматі онлайн-дзвінка',
                    'Працюємо до знаходження оптимального рішення',
                    'За потреби доповнюю рунічними налаштуваннями'
                ],
                cta: 'Записатися на дзвінок'
            }
        },
        testimonials: {
            title: 'Відгуки',
            items: [
                {
                    text: '«Завдяки розбору карти я нарешті побачила структуру свого життя. Кирило м’яко підсвітив сильні сторони й дав план дій на найближчі місяці.»',
                    author: 'Марина'
                },
                {
                    text: '«Річний прогноз збігся з ключовими подіями майже до дня. Тепер планую всі запуски тільки за космічним календарем від Кирила.»',
                    author: 'Анастасія'
                },
                {
                    text: '«Ритуал очищення зняв затяжну напругу й допоміг повернути ресурсний стан. Відчуваю підтримку навіть після сесії.»',
                    author: 'Олег'
                }
            ]
        },
        contact: {
            title: 'Запис та зв’язок',
            description: "Опишіть запит і бажаний формат роботи. Я відповім протягом доби, уточню деталі та запропоную найближчі дати.",
            telegram: '@your_astrologist',
            email: 'hello@example.com'
        },
        form: {
            ariaLabel: 'Форма зворотного зв’язку',
            nameLabel: "Ім'я",
            namePlaceholder: 'Ваше ім’я',
            contactLabel: 'Контакт для зв’язку',
            contactPlaceholder: 'Telegram або телефон',
            messageLabel: 'Запит',
            messagePlaceholder: 'Розкажіть про мету, з якою звертаєтеся',
            submit: 'Надіслати заявку',
            success: 'Заявка надіслана! Зв’яжуся з вами найближчим часом.'
        },
        footer: {
            logo: 'Кирило • Астрологія & Руни',
            note: '© 2024. Індивідуальні консультації, ритуали та супровід. Усі права захищені.',
            telegram: 'Telegram',
            instagram: 'Instagram',
            email: 'Email'
        }
    },
    pl: {
        meta: {
            title: 'Astrolog Kyryl — astrologia, runy i autorskie rytuały',
            description: 'Astrolog i praktyk runiczny Kyryl: analiza kosmogramu, roczne prognozy, rytuały na zamówienie oraz konsultacje runiczne. Umów się, aby otrzymać klarowny plan i wsparcie.',
            keywords: 'astrolog Kyryl, analiza kosmogramu, prognoza roczna, rytuały na zamówienie, konsultacja runiczna'
        },
        schema: {
            name: 'Kyryl',
            jobTitle: 'Astrolog i praktyk runiczny',
            description: 'Prowadzę analizy kosmogramu, roczne prognozy, rytuały na zamówienie i konsultacje runiczne.'
        },
        theme: {
            lightLabel: 'Jasny motyw',
            darkLabel: 'Ciemny motyw',
            toggleTitle: 'Przełącz motyw'
        },
        hero: {
            tagline: 'Astrologia • Runy • Rytuały',
            title: 'Kyryl — twój przewodник po klarowności i magii',
            subtitle: 'Od 3 lat łączę astrologię i praktyki runiczne, aby pomagać szybciej przechodzić lekcje karmiczne, wzmacniać relacje i świadomie zarządzać własną energią.',
            ctaPrimary: 'Wybierz usługę',
            ctaSecondary: 'Skontaktuj się'
        },
        bio: {
            title: 'O Kyrylu',
            paragraph1: 'Nazywam się Kyryl. Od 3 lat pracuję z magią i astrologią. Rozwiązuję własne wyzwania dzięki rytuałom, planuję każdy miesiąc, poprawiam relacje i rozwijam się w każdej sferze znacznie szybciej.',
            paragraph2: 'Zbudowałem zbalansowany system pracy: runy + astrologia. Runy — do wpływu na życie, wydarzenia i procesy wewnętrzne. Astrologia — do tworzenia planu na lata dla każdej sfery. To pomaga w pełni wykorzystywać każdy okres i czuć się harmonijnie.',
            formulaTitle: 'Formuła pracy',
            points: [
                'Diagnoza poprzez kosmogram i tranzyty',
                'Dobór rytuałów i ustawień runicznych do potrzeb',
                'Wsparcie aż do osiągnięcia stabilnego rezultatu'
            ],
            note: 'Pracuję etycznie i poufnie, z szacunkiem dla twojego tempa i przestrzeni.'
        },
        services: {
            title: 'Usługi i formaty',
            natal: {
                title: 'Bazowa analiza kosmogramu',
                price: '80&nbsp;$',
                description: 'Dogłębna analiza potencjałów, talentów i zadań życiowych. Otrzymasz jasne kroki do pracy nad obszarami wzrostu i wzmocnienia mocnych stron.',
                extrasTitle: 'Moduły dodatkowe <span>(każdy po 20&nbsp;$)</span>',
                extras: {
                    magicProfile: {
                        title: 'Profil magiczny',
                        description: 'Odkryjemy wrodzone zdolności i narzędzia wzmacniające.'
                    },
                    synastry: {
                        title: 'Synastria',
                        description: 'Analiza relacji miłosnych i partnerskich, obszary przyciągania i rozwoju.'
                    },
                    career: {
                        title: 'Doradztwo zawodowe',
                        description: 'Wskażemy najbardziej wspierające ścieżki kariery i kierunki rozwoju.'
                    },
                    progressiveSynastry: {
                        title: 'Synastria progresywna',
                        description: 'Dynamiczna analiza relacji z uwzględnieniem progresji i tranzytów.'
                    }
                },
                summaryTitle: 'Zakres konsultacji',
                summaryBase: 'Bazowa analiza kosmogramu',
                summaryWithExtras: 'Analiza bazowa + {{extras}}',
                summaryTotal: 'Razem: <span id="extras-total"></span>',
                cta: 'Zapisz się'
            },
            forecast: {
                title: 'Indywidualna prognoza na rok',
                oldPrice: '150&nbsp;$',
                price: '100&nbsp;$',
                description: '12-miesięczny plan z naciskiem na kluczowe okresy, możliwości i momenty wymagające uwagi. Pomaga wcześniej rozplanować zasoby i wybrać najlepsze terminy.',
                points: [
                    'Miesięczne wskazówki dla najważniejszych obszarów życia',
                    'Skupienie na relacjach, finansach i samorozwoju',
                    'Wsparcie przez 30 dni po konsultacji'
                ],
                cta: 'Zamów prognozę'
            },
            rituals: {
                title: 'Rytuały na zamówienie',
                price: '60&nbsp;$',
                description: 'Indywidualne ustawienia energetyczne pod konkretny cel. Łączę runy, magię świec i astrologiczne timingi.',
                tags: [
                    'Przyspieszenie lekcji karmicznych',
                    'Oczyszczenie i odnowa',
                    'Pobudzenie uczuć w parze'
                ],
                note: 'Przed startem łączymy się, aby dopasować rytuał do ciebie.',
                cta: 'Omów rytuał'
            },
            runes: {
                title: 'Konsultacja runiczna',
                price: '30&nbsp;$/godz.',
                description: 'Runiczne wróżenie dla pilnych pytań. Uzyskaj klarowne odpowiedzi i wskazówki dla każdej sfery — od relacji po biznes.',
                points: [
                    'Sesja w formie spotkania online',
                    'Pracujemy do znalezienia najlepszego rozwiązania',
                    'W razie potrzeby wzmacniam ustawieniami runicznymi'
                ],
                cta: 'Umów rozmowę'
            }
        },
        testimonials: {
            title: 'Opinie',
            items: [
                {
                    text: '„Dzięki analizie kosmogramu wreszcie zobaczyłam strukturę swojego życia. Kyryl delikatnie podkreślił mocne strony i dał plan na kolejne miesiące.”',
                    author: 'Marina'
                },
                {
                    text: '„Roczna prognoza pokryła się z kluczowymi wydarzeniami niemal co do dnia. Teraz wszystkie starty planuję według kosmicznego kalendarza Kyryla.”',
                    author: 'Anastazja'
                },
                {
                    text: '„Rytuał oczyszczający zdjął długotrwałe napięcie i przywrócił mi zasoby. Czuję wsparcie nawet po sesji.”',
                    author: 'Oleh'
                }
            ]
        },
        contact: {
            title: 'Kontakt i zapisy',
            description: 'Opisz swój cel i preferowany format współpracy. Odpowiem w ciągu doby, doprecyzuję szczegóły i zaproponuję najbliższe terminy.',
            telegram: '@your_astrologist',
            email: 'hello@example.com'
        },
        form: {
            ariaLabel: 'Formularz kontaktowy',
            nameLabel: 'Imię',
            namePlaceholder: 'Twoje imię',
            contactLabel: 'Dane kontaktowe',
            contactPlaceholder: 'Telegram lub telefon',
            messageLabel: 'Pytanie',
            messagePlaceholder: 'Opisz cel, z którym się zgłaszasz',
            submit: 'Wyślij zgłoszenie',
            success: 'Wiadomość wysłana! Skontaktuję się wkrótce.'
        },
        footer: {
            logo: 'Kyryl • Astrologia & Runy',
            note: '© 2024. Indywidualne konsultacje, rytuały i wsparcie. Wszelkie prawa zastrzeżone.',
            telegram: 'Telegram',
            instagram: 'Instagram',
            email: 'Email'
        }
    },
    en: {
        meta: {
            title: 'Astrologer Kirill — astrology, runes & bespoke rituals',
            description: 'Astrologer and rune practitioner Kirill: natal chart readings, yearly forecasts, custom rituals, and rune consultations. Book a session to receive a clear plan and support.',
            keywords: 'astrologer Kirill, natal chart reading, annual forecast, custom rituals, rune consultation'
        },
        schema: {
            name: 'Kirill',
            jobTitle: 'Astrologer and rune practitioner',
            description: 'I provide natal chart readings, yearly forecasts, custom rituals, and rune consultations.'
        },
        theme: {
            lightLabel: 'Light theme',
            darkLabel: 'Dark theme',
            toggleTitle: 'Toggle theme'
        },
        hero: {
            tagline: 'Astrology • Runes • Rituals',
            title: 'Kirill — your guide to clarity and magic',
            subtitle: 'For 3 years I have blended astrology with rune practice so you can move through karmic lessons faster, strengthen relationships, and steer your energy with confidence.',
            ctaPrimary: 'Choose a service',
            ctaSecondary: 'Get in touch'
        },
        bio: {
            title: 'About Kirill',
            paragraph1: 'My name is Kirill. For 3 years I have been using magic and astrology to solve life challenges, map each month, improve relationships, and grow in every area much faster through rituals.',
            paragraph2: 'I built a balanced system: runes + astrology. Runes help influence life, events, and inner processes. Astrology creates a long-term plan for each area, helping you stay in control, use every season wisely, and feel aligned.',
            formulaTitle: 'Method',
            points: [
                'Diagnostics via natal chart and transits',
                'Tailored rituals and rune settings for your request',
                'Support until a stable result is reached'
            ],
            note: 'I work ethically and confidentially, respecting your pace and personal space.'
        },
        services: {
            title: 'Services & formats',
            natal: {
                title: 'Core natal chart reading',
                price: '$80',
                description: 'In-depth analysis of personal qualities, potentials, and life tasks. Receive clear steps to strengthen your gifts and transform growth zones.',
                extrasTitle: 'Optional modules <span>($20 each)</span>',
                extras: {
                    magicProfile: {
                        title: 'Magical profile',
                        description: 'Reveal innate abilities and tools for amplification.'
                    },
                    synastry: {
                        title: 'Synastry',
                        description: 'Explore love and partnership dynamics, points of attraction and growth.'
                    },
                    career: {
                        title: 'Career alignment',
                        description: 'Identify the most supportive career paths and development directions.'
                    },
                    progressiveSynastry: {
                        title: 'Progressive synastry',
                        description: 'Track evolving relationship dynamics with progressions and transits.'
                    }
                },
                summaryTitle: 'Consultation package',
                summaryBase: 'Core natal chart reading',
                summaryWithExtras: 'Core reading + {{extras}}',
                summaryTotal: 'Total: <span id="extras-total"></span>',
                cta: 'Book now'
            },
            forecast: {
                title: 'Personal yearly forecast',
                oldPrice: '$150',
                price: '$100',
                description: 'A 12-month roadmap spotlighting key periods, opportunities, and caution zones. Plan resources ahead and choose aligned dates for your projects.',
                points: [
                    'Monthly guidance across major areas of life',
                    'Dedicated focus on relationships, finances, and self-growth',
                    '30 days of support after the session'
                ],
                cta: 'Request forecast'
            },
            rituals: {
                title: 'Custom rituals',
                price: '$60',
                description: 'Bespoke energetic work for your request. I combine runes, candle magic, and astrological timing for precise results.',
                tags: [
                    'Accelerating karmic lessons',
                    'Clearing & renewal',
                    'Rekindling feelings in a couple'
                ],
                note: 'We connect beforehand to tune the ritual precisely to you.',
                cta: 'Discuss a ritual'
            },
            runes: {
                title: 'Rune consultation',
                price: '$30/hour',
                description: 'Rune divination for on-demand clarity. Receive actionable answers for any area — from relationships to business.',
                points: [
                    'Live online session',
                    'We work together until the best option appears',
                    'Rune adjustments available when needed'
                ],
                cta: 'Schedule a call'
            }
        },
        testimonials: {
            title: 'Testimonials',
            items: [
                {
                    text: '“The natal reading finally showed me the structure of my life. Kirill gently highlighted my strengths and outlined a plan for the coming months.”',
                    author: 'Marina'
                },
                {
                    text: '“The yearly forecast matched the major events almost to the day. Now I plan every launch with Kirill’s cosmic calendar.”',
                    author: 'Anastasia'
                },
                {
                    text: '“The cleansing ritual released long-term tension and brought me back into resource. I still feel supported after the session.”',
                    author: 'Oleh'
                }
            ]
        },
        contact: {
            title: 'Bookings & contact',
            description: 'Share your request and ideal format. I reply within a day, clarify details, and offer the nearest available dates.',
            telegram: '@your_astrologist',
            email: 'hello@example.com'
        },
        form: {
            ariaLabel: 'Contact form',
            nameLabel: 'Name',
            namePlaceholder: 'Your name',
            contactLabel: 'How to reach you',
            contactPlaceholder: 'Telegram or phone',
            messageLabel: 'Request',
            messagePlaceholder: 'Tell me about your goal for the session',
            submit: 'Send request',
            success: 'Request sent! I will reach out shortly.'
        },
        footer: {
            logo: 'Kirill • Astrology & Runes',
            note: '© 2024. Individual consultations, rituals, and support. All rights reserved.',
            telegram: 'Telegram',
            instagram: 'Instagram',
            email: 'Email'
        }
    }
};

let currentLocale = fallbackLocale;

const prefersDarkScheme = typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;

const basePrice = 80;
const form = document.getElementById('natal-form');
const totalEl = document.getElementById('extras-total');
const listEl = document.getElementById('extras-list');
const contactForm = document.querySelector('.contact__form');
const successMessage = document.querySelector('[data-success-message]');

function getNestedValue(object, path) {
    return path.split('.').reduce((accumulator, key) => {
        if (accumulator && typeof accumulator === 'object' && key in accumulator) {
            return accumulator[key];
        }
        return undefined;
    }, object);
}

function translate(key, locale = currentLocale) {
    const localeDict = translations[locale] || translations[fallbackLocale];
    const value = getNestedValue(localeDict, key);
    if (value !== undefined) {
        return value;
    }
    if (locale !== fallbackLocale) {
        return getNestedValue(translations[fallbackLocale], key);
    }
    return undefined;
}

function formatCurrency(amount) {
    const rounded = Math.round(Number(amount) || 0);
    if (currentLocale === 'en') {
        return `$${rounded}`;
    }
    return `${rounded} $`;
}

function setStoredLocale(locale) {
    try {
        localStorage.setItem(localeStorageKey, locale);
    } catch (error) {
        console.warn('Не удалось сохранить язык:', error);
    }
}

function getStoredLocale() {
    try {
        return localStorage.getItem(localeStorageKey);
    } catch (error) {
        console.warn('Не удалось получить язык из хранилища:', error);
        return null;
    }
}

function detectLocale() {
    const stored = getStoredLocale();
    if (stored && translations[stored]) {
        return stored;
    }
    const navigatorLanguages = Array.isArray(navigator.languages) && navigator.languages.length
        ? navigator.languages
        : [navigator.language];
    for (const lang of navigatorLanguages) {
        if (!lang) continue;
        const normalized = lang.toLowerCase();
        if (translations[normalized]) {
            return normalized;
        }
        const short = normalized.split('-')[0];
        if (translations[short]) {
            return short;
        }
    }
    return fallbackLocale;
}

function updateSchema(locale) {
    const schemaElement = document.getElementById('schema-person');
    if (!schemaElement) {
        return;
    }
    try {
        const data = JSON.parse(schemaElement.textContent || '{}');
        const name = translate('schema.name', locale);
        const jobTitle = translate('schema.jobTitle', locale);
        const description = translate('schema.description', locale);
        if (name) data.name = name;
        if (jobTitle) data.jobTitle = jobTitle;
        if (description) data.description = description;
        schemaElement.textContent = JSON.stringify(data, null, 4);
    } catch (error) {
        console.warn('Не удалось обновить структурированные данные:', error);
    }
}

function applyTranslations(locale) {
    currentLocale = translations[locale] ? locale : fallbackLocale;
    setStoredLocale(currentLocale);
    document.documentElement.setAttribute('lang', currentLocale);

    const titleText = translate('meta.title');
    if (titleText) {
        document.title = titleText;
    }

    const descriptionMeta = document.querySelector('meta[name="description"]');
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    const descriptionText = translate('meta.description');
    const keywordsText = translate('meta.keywords');
    if (descriptionMeta && descriptionText) {
        descriptionMeta.setAttribute('content', descriptionText);
    }
    if (keywordsMeta && keywordsText) {
        keywordsMeta.setAttribute('content', keywordsText);
    }

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        const value = key ? translate(key) : undefined;
        if (value !== undefined) {
            element.innerHTML = value;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
        const key = element.dataset.i18nPlaceholder;
        const value = key ? translate(key) : undefined;
        if (value !== undefined) {
            element.setAttribute('placeholder', value);
        }
    });

    document.querySelectorAll('[data-i18n-attr-title]').forEach((element) => {
        const key = element.dataset.i18nAttrTitle;
        const value = key ? translate(key) : undefined;
        if (value !== undefined) {
            element.setAttribute('title', value);
        }
    });

    document.querySelectorAll('[data-i18n-attr-aria-label]').forEach((element) => {
        const key = element.dataset.i18nAttrAriaLabel;
        const value = key ? translate(key) : undefined;
        if (value !== undefined) {
            element.setAttribute('aria-label', value);
        }
    });

    updateSchema(currentLocale);
    updateThemeControls(document.body.dataset.theme === 'dark' ? 'dark' : 'light');
    renderSummary();
}

function getStoredTheme() {
    try {
        return localStorage.getItem(themeStorageKey);
    } catch (error) {
        console.warn('Не удалось получить тему из хранилища:', error);
        return null;
    }
}

function applyTheme(theme, persist = false) {
    const normalizedTheme = theme === 'dark' ? 'dark' : 'light';
    document.body.dataset.theme = normalizedTheme;

    updateThemeControls(normalizedTheme);

    if (persist) {
        try {
            localStorage.setItem(themeStorageKey, normalizedTheme);
        } catch (error) {
            console.warn('Не удалось сохранить тему:', error);
        }
    }
}

function updateThemeControls(theme) {
    const isDark = theme === 'dark';
    if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', String(isDark));
        const toggleTitle = translate('theme.toggleTitle');
        if (toggleTitle) {
            themeToggle.setAttribute('title', toggleTitle);
        }
    }
    if (themeIcon) {
        themeIcon.textContent = isDark ? '🌙' : '🌞';
    }
    if (themeLabel) {
        const labelText = isDark ? translate('theme.darkLabel') : translate('theme.lightLabel');
        if (labelText) {
            themeLabel.textContent = labelText;
        }
    }
}

function getPreferredTheme() {
    const stored = getStoredTheme();
    if (stored) {
        return stored;
    }
    return prefersDarkScheme && prefersDarkScheme.matches ? 'dark' : 'light';
}

function renderSummary() {
    if (!form) return;
    const extras = Array.from(form.querySelectorAll('input[name="extra"]:checked'));
    const total = extras.reduce((sum, item) => sum + Number(item.dataset.price || 0), basePrice);

    if (listEl) {
        if (extras.length) {
            const extrasNames = extras.map((item) => translate(`services.natal.extras.${item.value}.title`)).filter(Boolean);
            const template = translate('services.natal.summaryWithExtras') || 'Base + {{extras}}';
            listEl.innerHTML = template.replace('{{extras}}', extrasNames.join(', '));
        } else {
            const baseText = translate('services.natal.summaryBase') || '';
            listEl.innerHTML = baseText;
        }
    }

    if (totalEl) {
        totalEl.textContent = formatCurrency(total);
    }
}

if (form) {
    form.addEventListener('change', renderSummary);
}

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        contactForm.reset();
        renderSummary();
        if (successMessage) {
            successMessage.hidden = false;
            successMessage.classList.add('is-visible');
            setTimeout(() => {
                successMessage?.classList.remove('is-visible');
                successMessage?.setAttribute('hidden', '');
            }, 6000);
        }
    });
}

const initialLocale = detectLocale();
applyTranslations(initialLocale);

const initialTheme = getPreferredTheme();
applyTheme(initialTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.dataset.theme === 'dark' ? 'dark' : 'light';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme, true);
    });

    if (prefersDarkScheme) {
        const handlePreferenceChange = (event) => {
            if (!getStoredTheme()) {
                applyTheme(event.matches ? 'dark' : 'light');
            }
        };

        if (typeof prefersDarkScheme.addEventListener === 'function') {
            prefersDarkScheme.addEventListener('change', handlePreferenceChange);
        } else if (typeof prefersDarkScheme.addListener === 'function') {
            prefersDarkScheme.addListener(handlePreferenceChange);
        }
    }
}
