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
          <div className="header-sub-container-2">
            <div className="image-container-1">Tell me and I forget.</div>
            <div className="image-container-2"></div>
            <div className="image-container-3">Teach me and I remember.</div>
            <div className="image-container-4">
              <span>Involve me and I learn.</span>
              <span className="credits">- Benjamin Franklin</span>
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
