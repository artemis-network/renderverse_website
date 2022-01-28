import Praneeth from "../../assets/images/praneeth.jpeg";
import Chakri from "../../assets/images/chakri.jpeg";
import Akash from "../../assets/images/akash.jpeg";
import Roney from "../../assets/images/roney.jpeg";

import LinkedIn from "../../assets/images/linkedin (1).svg";
import Mail from "../../assets/images/mail (2).svg";
import Twitter from "../../assets/images/twitter (4).svg";

const Team = () => {
  const coreTeam = [
    {
      name: "Praneeth Nagu",
      role: "Founder / Marketing Lead",
      links: [],
      img: Praneeth,
    },
    {
      name: "Chakravardhan Reddy",
      role: "Co-Founder / Project Lead",
      links: [],
      img: Chakri,
    },
    {
      name: "Akash Madduru",
      role: "Product / Dev Lead",
      links: [],
      img: Akash,
    },
    {
      name: "Roney",
      role: "Product / Design Lead",
      links: [],
      img: Roney,
    },
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
          <div
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="row justify-content-center my-5"
          >
            {coreTeam.map((person, index) => {
              return (
                <div key={index} className="col-lg-3 col-md-3 col-12">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      columnGap: ".25rem",
                      margin: "1rem 0",
                    }}
                  >
                    <img src={Twitter} height={40} width={40} alt="im1"></img>
                    <img src={LinkedIn} height={40} width={40} alt="im1"></img>
                    <img src={Mail} height={35} width={35} alt="im1"></img>
                  </div>
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
                      src={person.img}
                      alt=""
                      width={150}
                    />
                    <div className="py-4">
                      <h6 className="mb-0 text-muted text-center">
                        {person.name}
                      </h6>
                      <h6
                        className="text-muted mb-0 text-center"
                        style={{ fontWeight: "bold" }}
                      >
                        {person.role}
                      </h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/*end row*/}

          <div
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="row justify-content-center my-5"
          >
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
                      width={150}
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

          <div
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="row justify-content-center my-5"
          >
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
                      width={150}
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
