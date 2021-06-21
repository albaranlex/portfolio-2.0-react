import React from "react";
import { AiOutlineAntDesign } from "react-icons/ai";

function Designer() {
  return (
    <div className="skills-container">
      <div className="se-logo">
        <AiOutlineAntDesign />
      </div>
      <div className="skills-header">
        <h1>Designer</h1>
      </div>
      <div className="skills-content">
        <p className="skills-subheader">
          Symmetry fascinates me. This translates to my designs for a better and
          finer user experience.
        </p>
        <br />
        <h2>Design Inspirations</h2>
        <p>Behance, Awwwards, UI Movement, Site Inspire, Pttrns, Uplabs</p>
        <br />

        <h2>Tools for Designing</h2>
        <p>Adobe Photoshop, Canva, Figma, Sketck, Vectary for 3D Modelling</p>
      </div>
    </div>
  );
}

export default Designer;
