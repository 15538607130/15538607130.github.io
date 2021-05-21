import React, { Component } from 'react';
import { history } from 'umi';
export default class index extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h1>backstage</h1>
        <h1>{this.props.children}</h1>
      </div>
    );
  }
}
