/* eslint-disable react/jsx-no-target-blank */
import "./SlideButton.css";
import React from "react";

const SlideButton = (props) => {
  function goto() {
    window.open("https://whitepaper.renderverse.io", "_blank");
  }

  return (
    <button onClick={goto} className="btn_custom">
      <i className={props.icon} />
      <span>{props.label}</span>
    </button>
  );
};

export default SlideButton;
