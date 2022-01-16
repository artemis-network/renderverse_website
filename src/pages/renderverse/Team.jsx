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

const Team = () => {
  return (
    <div style={{ background: "white" }}>
      <div
        style={{
          fontSize: "2rem",
          display: "flex",
          justifyContent: "center",
          padding: "4rem 0 0 0 ",
          color: "#0b111a",
        }}
      >
        Our Team
      </div>

      <section className="section mobile_view">
        <div className="container">
          <div className="row">
            <TinySlider className="tiny-timeline" settings={settings}>
              {imgs.map((img, index) => {
                return (
                  <div className="card text-center team border-0 shadow rounded overflow-hidden">
                    <img
                      src="images/client/01.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="card-body py-3 content">
                      <h5 className="mb-0">Calvin Carlo</h5>
                      <h6 className="text-muted mb-0">Founder / C.E.O</h6>
                    </div>
                    <ul className="list-unstyled team-social mb-0">
                      <li>
                        <a
                          href="mailto:contact@example.com"
                          className="btn btn-icon btn-pills btn-soft-primary"
                        >
                          <i data-feather="facebook" className="icons" />
                        </a>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </TinySlider>
          </div>
        </div>
      </section>

      <section className="section desk_view">
        <div className="container">
          <div className="row">
            {imgs.map((img, index) => {
              return (
                <div className="col-lg-3 col-md-6 col-12 my-2">
                  <div className="card text-center team border-0 shadow rounded overflow-hidden">
                    <img
                      src="images/client/01.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="card-body py-3 content">
                      <h5 className="mb-0">Calvin Carlo</h5>
                      <h6 className="text-muted mb-0">Founder / C.E.O</h6>
                    </div>
                    <ul className="list-unstyled team-social mb-0">
                      <li>
                        <a
                          href="mailto:contact@example.com"
                          className="btn btn-icon btn-pills btn-soft-primary"
                        >
                          <i data-feather="facebook" className="icons" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>

      {/* End */}
    </div>
  );
};
export default Team;
