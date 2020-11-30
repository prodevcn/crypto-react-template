import React from "react";

const SoftwareDownloadTwo = () => {
  return (
    <section
      className="dg__software__area dg__software--2 section-padding--xl"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bg/5.jpg"})`,
        backgroundRepeat: `no-repeat`
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="dg__software__inner">
              <h2>Download Software, Compatible For All Devices</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation Ut enim ad minim
                veniam, quis nostrud exercitation.
              </p>
              <ul className="avilable__device">
                <li>
                  <a
                    href={process.env.PUBLIC_URL + "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/4.png"}
                      alt="images"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={process.env.PUBLIC_URL + "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/5.png"}
                      alt="images"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={process.env.PUBLIC_URL + "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/6.png"}
                      alt="images"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={process.env.PUBLIC_URL + "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/7.png"}
                      alt="images"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareDownloadTwo;
