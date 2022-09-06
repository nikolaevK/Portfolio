import React from "react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <div className="header-btn-container">
      <a className="btn" href="">
        Download CV
      </a>
      <Link className="btn btn-secondary" to="/contact">
        <span>Let's Talk</span>
      </Link>
    </div>
  );
}
