import React, { Component } from "react";
import Laptop from "../assets/img/wallet.png";
import about from "../assets/img/about-img.png";

class LandingPage extends Component {
  render() {
    return (
      <>
        <header className="header-section clearfix">
          <div className="container-fluid">
            <a href="index.html" className="site-logo">
              <span>
                <b>KUBOYD</b>
              </span>
              {/* <img src={Logo} alt="" /> */}
            </a>
            <div className="responsive-bar">
              <i className="fa fa-bars"></i>
            </div>
            <a href="/" className="user">
              <i className="fa fa-user"></i>
            </a>
            <a href="/" className="site-btn">
              Sign Up
            </a>
          </div>
        </header>
        <section className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 hero-text">
                <h2>
                  We are <span>Kuboyd</span> <br />
                  <small>The Bank of the future</small>
                </h2>
                <h4>Use Kuboyd to manage your finances with confidence</h4>
                <form className="hero-subscribe-from">
                  <input type="text" placeholder="Enter your email" />
                  <button className="site-btn">Get Started</button>
                </form>
              </div>
              <div className="col-md-6">
                <img src={Laptop} className="laptop-image" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="about-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-6 about-text">
                <h2>What is Kuboyd</h2>
                <h5>
                  Kuboyd is an innovative challenger bank set out to re-imagine
                  banking
                </h5>
                <p>
                  Kuboyd is one of the most innovative financial institutions
                  available to the masses. It exist to serve the Unbanked and
                  Underbanked in Africa, starting from Nigeria
                </p>
                <a href="/" className="site-btn sb-gradients sbg-line mt-5">
                  Get Started
                </a>
              </div>
            </div>
            <div className="about-img">
              <img src={about} alt="" />
            </div>
          </div>
        </section>
        <section className="features-section spad">
          <div className="container text-black">
            <div className="section-title text-center">
              <h2>Our Features</h2>
              <p>Kuboyd is the simplest way to bank at no cost.</p>
            </div>
            <div className="row">
              {/* <!-- feature --> */}

              {/* <!-- feature --> */}
              <div className="col-md-6 col-lg-4 feature">
                <i className="ti-shield"></i>
                <div className="feature-content">
                  <h4>Safe & Secure</h4>
                  <p>
                    Banking with Kuboyd is safe and secure. All transactions are
                    monitored for fraud, in case of any, it's easily caught.
                  </p>
                </div>
              </div>
              {/* <!-- feature --> */}
              <div className="col-md-6 col-lg-4 feature">
                <i className="ti-wallet"></i>
                <div className="feature-content">
                  <h4>Wallet</h4>
                  <p>
                    Your money gets managed by our wallet feature, to seamlessly
                    align all your transactions
                  </p>
                </div>
              </div>
              {/* <!-- feature --> */}

              {/* <!-- feature --> */}
              <div className="col-md-6 col-lg-4 feature">
                <i className="ti-reload"></i>
                <div className="feature-content">
                  <h4>Instant Exchange</h4>
                  <p>
                    Transfer/Transaction are instant.You don't have to wait
                    hours or even days anymore.
                  </p>
                </div>
              </div>
              {/* <!-- feature --> */}
            </div>
          </div>
        </section>
        {/* <!-- Features section end --> */}
        {/* <!-- Process section --> */}
        <section className="process-section spad">
          <div className="container">
            <div className="section-title text-center">
              <h2>Get Started With Kuboyd</h2>
              <p>
                Start banking with Kuboyd with simple steps. It’s fun, easy, and
                takes only a few minutes!
              </p>
            </div>
            <div className="row">
              <div className="col-md-4 process">
                <div className="process-step">
                  {/* <figure className="process-icon">
                    {/* <img src={process1} alt="#" /> */}
                  {/* </figure>  */}
                  <h4>Sign Up for Free</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident sunt in culpa
                    qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <div className="col-md-4 process">
                <div className="process-step">
                  {/* <figure className="process-icon">
                    <img src={process2} alt="#" />
                  </figure> */}
                  <h4>Create Your Wallet/Account</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident sunt in culpa
                    qui officia deserunt mollit anim id est laborum.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4 process">
                <div className="process-step">
                  {/* <figure className="process-icon">
                    <img src={process3} alt="#" />
                  </figure> */}
                  <h4>Get Account Details</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident sunt in culpa
                    qui officia deserunt mollit anim id est laborum.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Footer section --> */}
        <footer className="footer-section">
          <div className="container">
            {/* <div className="row spad">
              <div className="col-md-6 col-lg-3 footer-widget pl-lg-5 pl-3">
                <h5 className="widget-title">Follow Us</h5>
                <div className="social">
                  <a href="/" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="/" className="google">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a href="/" className="instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="/" className="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div> */}
            <div className="footer-bottom">
              <div className="row">
                <div className="col-lg-8 text-center text-lg-right">
                  <ul className="footer-nav">
                    <li>
                      <a href="https://github.com/sammieeblaq">
                        Desinged by Samuel Airehrour
                      </a>
                    </li>

                    <li>
                      <a href="mailto: odianoseairehrour@gmail.com">
                        odianoseairehrour@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="/">+234(0)9017817783</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default LandingPage;
