import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer_logo">
        SOPHIE HALL
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com">
          <BsInstagram />
        </a>
        <a href="https://www.twitter.com">
          <BsTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; JThorne Services. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
