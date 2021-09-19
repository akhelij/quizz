import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import Pages from "vite-plugin-pages";
import Components from 'unplugin-vue-components/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),Pages({pagesDir: "src/views"}),Components({ /* options */ }),],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
      '~': path.resolve(__dirname, './src'),
      '@': path.resolve(__dirname, './public'),
    },
  },
  server: {
    fs: {
      strict: true,
    },
  },
})
