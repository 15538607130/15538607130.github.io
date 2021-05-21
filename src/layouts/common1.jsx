import { Menu } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { MOMERY } from '../utils';
import IconCollapsedLogo from '@assets/logo.svg';
import { Link, history } from 'umi';
import React, { useState } from 'react';
import { Button, Descriptions, Result, Avatar, Space, Statistic } from 'antd';
import { LikeOutlined, UserOutlined } from '@ant-design/icons';
import { Provider, KeepAlive } from 'react-keep-alive';

import ProLayout, {
  PageContainer,
  SettingDrawer,
} from '@ant-design/pro-layout';
let count = 1;
export default (props) => {
  const [useTabList, setTabList] = useState([]);
  const menuDataRender = (meunList) => {
    return meunList;
  };
  const menuItemClick = (item) => {
    let useTabList1 = [...useTabList];
    count += 1;
    useTabList1.push({
      key: count,
      tab: item.name,
      path: item.path,
    });
    setTabList(useTabList1);
  };
  const onEditTab = (e, item) => {
    if (item == 'remove') {
      if (useTabList.filter((record) => record.key != e).length == 0)
        history.push('/backstage/controlCenter');
      setTabList([...useTabList.filter((record) => record.key != e)]);
    }
  };
  const onTabClick = (key, event) => {
    console.log(props);
    let path = useTabList.find((item) => item.key == key).path;
    history.push(path);
  };
  return (
    <Provider>
      <div
        id="test-pro-layout"
        style={{
          height: '100vh',
        }}
      >
        <ProLayout
          {...props}
          title="智云建工"
          logo={IconCollapsedLogo}
          menuDataRender={menuDataRender}
          menuItemRender={(item, dom) => (
            <Link to={item.path} onClick={() => menuItemClick(item)}>
              <UserOutlined />
              <span>{item.name}</span>
            </Link>
          )}
          rightContentRender={() => (
            <div>
              <Avatar shape="square" size="small" icon={<UserOutlined />} />
            </div>
          )}
        >
          <PageContainer
            content={123}
            tabList={useTabList}
            tabProps={{
              type: 'editable-card',
              hideAdd: true,
              onEdit: onEditTab,
              onTabClick: onTabClick,
              animated: true,
            }}
          >
            <KeepAlive>
              <div name={Math.random()}>{props.children}</div>
            </KeepAlive>
          </PageContainer>
        </ProLayout>
      </div>
    </Provider>
  );
};
