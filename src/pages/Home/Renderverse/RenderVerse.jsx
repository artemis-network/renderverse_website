import React from "react";
import Telegram from "../../../assets/images/telegram.svg";
import Twitter from "../../../assets/images/twitter (1).svg";
import Medium from "../../../assets/images/medium (2).svg";
import Discord from "../../../assets/images/discord.svg";
import ScrollDown from "../../../assets/images/down-arrow (1).svg";
import { Link } from "react-scroll";

import "./Renderverse.css";
import Background from "../../../assets/videos/final.mp4";

const Renderverse = () => {
  const video = React.createRef();

  React.useEffect(() => {
    video.current.playbackRate = 1.25;
    video.current.play();
  }, [video]);

  return (
    <div style={{ height: "110vh" }} className="section">
      <video
        style={{
          width: "100%",
          height: "108vh",
          objectFit: "cover",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: -1,
        }}
        ref={video}
        loop
        muted
        playsInline
      >
        <source src={Background} type="video/mp4" />
      </video>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          rowGap: "1.5rem",
          padding: "12rem 0 0 0 ",
        }}
        className="container"
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="title-heading">
            <span className="badge bg-soft-success rounded-md">$RNDR</span>
            <div className="glow-text">
              An AR doorway into the Metaverse & NFTs
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* <Link to="/token-launch" className="btn btn-primary m-1">
            <i className="uil uil-bitcoin-circle" /> Token Launch
          </Link>
          <Link to="/white-paper" className="btn btn-secondary m-1">
            <i className="uil uil-newspaper" /> White Paper
          </Link> */}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            columnGap: "3rem",
            margin: "20rem 0 0 0",
          }}
        >
          <div className="socials_l">
            <img src={Twitter} alt="twitter"></img>
          </div>

          <div className="socials_l">
            <img src={Medium} alt="medium"></img>
          </div>

          <div className="socials_l">
            <img src={Telegram} alt="telegram"></img>
          </div>

          <div className="socials_l">
            <img src={Discord} alt="medium"></img>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p className="sub-text-title">
            Immerse yourself into the world of Renderverse
            <Link to="/mission">
              <span
                style={{
                  display: "block",
                  position: "absolute",
                  left: "50%",
                  transform: "translate(-50%, -10%)",
                }}
              >
                <img
                  height={40}
                  width={40}
                  src={ScrollDown}
                  alt="scroll down"
                />
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Renderverse;
