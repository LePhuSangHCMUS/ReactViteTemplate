import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import alias from '@rollup/plugin-alias';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import reactCssModule from "vite-plugin-react-css-modules";
import tsconfigPaths from 'vite-tsconfig-paths';
import { dependencies } from './package.json';
import { visualizer } from 'rollup-plugin-visualizer';
import { inspectorServer } from 'react-dev-inspector/plugins/vite'
import vitePluginImp from 'vite-plugin-imp'
import path from 'path'
import fs from 'fs'
import lessToJS from 'less-vars-to-js'
const generateScopedName = "[name]__[local]___[hash:base64:5]";
// console.log(dependencies);

const projectRootDir = resolve(__dirname);
const reactDeps = Object.keys(dependencies).filter(key => key === 'react' || key.startsWith('react-'))
// const manualChunks = {
//   vendor: reactDeps,
//   ...Object.keys(dependencies).reduce((chunks, name) => {
//     if (!reactDeps.includes(name)) {
//       chunks[name] = [name]
//     }
//     return chunks
//   }, {}),
// }
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './config/override-antd-variables.less'), 'utf8')
)

// https://vitejs.dev/config/
export default defineConfig(({ command, mode })=>{
  console.log(mode);
  console.log(command);

 return {
  plugins: [
    react(),
    alias(),
    viteCommonjs(),
    tsconfigPaths(),
    reactCssModule({
      generateScopedName,
      filetypes: {
        ".scss": {
          syntax: "postcss-scss",
        },
      },
    }),
    inspectorServer(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    })
  ],
    css: {
      modules: {
        generateScopedName,
      },
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true,
          modifyVars: themeVariables

        }
      }
    },
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
  build: {
    sourcemap: false,
    cssCodeSplit:true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor:reactDeps ,// ['react', 'react-router-dom', 'react-dom'],
          lodash:["lodash"],
          "antd":["antd"],
           
        },
      },
      plugins: [
        (mode === 'analyze' &&
            visualizer({
              open: true,
              filename: 'analyze/stats.html',
              gzipSize: true,
              brotliSize: true,
            })),
      ],

    },
  },
  envDir:"./environments",
  server: {
    port: 9001,
    hmr:{
      overlay:true//Show Error Browser (Default true)
    }
  }
 }
})
