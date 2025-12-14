const themeToggle = document.querySelector('[data-theme-toggle]');
const themeIcon = themeToggle?.querySelector('[data-theme-icon]');
const themeLabel = themeToggle?.querySelector('[data-theme-label]');
const preloader = document.querySelector('[data-preloader]');
const parallaxElements = document.querySelectorAll('[data-parallax]');

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
        language: {
            label: 'Язык'
        },
        theme: {
            lightLabel: 'Светлая тема',
            darkLabel: 'Тёмная тема',
            toggleTitle: 'Переключить тему'
        },
        preloader: {
            text: 'Загружаю атмосферу…'
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
            carousel: {
                prev: 'Назад',
                next: 'Вперёд',
                dot: 'Слайд'
            },
            actions: {
                more: 'Подробнее',
                less: 'Скрыть'
            },
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
                    }
                },
                summaryTitle: 'Состав консультации',
                summaryBase: 'Базовый разбор натальной карты',
                summaryWithExtras: 'Базовый разбор + {{extras}}',
                summaryTotalLabel: 'Итого',
                bonus: 'Бонус: консультация на рунах (1 час) — смотрим лучшие и худшие сценарии развития событий.',
                cta: 'Записаться',
                details: `
                    <div class="detail-list">
                        <h4>Что внутри разбора</h4>
                        <ul>
                            <li>Личность: характер, сильные стороны, где теряете энергию.</li>
                            <li>Деньги и карьера: ваш способ зарабатывать и окна роста.</li>
                            <li>Здоровье и энергия: слабые зоны и ритм восстановления.</li>
                            <li>Интуиция и практики: безопасные ритуалы и периоды силы.</li>
                            <li>Отношения: динамика пары или портрет партнёра, если вы в поиске.</li>
                        </ul>
                        <p class="detail-inline-note">Бонус: часовая консультация на рунах — смотрим лучшие и рискованные сценарии.</p>
                    </div>
                `
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
                addon: {
                    title: 'Прогрессивная синастрия',
                    description: 'Дополнительный модуль: годовой разбор отношений — динамика, триггеры, периоды гармонии и напряжения, план укрепления связи.',
                    price: '+20&nbsp;$'
                },
                bonus: 'Бонус: консультация на рунах (1 час) — фиксируем оптимальные и рискованные сценарии года.',
                details: `
                    <div class="detail-list">
                        <h4>Что разберём в прогнозе</h4>
                        <ul>
                            <li>Главная тема года и карта месяцев.</li>
                            <li>Лучшие периоды для денег, работы и отношений.</li>
                            <li>Окна возможностей и точки риска.</li>
                            <li>План по здоровью, энергии и восстановлению.</li>
                            <li>Точные даты для шагов и запусков.</li>
                        </ul>
                        <h4>Для кого</h4>
                        <ul>
                            <li>Нужен понятный план и дедлайны.</li>
                            <li>Важно попадать в правильный тайминг.</li>
                            <li>Хочется прожить год без хаоса и самосаботажа.</li>
                        </ul>
                        <p class="detail-inline-note">Бонус: час на рунах — закрепляем лучшие и рискованные сценарии года.</p>
                    </div>
                `,
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
                details: `
                    <div class="detail-list">
                        <h4>Как проходит ритуал</h4>
                        <ul>
                            <li>Созваниваемся, уточняем запрос и границы.</li>
                            <li>Подбираю формулу, руны и точное время под задачу.</li>
                            <li>Провожу ритуал с фото/аудио-отчётом и сопровождением 7–14 дней.</li>
                        </ul>
                        <p class="detail-inline-note">Работаю с чистками, ускорением событий, усилением чувств и финансовыми запросами.</p>
                    </div>
                `,
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
                details: `
                    <div class="detail-list">
                        <h4>Что даёт консультация на рунах</h4>
                        <ul>
                            <li>Быстрые расклады онлайн на любой вопрос.</li>
                            <li>Чёткий ответ: причина, шаги и прогноз.</li>
                            <li>При необходимости — руническая настройка для закрепления результата.</li>
                        </ul>
                    </div>
                `,
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
            labels: {
                telegram: 'Telegram',
                email: 'E-mail',
                instagram: 'Instagram',
                tiktok: 'TikTok'
            },
            telegram: 't.me/@kim0n',
            email: 'kaminskyikiril5@gmail.com',
            instagram: 'kimon_wizard',
            tiktok: '@kim0nn'
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
            success: 'Заявка отправлена! Свяжусь с вами в ближайшее время.',
            error: 'Не удалось отправить заявку. Напишите в Telegram или попробуйте ещё раз.',
            modalClose: 'Закрыть сообщение'
        },
        footer: {
            logo: 'Кирилл • Астрология & Руны',
            note: '© 2024. Индивидуальные консультации, ритуалы и сопровождение. Все права защищены.',
            telegram: 'Telegram',
            instagram: 'Instagram',
            tiktok: 'TikTok',
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
        language: {
            label: 'Мова'
        },
        theme: {
            lightLabel: 'Світла тема',
            darkLabel: 'Темна тема',
            toggleTitle: 'Змінити тему'
        },
        preloader: {
            text: 'Завантажую атмосферу…'
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
            carousel: {
                prev: 'Назад',
                next: 'Вперед',
                dot: 'Слайд'
            },
            actions: {
                more: 'Докладніше',
                less: 'Згорнути'
            },
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
                    }
                },
                summaryTitle: 'Склад консультації',
                summaryBase: 'Базовий розбір натальної карти',
                summaryWithExtras: 'Базовий розбір + {{extras}}',
                summaryTotalLabel: 'Разом',
                bonus: 'Бонус: годинна консультація на рунах — дивимося найкращі й найризикованіші сценарії.',
                cta: 'Записатися',
                details: `
                    <div class="detail-list">
                        <h4>Що всередині розбору</h4>
                        <ul>
                            <li>Особистість: характер, сильні сторони, де губиться енергія.</li>
                            <li>Гроші й кар'єра: твій спосіб заробляти і вікна росту.</li>
                            <li>Здоров'я й енергія: слабкі зони та ритм відновлення.</li>
                            <li>Інтуїція і практики: безпечні ритуали та періоди сили.</li>
                            <li>Стосунки: динаміка пари або портрет партнера, якщо ти в пошуку.</li>
                        </ul>
                        <p class="detail-inline-note">Бонус: година на рунах — дивимось найкращі й ризикові сценарії.</p>
                    </div>
                `
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
                addon: {
                    title: 'Прогресивна синастрія',
                    description: 'Додатковий модуль: розбір стосунків на рік — динаміка, тригери, періоди гармонії й напруги та план зміцнення пари.',
                    price: '+20&nbsp;$'
                },
                bonus: 'Бонус: годинна консультація на рунах — фіксуємо найкращі та найскладніші сценарії року.',
                details: `
                    <div class="detail-list">
                        <h4>Що входить у прогноз</h4>
                        <ul>
                            <li>Головна тема року та помісячна карта.</li>
                            <li>Найкращі періоди для грошей, роботи й стосунків.</li>
                            <li>Вікна можливостей і точки ризику.</li>
                            <li>План по здоров'ю, енергії та відновленню.</li>
                            <li>Точні дати для ключових кроків.</li>
                        </ul>
                        <h4>Для кого</h4>
                        <ul>
                            <li>Потрібен зрозумілий план і дедлайни.</li>
                            <li>Важливо потрапляти у правильний таймінг.</li>
                            <li>Хочеться пройти рік без хаосу й самосаботажу.</li>
                        </ul>
                        <p class="detail-inline-note">Бонус: година на рунах — фіксуємо найкращі й ризикові сценарії року.</p>
                    </div>
                `,
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
                details: `
                    <div class="detail-list">
                        <h4>Як проходить ритуал</h4>
                        <ul>
                            <li>Швидкий кол: уточнюємо запит і межі.</li>
                            <li>Добираю формулу, руни та точний час під задачу.</li>
                            <li>Провожу ритуал з фото/аудіозвітом і супроводом 7–14 днів.</li>
                        </ul>
                        <p class="detail-inline-note">Працюю з очищенням, прискоренням подій, посиленням почуттів і фінансовими запитами.</p>
                    </div>
                `,
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
                details: `
                    <div class="detail-list">
                        <h4>Що дає консультація на рунах</h4>
                        <ul>
                            <li>Швидкі розклади онлайн на будь-яке питання.</li>
                            <li>Чітка відповідь: причина, кроки й прогноз.</li>
                            <li>За потреби — рунічна настройка для закріплення результату.</li>
                        </ul>
                    </div>
                `,
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
            labels: {
                telegram: 'Telegram',
                email: 'Електронна пошта',
                instagram: 'Instagram',
                tiktok: 'TikTok'
            },
            telegram: 't.me/@kim0n',
            email: 'kaminskyikiril5@gmail.com',
            instagram: 'kimon_wizard',
            tiktok: '@kim0nn'
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
            success: 'Заявка надіслана! Зв’яжуся з вами найближчим часом.',
            error: 'Не вдалося надіслати. Напишіть у Telegram або спробуйте ще раз.',
            modalClose: 'Закрити повідомлення'
        },
        footer: {
            logo: 'Кирило • Астрологія & Руни',
            note: '© 2024. Індивідуальні консультації, ритуали та супровід. Усі права захищені.',
            telegram: 'Telegram',
            instagram: 'Instagram',
            tiktok: 'TikTok',
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
        language: {
            label: 'Język'
        },
        theme: {
            lightLabel: 'Jasny motyw',
            darkLabel: 'Ciemny motyw',
            toggleTitle: 'Przełącz motyw'
        },
        preloader: {
            text: 'Ładuję magię…'
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
            carousel: {
                prev: 'Wstecz',
                next: 'Dalej',
                dot: 'Slajd'
            },
            actions: {
                more: 'Więcej',
                less: 'Mniej'
            },
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
                    }
                },
                summaryTitle: 'Zakres konsultacji',
                summaryBase: 'Bazowa analiza kosmogramu',
                summaryWithExtras: 'Analiza bazowa + {{extras}}',
                summaryTotalLabel: 'Razem',
                bonus: 'Bonus: godzinna konsultacja runiczna — omawiamy najlepsze i najtrudniejsze scenariusze.',
                cta: 'Zapisz się',
                details: `
                    <div class="detail-list">
                        <h4>Co wchodzi w analizę</h4>
                        <ul>
                            <li>Osobowość: charakter, mocne strony, gdzie tracisz energię.</li>
                            <li>Pieniądze i kariera: twój sposób zarabiania i okna wzrostu.</li>
                            <li>Zdrowie i energia: wrażliwe strefy i rytm regeneracji.</li>
                            <li>Intuicja i praktyki: bezpieczne rytuały i momenty mocy.</li>
                            <li>Relacje: dynamika pary lub portret partnera, jeśli szukasz.</li>
                        </ul>
                        <p class="detail-inline-note">Bonus: godzina na runach — patrzymy na najlepsze i ryzykowne scenariusze.</p>
                    </div>
                `
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
                addon: {
                    title: 'Synastria progresywna',
                    description: 'Moduł dodatkowy: roczny przegląd relacji — dynamika, triggery, okresy harmonii i napięcia oraz plan wzmocnienia więzi.',
                    price: '+20&nbsp;$'
                },
                bonus: 'Bonus: godzinna konsultacja runiczna — ustalamy optymalne i ryzykowne momenty roku.',
                details: `
                    <div class="detail-list">
                        <h4>Co daje prognoza</h4>
                        <ul>
                            <li>Główny motyw roku i mapa miesięcy.</li>
                            <li>Najlepsze okresy na pieniądze, pracę i relacje.</li>
                            <li>Okna szans i punkty ryzyka.</li>
                            <li>Plan na zdrowie i energię.</li>
                            <li>Dokładne daty na ważne kroki.</li>
                        </ul>
                        <h4>Dla kogo</h4>
                        <ul>
                            <li>Potrzebujesz klarownego planu i terminów.</li>
                            <li>Chcesz trafiać w dobry timing.</li>
                            <li>Ważne, by przeżyć rok bez chaosu i autosabotażu.</li>
                        </ul>
                        <p class="detail-inline-note">Opcjonalnie: synastria progresywna для пар — roczny plan dynamiki i okresów harmonii.</p>
                    </div>
                `,
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
                details: `
                    <div class="detail-list">
                        <h4>Jak wygląda rytuał</h4>
                        <ul>
                            <li>Szybka rozmowa: doprecyzowujemy cel i granice.</li>
                            <li>Dobieram formułę, runy i dokładne okno czasowe.</li>
                            <li>Rytuał z raportem foto/audio oraz wsparciem 7–14 dni.</li>
                        </ul>
                        <p class="detail-inline-note">Tematy: oczyszczanie, przyspieszanie zdarzeń, ciepło w relacji, finanse.</p>
                    </div>
                `,
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
                details: `
                    <div class="detail-list">
                        <h4>Co daje konsultacja runiczna</h4>
                        <ul>
                            <li>Szybkie rozkłady online na każde pytanie.</li>
                            <li>Konkretny wynik: przyczyna, działania, prognoza.</li>
                            <li>W razie potrzeby — ustawienie runiczne dla utrwalenia efektu.</li>
                        </ul>
                    </div>
                `,
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
            labels: {
                telegram: 'Telegram',
                email: 'E-mail',
                instagram: 'Instagram',
                tiktok: 'TikTok'
            },
            telegram: 't.me/@kim0n',
            email: 'kaminskyikiril5@gmail.com',
            instagram: 'kimon_wizard',
            tiktok: '@kim0nn'
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
            success: 'Wiadomość wysłana! Skontaktuję się wkrótce.',
            error: 'Nie udało się wysłać. Napisz na Telegramie lub spróbuj ponownie.',
            modalClose: 'Zamknij powiadomienie'
        },
        footer: {
            logo: 'Kyryl • Astrologia & Runy',
            note: '© 2024. Indywidualne konsultacje, rytuały i wsparcie. Wszelkie prawa zastrzeżone.',
            telegram: 'Telegram',
            instagram: 'Instagram',
            tiktok: 'TikTok',
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
        language: {
            label: 'Language'
        },
        theme: {
            lightLabel: 'Light theme',
            darkLabel: 'Dark theme',
            toggleTitle: 'Toggle theme'
        },
        preloader: {
            text: 'Summoning the vibe…'
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
            carousel: {
                prev: 'Previous',
                next: 'Next',
                dot: 'Slide'
            },
            actions: {
                more: 'Read more',
                less: 'Hide details'
            },
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
                    }
                },
                summaryTitle: 'Consultation package',
                summaryBase: 'Core natal chart reading',
                summaryWithExtras: 'Core reading + {{extras}}',
                summaryTotalLabel: 'Total',
                bonus: 'Bonus: 1-hour rune consultation to review the best and worst-case scenarios.',
                cta: 'Book now',
                details: `
                    <div class="detail-list">
                        <h4>What's inside the reading</h4>
                        <ul>
                            <li>Personality: core traits, strengths, where energy leaks.</li>
                            <li>Money & career: your earning style and growth windows.</li>
                            <li>Health & energy: weak spots and your recovery rhythm.</li>
                            <li>Intuition & practice: safe rituals and peak periods.</li>
                            <li>Relationships: couple dynamics or partner portrait if you're searching.</li>
                        </ul>
                        <p class="detail-inline-note">Bonus: 1h rune session — we map the best and riskiest scenarios.</p>
                    </div>
                `
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
                addon: {
                    title: 'Progressive synastry',
                    description: 'Optional add-on: a yearly relationship map — dynamics, triggers, harmony peaks and tension, plus a plan to keep the bond strong.',
                    price: '+$20'
                },
                bonus: 'Bonus: 1-hour rune consultation to map the most supportive and risky timelines of the year.',
                details: `
                    <div class="detail-list">
                        <h4>What the yearly forecast covers</h4>
                        <ul>
                            <li>Main theme of the year and a month-by-month map.</li>
                            <li>Best periods for money, work, and relationships.</li>
                            <li>Opportunity windows and risk points.</li>
                            <li>Health and energy plan with recovery timing.</li>
                            <li>Exact dates for launches and key moves.</li>
                        </ul>
                        <h4>Perfect for</h4>
                        <ul>
                            <li>Those who need a clear plan and deadlines.</li>
                            <li>Anyone who wants to act in the right timing.</li>
                            <li>People who prefer a calm, structured year instead of chaos.</li>
                        </ul>
                        <p class="detail-inline-note">Add-on: progressive synastry for couples — a concise yearly map of harmony and tension.</p>
                    </div>
                `,
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
                details: `
                    <div class="detail-list">
                        <h4>How the ritual works</h4>
                        <ul>
                            <li>Quick call to align the request and boundaries.</li>
                            <li>I pick the formula, runes, and exact timing.</li>
                            <li>Ritual with photo/audio recap plus 7–14 days of follow-up.</li>
                        </ul>
                        <p class="detail-inline-note">Focus areas: cleansing, speeding events up, warmth in relationships, finances.</p>
                    </div>
                `,
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
                details: `
                    <div class="detail-list">
                        <h4>What you get from a rune reading</h4>
                        <ul>
                            <li>Live spreads for any question.</li>
                            <li>Clear answer: cause, best move, outlook.</li>
                            <li>Rune adjustment if needed to lock in the result.</li>
                        </ul>
                    </div>
                `,
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
            labels: {
                telegram: 'Telegram',
                email: 'E-mail',
                instagram: 'Instagram',
                tiktok: 'TikTok'
            },
            telegram: 't.me/@kim0n',
            email: 'kaminskyikiril5@gmail.com',
            instagram: 'kimon_wizard',
            tiktok: '@kim0nn'
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
            success: 'Request sent! I will reach out shortly.',
            error: 'Could not send. Message me on Telegram or try again.',
            modalClose: 'Close message'
        },
        footer: {
            logo: 'Kirill • Astrology & Runes',
            note: '© 2024. Individual consultations, rituals, and support. All rights reserved.',
            telegram: 'Telegram',
            instagram: 'Instagram',
            tiktok: 'TikTok',
            email: 'Email'
        }
    }
};

