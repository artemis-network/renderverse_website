const Features = () => {
  return (
    <div>
      {/* Start */}
      <section
        className="section"
        style={{
          background:
            "linear-gradient(360deg, rgba(11,17,24,1) 85%, rgba(81,107,235,1) 100%)",
        }}
      >
        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-3">Eco System</h4>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="row">
            <div className="col-lg-8 col-md-8 col-12 mt-4 pt-2">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2">
                  <div className="feature feature-primary feature-clean rounded p-4 mx-2">
                    <div className="icons text-center">
                      <i className="uil uil-shield-check d-block rounded h3 mb-0" />
                    </div>
                    <div className="content mt-4">
                      <a href="features.html" className="text-dark h5 title">
                        RENDERFI
                      </a>
                      <p className="text-muted mt-3 mb-0">
                        DeFI, staking and farming to earn passive yield on your
                        $RNDV tokens
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
                  <div className="feature feature-primary feature-clean bg-light rounded p-4 mx-2">
                    <div className="icons text-center">
                      <i className="uil uil-stopwatch-slash d-block rounded h3 mb-0" />
                    </div>
                    <div className="content mt-4">
                      <a href="features.html" className="text-dark h5 title">
                        RENDERMARKET
                      </a>
                      <p className="text-muted mt-3 mb-0">
                        An NFT marketplace where users can buy, sell and mint
                        their NFT's using RNDV tokens
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
                  <div className="feature feature-primary feature-clean bg-light rounded p-4 mx-2">
                    <div className="icons text-center">
                      <i className="uil uil-exclamation-octagon d-block rounded h3 mb-0" />
                    </div>
                    <div className="content mt-4">
                      <a href="features.html" className="text-dark h5 title">
                        RENDERPLAY
                      </a>
                      <p className="text-muted mt-3 mb-0">
                        Online multiplayer p2p gaming powered by Render gamming
                        engine
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
                  <div className="feature feature-primary feature-clean rounded p-4 mx-2">
                    <div className="icons text-center">
                      <i className="uil uil-money-bill d-block rounded h3 mb-0" />
                    </div>
                    <div className="content mt-4">
                      <a href="features.html" className="text-dark h5 title">
                        {" "}
                        RENDERSTORE
                      </a>
                      <p className="text-muted mt-3 mb-0">
                        Shop your favorite Merchandise in our Online stores and
                        physical outlets
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
              className="col-lg-4 col-md-4 col-12 mt-4 pt-2"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            ></div>
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
