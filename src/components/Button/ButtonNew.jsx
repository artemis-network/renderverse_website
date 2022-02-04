import React from "react";
import "./ButtonNew.css";
import { useHistory } from "react-router-dom";

export default function ButtonNew(props) {
  const history = useHistory();

  function goTo(route) {
    history.push(route);
  }

  return (
    <div className="button-container-1">
      <span className="mas">{props.label}</span>
      <button
        onClick={() => goTo(props.to)}
        id="work"
        type="button"
        name="Hover"
      >
        <span>{props.label}</span>
      </button>
    </div>
  );
}
