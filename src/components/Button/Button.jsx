import "./Button.css";
import React from "react";
import { useHistory } from "react-router-dom";

const BubblyButton = (props) => {
  const history = useHistory();

  function goTo(route) {
    history.push(route);
  }

  return (
    <button onClick={() => goTo(props.to)} className="btn_custom">
      <i className={props.icon} />
      <span>{props.label}</span>
    </button>
  );
};

export default BubblyButton;
