const THEME_KEY = 'kirill-theme';
const themeToggle = document.getElementById('theme-toggle');

const updateThemeToggleLabel = (isDark) => {
    if (!themeToggle) return;
    const label = themeToggle.querySelector('.theme-toggle__label');
    themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    if (label) {
        label.textContent = isDark ? 'Тёмная тема' : 'Светлая тема';
    }
};

const applyTheme = (theme) => {
    const isDark = theme === 'dark';
    document.body.classList.toggle('theme-dark', isDark);
    updateThemeToggleLabel(isDark);
};

const storedTheme = localStorage.getItem(THEME_KEY);
if (storedTheme === 'dark' || storedTheme === 'light') {
    applyTheme(storedTheme);
} else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.contains('theme-dark');
        const nextTheme = isDark ? 'light' : 'dark';
        applyTheme(nextTheme);
        localStorage.setItem(THEME_KEY, nextTheme);
    });
}

const basePrice = 5900;
const form = document.getElementById('natal-form');
const totalEl = document.getElementById('extras-total');
const listEl = document.getElementById('extras-list');

if (form) {
    form.addEventListener('change', () => {
        const extras = Array.from(form.querySelectorAll('input[name="extra"]:checked'));
        const total = extras.reduce((sum, item) => sum + Number(item.dataset.price), basePrice);

        if (extras.length > 0) {
            const names = extras.map(item => item.value).join(', ');
            listEl.textContent = `Базовый разбор + ${names}`;
        } else {
            listEl.textContent = 'Базовый разбор натальной карты';
        }

        totalEl.textContent = `${total.toLocaleString('ru-RU')} ₽`;
    });
}

const contactForm = document.querySelector('.contact__form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        alert(`Спасибо, ${name}! Я свяжусь с вами в ближайшее время.`);
        contactForm.reset();
        listEl.textContent = 'Базовый разбор натальной карты';
        totalEl.textContent = `${basePrice.toLocaleString('ru-RU')} ₽`;
    });
}
