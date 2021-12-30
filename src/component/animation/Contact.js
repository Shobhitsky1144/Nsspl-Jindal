import React, { useEffect } from "react";
import ContactImage from "./Home-1.png";
import EmailIcon from "../../Contact us screen icon and Bg image/Email 1x.png";
import NameIcon from "../../Contact us screen icon and Bg image/Name 1x.png";
import SubjectIcon from "../../Contact us screen icon and Bg image/Subject 1x.png";
import EmailBlue from "../../Contact us screen icon and Bg image/Email-blue.png";
import Web from "../../Contact us screen icon and Bg image/Website 1x.png";
import "./Contact.css";
// import EmailIcon from "../../Contact us screen icon and Bg image/Email 1x.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 300 });
  }, []);
  return (
    <>
      <div className="container mt-5">
        <div className="row" data-aos="slide-right">
          <div className="col-md-4">
            <h3 className="text-center">Corporate Office</h3>
            <div
              className="p-1"
              style={{
                boxShadow: " 0px 1px 5px #757575",
              }}
            >
              <p className="text-center pt-2">
                Jindal ITF Centre 28 Shivaji Marg, <br />
                New Delhi 110015 India
              </p>

              <p className="text-center">
                Contact no: +91-11-66-46-3983/84 <br />
                Fax: +91-11-66-46-3983/84
              </p>

              <p className="text-center">
                Corporate Identity Number <br />
                45400UP2007PLC0070235
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <h3 className="text-center">Registered Office</h3>
            <div
              className="p-4"
              style={{
                boxShadow: " 0px 1px 5px #757575",
              }}
            >
              <p className="text-center pt-2">
                A1,UPSIDC Industrial Area,Nandgaon Road <br />
                Kosi Kalan ,Mathura, Uttar Pradesh-81403,India Pradesh 281403
                India
              </p>

              <p className="text-center">
                Contact no: +91-11-66-46-3983/84 <br />
                Fax: +91-11-66-46-3983/84
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <h3 className="text-center">Works</h3>
            <div
              className=""
              style={{
                boxShadow: " 0px 1px 5px #757575",
                padding: "2.3rem",
              }}
            >
              <p className="text-center pt-2">
                NH-8 ,<br />
                POst & Taluka :Karjan,
              </p>

              <p className="text-center">
                Dist:Vadodra - 391240 <br />
                Gujrat ,India
              </p>
            </div>
          </div>

          <div className="col-md-4 mt-4   " style={{ marginLeft: "13rem" }}>
            <h3 className="text-center">Sales</h3>
            <div
              className="p-1"
              style={{
                boxShadow: " 0px 1px 5px #757575",
              }}
            >
              <p className="text-center pt-2">
                NH-8 ,<br />
                POst & Taluka :Karjan,
              </p>

              <p className="text-center">
                Dist:Vadodra - 391240 <br />
                Gujrat ,India
              </p>
            </div>
          </div>

          <div className="col-md-4 mt-4 ">
            <h3 className="text-center">Trouble shooting</h3>
            <div
              className="p-1"
              style={{
                boxShadow: " 0px 1px 5px #757575",
              }}
            >
              <p className="text-center pt-2">
                NH-8 ,<br />
                POst & Taluka :Karjan,
              </p>

              <p className="text-center">
                Dist:Vadodra - 391240 <br />
                Gujrat ,India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* second  */}
      <div className="container-fluid">
        <div className="row" data-aos="zoom-in">
          <div
            className="col-md-12 mt-5"
            style={{
              backgroundImage: "url(" + ContactImage + ")",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100vw",
              height: "80vh",
            }}
          >
            <div
              className=" "
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "12rem",
                background: "white",
                margin: "9rem 2rem",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13766.162001735314!2d79.3186651!3d30.3924033!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f651e48498fc8cd!2sInstitute%20of%20Technology%2C%20Gopeshwar!5e0!3m2!1sen!2sin!4v1618860853768!5m2!1sen!2sin"
                width="1220"
                height="450"
                loading="lazy"
                style={{ padding: "1rem 0rem" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* form */}
      <div
        className="contact"
        style={{ marginTop: "12rem" }}
        data-aos="flip-up"
      >
        <h3
          className="text-center mb-3 "
          style={{ fontWeight: "bold", color: "black" }}
        >
          Contact Us
        </h3>
        <div
          className=" d-flex"
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            name
            id=""
            placeholder="Your Email Address"
            className="p-3 "
            style={{
              width: "60rem",
              boxShadow: " 0px 0px 3px #757575",
              border: "none",
              outline: "none",
            }}
          />
          <img
            src={EmailIcon}
            alt=""
            height="24"
            style={{ position: "relative", top: "-2.5rem", left: "27rem" }}
          />
          <br />
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Full Name"
            className="p-3"
            style={{
              width: "60rem",
              boxShadow: " 0px 1px 5px #757575",
              border: "none",
              outline: "none",
            }}
          />
          <img
            src={NameIcon}
            alt=""
            height="24"
            style={{ position: "relative", top: "-2.5rem", left: "27rem" }}
          />
          <br />
          <input
            type="text"
            name=""
            id=""
            placeholder="Subject"
            className="p-3"
            style={{
              width: "60rem",
              boxShadow: " 0px 1px 5px #757575",
              border: "none",
              outline: "none",
            }}
          />
          <img
            src={SubjectIcon}
            alt=""
            height="24"
            style={{ position: "relative", top: "-2.5rem", left: "27rem" }}
          />
          <br />
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Message"
            style={{
              width: "60rem",
              boxShadow: " 0px 1px 5px #757575",
              border: "none",
              outline: "none",
              height: "9rem",
              paddingLeft: "1rem",
              paddingBottom: "5rem",
            }}
          />
          <br />
          <button
            className="btn btn-primary "
            style={{ borderRadius: "25px", padding: "10px 40px" }}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="row mt-4">
        <div
          className="col-md-4 "
          style={{ marginLeft: "19rem", display: "flex", flexDirection: "row" }}
        >
          <img src={EmailBlue} alt="" height="25" className="" />
          <h4
            style={{
              paddingRight: "0.3rem",
              paddingLeft: "0.3rem",
              fontSize: "20px",
            }}
          >
            Email{" "}
          </h4>{" "}
          :
          <span className="" style={{ paddingLeft: "0.3rem" }}>
            info.jindalrail@jindalrail.com
          </span>
        </div>
        <div
          className="col-md-4"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <img src={Web} alt="" height="25" />
          <h4
            style={{
              paddingRight: "0.3rem",
              paddingLeft: "0.3rem",
              fontSize: "20px",
            }}
          >
            Website
          </h4>
          :<span style={{ paddingLeft: "0.3rem" }}>www.jindalrail.com</span>
        </div>
      </div>

      <footer
        className="mt-3 text-center p-3"
        style={{ background: "#EBEBEB", fontSize: "14px" }}
      >
        Ⓒ 2018 Jindal Rail Infrastructure Limited.All Rights Reserved.
      </footer>
    </>
  );
};

export default Contact;
