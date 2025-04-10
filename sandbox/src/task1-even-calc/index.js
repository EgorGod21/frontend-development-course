/**
 * Возвращает сумму всех чётных чисел в массиве
 *
 * @param {number[]} numbers Массив чисел
 * @returns {number} Сумма чётных чисел
 */
export const solutionFn = (numbers) => {
    const initialValue = 0;
    const sumWithInitial = numbers.filter(item => item % 2 == 0).reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
      );

    return sumWithInitial;
};
