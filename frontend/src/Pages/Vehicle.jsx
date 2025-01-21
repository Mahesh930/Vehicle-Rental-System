import React from "react";
import "../Styles/Vehicle.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

// Vehicle data
const vehicleData = {
    Cars: [
        {
            img: require("../img/sedan.jpg"),
            title: "Sedan",
            description: "Comfortable and stylish for small families.",
        },
        {
            img: require("../img/suv.jpg"),
            title: "SUV",
            description: "Spacious and powerful for long drives.",
        },
        {
            img: require("../img/hatchback.jpg"),
            title: "Hatchback",
            description: "Compact and budget-friendly for city rides.",
        },
    ],
    Bikes: [
        {
            img: require("../img/sportbike.jpg"),
            title: "Sport Bike",
            description: "High performance for thrill-seekers.",
        },
        {
            img: require("../img/cruiser.jpg"),
            title: "Cruiser",
            description: "Comfortable for long-distance rides.",
        },
        {
            img: require("../img/scooter.jpg"),
            title: "Scooter",
            description: "Perfect for quick and easy city rides.",
        },
    ],
    Bicycles: [
        {
            img: require("../img/mountainbike.jpg"),
            title: "Mountain Bike",
            description: "Durable and perfect for rough terrains.",
        },
        {
            img: require("../img/roadbike.jpg"),
            title: "Road Bike",
            description: "Lightweight and ideal for paved roads.",
        },
        {
            img: require("../img/hybridbike.jpg"),
            title: "Hybrid Bike",
            description: "Versatile and great for both city and trails.",
        },
    ],
};

function Vehicle() {
    return (
        <div className="vehicle-page">
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

            {/* Vehicle Section */}
            <section className="vehicles">
                <h1>Our Vehicles</h1>
                <p>
                    Explore a wide range of vehicles for your journey. Choose
                    what suits your needs!
                </p>
                <div className="vehicle-categories">
                    {Object.entries(vehicleData).map(([category, vehicles]) => (
                        <div
                            className="vehicle-category"
                            key={category}
                        >
                            <h2>{category}</h2>
                            <div className="vehicle-list">
                                {vehicles.map((vehicle, index) => (
                                    <div
                                        className="vehicle-item"
                                        key={`${category}-${index}`}
                                    >
                                        <img
                                            src={vehicle.img}
                                            alt={`${vehicle.title}`}
                                            className="vehicle-img"
                                        />
                                        <h3>{vehicle.title}</h3>
                                        <p>{vehicle.description}</p>
                                        <Link to="/booknow">
                                            <button className="btn-primary">
                                                Rent {vehicle.title}
                                            </button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
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

export default Vehicle;
