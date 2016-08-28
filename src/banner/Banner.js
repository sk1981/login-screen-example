import React from "react";
import "../../style/banner/banner.scss";

/**
 * Element to display app banner.
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const Banner = (props) => {
  return (
    <div className="banner">
      <h2 className="banner__title">
        My Firm
      </h2>
      <div className="banner__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </div>
    </div>
  )
};

export default Banner;
