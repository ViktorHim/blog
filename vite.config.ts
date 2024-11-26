import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr({
            svgrOptions: {
                exportType: 'default',
                ref: true,
                svgo: false,
                titleProp: true,
            },
            include: '**/*.svg',
        }),
    ],
    server: {
        host: true,
    },
    resolve: {
        alias: {
            '@': '/src',
            '@icons': '/src/shared/assets/icons',
            '@images': '/src/shared/assets/images',
            '@uikit': '/src/shared/uikit',
        },
    },
});
