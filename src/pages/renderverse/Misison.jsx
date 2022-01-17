const Mission = () => {
  return (
    <div>
      <section
        style={{
          background:
            "linear-gradient(180deg, rgba(11,17,24,1) 0%, rgba(154,6,128,1) 100%)",
        }}
        className="section"
      >
        <div
          style={{
            position: "relative",
          }}
        ></div>

        <div
          style={{
            fontSize: "2rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: "5rem 0 2rem 0",
          }}
        >
          What is Renderverse?
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6 order-2 order-md-1">
              <div className="my-4">
                <div style={{ fontSize: ".9rem", fontWeight: "bold" }}>
                  OUR MISSION
                </div>
                <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
                  OUR TAG LINE
                </div>
              </div>
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
      </section>
      {/*end section*/}
      {/* End */}
    </div>
  );
};

export default Mission;
