module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    testMatch: ['**/src/**/*.test.js'],
    moduleFileExtensions: ['js', 'json', 'node'],
};
