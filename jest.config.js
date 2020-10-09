/* eslint-disable no-undef */

module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],

  coverageThreshold: {
    global: {

      functions: 15,
      lines: 15,
      statements: 15,
    },
  },
};
