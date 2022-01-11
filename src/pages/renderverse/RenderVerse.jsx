import { Link } from "react-router-dom";
import Telegram from "../../assets/images/telegram-plane.svg";
import Twitter from "../../assets/images/twitter.svg";
import Medium from "../../assets/images/medium.svg";
import Discord from "../../assets/images/icons8-discord.svg";

const MetabaseCamp = () => {
  return (
    <div
      className="bg-home bg-black"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "8rem 0",
        backgroundImage: 'url("images/bg/bg02.png") !important',
        backgroundPosition: "center !important",
      }}
    >
      {/* Hero Start */}
      <section className="d-flex align-items-center ">
        <div className="container">
          <div className="row mt-5 align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="title-heading">
                <span className="badge bg-soft-success rounded-md">
                  Calculator
                </span>
                <h4
                  style={{
                    animationName: "glow",
                    animationDuration: "1s",
                    animationIterationCount: "infinite",
                    animationDirection: "alternate",
                  }}
                  className="display-5 text-white title-dark fw-medium mt-3 mb-4"
                >
                  100% Free Digital Asset Exchange Platform
                </h4>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  With Cryptor Trade, you can be sure your trading skills are
                  matched with excellent service.
                </p>
                <div className="mt-4 pt-2">
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
            <div className="col-lg-5 offset-lg-1 col-md-6 col-12">
              <div className="card border-0 bg-light shadow rounded p-4 overflow-hidden">
                <img
                  src="images/illustration/profit.svg"
                  className="img-fluid"
                  alt=""
                />
                <div className="mt-4 pt-2">
                  <h5 className="text-center mb-0">
                    Live Cryptocurrency Calculator
                  </h5>
                  <div className="calculator-block mt-4">
                    <div className="calculator-body"></div>
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
          columnGap: "5rem",
          padding: "7rem 0",
        }}
      >
        <img height={50} width={50} src={Twitter} alt="twitter"></img>
        <img height={50} width={50} src={Telegram} alt="telegram"></img>
        <img height={50} width={50} src={Medium} alt="medium"></img>
        <img height={50} width={50} src={Discord} alt="medium"></img>
      </div>
    </div>
  );
};

export default MetabaseCamp;
