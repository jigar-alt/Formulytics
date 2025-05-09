import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic', // Optional: enables new JSX transform (no need to import React)
    }),
    tailwindcss(),
  ],
});
