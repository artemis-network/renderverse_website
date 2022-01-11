import Action1 from "../../assets/images/d30570a4482c615969784003790d46fa.jpeg";

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
      <div
        style={{
          fontSize: "2.5rem",
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: "5rem",
          justifyContent: "center",
          padding: "2rem 0",
        }}
      >
        <img
          style={{ borderRadius: "3vh", marginTop: "2rem" }}
          height={320}
          width={180}
          alt="image"
          src={Action1}
        ></img>
        <img
          style={{ borderRadius: "3vh", marginBottom: "1rem" }}
          height={320}
          width={180}
          alt="image"
          src={Action1}
        ></img>
        <img
          style={{ borderRadius: "3vh" }}
          height={500}
          width={260}
          alt="image"
          src={Action1}
        ></img>
        <img
          style={{ borderRadius: "3vh", marginTop: "1rem" }}
          height={320}
          width={180}
          alt="image"
          src={Action1}
        ></img>
        <img
          style={{ borderRadius: "3vh", marginBottom: "2rem" }}
          height={320}
          width={180}
          alt="image"
          src={Action1}
        ></img>
      </div>
    </div>
  );
};

export default Action;
