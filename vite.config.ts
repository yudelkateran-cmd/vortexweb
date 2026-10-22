import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/vortexweb/', // <-- ¡Añade esta línea con el nombre de tu repositorio!
})