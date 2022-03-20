import React from "react";

const Btn = ({ btnName, exCSS, actFunc }) => {
  return (
    <button className={`btn ${exCSS}`} onClick={actFunc}>
      {btnName}
    </button>
  );
};

export default Btn;
