const Mission = () => {
  return (
    <div>
      <section
        className="section"
        style={{
          background: "#ffffff",
          padding: "0 0 4rem 0",
        }}
      >
        <div
          style={{
            position: "relative",
          }}
        ></div>

        {/* <div
          style={{
            fontSize: "2rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            color: "#0b1118",
          }}
        >
          What is Renderverse?
        </div> */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 order-2 order-md-1">
              <div style={{ display: "flex", padding: "1rem 0" }}>
                <div
                  style={{
                    fontSize: "1.35rem",
                    padding: ".25rem .5rem",
                  }}
                  className="text-muted"
                >
                  OUR
                </div>
                <div
                  style={{
                    color: "#ffffff",
                    fontSize: "1.35rem",
                    fontWeight: "bold",
                    padding: ".25rem .5rem",
                    background: "#E20880",
                  }}
                >
                  MISSION
                </div>
              </div>
              <div
                style={{
                  fontSize: "1.25rem",
                  color: "#0b1118",
                }}
              >
                Empowering every person on the planet to step into the world of
                Metaverse and NFT's with next-gen rendering technology powered
                by AI and ML
              </div>
            </div>

            <div className="col-lg-6 col-md-6 order-2 order-md-1">
              <div className="my-4 mx-4"></div>
            </div>
            {/*end col*/}
          </div>

          <div className="row" style={{ margin: "4rem 0" }}></div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 order-2 order-md-1">
              <div className="my-4"></div>
            </div>

            <div className="col-lg-6 col-md-6 order-2 order-md-1">
              <div className="my-4 mx-4">
                <div
                  style={{
                    display: "flex",
                    padding: "1rem 0",
                    justifyContent: "flex-end",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.35rem",
                      padding: ".25rem .5rem",
                      textAlign: "left",
                    }}
                    className="text-muted"
                  >
                    OUR
                  </div>
                  <div
                    style={{
                      color: "#ffffff",
                      fontSize: "1.35rem",
                      fontWeight: "bold",
                      padding: ".25rem .5rem",
                      background: "#674C9F",
                    }}
                  >
                    PRODUCT
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "1.25rem",
                    color: "#0b1118",
                  }}
                >
                  A cross-device Deep learning-based Augmented Reality
                  application that scans surrounding objects and mints NFTs in
                  Metaverse
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
      {/* End */}
    </div>
  );
};

export default Mission;
