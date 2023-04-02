import React from "react";
const Button = ({ title, onClicked }) => {
  return (
    <div className="btn" onClick={() => onClicked(title)}>
      {title.toUpperCase()}
    </div>
  );
};

export default Button;
