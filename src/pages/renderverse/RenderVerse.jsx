import Telegram from "../../assets/images/telegram-plane.svg";
import Twitter from "../../assets/images/twitter.svg";
import Medium from "../../assets/images/medium.svg";
import Discord from "../../assets/images/icons8-discord.svg";
import ScrollDown from "../../assets/images/down-arrow (1).svg";

const MetabaseCamp = () => {
  return (
    <div
      style={{
        height: "108vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "4rem 0",
      }}
    >
      {/* Hero Start */}
      <section className="d-flex align-items-center ">
        <div className="container">
          <div className="row mt-5 align-items-center">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="title-heading">
                <span className="badge bg-soft-success rounded-md">$RNDR</span>
                <h4
                  style={{
                    padding: "1rem 2rem",
                    borderRadius: "4vh",
                  }}
                  className="glow-text display-5 mt-3 mb-4"
                >
                  An AR doorway into the Metaverse & NFTs
                </h4>
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  className="mt-4 pt-2 align-items-center"
                >
                  <div className="btn btn-primary m-1">
                    <i className="uil uil-bitcoin-circle" /> Token Launch
                  </div>
                  <div className="btn btn-secondary m-1">
                    <i className="uil uil-newspaper" /> White Paper
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
      {/* Hero End */}
      {/* End */}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          columnGap: "3rem",
          padding: "7rem 0 3rem 0",
        }}
      >
        <img className="socials_l" src={Twitter} alt="twitter"></img>
        <img className="socials_l" src={Telegram} alt="telegram"></img>
        <img className="socials_l" src={Medium} alt="medium"></img>
        <img className="socials_l" src={Discord} alt="medium"></img>
      </div>

      <p
        className="text-center para-desc mx-auto mb-0"
        style={{
          fontWeight: "bold",
          background: "white",
          color: "#0b1118",
          padding: "1rem 2rem .75rem 2rem",
          borderRadius: "4vh",
          boxShadow: "1px 1px 12px rgba(0,0,0,0.25)",
          position: "relative",
        }}
      >
        Immerse yourself into the world of Renderverse
        <span
          style={{
            display: "block",
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, -20%)",
          }}
        >
          <img height={40} width={40} src={ScrollDown} alt="scroll down" />
        </span>
      </p>
    </div>
  );
};

export default MetabaseCamp;
