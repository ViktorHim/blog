import type { Config } from 'jest';

const config: Config = {
    clearMocks: true,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    setupFilesAfterEnv: ['<rootDir>/config/setupTests.ts'],
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                tsconfig: '<rootDir>/tsconfig.app.json',
                diagnostics: false,
            },
        ],
    },
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
        '^.+\\.svg(\\?react)?$': '<rootDir>/config/__mocks__/svgMock.tsx',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    moduleDirectories: ['../node_modules'],
    modulePaths: ['<rootDir>/src'],
    rootDir: '../',
    testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
};

export default config;
