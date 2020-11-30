import React from "react";
import { Link } from "react-router-dom";

const HowWorks = () => {
  return (
    <div className="dg__work__area how__work">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="thumb">
              <img
                src={process.env.PUBLIC_URL + "/images/about/4.png"}
                alt="computer images"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="content">
              <h2>How It Works?</h2>
              <h6>
                cryptocurrency is a digital asset designed to work as a medium
                of exchange
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Link
                className="slide__btn dg__btn"
                to={process.env.PUBLIC_URL + "/contact"}
              >
                JOIN WITH US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
