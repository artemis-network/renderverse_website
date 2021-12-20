import { Link } from "react-router-dom";

const MetabaseCamp = () => {
  return (
    <div>
      {/* Hero Start */}
      <section
        className="bg-home bg-black d-flex align-items-center"
        style={{
          backgroundImage: 'url("images/bg/bg02.png") !important',
          backgroundPosition: "center !important",
        }}
      >
        <div className="container">
          <div className="row mt-5 align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="title-heading">
                <span className="badge bg-soft-success rounded-md">
                  Calculator
                </span>
                <h4 className="display-5 text-white title-dark fw-medium mt-3 mb-4">
                  100% Free Digital Asset Exchange Platform
                </h4>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  With Cryptor Trade, you can be sure your trading skills are
                  matched with excellent service.
                </p>
                <div className="mt-4 pt-2">
                  <Link className="btn btn-primary m-1">
                    <i className="uil uil-apple" /> App Store
                  </Link>
                  <Link className="btn btn-outline-primary m-1">
                    <i className="uil uil-google-play" /> Play Store
                  </Link>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-5 offset-lg-1 col-md-6 col-12">
              <div className="card border-0 bg-light shadow rounded p-4 overflow-hidden">
                <img
                  src="images/illustration/profit.svg"
                  className="img-fluid"
                  alt=""
                />
                <div className="mt-4 pt-2">
                  <h5 className="text-center mb-0">
                    Live Cryptocurrency Calculator
                  </h5>
                  <div className="calculator-block mt-4">
                    <div className="calculator-body"></div>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* Hero End */}
      {/* Start */}
      <section className="section pb-0">
        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="feature feature-primary feature-clean text-center rounded p-4">
                <div className="icons text-center">
                  <i className="uil uil-shield-check d-block mx-auto rounded h3 mb-0" />
                </div>
                <div className="content mt-4">
                  <a href="features.html" className="text-dark h5 title">
                    Secure storage
                  </a>
                  <p className="text-muted mt-3 mb-0">
                    We store the vast majority of the digital assets in secure
                    offline storage.
                  </p>
                  <div className="mt-2">
                    <a href="features.html" className="link">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="feature feature-primary feature-clean text-center rounded p-4">
                <div className="icons text-center">
                  <i className="uil uil-newspaper d-block mx-auto rounded h3 mb-0" />
                </div>
                <div className="content mt-4">
                  <a href="features.html" className="text-dark h5 title">
                    Protected by insurance
                  </a>
                  <p className="text-muted mt-3 mb-0">
                    Cryptocurrency stored on our servers is covered by our
                    insurance policy.
                  </p>
                  <div className="mt-2">
                    <a href="features.html" className="link">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
              <div className="feature feature-primary feature-clean text-center rounded p-4">
                <div className="icons text-center">
                  <i className="uil uil-browser d-block mx-auto rounded h3 mb-0" />
                </div>
                <div className="content mt-4">
                  <a href="features.html" className="text-dark h5 title">
                    Industry best practices
                  </a>
                  <p className="text-muted mt-3 mb-0">
                    Cryptor supports a variety of the most popular digital
                    currencies.
                  </p>
                  <div className="mt-2">
                    <a href="features.html" className="link">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
        <div className="container mt-100 mt-60">
          <div className="row align-items-lg-center align-items-end">
            <div className="col-md-6">
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">
                  Free your money and <br /> invest with confidence
                </h4>
                <p className="text-muted para-desc mb-0">
                  With Cryptor Trade, you can be sure your trading skills are
                  matched with excellent service.
                </p>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex mt-4">
                    <i className="uil uil-check-circle h4 text-primary" />
                    <div className="flex-1 ms-3">
                      <h6 className="mb-0">Buy, sell, and trade on the go</h6>
                      <p className="text-muted mt-2 mb-0">
                        Manage your holdings from your mobile device
                      </p>
                    </div>
                  </li>
                  <li className="d-flex mt-4">
                    <i className="uil uil-check-circle h4 text-primary" />
                    <div className="flex-1 ms-3">
                      <h6 className="mb-0">Take control of your wealth</h6>
                      <p className="text-muted mt-2 mb-0">
                        Rest assured you (and only you) have access to your
                        funds
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="crypto-wallets.html" className="btn btn-primary">
                    Download Wallet
                  </a>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-md-6">
              <div className>
                <img
                  src="images/app/hand-with-mobile.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End */}
      {/* Counter Start */}
      {/* Counter End */}
    </div>
  );
};

export default MetabaseCamp;
