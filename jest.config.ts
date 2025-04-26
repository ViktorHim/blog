import type { Config } from 'jest';

const config: Config = {
    clearMocks: true,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                tsconfig: 'tsconfig.app.json',
                diagnostics: false,
            },
        ],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    moduleDirectories: ['node_modules'],
    modulePaths: ['<rootDir>/src'],
    rootDir: './',
    testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
};

export default config;
