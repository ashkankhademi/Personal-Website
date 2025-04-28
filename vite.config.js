import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    root: '.', // serve from root so index.html works
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: 'index.html',
        },
    },
});

