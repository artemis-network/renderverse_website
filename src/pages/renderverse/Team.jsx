const Team = () => {
  const coreTeam = [
    { name: "Praneeth Nagu" },
    { name: "Chakravardhan Reddy" },
    { name: "Akash Madduru" },
    { name: "Praneeth Nagu" },
  ];

  const advisors = [
    { name: "Praneeth Nagu" },
    { name: "Chakravardhan Reddy" },
    { name: "Akash Madduru" },
  ];

  const backers = [{ name: "Praneeth Nagu" }, { name: "Praneeth Nagu" }];

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
      <section className="section">
        <div className="container">
          <div className="row justify-content-center my-5">
            {coreTeam.map((person, index) => {
              return (
                <div key={index} className="col-lg-3 col-md-3 col-12">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      style={{
                        borderRadius: "12rem",
                        display: "flex",
                        alignSelf: "center",
                      }}
                      src="images/client/01.jpg"
                      alt=""
                      width={200}
                    />
                    <div className="py-4">
                      <h6 className="mb-0 text-muted text-center">
                        {person.name}
                      </h6>
                      <h6
                        className="text-muted mb-0 text-center"
                        style={{ fontWeight: "bold" }}
                      >
                        Founder / C.E.O
                      </h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/*end row*/}

          <div className="row justify-content-center my-5">
            {advisors.map((person, index) => {
              return (
                <div key={index} className="col-lg-4 col-md-4 col-12">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      style={{
                        borderRadius: "12rem",
                        display: "flex",
                        alignSelf: "center",
                      }}
                      src="images/client/01.jpg"
                      alt=""
                      width={200}
                    />
                    <div className="py-4">
                      <h6 className="mb-0 text-muted text-center">
                        {person.name}
                      </h6>
                      <h6
                        className="text-muted mb-0 text-center"
                        style={{ fontWeight: "bold" }}
                      >
                        Founder / C.E.O
                      </h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row justify-content-center my-5">
            {backers.map((person, index) => {
              return (
                <div key={index} className="col-lg-6 col-md-6 col-12">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      style={{
                        borderRadius: "12rem",
                        display: "flex",
                        alignSelf: "center",
                      }}
                      src="images/client/01.jpg"
                      alt=""
                      width={200}
                    />
                    <div className="py-4">
                      <h6 className="mb-0 text-muted text-center">
                        {person.name}
                      </h6>
                      <h6
                        className="text-muted mb-0 text-center"
                        style={{ fontWeight: "bold" }}
                      >
                        Founder / C.E.O
                      </h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/*end container*/}
      </section>

      {/* End */}
    </div>
  );
};
export default Team;
