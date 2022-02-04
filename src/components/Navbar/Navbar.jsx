/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-scroll";
import * as Linker from "react-router-dom";
import PDF from "../../assets/Purple and Blue Annual Company Report Professional Presentation.pdf";

const Navbar = () => {
  return (
    <header id="topnav" className="defaultscroll sticky tagline-height">
      <div className="container">
        <Linker.Link to="/" className="logo">
          <div>Renderverse</div>
        </Linker.Link>
        <div className="menu-extras">
          <div className="menu-item">
            <Link
              to=""
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
              <Link to="/" className="sub-menu-item item_point">
                Home
              </Link>
            </li>
            <li>
              <Link to="/mission" className="sub-menu-item item_point">
                Mission
              </Link>
            </li>
            <li>
              <Linker.Link to="/news" className="sub-menu-item item_point">
                Blog
              </Linker.Link>
            </li>
            <li className="has-submenu parent-parent-menu-item">
              <a href="javascript:void(0)">Docs</a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li>
                  <a
                    target={"_blank"}
                    href="https://whitepaper.renderverse.io/"
                    className="sub-menu-item item_point"
                  >
                    White-Paper
                  </a>
                </li>
                <li>
                  <a
                    href={PDF}
                    target={"_blank"}
                    className="sub-menu-item item_point"
                  >
                    Economics-Paper
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/eco-system" className="sub-menu-item item_point">
                Eco System
              </Link>
            </li>
            <li>
              <Link to="/roadmap" className="sub-menu-item item_point">
                Roadmap
              </Link>
            </li>
            <li>
              <Link to="/team" className="sub-menu-item item_point">
                Team
              </Link>
            </li>

            <li>
              <Link to="/contact" className="sub-menu-item item_point">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
