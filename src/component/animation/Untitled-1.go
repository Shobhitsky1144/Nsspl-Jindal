// import React, { useState } from "react";
// import "./style.css";

// import Train from "./new1.png";
// import HomeNew from "./new2.png";
// import Homes from "./new3.png";

// import AboutBack1 from "./image_2021_12_28T06_51_43_859Z.png";
// import AboutBack2 from "./ryan-parker-seQbRNo90Xw-unsplash.jpg";
// import AboutBack3 from "./claudio-schwarz-V6xihVKUvqA-unsplash.jpg";
// import "./Home.css";
// import Homes1 from "./Home-1.png";
// // import Train from "./Home-2.png";
// // import HomeNew from "./Homenew.jpg";
// import Bg from "./BlackBg.jpg";

// const Home = () => {
//   const [toggle, setToggle] = useState(false);
//   const [toggleMode, setToggleMode] = useState(false);
//   return (
//     <>
//       <div id="demo" class="carousel slide">
//         {/* data-ride="carousel" */}
//         <ul class="carousel-indicators">
//           <li
//             data-target="#demo"
//             data-slide-to="0"
//             class="active"
//             style={{ opacity: "1" }}
//           ></li>
//           <li
//             data-target="#demo"
//             data-slide-to="1"
//             style={{ opacity: "1" }}
//           ></li>
//           <li
//             data-target="#demo"
//             data-slide-to="2"
//             style={{ opacity: "1" }}
//           ></li>
//         </ul>
//         <div class="carousel-inner">
//           <div
//             class="carousel-item active"
//             style={{ display: "flex", justifyContent: "center" }}
//           >
//             <img
//               class="d-block w-100"
//               src={Train}
//               style={{ height: "83vh" }}
//               alt="First slide"
//               // className="img-responsive"
//             />
//             <span
//               className=""
//               style={{
//                 position: "absolute",
//                 // left: "-12rem",
//                 top: "13rem",
//                 fontSize: "6vmin",
//                 fontFamily: "DM Sans",
//                 textAlign: "center",
//                 color: "white",
//               }}
//             >
//               {" "}
//               Complete freight car solution 1
//             </span>
//             <span
//               class="h1 "
//               style={{
//                 position: "absolute",
//                 // left: "-12rem",
//                 top: "20rem",
//                 fontSize: "5vmin",
//                 fontFamily: "DM Sans",
//                 color: "white",
//               }}
//             >
//               INDIAN ENGINEERING EXCELLENCE
//               <br />
//             </span>
//             <span
//               className=""
//               style={{
//                 position: "absolute",
//                 // left: "-12rem",
//                 top: "22rem",
//                 fontSize: "5vmin",
//                 fontFamily: "DM Sans",
//                 color: "white",
//               }}
//             >
//               Global Perspective
//             </span>
//           </div>
//           <div
//             class="carousel-item "
//             style={{
//               marginTop: "1px",
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             <img
//               class="d-block w-100"
//               src={HomeNew}
//               style={{ height: "83vh" }}
//               alt="Second slide"
//             />
//             <span
//               className=""
//               style={{
//                 position: "absolute",
//                 // left: "-12rem",
//                 top: "13rem",
//                 fontSize: "6vmin",
//                 fontFamily: "DM Sans",
//                 textAlign: "center",
//                 color: "white",
//               }}
//             >
//               {" "}
//               Complete freight car solution 1
//             </span>
//             <span
//               class="h1 "
//               style={{
//                 position: "absolute",
//                 // left: "-12rem",
//                 top: "20rem",
//                 fontSize: "5vmin",
//                 fontFamily: "DM Sans",
//                 color: "white",
//               }}
//             >
//               INDIAN ENGINEERING EXCELLENCE
//               <br />
//             </span>
//             <span
//               className=""
//               style={{
//                 position: "absolute",
//                 // left: "-12rem",
//                 top: "22rem",
//                 fontSize: "5vmin",
//                 fontFamily: "DM Sans",
//                 color: "white",
//               }}
//             >
//               Global Perspective
//             </span>
//           </div>
//           <div
//             class="carousel-item"
//             style={{
//               marginTop: "1px",
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             <img
//               class="d-block w-100"
//               style={{ height: "83vh" }}
//               src={Homes}
//               alt="Third slide"
//             />
//             <span
//               className=""
//               style={{
//                 position: "absolute",
//                 // left: "-12rem",
//                 top: "13rem",
//                 fontSize: "6vmin",
//                 fontFamily: "DM Sans",
//                 textAlign: "center",
//                 color: "white",
//               }}
//             >
//               {" "}
//               Complete freight car solution 1
//             </span>
//             <span
//               class="h1 "
//               style={{
//                 position: "absolute",
//                 // left: "-12rem",
//                 top: "20rem",
//                 fontSize: "5vmin",
//                 fontFamily: "DM Sans",
//                 color: "white",
//               }}
//             >
//               INDIAN ENGINEERING EXCELLENCE
//               <br />
//             </span>
//             <span
//               className=""
//               style={{
//                 position: "absolute",
//                 // left: "-12rem",
//                 top: "22rem",
//                 fontSize: "5vmin",
//                 fontFamily: "DM Sans",
//                 color: "white",
//               }}
//             >
//               Global Perspective
//             </span>
//           </div>
//         </div>
//         <a
//           class="carousel-control-prev"
//           href="#carouselExampleIndicators"
//           role="button"
//           data-slide="prev"
//         ></a>
//         <a
//           class="carousel-control-next"
//           href="#carouselExampleIndicators"
//           role="button"
//           data-slide="next"
//         ></a>
//       </div>

//       <footer className=" text-center">
//         2018 Jindal Rail Infrastructure Limited.All Rights Reserved.
//       </footer>
//     </>
//   );
// };

// export default Home;
