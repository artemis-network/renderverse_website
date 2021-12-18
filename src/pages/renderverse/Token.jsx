import { Link } from "react-router-dom";

const Token = () => {
  return (
    <div>
      {/* Hero Start */}
      <section className="bg-half-170 d-flex align-items-center">
        <div className="bg-overlay bg-gradient-primary" />
        <div className="container">
          <div className="row mt-4 align-items-center">
            <div className="col-lg-6 offset-lg-1 col-md-6 col-12 order-1 order-md-2">
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    fontSize: "1.75rem",
                    background: "white",
                    borderRadius: ".25rem",
                    top: "-1rem",
                    left: "2rem",
                    padding: "0 1rem",
                    color: "black",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                >
                  Buy MBC
                </span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    rowGap: "2rem",
                    width: "100%",
                    margin: "4rem 0",
                    border: ".25rem solid #fffff2",
                    borderRadius: ".5rem 3rem",
                    padding: "3rem",
                    background: "#ffffff",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      columnGap: "2rem",
                      width: "100%",
                    }}
                  >
                    <label
                      style={{
                        width: "15%",
                        fontSize: "1.25rem",
                        fontWeight: "500",
                      }}
                    >
                      ETH
                    </label>
                    <input
                      style={{
                        width: "100%",
                        padding: ".75rem",
                        borderRadius: ".3rem",
                        outline: "none",
                        border: "none",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      }}
                      placeholder="ETH Amount"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      columnGap: "2rem",
                      width: "100%",
                    }}
                  >
                    <label
                      style={{
                        width: "15%",
                        fontSize: "1.25rem",
                        fontWeight: "500",
                      }}
                    >
                      MBC
                    </label>
                    <input
                      style={{
                        width: "100%",
                        padding: ".75rem",
                        borderRadius: ".3rem",
                        outline: "none",
                        border: "none",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      }}
                      placeholder="MBC Amount"
                    />
                  </div>

                  <Link className="btn btn-primary w-100">Buy Tokens</Link>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-5 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0 order-2 order-md-1">
              <div className="card border-0 shadow rounded p-4 bg-light overflow-hidden">
                <img
                  src="images/icon-gradient.png"
                  className="avatar avatar-md-md d-block mx-auto"
                  alt=""
                />
                <h5 className="text-center mt-3">Cryptor Token Sale</h5>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <div id="token-sale">
                      <ul className="count-down list-unstyled m-0">
                        <li
                          id="days"
                          className="count-number fw-medium mb-0 list-inline-item px-3"
                        />
                        <li
                          id="hours"
                          className="count-number fw-medium mb-0 list-inline-item px-3"
                        />
                        <li
                          id="mins"
                          className="count-number fw-medium mb-0 list-inline-item px-3"
                        />
                        <li
                          id="secs"
                          className="count-number fw-medium mb-0 list-inline-item px-3"
                        />
                        <li id="end" className="h1" />
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-muted text-center">
                  Token sale ends{" "}
                  <span className="text-dark fw-medium">August 25th 2021</span>
                </p>
                <div className="progress-box mt-4">
                  <div
                    className="progress rounded-md"
                    style={{ height: "16px" }}
                  >
                    <div
                      className="progress-bar position-relative bg-gradient-primary rounded-md"
                      style={{ width: "60%" }}
                    >
                      <div className="progress-value d-block text-muted h6">
                        Funded 60% = $ 600000
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <h6 className="title text-muted text-start mb-0">$ 1000</h6>
                    <h6 className="title text-muted text-end mb-0">
                      $ 1000000
                    </h6>
                  </div>
                </div>
                {/*end process box*/}
                <ul className="list-unstyled mb-0 mt-4">
                  <li className="h6 mb-0">
                    <i className="uil uil-arrow-circle-right text-primary align-middle fs-5 me-1" />
                    <span className="text-muted">Soft Cap:</span> &nbsp;10000
                    USD
                  </li>
                  <li className="h6 mb-0">
                    <i className="uil uil-arrow-circle-right text-primary align-middle fs-5 me-1" />
                    <span className="text-muted">Min. transaction Amount:</span>{" "}
                    &nbsp;1000 USD
                  </li>
                  <li className="h6 mb-0">
                    <i className="uil uil-arrow-circle-right text-primary align-middle fs-5 me-1" />
                    <span className="text-muted">Target:</span> &nbsp;900000 USD
                  </li>
                </ul>
                <div className="mt-4">
                  <Link className="btn btn-primary w-100">Join Now</Link>
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
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-3">It's easier than you think</h4>
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
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="feature feature-primary feature-clean rounded text-center px-4">
                <div className="icons text-center">
                  <i className="uil uil-user-check d-block rounded-pill h3 mb-0 mx-auto" />
                </div>
                <div className="content mt-4">
                  <Link className="text-dark h5 title">
                    Verify your identity
                  </Link>
                  <p className="text-muted mt-3 mb-0">
                    If you’re a new customer you have to do a one-time-only
                    verification of your identify
                  </p>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="feature feature-primary feature-clean rounded text-center px-4">
                <div className="icons text-center">
                  <i className="uil uil-qrcode-scan d-block rounded-pill h3 mb-0 mx-auto" />
                </div>
                <div className="content mt-4">
                  <Link className="text-dark h5 title">Sale the Bitcoin</Link>
                  <p className="text-muted mt-3 mb-0">
                    Choose the currency and how much you want to sell and you’ll
                    be given an address to send to
                  </p>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="feature feature-primary feature-clean rounded text-center px-4">
                <div className="icons text-center">
                  <i className="uil uil-university d-block rounded-pill h3 mb-0 mx-auto" />
                </div>
                <div className="content mt-4">
                  <Link className="text-dark h5 title">
                    Money in your bank account
                  </Link>
                  <p className="text-muted mt-3 mb-0">
                    Once the transaction is confirmed you will receive the money
                    in your bank account
                  </p>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end container*/}
        </div>
        {/*end container*/}
        <div className="container mt-100 mt-60">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">Success Roadmap</h4>
                <p className="text-muted mx-auto para-desc mb-0">
                  Explore and learn more about everything from machine learning
                  and global payments to scaling your team.
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="row">
            <div className="col-12 mt-4 pt-2">
              <div className="tiny-four-item tiny-timeline">
                <div className="tiny-slide text-center">
                  <div className="card pt-4 border-0 feature key-feature feature-primary item-box">
                    <div className="icon text-center rounded-pill mx-auto mb-3 fs-5">
                      <i className="uil uil-pen" />
                    </div>
                    <p className="text-muted mb-0">January, 2019</p>
                    <h6 className="mb-0 mt-1">Planning</h6>
                  </div>
                </div>
                <div className="tiny-slide text-center">
                  <div className="card pt-4 border-0 feature key-feature feature-primary item-box">
                    <div className="icon text-center rounded-pill mx-auto mb-3 fs-5">
                      <i className="uil uil-bitcoin" />
                    </div>
                    <p className="text-muted mb-0">February, 2019</p>
                    <h6 className="mb-0 mt-1">Blockchain Starts</h6>
                  </div>
                </div>
                <div className="tiny-slide text-center">
                  <div className="card pt-4 border-0 feature key-feature feature-primary item-box">
                    <div className="icon text-center rounded-pill mx-auto mb-3 fs-5">
                      <i className="uil uil-clipboard-blank" />
                    </div>
                    <p className="text-muted mb-0">March, 2019</p>
                    <h6 className="mb-0 mt-1">Expanded Licensing</h6>
                  </div>
                </div>
                <div className="tiny-slide text-center">
                  <div className="card p-4 border-0 feature key-feature feature-light bg-primary item-box">
                    <div className="icon text-center rounded-pill mx-auto mb-3 fs-5">
                      <i className="uil uil-money-insert" />
                    </div>
                    <p className="text-white-50 mb-0">April, 2019</p>
                    <h6 className="text-light title-dark mb-0 mt-1">
                      Token Sale
                    </h6>
                  </div>
                </div>
                <div className="tiny-slide text-center">
                  <div className="card pt-4 border-0 feature key-feature feature-primary item-box">
                    <div className="icon text-center rounded-pill mx-auto mb-3 fs-5">
                      <i className="uil uil-airplay" />
                    </div>
                    <p className="text-muted mb-0">May, 2019</p>
                    <h6 className="mb-0 mt-1">Project Launch</h6>
                  </div>
                </div>
                <div className="tiny-slide text-center">
                  <div className="card pt-4 border-0 feature key-feature feature-primary item-box">
                    <div className="icon text-center rounded-pill mx-auto mb-3 fs-5">
                      <i className="uil uil-euro-circle" />
                    </div>
                    <p className="text-muted mb-0">June, 2019</p>
                    <h6 className="mb-0 mt-1">Tier 5 sold</h6>
                  </div>
                </div>
                <div className="tiny-slide text-center">
                  <div className="card pt-4 border-0 feature key-feature feature-primary item-box">
                    <div className="icon text-center rounded-pill mx-auto mb-3 fs-5">
                      <i className="uil uil-desktop" />
                    </div>
                    <p className="text-muted mb-0">December, 2019</p>
                    <h6 className="mb-0 mt-1">Project Live</h6>
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

export default Token;
