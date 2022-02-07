import Store from "../../../assets/images/disrupting/store1.png";
import Gamming from "../../../assets/images/disrupting/stick1.png";
import NFT from "../../../assets/images/disrupting/nft1.png";
import Tilt from "react-parallax-tilt";
import "./Disrupting.css";

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
        <div className="disrupting_row my-4">
          <div
            data-aos="zoom-in-up"
            data-aos-offset="300"
            data-aos-duration="400"
            data-aos-easing="ease-in-sine"
            className="disrupting_col"
          >
            <Tilt>
              <img className="disrupting_img" src={Gamming} alt="cool" />
              <div className="disrupting_text">
                <div style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                  $220 Billion
                </div>
                <div
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                  }}
                >
                  Gaming
                </div>
                <div style={{ fontSize: "1rem", margin: ".25rem 0" }}>
                  RenderPlay aims to develop, contribute and support GameFI with
                  P2E games.
                </div>
              </div>
            </Tilt>
          </div>

          <div
            data-aos="zoom-in-up"
            data-aos-offset="300"
            data-aos-duration="400"
            data-aos-easing="ease-in-sine"
            className="disrupting_col"
          >
            <Tilt>
              <img className="disrupting_img" src={NFT} alt="cool" />
              <div className="disrupting_text">
                <div style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                  $80 Billion
                </div>
                <div
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                  }}
                >
                  Metaverse and NFT’s
                </div>
                <div style={{ fontSize: "1rem", margin: ".25rem 0" }}>
                  We bring people one step closer to the realm of metaverse and
                  NFTs with RenderScan and RenderMarket.
                </div>
              </div>
            </Tilt>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-offset="300"
            data-aos-duration="400"
            data-aos-easing="ease-in-sine"
            className="disrupting_col"
          >
            <Tilt>
              <img className="disrupting_img" src={Store} alt="cool" />
              <div className="disrupting_text">
                <div style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                  $500 billion
                </div>
                <div
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                  }}
                >
                  E-commerce Merchandise
                </div>
                <div style={{ fontSize: "1rem", margin: ".25rem 0" }}>
                  Shop from a wide range of merchandise with RenderStore
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disrupting;