import "./Highlight.css";
import ThumbsUp from "../../assets/images/medium.svg";

const HightLight = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, #557571, #2b5f68, #004861, #002f56, #111341)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-8 col-12">
            <div className="headline">Render your future</div>
            <div className="headline">your future</div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="headline">Here {"->"}</div>
              </div>
              <div className="col-lg-8 col-md-8 col-12">
                <div className="sub_line">
                  We deeply believe the world lacks trust and there
                </div>
                <div className="sub_line">
                  is a desperate need to do something about it.
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-12">
            <div className="trust_img">
              <img src={ThumbsUp} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HightLight;
