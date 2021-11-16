import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@Components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@Assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@Configs', replacement: path.resolve(__dirname, 'src/configs') },
      { find: '@Pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@Layouts', replacement: path.resolve(__dirname, 'src/layouts') },
      { find: '@Themes', replacement: path.resolve(__dirname, 'src/themes') },
      { find: '@StyleSheets', replacement: path.resolve(__dirname, 'src/stylesheets') },
      { find: '@Interfaces', replacement: path.resolve(__dirname, 'src/interfaces') },
      { find: '@Metas', replacement: path.resolve(__dirname, 'src/metas') },
      { find: '@Helpers', replacement: path.resolve(__dirname, 'src/helpers') },
      { find: '@Utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@Hooks', replacement: path.resolve(__dirname, 'src/hocs') },
      { find: '@Recoils', replacement: path.resolve(__dirname, 'src/recoils') },
      { find: '@Apis', replacement: path.resolve(__dirname, 'src/apis') },
      { find: '@Constants', replacement: path.resolve(__dirname, 'src/constants') },
      
    ],
  },
})
