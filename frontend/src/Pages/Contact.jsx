import React from "react";
import "../Styles/Contact.css";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import React Icons
=======
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
>>>>>>> e275ff9773fbe45ff1fa26c6b3818e0ce430b494

function Contact() {
    return (
        <div className="contact-page">
            {/* Header */}
            <header className="header">
                <div className="logo">Vehicle Rental</div>
                <nav className="navbar">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/vehicle">Vehicles</Link>
                        </li>
                        <li>
                            <Link to="/booknow">Book Now</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>

<<<<<<< HEAD
            {/* Hero Section */}
            <div className="contact-hero">
                <h1>We’d Love to Hear From You!</h1>
                <p>
                    Whether you have a question, concern, or just want to say
                    hello, we’re here to help.
                </p>
=======
      {/* Hero Section */}
      <div className="contact-hero">
        <h1>We’d Love to Hear From You!</h1>
        <p>Whether you have a question, concern, or just want to say hello, we’re here to help.</p>
      </div>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-wrapper">
          {/* Contact Form */}
          <div className="contact-form-container">
            <h2>Send Us a Message</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-container">
            <h2>Contact Information</h2>
            <p>Feel free to reach out to us using the information below:</p>
            <p>Email: support@vehiclerental.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Main Street, Pune, India</p>
            <h3>Follow Us on Social Media</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
>>>>>>> e275ff9773fbe45ff1fa26c6b3818e0ce430b494
            </div>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="contact-wrapper">
                    {/* Contact Form */}
                    <div className="contact-form-container">
                        <h2>Send Us a Message</h2>
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Your Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Write your message here"
                                    rows="5"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn-primary"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

<<<<<<< HEAD
                    {/* Contact Info */}
                    <div className="contact-info-container">
                        <h2>Contact Information</h2>
                        <p>
                            Feel free to reach out to us using the information
                            below:
                        </p>
                        <p>Email: support@vehiclerental.com</p>
                        <p>Phone: +1 234 567 890</p>
                        <p>Address: 123 Main Street, Pune, India</p>
                        <h3>Follow Us on Social Media</h3>
                        <div className="social-links">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaFacebook size={30} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaTwitter size={30} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaInstagram size={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <h2>Our Location</h2>
                <iframe
                    title="Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.7609932852346!2d73.85534787500528!3d18.52043067244352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf3b0f1f1c77%3A0x7fcb5d1a5db5c8cf!2sPune!5e0!3m2!1sen!2sin!4v1673961234567!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </section>

            {/* Footer */}
            <footer
                id="footer"
                className="footer"
            >
                <div className="footer-content">
                    <p>
                        &copy; 2025 Vehicle Rental Services. All rights
                        reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
=======
      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>Email: support@vehiclerental.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className="social-media">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <Link to="#facebook">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link to="#twitter">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link to="#instagram">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p>&copy; 2025 Vehicle Rental Services. All rights reserved.</p>
      </footer>
    </div>
  );
>>>>>>> e275ff9773fbe45ff1fa26c6b3818e0ce430b494
}

export default Contact;
