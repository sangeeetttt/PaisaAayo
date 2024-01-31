import React from "react";
const bottom = {
  position: "fixed",

  right: 0,
  left: 0,
  bottom: 0,
};
const FooterV = () => {
  return (
    <nav
      className='navbar navbar-light bg-primary text-white text-center d-flex justify-content-center p-2'
      style={bottom}>
      <h6 className='m-2'>
        Designed by{" "}
        <a style={{ color: "white" }} >
          Sangeet Shrestha
        </a>
      </h6>
    </nav>
  );
};

export default FooterV;
