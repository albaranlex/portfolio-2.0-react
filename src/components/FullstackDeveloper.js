import React from "react";
import { BsCodeSlash } from "react-icons/bs";

function FullstackDeveloper() {
  return (
    <div className="skills-container">
      <div className="se-logo">
        <BsCodeSlash />
      </div>
      <div className="skills-header">
        <h1>Fullstack Developer</h1>
      </div>
      <div className="skills-content">
        <p className="skills-subheader">
          I am a visual coder and lean more towards frontend Development but
          also a very capable backend developer. doing.
        </p>
        <br />
        <h2>Languages</h2>
        <p>HTML, CSS, SASS/SCSS, JavaScript, React-JS</p>
        <br />

        <h2>Other Dev Tools</h2>
        <p>GitHub, GitLab, Terminal, VS Code</p>
      </div>
    </div>
  );
}

export default FullstackDeveloper;
