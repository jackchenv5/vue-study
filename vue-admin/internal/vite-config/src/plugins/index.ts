import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { type PluginOption } from 'vite';
import purgeIcons from 'vite-plugin-purge-icons';

import { createAppConfigPlugin } from './appConfig';
import { configCompressPlugin } from './compress';
import { configHtmlPlugin } from './html';
import { configMockPlugin } from './mock';
import { configSvgIconsPlugin } from './svgSprite';
import { configVisualizerConfig } from './visualizer';
import { ErrorCodes } from 'vue';

interface Options {
  isBuild: boolean;
  root: string;
  compress: string;
  enableMock?: boolean;
  enableAnalyze?: boolean;
}

async function createPlugins({ isBuild, root, enableMock, compress, enableAnalyze }: Options) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [vue(), vueJsx()];
  // const appConfigPlugin = await createAppConfigPlugin({ root, isBuild });
  // console.log('=====app config plygin====>',appConfigPlugin);
  // vitePlugins.push(appConfigPlugin);


  // vite-plugin-html
  // vitePlugins.push(configHtmlPlugin({ isBuild }));

  // vite-plugin-svg-icons
  // vitePlugins.push(configSvgIconsPlugin({ isBuild }));

  // vite-plugin-purge-icons
  // vitePlugins.push(purgeIcons());

  // The following plugins only work in the production environment
  // if (isBuild) {
  //   // rollup-plugin-gzip
  //   vitePlugins.push(
  //     configCompressPlugin({
  //       compress,
  //     }),
  //   );
  // }

  // rollup-plugin-visualizer
  // if (enableAnalyze) {
  //   vitePlugins.push(configVisualizerConfig());
  // }

  // vite-plugin-mock
  // if (enableMock) {
  //   vitePlugins.push(configMockPlugin({ isBuild }));
  // }
  // throw Error("test plugin");
  return vitePlugins;
}

export { createPlugins };
