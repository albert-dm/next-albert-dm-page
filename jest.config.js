/* eslint-disable no-undef */

module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],

  coverageThreshold: {
    global: {

      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
};
