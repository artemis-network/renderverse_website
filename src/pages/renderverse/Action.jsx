import Action1 from "../../assets/images/d30570a4482c615969784003790d46fa.jpeg";

import TinySlider from "tiny-slider-react";

const imgs = [1, 2, 3, 4, 5, 6];

const settings = {
  controls: false,
  mouseDrag: true,
  loop: true,
  rewind: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  nav: false,
  speed: 400,
  gutter: 12,
  responsive: {
    992: {
      items: 4,
    },

    767: {
      items: 2,
    },

    320: {
      items: 1,
    },
  },
};

const Action = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        rowGap: "1rem",
        backgroundImage:
          "linear-gradient(to right top, #959b9b, #a7acac, #b8bdbd, #cbcfcf, #dde1e1, #dde1e1, #dde1e1, #dde1e1, #cbcfcf, #b8bdbd, #a7acac, #959b9b)",
        padding: "8rem 0",
      }}
    >
      <div className="container">
        <div
          style={{
            fontSize: "2rem",
            display: "flex",
            justifyContent: "center",
            color: "#0B1118",
          }}
        >
          See it in action
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#0B1118",
          }}
        >
          Try it yourself. Invite code: renderverse
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", padding: "1rem" }}
        >
          <div className="btn btn-primary btn-lg">Join Renderverse</div>
        </div>

        <div className="mobile_view">
          <div className="action_row_1">
            <TinySlider settings={settings}>
              {imgs.map((i) => (
                <img
                  key={i}
                  style={{ borderRadius: "3vh", marginTop: "2rem" }}
                  height={520}
                  width={120}
                  alt="image0"
                  src={Action1}
                ></img>
              ))}
            </TinySlider>
          </div>
        </div>

        <div className="desk_view">
          <div className="action_row_1">
            <img
              style={{ borderRadius: "3vh", marginTop: "2rem" }}
              height={320}
              width={180}
              alt="image0"
              src={Action1}
            ></img>
            <img
              style={{ borderRadius: "3vh", marginBottom: "1rem" }}
              height={320}
              width={180}
              alt="image1"
              src={Action1}
            ></img>
            <img
              style={{ borderRadius: "3vh" }}
              height={500}
              width={260}
              alt="image2"
              src={Action1}
            ></img>
            <img
              style={{ borderRadius: "3vh", marginTop: "1rem" }}
              height={320}
              width={180}
              alt="image3"
              src={Action1}
            ></img>
            <img
              style={{ borderRadius: "3vh", marginBottom: "2rem" }}
              height={320}
              width={180}
              alt="image4"
              src={Action1}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;
