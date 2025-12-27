import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    base: '/Personal-Website/',
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'public/styles3.css',
                    dest: '.'
                }
            ]
        })
    ],
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


