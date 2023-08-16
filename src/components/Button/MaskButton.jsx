import { useNavigate } from "react-router-dom";
import "./MaskButton.css";

function MaskButton(props) {
  const history = useNavigate();
  function goTo(route) {
    history(route);
  }

  return (
    <div className="button-container-1">
      <span className="mas">{props.label}</span>
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

export default MaskButton;
