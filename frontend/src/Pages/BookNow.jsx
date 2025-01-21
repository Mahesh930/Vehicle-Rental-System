import React, { useState } from "react";
import "../Styles/BookNow.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function BookNow() {
    return (
        <div className="book-now">
            {/* Header Section */}
            <header className="header">
                <div className="logo">Vehicle Rental</div>
                <nav className="navbar">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
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

            {/* Booking Section */}
            <section className="booking-section">
                <div className="overlay">
                    <div className="booking-content">
                        <h1>Reserve Your Ride</h1>
                        <p>
                            Make your travel plans seamless and hassle-free.
                            Book now!
                        </p>
                        <form className="booking-form">
                            <div className="form-group">
                                <label htmlFor="pickup-date">
                                    Pick-up Date:
                                </label>
                                <input
                                    type="date"
                                    id="pickup-date"
                                    name="pickup-date"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="pickup-time">
                                    Pick-up Time:
                                </label>
                                <input
                                    type="time"
                                    id="pickup-time"
                                    name="pickup-time"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="return-date">
                                    Return Date:
                                </label>
                                <input
                                    type="date"
                                    id="return-date"
                                    name="return-date"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="return-time">
                                    Drop-off Time:
                                </label>
                                <input
                                    type="time"
                                    id="return-time"
                                    name="return-time"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-primary"
                            >
                                Confirm Booking
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
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
            </footer>
        </div>
    );
}

export default BookNow;
