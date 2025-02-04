import type { StorybookConfig } from '@storybook/react-vite';
import svgr from 'vite-plugin-svgr';
import path from 'path';

const config: StorybookConfig = {
    async viteFinal(config) {
        config.plugins?.push(
            svgr({
                svgrOptions: {
                    exportType: 'default',
                    ref: true,
                    svgo: false,
                    titleProp: true,
                },
                include: '**/*.svg',
            }),
        );

        config.resolve = config.resolve || {};
        config.resolve.alias = {
            '@shared': path.resolve(__dirname, '../../src/shared'),
            '@app': path.resolve(__dirname, '../../src/app'),
            '@entities': path.resolve(__dirname, '../../src/entities'),
            '@features': path.resolve(__dirname, '../../src/features'),
            '@pages': path.resolve(__dirname, '../../src/pages'),
            '@widgets': path.resolve(__dirname, '../../src/widgets'),
            '@images': path.resolve(
                __dirname,
                '../../src/shared/assets/images',
            ),
            '@icons': path.resolve(__dirname, '../../src/shared/assets/icons'),
            '@uikit': path.resolve(__dirname, '../../src/shared/uikit'),
        };

        return config; // Возвращаем обновленный конфиг Vite
    },
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
};
export default config;