let currentLocale = fallbackLocale;

const prefersDarkScheme = typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;

const basePrice = 80;
const extrasForm = document.getElementById('natal-form');
const contactForm = document.querySelector('.contact__form');
const errorMessage = document.querySelector('[data-error-message]');
const langToggleButton = document.querySelector('[data-lang-toggle]');
const langMenu = document.querySelector('[data-lang-menu]');
const langOptions = document.querySelectorAll('[data-lang-option]');
const currentLangIndicator = document.querySelector('[data-current-lang]');
const langSwitcher = document.querySelector('[data-lang-switcher]');
const localeField = document.querySelector('[data-locale-field]');
const detailToggles = document.querySelectorAll('[data-detail-toggle]');
const detailCloseButtons = document.querySelectorAll('[data-detail-close]');
const detailScrollPositions = new Map();
const formModal = document.querySelector('[data-form-modal]');
const formModalText = document.querySelector('[data-form-modal-text]');
const formModalClose = document.querySelector('[data-form-modal-close]');
const formModalOverlay = document.querySelector('[data-form-modal-overlay]');
let refreshCarouselPosition = null;

window.addEventListener('load', () => {
    hidePreloader();
    initGsapAnimations();
});

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

function hidePreloader() {
    if (!preloader) return;
    preloader.classList.add('is-hidden');
    setTimeout(() => {
        preloader?.remove();
    }, 600);
}

