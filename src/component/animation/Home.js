import React, { useState } from "react";
import "./style.css";

import Train from "./new1.png";
import HomeNew from "./new2.png";
import Homes from "./new3.png";

import AboutBack1 from "./image_2021_12_28T06_51_43_859Z.png";
import AboutBack2 from "./ryan-parker-seQbRNo90Xw-unsplash.jpg";
import AboutBack3 from "./claudio-schwarz-V6xihVKUvqA-unsplash.jpg";

import Homes1 from "./Home-1.png";
// import Train from "./Home-2.png";
// import HomeNew from "./Homenew.jpg";
import Bg from "./BlackBg.jpg";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleMode, setToggleMode] = useState(false);
  return (
    <>
      {/* {!toggle ? (
        <i
          style={{
            position: "absolute",
            top: "22rem",
            left: "80rem",
            cursor: "pointer",
            fontSize: "3.4rem",
            color: "black",
          }}
          onClick={() => setToggle(!toggle)}
          class="fas fa-arrow-circle-right"
        ></i>
      ) : (
        <i
          style={{
            position: "absolute",
            top: "22rem",
            cursor: "pointer",
            fontSize: "3.4rem",
          }}
          onClick={() => setToggle(!toggle)}
          class="fas fa-arrow-circle-left"
        ></i>
      )}

      {!toggle ? (
        <div
          className="fullImage img-responsive"
          style={{
            backgroundImage: "url(" + Homes1 + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            overflowX: "hidden",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            className="text-white "
            style={{
              display: "flex",
              fontFamily: "DM Sans",
            }}
          >
            {" "}
            Complete Freight car solution
          </h1>

          <span
            class="h1 text-white"
            style={{
              position: "absolute",
              // left: "-12rem",
              top: "34rem",
              fontSize: "2rem",
              fontFamily: "DM Sans",
            }}
          >
            INDIAN ENGINEERING EXCELLENCE
            <br />
          </span>
          <span
            className="text-white"
            style={{
              position: "absolute",
              // left: "-12rem",
              top: "36rem",
              fontSize: "2rem",
              fontFamily: "DM Sans ",
            }}
          >
            Global Perspective
          </span>
        </div>
      ) : ( */}
      <div
        id="carouselExampleIndicators"
        class="carousel slide "
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
            style={{ opacity: "1" }}
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="1"
            style={{ opacity: "1" }}
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="2"
            style={{ opacity: "1" }}
          ></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src={Train}
              style={{ height: "83vh" }}
              alt="First slide"
              // className="img-responsive"
            />
            <div className="">
              <span
                className=""
                style={{
                  position: "absolute",
                  left: "25rem",
                  top: "15rem",
                  fontSize: "2.5rem",
                  fontFamily: "DM Sans",
                  color: "white",

                  // next
                  // position: "relative",
                  // textAlign: "center",
                  // bottom: "20rem",
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  // fontSize: "2.5rem",
                  // fontFamily: "DM Sans",
                  // color: "white",
                }}
              >
                {" "}
                Complete freight car solution
              </span>
              <span
                class=" "
                style={{
                  position: "absolute",
                  left: "25rem",

                  top: "23rem",
                  fontSize: "2rem",
                  fontFamily: "DM Sans",
                  color: "white",

                  // next
                  // position: "relative",
                  // textAlign: "center",
                  // bottom: "11rem",
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  // fontSize: "2.5rem",
                  // fontFamily: "DM Sans",
                  // color: "white",
                }}
              >
                INDIAN ENGINEERING EXCELLENCE
                <br />
              </span>
              <span
                className=""
                style={{
                  position: "absolute",
                  left: "32rem",
                  top: "26rem",
                  fontSize: "2rem",
                  fontFamily: "DM Sans",
                  color: "white",
                }}
              >
                Global Perspective
              </span>
            </div>
          </div>
          <div class="carousel-item " style={{ marginTop: "1px" }}>
            <img
              class="d-block w-100"
              src={HomeNew}
              style={{ height: "83vh" }}
              alt="Second slide"
            />
            <div>
              <span
                className=""
                style={{
                  position: "absolute",
                  left: "25rem",
                  top: "15rem",

                  fontSize: "2.5rem",
                  fontFamily: "DM Sans",
                  color: "white",

                  // next
                  // position: "relative",
                  // textAlign: "center",
                  // bottom: "20rem",
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  // fontSize: "2.5rem",
                  // fontFamily: "DM Sans",
                  // color: "white",
                }}
              >
                {" "}
                Complete freight car solution
              </span>
              <span
                class=" "
                style={{
                  position: "absolute",
                  left: "25rem",

                  top: "23rem",
                  fontSize: "2rem",
                  fontFamily: "DM Sans",
                  color: "white",

                  // next
                  // position: "relative",
                  // textAlign: "center",
                  // bottom: "11rem",
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  // fontSize: "2.5rem",
                  // fontFamily: "DM Sans",
                  // color: "white",
                }}
              >
                INDIAN ENGINEERING EXCELLENCE
                <br />
              </span>
              <span
                className=""
                style={{
                  position: "absolute",
                  left: "32rem",
                  top: "26rem",
                  fontSize: "2rem",
                  fontFamily: "DM Sans",
                  color: "white",
                }}
              >
                Global Perspective
              </span>
            </div>
          </div>
          <div class="carousel-item" style={{ marginTop: "1px" }}>
            <img
              class="d-block w-100"
              style={{ height: "83vh" }}
              src={Homes}
              alt="Third slide"
            />
            <div className="">
              <span
                className=""
                style={{
                  position: "absolute",
                  left: "25rem",
                  top: "15rem",

                  fontSize: "2.5rem",
                  fontFamily: "DM Sans",
                  color: "white",

                  // next
                  // position: "relative",
                  // textAlign: "center",
                  // bottom: "20rem",
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  // fontSize: "2.5rem",
                  // fontFamily: "DM Sans",
                  // color: "white",
                }}
              >
                {" "}
                Complete freight car solution
              </span>
              <span
                class=" "
                style={{
                  position: "absolute",
                  left: "25rem",

                  top: "23rem",
                  fontSize: "2rem",
                  fontFamily: "DM Sans",
                  color: "white",

                  // next
                  // position: "relative",
                  // textAlign: "center",
                  // bottom: "11rem",
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  // fontSize: "2.5rem",
                  // fontFamily: "DM Sans",
                  // color: "white",
                }}
              >
                INDIAN ENGINEERING EXCELLENCE
                <br />
              </span>
              <span
                className=""
                style={{
                  position: "absolute",
                  left: "32rem",
                  top: "26rem",
                  fontSize: "2rem",
                  fontFamily: "DM Sans",
                  color: "white",
                }}
              >
                Global Perspective
              </span>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span> */}
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          {/* <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span> */}
        </a>
      </div>
      {/* bg */}
      <footer className=" text-center">
        2018 Jindal Rail Infrastructure Limited.All Rights Reserved.
      </footer>
    </>
  );
};

export default Home;
