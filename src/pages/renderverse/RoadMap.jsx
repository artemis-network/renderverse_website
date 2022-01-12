const RoadMap = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right top, #959b9b, #a7acac, #b8bdbd, #cbcfcf, #dde1e1, #dde1e1, #dde1e1, #dde1e1, #cbcfcf, #b8bdbd, #a7acac, #959b9b)",
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          display: "flex",
          justifyContent: "center",
          color: "#0B1118",
          padding: "8rem 0 0 0 ",
        }}
      >
        Road Map
      </div>
      {/* Start */}
      <section
        className="section"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          rowGap: "1rem",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tiny-four-item tiny-timeline">
                <div className="tiny-slide text-center">
                  <div className="card pt-4 border-0 feature key-feature feature-primary item-box">
                    <div className="icon text-center rounded-pill mx-auto mb-3 fs-5">
                      <i className="uil uil-pen" />
                    </div>
                    <p className="text-black mb-0">January, 2019</p>
                    <h6 className="mb-0 mt-1 text-black">Planning</h6>
                  </div>
                </div>
                <div className="tiny-slide text-center">
                  <div className="card pt-4 border-0 feature key-feature feature-primary item-box">
                    <div className="icon text-center rounded-pill mx-auto mb-3 fs-5">
                      <i className="uil uil-bitcoin" />
                    </div>
                    <p className="text-black mb-0">February, 2019</p>
                    <h6 className="mb-0 mt-1 text-black">Blockchain Starts</h6>
                  </div>
                </div>
                <div className="tiny-slide text-center">
                  <div className="card pt-4 border-0 feature key-feature feature-primary item-box">
                    <div className="icon text-center rounded-pill mx-auto mb-3 fs-5">
                      <i className="uil uil-clipboard-blank" />
                    </div>
                    <p className="text-black mb-0">March, 2019</p>
                    <h6 className="mb-0 mt-1 text-black">Expanded Licensing</h6>
                  </div>
                </div>
                <div className="tiny-slide text-center">
                  <div className="card p-4 border-0 feature key-feature feature-light bg-primary item-box">
                    <div className="icon text-center rounded-pill mx-auto mb-3 fs-5">
                      <i className="uil uil-money-insert" />
                    </div>
                    <p className="text-black -50 mb-0">April, 2019</p>
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
                    <p className="text-black mb-0">May, 2019</p>
                    <h6 className="mb-0 mt-1 text-black">Project Launch</h6>
                  </div>
                </div>
                <div className="tiny-slide text-center">
                  <div className="card pt-4 border-0 feature key-feature feature-primary item-box">
                    <div className="icon text-center rounded-pill mx-auto mb-3 fs-5">
                      <i className="uil uil-euro-circle" />
                    </div>
                    <p className="text-black mb-0">June, 2019</p>
                    <h6 className="mb-0 mt-1 text-black">Tier 5 sold</h6>
                  </div>
                </div>
                <div className="tiny-slide text-center">
                  <div className="card pt-4 border-0 feature key-feature feature-primary item-box">
                    <div className="icon text-center rounded-pill mx-auto mb-3 fs-5">
                      <i className="uil uil-desktop" />
                    </div>
                    <p className="text-black mb-0">December, 2019</p>
                    <h6 className="mb-0 mt-1 text-black">Project Live</h6>
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
    </div>
  );
};
export default RoadMap;
