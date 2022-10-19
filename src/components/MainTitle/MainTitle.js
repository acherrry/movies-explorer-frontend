import React from "react";
import "./MainTitle.css";

function MainTitle({ text, position }) {
  return (
    <h1 className={`main__title main__title_${position}`}>
      {text}
    </h1>
  )
}

export default MainTitle;