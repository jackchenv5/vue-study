import { resolve } from 'node:path';

import dayjs from 'dayjs';
import { readPackageJSON } from 'pkg-types';
import { defineConfig, loadEnv, mergeConfig, type UserConfig } from 'vite';

import { createPlugins } from '../plugins';
import { generateModifyVars } from '../utils/modifyVars';
import { commonConfig } from './common';

interface DefineOptions {
  overrides?: UserConfig;
  options?: {
    //
  };
}

function defineApplicationConfig(defineOptions: DefineOptions = {}) {
  console.log('=======in vite config ===========');
  const { overrides = {} } = defineOptions;
  return defineConfig(async ({ command, mode }) => {
    const root = process.cwd();
    const isBuild = command === 'build';
    const envConfig = loadEnv(mode,root);
    // console.log('env config====',envConfig);
    // const { VITE_PUBLIC_PATH, VITE_USE_MOCK, VITE_BUILD_COMPRESS, VITE_ENABLE_ANALYZE } = loadEnv(mode, root);
    // const defineData = await createDefineData(root);
    // 构建插件
    const {VITE_PUBLIC_PATH} = loadEnv(mode,root);
    const plugins = await createPlugins({
      isBuild,
      root,
      enableAnalyze: false,
      enableMock: false,
      compress: 'false'
    });

    const pathResolve = (pathname: string) => resolve(root, '.', pathname);
    const timestamp = new Date().getTime();
    const applicationConfig: UserConfig = {
      base: VITE_PUBLIC_PATH,
      resolve: {
        alias: [
          // @/xxxx => src/xxxx
          {
            find: /@\//,
            replacement: pathResolve('src') + '/',
          },
          // #/xxxx => types/xxxx
          // {
          //   find: /#\//,
          //   replacement: pathResolve('types') + '/',
          // },
        ],
      },
      // define: defineData,
      build: {
        target: 'es2015',
        cssTarget: 'chrome80',
        rollupOptions: {
          output: {
            // 入口文件名
            entryFileNames: `assets/entry/[name]-[hash]-${timestamp}.js`,
            // manualChunks: {
            //   vue: ['vue', 'pinia', 'vue-router'],
            //   antd: ['ant-design-vue', '@ant-design/icons-vue'],
            // },
          },
        },
      },
      // css: {
      //   preprocessorOptions: {
      //     less: {
      //       modifyVars: generateModifyVars(),
      //       javascriptEnabled: true,
      //     },
      //   },
      // },
      plugins,
    };

    const mergedConfig = mergeConfig(commonConfig(mode), applicationConfig);
    // console.log('mergeConfig=========>',mergedConfig)
    // throw Error('exit');
    return mergeConfig(mergedConfig, overrides);
  });
}

//定义全局常量。可以在代码中直接使用
async function createDefineData(root: string) {
  try {
    const pkgJson = await readPackageJSON(root);
    const { dependencies, devDependencies, name, version } = pkgJson;

    const __APP_INFO__ = {
      pkg: { dependencies, devDependencies, name, version },
      lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    };
    return {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    };
  } catch (error) {
    return {};
  }
}

export { defineApplicationConfig };
