import Wave from "react-wavify";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import LinkTwo, { Element } from "react-scroll";
import Video from "../../assets/videos/final_61debe39bffffc010d375016_931214.mp4";
import Imag from "../../assets/images/medium.svg";
import { useEffect, useState } from "react";

const Token = () => {
  const [text, setText] = useState({ text: "" });
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    setText({ text: testimonials[0].testimonial });
    setCurr(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateTestmonial = (index) => {
    setText({ text: testimonials[index].testimonial });
    setCurr(index);
  };

  const testimonials = [
    {
      name: "John Doe",
      role: "Co Founder A",
      testimonial: "Some Text A",
    },
    {
      name: "Will Cart",
      role: "Co Founder C",
      testimonial: "Some Text B",
    },
    {
      name: "Smith Joe",
      role: "Co Founder #",
      testimonial: "Some Text C",
    },
  ];

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
                  <LinkTwo.Link to="/home" className="sub-menu-item">
                    Home
                  </LinkTwo.Link>
                </li>
                <li>
                  <LinkTwo.Link to="/how-to-buy" className="sub-menu-item">
                    How-to-buy
                  </LinkTwo.Link>
                </li>
                <li>
                  <LinkTwo.Link to="/testimonials" className="sub-menu-item">
                    Testimonials
                  </LinkTwo.Link>
                </li>
                <li>
                  <LinkTwo.Link to="/contact-us" className="sub-menu-item">
                    Contact Us
                  </LinkTwo.Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
      <div>
        <div className="container">
          <Element id="/home" name="home">
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
                    $RNDV enables users to buy the merchandise in the
                    Renderstores and also encourages businesses to open physical
                    franchisee stores
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
          </Element>
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
        }}
      >
        <h2 style={{ textAlign: "center", color: "#0b1118" }}>
          $RNDV Token launch details
          <div className="container">
            <video
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "4vh",
                margin: "4rem 0",
              }}
              loop
              muted
              playsInline
              controls
            >
              <source src={Video} type="video/mp4" />
            </video>
          </div>
        </h2>
      </div>

      <Element id="/testimonials" name="testimonails">
        <div style={{ padding: "4rem 0", background: "#0b1118" }}>
          <h2 style={{ textAlign: "center" }}>Testimonials</h2>
          <div
            className="container"
            style={{ padding: "5rem 0", textAlign: "center" }}
          >
            <h1 style={{ padding: "4rem 0" }}>{text.text}</h1>

            <div
              className="row justify-content-center"
              style={{ rowGap: "1rem", columnGap: "1rem" }}
            >
              {testimonials.map((data, index) => {
                return (
                  <div
                    onClick={() => updateTestmonial(index)}
                    className="col-lg-3 col-md-12 col-12"
                    style={{
                      padding: "1rem",
                      borderRadius: "1vh 1vw",
                      marginTop: "1rem",
                      background: "linear-gradient(145deg, #0a0f16, #0c121a)",
                      boxShadow: "5px 5px 37px #04070a, -5px -5px 37px #121b26",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 5fr",
                        columnGap: "1rem",
                      }}
                    >
                      <div>
                        <img
                          style={{
                            background: "#2F86A6",
                            padding: "1rem",
                            borderRadius: "5vh",
                          }}
                          alt=""
                          src={Imag}
                          height={80}
                          width={80}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "left",
                          alignSelf: "center",
                        }}
                      >
                        <div> {data.name} </div>
                        <div> {data.role} </div>
                      </div>
                    </div>

                    {curr === index ? (
                      <div
                        style={{
                          height: "1vh",
                          width: "100%",
                          background: "#2F86A6",
                          borderRadius: "4vh",
                          marginTop: "1rem",
                        }}
                      ></div>
                    ) : (
                      <div
                        style={{
                          height: "1vh",
                          width: "100%",
                          background: "#D9D7F1",
                          borderRadius: "4vh",
                          marginTop: "1rem",
                        }}
                      ></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Element>

      <Element id="/contact-us">
        <Footer animation={null} duration={0} ease={null} />
      </Element>
    </div>
  );
};

export default Token;
