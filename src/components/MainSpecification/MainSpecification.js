import React from "react";
import "./MainSpecification.css";

function MainSpecification({ text, position }) {
  return (
    <h2 className={`main__specification main__specification_${position}`}>
      {text}
    </h2>
  )
}

export default MainSpecification;