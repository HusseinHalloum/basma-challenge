import React from "react";

import './Button.css';

const ButtonFilled = (props) => {
  return <button className="button-filled">{props.value}</button>;
};

export default ButtonFilled;
