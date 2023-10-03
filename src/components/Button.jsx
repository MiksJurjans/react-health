import React, { useState } from "react";

const MyButton = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    borderRadius: "50px",
    backgroundColor: isHovered ? "grey" : "white",
    color: isHovered ? "white" : "black",
    padding: "10px 20px",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
    border: "1px solid #D9D9D9",
    fontFamily: "Sectra",
    fontSize: "12pt",
    height: "50px",
    fontWeight: 900
  };

  return (
    <button
      style={buttonStyle}
      onClick={props.onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {props.buttonText}
    </button>
  );
};

export default MyButton;
