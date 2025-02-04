import type { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    rootDir: '../../',
    transform: {
        '^.+\\.(ts|tsx)$': [
            'ts-jest',
            {
                tsconfig: '<rootDir>tsconfig.app.json',
            },
        ],
        '^.+\\.svg$': 'jest-transformer-svg',
    },
    clearMocks: true,
    setupFilesAfterEnv: ['<rootDir>config/jest/jest-setup.ts'],
    testMatch: ['<rootDir>src/**/*.test.[tj]s?(x)'],
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: ['node_modules'],

    modulePaths: ['<rootDir>src'],
    //An array of file extensions your modules use
    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    moduleNameMapper: {
        ...pathsToModuleNameMapper(
            {
                '@/*': ['src/*'],
                '@app/*': ['src/app/*'],
                '@entities/*': ['/src/entities/*'],
                '@fetures/*': ['/src/features/*'],
                '@pages/*': ['/src/pages/*'],
                '@shared/*': ['/src/shared/*'],
                '@widgets/*': ['/src/widgets/*'],
                '@images/*': ['src/shared/assets/images/*'],
                '@icons/*': ['src/shared/assets/icons/*'],
                '@uikit/*': ['src/shared/uikit/*'],
            },
            {
                prefix: '<rootDir>',
            },
        ),
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
};

export default config;
