import React, { useEffect } from "react";
import AboutImage from "./ab.png";
import AboutBack1 from "./image_2021_12_28T06_51_43_859Z.png";
import AboutBack2 from "./ryan-parker-seQbRNo90Xw-unsplash.jpg";
import AboutBack3 from "./claudio-schwarz-V6xihVKUvqA-unsplash.jpg";
import "./style.css";
import Homes from "./ab-1.png";
import Train from "./ab-2.png";
import "./style.css";
import Bg from "./BlackBg.jpg";
import HomeNew from "./ab-3.png";
import Aos from "aos";
import "aos/dist/aos.css";
import "./about.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 300 });
  }, []);
  return (
    <div className="container-fluid   ">
      <div className="row">
        {/* animation */}
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundImage: `url(${Bg})`,
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <figure class="icon-cards " style={{ marginTop: "11rem" }}>
            <div className="icon-cards__contentani">
              {/* {` ${
                !toggleMode ? "icon-cards__content" : "icon-cards__contentani"
              }`} */}
              <div
                class="
            icon-cards__item
            d-flex
            align-items-center
            justify-content-center
          "
              >
                <img
                  src={Homes}
                  alt=""
                  style={{ border: "4px solid white" }}
                  // style={{ width: "83rem" }}
                  // onClick={() => setToggleMode(true)}
                  //   style={{ opacity: "0.9" }}
                />
                {/* <div
                  style={{
                    position: "relative",
                    top: "14rem",
                    left: "-24rem",
                    display: "flex",
                  }}
                ></div> */}
                {/* <span
                  style={{
                    position: "absolute",
                    // left: "-12rem",
                    top: "7rem",
                    fontSize: "2.5rem",
                    fontFamily: "DM Sans",
                  }}
                >
                  {" "}
                  Complete freight car solution 1
                </span>
                <span
                  class="h1 "
                  style={{
                    position: "absolute",
                    // left: "-12rem",
                    top: "20rem",
                    fontSize: "2rem",
                    fontFamily: "DM Sans",
                  }}
                >
                  INDIAN ENGINEERING EXCELLENCE
                  <br />
                </span>
                <span
                  className=""
                  style={{
                    position: "absolute",
                    // left: "-12rem",
                    top: "22rem",
                    fontSize: "2rem",
                    fontFamily: "DM Sans",
                  }}
                >
                  Global Perspective
                </span> */}
              </div>

              <div
                class="
            icon-cards__item
             d-flex
            align-items-center
            justify-content-center
          "
              >
                <img
                  src={Train}
                  alt=""
                  style={{
                    width: "83rem",
                    // marginTop: "-4rem",
                    height: "35rem",
                    border: "4px solid white",
                  }}

                  //   style={{ opacity: "0.9" }}
                />
                {/* <span
                  style={{
                    position: "absolute",
                    // left: "-12rem",
                    top: "7rem",
                    fontSize: "2.5rem",
                    fontFamily: "DM Sans",
                  }}
                >
                  {" "}
                  Complete freight car solution 2
                </span>
                <span
                  class="h1 "
                  style={{
                    position: "absolute",
                    // left: "-12rem",
                    top: "20rem",
                    fontSize: "2rem",
                    fontFamily: "DM Sans",
                  }}
                >
                  INDIAN ENGINEERING EXCELLENCE
                  <br />
                </span>
                <span
                  className=""
                  style={{
                    position: "absolute",
                    // left: "-12rem",
                    top: "22rem",
                    fontSize: "2rem",
                    fontFamily: "DM Sans",
                  }}
                >
                  Global Perspective
                </span> */}
              </div>
              <div
                class="
            icon-cards__item
            d-flex
            align-items-center
            justify-content-center
          "
              >
                <img
                  src={HomeNew}
                  alt=""
                  style={{
                    width: "89rem",
                    // marginLeft: "2rem",
                    // marginTop: "-4rem",
                    border: "4px solid white",
                    height: "35rem",
                  }}

                  //   style={{ opacity: "0.9" }}
                />
                {/* <span
                  style={{
                    position: "absolute",
                    // left: "-12rem",
                    top: "7rem",
                    fontSize: "2.5rem",
                    fontFamily: "DM Sans",
                  }}
                >
                  {" "}
                  Complete freight car solution{" "}
                </span>
                <span
                  class="h1 "
                  style={{
                    position: "absolute",
                    // left: "-12rem",
                    top: "20rem",
                    fontSize: "2rem",
                    fontFamily: "DM Sans",
                  }}
                >
                  INDIAN ENGINEERING EXCELLENCE 3
                  <br />
                </span>
                <span
                  className=""
                  style={{
                    position: "absolute",
                    // left: "-12rem",
                    top: "22rem",
                    fontSize: "2rem",
                    fontFamily: "DM Sans",
                  }}
                >
                  Global Perspective
                </span> */}
              </div>
            </div>
          </figure>
        </div>
      </div>
      <div
        className="row mt-2 "
        data-aos="slide-right"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          className="text-center mt-5 mb-3"
          style={{ fontSize: "40px", color: "black" }}
        >
          {" "}
          Meeting Global Standards of Engineering Excellence
        </h1>
        <div
          className="col-md-5  m-3 mt-3 bg-light"
          style={{
            border: "none",
            outline: "none",
            boxShadow: " 0px 0px 5px #757575",
            fontSize: "18px",
            padding: "2rem",
          }}
        >
          The plant located in India's fastest growing state Gujarat is known
          for excellent infrastructure industry friendly government
        </div>
        <div
          className="col-md-5 m-3  mt-3 bg-light"
          style={{
            border: "none",
            outline: "none",
            boxShadow: " 0px 0px 5px #757575",
            fontSize: "18px",
            padding: "3rem",
          }}
        >
          plant spread across more than 50 hectare of land <br />
          adjacent to miyagam Karjan railway station
        </div>
        <div
          className="col-md-5  m-3 mt-3 p-5 bg-light"
          style={{
            border: "none",
            outline: "none",
            boxShadow: " 0px 0px 5px #757575",
            fontSize: "18px",
          }}
        >
          flanked by Mumbai New Delhi main railway line to the west and Mumbai
          New Delhi Highway nh-8 to the
        </div>
        <div
          className="col-md-5  m-3 mt-3 bg-light "
          style={{
            border: "none",
            outline: "none",
            boxShadow: " 0px 0px 5px #757575",
            fontSize: "18px",
            padding: "4rem",
          }}
        >
          close proximity to two ports to facilitates Exports
        </div>
      </div>

      {/* second section */}
      <div
        className="row"
        data-aos="fade-up"
        // data-aos-anchor-placement="top-center"
      >
        <div
          className=" "
          style={{
            backgroundImage: `url(${AboutImage})`,
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          // data-aos="fade-up"
        >
          <div
            className=""
            style={{
              backgroundColor: "rgba(0,0,255,0.3)",
              position: "relative",
              zIndex: "9999",
              width: "100vw",
              height: "100%",
              top: "0rem",
              left: "-1.8rem",
            }}
          >
            <div className="">
              <h2
                className="text-center text-white"
                style={{
                  color: "black",
                  paddingTop: "8rem",
                  fontSize: "57px",
                }}
              >
                Group Overview
              </h2>{" "}
              <h3 className="text-center" style={{ color: "white" }}>
                Where we started our journey from{" "}
              </h3>
              <br />
              <h4
                className="text-center g"
                style={{ color: "white", fontFamily: "sans-serif" }}
              >
                D18 billion op Jindal Group is one of the largest Indian
                business kongulo
                <br />
                merits diversify it across Steel power and infrastructure
                sectors <br />
                Jindal rail Infrastructure Limited jrl. Has been promoted by
                Jindal saw <br />
                Limited a leading global manufacturer of submerged are welded
                pipes
                <br /> specialised carbon stainless steel pipes and tubes and
                digital iron <br />
                pipes with its products finding application in oil and gas water
                energy
                <br /> petrochemical engineering and transportation.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <footer
        className="mt-3 text-center p-3"
        style={{ background: "#EBEBEB", fontSize: "14px" }}
      >
        Ⓒ 2018 Jindal Rail Infrastructure Limited.All Rights Reserved.
      </footer>
    </div>
  );
};

export default About;
