import React from "react";
import "./about.css";
import { AiOutlineCode } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";
import aboutImg from "./about_img.png";
import Portfolio from "../portfolio/Portfolio";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function About() {
  return (
    <section>
      <div className="about">
        <div className="about-img-container">
          <img src={aboutImg} alt="" className="aboutImg" />
        </div>
        <div className="about-me-section">
          <h1>Hi again, Nice to meet you.</h1>
          <p>
            I am a passionate software engineer with a blend of business acumen
            and technical skills from managerial and economic disciplines. These
            diverse skills help me to plan, design, and build web applications
            in an effective and efficient way with a focus on user experience.
          </p>
          <div className="down-pointer">
            <AiOutlineArrowDown />
          </div>
        </div>
        <div className="about-container">
          <div className="description-boxes container">
            <MdManageAccounts className="icon" />
            <h3 className="about-description">Management</h3>
            <h3 className="about-description">Skills:</h3>
            <p>
              Agile Methodologies, Scrum, Project management, Critical thinking,
              Risk management
            </p>
          </div>
          <div className="description-boxes container">
            <AiOutlineCode className="icon" />
            <h3 className="about-description">Software Stack</h3>
            <h3 className="about-description">Languages</h3>
            <p>JavaScript, TypeScript, CSS, HTML, Python</p>
            <h3 className="about-description">Technologies:</h3>
            <p>React, NodeJS, NextJS, Github, Bootstrap, Tailwind, Firebase</p>
          </div>
          <div className="description-boxes container">
            <MdOutlineAnalytics className="icon" />
            <h3 className="about-description">Economics</h3>
            <h3 className="about-description">Skills:</h3>
            <p>Data collection and analysis, Econometrics, Research skills</p>
          </div>
        </div>
        <Portfolio />
        <div className="about-contact-section">
          <h2>Interested in learning more?</h2>
          <p>Let's Connect</p>
          <Link className="about-btn" to="/contact">
            <span>
              <AiOutlineMessage />
            </span>
            <span style={{ verticalAlign: "middle" }}>
              Start a conversation
            </span>
          </Link>
        </div>
        <Footer />
      </div>
    </section>
  );
}
