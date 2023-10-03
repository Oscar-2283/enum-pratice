import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite';
// import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // resolvers: [ElementPlusResolver()],
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      // global imports to register
      imports: [
        // presets
        'vue',
        'vue-router',
        // '@vueuse/core',
        {
          // custom
          // '@vueuse/core': [
          //    // named imports
          //    'useMouse', // import { useMouse } from '@vueuse/core',
          //    // alias
          //    ['useFetch', 'useMyFetch'],
          // ],
          axios: [
            // default imports
            ['default', 'axios'],
          ],
        },
      ],
      vueTemplate: false,
      // eslintrc: {
      //    enabled: false, // Default false
      //    filepath: './.eslintrc-auto-import.json',
      //    globalsPropValue: true,
      // },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
