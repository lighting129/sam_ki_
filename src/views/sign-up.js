import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import SignUp1 from '../components/sign-up1'
import './sign-up.css'

const SignUp = (props) => {
  return (
    <div className="sign-up-container">
      <Helmet>
        <title>sign-up - OnConf template</title>
        <meta property="og:title" content="sign-up - OnConf template" />
      </Helmet>
      <SignUp1
        heading1={
          <Fragment>
            <h2 className="sign-up-text thq-heading-2">Get Started Today</h2>
          </Fragment>
        }
        content1={
          <Fragment>
            <label className="sign-up-text1 thq-body-large">
              Sign up now to access real-time data analytics and forecasting
              tools.
            </label>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="sign-up-text2 thq-body-small">Register Now</span>
          </Fragment>
        }
      ></SignUp1>
    </div>
  )
}

export default SignUp
