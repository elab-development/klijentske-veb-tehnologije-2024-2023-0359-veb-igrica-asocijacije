import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // dodat kao plugin 

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});


//da se koristi  tailwind css u reactu ,automatski generisan s