function initGsapAnimations() {
    if (typeof window === 'undefined' || typeof window.gsap === 'undefined') {
        return;
    }
    const gsapInstance = window.gsap;
    if (!gsapInstance) return;
    if (window.ScrollTrigger) {
        gsapInstance.registerPlugin(window.ScrollTrigger);
    }
    const timeline = gsapInstance.timeline({ defaults: { duration: 1.1, ease: 'power3.out' } });
    timeline
        .from('.hero__tag', { opacity: 0, y: 20 })
        .from('.hero__title', { opacity: 0, y: 40 }, 0.1)
        .from('.hero__subtitle', { opacity: 0, y: 30 }, 0.2)
        .from('.hero__cta .btn', { opacity: 0, y: 20, stagger: 0.1 }, 0.4);

    if (window.ScrollTrigger) {
        parallaxElements.forEach((element) => {
            const depth = Number(element.dataset.depth || 0.2);
            gsapInstance.to(element, {
                yPercent: depth * 35,
                ease: 'none',
                scrollTrigger: {
                    trigger: element.closest('.hero') || element,
                    start: 'top bottom',
                    scrub: true
                }
            });
        });
    }
}


function initServicesCarousel() {
    // Disable carousel logic on mobile (replaced by vertical stack + scroll spy)
    if (window.innerWidth < 1024) return;

    const carousel = document.querySelector('[data-services-carousel]');
    if (!carousel) {
        refreshCarouselPosition = null;
        return;
    }
    const viewport = carousel.querySelector('[data-carousel-viewport]');
    const slides = viewport ? Array.from(carousel.querySelectorAll('[data-service-card]')) : [];
    if (!viewport || slides.length === 0) {
        refreshCarouselPosition = null;
        return;
    }
    const dots = Array.from(carousel.querySelectorAll('[data-carousel-dot]'));
    let currentIndex = 0;
    let scrollAnimationFrame = null;

    const updateSlideClasses = () => {
        slides.forEach((slide, index) => {
            slide.classList.toggle('is-active', index === currentIndex);
            slide.classList.toggle('is-prev', index === currentIndex - 1);
            slide.classList.toggle('is-next', index === currentIndex + 1);
        });
        dots.forEach((dot, index) => {
            dot.setAttribute('aria-pressed', String(index === currentIndex));
        });
    };

    const scrollToIndex = (index, behavior = 'smooth') => {
        if (!slides.length) return;
        currentIndex = (index + slides.length) % slides.length;
        const targetSlide = slides[currentIndex];
        const viewportCenter = viewport.offsetWidth / 2;
        const slideCenter = targetSlide.offsetLeft + targetSlide.offsetWidth / 2;
        const left = Math.max(0, slideCenter - viewportCenter);
        viewport.scrollTo({ left, behavior });
        updateSlideClasses();
    };

    const detectClosestSlide = () => {
        const viewportCenter = viewport.scrollLeft + viewport.offsetWidth / 2;
        let closestIndex = currentIndex;
        let smallestDistance = Number.POSITIVE_INFINITY;
        slides.forEach((slide, index) => {
            const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
            const distance = Math.abs(slideCenter - viewportCenter);
            if (distance < smallestDistance) {
                smallestDistance = distance;
                closestIndex = index;
            }
        });
        if (closestIndex !== currentIndex) {
            currentIndex = closestIndex;
            updateSlideClasses();
        }
    };

    const handleScroll = () => {
        if (scrollAnimationFrame) {
            cancelAnimationFrame(scrollAnimationFrame);
        }
        scrollAnimationFrame = requestAnimationFrame(detectClosestSlide);
    };

    viewport.addEventListener('scroll', handleScroll);
    dots.forEach((dot) => {
        dot.addEventListener('click', () => {
            const targetIndex = Number(dot.dataset.carouselDot || 0);
            scrollToIndex(targetIndex);
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth < 1024) {
            scrollToIndex(currentIndex, 'auto');
        } else {
            // Clean up if needed on desktop, though CSS handles display
        }
    });

    refreshCarouselPosition = () => {
        if (window.innerWidth < 1024) {
            scrollToIndex(currentIndex, 'auto')
        }
    };

    updateSlideClasses();
    if (window.innerWidth < 1024) {
        scrollToIndex(0, 'auto');
    }
}

// Add resize listener to handle mode switch
window.addEventListener('resize', () => {
    // If crossing the breakpoint 1024px
    // Ideally we could destroy/re-init, but for now CSS handles most visuals.
    // We just ensure JS doesn't interfere on desktop.
});

// Mobile Accordion Logic
function initMobileAccordion() {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (window.innerWidth >= 1024) return; // Desktop grid doesn't need accordion

            // Prevent collapsing if clicking inner interactive elements (like buttons) 
            // unless we want to allow collapsing from anywhere? 
            // Better to allow collapsing from header, but maybe not from form inputs if any?
            // The form is inside. If user clicks form input, we shouldn't collapse.
            if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input') || e.target.closest('label')) {
                return;
            }

            // Toggle expansion
            // Option: Close others? For now, let's keep multiple open allowed, simpler.
            const wasExpanded = card.classList.contains('is-expanded');

            // Close others if we want "Accordion" style (one open at a time)
            // cards.forEach(c => c.classList.remove('is-expanded'));

            if (!wasExpanded) {
                card.classList.add('is-expanded');
            } else {
                card.classList.remove('is-expanded');
            }
        });
    });
}

