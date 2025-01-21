import React from "react";
import "../Styles/Contact.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

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

            {/* Hero Section */}
            <div className="contact-hero">
                <h1>We’d Love to Hear From You!</h1>
                <p>
                    Whether you have a question, concern, or just want to say
                    hello, we’re here to help.
                </p>
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
                                <FaFacebook />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                id="footer"
                className="footer"
            >
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
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaFacebook />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaTwitter />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaInstagram />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p>&copy; 2025 Vehicle Rental Services. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Contact;
