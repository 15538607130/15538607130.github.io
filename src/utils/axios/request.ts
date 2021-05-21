/*
 * @description: 基于 axios 封装的请求
 */
import { history } from 'umi';

import axios from 'axios';

// import { BASE_URL, TIMEOUT, REQUEST_METHOD, STATUS_CODE } from '../../config/index';

import MOMERY from '../Memo/index.js';

// import Toast from '../Toast';

// import { Instance, RequestOptions, RequestParams, Response, Methods } from './server';

const BASE_URL = '';

let instance = axios.create();
instance.defaults.timeout = 30000000;
instance.defaults.baseURL = BASE_URL;
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const { method, data, params, headers } = config;
    const timestamp = Math.round(new Date().getTime() / 1000);
    const transformdConfig = {
      headers: {
        ...headers,
        Authorization: MOMERY.memoInfo.TOKEN,
      },
    };

    return { ...config, ...transformdConfig };
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);
// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    const {
      data,
      headers: { authorization },
    } = response;
    if (authorization) MOMERY.cachedToMemo('TOKEN', `${authorization}`);
    // TODO token失效 重定向到登录页
    // if (response.data.code == 200) {
    //   history.replace('/login');
    // }
    return response.data;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);
export default instance;
