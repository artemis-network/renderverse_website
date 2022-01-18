const Mission = () => {
  return (
    <div>
      <section
        className="section"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,17,24,1) 0%, rgba(81,107,235,1) 100%)",
        }}
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
            padding: "10rem 0 2rem 0",
          }}
        >
          What is Renderverse?
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 order-2 order-md-1">
              <div className="my-4">
                <div style={{ fontSize: ".8rem", fontWeight: "bold" }}>
                  OUR MISSION
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Empowering every person on the planet to step into the world
                  of Metaverse and NFT's with next-gen rendering technology
                  powered by AI and ML
                </div>
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
                <div style={{ fontSize: ".8rem", fontWeight: "bold" }}>
                  OUR PRODUCT
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
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
