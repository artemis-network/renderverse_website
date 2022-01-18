import Placeholder from "../../assets/images/medium.svg";

const Disrupting = () => {
  return (
    <div style={{ background: "#557571" }}>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(253,250,246,1) 0%, rgba(85,117,113,1) 80%)",
          height: "20vh",
        }}
      ></div>
      <div
        className="section"
        style={{
          background: "#557571",
        }}
      >
        <div className="container">
          <h1 className="font-weight-bold px-4">Renderverse is disrupting </h1>
          <h1 className="font-weight-bold px-4">a $40 trillion industry</h1>
          <div className="row justify-content-md-center my-4">
            <div className="col-lg-4 md-col-4 col-12 my-4">
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
                  $250 Million
                </div>
                <div
                  style={{
                    fontSize: ".8rem",
                    fontWeight: "bold",
                  }}
                >
                  Gamming
                </div>
                <div style={{ textAlign: "left" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum, possimus voluptates explicabo dolores sunt impedit.
                </div>
              </div>
            </div>

            <div className="col-lg-4 md-col-4 col-12 my-4">
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
                  $250 Million
                </div>
                <div
                  style={{
                    fontSize: ".8rem",
                    fontWeight: "bold",
                  }}
                >
                  Metaverse
                </div>
                <div style={{ textAlign: "left" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum, possimus voluptates explicabo dolores sunt impedit.
                </div>
              </div>
            </div>
            <div className="col-lg-4 md-col-4 col-12 my-4">
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
                  $250 Million
                </div>
                <div
                  style={{
                    fontSize: ".8rem",
                    fontWeight: "bold",
                  }}
                >
                  NFT Market Place
                </div>
                <div style={{ textAlign: "left" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum, possimus voluptates explicabo dolores sunt impedit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disrupting;
