import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>sophiehall@gmail.com</h5>
            <a href="mailto:sophiehall@gmail.com" target="_blank">
              Send an Email
            </a>
          </article>
          <article className="contact_option">
            <MdOutlineEmail />
            <h4>Alternative Contact</h4>
            <h5>Alternative Contact</h5>
            <a href="">Alternative</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>

      {/* <a href="#Contact" className="btn btn-primary">
        Let's Talk
      </a> */}
    </section>
  );
}

export default Contact;
