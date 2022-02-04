/* eslint-disable react/jsx-no-target-blank */
import './Footer.css'
import Blog from '../../assets/images/footer/clipboard-min.png'
import Announcement from '../../assets/images/footer/announcement-min.png'
import Support from '../../assets/images/footer/feedback-message-min.png'

import Medium from '../../assets/images/icons/footer/medium.svg'
import Discord from '../../assets/images/icons/footer/discord.svg'
import Telegram from '../../assets/images/icons/footer/telegram.svg'
import Twitter from '../../assets/images/icons/footer/twitter.svg'

const Footer = (props) => {
  return (
    <div>
      <div style={{ display: "flex", height: "16vh", background: "#0b1118" }}></div>
      <footer style={{ backgroundColor: "white" }} >
        <div className='container'>
          <div className='mobile-view ' >
            <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', rowGap: "1rem", maring: "4rem 2rem", padding: "5rem 0", alignItems: "center" }}>
              <div style={{ display: "flex", justifyContent: 'center', flexDirection: "column" }}>
                <div style={{ color: "#0B1118", fontSize: "3rem" }}>Join</div>
                <p style={{ color: "#0B1118" }}>The Community</p>
              </div>
              <div>
                <input className='form-control' style={{ padding: "1rem", fontSize: "1rem", background: "white", borderRadius: "4vh" }} placeholder="Enter your email" />
                <div style={{ color: "#0b1118", fontSize: ".9rem", padding: ".5rem 1rem" }}>By entering your email, you agree to get our emails.</div>
              </div>

              <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center' }}>
                <button style={{ borderRadius: "5vh", }} className="btn btn-secondary ">Submit</button>
              </div>
            </div>
          </div>


          <div className='desk-view'>
            <div
              className="row justify-content-center " style={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                background: "white",
                padding: "4rem",
                borderRadius: "4vh",
                height: "100%",
                width: "80vw",
                transform: "translateY(-30%)",
                margin: "0 0 5rem 0"
              }}>
              <div className='col-lg-3 col-md-3 col-12' style={{ display: "flex", transform: "translateY(-.5rem)", justifyContent: 'center', flexDirection: "column", alignItems: 'center' }}>
                <div style={{ color: "#0B1118", fontSize: "3rem" }}>Join</div>
                <p style={{ color: "#0B1118" }}>The Community</p>
              </div>
              <div
                className='col-lg-9 col-md-9 col-md-12'
              >
                <div className='row' style={{ display: "flex", justifyContent: 'center', alignItems: 'center', margin: "auto auto", height: "12vh" }}>
                  <div className='col-lg-12 col-md-12 col-12' >
                    <div style={{ display: "flex", justifyContent: "center", flexDirection: 'row', columnGap: "1rem" }}>
                      <input className='form-control' style={{ padding: "1rem", fontSize: "1rem", background: "white", borderRadius: "4vh" }} placeholder="Enter your email" />
                      <button style={{ borderRadius: "4vh", }} className="btn btn-secondary ">Submit</button>
                    </div>
                    <div style={{ color: "#0b1118", fontSize: ".9rem", padding: ".5rem 1rem" }}>By entering your email, you agree to get our emails.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='container py-6'>
          <div className='row justify-content-center'>
            <div
              data-aos={props.animation}
              data-aos-duration={props.duration}
              data-aos-easing={props.ease}
              className='col-lg-3 col-md-4 col-12 my-4'>
              <div className='p-2' style={{ display: "flex", justifyContent: "center" }}>
                <img src={Support} height={100} width={100} alt="cool" />
              </div>
              <div className='p-2' style={{ textAlign: "center", fontSize: "1.25rem", color: "#0b1118" }}>Support and Feedback</div>
              <div className='p-2' style={{ color: "#0b1118", textAlign: 'center' }}>Ask questions and give feedback, We are adaptable and always strive to improve our services with your assistance.</div>
              <div className='container'>
                <div className='row justify-content-center p-2'>
                  <div className='col-6' style={{ justifyContent: "center", display: "flex" }}>
                    <button className='btn btn-outline-primary'>
                      <span >
                        <a
                          href="https://t.me/renderversechat"
                          target={"_blank"}
                        >
                          <img src={Telegram} height={30} alt="medium" />
                        </a>
                      </span>
                    </button>
                  </div>
                  <div className='col-6' style={{ justifyContent: "center", display: "flex" }}>
                    <button className='btn btn-outline-primary'>
                      <span >
                        <a
                          href="https://discord.gg/Xp3HcvPedY"
                          target={"_blank"}>
                          <img src={Discord} height={30} alt="medium" />
                        </a>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos={props.animation}
              data-aos-duration={props.duration}
              data-aos-easing={props.ease}
              className='col-lg-3 col-md-4 col-12 my-4'>
              <div className='p-2' style={{ display: "flex", justifyContent: "center" }}>
                <img style={{ padding: "1rem" }} src={Blog} height={100} width={100} alt="cool" />
              </div>
              <div className='p-2' style={{ textAlign: "center", fontSize: "1.25rem", color: "#0b1118" }}>Blog</div>
              <div className='p-2' style={{ color: "#0b1118", textAlign: 'center' }}> In our Medium blog, you can learn about new features, partnerships, and monthly updates.</div>
              <div className='container'>
                <div className='row justify-content-center p-2 mb-2'>
                  <button className='btn btn-outline-primary'>
                    <span >
                      <a
                        href="https://renderverse.medium.com/"
                        target={"_blank"}
                      >
                        <img src={Medium} height={30} alt="medium" />
                      </a>
                    </span>
                    <span className='mx-2'>Medium</span>
                  </button>
                </div>
              </div>
            </div>

            <div
              data-aos={props.animation}
              data-aos-duration={props.duration}
              data-aos-easing={props.ease}
              className='col-lg-3 col-md-4 col-12 my-4'>
              <div className='p-2' style={{ display: "flex", justifyContent: "center" }}>
                <img src={Announcement} height={100} width={100} alt="cool" />
              </div>
              <div className='p-2' style={{ textAlign: "center", fontSize: "1.25rem", color: "#0b1118" }}>Annoucements</div>
              <div className='p-2' style={{ color: "#0b1118", textAlign: 'center' }}>Stay connected with our marketing team and be the first to know about upcoming events, progress and updates.</div>
              <div className='container'>
                <div className='row justify-content-center p-2'>
                  <div className='col-6' style={{ justifyContent: "center", display: "flex" }}>
                    <button className='btn btn-outline-primary'>
                      <span >
                        <a
                          href="https://t.me/renderverse"
                        >
                          <img src={Telegram} height={30} alt="medium" />
                        </a>
                      </span>
                    </button>
                  </div>
                  <div className='col-6' style={{ justifyContent: "center", display: "flex" }}>
                    <button className='btn btn-outline-primary'>
                      <span >
                        <a
                          href="https://twitter.com/teamrenderverse"
                        >
                          <img src={Twitter} height={30} alt="medium" />
                        </a>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <hr />
        <div className='footer_end_l'>
          <div style={{ fontSize: "1.75rem", display: 'flex', justifyContent: "center" }}>
            Renderverse
          </div>
          <div className='footer_content_links'>
            <div>© Renderverse 2022</div>
            <div>Terms and condition</div>
            <div>Privacy policy</div>
            <div>Risk Disclaimer</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
