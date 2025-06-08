import React from "react";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/Contact.css";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
function Contact() {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     // .sendForm('service_qsk6dm9', 'template_dgt5mro', form.current, {
  //     //   publicKey: '5An7gYOPwaKUI4JzG',
  //     // })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
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
            <p>9898989890</p>
            <h2>
              <MdEmail /> Email
            </h2>
            <p>info@yogalayaa.com</p>
            <h2>
              <CiLocationOn /> Address
            </h2>
            <p>Vasant Vihar, Delhi, India</p>
            <ul>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaXTwitter />
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
            {/* ref={form} onSubmit={sendEmail} */}
            <form>
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
                name="from-email"
                className="contact-in-input"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                name="from-phone"
                className="contact-in-input"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="contact-in-input"
                required
              />
              <input type="submit" value="Send" className="contact-in-btn" />
            </form>
          </div>
          <div className="contact-in">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70906969727!2d73.69815309340439!3d18.524870610788835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1723829478886!5m2!1sen!2sin"
              width="100%"
              height="500px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7777.7748603796435!2d77.647486!3d12.914956!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14849898aad5%3A0xb3ce28359ae311ea!2s1972%2C%2022nd%20A%20Main%20Rd%2C%20Vanganahalli%2C%201st%20Sector%2C%20HSR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560102!5e0!3m2!1sen!2sin!4v1724749987656!5m2!1sen!2sin"
              width="100%"
              height="500px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
