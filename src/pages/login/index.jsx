
import React from 'react'
import { Row, Col } from 'antd'
import LoginCard from './components/LoginCard'

import styles from './style.less'
import logo from '@/assets/images/logo.png'

const Login = () => {
  return (
    <Row className={styles.main} justify="center" align="middle">
      <Col>
        <Row className={styles.title} justify='center' align='bottom' >
          <img className={styles.logoImg} src={logo} alt="" />
          <span>智云建工&nbsp;-&nbsp;智慧工地控制中心</span>
        </Row>
        <LoginCard />
      </Col>
    </Row>
  );
};
export default Login;
