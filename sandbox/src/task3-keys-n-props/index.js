/**
 * Возвращает объект с количеством вхождений типов в переданном объекте
 *
 * @param {Object} obj Объект
 * @returns {Object} Объект с количеством вхождений типов
 */
export const solutionFn = (obj) => {
    const result = {};
    Object.values(obj).forEach(value => {
        const type = typeof value;
        if (result[type] === undefined) {
            result[type] = 1;
        } else {
            result[type]++;
        }
    });
    return result;
};
