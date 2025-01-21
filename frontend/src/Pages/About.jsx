import React from "react";
import "../Styles/About.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing React Icons


function About() {
  const vehicleCounts = {
    car: 50,
    bike: 30,
    bicycle: 20,
  };
    return (
        <div className="about-page">
            {/* Header */}
            <header className="header">
                <div className="logo">Vehicle Rental</div>
                <nav className="navbar">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/vehicles">Vehicles</Link>
                        </li>
                        <li>
                            <Link to="/booknow">Book Now</Link>
                        </li>
                        <li>
                            <a href="#footer">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>

<<<<<<< HEAD
            {/* About Section */}
            <section className="about-section">
                <div className="container">
                    {/* <h1>About Us</h1> */}
                    <p className="subtitle">
                        Revolutionizing transportation, one ride at a time.
                    </p>

                    <div className="about-content">
                        <div className="text-section">
                            <p>
                                Welcome to{" "}
                                <strong>Vehicle Rental Services</strong>, your
                                trusted partner for hassle-free vehicle rentals.
                                Whether you’re looking for a sleek car, a speedy
                                bike, or a comfortable bicycle, we offer a wide
                                range of options to suit every journey. Our
                                platform is designed to provide you with a
                                seamless rental experience from start to finish.
                            </p>
                            <p>
                                At Vehicle Rental Services, we understand that
                                convenience, affordability, and safety are your
                                top priorities. That’s why we offer:
                            </p>
                            <ul>
                                <li>
                                    **A wide range of vehicles**: Cars, bikes,
                                    and bicycles for all occasions.
                                </li>
                                <li>
                                    **Affordable pricing**: Transparent pricing
                                    with no hidden costs.
                                </li>
                                <li>
                                    **24/7 customer support**: Assistance
                                    whenever you need it.
                                </li>
                                <li>
                                    **Flexible booking options**: Choose from
                                    hourly, daily, or weekly rentals.
                                </li>
                            </ul>
                            <p>
                                Whether it’s a quick city ride, a weekend
                                getaway, or a long road trip, we’re here to
                                ensure your travel needs are met with comfort
                                and ease.
                            </p>

                            {/* Displaying Vehicle Counts */}
                            <div className="vehicle-counts">
                                <h2>Our Fleet</h2>
                                <p>
                                    We offer a wide variety of vehicles to cater
                                    to all your transportation needs:
                                </p>
                                <div className="vehicle-counts-boxes">
                                    <div className="vehicle-box car">
                                        <strong>Cars</strong>
                                        <p>{vehicleCounts.car}</p>
                                    </div>
                                    <div className="vehicle-box bike">
                                        <strong>Bikes</strong>
                                        <p>{vehicleCounts.bike}</p>
                                    </div>
                                    <div className="vehicle-box bicycle">
                                        <strong>Bicycles</strong>
                                        <p>{vehicleCounts.bicycle}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="image-section">
                            <img
                                src="https://via.placeholder.com/500x300"
                                alt="About us"
                                className="about-image"
                            />
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
                                    <FaFacebookF /> Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaTwitter /> Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaInstagram /> Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p>&copy; 2025 Vehicle Rental Services. All rights reserved.</p>
            </footer>

      