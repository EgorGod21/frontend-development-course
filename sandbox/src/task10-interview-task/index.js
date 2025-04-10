
/**
 * Возвращает одноразрядное число, полученное в результате итеративного перемножения всех цифр числа
 *
 * @param {Number} num
 * @returns {Number}
 */
export const solutionFn = (num) => {
    while (num >= 10) {
        let product = 1;
        let currentNum = num;

        while (currentNum > 0) {
            const digit = currentNum % 10;
            product *= digit;
            currentNum = Math.floor(currentNum / 10);
        }

        num = product;
    }

    return num;
};
