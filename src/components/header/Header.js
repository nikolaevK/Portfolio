import React from "react";
import Footer from "../footer/Footer";
import CTA from "./CTA";
import "./header.css";
import headerImg from "./header_img.png";

export default function Header() {
  return (
    <>
      <header className="container">
        <div className="header-container">
          <div className="header-sub-container-1">
            <h5 className="header-animation">Hi, I'm</h5>
            <h1 className="header-animation">Konstantin,</h1>
            <h5 className="header-animation">Front End Developer</h5>
            <CTA />
          </div>
          <div className="browser-container">
            <div className="browser-navbar">
              <div
                className="navbar-circle"
                style={{ background: "#f55a42" }}
              ></div>
              <div
                className="navbar-circle"
                style={{ background: "#42bcf5" }}
              ></div>
              <div
                className="navbar-circle"
                style={{ background: "#42f56f" }}
              ></div>
            </div>
            <div className="brackets-container">
              <p className="angle-brackets">&lt;/&gt;</p>
            </div>
            <div className="code-lines-container mt-4">
              <span>
                <p className="text text-1">
                  <span style={{ color: "blue" }}>async</span>{" "}
                  <span style={{ color: "blue" }}>function</span>
                  <span style={{ color: "#fe5f3c" }}>
                    {" "}
                    getToKnowMe&#40;&#41; &#123;
                  </span>
                </p>
              </span>
              <span>
                <p className="text  text-2">
                  <span style={{ color: "purple" }}>if</span>{" "}
                  <span style={{ color: "purple" }}>&#40;</span>
                  interested<span style={{ color: "purple" }}>&#41;</span>{" "}
                  &#123;
                </p>
              </span>
              <span>
                <p className="text  text-3">
                  <span style={{ color: "blue" }}>const</span> about = check
                  <span style={{ color: "#fe5f3c" }}> About&#40;&#41; </span>
                  page
                </p>
              </span>
              <span>
                <p className="text text-4">
                  <span style={{ color: "blue" }}>const</span> contact = or
                  <span style={{ color: "#fe5f3c" }}> Contact&#40;&#41; </span>
                  to reach me
                </p>
              </span>
              <span>
                <p className="text text-5">
                  <span style={{ color: "purple" }}>return</span> a
                  <span style={{ color: "#fe5f3c" }}> Call&#40;&#41;</span> ||
                  <span style={{ color: "#fe5f3c" }}> Email&#40;&#41;</span>
                </p>
              </span>
              <span>
                <p className=" text-6">&#125;</p>
              </span>
              <span>
                <p className="text text-7">
                  <span style={{ color: "purple" }}>if</span>{" "}
                  <span style={{ color: "purple" }}>&#40;</span>
                  !interested<span style={{ color: "purple" }}>&#41;</span>{" "}
                  &#123;
                </p>
              </span>
              <span>
                <p className="text text-8">
                  <span style={{ color: "blue" }}>const</span> bye = Thank you
                  for your time!
                </p>
              </span>
              <span>
                <p className="text text-9">
                  <span style={{ color: "#fe5f3c" }}>print&#40;</span>
                  bye<span style={{ color: "#fe5f3c" }}>&#41;</span>
                </p>
              </span>
              <span>
                <p className="text-10">&#125;</p>
              </span>
              <span>
                <p className="text text-11" style={{ color: "#fe5f3c" }}>
                  &#125;
                </p>
              </span>
            </div>
          </div>
          <div className="image-container">
            <img src={headerImg} className="image" alt="/header"></img>
          </div>
        </div>
      </header>
      <Footer />
    </>
  );
}
