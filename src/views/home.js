import React from "react";
import { Link } from "react-router-dom";

import Script from "dangerous-html/react";
import { Helmet } from "react-helmet";

import "./home.css";

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Xmart</title>
        <meta property="og:title" content="OnConf template" />
      </Helmet>
      <section className="home-hero">
        <div className="home-background">
          <img
            alt="image"
            src="/circle-background.svg"
            className="home-image"
          />
          <img alt="image" src="/line-background.svg" className="home-image1" />
        </div>
        <header className="home-header">
          <header data-thq="thq-navbar" className="home-navbar">
            <h2 className="home-text">Xmart</h2>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="home-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="home-nav"
              >
                <span className="navLink">Report</span>
                <span className="navLink">Dashboard</span>
              </nav>
              <Link to="/sign-up" className="home-register button">
                <span>Register now</span>
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </Link>
              <Link to="/login" className="home-navlink button">
                Login
              </Link>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu"></div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav1"
              >
                <div className="home-container1">
                  <h2 className="home-text02">OnConf</h2>
                  <div data-thq="thq-close-menu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon04">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="home-nav2"
                >
                  <span className="navLink home-text03">About</span>
                  <span className="navLink home-text04">Features</span>
                  <span className="navLink home-text05">Pricing</span>
                  <span className="navLink home-text06">Team</span>
                  <span className="navLink home-text07">Blog</span>
                </nav>
                <div className="home-button-container">
                  <button className="home-login button">Login</button>
                  <button className="button home-register1">Register</button>
                </div>
                <div className="home-icon-group">
                  <div className="home-icons"></div>
                </div>
              </div>
              <img
                alt="image"
                src="/quote-background.svg"
                className="home-background1"
              />
            </div>
          </header>
        </header>
        <div className="home-hero-content">
          <div className="home-caption">
            <p className="home-caption1">
              <span className="home-text09">
                real time data updates and forecast
              </span>
              <br className="home-text10"></br>
              <br></br>
            </p>
          </div>
        </div>
        <Link to="/sign-up" className="home-register3 button">
          <span>Register now</span>
          <svg viewBox="0 0 1024 1024" className="home-icon12">
            <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
          </svg>
        </Link>
        <Link to="/sign-up" className="home-register4 button">
          <span>Register now</span>
          <svg viewBox="0 0 1024 1024" className="home-icon14">
            <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
          </svg>
        </Link>
      </section>
      <section className="home-notes">
        <div className="home-first">
          <div data-aos="fade-up-right" className="home-content">
            <h2 className="home-header1">Get real time data analytics</h2>
            <div className="home-list">
              <div className="home-note">
                <div className="home-point"></div>
                <p className="home-text14">
                  We use modern deep learning techniques to give you real time
                  update
                </p>
              </div>
              <div className="home-note1">
                <div className="home-point1"></div>
                <p className="home-text15">
                  Dashboard to overlook all the necessary entities
                </p>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/notes-1-1400w.png"
            className="home-image2 image-notes"
          />
        </div>
        <div className="home-second">
          <div data-aos="fade-up-left" className="home-content1">
            <h2 className="home-header2">
              Get a forecast for the products using our tool
            </h2>
            <button className="button button-style-2 home-register5">
              <span>Register now</span>
              <svg viewBox="0 0 1024 1024" className="home-icon16">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <img alt="image" src="/notes-2-1400w.png" className="image-notes" />
        </div>
      </section>
      <section className="home-schedule"></section>
      <div>
        <div className="home-container3">
          <Script
            html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container5">
          <Script
            html={`<style>
#scrollbar::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

#scrollbar::-webkit-scrollbar
{
	height: 12px;
	background-color: #F5F5F5;
	border-radius: 10px;
}

#scrollbar::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
</style>`}
          ></Script>
        </div>
      </div>
    </div>
  );
};

export default Home;
