import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import blurImage from "../img/b2.jpg"; // Ensure the path is correct and matches your folder structure

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            password: e.target.password.value,
        };
        // console.log(formData);
        

        try {
            // Mock API call using Axios
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/v1/users/register`,
                formData
            );
            console.log(response.data);

            if (response.data.statusCode === 200) {
                toast.success("Registration successful!");
                // Redirect to login page after successful registration
                navigate("/login");
            }
        } catch (error) {
            toast.error("Registration failed. Please try again.");
        }
    };

    return (
        <div
            className="flex items-center justify-center min-h-[70vh] mt-12"
            style={{
                backgroundImage: `url(${blurImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="w-full max-w-md p-6 mt-16 space-y-6 bg-gradient-to-br from-indigo-600 to-pink-600 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105">
                <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-6 animate__animated animate__fadeInUp">
                    Create Your Account
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    <div className="mb-6">
                        <label className="block text-lg font-medium text-white">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="w-full px-4 py-3 mt-1 border-none rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 transform hover:scale-105 hover:ring-2 hover:ring-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-lg font-medium text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-4 py-3 mt-1 border-none rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 transform hover:scale-105 hover:ring-2 hover:ring-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-lg font-medium text-white">
                            Phone
                        </label>
                        <input
                            type="text"
                            name="phone"
                            className="w-full px-4 py-3 mt-1 border-none rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 transform hover:scale-105 hover:ring-2 hover:ring-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-lg font-medium text-white">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="w-full px-4 py-3 mt-1 border-none rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 transform hover:scale-105 hover:ring-2 hover:ring-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:scale-105 transition-transform duration-300"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center text-white text-lg mt-6">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-yellow-400 hover:text-yellow-500 hover:underline transition-all duration-300"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
