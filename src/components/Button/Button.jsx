import "./Button.css";
import React from "react";

const BubblyButton = (props) => {
  function goTo() {
    window.location.href =
      "https://whitepaper.renderverse.io/welcome/introduction";
  }

  return (
    <button onClick={() => goTo(props.to)} className="btn_custom">
      <i className={props.icon} />
      <span>{props.label}</span>
    </button>
  );
};

export default BubblyButton;
