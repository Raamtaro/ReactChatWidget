import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}
  },
  build: {

    lib: {
      entry: './src/initializeChatWidget.jsx',
      name: 'ChatWidget',
      fileName: (format) => `chat-widget.${format}.js`
    }
  }
});
