import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="top-footer wrapper">
        <p>Shivam Kopare .</p>
      </div>
      <div className="middle-footer">
        <ul className="footer-menu">
          <li className="footer_menu_list">
            <Link href="#home">Home</Link>
          </li>
          <li className="footer_menu_list">
            <Link href="#about">About</Link>
          </li>
          <li className="footer_menu_list">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="footer_menu_list">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="footer-social-icons">
        <div className="icon">
          <Link
            href="https://in.linkedin.com/in/shivam-kopare-1657b323a/"
            target="_blank"
            style={{ color: "hsl(0, 0%, 40%)" }} rel="noreferrer"
          >
            <i className="uil uil-linkedin-alt"></i>
          </Link>
        </div>
        <div className="icon">
          <Link
            href="https://github.com/shivamkopare82"
            target="_blank"
            style={{ color: "hsl(0, 0%, 40%)" }} rel="noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </Link>
        </div>
        <div className="icon">
          <Link
            href="https://www.instagram.com/shivam_kopare/"
            target="_blank"
            style={{ color: "hsl(0, 0%, 40%)" }} rel="noreferrer"
          >
            <i className="uil uil-instagram"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
