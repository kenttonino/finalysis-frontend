const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'page.js'],
  testMatch: ['**/*.(test|spec).(js|jsx)'],
  globals: {
    'ts-jest': {
      useBabelrc: true,
      tsConfigFile: 'jest.tsconfig.json',
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],

  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/src/(.*)$': '<rootDir>/src/$1',

    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
