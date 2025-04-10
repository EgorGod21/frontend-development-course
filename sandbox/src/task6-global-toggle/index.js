
/**
 * Глобальный переключатель стилей
 *
 * @param {String} className Название класса
 */
export const globalToggle = (className) => {
    const isActive = className.endsWith('_active');
    const defaultClass = isActive ? className.replace('_active', '') : className;
    const activeClass = defaultClass + '_active';

    const elements = [
        ...document.querySelectorAll(`.${defaultClass}`),
        ...document.querySelectorAll(`.${activeClass}`)
    ];

    if (elements.length === 0) return;

    elements.forEach(el => {
        if (el.classList.contains(defaultClass)) {
            el.classList.replace(defaultClass, activeClass);
        } else if (el.classList.contains(activeClass)) {
            el.classList.replace(activeClass, defaultClass);
        }
    });
};
