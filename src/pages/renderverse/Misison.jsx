import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <div>
      <section
        className="bg-half-170 d-table w-100"
        style={{ background: 'url("images/bg/market.png") bottom' }}
      >
        <div className="bg-overlay bg-gradient-primary opacity-9" />
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-12">
              <div className="section-title text-center">
                <h4 className="title text-white title-dark fw-medium mb-4">
                  Our Mission
                </h4>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  With Cryptor Trade, you can be sure your trading skills are
                  matched with excellent service.
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <ul
                className="list-unstyled sidebar-nav mb-0 text-center"
                id="navmenu-nav"
              >
                <li className="list-inline-item p-4 h6 mb-0 account-menu">
                  <a href="aboutus.html" className="navbar-link text-dark">
                    About us
                  </a>
                </li>
                <li className="list-inline-item p-4 h6 mb-0 account-menu">
                  <a href="career.html" className="navbar-link text-dark">
                    Career
                  </a>
                </li>
                <li className="list-inline-item p-4 h6 mb-0 account-menu">
                  <a href="mission.html" className="navbar-link text-dark">
                    Mission
                  </a>
                </li>
                <li className="list-inline-item p-4 h6 mb-0 account-menu">
                  <a href="features.html" className="navbar-link text-dark">
                    Features
                  </a>
                </li>
                <li className="list-inline-item p-4 h6 mb-0 account-menu">
                  <Link
                    to="/renederverse/faq"
                    className="navbar-link text-dark"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
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
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6 order-2 order-md-1">
              <div className="section-title me-lg-5">
                <h4 className="title mb-3">Our Mission</h4>
                <p className="text-muted">
                  What's the secret to Cryptor's success? The answer is obvious:
                  Our people. We are proud to have one of the most talented,
                  hardworking and passionate teams the world has to offer.
                  Interested in joining our team?
                </p>
                <ul className="list-unstyled text-muted mb-0">
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle" />
                    </span>
                    <span className="fw-medium">Cryptor Wallet.</span> Your
                    Keys, Your Crypto.
                  </li>
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle" />
                    </span>
                    <span className="fw-medium">Cryptor Earn.</span> No lock-up
                    period and stable returns.
                  </li>
                  <li className="mb-0">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle" />
                    </span>
                    <span className="fw-medium">Cryptor Swap.</span> Swap
                    Cryptor coins and earn Triple Yield.
                  </li>
                </ul>
                <div className="mt-4">
                  <Link className="btn btn-soft-primary">
                    <i className="uil uil-wallet" /> Go to wallet
                  </Link>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-5 col-md-6 order-1 order-md-2 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <img
                src="images/illustration/bitcoin_miner.svg"
                className="img-fluid"
                alt=""
              />
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
        <div className="container mt-100 mt-60">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6 order-1 order-md-2">
              <div className="section-title ms-lg-5">
                <h4 className="title mb-3">Our Vision</h4>
                <p className="text-muted mb-0">
                  Cryptor has a strategic partnership with Ledger, integrating
                  its institutional-grade custody solution, Ledger Vault. We
                  also leverage hardware security modules (HSM) and
                  multi-signature technologies. Cryptor has secured a total of
                  USD 360M in cold storage insurance against physical damage or
                  destruction, and third-party theft.
                </p>
                <div className="mt-4">
                  <Link className="btn btn-soft-primary">
                    <i className="uil uil-arrow-growth" /> See Positions
                  </Link>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-5 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <img
                src="images/illustration/isometric_btc.svg"
                className="img-fluid"
                alt=""
              />
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End */}
    </div>
  );
};

export default Mission;
