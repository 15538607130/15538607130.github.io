import React, { Component } from 'react';
import ProCard from '@ant-design/pro-card';

export default class index extends Component {
  render() {
    return (
      <>
        <div>质量管控</div>
        <ProCard title="卡片组展开" ghost gutter={8} collapsible>
          <ProCard layout="center" bordered>
            卡片内容
          </ProCard>
          <ProCard layout="center" bordered>
            卡片内容
          </ProCard>
          <ProCard layout="center" bordered>
            卡片内容
          </ProCard>
        </ProCard>
      </>
    );
  }
}
