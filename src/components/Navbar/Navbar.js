import React from "react";
import "./navbar.css";
import { FaHome } from "react-icons/fa";
import { FaUserNinja } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { GrDocumentDownload } from "react-icons/gr";

function Navbar() {
  return (
    <nav>
      <a href="#">
        <FaHome />
      </a>
      <a href="#about">
        <FaUserNinja />
      </a>
      <a href="#contact">
        <GrContact />
      </a>
      <a href="#resume">
        <GrDocumentDownload />
      </a>
    </nav>
  );
}

export default Navbar;
