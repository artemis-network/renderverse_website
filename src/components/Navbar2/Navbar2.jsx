/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-scroll";
import * as Linker from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState({ state: "none" });

  function toggle() {
    if (open.state === "block") setOpen({ state: "none" });
    else setOpen({ state: "block" });
  }

  return (
    <header id="topnav" className="defaultscroll sticky tagline-height">
      <div className="container">
        <Linker.Link to="/" className="logo">
          <div>Renderverse</div>
        </Linker.Link>
        <div className="menu-extras">
          <div className="menu-item">
            <Link className="navbar-toggle" id="isToggle" onClick={toggle}>
              <div className="lines">
                <span />
                <span />
                <span />
              </div>
            </Link>
          </div>
        </div>
        <div style={{ display: open.state, padding: "8rem 0" }}>
          <ul className="navigation-menu nav-right nav-light">
            <li>
              <Linker.Link
                onClick={toggle}
                to="/"
                className="sub-menu-item item_point"
              >
                Home
              </Linker.Link>
            </li>
            <li>
              <Linker.Link
                onClick={toggle}
                to="/"
                className="sub-menu-item item_point"
              >
                Mission
              </Linker.Link>
            </li>
            <li>
              <Linker.Link
                onClick={toggle}
                to="/news"
                class="sub-menu-item item_point"
              >
                Blog & News
              </Linker.Link>
            </li>
            <li>
              <a
                href="https://whitepaper.renderverse.io/welcome/introduction"
                class="sub-menu-item item_point"
              >
                White-Paper
              </a>
            </li>
            <li>
              <a href="features.html" class="sub-menu-item item_point">
                Economics-Paper
              </a>
            </li>
            <li>
              <Linker.Link to="/" className="sub-menu-item item_point">
                Eco System
              </Linker.Link>
            </li>
            <li>
              <Linker.Link to="/" className="sub-menu-item item_point">
                Roadmap
              </Linker.Link>
            </li>
            <li>
              <Linker.Link to="/" className="sub-menu-item item_point">
                Team
              </Linker.Link>
            </li>
          </ul>
        </div>

        <div id="navigation">
          <ul className="navigation-menu nav-right nav-light">
            <li>
              <Linker.Link to="/" className="sub-menu-item item_point">
                Home
              </Linker.Link>
            </li>
            <li>
              <Linker.Link to="/" className="sub-menu-item item_point">
                Mission
              </Linker.Link>
            </li>
            <li class="has-submenu parent-parent-menu-item">
              <a href="javascript:void(0)">Learn</a>
              <span class="menu-arrow"></span>
              <ul class="submenu">
                <li>
                  <Linker.Link to="/news" class="sub-menu-item item_point">
                    Blog & News
                  </Linker.Link>
                </li>
                <li>
                  <Linker.Link to="/faq" class="sub-menu-item item_point">
                    {" "}
                    FAQ{" "}
                  </Linker.Link>
                </li>
              </ul>
            </li>
            <li class="has-submenu parent-parent-menu-item">
              <a href="javascript:void(0)">Docs</a>
              <span class="menu-arrow"></span>
              <ul class="submenu">
                <li>
                  <a
                    href="https://whitepaper.renderverse.io/welcome/introduction"
                    class="sub-menu-item item_point"
                  >
                    White-Paper
                  </a>
                </li>
                <li>
                  <a href="features.html" class="sub-menu-item item_point">
                    Economics-Paper
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Linker.Link to="/" className="sub-menu-item item_point">
                Eco System
              </Linker.Link>
            </li>
            <li>
              <Linker.Link to="/" className="sub-menu-item item_point">
                Roadmap
              </Linker.Link>
            </li>
            <li>
              <Linker.Link to="/" className="sub-menu-item item_point">
                Team
              </Linker.Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
