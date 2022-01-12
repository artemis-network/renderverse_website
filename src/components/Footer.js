import './Footer.css'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "white" }}>
      <div style={{ position: "relative" }}>
        <div style={{ height: "40vh", backgroundColor: "#0B1118", alignSelf: "center", display: "flex", justifyContent: 'center', alignItems: 'center' }}></div>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          background: "white",
          padding: "4rem 2rem",
          columnGap: "10rem",
          borderRadius: "5vh",
          margin: "auto",
          width: "60vw",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, 20%)"

        }}
        >
          <div>
            <h2 style={{ color: "#0B1118" }}>Join</h2>
            <p style={{ color: "#0B1118" }}>The Community</p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", columnGap: "2rem" }}
          >
            <input
              style={{
                width: "20vw",
                borderRadius: "5vh",
                background: "white",
                color: "#0b1118",
                fontSize: "1.2rem",
                padding: "1rem",
              }}
              className="form-control"
              placeholder="Enter your email"
            />
            <button className="btn btn-secondary">Submit</button>
          </div>
        </div>
      </div>
      <div style={{ height: "30vh" }}></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          padding: "0rem 0 4rem 0",
          columnGap: "5rem",
        }}
      >
        <button className='telegram basic'>Telegram</button>
        <button className='twitter basic'>Twitter</button>
        <button className='discord basic'>Discord</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          padding: "0rem 0 4rem 0",
          columnGap: "5rem",
        }}
      >
        <button className='medium basic'>Medium</button>
        <button className='medium basic'>Github</button>

      </div>
      <hr style={{ borderBottom: ".25px solid #0b111b", margin: "2rem 8rem" }} />
      <div style={{ padding: "0rem 8rem 2rem 8rem ", color: "#0b111b", display: "grid", gridTemplateColumns: "1fr 6fr" }}>
        <div style={{ fontSize: "1.75rem", fontWeight: "bold" }}>
          Renderverse
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", columnGap: "3rem" }}>
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
