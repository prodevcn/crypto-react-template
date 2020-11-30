import React from "react";

const LiveChartTwo = () => {
  return (
    <div className="dg__live__chart bg__color--4 pb--140 pt--130">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="live__cart__wrapper">
              <div className="live__cart__header">
                <h2>Real Time Progress</h2>
              </div>
              <div className="chart__img mt--60">
                <img
                  src={process.env.PUBLIC_URL + "/images/about/cart3.png"}
                  alt="chart images"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChartTwo;
