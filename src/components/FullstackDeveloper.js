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
          Structure in code is what draw me in it on the first place. I lean
          more towards Frontend Development though as I am a visual person.
          Backend is something that I am, however, also good at.
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
