import "./SlideButton.css";
import React from "react";

const SlideButton = (props) => {
  function goTo() {
    window.location.href = "https://whitepaper.renderverse.io";
  }

  return (
    <button onClick={() => goTo(props.to)} className="btn_custom">
      <i className={props.icon} />
      <span>{props.label}</span>
    </button>
  );
};

export default SlideButton;
