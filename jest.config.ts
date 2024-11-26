/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
    // Automatically clear mock calls, instances, contexts and results before every test
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    clearMocks: true,
    testMatch: ['<rootDir>src/**/*.test.[tj]s?(x)'],
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: ['node_modules'],

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
};

export default config;
