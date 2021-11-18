import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import alias from '@rollup/plugin-alias';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import tsconfigPaths from 'vite-tsconfig-paths'

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig(({ command, mode })=>{

  console.log(command);
  console.log(mode);
  
 return {
  plugins: [react(),alias(),viteCommonjs(),tsconfigPaths()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(projectRootDir, 'src') },
      { find: '@Components', replacement: resolve(projectRootDir, 'src/components') },
      { find: '@Assets', replacement: resolve(projectRootDir, 'src/assets') },
      { find: '@Configs', replacement: resolve(projectRootDir, 'src/configs') },
      { find: '@Pages', replacement: resolve(projectRootDir, 'src/pages') },
      { find: '@Layouts', replacement: resolve(projectRootDir, 'src/layouts') },
      { find: '@Themes', replacement: resolve(projectRootDir, 'src/themes') },
      { find: '@StyleSheets', replacement: resolve(projectRootDir, 'src/stylesheets') },
      { find: '@Interfaces', replacement: resolve(projectRootDir, 'src/interfaces') },
      { find: '@Metas', replacement: resolve(projectRootDir, 'src/metas') },
      { find: '@Helpers', replacement: resolve(projectRootDir, 'src/helpers') },
      { find: '@Utils', replacement: resolve(projectRootDir, 'src/utils') },
      { find: '@Hooks', replacement: resolve(projectRootDir, 'src/hooks') },
      { find: '@Recoils', replacement: resolve(projectRootDir, 'src/recoils') },
      { find: '@Apis', replacement: resolve(projectRootDir, 'src/apis') },
      { find: '@Constants', replacement: resolve(projectRootDir, 'src/constants') },
      { find: '@Reduxs', replacement: resolve(projectRootDir, 'src/reduxs') },
      { find: '@Common', replacement: resolve(projectRootDir, 'src/components/common') },
      { find: '@Hocs', replacement: resolve(projectRootDir, 'src/hocs') },
      
    ],
  },
  define: {
    'process.env': {},
    'process': {},
    global: "window",
  },
  server: {
    port: 9001
  }
 }
})
