import React from "react";
import sophie from "../../assets/sophie on fleek.png";
import Socials from "../Socials";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="container header_container">
        <div className="sophie">
          <img src={sophie} alt="sophie on fleek" />
        </div>
        <div className="header_content">
          <div className="header_text">
            <h1> Sophie Hall</h1>
            <h5 className="text-light">HIM Professional</h5>
            <Socials />
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;
