import React from "react";
import CV from "./CVdownload";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello, I am</h5>
        <h1> Sophie Hall</h1>
        <h5 className="text-light">Medical Coder</h5>
        <CV />
      </div>
    </header>
  );
}

export default Header;
