import { Layout, Menu, Tabs } from 'antd';
import { useState } from 'react';
import { history } from 'umi';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Link } from 'umi';
const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;
let count = 0;
export default (props) => {
  const [useTabList, setTabList] = useState([]);
  const [useActiveTab, setActiveTab] = useState('');
  const { routes = [] } = props.route;
  const menuDataRender = (meunList) => {
    return meunList;
  };
  const menuItemClick = (item) => {
    let useTabList1 = [...useTabList];
    useTabList1.push({
      key: (count += 1).toString(),
      name: item.key,
    });
    setTabList(useTabList1);

    setActiveTab(count.toString());
  };
  const onEdit = (key) => {
    let index = useTabList.findIndex((item) => item.key == key);
    let newTabList = useTabList.filter((item) => item.key != key);
    setTabList(newTabList);
    if (index == 0) {
      setActiveTab(String(newTabList[0].key));
    }
    if (index && index > 0) {
      setActiveTab(String(newTabList[index - 1].key));
    }
  };
  const onTabClick = (key) => {
    let activeTab = useTabList.find((item) => item.key == key);
    let path = routes.find((item) => item.name == activeTab.name).path;
    setActiveTab(key);
    // let path = useTabList.find((item) => item.key == key).path;
    history.push(path);
  };

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" onClick={menuItemClick}>
          {routes.map((item) => {
            return (
              <Menu.Item key={item.name} icon={<UserOutlined />}>
                <Link to={item.path}>{item.name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        >
          <Tabs
            type="card"
            onChange={onTabClick}
            activeKey={useActiveTab}
            type="editable-card"
            hideAdd
            onEdit={onEdit}
          >
            {useTabList.map((pane) => (
              <TabPane tab={<span>{pane.name}</span>} key={pane.key}></TabPane>
            ))}
          </Tabs>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {props.children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
