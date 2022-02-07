import React from "react";
import "./MaskButton.css";
import { useHistory } from "react-router-dom";

export default function MaskButton(props) {
  const history = useHistory();

  function goTo(route) {
    history.push(route);
  }

  return (
    <div class="button-container-1">
      <span class="mas">{props.label}</span>
      <button
        id="work"
        type="button"
        name="Hover"
        onClick={() => goTo(props.to)}
      >
        {" "}
        {props.label}{" "}
      </button>
    </div>
  );
}
