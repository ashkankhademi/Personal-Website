import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/Personal-Website/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                projects: resolve(__dirname, 'projects.html'),
                workexperience: resolve(__dirname, 'workexperience.html'),
            },
        },
    },
});


