import React from "react";
import CV from "../assets/CV.pdf";
import { Link } from "react-router-dom";

function Navbar() {
  function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

  window.onscroll = function () {
    headerShadow();
  };

  function headerShadow() {
    const navHeader = document.getElementById("header");

    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
    }
  }

  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">Shivam</p>
        <span>.</span>
      </div>
      <div className="nav-menu" id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <Link href="#home" className="nav-link active-link">
              Home
            </Link>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <Link href="#about" className="nav-link">
              About
            </Link>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <Link href="#projects" className="nav-link">
              Projects
            </Link>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <Link href="#contact" className="nav-link">
              Contact
            </Link>
            <div className="circle"></div>
          </li>
        </ul>
      </div>
      <div className="nav-button">
        <Link href={CV}>
          <button className="btn">
            Download CV <i className="uil uil-import"></i>
          </button>
        </Link>
      </div>
      <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={myMenuFunction}></i>
      </div>
    </nav>
  );
}

export default Navbar;
