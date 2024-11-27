import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import UnpluginTypia from "@ryoppippi/unplugin-typia/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    TanStackRouterVite(), 
    UnpluginTypia()
  ],
})
