import React from "react";
import CV from "../assets/Untitled1.pdf";

function CVdownload() {
  return (
    <div className="CVdownload">
      <a href={CV} download className="btn">
        Download CV
      </a>
    </div>
  );
}

export default CVdownload;
