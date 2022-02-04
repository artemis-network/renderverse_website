import Dot from "../../assets/images/icons/dot.svg";

const Tagline = () => {
  return (
    <div>
      <div
        style={{ background: "#7A0BC0", padding: ".25rem", position: "fixed" }}
        className="tagline shadow"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="text-slider">
                <ul
                  className="list-inline mb-0 move-text"
                  style={{ fontSize: "1.05rem", fontWeight: "bold" }}
                >
                  <li className="list-inline-item small mb-0">
                    $RDNV token sale is coming soon
                  </li>
                  <li className="list-inline-item small mb-0">
                    <img src={Dot} alt="" height={25} width={25} />
                  </li>
                  <li className="list-inline-item small mb-0">
                    RenderScan application is coming soon on android play store
                    and ios app store
                  </li>
                  <li className="list-inline-item small mb-0">
                    <img src={Dot} alt="" height={25} width={25} />
                  </li>
                  <li className="list-inline-item small mb-0">
                    Render marketplace is going live soon
                  </li>
                  <li className="list-inline-item small mb-0">
                    <img src={Dot} alt="" height={25} width={25} />
                  </li>
                  <li className="list-inline-item small mb-0">
                    $RDNV token sale is coming soon
                  </li>
                  <li className="list-inline-item small mb-0">
                    <img src={Dot} alt="" height={25} width={25} />
                  </li>
                  <li className="list-inline-item small mb-0">
                    RenderScan application is coming soon on android play store
                    and ios app store
                  </li>
                  <li className="list-inline-item small mb-0">
                    <img src={Dot} alt="" height={25} width={25} />
                  </li>
                </ul>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </div>
      {/*end tagline*/}
    </div>
  );
};

export default Tagline;
