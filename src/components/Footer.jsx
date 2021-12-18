import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* Footer Start */}
      <footer className="bg-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-py-100">
                <div className="row">
                  <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                    <Link className="logo-footer">
                      <img src="images/logo-light.png" height={28} alt="" />
                    </Link>
                    <p className="text-foot mt-4">
                      With Cryptor Trade, you can be sure your trading skills
                      are matched with excellent service.
                    </p>
                    <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                      <li className="list-inline-item">
                        <Link className="rounded">
                          <i
                            data-feather="facebook"
                            className="fea icon-sm fea-social"
                          />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link className="rounded">
                          <i
                            data-feather="instagram"
                            className="fea icon-sm fea-social"
                          />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link className="rounded">
                          <i
                            data-feather="twitter"
                            className="fea icon-sm fea-social"
                          />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link className="rounded">
                          <i
                            data-feather="linkedin"
                            className="fea icon-sm fea-social"
                          />
                        </Link>
                      </li>
                    </ul>
                    {/*end icon*/}
                  </div>
                  {/*end col*/}
                  <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5 className="text-light footer-head">Company</h5>
                    <ul className="list-unstyled footer-list mt-4">
                      <li>
                        <a href="aboutus.html" className="text-foot">
                          <i className="uil uil-angle-right-b me-1" />
                          About
                        </a>
                      </li>
                      <li>
                        <a href="market-price.html" className="text-foot">
                          <i className="uil uil-angle-right-b me-1" />
                          Marketplace
                        </a>
                      </li>
                      <li>
                        <a href="token.html" className="text-foot">
                          <i className="uil uil-angle-right-b me-1" />
                          Sell Token
                        </a>
                      </li>
                      <li>
                        <a href="team.html" className="text-foot">
                          <i className="uil uil-angle-right-b me-1" />
                          Team
                        </a>
                      </li>
                      <li>
                        <a href="roadmap.html" className="text-foot">
                          <i className="uil uil-angle-right-b me-1" />
                          Roadmap
                        </a>
                      </li>
                      <li>
                        <a href="mission.html" className="text-foot">
                          <i className="uil uil-angle-right-b me-1" />
                          Mission
                        </a>
                      </li>
                      <li>
                        <a href="whitepaper.html" className="text-foot">
                          <i className="uil uil-angle-right-b me-1" />
                          Whitepaper
                        </a>
                      </li>
                      <li>
                        <a href="blog.html" className="text-foot">
                          <i className="uil uil-angle-right-b me-1" />
                          News
                        </a>
                      </li>
                      <li>
                        <a href="contact.html" className="text-foot">
                          <i className="uil uil-angle-right-b me-1" />
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5 className="text-light footer-head">NFT Market</h5>
                    <ul className="list-unstyled footer-list mt-4">
                      <li>
                        <a href="index-nft.html" className="text-foot">
                          <i className="uil uil-angle-right-b me-1" />
                          NFTs
                        </a>
                      </li>
                      <li>
                        <a href="nft-explore.html" className="text-foot">
                          <i className="uil uil-angle-right-b me-1" />
                          Explores
                        </a>
                      </li>
                      <li>
                        <a href="nft-collection.html" className="text-foot">
                          <i className="uil uil-angle-right-b me-1" />
                          Collections
                        </a>
                      </li>
                      <li>
                        <a href="nft-creators.html" className="text-foot">
                          <i className="uil uil-angle-right-b me-1" />
                          Creators
                        </a>
                      </li>
                      <li>
                        <a href="nft-faqs.html" className="text-foot">
                          <i className="uil uil-angle-right-b me-1" />
                          How It Works
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-4 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5 className="text-light footer-head">
                      Start trading with Cryptor
                    </h5>
                    <ul className="list-unstyled footer-list mt-4 mb-2">
                      <li className="list-inline-item mx-1">
                        <Link to="/login" className="btn btn-soft-primary">
                          Signin
                        </Link>
                      </li>
                      <li className="list-inline-item mx-1">
                        <Link to="/signup" className="btn btn-primary">
                          Signup
                        </Link>
                      </li>
                    </ul>
                    <small className="text-foot d-block">
                      Institutional Investor?{" "}
                      <Link className="text-foot fw-medium">Learn More</Link>
                    </small>
                    <img
                      src="images/icon-gradient.png"
                      className="avatar avatar-medium mt-4"
                      alt=""
                    />
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </footer>
      {/*end footer*/}
      {/* Footer End */}
      {/* Offcanvas Start */}
      <div
        className="offcanvas offcanvas-end bg-white shadow"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header p-4 border-bottom">
          <h6 id="offcanvasRightLabel" className="mb-0">
            Cryptor
          </h6>
          <button
            type="button"
            className="btn-close d-flex align-items-center text-dark"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="uil uil-times fs-4" />
          </button>
        </div>
        <div className="offcanvas-body p-4">
          <div className="row">
            <div className="col-12">
              <div className="card border-0" style={{ zIndex: 1 }}>
                <div className="card-body p-0">
                  <form className="login-form">
                    <div className="row">
                      <div className="col-12">
                        <img
                          src="images/icon-gradient.png"
                          className="avatar avatar-large d-block mx-auto my-5"
                          alt=""
                        />
                      </div>
                      {/*end col*/}
                      <div className="col-lg-12 mt-4">
                        <div className="mb-3">
                          <label className="form-label">
                            Your Email <span className="text-danger">*</span>
                          </label>
                          <div className="form-icon position-relative">
                            <i
                              data-feather="user"
                              className="fea icon-sm icons"
                            />
                            <input
                              type="email"
                              className="form-control ps-5"
                              placeholder="Email"
                              name="email"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Password <span className="text-danger">*</span>
                          </label>
                          <div className="form-icon position-relative">
                            <i
                              data-feather="key"
                              className="fea icon-sm icons"
                            />
                            <input
                              type="password"
                              className="form-control ps-5"
                              placeholder="Password"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-lg-12">
                        <div className="d-flex justify-content-between">
                          <div className="mb-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                id="flexCheckDefault"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <small className="forgot-pass mb-0">
                            <a href="reset-password.html" className="text-dark">
                              Forgot password ?
                            </a>
                          </small>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-lg-12 mb-0">
                        <div className="d-grid">
                          <button className="btn btn-primary">Sign in</button>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-12 text-center mt-3">
                        <small>
                          <small className="text-dark me-2">
                            Don't have an account ?
                          </small>{" "}
                          <a href="signup.html" className="text-dark">
                            Sign Up
                          </a>
                        </small>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </form>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        <div className="offcanvas-footer p-4 text-center">
          <ul className="list-unstyled social-icon social mb-0">
            <li className="list-inline-item">
              <Link className="rounded">
                <i data-feather="facebook" className="fea icon-sm fea-social" />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="rounded">
                <i
                  data-feather="instagram"
                  className="fea icon-sm fea-social"
                />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="rounded">
                <i data-feather="twitter" className="fea icon-sm fea-social" />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="rounded">
                <i data-feather="linkedin" className="fea icon-sm fea-social" />
              </Link>
            </li>
          </ul>
          {/*end icon*/}
        </div>
      </div>
      {/* Offcanvas End */}
    </div>
  );
};

export default Footer;
