import Product from "./Product";
import EcoSystem from "./EcoSystem";
import Mission from "./Misison";
import RenderVerse from "./RenderVerse";
import Action from "./Action";
import RoadMap from "./RoadMap";
import Team from "./Team";
import Footer from "../../components/Footer";
import Disrupting from "./Disrupting";
import HightLight from "./Highlight";
import { Element, Link } from "react-scroll";

import Background from "../../assets/videos/final_61ee52b87014ce0044ebb6b7_54591.mp4";
import React from "react";

const Home = () => {
  const video = React.createRef();

  React.useEffect(() => {
    video.current.playbackRate = 1.25;
    video.current.play();
  }, [video]);

  return (
    <div>
      <div>
        <header id="topnav" className="defaultscroll sticky tagline-height">
          <div className="container">
            <Link to="/home" className="logo">
              <div>Renderverse</div>
            </Link>
            <div className="menu-extras">
              <div className="menu-item">
                <Link
                  className="navbar-toggle"
                  id="isToggle"
                  onClick={() => "toggleMenu()"}
                >
                  <div className="lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </Link>
              </div>
            </div>
            <div id="navigation">
              <ul className="navigation-menu nav-right nav-light">
                <li>
                  <Link to="/home" className="sub-menu-item">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/home/mission" className="sub-menu-item">
                    Mission
                  </Link>
                </li>
                <li>
                  <Link to="/home/eco-system" className="sub-menu-item">
                    Eco System
                  </Link>
                </li>
                <li>
                  <Link to="/home/roadmap" className="sub-menu-item">
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link to="/home/team" className="sub-menu-item">
                    Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>

      <video
        style={{
          width: "100%",
          height: "108vh",
          objectFit: "cover",
          position: "fixed",
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
      <Element id="/home" name="brand">
        <div id="home">
          <RenderVerse />
        </div>
      </Element>
      <Element id="/home/mission" name="mission">
        <div id="mission">
          <Product title={"Featured In"} isFeatured={true} />
          <Mission />
        </div>
      </Element>
      <Element id="/home/eco-system" name="eco-system">
        <div id="eco-system">
          <EcoSystem />
          <Action />
          <Disrupting />
          <HightLight />
        </div>
      </Element>
      <Element id="/home/roadmap" name="roadmap">
        <div id="roadmap">
          <RoadMap />
        </div>
      </Element>
      <Element id="/home/team" name="team">
        <div id="team">
          <Team />
        </div>
      </Element>
      <Product title={"Advisors and Backer"} isFeatured={false} />
      <Element id="/home/contact" name="contact">
        <div id="contact">
          <Footer />
        </div>
      </Element>
    </div>
  );
};
export default Home;
