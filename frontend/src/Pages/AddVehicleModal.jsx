import { useState } from "react";
import axios from "axios";

const AddVehicleModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        available: true,
        rentalPricePerDay: "",
        location: "",
    });

    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle file change
    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    // Submit form data
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!image) return alert("Please select an image");

        const data = new FormData();
        data.append("name", formData.name);
        data.append("category", formData.category);
        data.append("available", formData.available);
        data.append("rentalPricePerDay", formData.rentalPricePerDay);
        data.append("location", formData.location);
        data.append("owner", "yourUserId"); // Replace with actual user ID
        data.append("vehicleImage", image); // Append file

        const accessToken = localStorage.getItem("accessToken");

        try {
            setLoading(true);
            const response = await axios.post(
                "http://localhost:5000/api/v1/products/add",
                data,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "multipart/form-data", // Allow file uploads
                    },
                }
            );

            alert("Vehicle added successfully!");
            console.log(response.data);
            onClose(); // Close modal after submission
        } catch (error) {
            console.error("Error adding vehicle:", error);
            alert("Failed to add vehicle.");
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                {/* Close Button */}
                <button
                    className="absolute top-2 right-3 text-gray-600"
                    onClick={onClose}
                >
                    ❌
                </button>

                <h2 className="text-xl font-bold mb-4">Add Vehicle</h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-3"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Vehicle Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />

                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />

                    <input
                        type="number"
                        name="rentalPricePerDay"
                        placeholder="Rental Price Per Day"
                        value={formData.rentalPricePerDay}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />

                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />

                    <label className="block">
                        <span>Vehicle Image</span>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="mt-1 w-full"
                            required
                        />
                    </label>

                    {/* Buttons */}
                    <div className="flex justify-end space-x-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-4 py-2 bg-blue-600 text-white rounded"
                        >
                            {loading ? "Adding..." : "Add Vehicle"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddVehicleModal;
