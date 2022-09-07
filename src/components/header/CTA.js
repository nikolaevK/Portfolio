import React from "react";
import { Link } from "react-router-dom";
import CV from "./cv.pdf";

export default function CTA() {
  return (
    <div className="header-btn-container">
      <a className="btn" href={CV} target="blank">
        Download CV
      </a>
      <Link className="btn btn-secondary" to="/contact">
        <span>Let's Talk</span>
      </Link>
    </div>
  );
}
