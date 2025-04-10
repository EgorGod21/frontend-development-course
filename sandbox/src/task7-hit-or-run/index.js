
/**
 * Бей или беги
 *
 * @param {Number} a Левая граница
 * @param {Number} b Правая граница
 * @returns {('hit' | 'run')}
 */
export const hitOrRun = (a, b) => {
    const randomInt = Math.floor(Math.random() * (b - a + 1)) + a;

    const isPrime = (n) => {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    };

    return isPrime(randomInt) ? 'run' : 'hit';
};
