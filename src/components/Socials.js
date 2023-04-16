import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

function Socials() {
  return (
    <div className="socials">
      <a href="https://www.linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://www.twitter.com" target="_blank">
        <BsTwitter />
      </a>
      <a href="https://www.facebook.com" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
}

export default Socials;
