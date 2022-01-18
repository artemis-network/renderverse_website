const RoadMap = () => {
  return (
    <div
      className="section"
      style={{ padding: "8rem 0", background: "#FAF3F3" }}
    >
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
        Our Goals
      </div>
      <div
        className="container"
        style={{ background: "#0b1118", borderRadius: "2vh" }}
      >
        <div className="row justify-content-center p-3 rounded-top">
          <div className="col-lg-4 col-md-4 justify-content-center col-12">
            <h2 className="text-center my-4 text-muted">Q3 2021</h2>
            <div className="hide_border">
              <h4 className="my-2 text-muted">Pure tokenomics baseline</h4>
              <div className="row mx-4">
                <div
                  className="p-3 bg-white my-2 "
                  style={{ borderRadius: "2vh", border: "2px solid gray" }}
                >
                  Set of lending-borrowing contracts
                </div>
              </div>
              <div className="row mx-4">
                <div
                  className="p-3  bg-white my-2 "
                  style={{ borderRadius: "2vh", border: "2px solid gray" }}
                >
                  $UFI Pool
                </div>
              </div>
              <div className="row mx-4">
                <div
                  className="p-3 bg-white my-2 "
                  style={{ borderRadius: "2vh", border: "2px solid gray" }}
                >
                  $UFI Dex Integration
                </div>
              </div>
              <div className="row mx-4">
                <div
                  className="p-3 bg-white my-2"
                  style={{ borderRadius: "2vh", border: "2px solid gray" }}
                >
                  Farming
                </div>
              </div>
              <h4 className="my-2 text-muted">PureFi Protocol</h4>
              <div className="row mx-4">
                <div
                  className="bg-white p-3 my-2"
                  style={{ borderRadius: "2vh", border: "2px solid gray" }}
                >
                  Verifiable Credentials Standards and document formats for:
                  <ul>
                    <li>AML</li>
                    <li>KYC • Other Meta Standards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 justify-content-center col-12">
            <h2 className="text-center my-4 text-muted">Q4 2021</h2>
            <div className="hide_border">
              <h4 className="my-2 text-muted">Integration with DEXs</h4>
              <div className="row mx-4">
                <div
                  className="p-3 bg-white my-2"
                  style={{ borderRadius: "2vh", border: "2px solid gray" }}
                >
                  DEX integration KIT
                </div>
              </div>
              <div className="row mx-4">
                <div
                  className="p-3 bg-white my-2"
                  style={{ borderRadius: "2vh", border: "2px solid gray" }}
                >
                  Circuit
                  <ul>
                    <li>AML </li>
                    <li>KYC</li>
                    <li>Other</li>
                  </ul>
                </div>
              </div>
              <div className="row mx-4">
                <div
                  className="p-3 bg-white my-2 "
                  style={{ borderRadius: "2vh", border: "2px solid gray" }}
                >
                  ZK-SNARK setup procedure (Public event)
                </div>
              </div>
              <div className="row mx-4">
                <div
                  className="p-3 bg-white my-2 "
                  style={{ borderRadius: "2vh", border: "2px solid gray" }}
                >
                  Intermediate validation contract for EVM compatible
                  blockchains
                </div>
              </div>

              <div className="row mx-4">
                <div
                  className="p-3 bg-white my-2"
                  style={{ borderRadius: "2vh", border: "2px solid gray" }}
                >
                  Intermediate smart contract for CosmWasm
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 justify-content-center col-12">
            <h2 className="text-center my-4 text-muted">Q1 2021</h2>
            <h4 className="text-muted">Issuers SDK</h4>
            <div>
              <div className="row mx-4">
                <div
                  className="p-3 bg-white my-2"
                  style={{ borderRadius: "2vh", border: "2px solid gray" }}
                >
                  $UFI staking
                </div>
              </div>
              <div className="row mx-4">
                <div
                  className="p-3 bg-white my-2 "
                  style={{ borderRadius: "2vh", border: "2px solid gray" }}
                >
                  Onboarding procedure
                </div>
              </div>
              <div className="row mx-4">
                <div
                  className="p-3 bg-white my-2"
                  style={{ borderRadius: "2vh", border: "2px solid gray" }}
                >
                  External reference API
                </div>
              </div>
              <div className="row mx-4">
                <div
                  className="p-3 bg-white my-2"
                  style={{ borderRadius: "2vh", border: "2px solid gray" }}
                >
                  Farming
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RoadMap;
