import React from "react";

function Footer() {
  return (
    <footer>
      <div className="top-footer wrapper">
        <p>Shivam Kopare .</p>
      </div>
      <div className="middle-footer">
        <ul className="footer-menu">
          <li className="footer_menu_list">
            <a href="#home">Home</a>
          </li>
          <li className="footer_menu_list">
            <a href="#about">About</a>
          </li>
          <li className="footer_menu_list">
            <a href="#projects">Projects</a>
          </li>
          <li className="footer_menu_list">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-social-icons">
        <div className="icon">
          <a
            href="https://in.linkedin.com/in/shivam-kopare-1657b323a/"
            target="_blank"
            style={{ color: "hsl(0, 0%, 40%)" }} rel="noreferrer"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
        </div>
        <div className="icon">
          <a
            href="https://github.com/shivamkopare82"
            target="_blank"
            style={{ color: "hsl(0, 0%, 40%)" }} rel="noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        <div className="icon">
          <a
            href="https://www.instagram.com/shivam_kopare/"
            target="_blank"
            style={{ color: "hsl(0, 0%, 40%)" }} rel="noreferrer"
          >
            <i className="uil uil-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
