import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles

const UserBookingDetails = () => {
    const navigate = useNavigate();
    const [searchCriteria, setSearchCriteria] = useState({
        bookingType: "Daily",
        pickupDate: null, // Change to null for DatePicker
        pickupTime: "",
        dropDate: null, // Change to null for DatePicker
        dropTime: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchCriteria({ ...searchCriteria, [name]: value });
    };

    const handleConfirmBooking = () => {
        navigate("/payment");
    };

    return (
        <div className="min-h-screen bg-gray-100 mt-24">
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold text-center text-blue-600">
                    User Booking Details
                </h1>
                <p className="text-center text-gray-700 mt-2">
                    Review and confirm your booking details below.
                </p>

                <div className="bg-white rounded-lg shadow-lg p-6 mt-8 max-w-4xl mx-auto">
                    <h2 className="text-xl font-semibold mb-4">
                        Booking Information
                    </h2>

                    {/* Booking Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Pickup Date */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">
                                Pickup Date
                            </label>
                            <DatePicker
                                selected={searchCriteria.pickupDate}
                                onChange={(date) =>
                                    setSearchCriteria({
                                        ...searchCriteria,
                                        pickupDate: date,
                                    })
                                }
                                dateFormat="dd-MM-yyyy"
                                className="w-full px-4 py-2 rounded-md border border-gray-300"
                                placeholderText="Select pickup date"
                            />
                        </div>

                        {/* Pickup Time */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">
                                Pickup Time (HH:MM)
                            </label>
                            <input
                                type="time"
                                name="pickupTime"
                                className="w-full px-4 py-2 rounded-md border border-gray-300"
                                value={searchCriteria.pickupTime}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Drop Date */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">
                                Drop Date
                            </label>
                            <DatePicker
                                selected={searchCriteria.dropDate}
                                onChange={(date) =>
                                    setSearchCriteria({
                                        ...searchCriteria,
                                        dropDate: date,
                                    })
                                }
                                dateFormat="dd-MM-yyyy"
                                className="w-full px-4 py-2 rounded-md border border-gray-300"
                                placeholderText="Select drop date"
                            />
                        </div>

                        {/* Drop Time */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">
                                Drop Time (HH:MM)
                            </label>
                            <input
                                type="time"
                                name="dropTime"
                                className="w-full px-4 py-2 rounded-md border border-gray-300"
                                value={searchCriteria.dropTime}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Confirm Button */}
                    <div className="mt-6 text-center">
                        <button
                            onClick={handleConfirmBooking}
                            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition"
                        >
                            Confirm Booking
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserBookingDetails;
