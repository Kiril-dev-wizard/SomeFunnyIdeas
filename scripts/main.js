const themeToggle = document.querySelector('[data-theme-toggle]');
const themeIcon = themeToggle?.querySelector('[data-theme-icon]');
const themeLabel = themeToggle?.querySelector('[data-theme-label]');
const themeStorageKey = 'preferred-theme';
const prefersDarkScheme = typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;

const applyTheme = (theme, persist = false) => {
    const normalizedTheme = theme === 'dark' ? 'dark' : 'light';
    document.body.dataset.theme = normalizedTheme;

    const isDark = normalizedTheme === 'dark';
    if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', String(isDark));
        themeToggle.setAttribute('title', isDark ? 'Включить светлую тему' : 'Включить тёмную тему');
    }
    if (themeIcon) {
        themeIcon.textContent = isDark ? '🌙' : '🌞';
    }
    if (themeLabel) {
        themeLabel.textContent = isDark ? 'Тёмная тема' : 'Светлая тема';
    }

    if (persist) {
        try {
            localStorage.setItem(themeStorageKey, normalizedTheme);
        } catch (error) {
            console.warn('Не удалось сохранить тему:', error);
        }
    }
};

const getStoredTheme = () => {
    try {
        return localStorage.getItem(themeStorageKey);
    } catch (error) {
        console.warn('Не удалось получить тему из хранилища:', error);
        return null;
    }
};

const getPreferredTheme = () => {
    const stored = getStoredTheme();
    if (stored) {
        return stored;
    }
    return prefersDarkScheme && prefersDarkScheme.matches ? 'dark' : 'light';
};

applyTheme(getPreferredTheme());

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

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
});

const basePrice = 80;
const form = document.getElementById('natal-form');
const totalEl = document.getElementById('extras-total');
const listEl = document.getElementById('extras-list');

const renderSummary = () => {
    if (!form) return;
    const extras = Array.from(form.querySelectorAll('input[name="extra"]:checked'));
    const total = extras.reduce((sum, item) => sum + Number(item.dataset.price), basePrice);

    if (listEl) {
        listEl.textContent = extras.length
            ? `Базовый разбор + ${extras.map((item) => item.value).join(', ')}`
            : 'Базовый разбор натальной карты';
    }

    if (totalEl) {
        totalEl.textContent = currencyFormatter.format(total);
    }
};

if (form) {
    form.addEventListener('change', renderSummary);
    renderSummary();
}

const contactForm = document.querySelector('.contact__form');
const successMessage = document.querySelector('[data-success-message]');

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
