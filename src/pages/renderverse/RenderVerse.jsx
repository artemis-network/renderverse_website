import { Link } from "react-router-dom";

const RenderVerse = () => {
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
        <div className="container">
          <div className="row align-items-end mb-4 pb-2">
            <div className="col-md-8">
              <div className="section-title">
                <h4 className="title mb-3">Track the market</h4>
                <p className="text-muted para-desc mb-0">
                  Make better investment decisions with real-time data at your
                  fingertips
                </p>
              </div>
            </div>
            {/*end col*/}
            <div className="col-md-4 d-none d-md-block">
              <div className="text-end">
                <a href="market-price.html" className="text-primary">
                  See Marketplace <i className="uil uil-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          {/*end row*/}
          <div className="row">
            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card border-0 p-4 rounded shadow position-relative">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <img
                    src="images/coin/bitcoin.png"
                    className="avatar avatar-coin rounded-pill p-1 bg-success"
                    alt=""
                  />
                  <span className="text-muted fw-medium">BTC</span>
                </div>
                <h6>Bitcoin</h6>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <small className="text-success">+15.55%</small>
                  <small className="text-success">+$ 155</small>
                  <small>$ 41245</small>
                </div>
                <div className="crypto-chart">
                  <div>
                    <div id="chart-1" />
                  </div>
                </div>
              </div>
            </div>
            {/*end slide*/}
            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card border-0 p-4 rounded shadow position-relative">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <img
                    src="images/coin/ethereum.png"
                    className="avatar avatar-coin rounded-pill p-1 bg-danger"
                    alt=""
                  />
                  <span className="text-muted fw-medium">ETS</span>
                </div>
                <h6>Ethereum</h6>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <small className="text-danger">-25.01%</small>
                  <small className="text-danger">-$ 524</small>
                  <small>$ 1458</small>
                </div>
                <div className="crypto-chart">
                  <div>
                    <div id="chart-2" />
                  </div>
                </div>
              </div>
            </div>
            {/*end slide*/}
            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card border-0 p-4 rounded shadow position-relative">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <img
                    src="images/coin/monero.png"
                    className="avatar avatar-coin rounded-pill p-1 bg-success"
                    alt=""
                  />
                  <span className="text-muted fw-medium">XMR</span>
                </div>
                <h6>Monero</h6>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <small className="text-success">+3.08%</small>
                  <small className="text-success">+$ 58</small>
                  <small>$ 448</small>
                </div>
                <div className="crypto-chart">
                  <div>
                    <div id="chart-3" />
                  </div>
                </div>
              </div>
            </div>
            {/*end slide*/}
            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card border-0 p-4 rounded shadow position-relative">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <img
                    src="images/coin/litecoin.png"
                    className="avatar avatar-coin rounded-pill p-1 bg-danger"
                    alt=""
                  />
                  <span className="text-muted fw-medium">LTC</span>
                </div>
                <h6>Litecoin</h6>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <small className="text-danger">-5.05%</small>
                  <small className="text-danger">-$ 48</small>
                  <small>$ 478</small>
                </div>
                <div className="crypto-chart">
                  <div>
                    <div id="chart-4" />
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-12 d-block d-md-none">
              <div className="text-center mt-4">
                <a href="market-price.html" className="text-primary">
                  See Marketplace <i className="uil uil-arrow-right" />
                </a>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
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
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-3">
                  All your crypto and NFTs in one place
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
          <div className="row justify-content-center">
            <div className="col-12">
              <ul className="list-unstyled text-center">
                <li className="list-inline-item m-md-4 my-4 mx-2">
                  <img
                    src="images/coin/auroracoin.png"
                    className="avatar avatar-wallet p-lg-3 p-2 rounded-pill shadow-md"
                    alt=""
                  />
                </li>
                <li className="list-inline-item m-md-4 my-4 mx-2">
                  <img
                    src="images/coin/avalanche.png"
                    className="avatar avatar-wallet p-lg-3 p-2 rounded-pill shadow-md"
                    alt=""
                  />
                </li>
                <li className="list-inline-item m-md-4 my-4 mx-2">
                  <img
                    src="images/coin/binance.png"
                    className="avatar avatar-wallet p-lg-3 p-2 rounded-pill shadow-md"
                    alt=""
                  />
                </li>
                <li className="list-inline-item m-md-4 my-4 mx-2">
                  <img
                    src="images/coin/bitcoin-cash.png"
                    className="avatar avatar-wallet p-lg-3 p-2 rounded-pill shadow-md"
                    alt=""
                  />
                </li>
                <li className="list-inline-item m-md-4 my-4 mx-2">
                  <img
                    src="images/coin/bitcoin.png"
                    className="avatar avatar-wallet p-lg-3 p-2 rounded-pill shadow-md"
                    alt=""
                  />
                </li>
                <li className="list-inline-item m-md-4 my-4 mx-2">
                  <img
                    src="images/coin/bittorrent.png"
                    className="avatar avatar-wallet p-lg-3 p-2 rounded-pill shadow-md"
                    alt=""
                  />
                </li>
                <li className="list-inline-item m-md-4 my-4 mx-2">
                  <img
                    src="images/coin/blocknet.png"
                    className="avatar avatar-wallet p-lg-3 p-2 rounded-pill shadow-md"
                    alt=""
                  />
                </li>
                <li className="list-inline-item m-md-4 my-4 mx-2">
                  <img
                    src="images/coin/coinye.png"
                    className="avatar avatar-wallet p-lg-3 p-2 rounded-pill shadow-md"
                    alt=""
                  />
                </li>
                <li className="list-inline-item m-md-4 my-4 mx-2">
                  <img
                    src="images/coin/ethereum.png"
                    className="avatar avatar-wallet p-lg-3 p-2 rounded-pill shadow-md"
                    alt=""
                  />
                </li>
                <li className="list-inline-item m-md-4 my-4 mx-2">
                  <img
                    src="images/coin/kucoin.png"
                    className="avatar avatar-wallet p-lg-3 p-2 rounded-pill shadow-md"
                    alt=""
                  />
                </li>
                <li className="list-inline-item m-md-4 my-4 mx-2">
                  <img
                    src="images/coin/litecoin.png"
                    className="avatar avatar-wallet p-lg-3 p-2 rounded-pill shadow-md"
                    alt=""
                  />
                </li>
                <li className="list-inline-item m-md-4 my-4 mx-2">
                  <img
                    src="images/coin/monero.png"
                    className="avatar avatar-wallet p-lg-3 p-2 rounded-pill shadow-md"
                    alt=""
                  />
                </li>
                <li className="list-inline-item m-md-4 my-4 mx-2">
                  <img
                    src="images/coin/potcoin.png"
                    className="avatar avatar-wallet p-lg-3 p-2 rounded-pill shadow-md"
                    alt=""
                  />
                </li>
                <li className="list-inline-item m-md-4 my-4 mx-2">
                  <img
                    src="images/coin/primecoin.png"
                    className="avatar avatar-wallet p-lg-3 p-2 rounded-pill shadow-md"
                    alt=""
                  />
                </li>
                <li className="list-inline-item m-md-4 my-4 mx-2">
                  <img
                    src="images/coin/zcash.png"
                    className="avatar avatar-wallet p-lg-3 p-2 rounded-pill shadow-md"
                    alt=""
                  />
                </li>
              </ul>
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
      <section
        className="section"
        style={{ background: 'url("images/bg/cta.png") top' }}
      >
        <div className="bg-overlay bg-light opacity-7" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <h6 className="text-muted mb-0">Founded in</h6>
                <h2 className="mb-0 display-6 mt-3 fw-bold text-primary">
                  <span className="counter-value" data-target={2021}>
                    1990
                  </span>
                </h2>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-3 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="text-center">
                <h6 className="text-muted mb-0">Team Member</h6>
                <h2 className="mb-0 display-6 mt-3 fw-bold text-primary">
                  <span className="counter-value" data-target={1000}>
                    551
                  </span>
                  +
                </h2>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
              <div className="text-center">
                <h6 className="text-muted mb-0">Users</h6>
                <h2 className="mb-0 display-6 mt-3 fw-bold text-primary">
                  <span className="counter-value" data-target={10}>
                    1
                  </span>
                  M
                </h2>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
              <div className="text-center">
                <h6 className="text-muted mb-0">Insurance Coverage (USD)</h6>
                <h2 className="mb-0 display-6 mt-3 fw-bold text-primary">
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
      {/* Counter End */}
    </div>
  );
};

export default RenderVerse;
