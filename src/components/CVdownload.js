import React from "react";
import CV from "../assets/Untitled1.pdf";

function CVdownload() {
  return (
    <div className="CVdownload">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#Contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default CVdownload;
