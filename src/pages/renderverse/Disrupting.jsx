import Placeholder from "../../assets/images/medium.svg";

const Disrupting = () => {
  return (
    <div className="section" style={{ background: "#0b1118" }}>
      <div className="container">
        <h1 className="font-weight-bold px-4">Brokoli is disrupting </h1>
        <h1 className="font-weight-bold px-4">a $40 trillion industry</h1>
        <div className="row justify-content-md-center my-4">
          <div
            style={{ background: "gray", borderRadius: "2vh" }}
            className="col-lg-3 md-col-3 col-12 mx-2 my-5 px-3 py-3"
          >
            <img
              style={{ borderRadius: "2rem", padding: "2rem" }}
              src={Placeholder}
              height={200}
              alt="cool"
            />
            <div
              style={{
                fontSize: ".8rem",
                fontWeight: "bold",
                color: "#0b111a",
              }}
            >
              Gamming
            </div>
            <div style={{ textAlign: "left", color: "#0b111a" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              possimus voluptates explicabo dolores sunt impedit.
            </div>
          </div>
          <div
            style={{ background: "gray", borderRadius: "2vh" }}
            className="col-lg-3 md-col-3 col-12 mx-2 my-5 px-3 py-3"
          >
            <img
              style={{ borderRadius: "2rem", padding: "2rem" }}
              src={Placeholder}
              height={200}
              alt="cool"
            />
            <div
              style={{
                fontSize: ".8rem",
                fontWeight: "bold",
                color: "#0b111a",
              }}
            >
              Gamming
            </div>
            <div style={{ textAlign: "left", color: "#0b111a" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              possimus voluptates explicabo dolores sunt impedit.
            </div>
          </div>

          <div
            style={{ background: "gray", borderRadius: "2vh" }}
            className="col-lg-3 md-col-3 col-12 mx-2 my-5 px-3 py-3"
          >
            <img
              style={{ borderRadius: "2rem", padding: "2rem" }}
              src={Placeholder}
              height={200}
              width={200}
              alt="cool"
            />
            <div
              style={{
                fontSize: ".8rem",
                fontWeight: "bold",
                color: "#0b111a",
              }}
            >
              Gamming
            </div>
            <div style={{ textAlign: "left", color: "#0b111a" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              possimus voluptates explicabo dolores sunt impedit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disrupting;
