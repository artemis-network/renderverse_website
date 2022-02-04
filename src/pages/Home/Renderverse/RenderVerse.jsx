/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { Link } from "react-scroll";

import Background from "../../../assets/videos/final.mp4";
import Telegram from "../../../assets/images/renderverse/telegram.svg";
import Twitter from "../../../assets/images/renderverse/twitter.svg";
import Medium from "../../../assets/images/renderverse/medium.svg";
import Discord from "../../../assets/images/renderverse/discord.svg";
import ScrollDown from "../../../assets/images/icons/arrow.svg";
import BubblyButton from "../../../components/Button/Button";
import ButtonNew from "../../../components/Button/ButtonNew";
import "./Renderverse.css";

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
          display: "grid",
          alignItems: "center",
          rowGap: "1rem",
          justifyContent: "center",
          alignSelf: "center",
          alignContent: "center",
        }}
        className="container renderverse"
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="title-heading">
            <span className="badge bg-soft-success rounded-md linker">
              $RNDR
            </span>
            <div className="glow-text">
              An AR doorway into the Metaverse & NFTs
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "4rem 0 0 0",
            columnGap: "2rem",
          }}
        >
          <ButtonNew to="/token-launch" label="Token Launch"></ButtonNew>
          <BubblyButton to="/whitepaper" label="White Paper"></BubblyButton>
        </div>
        <div
          className="renderverse_socials"
          style={{
            display: "flex",
            justifyContent: "center",
            columnGap: "3rem",
          }}
        >
          <a
            className="socials_l"
            href="https://twitter.com/teamrenderverse"
            target={"_blank"}
          >
            <img src={Twitter} alt="twitter"></img>
          </a>

          <a
            href="https://renderverse.medium.com/"
            target={"_blank"}
            className="socials_l"
          >
            <img src={Medium} alt="medium"></img>
          </a>

          <a
            href="https://t.me/renderversechat"
            target={"_blank"}
            className="socials_l"
          >
            <img src={Telegram} alt="telegram"></img>
          </a>

          <a
            href="https://discord.gg/Xp3HcvPedY"
            target={"_blank"}
            className="socials_l"
          >
            <img src={Discord} alt="medium"></img>
          </a>
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
