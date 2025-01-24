import React, { useState, useEffect } from "react";
import { FaCity } from "react-icons/fa";
import blurImage from "../assets/images/bg.jpeg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";



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
            const location = searchCriteria.city.trim(); // Ensure no trailing spaces
            console.log("Querying location:", location);

            const response = await axios.get(
                "http://localhost:5000/api/v1/products/getByLocation",
                { params: { location } }
            );

            console.log("Fetched Vehicles Data:", response.data.data);

            if (
                Array.isArray(response.data.data) &&
                response.data.data.length > 0
            ) {
                setVehicles(response.data.data);
            } else {
                console.warn("No vehicles found for the given location.");
                setVehicles([]);
            }
        } catch (error) {
            console.error("Failed to fetch vehicle data:", error);
            setVehicles([]); // Reset vehicles on error
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

            <div className="relative z-10 text-white text-center p-8 mt-16">
                <h1 className="text-4xl font-extrabold mb-2">
                    <span className="text-blue-400">Chal</span>Jauu
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                        {vehicles.map((car, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg overflow-hidden h-96"
                            >
                                <img
                                    src={car.vehicleImage}
                                    alt={car.name}
                                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
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
                                <Link
                                to="/book-now"
                                 className="btn px-4 py-2 w-32 bg-blue-500 text-white text-lg rounded-full cursor-pointer hover:bg-blue-700 transition duration-300">
                                    Book Now
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
