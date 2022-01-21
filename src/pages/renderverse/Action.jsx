import Action1 from "../../assets/images/d30570a4482c615969784003790d46fa.jpeg";
import Wave from "react-wavify";
import Splitting from "https://cdn.skypack.dev/splitting";
import { useRef } from "react";

const Action = () => {
  const target = useRef();
  const results = Splitting({ target: target.current, by: "chars" });

  return (
    <div>
      <div
        style={{
          background: "#fdfaf6",
          position: "relative",
        }}
      >
        <Wave
          fill="#fdfaf6"
          paused={false}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.15,
            points: 3,
          }}
          style={{
            position: "absolute",
            top: "-4rem",
            width: "100%",
            height: "10vh",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            rowGap: "1rem",
            padding: "2rem 0",
          }}
        >
          <div className="container">
            <div
              data-splitting
              ref={target}
              style={{
                fontSize: "2rem",
                display: "flex",
                justifyContent: "center",
                alignSelf: "center",
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
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "1rem",
              }}
            ></div>

            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                columnGap: "1rem",
              }}
            >
              <div className="btn btn-primary btn-lg">
                <i className="uil uil-apple"></i>
                <span> App Store</span>
              </div>
              <div className="btn btn-primary btn-lg">
                <i className="uil uil-google-play"></i>
                <span> Play Store</span>
              </div>
            </div>

            <div className="desk_view">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                  <img
                    style={{ borderRadius: "3vh", margin: "4rem 0" }}
                    height={520}
                    width={320}
                    alt="image4"
                    src={Action1}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;

// import TinySlider from "tiny-slider-react";

// const imgs = [1, 2, 3, 4, 5, 6];

// const settings = {
//   controls: false,
//   mouseDrag: true,
//   loop: true,
//   rewind: true,
//   autoplay: true,
//   autoplayButtonOutput: false,
//   autoplayTimeout: 3000,
//   nav: false,
//   speed: 400,
//   gutter: 12,
//   responsive: {
//     992: {
//       items: 4,
//     },

//     767: {
//       items: 2,
//     },

//     320: {
//       items: 1,
//     },
//   },
// };

// <div className="mobile_view">
//             <div className="action_row_1">
//               <TinySlider settings={settings}>
//                 {imgs.map((i) => (
//                   <img
//                     key={i}
//                     style={{ borderRadius: "3vh", marginTop: "2rem" }}
//                     height={520}
//                     width={120}
//                     alt="image0"
//                     src={Action1}
//                   ></img>
//                 ))}
//               </TinySlider>
//             </div>
//           </div>
