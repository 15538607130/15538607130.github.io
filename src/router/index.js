import {
  SmileOutlined,
  CrownOutlined,
  TabletOutlined,
  AntDesignOutlined,
} from '@ant-design/icons';
import React from 'react';

export default [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: '../pages/login/index.jsx',
    title: '登录',
  },
  {
    path: '/home',
    title: '首页',
    component: '../pages/home/index.jsx',
    wrappers: ['@/components/Authorized'],
  },
  {
    path: '/backstage',
    component: '@/layouts/common',
    wrappers: ['@/components/Authorized'],
    routes: [
      {
        exact: true,
        name: '控制中心',
        title: '控制中心',
        path: '/backstage/controlCenter',
        component: './backstage/controlCenter/index.jsx',
      },
      {
        exact: true,
        name: '项目总览',
        title: '项目总览',
        path: '/backstage/projectOverview',
        component: './backstage/projectOverview/index.jsx',
      },
      {
        exact: true,
        name: '智慧安全',
        title: '智慧安全',
        path: '/backstage/smartSafety',
        component: './backstage/smartSafety/index.jsx',
      },
      {
        exact: true,
        name: '智慧劳务',
        title: '智慧劳务',
        path: '/backstage/smartLabor',
        component: './backstage/smartLabor/index.jsx',
      },
      {
        exact: true,
        name: '质量管控',
        title: '质量管控',
        path: '/backstage/qualityControl',
        component: './backstage/qualityControl/index.jsx',
      },
      {
        exact: true,
        name: '智慧物料',
        title: '智慧物料',
        path: '/backstage/smartMaterials',
        component: './backstage/smartMaterials/index.jsx',
      },
      {
        exact: true,
        name: '绿色施工',
        title: '绿色施工',
        path: '/backstage/greenConstruction',
        component: './backstage/greenConstruction/index.jsx',
      },
      {
        exact: true,
        name: '大屏设置',
        title: '大屏设置',
        path: '/backstage/screenSet',
        component: './backstage/screenSet/index.jsx',
      },
      {
        exact: true,
        name: '系统设置',
        title: '系统设置',
        path: '/backstage/systemSet',
        component: './backstage/systemSet/index.jsx',
      },
    ],
  },
  {
    path: '/screen',
    component: '../pages/screen/index.jsx',
    title: '大屏',
  },
  { component: '@/pages/404' },
];
