import "./Highlight.css";

import React, { useState, useRef, useEffect } from "react";

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

const HightLight = () => {
  const [lines, setLines] = useState([]);
  const splitRef = useRef(null);
  useEffect(() => {
    if (splitRef) {
      let split_res = Splitting({ by: "chars" });
      setLines(split_res[1].chars);
      console.log(lines);
    }
  }, [splitRef]);

  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, #557571, #2b5f68, #004861, #002f56, #111341)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          rowGap: "2rem",
          fontSize: "3.6rem",
          textAlign: "center",
        }}
        className="high"
      >
        <span class="intro">Become a RENDEREAPE with </span>
        <span class="main" aria-label="RENDERVERSE" data-splitting>
          RENDERVERSE
        </span>
      </div>
    </div>
  );
};

export default HightLight;

// const HightLight = () => {
//   const [lines, setLines] = useState([]);
//   const splitRef = useRef(null);
//   useEffect(() => {
//     if (splitRef) {
//       let split_res = Splitting({ by: "chars" });
//       setLines(split_res[1].chars);
//       console.log(lines);
//     }
//   }, [splitRef]);

//   return (
//     <div
//       style={{
//         background:
//           "linear-gradient(to bottom, #557571, #2b5f68, #004861, #002f56, #111341)",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           flexDirection: "column",
//           rowGap: "2rem",
//           fontSize: "3.6rem",
//           textAlign: "center",
//         }}
//       >
//         <div>
//           Become a
//           <span
//             data-splitting="true"
//             className="headline headline--twirl"
//             style={{ fontSize: "5rem", margin: "2rem" }}
//           >
//             RENDERAPE
//           </span>
//           with
//         </div>

//         <div>
//           <span
//             data-splitting="true"
//             className="headline headline--twirl"
//             style={{ fontSize: "7rem", margin: "2rem", letterSpacing: "2rem" }}
//           >
//             RENDERVERSE
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HightLight;
