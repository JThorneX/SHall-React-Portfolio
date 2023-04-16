import React from "react";
import "./resume.css";
import { RiLightbulbFlashFill } from "react-icons/ri";
import CV from "../CVdownload";

function Resume() {
  return (
    <section id="resume">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_coding">
          <h3>Medical Coding</h3>
          <div className="experience_content">
            <article className="experience_details">
              <RiLightbulbFlashFill className="experience_details-icon" />
              <div>
                <h4 className="highlight">SQL Developer</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <RiLightbulbFlashFill className="experience_details-icon" />
              <div>
                <h4>SQL Plus</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <RiLightbulbFlashFill className="experience_details-icon" />
              <div>
                <h4>Excel</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <RiLightbulbFlashFill className="experience_details-icon" />
              <div>
                <h4>Program</h4>
                <small className="text-light">Knowledge level</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_examples">
          <h3>Coding Examples</h3>
          <div className="examples_content experience_content">
            <article className="experience_details">
              <RiLightbulbFlashFill className="experience_details-icon" />
              <div>
                <h4>Project 1</h4>
                <small className="text-light">Link</small>
              </div>
            </article>
            <article className="experience_details">
              <RiLightbulbFlashFill className="experience_details-icon" />
              <div>
                <h4>Project 2</h4>
                <small className="text-light">Link</small>
              </div>
            </article>
            <article className="experience_details">
              <RiLightbulbFlashFill className="experience_details-icon" />
              <div>
                <h4>Project 3</h4>
                <small className="text-light">Link</small>
              </div>
            </article>
            <article className="experience_details">
              <RiLightbulbFlashFill className="experience_details-icon" />
              <div>
                <h4>Project 4</h4>
                <small className="text-light">Link</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div>
        <CV />
      </div>
    </section>
  );
}

export default Resume;
