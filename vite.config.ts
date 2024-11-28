import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Esto permite que otros dispositivos en la red accedan al servidor
    port: 5173, // Puedes cambiar el puerto si lo necesitas
  },
});