import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/Contact.css";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setMessage("");

  //   // Replace these with your actual EmailJS credentials from your dashboard
  //   const serviceId = "service_xxxxxxx"; // Replace with your Service ID
  //   const templateId = "template_xxxxxxx"; // Replace with your Template ID
  //   const publicKey = "xxxxxxxxxxxxxxx"; // Replace with your Public Key

  //   // Add additional template parameters
  //   const templateParams = {
  //     from_name: form.current.from_name.value,
  //     from_email: form.current.from_email.value,
  //     subject: form.current.subject.value,
  //     message: form.current.message.value,
  //     to_email: "pamirnayak5@gmail.com", // Your receiving email
  //     reply_to: form.current.from_email.value // For easy replies
  //   };

  //   emailjs
  //     .send(serviceId, templateId, templateParams, publicKey)
  //     .then(
  //       (result) => {
  //         console.log("SUCCESS!", result.text);
  //         setMessage("Message sent successfully! We'll get back to you soon.");
  //         form.current.reset(); // Clear the form
  //         setIsLoading(false);
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //         setMessage("Failed to send message. Please try again.");
  //         setIsLoading(false);
  //       }
  //     );
  // };

  return (
    <>
      <div className="cont">
        <div className="headingc">
          <h1>Get In Touch With Yogalayaa</h1>
          <img src="./images/lg.png" alt="" />
        </div>
        <div className="contact-wrap">
          <div className="contact-in">
            <h1>Contact Info</h1>
            <h2>
              <FaPhoneAlt /> Phone
            </h2>
            <p>+91-7483987568</p>
            <h2>
              <MdEmail /> Email
            </h2>
            <p>yogalayaaofficial@gmail.com</p>
            <h2>
              <CiLocationOn /> Address
            </h2>
            <p>1972, 22nd Main Rd, Vanganahalli, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102</p>
            <ul>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <IoLogoYoutube />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-in">
            <h1>Send a Message</h1>
            <form >
              <input
                type="text"
                placeholder="Full Name"
                name="from_name"
                className="contact-in-input"
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="from_email"
                className="contact-in-input"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className="contact-in-input"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="contact-in-input"
                required
              />
              <input 
                type="submit" 
                value={isLoading ? "Sending..." : "Send"} 
                className="contact-in-btn"
                disabled={isLoading}
              />
            </form>
            {message && (
              <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
                {message}
              </div>
            )}
          </div>

          <div className="contact-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.251736888909!2d77.6467562!3d12.914163700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b1f01663c1%3A0x174babce4553003a!2sYogalayaa!5e1!3m2!1sen!2sin!4v1749394149166!5m2!1sen!2sin"
              width="100%"
              height="500px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;