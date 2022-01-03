import React, { useState } from "react";
import "./style.css";

import Train from "./new1.png";
import HomeNew from "./new2.jpg";
import Homes from "./balazs-busznyak-El5zuQAtfeo-unsp.jpg";
import Bg from "./BlackBg.jpg";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleMode, setToggleMode] = useState(false);
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide "
        data-ride="carousel"
        data-interval="3000"
        style={{
          backgroundImage: `url(${Bg})`,
          height: "83vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: "9999",
        }}
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
              style={{ height: "83vh", objectFit: "cover" }}
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
        2022 Jindal Rail Infrastructure Limited.All Rights Reserved.
      </footer>
    </>
  );
};

export default Home;
