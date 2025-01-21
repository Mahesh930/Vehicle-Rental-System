<<<<<<< HEAD
// Home page for Online Vehical Rental System

import React from 'react'

const Home = () => {
  return (
    <div>
        
    </div>
  )
}

export default Home
=======

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../Styles/Home.css";

function Home() {
    // State to handle login/logout
    const [isLoggedIn, setIsLoggedIn] = useState(false);

import React, { useState, useEffect } from "react";
import "../Styles/Home.css";
import { Link } from "react-router-dom";
import backgroundImg from "../img/background.jpg";
import carImg from "../img/car.jpg";
import bikeImg from "../img/bike.jpg";
import bicycleImg from "../img/bicycle.jpg";
import { FaInstagram, FaFacebook, FaTwitter, FaUserCircle } from "react-icons/fa";

function Home() {

  return (
    <div>
      {/* Header and Navbar */}
      <header className="header">
        <div className="header-left">
          <Link to="/profile" className="profile-icon">
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
      </header>
>>>>>>> e275ff9773fbe45ff1fa26c6b3818e0ce430b494

    // Toggle login/logout
    const handleLoginLogout = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <div>
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

<<<<<<< HEAD
            {/* Vehicle Rental Section */}
            <section className="vehicle-rental">
                <h2>Rent a Vehicle</h2>
                <p>Select a category and book your ride now.</p>
                <div className="vehicle-options">
                    {/* Vehicle Options Content */}
                </div>
            </section>

            {/* About Section */}
            <section className="about">
                <h2>About Us</h2>
                <p>
                    We are a leading vehicle rental service offering a wide
                    range of vehicles, including cars, bikes, and bicycles. Our
                    mission is to provide safe, affordable, and convenient
                    transportation solutions for all kinds of travelers.
                </p>
                <Link to="/about">
                    <button className="btn-primary">Learn More</button>
                </Link>
            </section>

            {/* Footer Section */}
            <footer className="footer">
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
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebook size={30} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaTwitter size={30} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram size={30} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p>&copy; 2025 Vehicle Rental Services. All rights reserved.</p>
            </footer>
=======
      {/* Testimonials Section */}
      <section id="testimonial" className="testimonials">
        <h2>What Our Customers Say</h2>
        <blockquote>
          "The variety of vehicles and ease of booking made my trip amazing!"
        </blockquote>
        <cite>- Satisfied Customer</cite>
        <Link to="/testimonial">
          <button className="btn-primary">Read More Testimonials</button>
        </Link>
      </section>

      {/* Footer Section */}
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
>>>>>>> e275ff9773fbe45ff1fa26c6b3818e0ce430b494
        </div>
    );
}

export default Home;
>>>>>>> f1afeebc94bc69db73e47bad1a7ef0db90c2df9d
