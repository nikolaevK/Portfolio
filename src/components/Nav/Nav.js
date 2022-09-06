import "./nav.css";
import React, { useState } from "react";
import { IoLogoJavascript } from "react-icons/io";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { TbBrandPython } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, Route, Routes } from "react-router-dom";
import { MdClose } from "react-icons/md";
import About from "../about/About";
import Header from "../header/Header";
import Contact from "../contact/Contact";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <nav className="nav-container">
        <div className="cube-container">
          <div className="side front">
            <IoLogoJavascript />
          </div>
          <div className="side left">
            <ImHtmlFive />
          </div>
          <div className="side right">
            <SiCss3 />
          </div>
          <div className="side back">
            <TbBrandPython />
          </div>
          <div className="side top">
            <AiFillGithub />
          </div>
          <div className="side bottom">
            <FaReact />
          </div>
        </div>

        <button
          onClick={() => setOpenNav(!openNav)}
          className="mobile-nav-toggle"
        >
          <span>{openNav === false ? <GiHamburgerMenu /> : <MdClose />}</span>
        </button>

        <ul
          id="primary-navigation"
          data-visible={openNav === false ? "false" : "true"}
          className="list-container flex"
        >
          <li>
            <Link to="/" onClick={() => setOpenNav(!openNav)}>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setOpenNav(!openNav)}>
              <span>About</span>
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setOpenNav(!openNav)}>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
