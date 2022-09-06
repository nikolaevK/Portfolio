import React from "react";
import "./footer.css";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="main-footer-container">
      <div className="footer-title">
        Discovering and Learning Every Single Day.
      </div>
      <div className="footer-container">
        <a href="https://linkedin.com/in/konn" target="blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/nikolaevK" target="blank">
          <AiFillGithub />
        </a>
        <a href="mailto:contact@nikolaev.us">
          <AiOutlineMail />
        </a>
      </div>
    </div>
  );
}