initMobileAccordion();

// Robust Scroll Spy for Mobile Focus
function initScrollSpy() {
    // Only run on mobile
    if (window.innerWidth >= 1024) return;

    const cards = Array.from(document.querySelectorAll('.service-card'));
    let ticking = false;

    function updateFocus() {
        if (window.innerWidth >= 1024) return;

        // Focus zone: Top 30% of the viewport (visually pleasing for reading title)
        const focusZone = window.innerHeight * 0.3;

        let bestCandidate = null;
        let minDistance = Infinity;

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            // Distance from card top to focus zone
            const distance = Math.abs(rect.top - focusZone);

            // Candidate must be at least partly visible
            if (distance < minDistance) {
                minDistance = distance;
                bestCandidate = card;
            }
        });

        if (bestCandidate) {
            // Force strict single focus
            cards.forEach(c => {
                if (c === bestCandidate) {
                    if (!c.classList.contains('scroll-focus')) {
                        c.classList.add('scroll-focus');
                    }
                } else {
                    // Always clear others, even if bestCandidate didn't change
                    if (c.classList.contains('scroll-focus')) {
                        c.classList.remove('scroll-focus');
                    }
                }
            });
        }
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateFocus);
            ticking = true;
        }
    }, { passive: true });

    // Initial check
    setTimeout(updateFocus, 100);
}

