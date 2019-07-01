import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function LinkBtn(props) {
  return (
    <button className="linkBtn" onClick={props.onClick}>
      <i class="fas fa-link"></i>
    </button>
  );
}

export default LinkBtn;