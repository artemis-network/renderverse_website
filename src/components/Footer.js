import './Footer.css'
import Blog from '../assets/images/blog.svg'

import Medium from '../assets/images/medium (2).svg'
import Discord from '../assets/images/discord (2).svg'
import Telegram from '../assets/images/telegram (1).svg'
import Twitter from '../assets/images/twitter (2).svg'

const Footer = () => {
  return (
    <div>
      <div style={{ display: "flex", height: "16vh", background: "#0b1118" }}></div>
      <footer style={{ backgroundColor: "white" }} >
        <div className='container'>
          <div
            className="row justify-content-center" style={{
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              background: "white",
              padding: "4rem",
              borderRadius: "4vh",
              height: "100%",
              transform: "translateY(-30%)",
              margin: "0 0 5rem 0"
            }}>
            <div className='col-lg-3 col-md-3 col-12' style={{ display: "flex", justifyContent: 'center', flexDirection: "column", alignItems: 'center' }}>
              <div style={{ color: "#0B1118", fontSize: "3rem" }}>Join</div>
              <p style={{ color: "#0B1118" }}>The Community</p>
            </div>
            <div
              className='col-lg-9 col-md-9 col-md-12'
            >
              <div className='row' style={{ display: "flex", justifyContent: 'center', alignItems: 'center', margin: "auto auto", height: "12vh" }}>
                <div className='col-lg-9 col-md-9 col-12' >
                  <input className='form-control' style={{ padding: "1rem", fontSize: "1rem", background: "white", borderRadius: "4vh" }} placeholder="Enter your email" />
                  <div style={{ color: "#0b1118", fontSize: ".9rem", padding: ".5rem 1rem" }}>By entering your email, you agree to get our emails.</div>
                </div>
                <div className='col-lg-3 col-md-9 col-12'>
                  <button style={{ borderRadius: "5vh", }} className="btn btn-secondary ">Submit</button>
                  <div style={{ fontSize: ".9rem", padding: ".5rem 1rem" }}>Hidden</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='container py-6'>
          <div className='row justify-content-center'>
            <div
              data-aos="flip-left"
              data-aos-duration="400"
              data-aos-offset="700"
              data-aos-easing="ease-in-sine"
              className='col-lg-3 col-md-4 col-12 my-4'>
              <div className='p-2' style={{ display: "flex", justifyContent: "center" }}>
                <img src={Blog} height={100} width={100} alt="cool" />
              </div>
              <div className='p-2' style={{ textAlign: "center", fontSize: "1.25rem", color: "#0b1118" }}>Support and Feedback</div>
              <div className='p-2' style={{ color: "#0b1118", textAlign: 'center' }}>Ask questions and give feedback, We are adaptable and always strive to improve our services with your assistance.</div>
              <div className='container'>
                <div className='row justify-content-center p-2'>
                  <div className='col-6' style={{ justifyContent: "center", display: "flex" }}>
                    <button className='btn btn-outline-primary'>
                      <span >
                        <img src={Telegram} height={30} alt="medium" />
                      </span>
                    </button>
                  </div>
                  <div className='col-6' style={{ justifyContent: "center", display: "flex" }}>
                    <button className='btn btn-outline-primary'>
                      <span >
                        <img src={Discord} height={30} alt="medium" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div

              data-aos="flip-left"
              data-aos-duration="600"
              data-aos-offset="700"
              data-aos-easing="ease-in-sine"
              className='col-lg-3 col-md-4 col-12 my-4'>
              <div className='p-2' style={{ display: "flex", justifyContent: "center" }}>
                <img src={Blog} height={100} width={100} alt="cool" />
              </div>
              <div className='p-2' style={{ textAlign: "center", fontSize: "1.25rem", color: "#0b1118" }}>Blog</div>
              <div className='p-2' style={{ color: "#0b1118", textAlign: 'center' }}> In our Medium blog, you can learn about new features, partnerships, and monthly updates.</div>
              <div className='container'>
                <div className='row justify-content-center p-2 mb-2'>
                  <button className='btn btn-outline-primary'>
                    <span >
                      <img src={Medium} height={30} alt="medium" />
                    </span>
                    <span className='mx-2'>Medium</span>
                  </button>
                </div>
              </div>
            </div>

            <div

              data-aos="flip-left"
              data-aos-duration="800"
              data-aos-offset="700"
              data-aos-easing="ease-in-sine"
              className='col-lg-3 col-md-4 col-12 my-4'>
              <div className='p-2' style={{ display: "flex", justifyContent: "center" }}>
                <img src={Blog} height={100} width={100} alt="cool" />
              </div>
              <div className='p-2' style={{ textAlign: "center", fontSize: "1.25rem", color: "#0b1118" }}>Annoucements</div>
              <div className='p-2' style={{ color: "#0b1118", textAlign: 'center' }}>Stay connected with our marketing team and be the first to know about upcoming events, progress and updates.</div>
              <div className='container'>
                <div className='row justify-content-center p-2'>
                  <div className='col-6' style={{ justifyContent: "center", display: "flex" }}>
                    <button className='btn btn-outline-primary'>
                      <span >
                        <img src={Telegram} height={30} alt="medium" />
                      </span>
                    </button>
                  </div>
                  <div className='col-6' style={{ justifyContent: "center", display: "flex" }}>
                    <button className='btn btn-outline-primary'>
                      <span >
                        <img src={Twitter} height={30} alt="medium" />
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
