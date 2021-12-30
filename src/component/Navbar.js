import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import jindalRail from "../ICONS/JindalRail_1.png";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import homeicon from "../ICONS/home_1x.png";
import aboutUs from "../ICONS/About_us_small.png";
import contactUs from "../ICONS/Contact_us_small.png";

const styles = makeStyles((theme) => ({
  navContainer: {
    backgroundColor: "#2680D3",
  },
  imgContainer: {
    marginLeft: "60px",
    borderRadius: "5px",
  },
}));

const Navbar = (props) => {
  const classes = styles();

  let currPath = props.history.location.pathname;

  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-dark text-white"
        // style={{ position: "relative", zIndex: "9999" }}
      >
        <div class="container-fluid">
          {/* <a class="navbar-brand font-bold" href="#">
            JINDAL
          </a> */}
          <img
            src={jindalRail}
            height="55px"
            width="150px"
            alt="jindal image"
            className={classes.imgContainer}
          />

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ float: "right", display: "flex", flex: "inherit" }}
          >
            <ul
              class="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ float: "right" }}
            >
              <Link
                to="/"
                class="nav-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "10px",
                }}
              >
                <img
                  src={homeicon}
                  height="20px"
                  width="20px"
                  alt="jindal image"
                  // className= {classes.imgContainer}
                />
                <a class="nav-link active" aria-current="page">
                  Home
                </a>
              </Link>
              <Link
                to="/about"
                class="nav-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "10px",
                }}
              >
                <img
                  src={aboutUs}
                  height="20px"
                  width="30px"
                  alt="jindal image"
                  // className= {classes.imgContainer}
                />
                <a class="nav-link active">About Us</a>
              </Link>
              <Link
                to="/contact"
                class="nav-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "10px",
                }}
              >
                <img
                  src={contactUs}
                  height="20px"
                  width="20px"
                  alt="jindal image"
                  // className= {classes.imgContainer}
                />
                <a class="nav-link active">Contact Us</a>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
