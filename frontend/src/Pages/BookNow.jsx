import React, { useState } from "react";
import "../Styles/BookNow.css";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import React Icons

function BookNow() {
    const [pickupTime, setPickupTime] = useState("");
    const [returnTime, setReturnTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert("Booking Confirmed!");
    };

    return (
        <div className="book-now">
            {/* Header */}
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

            {/* Booking Form Section */}
            <section
                id="booking-form"
                className="booking-form"
            >
                <h1>Book Your Vehicle</h1>
                <p>Please provide your details to confirm the booking.</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="pickup-date">
                            Pick-up Date and Time:
                        </label>
                        <div className="datetime-container">
                            <input
                                type="date"
                                id="pickup-date"
                                name="pickup-date"
                                required
                            />
                            <input
                                type="time"
                                id="pickup-time"
                                name="pickup-time"
                                value={pickupTime}
                                onChange={(e) => setPickupTime(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="return-date">
                            Return Date and Time:
                        </label>
                        <div className="datetime-container">
                            <input
                                type="date"
                                id="return-date"
                                name="return-date"
                                required
                            />
                            <input
                                type="time"
                                id="return-time"
                                name="return-time"
                                value={returnTime}
                                onChange={(e) => setReturnTime(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="extra-requirements">
                            Extra Requirements:
                        </label>
                        <textarea
                            id="extra-requirements"
                            name="extra-requirements"
                            placeholder="Enter any special requests (optional)"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn-primary"
                    >
                        Confirm Booking
                    </button>
                </form>
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
                                <a href="#facebook">
                                    <FaFacebook size={30} />
                                </a>
                            </li>
                            <li>
                                <a href="#twitter">
                                    <FaTwitter size={30} />
                                </a>
                            </li>
                            <li>
                                <a href="#instagram">
                                    <FaInstagram size={30} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p>&copy; 2025 Vehicle Rental Services. All rights reserved.</p>
            </footer>
=======
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function BookNow() {
  return (
    <div className="book-now">
      {/* Header Section */}
      <header className="header">
        <div className="logo">Vehicle Rental</div>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/booknow">Book Now</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Booking Section */}
      <section className="booking-section">
        <div className="overlay">
          <div className="booking-content">
            <h1>Reserve Your Ride</h1>
            <p>Make your travel plans seamless and hassle-free. Book now!</p>
            <form className="booking-form">
              <div className="form-group">
                <label htmlFor="pickup-date">Pick-up Date:</label>
                <input type="date" id="pickup-date" name="pickup-date" required />
              </div>

              <div className="form-group">
                <label htmlFor="pickup-time">Pick-up Time:</label>
                <input type="time" id="pickup-time" name="pickup-time" required />
              </div>

              <div className="form-group">
                <label htmlFor="return-date">Return Date:</label>
                <input type="date" id="return-date" name="return-date" required />
              </div>

              <div className="form-group">
                <label htmlFor="return-time">Drop-off Time:</label>
                <input type="time" id="return-time" name="return-time" required />
              </div>

              <button type="submit" className="btn-primary">Confirm Booking</button>
            </form>
          </div>
        </div>
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
              <li><Link to="#facebook"><FaFacebook /></Link></li>
              <li><Link to="#twitter"><FaTwitter /></Link></li>
              <li><Link to="#instagram"><FaInstagram /></Link></li>
            </ul>
          </div>
>>>>>>> e275ff9773fbe45ff1fa26c6b3818e0ce430b494
        </div>
    );
}

export default BookNow;
