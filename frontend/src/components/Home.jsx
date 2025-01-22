import React, { useState, useEffect } from "react";
import { FaCity } from "react-icons/fa";
import blurImage from "../assets/images/bg.jpeg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VEHICLE_DATA = [
    {
        id: 1,
        name: "VW Golf 6",
        brand: "Volkswagen",
        category: "Hatchback",
        rentPerDay: 450,
        image: "../src/assets/images/golf.jpg",
    },
    {
        id: 2,
        name: "Toyota Fortuner",
        brand: "Toyota",
        category: "SUV",
        rentPerDay: 750,
        image: "../src/assets/images/fortuner.jpg",
    },
    {
        id: 3,
        name: "Honda City",
        brand: "Honda",
        category: "Sedan",
        rentPerDay: 500,
        image: "../src/assets/images/city.jpg",
    },
    {
        id: 4,
        name: "Lamborghini Aventador",
        brand: "Lamborghini",
        category: "Rocket",
        rentPerDay: 9999,
        image: "../src/assets/images/lambo.jpg",
    },
    {
        id: 5,
        name: "Mercedes-Benz GLK",
        brand: "Mercedes-Benz",
        category: "SUV",
        rentPerDay: 5999,
        image: "../src/assets/images/gls.jpg",
    },
    {
        id: 6,
        name: "Boattail",
        brand: "Rolls Royce",
        category: "Luxury",
        rentPerDay: 99999,
        image: "../src/assets/images/boattail.jpg",
    },
    {
        id: 7,
        name: "Ford Mustang",
        brand: "Ford",
        category: "Sports",
        rentPerDay: 10000,
        image: "../src/assets/images/mastang.jpg",
    },
    {
        id: 8,
        name: "Velar",
        brand: "Range Rover",
        category: "Sports",
        rentPerDay: 9950,
        image: "../src/assets/images/velar.jpg",
    },
    {
        id: 9,
        name: "Ghost",
        brand: "Rolls Royce",
        category: "Luxury",
        rentPerDay: 99999,
        image: "../src/assets/images/ghost.jpg",
    },
];

const Home = () => {
    const [vehicles, setVehicles] = useState([]);
    const [searchCriteria, setSearchCriteria] = useState({
        city: "Pune",
        bookingType: "Daily",
        pickupDate: "",
        pickupTime: "",
        dropDate: "",
        dropTime: "",
    });
    const [products1, setProducts1] = useState([]);

    const navigate = useNavigate();

    const apiUrl = "http://192.168.1.8:5000/api/v1/product/get-products";

    const getProduct = async () => {
        try {
            const { data } = await axios.get(apiUrl);
            console.log(data.products);
            setProducts1(data.products);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    const handleChange = (e) => {
        setSearchCriteria({
            ...searchCriteria,
            [e.target.name]: e.target.value,
        });
    };

    const findVehicles = async () => {
        try {
            const location = searchCriteria.city;
            const response = await axios.get(
                "http://localhost:5000/api/v1/products/getByLocation",
                {
                    params: { location },
                }
            );
            console.log(response.data);

            setVehicles(response.data.data);
        } catch (error) {
            console.error("Failed to fetch vehicle data:", error);
        }
    };

    const bookVehicle = (vehicle) => {
        alert(`You selected ${vehicle.name}. Proceed to booking & payment.`);
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center relative"
            style={{
                backgroundImage: `url(${blurImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative z-10 text-white text-center p-8">
                <h1 className="text-4xl font-extrabold mb-2">
                    <span className="text-blue-400">Rent</span>Vehicle
                </h1>
                <p className="text-sm italic">
                    Customer safety is our Priority..
                </p>

                <h2 className="text-5xl font-bold mt-6">ASSURED RENTALS</h2>
                <p className="text-lg mt-4">
                    Rent from India's Largest Fleet of Vehicles, Trusted by
                    Customers
                </p>

                <div className="bg-white bg-opacity-90 text-gray-900 p-6 rounded-lg mt-10 shadow-lg">
                    <h3 className="text-2xl font-bold mb-4">Book Your Ride</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">
                                City
                            </label>
                            <div className="flex items-center space-x-2">
                                <FaCity />
                                <select
                                    name="city"
                                    className="w-full px-4 py-2 rounded-md border border-gray-300"
                                    value={searchCriteria.city}
                                    onChange={handleChange}
                                >
                                    <option value="Pune">Pune</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Chh.Sambhajinagar">
                                        Chh.Sambhajinagar
                                    </option>
                                </select>
                            </div>
                        </div>
                        {/* Additional inputs */}
                    </div>
                    <button
                        onClick={findVehicles}
                        className="px-6 py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition mt-6"
                    >
                        Find Vehicle
                    </button>
                </div>

                {vehicles.length > 0 && (
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
                                        Price :{car.rentalPricePerDay}/hr
                                    </p>
                                    <p className="text-lg text-gray-600 mt-2">
                                        {car.location}
                                    </p>
                                    <p className="text-lg text-gray-600 mt-2">
                                        {car.available
                                            ? "Available"
                                            : "Not Available"}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
