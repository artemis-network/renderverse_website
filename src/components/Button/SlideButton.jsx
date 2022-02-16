/* eslint-disable react/jsx-no-target-blank */
import "./SlideButton.css";
import React from "react";
import PDF from "../../assets/images/Pitch Deck.pdf";

const SlideButton = (props) => {
  function goto() {
    window.open(PDF, "_blank");
  }

  return (
    <button onClick={goto} className="btn_custom">
      <i className={props.icon} />
      <span>{props.label}</span>
    </button>
  );
};

export default SlideButton;
