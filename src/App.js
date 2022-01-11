import React from "react";
import Footer from "./components/Footer";
import Product from './pages/renderverse/Product'
import Blog from "./pages/renderverse/Blog";
import Contact from "./pages/renderverse/Contact";
import Faqs from "./pages/renderverse/Faqs";
import Features from "./pages/renderverse/Features";
import Mission from "./pages/renderverse/Misison";
import RenderVerse from "./pages/renderverse/RenderVerse";
import { Element, Link } from "react-scroll";

import { BrowserRouter, } from 'react-router-dom'

const App = () => {

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
                    onclick="toggleMenu()"
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
                    <Link to="/product" className="sub-menu-item">
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link to="/mission" className="sub-menu-item">
                      Mission
                    </Link>
                  </li>
                  <li>
                    <Link to="/features" className="sub-menu-item">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="sub-menu-item">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/faqs" className="sub-menu-item">
                      Faq
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="sub-menu-item">
                      Contact Us
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

        <Element id="/" name="brand">
          <div id="home">
            <RenderVerse />
          </div>
        </Element>

        <Element id="/product" name="product">
          <div id="product">
            <Product />
          </div>
        </Element>

        <Element id="/mission" name="mission">
          <div id="mission">
            <Mission />
          </div>
        </Element>

        <Element id="/features" name="features">
          <div id="features">
            <Features />
          </div>
        </Element>

        <Element id="/blog" name="blog">
          <div id="blog">
            <Blog />
          </div>
        </Element>

        <Element id="/faqs" name="faqs">
          <div id="faqs">
            <Faqs />
          </div>
        </Element>

        <Element id="/contact" name="contact">
          <div id="contact">
            <Contact />
          </div>
        </Element>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
