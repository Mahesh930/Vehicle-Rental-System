import React from "react";
import "../Styles/Vehicle.css";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing React icons
=======
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
>>>>>>> e275ff9773fbe45ff1fa26c6b3818e0ce430b494

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
<<<<<<< HEAD
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
                            <a href="#vehicles">Vehicles</a>
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
=======
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
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
>>>>>>> e275ff9773fbe45ff1fa26c6b3818e0ce430b494

            {/* Vehicle Section */}
            <section
                id="vehicles"
                className="vehicles"
            >
                <h1>Our Vehicles</h1>
                <p>
                    Explore a wide range of vehicles for your journey. Choose
                    what suits your needs!
                </p>

<<<<<<< HEAD
                <div className="vehicle-categories">
                    {/* Cars Section */}
                    <div className="vehicle-category">
                        <h2>Cars</h2>
                        <div className="vehicle-list">
                            <div className="vehicle-item">
                                <img
                                    src={sedanImg}
                                    alt="Sedan"
                                    className="vehicle-img"
                                />
                                <h3>Sedan</h3>
                                <p>
                                    Comfortable and stylish for small families.
                                </p>
                                <Link to="/booknow">
                                    <button className="btn-primary">
                                        Rent Sedan
                                    </button>
                                </Link>
                            </div>
                            <div className="vehicle-item">
                                <img
                                    src={suvImg}
                                    alt="SUV"
                                    className="vehicle-img"
                                />
                                <h3>SUV</h3>
                                <p>Spacious and powerful for long drives.</p>
                                <Link to="/booknow">
                                    <button className="btn-primary">
                                        Rent SUV
                                    </button>
                                </Link>
                            </div>
                            <div className="vehicle-item">
                                <img
                                    src={hatchbackImg}
                                    alt="Hatchback"
                                    className="vehicle-img"
                                />
                                <h3>Hatchback</h3>
                                <p>
                                    Compact and budget-friendly for city rides.
                                </p>
                                <Link to="/booknow">
                                    <button className="btn-primary">
                                        Rent Hatchback
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Bikes Section */}
                    <div className="vehicle-category">
                        <h2>Bikes</h2>
                        <div className="vehicle-list">
                            <div className="vehicle-item">
                                <img
                                    src={sportbikeImg}
                                    alt="Sport Bike"
                                    className="vehicle-img"
                                />
                                <h3>Sport Bike</h3>
                                <p>High performance for thrill-seekers.</p>
                                <Link to="/booknow">
                                    <button className="btn-primary">
                                        Rent Sport Bike
                                    </button>
                                </Link>
                            </div>
                            <div className="vehicle-item">
                                <img
                                    src={cruiserImg}
                                    alt="Cruiser"
                                    className="vehicle-img"
                                />
                                <h3>Cruiser</h3>
                                <p>Comfortable for long-distance rides.</p>
                                <Link to="/booknow">
                                    <button className="btn-primary">
                                        Rent Cruiser
                                    </button>
                                </Link>
                            </div>
                            <div className="vehicle-item">
                                <img
                                    src={scooterImg}
                                    alt="Scooter"
                                    className="vehicle-img"
                                />
                                <h3>Scooter</h3>
                                <p>Perfect for quick and easy city rides.</p>
                                <Link to="/booknow">
                                    <button className="btn-primary">
                                        Rent Scooter
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Bicycles Section */}
                    <div className="vehicle-category">
                        <h2>Bicycles</h2>
                        <div className="vehicle-list">
                            <div className="vehicle-item">
                                <img
                                    src={mountainbikeImg}
                                    alt="Mountain Bike"
                                    className="vehicle-img"
                                />
                                <h3>Mountain Bike</h3>
                                <p>Durable and perfect for rough terrains.</p>
                                <Link to="/booknow">
                                    <button className="btn-primary">
                                        Rent Mountain Bike
                                    </button>
                                </Link>
                            </div>
                            <div className="vehicle-item">
                                <img
                                    src={roadbikeImg}
                                    alt="Road Bike"
                                    className="vehicle-img"
                                />
                                <h3>Road Bike</h3>
                                <p>Lightweight and ideal for paved roads.</p>
                                <Link to="/booknow">
                                    <button className="btn-primary">
                                        Rent Road Bike
                                    </button>
                                </Link>
                            </div>
                            <div className="vehicle-item">
                                <img
                                    src={hybridbikeImg}
                                    alt="Hybrid Bike"
                                    className="vehicle-img"
                                />
                                <h3>Hybrid Bike</h3>
                                <p>
                                    Versatile and great for both city and
                                    trails.
                                </p>
                                <Link to="/booknow">
                                    <button className="btn-primary">
                                        Rent Hybrid Bike
                                    </button>
                                </Link>
                            </div>
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
                            {/* Using React Icons for social media */}
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
        </div>
    );
=======
        <div className="vehicle-categories">
          {Object.entries(vehicleData).map(([category, vehicles]) => (
            <div className="vehicle-category" key={category}>
              <h2>{category}</h2>
              <div className="vehicle-list">
                {vehicles.map((vehicle, index) => (
                  <div className="vehicle-item" key={`${category}-${index}`}>
                    <img src={vehicle.img} alt={vehicle.title} className="vehicle-img" />
                    <h3>{vehicle.title}</h3>
                    <p>{vehicle.description}</p>
                    <Link to="/booknow">
                      <button className="btn-primary">Rent {vehicle.title}</button>
                    </Link>
                  </div>
                ))}
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
>>>>>>> e275ff9773fbe45ff1fa26c6b3818e0ce430b494
}

export default Vehicle;
