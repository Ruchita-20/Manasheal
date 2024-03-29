import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faPaperPlane,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import './BookAppointment.css';
import '../App.css';

const BookAppointment = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xpumd1m', 'template_hqjzdo2', form.current, '1dc2JomPrKdT1_Thq')
      .then(
        (result) => {
          console.log(result.text);

          // Clear form fields
          form.current.reset();

          // Show thank-you message
          alert('Thank you for your booking! Our team will get back to you within 24 hours.');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form-container">
      <div className="box-wrapper">
        <div className="info-wrap">
          <h2 className="info-title">Book An Appointment</h2>
          <h3 className="info-sub-title">
            Fill up the form and our Team will get back to you within 24 hours
          </h3>
          <ul className="info-details">
            <li>
              <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon" />
              <span>Phone:</span> <a href="tel:+1235235598">+1235 2355 98</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPaperPlane} className="contact-icon" />
              <span>Email:</span>{' '}
              <a href="mailto:info@yoursite.com">info@yoursite.com</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faGlobe} className="contact-icon" />
              <span>Website:</span> <a href="#">yoursite.com</a>
            </li>
          </ul>
          <ul className="social-icons">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="form-wrap">
          <form ref={form} onSubmit={sendEmail}>
            <h2 className="form-title">Fill The Appropriate Details</h2>
            <div className="form-fields">
              <div className="form-group1">
                <input
                  type="text"
                  className="fname"
                  name="to_name"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group1">
                <input
                  type="text"
                  className="lname"
                  name="to_name"
                  placeholder="Last Name"
                />
              </div>
              <div className="form-group1">
                <input
                  type="email"
                  className="email"
                  name="from_email"
                  placeholder="Mail"
                />
              </div>
              <div className="form-group1">
                <input
                  type="number"
                  className="phone"
                  placeholder="Phone"
                />
              </div>
              <div className="form-group1">
                <input
                  type="text"
                  className="city"
                  placeholder="City"
                />
              </div>
              <div className="form-group1">
                <select
                  name="service_area"
                  id="srvc"
                  className="select-box"
                >
                  <option value="default">Choose Services</option>
                  <option value="Adult Therapy">Adult Therapy</option>
                  <option value="Child Therapy">Child Therapy</option>
                </select>
              </div>
            </div>
            <input
              type="submit"
              value="Send Message"
              className="submit-button"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
