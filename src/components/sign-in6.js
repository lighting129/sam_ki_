import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './sign-in6.css'

const SignIn6 = (props) => {
  return (
    <div className="sign-in6-container">
      <div className="sign-in6-max-width thq-section-max-width">
        <div className="sign-in6-container1">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="sign-in6-sign-up-image thq-img-ratio-4-6"
          />
        </div>
        <div className="sign-in6-form-root thq-section-padding">
          <div className="sign-in6-container2">
            <Link to="/sign-up" className="sign-in6-navlink">
              <p className="sign-in6-text thq-body-large">
                Don&apos;t have an account? Sign up
              </p>
            </Link>
          </div>
          <div className="sign-in6-form">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="sign-in6-text09 thq-heading-2">
                    Sign In to Access Real-Time Data Analytics
                  </h2>
                </Fragment>
              )}
            </h2>
            <form className="sign-in6-form1">
              <div className="sign-in6-email">
                <label htmlFor="thq-sign-in-6-email" className="thq-body-large">
                  Email
                </label>
                <input
                  type="email"
                  id="thq-sign-in-6-email"
                  required="true"
                  placeholder="Email address"
                  className="sign-in6-textinput thq-input thq-body-large"
                />
              </div>
              <div className="sign-in6-password">
                <div className="sign-in6-textfield">
                  <div className="sign-in6-container3">
                    <label
                      htmlFor="thq-sign-in-6-password"
                      className="thq-body-large"
                    >
                      Password
                    </label>
                    <div className="sign-in6-hide-password">
                      <svg viewBox="0 0 1024 1024" className="sign-in6-icon">
                        <path d="M317.143 762.857l44.571-80.571c-66.286-48-105.714-125.143-105.714-206.857 0-45.143 12-89.714 34.857-128.571-89.143 45.714-163.429 117.714-217.714 201.714 59.429 92 143.429 169.143 244 214.286zM539.429 329.143c0-14.857-12.571-27.429-27.429-27.429-95.429 0-173.714 78.286-173.714 173.714 0 14.857 12.571 27.429 27.429 27.429s27.429-12.571 27.429-27.429c0-65.714 53.714-118.857 118.857-118.857 14.857 0 27.429-12.571 27.429-27.429zM746.857 220c0 1.143 0 4-0.571 5.143-120.571 215.429-240 432-360.571 647.429l-28 50.857c-3.429 5.714-9.714 9.143-16 9.143-10.286 0-64.571-33.143-76.571-40-5.714-3.429-9.143-9.143-9.143-16 0-9.143 19.429-40 25.143-49.714-110.857-50.286-204-136-269.714-238.857-7.429-11.429-11.429-25.143-11.429-39.429 0-13.714 4-28 11.429-39.429 113.143-173.714 289.714-289.714 500.571-289.714 34.286 0 69.143 3.429 102.857 9.714l30.857-55.429c3.429-5.714 9.143-9.143 16-9.143 10.286 0 64 33.143 76 40 5.714 3.429 9.143 9.143 9.143 15.429zM768 475.429c0 106.286-65.714 201.143-164.571 238.857l160-286.857c2.857 16 4.571 32 4.571 48zM1024 548.571c0 14.857-4 26.857-11.429 39.429-17.714 29.143-40 57.143-62.286 82.857-112 128.571-266.286 206.857-438.286 206.857l42.286-75.429c166.286-14.286 307.429-115.429 396.571-253.714-42.286-65.714-96.571-123.429-161.143-168l36-64c70.857 47.429 142.286 118.857 186.857 192.571 7.429 12.571 11.429 24.571 11.429 39.429z"></path>
                      </svg>
                      <span className="thq-body-small">Hide</span>
                    </div>
                  </div>
                  <input
                    type="password"
                    id="thq-sign-in-6-password"
                    required="true"
                    placeholder="Password"
                    className="sign-in6-textinput1 thq-input thq-body-large"
                  />
                </div>
                <a
                  href="https://teleporthq.io/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sign-in6-link thq-body-small"
                >
                  Forgot password
                </a>
              </div>
            </form>
            <button type="submit" className="sign-in6-button thq-button-filled">
              <span>
                {props.action1 ?? (
                  <Fragment>
                    <span className="sign-in6-text10 thq-body-small">
                      Sign In
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <div className="sign-in6-divider">
              <div className="sign-in6-divider1"></div>
              <p className="thq-body-large">OR</p>
              <div className="sign-in6-divider2"></div>
            </div>
            <div className="sign-in6-container4">
              <button className="sign-in6-button1 thq-button-outline">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="sign-in6-icon2"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
                <span className="thq-body-small">Continue with Facebook</span>
              </button>
              <button className="sign-in6-button2 thq-button-outline">
                <svg
                  viewBox="0 0 860.0137142857142 1024"
                  className="sign-in6-icon4"
                >
                  <path d="M438.857 449.143h414.286c4 22.286 6.857 44 6.857 73.143 0 250.286-168 428.571-421.143 428.571-242.857 0-438.857-196-438.857-438.857s196-438.857 438.857-438.857c118.286 0 217.714 43.429 294.286 114.857l-119.429 114.857c-32.571-31.429-89.714-68-174.857-68-149.714 0-272 124-272 277.143s122.286 277.143 272 277.143c173.714 0 238.857-124.571 249.143-189.143h-249.143v-150.857z"></path>
                </svg>
                <span className="thq-body-small">Continue with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SignIn6.defaultProps = {
  heading1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1501428291079-b42d45fc7455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzE3ODM0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Sign In Image',
  action1: undefined,
}

SignIn6.propTypes = {
  heading1: PropTypes.element,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  action1: PropTypes.element,
}

export default SignIn6
