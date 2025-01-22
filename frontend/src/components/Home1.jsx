import React from "react";
import { Link } from "react-router-dom";
import blurImage from "../assets/images/mainblur.jpg";
import AboutUs from "../pages/About";
import PopularCars from "../pages/CarList";
import Testimonials from "../pages/Testimonal";
import Blog from "../pages/Blog";

const Home1 = () => {
  return (
    
    <div>
      {/* Main Section with Sliding Background Image */}
      <div
        className="min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${blurImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          animation: "slideBackground 20s infinite linear", // Apply sliding animation
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          {/* Content */}
          <div className="relative z-10 text-white text-center p-5 max-w-3xl mx-auto">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight tracking-wide" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span className="text-blue-400">Rent</span>Vehicle
            </h1>
            <p className="text-lg mt-6 leading-relaxed font-bold" style={{ fontFamily: 'revert-layer', lineHeight: '1.8', paddingTop: '10px', fontSize: '20px' }}>
              Welcome to RentVehicle, your trusted platform for renting vehicles anytime, anywhere. We offer a wide range of vehicles to meet your travel needs, ensuring convenience, quality service, and a seamless booking experience.
            </p>

            {/* Book a Ride Button */}
            <Link
              to="/home"
              className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              Book a Ride
            </Link>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-white">
        <AboutUs />
      </div>
      <div className="bg-white">
        <PopularCars />
      </div>
      <div className="bg-white">
        <Testimonials />
      </div>

      <div className="bg-white">
        <Blog />
      </div>
    </div>
  );
};

export default Home1;

