module.exports = {
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/.storybook/**",
    "!**/tests/**",
    "!**/coverage/**",
    "!jest.config.js",
  ],
  testMatch: ["<rootDir>/__tests__/**/*.{spec,test}.{js,jsx,ts,tsx}"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFiles: ["<rootDir>/.jest/setupFiles.ts"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setupFilesAfterEnv.ts"],
  preset: "ts-jest",
  testPathIgnorePatterns: [
    "/.next/",
    "/node_modules/",
    "/lib/",
    "/tests/",
    "/coverage/",
    "/.storybook/",
    "/.husky/",
    "/.vscode/",
    "/config/",
    "/public/",
    "/dist/",
    "/build/",
  ],
  //testRegex: "(<rootDir>/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$",
  testURL: "http://localhost",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  moduleNameMapper: {
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@/(.*)": "<rootDir>/src/$1",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  transform: {
    ".(ts|tsx)": "babel-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
