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
            <li>
              <Link to="/learn" className="sub-menu-item">
                Learn
              </Link>
            </li>
            <li>
              <Link to="/docs" className="sub-menu-item">
                Docs
              </Link>
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
