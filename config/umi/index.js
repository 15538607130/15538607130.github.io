/*
 * @description: 项目配置文件
 * @author: huxianghe
 * @lastEditors: huxianghe
 * @Date: 2020-05-13 16:03:08
 * @LastEditTime: 2020-08-12 17:24:16
 */
import path from 'path';
import { defineConfig } from 'umi';
import px2rem from 'postcss-plugin-px2rem';
import routes from '../routes';

// 加载 webpack 配置
import webpackConfig from '../webpack/index';

// 加载主题
import theme from './theme';

// 加载代理
import proxy from '../proxy';

import { resolvePath } from '../utils/parse-path';

require('../utils/parse-env');

const isProd = process.env.NODE_ENV !== 'development';
const ENV = require('../utils/parse-env');

export default defineConfig({
  routes,
  theme,
  alias: webpackConfig.resolve.alias,
  antd: {},
  define: {
    'process.env': {
      ...ENV,
      ...process.env,
    },
  },
  devServer: {
    port: 8009,
  },
  history: {
    type: 'hash',
  },
  title: false,
  hash: true,
  ignoreMomentLocale: true,
  // treeShaking: true,
  dva: { hmr: true },
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
  },
  cssLoader: {
    localsConvention: 'camelCase',
  },
  cssModulesTypescriptLoader: {
    mode: 'emit',
  },
  // dynamicImport: {
  //   loading: '@/components/PageLoading/index',
  // },
  targets: {
    ie: 11,
  },
  manifest: {
    basePath: './',
  },
  chainWebpack: (webpack) => {
    webpack.module
      .rule('px2remLoader')
      .test(/\.(jsx|tsx)$/)
      .exclude.add([resolvePath('src/.umi'), resolvePath('node_modules')])
      .end()
      .use('px2remLoader')
      .loader(path.join(__dirname, '../webpack/loaders/px2rem.ts'));
  },
  proxy: proxy[process.env.REACT_APP_ENV || 'dev'],
  extraPostCSSPlugins: [
    px2rem({
      exclude: /node_module/,
      rootValue: 192,
      unitPrecision: 2,
      propBlackList: [
        'border',
        'border-top',
        'border-left',
        'border-right',
        'border-bottom',
        'border-radius',
        'font-size',
      ],
      selectorBlackList: ['t_npx'],
    }),
  ],
  terserOptions: {
    // 移除 log
    sourceMap: true,
    uglifyOptions: {
      compress: {
        drop_console: isProd,
      },
    },
  },
});
