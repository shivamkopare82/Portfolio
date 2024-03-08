import React from "react";
import CV from "../assets/CV.pdf";
import HeaderImage from "../assets/header.jpg";

function Home() {

  return (
    <section className="featured-box wrapper" id="home">
      <div className="featured-text">
        <div className="featured-name">
          <p style={{ color: "hsl(349, 98%, 32%)" }}>
            Hi, I'm Shivam Kopare <br />
            <span className="typedText"></span>
          </p>
          <p style={{ color: "hsl(0, 0%, 40%)" }}>
            Full Stack Developer <span className="typedText"></span>
          </p>
        </div>
        <div className="featured-text-info">
          <p>
            Experienced frontend developer with a passion for creating visually
            stunning and user-friendly websites.
          </p>
        </div>
        <div className="featured-text-btn">
          <a href={CV}>
            <button className="btn">
              Download CV <i className="uil uil-import"></i>
            </button>
          </a>
        </div>
        <div className="social_icons">
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
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={HeaderImage} alt="avatar" />
        </div>
      </div>
    </section>
  );
}

export default Home;
