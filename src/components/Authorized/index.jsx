import React from 'react';
const { Redirect } = require('dva').router;
import { REQUEST, encryptByRSA, MOMERY, Toast } from '@utils/index';

const AuthRouter = (props) => {
  // 这个根据自己判断是否登录
  const isLogin = MOMERY.getCachedFromMemo('USER_INFO') ? true : false;
  return isLogin ? <div>{props.children}</div> : <Redirect to="/login" />;
};

export default AuthRouter;
