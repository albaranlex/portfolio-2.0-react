import React from "react";
import { BiNetworkChart } from "react-icons/bi";

function FullstackDeveloper() {
  return (
    <div className="skills-container">
      <div className="se-logo">
        <BiNetworkChart />
      </div>
      <div className="skills-header">
        <h1>Diverse Work Portfolio</h1>
      </div>
      <div className="skills-content">
        <p clasName="skills-subheader">
          I have had the pleasure of working across different industries in
          varied positions and have gained valuable skills and experiences.
        </p>
        <br />
        <h2>Positions Held</h2>
        <ul>
          <li>Advanced Practice Provider (Health and Safety)</li>
          <li>Safety Data Analyst (Pharmaceutical)</li>
          <li>TESL Instructor - English as a second language</li>
          <li>Marketing and Operations Coordinator (Architecture)</li>
          <li>Social Media Evaluator</li>
        </ul>
      </div>
    </div>
  );
}

export default FullstackDeveloper;
