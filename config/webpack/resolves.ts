/*
 * @description: 配置 webpack.resolves
 * @author: huxianghe
 * @lastEditors: huxianghe
 * @Date: 2020-05-13 13:38:09
 * @LastEditTime: 2020-11-18 15:28:21
 */
import { resolvePath } from '../utils/parse-path'

export default {
  alias: {
    '@': resolvePath('src'),
    '@Apis': resolvePath('src/Apis'),
    '@assets': resolvePath('src/assets'),
    '@components': resolvePath('src/components'),
    '@config': resolvePath('src/config'),
    '@css': resolvePath('src/css'),
    '@hooks': resolvePath('src/hooks'),
    '@layouts': resolvePath('src/layouts'),
    '@libs': resolvePath('src/libs'),
    '@locales': resolvePath('src/locales'),
    '@models': resolvePath('src/models'),
    '@pages': resolvePath('src/pages'),
    '@router': resolvePath('src/router'),
    '@services': resolvePath('src/services'),
    '@utils': resolvePath('src/utils'),
    'statics': resolvePath('statics')
  }
}
