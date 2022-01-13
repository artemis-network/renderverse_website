import './Footer.css'

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
      <div className='footer_but_links'>
        <button className='telegram basic'>Telegram</button>
        <button className='twitter basic'>Twitter</button>
        <button className='discord basic'>Discord</button>
      </div>
      <div className='footer_but_links'>
        <button className='medium basic'>Medium</button>
        <button className='medium basic'>Github</button>

      </div>
      <hr />
      <div className='footer_end_l'>
        <div style={{ fontSize: "1.75rem", fontWeight: "bold", display: 'flex', justifyContent: "center" }}>
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
