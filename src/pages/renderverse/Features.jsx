const Features = () => {
  return (
    <div style={{ background: "#0b1118" }}>
      {/* Start */}
      <section className="section">
        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-3">Eco System</h4>
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
            <div className="col-lg-7 col-md-7 col-12 mt-4 pt-2">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2">
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
                <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2">
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
                <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2">
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
                <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2">
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
            </div>

            <div
              className="col-lg-5 col-md-5 col-12 mt-4 pt-2"
              style={{
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                color: "white",
                borderRadius: "2vh",
              }}
            >
              Hello
            </div>
          </div>
        </div>
        {/*end row*/}
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* Vision End */}
    </div>
  );
};

export default Features;
