import { REQUEST } from '@utils/index';

const REQUEST_VERISION = 'v2';

export async function getLogin(params: any) {
  return REQUEST.post(`/smartSite/auth/${REQUEST_VERISION}/login`, params);
}

export async function getFakeCaptcha(mobile: string) {
  return REQUEST.get(`/api/login/captcha?mobile=${mobile}`);
}

// 获取权限列表
export async function apiAuthority(params: any) {
  return REQUEST.post(`/smartSite/permission/${REQUEST_VERISION}/list`, params);
}
