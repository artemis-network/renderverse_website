import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* TAGLINE START*/}
      <div className="tagline bg-light shadow">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="text-slider">
                <ul className="list-inline mb-0 move-text">
                  <li className="list-inline-item small px-2 mb-0">
                    EOG $ 55.88{" "}
                    <span className="text-success">+$ 4.62 ( +9.01% )</span>
                  </li>
                  <li className="list-inline-item small px-2 mb-0">
                    CHKP $ 120.03{" "}
                    <span className="text-danger">-$ 14.07 ( -10.49% )</span>
                  </li>
                  <li className="list-inline-item small px-2 mb-0">
                    FANG $ 63.58{" "}
                    <span className="text-success">+$ 5.17 ( +8.84% )</span>
                  </li>
                  <li className="list-inline-item small px-2 mb-0">
                    M $ 14.75{" "}
                    <span className="text-success">+$ 1.05 ( +7.66% )</span>
                  </li>
                  <li className="list-inline-item small px-2 mb-0">
                    PKI $ 139.72{" "}
                    <span className="text-danger">-$ 11.41 ( -7.55% )</span>
                  </li>
                  <li className="list-inline-item small px-2 mb-0">
                    ABMD $ 326.23{" "}
                    <span className="text-danger">-$ 21.61 ( -6.21% )</span>
                  </li>
                  <li className="list-inline-item small px-2 mb-0">
                    BITCOIN $ 37,471.47{" "}
                    <span className="text-danger">+$ 492.60 ( +1.33% )</span>
                  </li>
                  <li className="list-inline-item small px-2 mb-0">
                    XRP <span> $ 0.39</span>
                    <span className="text-muted"> UNCH</span>
                  </li>
                  <li className="list-inline-item small px-2 mb-0">
                    LITECOIN <span> $ 148.67</span>
                    <span className="text-danger">-$ 5.58 ( -3.62% )</span>
                  </li>
                  <li className="list-inline-item small px-2 mb-0">
                    BITCOIN CASH <span> $ 427.37</span>
                    <span className="text-danger">-$ 15.98 ( -3.60% )</span>
                  </li>
                  <li className="list-inline-item small px-2 mb-0">
                    ETHEREUM $ 1,647.87{" "}
                    <span className="text-danger">+$ 14.51 ( +0.89% )</span>
                  </li>
                </ul>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>

        {/*end container*/}
      </div>
      {/*end tagline*/}
      {/* TAGLINE END*/}

      {/* Navbar STart */}
      <header id="topnav" className="defaultscroll sticky tagline-height">
        <div className="container">
          {/* Logo Start*/}
          <Link to="/renderverse/home" className="logo">
            <span className="logo-light-mode">
              <img
                src="images/logo-dark.png"
                className="l-dark"
                height={28}
                alt=""
              />
              <img
                src="images/logo-light.png"
                className="l-light"
                height={28}
                alt=""
              />
            </span>
            <img
              src="images/logo-light.png"
              height={28}
              className="logo-dark-mode"
              alt=""
            />
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
          {/*Login button Start*/}
          <ul className="buy-button list-inline mb-0">
            <li className="list-inline-item search-icon mb-0">
              <Link
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <div className="btn btn-icon btn-pills btn-primary">
                  <i className="uil uil-user" />
                </div>
              </Link>
            </li>
          </ul>
          {/*Login button End*/}
          <div id="navigation">
            {/* Navigation Menu*/}
            <ul className="navigation-menu nav-right nav-light">
              <li>
                <Link to="/renderverse/market" className="sub-menu-item">
                  Market
                </Link>
              </li>
              <li>
                <Link to="/renderverse/mission" className="sub-menu-item">
                  {" "}
                  Mission
                </Link>
              </li>
              <li>
                <Link to="/renderverse/features" className="sub-menu-item">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/renderverse/blog" className="sub-menu-item">
                  Blog
                </Link>
              </li>

              <li>
                <Link to="/renderverse/faq" className="sub-menu-item">
                  Faq
                </Link>
              </li>

              <li>
                <Link to="/renderverse/contact" className="sub-menu-item">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/nft-marketplace/explore" className="sub-menu-item">
                  NFT Market
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
  );
};

export default Navbar;
