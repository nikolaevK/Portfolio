import React from "react";
import "./contact.css";
import contactImg from "./contact_img.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import toast from "react-hot-toast";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_55qmnjj",
        "template_lgh3nya",
        form.current,
        "MxOB19E11tjTLiIaP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    toast("Thank you! Your message sent.");
  };

  return (
    <section>
      <div className="contact-container">
        <div className="contact-img-container">
          <img src={contactImg} alt="/contact"></img>
        </div>
        <div className="contact-title">
          Thanks for taking the time to reach out!
        </div>
        <div className="down-pointer contact-arrow-down">
          <AiOutlineArrowDown />
        </div>
      </div>
      <div className="contact-sections">
        <div className="left-section">
          <article className="contact-option">
            <AiOutlineMail className="contact-img" />
            <h4>Email</h4>
            <h5>contact@nikolaev.us</h5>
            <a href="mailto:contact@nikolaev.us">Send a Message</a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-img" />
            <h4>WhatsApp</h4>
            <h5>+18054608670</h5>
            <a
              href="https://api.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        <div className="right-section">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-input-container"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            ></input>
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="contact-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
