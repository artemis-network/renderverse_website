import React from "react";
import { Element, Link } from "react-scroll";
import { BrowserRouter, } from 'react-router-dom'

import Product from './pages/renderverse/Product'
import Features from "./pages/renderverse/Features";
import Mission from "./pages/renderverse/Misison";
import RenderVerse from "./pages/renderverse/RenderVerse";
import Action from "./pages/renderverse/Action";
import RoadMap from "./pages/renderverse/RoadMap";
import Team from "./pages/renderverse/Team";
import Footer from "./components/Footer";

import Background from './assets/final_61e8f8c6dd5a10008696540e_607430.mp4'
import Disrupting from "./pages/renderverse/Disrupting";
import HightLight from "./pages/renderverse/Highlight";

const App = () => {
  const video = React.createRef();


  React.useEffect(() => {
    video.current.playbackRate = 1.25;
    video.current.play()
  }, [video])

  return (
    <div>
      <BrowserRouter>
        <div>
          {/* Navbar STart */}
          <header id="topnav" className="defaultscroll sticky tagline-height">
            <div className="container">
              {/* Logo Start*/}
              <Link to="/home" className="logo">
                <div>Renderverse</div>
              </Link>
              {/* Logo end*/}
              <div className="menu-extras">
                <div className="menu-item">
                  {/* Mobile menu toggle*/}
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
                  {/* End mobile menu toggle*/}
                </div>
              </div>
              <div id="navigation">
                {/* Navigation Menu*/}
                <ul className="navigation-menu nav-right nav-light">
                  <li>
                    <Link to="/" className="sub-menu-item">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/mission" className="sub-menu-item">
                      Mission
                    </Link>
                  </li>
                  <li>
                    <Link to="/eco-system" className="sub-menu-item">
                      Eco System
                    </Link>
                  </li>
                  <li>
                    <Link to="/team" className="sub-menu-item">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/roadmap" className="sub-menu-item">
                      Roadmap
                    </Link>
                  </li>
                </ul>
                {/*end navigation menu*/}
              </div>
              {/*end navigation*/}
            </div>
            {/*end container*/}
          </header>
          {/*end header*/}
          {/* Navbar End */}
        </div>

        <video style={{
          width: "100%",
          height: "108vh",
          objectFit: "cover",
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: -1
        }} ref={video} loop muted playsInline>
          <source src={Background} type="video/mp4" />
        </video>


        <Element id="/" name="brand">
          <div id="home">
            <RenderVerse />
          </div>
        </Element>

        <Element id="/mission" name="mission">
          <div id="mission">
            <Product title={"Featured In"} isFeatured={true} />
            <Mission />
          </div>
        </Element>

        <Element id="/eco-system" name="eco-system">
          <div id="eco-system">
            <Features />
            <Action />
            <Disrupting />
            <HightLight />
            {/* <div style={{ height: "100vh", background: "linear-gradient(to bottom, #557571, #2b5f68, #004861, #002f56, #111341)" }}></div> */}
          </div>
        </Element>


        <Element id="/roadmap" name="roadmap">
          <div id="roadmap">
            <RoadMap />
          </div>
        </Element>

        <Element id="/team" name="team">
          <div id="team">
            <Team />
          </div>
        </Element>


        <Product title={"Advisors and Backer"} isFeatured={false} />
        <Element id="/contact" name="contact">
          <div id="contact">
            <Footer />
          </div>

        </Element>


      </BrowserRouter>
    </div>
  );
};

export default App;
