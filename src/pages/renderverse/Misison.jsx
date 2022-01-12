import { Link } from "react-router-dom";

import Wave from "react-wavify";

const Mission = () => {
  return (
    <div>
      {/* Hero End */}
      {/* Start */}
      <section
        style={{
          backgroundColor: "#2a2a72",
          margin: "10rem 0 0 0",
        }}
        className="section"
      >
        <div
          style={{
            position: "relative",
          }}
        >
          <Wave
            style={{ position: "absolute", bottom: "3rem" }}
            fill="url(#gradient1)"
            paused={false}
            options={{
              height: 20,
              amplitude: 10,
              speed: 0.25,
              points: 5,
            }}
          >
            <defs>
              <linearGradient id="gradient1">
                <stop offset="10%" stopColor="#045de9" />
                <stop offset="90%" stopColor="#63a4ff" />
              </linearGradient>
            </defs>
          </Wave>

          <Wave
            style={{ position: "absolute", bottom: "3rem" }}
            fill="url(#gradient)"
            options={{
              height: 25,
              amplitude: 25,
              speed: 0.35,
              points: 3,
            }}
          >
            <defs>
              <linearGradient id="gradient">
                <stop offset="100%" stopColor="#2a2a72" />
                <stop offset="70%" stopColor="#045de9" />
              </linearGradient>
            </defs>
          </Wave>
        </div>

        <div
          style={{
            fontSize: "2rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: "0 0 2rem 0",
          }}
        >
          Our Mission & Vision
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6 order-2 order-md-1">
              <div className="section-title me-lg-5">
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
      <div
        style={{
          transform: "rotate(180deg)",
          background: "#2a2a72",
          position: "relative",
        }}
      >
        <Wave
          style={{ position: "absolute", top: "-8rem" }}
          paused={true}
          fill="#2a2a72"
          options={{
            height: 80,
            amplitude: 16,
            speed: 0.75,
            points: 5,
          }}
        />
      </div>
      {/*end section*/}
      {/* End */}
    </div>
  );
};

export default Mission;
