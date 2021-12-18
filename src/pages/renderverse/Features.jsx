import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div>
      {/* Hero Start */}
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
                  Features &amp; Services
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
                  <a href="faqs.html" className="navbar-link text-dark">
                    FAQs
                  </a>
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
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-3">
                  Become a crypto trader in seconds
                </h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  We've got everything you need to start trading.
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row justify-content-center">
                <div className="col-md-6 mt-4 pt-2">
                  <div className="feature feature-primary position-relative p-4 pe-5 shadow rounded overflow-hidden">
                    <div className="me-md-5">
                      <Link className="title h5 text-dark">
                        Buy &amp; Sell Crypto
                      </Link>
                      <p className="text-muted mb-3 mt-4">
                        Buy or sell Bitcoin, Ethereum, and other crypto assets
                        with your credit card, debit card, or bank account.
                      </p>
                      <Link className="link">
                        Buy Bitcoin <i className="uil uil-arrow-right" />
                      </Link>
                    </div>
                    <div className="position-absolute top-50 start-100 translate-middle">
                      <img
                        src="images/svg-coin/cpu.svg"
                        className="avatar avatar-large opacity-2"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/*end col*/}
                <div className="col-md-6 mt-4 pt-2">
                  <div className="feature feature-primary position-relative p-4 pe-5 shadow rounded overflow-hidden">
                    <div className="me-md-5">
                      <Link className="title h5 text-dark">Trade Assets</Link>
                      <p className="text-muted mb-3 mt-4">
                        Discover new and innovative crypto assets with over 200
                        spot trading pairs and 25 margin trading pairs.
                      </p>
                      <Link className="link">
                        View Exchange <i className="uil uil-arrow-right" />
                      </Link>
                    </div>
                    <div className="position-absolute top-50 start-100 translate-middle">
                      <img
                        src="images/svg-coin/analytics.svg"
                        className="avatar avatar-large opacity-2"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/*end col*/}
                <div className="col-md-6 mt-4 pt-2">
                  <div className="feature feature-primary position-relative p-4 pe-5 shadow rounded overflow-hidden">
                    <div className="me-md-5">
                      <Link className="title h5 text-dark">
                        Hedge with Poloniex Futures
                      </Link>
                      <p className="text-muted mb-3 mt-4">
                        Trade Bitcoin, Ethereum, and other perpetual with up to
                        100x leverage on Poloniex Futures.
                      </p>
                      <Link className="link">
                        Trade Futures <i className="uil uil-arrow-right" />
                      </Link>
                    </div>
                    <div className="position-absolute top-50 start-100 translate-middle">
                      <img
                        src="images/svg-coin/exchange.svg"
                        className="avatar avatar-large opacity-2"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/*end col*/}
                <div className="col-md-6 mt-4 pt-2">
                  <div className="feature feature-primary position-relative p-4 pe-5 shadow rounded overflow-hidden">
                    <div className="me-md-5">
                      <Link className="title h5 text-dark">
                        Earn Rewards for Trading
                      </Link>
                      <p className="text-muted mb-3 mt-4">
                        Never miss an opportunity for a little competition. Join
                        our latest campaigns to earn rewards.
                      </p>
                      <Link className="link">
                        Join Competition <i className="uil uil-arrow-right" />
                      </Link>
                    </div>
                    <div className="position-absolute top-50 start-100 translate-middle">
                      <img
                        src="images/svg-coin/money.svg"
                        className="avatar avatar-large opacity-2"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-3">Services</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  With Cryptor Trade, you can be sure your trading skills are
                  matched with excellent service.
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="feature feature-primary feature-clean rounded p-4">
                <div className="icons text-center">
                  <i className="uil uil-shovel d-block rounded h3 mb-0" />
                </div>
                <div className="content mt-4">
                  <a href="features.html" className="text-dark h5 title">
                    Support
                  </a>
                  <p className="text-muted mt-3 mb-0">
                    This is required when, for text is not yet available.
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
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="feature feature-primary feature-clean bg-light rounded p-4">
                <div className="icons text-center">
                  <i className="uil uil-servicemark d-block rounded h3 mb-0" />
                </div>
                <div className="content mt-4">
                  <a href="features.html" className="text-dark h5 title">
                    Service Level
                  </a>
                  <p className="text-muted mt-3 mb-0">
                    This is required when, for text is not yet available.
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
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="feature feature-primary feature-clean rounded p-4">
                <div className="icons text-center">
                  <i className="uil uil-shield-check d-block rounded h3 mb-0" />
                </div>
                <div className="content mt-4">
                  <a href="features.html" className="text-dark h5 title">
                    Take profit / Stoploss
                  </a>
                  <p className="text-muted mt-3 mb-0">
                    This is required when, for text is not yet available.
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
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="feature feature-primary feature-clean bg-light rounded p-4">
                <div className="icons text-center">
                  <i className="uil uil-stopwatch-slash d-block rounded h3 mb-0" />
                </div>
                <div className="content mt-4">
                  <a href="features.html" className="text-dark h5 title">
                    Trailing Stop
                  </a>
                  <p className="text-muted mt-3 mb-0">
                    This is required when, for text is not yet available.
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
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="feature feature-primary feature-clean rounded p-4">
                <div className="icons text-center">
                  <i className="uil uil-exclamation-octagon d-block rounded h3 mb-0" />
                </div>
                <div className="content mt-4">
                  <a href="features.html" className="text-dark h5 title">
                    Pending Orders
                  </a>
                  <p className="text-muted mt-3 mb-0">
                    This is required when, for text is not yet available.
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
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="feature feature-primary feature-clean bg-light rounded p-4">
                <div className="icons text-center">
                  <i className="uil uil-money-bill d-block rounded h3 mb-0" />
                </div>
                <div className="content mt-4">
                  <a href="features.html" className="text-dark h5 title">
                    Platform Fees
                  </a>
                  <p className="text-muted mt-3 mb-0">
                    This is required when, for text is not yet available.
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
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h6 className="text-primary">Our Vision</h6>
                <h4 className="title mb-3 mt-2">
                  Cryptocurrency in Every Wallet
                </h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  With Cryptor Trade, you can be sure your trading skills are
                  matched with excellent service.
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="row justify-content-center my-4 py-2">
            <div className="col-md-6">
              <img
                src="images/icon-gradient.png"
                className="img-fluid"
                alt=""
              />
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="text-center">
                <h5 className="text-muted mb-0">Founded in</h5>
                <h2 className="mb-0 display-5 mt-4 fw-bold text-primary">
                  <span className="counter-value" data-target={2021}>
                    1990
                  </span>
                </h2>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="text-center">
                <h5 className="text-muted mb-0">Team Member</h5>
                <h2 className="mb-0 display-5 mt-4 fw-bold text-primary">
                  <span className="counter-value" data-target={1000}>
                    551
                  </span>
                  +
                </h2>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="text-center">
                <h5 className="text-muted mb-0">Users</h5>
                <h2 className="mb-0 display-5 mt-4 fw-bold text-primary">
                  <span className="counter-value" data-target={10}>
                    1
                  </span>
                  M
                </h2>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="text-center">
                <h5 className="text-muted mb-0">Insurance Coverage (USD)</h5>
                <h2 className="mb-0 display-5 mt-4 fw-bold text-primary">
                  <span className="counter-value" data-target={410}>
                    210
                  </span>
                  M
                </h2>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* Vision End */}
    </div>
  );
};

export default Features;
