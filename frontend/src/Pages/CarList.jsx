import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PopularCars = () => {
    const [cars, setCars] = useState([]);

    const vehicleData = async () => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/v1/products/getVehicles"
            );
            console.log(response.data);
            
            setCars(response.data.data); // Ensure `response.data` contains the correct structure
        } catch (error) {
            console.error("Failed to fetch vehicle data:", error);
        }
    };

    useEffect(() => {
        vehicleData();
    }, []); // Empty dependency array ensures it runs only once on component mount

    return (
        <div className="min-h-screen bg-gray-100 py-16 px-8">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
                Our Popular Cars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cars.map((car, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                        <img
                            src={car.vehicleImage}
                            alt={car.name}
                            className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="p-6 grid grid-cols-2 ">
                            <h3 className="text-2xl font-bold text-gray-800">
                                {car.name}
                            </h3>
                            <p className="text-lg text-gray-600 mt-2">
                                Price : 
                                {car.rentalPricePerDay}/hr
                            </p>
                            <p className="text-lg text-gray-600 mt-2">
                                {car.location}
                            </p>
                            <p className="text-lg text-gray-600 mt-2">
                                {car.available ? "Available" : "Not Available"}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCars;
