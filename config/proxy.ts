/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/smartSite': {
      target: 'http://192.168.20.224:9070',
      // changeOrigin: true,
      // pathRewrite: {
      //   '^/smartSite': '',
      // },
    },
    // '/photoCheck': {
    //   target: 'http://test-stwebapi.xinke86.com//photoCheck',
    //   changeOrigin: true,
    //   pathRewrite: {
    //     '^/photoCheck': '',
    //   },
    // },
    '/service': {
      target: 'http://ip.taobao.com', //搜狐的域名
      changOrigin: true,
      pathRewrite: { '^/service': '' },
    },
    '/location': {
      target: 'http://api.map.baidu.com', //百度的域名
      changOrigin: true,
      pathRewrite: { '^/location': '' },
    },
  },
  test: {
    '/service/': {
      target: 'http://ip.taobao.com',
      changeOrigin: true,
      pathRewrite: { '^/service': '' },
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
}
