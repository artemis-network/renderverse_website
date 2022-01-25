import React from "react";
import Telegram from "../../../assets/images/telegram-plane.svg";
import Twitter from "../../../assets/images/twitter.svg";
import Medium from "../../../assets/images/medium.svg";
import Discord from "../../../assets/images/icons8-discord.svg";
import ScrollDown from "../../../assets/images/down-arrow (1).svg";
import { Link } from "react-router-dom";

import "./Renderverse.css";
import Background from "../../../assets/videos/final_61ee52b87014ce0044ebb6b7_54591.mp4";

const Renderverse = () => {
  const video = React.createRef();

  React.useEffect(() => {
    video.current.playbackRate = 1.25;
    video.current.play();
  }, [video]);

  return (
    <div style={{ height: "100vh" }} className="section">
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
          rowGap: "3rem",
          padding: "12rem 0 0 0 ",
        }}
        className="container"
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="title-heading">
            <span className="badge bg-soft-success rounded-md">$RNDR</span>
            <div className="glow-text display-5 text-center">
              An AR doorway into the Metaverse & NFTs
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/token" className="btn btn-primary m-1">
            <i className="uil uil-bitcoin-circle" /> Token Launch
          </Link>
          <Link to="/white-paper" className="btn btn-secondary m-1">
            <i className="uil uil-newspaper" /> White Paper
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            columnGap: "3rem",
          }}
        >
          <img className="socials_l" src={Twitter} alt="twitter"></img>
          <img className="socials_l" src={Medium} alt="medium"></img>
          <img className="socials_l" src={Telegram} alt="telegram"></img>
          <img className="socials_l" src={Discord} alt="medium"></img>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <p className="sub-text-title">
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
      </div>
    </div>
  );
};

export default Renderverse;
