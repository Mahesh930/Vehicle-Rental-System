import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Profile.css";
import {
    FaUserCircle,
    FaFacebook,
    FaTwitter,
    FaInstagram,
} from "react-icons/fa";

function Profile() {
    // State to handle login status and dropdown menu visibility
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    // Toggle login/logout
    const handleLoginLogout = () => {
        setIsLoggedIn(!isLoggedIn);
        setIsDropdownVisible(false); // Close dropdown after logout
    };

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="profile-page">
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
                {/* Profile Icon with Dropdown */}
                <div
                    className="profile-icon"
                    onClick={toggleDropdown}
                >
                    <FaUserCircle size={30} />
                    {isDropdownVisible && (
                        <div className="dropdown-menu">
                            {isLoggedIn ? (
                                <>
                                    <Link
                                        to="/profile"
                                        className="dropdown-item"
                                    >
                                        Profile
                                    </Link>
                                    <button
                                        onClick={handleLoginLogout}
                                        className="dropdown-item"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="dropdown-item"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="dropdown-item"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </header>

            {/* Profile Section */}
            <section className="profile-section">
                <div className="profile-info">
                    <div className="profile-img">
                        <FaUserCircle size={150} />
                    </div>
                    <div className="profile-details">
                        <h2>John Doe</h2>
                        <p>Email: john.doe@example.com</p>
                        <p>Phone: +1 234 567 890</p>
                        <p>Member Since: January 2023</p>
                        <button className="btn-primary">Edit Profile</button>
                    </div>
                </div>
            </section>

            {/* Previous Rentals Section */}
            <section className="previous-rentals">
                <h2>Your Previous Rentals</h2>
                <div className="rentals-list">
                    <div className="rental">
                        <p>
                            <strong>Vehicle Type:</strong> Car
                        </p>
                        <p>
                            <strong>Rental Date:</strong> December 10, 2024
                        </p>
                        <p>
                            <strong>Pick-up Location:</strong> New York City
                        </p>
                        <p>
                            <strong>Drop-off Location:</strong> Boston
                        </p>
                    </div>
                    <div className="rental">
                        <p>
                            <strong>Vehicle Type:</strong> Bike
                        </p>
                        <p>
                            <strong>Rental Date:</strong> October 5, 2024
                        </p>
                        <p>
                            <strong>Pick-up Location:</strong> Los Angeles
                        </p>
                        <p>
                            <strong>Drop-off Location:</strong> Santa Monica
                        </p>
                    </div>
                    <div className="rental">
                        <p>
                            <strong>Vehicle Type:</strong> Bicycle
                        </p>
                        <p>
                            <strong>Rental Date:</strong> July 20, 2024
                        </p>
                        <p>
                            <strong>Pick-up Location:</strong> San Francisco
                        </p>
                        <p>
                            <strong>Drop-off Location:</strong> Oakland
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
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
                                <Link to="#facebook">
                                    <FaFacebook size={30} />
                                </Link>
                            </li>
                            <li>
                                <Link to="#twitter">
                                    <FaTwitter size={30} />
                                </Link>
                            </li>
                            <li>
                                <Link to="#instagram">
                                    <FaInstagram size={30} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <p>&copy; 2025 Vehicle Rental Services. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Profile;