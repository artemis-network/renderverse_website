import { Link } from "react-router-dom";
import Wave from "react-wavify";
import Footer from "../../components/Footer";

const Token = () => {
  return (
    <div className="bg-img">
      <div>
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
                  <Link to="/token" className="sub-menu-item">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/how-to-buy" className="sub-menu-item">
                    How-to-buy
                  </Link>
                </li>
                <li>
                  <Link to="/home/eco-system" className="sub-menu-item">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="/home/roadmap" className="sub-menu-item">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
      <div>
        <div className="container">
          <div
            style={{ padding: "16rem 0 5rem 0" }}
            className="row justify-content-center"
          >
            <div
              className="col-lg-6 col-md-6 col-12"
              style={{ padding: "0 1rem" }}
            >
              <div style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                The $RNDV token
              </div>
              <ul
                style={{
                  padding: "2rem 1rem",
                  display: "flex",
                  flexDirection: "column",
                  rowGap: ".5rem",
                  fontSize: "1.05rem",
                }}
              >
                <li>
                  Render token ($RNDV) is a utility token powering Renderverse
                </li>
                <li>
                  $RNDV facilitates users to access premium features like
                  unlimited scans, editing tools in the RenderScan application
                </li>
                <li>
                  $RNDV allows users to buy and sell NFT’s on the RenderMarket
                </li>
                <li>
                  $RNDV enables users to buy the merchandise in the Renderstores
                  and also encourages businesses to open physical franchisee
                  stores
                </li>
                <li>
                  Users can leverage DEFI protocols to earn passive yield on
                  their RNDV tokens
                </li>
                <li>
                  RenderPlay lets users earn passive income by playing their
                  favorite play2earn games
                </li>
              </ul>
            </div>
            <div
              style={{
                padding: "2rem",
                color: "white",
                height: "100%",
              }}
              className="col-lg-6 col-md-6 col-12 glass-morphism"
            >
              <h2 style={{ padding: "1rem" }}>Token Information</h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    width: "100%",
                    rowGap: ".5rem",
                  }}
                >
                  <div>Token Name</div>
                  <div>Token Type</div>
                  <div>Total Supply</div>
                  <div>Circulation Supply</div>
                  <div>Circulation Supply</div>
                  <div>Circulation Supply</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    width: "100%",
                    rowGap: ".5rem",
                  }}
                >
                  <div>$RNDV</div>
                  <div>BEP-20</div>
                  <div>500 million</div>
                  <div>150 million</div>
                  <div>150 million</div>
                  <div>150 million</div>
                </div>
              </div>

              <h3 style={{ margin: "1rem 0" }}>Contact Address</h3>
              <p>0xa38898a4ae982cb0131104a6746f77fa0da57aaa</p>
            </div>
          </div>
        </div>
      </div>
      <Wave
        paused={false}
        fill="white"
        options={{
          height: 25,
          amplitude: 25,
          speed: 0.35,
          points: 3,
        }}
      />

      <div
        style={{
          padding: "4rem 0",
          background: "white",
          height: "100vh",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#0b1118" }}>
          $RNDV Token launch details
        </h2>
      </div>

      <div style={{ padding: "4rem 0", height: "100vh", background: "black" }}>
        <h2 style={{ textAlign: "center" }}>Testimonials</h2>
      </div>
      <Footer />
    </div>
  );
};

export default Token;
