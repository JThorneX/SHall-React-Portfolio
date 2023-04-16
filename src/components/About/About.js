import React from "react";
import "./about.css";
import me from "../../assets/sophie grimace.png";
import { FaQuestionCircle } from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={me} alt="about me image" className="about_image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaQuestionCircle className="about_icon" />
              <h5>Category</h5>
              <small>Content for category</small>
            </article>
            <article className="about_card">
              <FaQuestionCircle className="about_icon" />
              <h5>Category</h5>
              <small>Content for category</small>
            </article>
            <article className="about_card">
              <FaQuestionCircle className="about_icon" />
              <h5>Category</h5>
              <small>Content for category</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iure
            perspiciatis, deleniti inventore qui omnis voluptates vel molestiae
            ipsa maxime molestias saepe quos, error laborum? Esse minus quam
            mollitia eligendi?
          </p>

          <a href="#contact" className="btn btn-primary contact_btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
