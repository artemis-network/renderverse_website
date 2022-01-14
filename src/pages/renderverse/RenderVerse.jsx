import { Link } from "react-router-dom";
import Telegram from "../../assets/images/telegram-plane.svg";
import Twitter from "../../assets/images/twitter.svg";
import Medium from "../../assets/images/medium.svg";
import Discord from "../../assets/images/icons8-discord.svg";

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
                    animationName: "glow",
                    animationDuration: "1s",
                    animationIterationCount: "infinite",
                    animationDirection: "alternate",
                  }}
                  className="display-5 text-white title-dark fw-medium mt-3 mb-4"
                >
                  An AR doorway into the Metaverse & NFTs
                </h4>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Immerse yourself into the world of Metaverse with our
                  cross-device Deep-learning powered AR application
                </p>
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  className="mt-4 pt-2 align-items-center"
                >
                  <Link className="btn btn-primary m-1">
                    <i className="uil uil-apple" /> App Store
                  </Link>
                  <Link className="btn btn-outline-primary m-1">
                    <i className="uil uil-google-play" /> Play Store
                  </Link>
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
          padding: "7rem 0",
        }}
      >
        <img className="socials_l" src={Twitter} alt="twitter"></img>
        <img className="socials_l" src={Telegram} alt="telegram"></img>
        <img className="socials_l" src={Medium} alt="medium"></img>
        <img className="socials_l" src={Discord} alt="medium"></img>
      </div>
    </div>
  );
};

export default MetabaseCamp;
