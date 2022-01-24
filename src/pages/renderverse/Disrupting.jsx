import Placeholder from "../../assets/images/medium.svg";

const Disrupting = () => {
  return (
    <div
      className="section"
      style={{
        background: "#557571",
      }}
    >
      <div className="container">
        <h1 className="font-weight-bold px-4">Renderverse is disrupting a</h1>
        <h1 className="font-weight-bold px-4">$800 billion industry</h1>
        <div className="row justify-content-md-center my-4">
          <div
            data-aos="zoom-in-up"
            data-aos-offset="300"
            data-aos-duration="400"
            data-aos-easing="ease-in-sine"
            className="col-lg-4 md-col-4 col-12 my-4"
          >
            <img
              style={{
                background: "#313133",
                borderRadius: "2vh",
                padding: "2rem",
                display: "flex",
                alignSelf: "center",
              }}
              src={Placeholder}
              height={200}
              width={300}
              alt="cool"
            />
            <div className="mx-2 my-4">
              <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
                $220 Billion
              </div>
              <div
                style={{
                  fontSize: ".8rem",
                  fontWeight: "bold",
                }}
              >
                Gaming
              </div>
              <div style={{ textAlign: "left" }}>
                RenderPlay aims to develop, contribute and support GameFI with
                P2E games.
              </div>
            </div>
          </div>

          <div
            data-aos="zoom-in-up"
            data-aos-offset="300"
            data-aos-duration="400"
            data-aos-easing="ease-in-sine"
            className="col-lg-4 md-col-4 col-12 my-4"
          >
            <img
              style={{
                background: "#313133",
                borderRadius: "2vh",
                padding: "2rem",
                display: "flex",
                alignSelf: "center",
              }}
              src={Placeholder}
              height={200}
              width={300}
              alt="cool"
            />
            <div className="px-2 my-4">
              <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
                $80 Billion
              </div>
              <div
                style={{
                  fontSize: ".8rem",
                  fontWeight: "bold",
                }}
              >
                Metaverse and NFT’s
              </div>
              <div style={{ textAlign: "left" }}>
                We bring people one step closer to the realm of metaverse and
                NFTs with RenderScan and RenderMarket.
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-offset="300"
            data-aos-duration="400"
            data-aos-easing="ease-in-sine"
            className="col-lg-4 md-col-4 col-12 my-4"
          >
            <img
              style={{
                background: "#313133",
                borderRadius: "2vh",
                padding: "2rem",
                display: "flex",
                alignSelf: "center",
              }}
              src={Placeholder}
              height={200}
              width={300}
              alt="cool"
            />
            <div className="px-2 my-4">
              <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
                $500 billion
              </div>
              <div
                style={{
                  fontSize: ".8rem",
                  fontWeight: "bold",
                }}
              >
                E-commerce Merchandise
              </div>
              <div style={{ textAlign: "left" }}>
                Shop from a wide range of merchandise with RenderStore
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disrupting;