initScrollSpy();

function updateLocaleIndicator(locale) {
    if (currentLangIndicator) {
        currentLangIndicator.textContent = locale.toUpperCase();
    }
    langOptions.forEach((option) => {
        const isActive = option.dataset.langOption === locale;
        option.setAttribute('aria-selected', String(isActive));
        option.classList.toggle('is-active', isActive);
    });
    if (localeField) {
        localeField.value = locale;
    }
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

function setLangMenuVisibility(show) {
    if (!langMenu || !langToggleButton) {
        return;
    }
    langMenu.hidden = !show;
    langToggleButton.setAttribute('aria-expanded', String(show));
    if (langSwitcher) {
        langSwitcher.classList.toggle('is-open', show);
    }
}

function closeLangMenu() {
    setLangMenuVisibility(false);
}

function toggleLangMenuVisibility() {
    const isOpen = langMenu && !langMenu.hidden;
    setLangMenuVisibility(!isOpen);
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
    updateLocaleIndicator(currentLocale);

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

    document.querySelectorAll('[data-i18n-target]').forEach((element) => {
        const key = element.dataset.i18nTarget;
        const value = key ? translate(key) : undefined;
        if (value !== undefined) {
            element.setAttribute('content', value);
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

    const dotLabel = translate('services.carousel.dot') || 'Slide';
    document.querySelectorAll('[data-carousel-dot]').forEach((dot, index) => {
        dot.setAttribute('aria-label', `${dotLabel} ${index + 1}`);
    });

    updateSchema(currentLocale);
    updateThemeControls(document.body.dataset.theme === 'dark' ? 'dark' : 'light');
    renderSummary();
    if (typeof refreshCarouselPosition === 'function') {
        refreshCarouselPosition();
    }
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
        themeIcon.dataset.icon = isDark ? 'moon' : 'sun';
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
    if (!extrasForm) return;
    const extras = Array.from(extrasForm.querySelectorAll('input[name="extra"]:checked'));
    const total = extras.reduce((sum, item) => sum + Number(item.dataset.price || 0), basePrice);
    const listEl = document.getElementById('extras-list');
    const totalEl = document.querySelector('[data-extras-total]') || document.getElementById('extras-total');

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
        totalEl.setAttribute('data-amount', String(total));
    }
}

function setDetailState(targetId, state) {
    if (!targetId) return;
    const target = document.getElementById(targetId);
    if (!target) return;
    const toggleButton = document.querySelector(`[data-detail-target="${targetId}"]`);
    const shouldOpen = typeof state === 'boolean' ? state : target.hidden;
    target.hidden = !shouldOpen;
    target.classList.toggle('is-open', shouldOpen);
    if (toggleButton) {
        toggleButton.setAttribute('aria-expanded', String(shouldOpen));
        toggleButton.classList.toggle('is-hidden', shouldOpen);
    }
}

function rememberDetailScrollPosition(triggerElement, targetId) {
    if (!triggerElement || !targetId) return;
    const reference = triggerElement.closest('.service-card') || triggerElement;
    const rect = reference.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top - 16;
    detailScrollPositions.set(targetId, Math.max(0, scrollTop));
}

function handleDetailToggle(button) {
    if (!button) return;
    const targetId = button.dataset.detailTarget;
    if (!targetId) return;
    const target = document.getElementById(targetId);
    const nextState = target ? target.hidden : true;
    if (nextState && target) {
        rememberDetailScrollPosition(button, targetId);
    }
    setDetailState(targetId, nextState);
    if (!nextState) {
        restoreDetailScroll(targetId);
    }
}

function restoreDetailScroll(targetId) {
    if (!targetId) return;
    const storedPosition = detailScrollPositions.get(targetId);
    if (typeof storedPosition === 'number' && Number.isFinite(storedPosition)) {
        window.scrollTo({ top: Math.max(0, storedPosition), behavior: 'smooth' });
        detailScrollPositions.delete(targetId);
    }
}

function showInlineError() {
    if (!errorMessage) return;
    const errorText = translate('form.error');
    if (errorText) {
        errorMessage.textContent = errorText;
    }
    errorMessage.hidden = false;
    requestAnimationFrame(() => {
        errorMessage.classList.add('is-visible');
    });
    setTimeout(() => {
        errorMessage?.classList.remove('is-visible');
        errorMessage?.setAttribute('hidden', '');
    }, 6000);
}

function hideInlineError() {
    if (!errorMessage) return;
    errorMessage.classList.remove('is-visible');
    errorMessage.setAttribute('hidden', '');
}

function openFormModal() {
    if (!formModal) return;
    const successText = translate('form.success');
    if (formModalText && successText) {
        formModalText.textContent = successText;
    }
    formModal.hidden = false;
    requestAnimationFrame(() => {
        formModal.classList.add('is-visible');
    });
}

function closeFormModal() {
    if (!formModal) return;
    formModal.classList.remove('is-visible');
    setTimeout(() => {
        formModal?.setAttribute('hidden', '');
    }, 200);
}

if (extrasForm) {
    extrasForm.addEventListener('change', renderSummary);
}

if (contactForm) {
    const formEndpoint = contactForm.getAttribute('action');
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Basic validation check
        if (!contactForm.checkValidity()) {
            // Let browser show standard validation or add custom styles
            contactForm.reportValidity();
            return;
        }

        hideInlineError();
        if (!formEndpoint) {
            contactForm.submit();
            return;
        }
        const formData = new FormData(contactForm);
        formData.set('locale', currentLocale);
        try {
            const response = await fetch(formEndpoint, {
                method: 'POST',
                headers: {
                    Accept: 'application/json'
                },
                body: formData
            });
            if (!response.ok) {
                throw new Error('Network error');
            }
            contactForm.reset();
            openFormModal();
        } catch (error) {
            showInlineError();
        }
    });
}

const initialLocale = detectLocale();
applyTranslations(initialLocale);

const initialTheme = getPreferredTheme();
applyTheme(initialTheme);
initServicesCarousel();

detailToggles.forEach((button) => {
    button.addEventListener('click', () => handleDetailToggle(button));
});

detailCloseButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const targetId = button.dataset.detailClose;
        rememberDetailScrollPosition(button, targetId);
        setDetailState(targetId, false);
        restoreDetailScroll(targetId);
    });
});

[formModalClose, formModalOverlay].forEach((element) => {
    if (!element) return;
    element.addEventListener('click', closeFormModal);
});

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

if (langToggleButton) {
    langToggleButton.addEventListener('click', () => {
        toggleLangMenuVisibility();
    });
}

langOptions.forEach((option) => {
    option.addEventListener('click', () => {
        const targetLocale = option.dataset.langOption;
        if (targetLocale && translations[targetLocale]) {
            closeLangMenu();
            applyTranslations(targetLocale);
        }
    });
});

document.addEventListener('click', (event) => {
    if (!langSwitcher) return;
    if (langMenu?.hidden) return;
    if (!langSwitcher.contains(event.target)) {
        closeLangMenu();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeLangMenu();
        closeFormModal();
    }
});
