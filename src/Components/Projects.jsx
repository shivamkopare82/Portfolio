import React from "react";

function Projects() {
  return (
    <section className="section wrapper" id="projects">
      <div className="top-header">
        <h1>Projects</h1>
      </div>
      <div className="project-container">
        <div className="project-box">
          <i className="fa-solid fa-video"></i>
          <h3>Netflix-Clone</h3>
          <label>
            <a
              href="https://github.com/shivamkopare82/Netflix-Clone.git"
              target="_blank" rel="noreferrer"
            >
              Github <i className="fa-solid fa-link"></i>
            </a>
          </label>
        </div>
        <div className="project-box">
          <i className="fa-solid fa-cloud-showers-heavy"></i>
          <h3>Cloud Burst Prediction System</h3>
          <label>
            <a
              href="https://github.com/shivamkopare82/Cloud-Burst-Prediction-System.git"
              target="_blank" rel="noreferrer"
            >
              Github <i className="fa-solid fa-link"></i>
            </a>
          </label>
        </div>
        <div className="project-box">
          <i className="fa-regular fa-calendar-check"></i>
          <h3>College Event Management System</h3>
          <label>
            <a
              href="https://github.com/shivamkopare82/College-Event-Management-System.git"
              target="_blank" rel="noreferrer"
            >
              Github <i className="fa-solid fa-link"></i>
            </a>
          </label>
        </div>
      </div>
    </section>
  );
}

export default Projects;
