import React from "react";
import "./navbar.css";
import { FaHome } from "react-icons/fa";
import { FaUserNinja } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FaHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUserNinja />
      </a>
      <a
        href="#resume"
        onClick={() => setActiveNav("#resume")}
        className={activeNav === "#resume" ? "active" : ""}
      >
        <FaFileDownload />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <FaCommentAlt />
      </a>
    </nav>
  );
};

export default Navbar;
