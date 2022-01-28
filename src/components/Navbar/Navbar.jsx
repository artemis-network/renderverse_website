/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header id="topnav" className="defaultscroll sticky tagline-height">
      <div className="container">
        <Link to="/" className="logo">
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
              <Link to="/" className="sub-menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/mission" className="sub-menu-item">
                Mission
              </Link>
            </li>
            <li class="has-submenu parent-parent-menu-item">
              <a href="javascript:void(0)">Learn</a>
              <span class="menu-arrow"></span>
              <ul class="submenu">
                <li>
                  <Link to="/news" class="sub-menu-item">
                    Blog & News
                  </Link>
                </li>
                <li>
                  <Link to="/faq" class="sub-menu-item">
                    FAQ
                  </Link>
                </li>
              </ul>
            </li>
            <li class="has-submenu parent-parent-menu-item">
              <a href="javascript:void(0)">Docs</a>
              <span class="menu-arrow"></span>
              <ul class="submenu">
                <li>
                  <a href="aboutus.html" class="sub-menu-item">
                    White-Paper
                  </a>
                </li>
                <li>
                  <a href="features.html" class="sub-menu-item">
                    Economics-Paper
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/eco-system" className="sub-menu-item">
                Eco System
              </Link>
            </li>
            <li>
              <Link to="/roadmap" className="sub-menu-item">
                Roadmap
              </Link>
            </li>
            <li>
              <Link to="/team" className="sub-menu-item">
                Team
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
