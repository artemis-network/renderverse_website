import './Footer.css'
import Support from '../assets/images/support.svg'
import Blog from '../assets/images/blog.svg'
import Speaker from '../assets/images/loudspeaker.svg'

import Medium from '../assets/images/medium (2).svg'
import Discord from '../assets/images/discord (2).svg'
import Telegram from '../assets/images/telegram (1).svg'
import Twitter from '../assets/images/twitter (2).svg'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "white" }}>
      <div style={{ position: "relative" }}>
        <div style={{ height: "40vh", backgroundColor: "#0B1118", alignSelf: "center", display: "flex", justifyContent: 'center', alignItems: 'center' }}></div>
        <div className="footer_class">
          <div>
            <h2 style={{ color: "#0B1118" }}>Join</h2>
            <p style={{ color: "#0B1118" }}>The Community</p>
          </div>
          <div
            className='input_box'
          >
            <input
              style={{
                borderRadius: "5vh",
                background: "white",
                color: "#0b1118",
                fontSize: "1.2rem",
              }}
              placeholder="Enter your email"
            />
            <button className="btn btn-secondary">Submit</button>
          </div>
        </div>
      </div>
      <div style={{ height: "30vh" }}></div>
      <div className='container py-6'>
        <div className='row justify-content-center'>
          <div className='col-lg-3 col-md-4 col-12 my-4'>
            <div className='p-2' style={{ display: "flex", justifyContent: "center" }}>
              <img src={Support} height={100} width={100} alt="cool" />
            </div>
            <div className='p-2' style={{ textAlign: "center", fontSize: "1.25rem", color: "#0b1118" }}>Support and Feedback</div>
            <div className='p-2' style={{ color: "#0b1118", textAlign: 'center' }}>Ask questions, give feedbacks and proposals. We are flexible and all time improving our services with your help.</div>
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

          <div className='col-lg-3 col-md-4 col-12 my-4'>
            <div className='p-2' style={{ display: "flex", justifyContent: "center" }}>
              <img src={Blog} height={100} width={100} alt="cool" />
            </div>
            <div className='p-2' style={{ textAlign: "center", fontSize: "1.25rem", color: "#0b1118" }}>Support and Feedback</div>
            <div className='p-2' style={{ color: "#0b1118", textAlign: 'center' }}>Read about new features, collaborations and news of the week in our blog on Medium.</div>
            <div className='container m-2'>
              <div className='row justify-content-center p-2'>
                <button className='btn btn-outline-primary'>
                  <span >
                    <img src={Medium} height={30} alt="medium" />
                  </span>
                  <span className='mx-2'>Medium</span>
                </button>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-md-4 col-12 my-4'>
            <div className='p-2' style={{ display: "flex", justifyContent: "center" }}>
              <img src={Speaker} height={100} width={100} alt="cool" />
            </div>
            <div className='p-2' style={{ textAlign: "center", fontSize: "1.25rem", color: "#0b1118" }}>Blog</div>
            <div className='p-2' style={{ color: "#0b1118", textAlign: 'center' }}>Be the first to know about sales, new projects and collections, features and upcoming events.</div>
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
  );
};

export default Footer;