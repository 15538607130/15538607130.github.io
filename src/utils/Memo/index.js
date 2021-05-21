/*
 * @description: 项目通用的持久化状态管理，例如 token、用户信息、权限等
 * @author: huxianghe
 * @Date: 2020-05-17 16:04:19
 * @lastEditors: huxianghe
 * @LastEditTime: 2020-07-15 19:10:18
 */
const IS_DEV = process.env.NODE_ENV === 'development';
const INITIAL_MOME = {
  TOKEN: null,
  UUID: null,
  AUTH: null,
  USER_INFO: null,
  PROJECT_LIST: null,
  AUTHORITY_LIST: null,
};

class Momery {
  constructor() {
    this.memoInfo = this.initMomery();
  }

  get isOnLine() {
    const { TOKEN: t, USER_INFO: u } = this.memoInfo;
    return !!t && !!u;
  }
  initMomery = () => {
    let memory = {};
    for (const key in INITIAL_MOME) {
      let value = localStorage.getItem(key);
      if (value) {
        memory[key] = JSON.parse(value);
      }
    }
    return memory;
  };
  // 缓存值到内存中
  cachedToMemo = (k, v) => {
    localStorage.setItem(k, JSON.stringify(v));
    this.memoInfo.key = v;
    return this;
  };

  // 从内存中读取缓存值
  getCachedFromMemo(k) {
    return JSON.parse(localStorage.getItem(k));
  }

  // 清空缓存
  clearCache = () => {
    localStorage.clear();
  };
}
export default new Momery();
