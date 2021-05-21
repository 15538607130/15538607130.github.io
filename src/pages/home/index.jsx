import React, { Component } from 'react';
import { Button } from 'antd';
import { history } from 'umi';
class index extends Component {
  gotoScreen = () => {
    history.push('/screen');
  };
  gotoBackstage = () => {
    history.push('/backstage');
  };
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.gotoScreen}>
          go to screen
        </Button>
        <Button type="primary" onClick={this.gotoBackstage}>
          go to backstage
        </Button>
      </div>
    );
  }
}
index.title = 'HOME';
export default index;
