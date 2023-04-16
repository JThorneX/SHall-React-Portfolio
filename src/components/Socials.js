import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";

function Socials() {
  return (
    <div className="socials">
      <a href="https://www.linkedin.com" target="_blank">
        <FiLinkedin />
      </a>
      <a href="https://www.twitter.com" target="_blank">
        <FiTwitter />
      </a>
      <a href="https://www.facebook.com" target="_blank">
        <FiFacebook />
      </a>
    </div>
  );
}

export default Socials;
