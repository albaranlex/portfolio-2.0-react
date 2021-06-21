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
          I have had the pleasure of working across different industries and
          have gained valuable skills; all for your disposal.
        </p>
        <br />
        <h2>Positions Held</h2>
        <ul>
          <li>Advanced Medical Practice Provider</li>
          <li>Health & Safety Data Analyst </li>
          <li>TESL Instructor</li>
          <li>Marketing & Ops Coordinator</li>
          <li>Social Media Evaluator</li>
        </ul>
      </div>
    </div>
  );
}

export default FullstackDeveloper;
