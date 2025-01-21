import React from "react";
import "../Styles/Testimonials.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Jayesh Mehta",
      feedback:
        "The rental process was smooth and the car was in excellent condition. Highly recommended!",
      rating: 5,
      image: "/img/user1.jpg",
    },
    {
      name: "Karan Patil",
      feedback:
        "I rented a bike for a day trip, and it was a fantastic experience. Great service and easy booking!",
      rating: 4,
      image: "/img/user2.jpg",
    },
    {
      name: "Minal Khan",
      feedback:
        "Affordable prices and a wide variety of vehicles to choose from. I’ll definitely use this service again.",
      rating: 5,
      image: "/img/user3.jpg",
    },
  ];

  return (
    <div className="testimonials-page">
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

      {/* Testimonials Section */}
      <section className="testimonials">
        <h1 className="title">What Our Customers Say</h1>
        <p className="subtitle">
          See how our customers feel about our services and vehicles.
        </p>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s avatar`}
                className="testimonial-avatar"
              />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <div className="testimonial-rating">
                {"★".repeat(testimonial.rating)}{" "}
                <span className="rating-value">{testimonial.rating}/5</span>
              </div>
            </div>
          ))}
        </div>
      </section>

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
}

export default Testimonials;
