import React from "react";
import CV from "../assets/CV.pdf";
function About() {
   
  return (
    <section className="section wrapper" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="about-info">
            <h3>
              <b>My Introduction</b>
            </h3>
            <p>
              I am well-versed in HTML, CSS and JavaScript, and other
              cutting-edge frameworks and libraries, which allows me to
              implement interactive features.
            </p>
            <div className="about-btn">
            <a href={CV}>
          <button className="btn">
            Download CV <i className="uil uil-import"></i>
          </button>
        </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>
                <b>Frontend</b>
              </h3>
            </div>
            <div className="skills-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>JavaScript</span>
              <span>Vue</span>
              <span>React</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>
                <b>Backend</b>
              </h3>
            </div>
            <div className="skills-list">
              <span>PHP</span>
              <span>JAVA</span>
              <span>Python</span>
              <span>Nodejs</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>
                <b>Database</b>
              </h3>
            </div>
            <div className="skills-list">
              <span>MySQL</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
