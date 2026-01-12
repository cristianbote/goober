import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
    const isSSR = mode === 'ssr';

    return {
        plugins: [preact()],
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src')
            }
        },
        build: isSSR
            ? {
                  ssr: true,
                  outDir: 'dist/server',
                  rollupOptions: {
                      input: resolve(__dirname, 'src/main.jsx')
                  }
              }
            : {
                  outDir: 'dist',
                  emptyOutDir: true
              },
        ssr: {
            noExternal: ['goober', 'preact-iso']
        }
    };
});
