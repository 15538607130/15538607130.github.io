/*
 * @description: umi 项目入口文件，内含 dva 配置用以捕获异常
 */
import { plugin, history } from 'umi'
import '@libs/lib-flexible/flexible'
import './assets/style/antd/index.less'
import './assets/styles/antd/label.less'
import './assets/styles/antd/table.less'
import './assets/styles/antd/row.less'
import { MOMERY } from '@utils/index'

console.log(MOMERY.isOnLine);

// if (!MOMERY.isOnLine) {
//   MOMERY.clearCache()
//   // history.replace('/user/login')
// }

plugin.register({
  apply: {
    dva: {
      config: {
        onError: (error: any, dispatch: any) => {
          error.preventDefault()
        }
      }
    }
  },
  path: 'dva'
})

export function render(oldRender) {
  oldRender()
}
// 修改路由 https://umijs.org/zh-CN/docs/runtime-config#%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
export function patchRoutes(props: any) {
  // console.log('patchRoutes', props)
}

// 在初始加载和路由切换时做一些事情
export function onRouteChange(props: any) {
  const { location, routes, matchedRoutes } = props
  let path = location.pathname
  let title = matchedRoutes.find(item => item.route.path === path)?.route.title || '智慧工地'
  document.title = title
}

export async function getInitialState() {
  return '测试数据'
}
