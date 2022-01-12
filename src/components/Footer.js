import './Footer.css'

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        padding: "2rem",
        columnGap: "10rem",
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          display: "flex",
          justifyContent: "center",
          padding: "4rem 0 ",
          color: "#0B1118",
        }}
      >
        Contact Us
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            padding: "5rem",
            columnGap: "10rem",
            borderRadius: "5vh",
          }}
        >
          <div>
            <h2 style={{ color: "#0B1118" }}>17563</h2>
            <p style={{ color: "#0B1118" }}>In The Community</p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", columnGap: "2rem" }}
          >
            <input
              style={{
                width: "20rem",
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
      <div>
        <div className="container">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              padding: "2rem",
              margin: "2rem",
              columnGap: "5rem",
            }}
          >
            <button className='telegram basic'>Telegram</button>
            <button className='twitter basic'>Twitter</button>
            <button className='discord basic'>Discord</button>
            <button className='medium basic'>Medium</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
