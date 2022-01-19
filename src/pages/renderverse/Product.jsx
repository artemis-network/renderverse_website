import Image1 from "../../assets/images/cointelegraph_press.png";
import Image2 from "../../assets/images/investing_press.png";
import Image3 from "../../assets/images/yahoo_press.png";
import Image4 from "../../assets/images/coindesk_press.png";
import Image5 from "../../assets/images/dailycoin_press.png";
import Image6 from "../../assets/images/odaily_press.png";

import Image7 from "../../assets/images/coinrivet_press.png";
import Image8 from "../../assets/images/cryptobriefing_press.png";
import Image9 from "../../assets/images/blockonomi_press.png";
import Image10 from "../../assets/images/cryptoadventure_press.png";
import Image11 from "../../assets/images/8848_press.png";
import Wave from "react-wavify";

const Product = (props) => {
  return (
    <div
      style={{
        background: "#0b1118",
        position: "relative",
      }}
    >
      <div style={{ position: "relative", height: "12vh" }}>
        <Wave
          style={{ position: "absolute", top: "-5rem", zIndex: 100 }}
          paused={true}
          fill="#0b1118"
          options={{
            height: 25,
            amplitude: 25,
            speed: 0.35,
            points: 3,
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2rem",
          margin: "0 0 5rem 0",
        }}
      >
        {props.title}
      </div>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column", rowGap: "4rem" }}
      >
        <div className="row">
          <div className="feature_row_1">
            <img
              height={30}
              width={160}
              style={{ display: "flex", alignSelf: "center" }}
              src={Image1}
              alt="image1"
            />
            <img
              height={30}
              width={160}
              style={{ display: "flex", alignSelf: "center" }}
              src={Image2}
              alt="image1"
            />
            <img height={35} width={100} src={Image3} alt="image1" />
            <img
              height={30}
              width={160}
              style={{ display: "flex", alignSelf: "center" }}
              src={Image4}
              alt="image1"
            />
            <img
              height={30}
              width={160}
              style={{ display: "flex", alignSelf: "center" }}
              src={Image5}
              alt="image1"
            />
            <img height={30} width={120} src={Image6} alt="image1" />
          </div>
          <div className="feature_row_1">
            <img
              height={30}
              width={160}
              style={{ display: "flex", alignSelf: "center" }}
              src={Image7}
              alt="image1"
            />
            <img height={40} width={150} src={Image8} alt="image1" />
            <img height={30} width={150} src={Image9} alt="image1" />
            <img height={25} width={170} src={Image10} alt="image1" />
            <img height={40} width={150} src={Image11} alt="image1" />
          </div>
        </div>
      </div>
      {props.isFeatured ? (
        <Wave
          paused={false}
          fill="#FFFFFF"
          options={{
            height: 25,
            amplitude: 25,
            speed: 0.35,
            points: 3,
          }}
        />
      ) : null}
    </div>
  );
};

export default Product;
