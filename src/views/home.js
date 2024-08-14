import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Xmart - Real-time Data Analytics</title>
        <meta
          name="description"
          content="Get real-time data updates and forecast with Xmart"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <header className="home-header">
        <nav className="home-navbar">
          <h1 className="home-text">Xmart</h1>
          <div className="home-desktop-menu">
            <div className="home-nav">
              <Link to="/report" className="navLink">
                Report
              </Link>
              <Link to="/dashboard" className="navLink">
                Dashboard
              </Link>
            </div>
            <Link to="/sign-up" className="home-register button">
              Register now
            </Link>
            <Link to="/login" className="home-navlink button">
              Login
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="sectionone">
          <div className="home-hero-content">
            <h2 className="home-caption1">
              Empower Your Business with Real-time Analytics
            </h2>
            <p className="home-text09">
              Get instant updates, accurate forecasts, and actionable insights
              to drive your business forward
            </p>
            <Link to="/sign-up" className="home-hero-cta button">
              Get Started
            </Link>
          </div>
        </section>

        <section className="home-notes">
          <div className="home-first">
            <div className="home-content">
              <h2 className="home-header1">Revolutionize Your Data Analysis</h2>
              <div className="home-list">
                <div className="home-note">
                  <div className="home-point"></div>
                  <p className="home-text14">
                    Harness the power of advanced AI for real-time insights
                  </p>
                </div>
                <div className="home-note1">
                  <div className="home-point1"></div>
                  <p className="home-text15">
                    Intuitive dashboard for comprehensive business overview
                  </p>
                </div>
              </div>
            </div>
            <img
              alt="Data analytics dashboard"
              src="/notes-1-1400w.png"
              className="image-notes"
            />
          </div>

          <div className="home-second">
            <img
              alt="Product forecast tool"
              src="/notes-2-1400w.png"
              className="image-notes"
            />
            <div className="home-content1">
              <h2 className="home-header2">
                Predict Market Trends with Precision
              </h2>
              <p className="home-text15">
                Our advanced forecasting tool uses machine learning to provide
                accurate predictions, helping you stay ahead of the competition.
              </p>
              <Link to="/sign-up" className="home-register button">
                Explore Forecasting
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
