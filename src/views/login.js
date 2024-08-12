import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import SignIn2 from '../components/sign-in2'
import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>login - OnConf template</title>
        <meta property="og:title" content="login - OnConf template" />
      </Helmet>
      <SignIn2
        content1={
          <Fragment>
            <span className="login-text thq-body-large">
              Access your account
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="login-text1 thq-body-small">Sign In</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="login-text2 thq-heading-2">Welcome back!</h2>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="login-text3 thq-body-small">Forgot password?</span>
          </Fragment>
        }
      ></SignIn2>
    </div>
  )
}

export default Login
