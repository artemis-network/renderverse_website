/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-target-blank */
import Praneeth from "../../assets/images/team/avtar_praneeth.png";
import Chakri from "../../assets/images/team/avtar_chakri.png";
import Akash from "../../assets/images/team/avtar_akash.png";
import Roney from "../../assets/images/team/MicrosoftTeams-image (6).png";
import Prasanth from "../../assets/images/team/prasanth.png";

import LinkedIn from "../../assets/images/icons/socials/linkedin.svg";
import Mail from "../../assets/images/icons/socials/mail.svg";
import Twitter from "../../assets/images/icons/socials/twitter.svg";

import Tilt from "react-parallax-tilt";

const Team = () => {
  const coreTeam = [
    {
      name: "Praneeth Nagu",
      role: "Founder / Marketing Lead",
      size: 188,
      margin: "0rem",
      links: [
        {
          link: "53",
          icon: Twitter,
        },
        {
          link: "https://www.linkedin.com/in/praneethnagu/",
          icon: LinkedIn,
        },
        {
          link: "51",
          icon: Mail,
        },
      ],
      img: Praneeth,
    },
    {
      name: "D. C. R",
      role: "Co-Founder / Project Lead",
      size: 170,
      margin: "0rem",
      links: [
        {
          link: "41",
          icon: Twitter,
        },
        {
          link: "https://www.linkedin.com/in/chakravardhan/",
          icon: LinkedIn,
        },
        {
          link: "42",
          icon: Mail,
        },
      ],
      img: Chakri,
    },
    {
      name: "Akash Madduru",
      role: "Product / Dev Lead",

      size: 170,
      margin: "0rem",
      links: [
        {
          link: "https://twitter.com/akash2rockzzz",
          icon: Twitter,
        },
        {
          link: "https://www.linkedin.com/in/akashmrc98/",
          icon: LinkedIn,
        },
        {
          link: "31",
          icon: Mail,
        },
      ],
      img: Akash,
    },
  ];

  const team = [
    {
      name: "Roney",
      role: "Product / Design Lead",
      margin: "2rem",
      links: [
        {
          link: "21",
          icon: Twitter,
        },
        {
          link: "https://www.linkedin.com/in/roney-antony-41501891/",
          icon: LinkedIn,
        },
        {
          link: "23",
          icon: Mail,
        },
      ],
      img: Roney,
    },
    {
      name: "Prashanth",
      role: "Blockchain Developer",
      margin: "0rem",
      links: [
        {
          link: "11",
          icon: Twitter,
        },
        {
          link: "12",
          icon: LinkedIn,
        },
        {
          link: "13",
          icon: Mail,
        },
      ],
      img: Prasanth,
    },
  ];

  return (
    <div style={{ background: "white" }}>
      <div
        style={{
          fontSize: "2rem",
          display: "flex",
          justifyContent: "center",
          padding: "6rem 0 0 0 ",
          color: "#0b111a",
        }}
      >
        <span
          style={{
            padding: "0 1rem",
            background: "#111341",
            color: "white",
            margin: "0 .5rem",
          }}
        >
          Meet
        </span>{" "}
        the Team
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
                  <Tilt>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        columnGap: ".5rem",
                        margin: "1rem 0",
                      }}
                    >
                      {person.links.map((link) => {
                        return (
                          <a href={link.link} key={link.link} target={"_blank"}>
                            <img
                              src={link.icon}
                              height={35}
                              width={35}
                              style={{
                                boxShadow: "1px 1px 12px solid gray",
                              }}
                              alt="im1"
                            ></img>
                          </a>
                        );
                      })}
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
                          marginLeft: "2rem",
                          marginRight: "2rem",
                          marginBottom: person.margin,
                        }}
                        src={person.img}
                        alt=""
                        width={person.size}
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
                  </Tilt>
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
            {team.map((person, index) => {
              return (
                <div key={index} className="col-lg-3 col-md-3 col-12">
                  <Tilt>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        columnGap: ".5rem",
                        padding: "1rem 0",
                      }}
                    >
                      <img
                        src={Twitter}
                        height={35}
                        width={35}
                        style={{
                          boxShadow: "1px 1px 12px solid gray",
                        }}
                        alt="im1"
                      ></img>
                      <img
                        src={LinkedIn}
                        height={35}
                        width={35}
                        style={{
                          boxShadow: "1px 1px 12px solid gray",
                        }}
                        alt="im1"
                      ></img>
                      <img
                        src={Mail}
                        height={35}
                        width={35}
                        style={{
                          boxShadow: "1px 1px 12px solid gray",
                        }}
                        alt="im1"
                      ></img>
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
                          marginBottom: person.margin,
                        }}
                        src={person.img}
                        alt=""
                        width={190}
                      />
                      <div className="">
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
                  </Tilt>
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
