import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/m-abm/',
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.AIzaSyDZA_9-OyzCUZB1Yyo0bCmRU26Rv9yi4d0Y': JSON.stringify(env.AIzaSyDZA_9-OyzCUZB1Yyo0bCmRU26Rv9yi4d0),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
