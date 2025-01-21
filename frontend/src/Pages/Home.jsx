import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaUserCircle,
} from "react-icons/fa";

function Home() {
    // State to handle login/logout
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Toggle login/logout
    const handleLoginLogout = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <div className="home-page">
            {/* Header */}
            <header className="header">
                <div className="header-left">
                    <Link
                        to="/profile"
                        className="profile-icon"
                    >
                        <FaUserCircle />
                    </Link>
                    <div className="logo">Vehicle Rental</div>
                </div>
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
                            <Link to="/testimonial">Testimonials</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                {/* Login Button */}
                <div className="login-btn">
                    {isLoggedIn ? (
                        <button
                            onClick={handleLoginLogout}
                            className="btn-login"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link to="/register">
                            <button className="btn-login">Login</button>
                        </Link>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay">
                    <h1 className="hero-title">
                        Welcome to Vehicle Rental Services
                    </h1>
                    <p className="hero-description">
                        Choose from cars, bikes, and bicycles for your journey.
                    </p>
                    <Link to="/booknow">
                        <button className="btn-primary">Explore Now</button>
                    </Link>
                </div>
            </section>

            {/* Testimonials Section */}
            <section
                id="testimonial"
                className="testimonials"
            >
                <h2>What Our Customers Say</h2>
                <blockquote>
                    "The variety of vehicles and ease of booking made my trip
                    amazing!"
                </blockquote>
                <cite>- Satisfied Customer</cite>
                <Link to="/testimonial">
                    <button className="btn-primary">
                        Read More Testimonials
                    </button>
                </Link>
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

export default Home;
