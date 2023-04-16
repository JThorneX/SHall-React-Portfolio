import React from "react";
import CV from "../CVdownload";
import sophie from "../../assets/sophie on fleek.png";
import Socials from "../Socials";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello, I am</h5>
        <h1> Sophie Hall</h1>
        <h5 className="text-light">Medical Coder</h5>
        <CV />
        <Socials />

        <div className="sophie">
          <img src={sophie} alt="sophie on fleek" />
        </div>
      </div>
    </header>
  );
}

export default Header;
