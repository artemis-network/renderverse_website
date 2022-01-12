import TinySlider from "tiny-slider-react";

const imgs = [
  {
    text: "cool",
  },
  {
    text: "cool",
  },
  {
    text: "cool",
  },
  {
    text: "cool",
  },

  {
    text: "cool",
  },
];

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

const RoadMap = () => {
  return (
    <div style={{ padding: "8rem 0", background: "white" }}>
      <div
        style={{
          fontSize: "2rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          padding: "0 0 4rem 0",
          color: "#0B1118",
        }}
      >
        Roadmap
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <TinySlider className="tiny-timeline" settings={settings}>
              {imgs.map((img, index) => {
                return (
                  <div key={index} className="tiny-slide text-center">
                    <div className="card pt-4 border-0 feature key-feature feature-primary item-box">
                      <div className="icon text-center rounded-pill mx-auto mb-3 fs-5">
                        <i className="uil uil-pen"></i>
                      </div>
                      <p className="text-muted mb-0">January, 2019</p>
                      <h6 className="mb-0 mt-1">Planning</h6>
                    </div>
                  </div>
                );
              })}
            </TinySlider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RoadMap;
