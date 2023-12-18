/** @type {import('jest').Config} */
const config = {
  preset: "jest-expo",
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  transform: {
    ".+\\.jsx?$": "babel-jest",
  },

  modulePathIgnorePatterns: ["<rootDir>/build/"],
  setupFilesAfterEnv: ["<rootDir>/setup-jest.js"],
};

module.exports = config;
