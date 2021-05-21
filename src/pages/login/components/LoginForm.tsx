/*
 * @description: 登录 Form 表单组件
 * @author: huxianghe
 * @lastEditors: huxianghe
 * @Date: 2020-05-18 16:02:56
 * @LastEditTime: 2020-11-18 16:12:21
 */
import React, { useState, useEffect, FC } from 'react'
import { history, connect } from 'umi'
import { REQUEST, encryptByRSA, MOMERY, Toast } from '@utils/index'
import { Row, Col, Button, Form, Input } from 'antd'


import { ReactComponent as IconUser } from '@assets/images/icons/login/icon_user.svg'
import { ReactComponent as IconPassword } from '@assets/images/icons/login/icon_password.svg'
import styles from './LoginForm.less'


const JSEncrypt = require('jsencrypt')

const { Item } = Form

// 表单初始值
const INITAIL_VALUES = {
  userPhone: '',
  passwords: '',
  verifyCode: '',
}

const VALIDATE_RULES = {
  userPhone: [
    { required: true, message: '请输入账号' },
    { pattern: /[A-Za-z0-9]/, message: '请输入英文或数字，最多18个字' },
  ],
  passwords: [
    { required: true, message: '请输入密码' },
    { pattern: /[A-Za-z0-9]/, message: '请输入英文或数字，最多18个字' },
  ],
}

const LoginForm = ({ login, dispatch }) => {
  const [isShowTips, setTipsStatus] = useState(false)
  const [errorTips, setErrorTips] = useState('')
  const [ipInfo, setIpInfo]: any = useState('')

  const [form] = Form.useForm()
  const { validateFields } = form

  const submitLogin = async () => {
    const { userPhone = '', passwords = '' } = await validateFields()
    dispatch({
      type: 'login/login',
      payload: {
        ip: ipInfo,
        userPhone,
        userPassword: encryptByRSA(passwords),
      },
      callback: ({ message, data, code }: any) => {
        if (code !== 200) {
          setErrorTips(message[0])
          setTipsStatus(true)
          if (code === 1022) {
            // Toast.toast(message[0], 'error')
          }
        } else {
          dispatch({ type: 'global/setUserInfo', payload: data })
          MOMERY.cachedToMemo('USER_INFO', { ...data, phoneNumber: userPhone })
          history.replace('/home')
          // 获取权限集合
          dispatch({
            type: 'login/getAuthorityList',
            payload: {},
            callback: (res: any) => {
              const authorityList: any[] = [] // 需要展示的权限对应内容
              data.prermissions.forEach((item: any) => {
                authorityList.push(...res.filter((items: any) => item === items.id))
              })
              MOMERY.cachedToMemo('AUTHORITY_LIST', authorityList)
            },
          })
        }
      },
    })
  }
  const listenerKeydown = (e: KeyboardEvent) => {
    if (e.keyCode === 13) submitLogin()
  }

  useEffect(() => {
    // 获取登陆地ip和ip地址
    REQUEST.get(`http://ifconfig.me/ip`, {}).then((ip) => {
      setIpInfo(ip)
    })
    // body DOM 元素
    let BODY: HTMLBodyElement | null = null
    BODY = document.querySelector('body')
    BODY!.addEventListener('keydown', listenerKeydown)
    return () => {
      BODY!.removeEventListener('keydown', listenerKeydown)
      BODY = null
    }
  }, [])

  return (
    <div className={styles.login_form}>
      <div className={styles.login_form_body}>
        <Row justify="center">
          <Col span={20}>
            <h2 className={styles.login_title}>登录</h2>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={15} className={styles.login_tips}>
            {isShowTips && <p>{errorTips}</p>}
          </Col>
        </Row>
        <Row justify="center">
          <Col span={15}>
            <Form className={styles.login_form_wrapper} form={form} initialValues={INITAIL_VALUES}>
              <Item name="userPhone" className={styles.input} rules={VALIDATE_RULES.userPhone}>
                <Input

                  size="large"
                  placeholder="请输入账号"
                  maxLength={18}
                  prefix={<IconUser />}
                />
              </Item>
              <Item name="passwords" className={styles.input} rules={VALIDATE_RULES.passwords}>
                <Input

                  size="large"
                  placeholder="请输入密码"
                  maxLength={18}
                  type="password"
                  prefix={<IconPassword />}
                />
              </Item>
            </Form>
          </Col>
        </Row>
      </div>
      <div className={styles.login_form_footer}>
        <Row justify="center">
          <Col>
            <Button type="primary" className={styles.login_submit} onClick={submitLogin}>
              登录
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default connect(({ login }: any) => ({ login }))(LoginForm)
