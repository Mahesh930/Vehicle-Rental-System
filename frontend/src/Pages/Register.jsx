import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Mock form data for now
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };
        // console.log(formData);

        try {
            // Mock API call using Axios
            const response = await axios.post(
                "http://localhost:5000/api/v1/users/register",
                formData
            );
            console.log(response);

            if (response.data.statusCode === 200) {
                toast.success("Registration successful!");
                // Redirect to login page after successful registration
                navigate("/login");
            }
        } catch (error) {
            if (response.data.statusCode === 409) {
                toast.error("User already exists");
            }
            toast.error("Registration failed. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
            <div className="w-full max-w-md p-8 space-y-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105">
                <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                    Create Account
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="w-full px-4 py-2 mt-1 border-none rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-4 py-2 mt-1 border-none rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="w-full px-4 py-2 mt-1 border-none rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-3 text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg shadow-md hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:scale-105 transition-transform duration-300"
                    >
                        Register
                    </button>
                </form>
                <p className="text-sm text-center text-gray-400">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-purple-400 hover:text-purple-500 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
