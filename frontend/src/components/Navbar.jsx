import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
    FaHome,
    FaInfoCircle,
    FaPhoneAlt,
    FaUser,
    FaBlog,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import logo from "../img/logo.jpeg";
import profileImg from "../img/profile.png"; // Example profile image
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const profileDropdownRef = useRef(null);
    const [user, setUser] = useState();
    const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen((prev) => !prev);
    };

    const handleClickOutside = (e) => {
        if (
            profileDropdownRef.current &&
            !profileDropdownRef.current.contains(e.target)
        ) {
            setIsProfileDropdownOpen(false);
        }
    };

    const handleLogout = async () => {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            alert("No access token found. You're already logged out.");
            return;
        }

        try {
            console.log(
                "Logout request to:",
                `${import.meta.env.VITE_API_URL}/api/v1/users/logout`
            );
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/v1/users/logout`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            console.log("Logout response:", response.data);

            if (response.data.statusCode === 200) {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                localStorage.removeItem("loggedInUser");
                toast.success("Logged out successfully!");
                navigate("/");
                setTimeout(() => {
                    window.location.reload();
                }, 50);
            } else {
                toast.error("Logout failed. Please try again.");
            }
        } catch (error) {
            console.error(
                "Logout error:",
                error.response ? error.response.data : error.message
            );
            toast.error("An error occurred while logging out.");
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("refreshToken");
        setUser(token);

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [localStorage.getItem("refreshToken")]); // Trigger re-render on token change

    return (
        <nav className="bg-gradient-to-r from-purple-800 via-pink-500 to-yellow-500 shadow-lg fixed w-full top-0 z-50">
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
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-16 w-16 mr-2 rounded-full"
                    />
                    <h1 className="text-white text-3xl font-extrabold">
                        Chal<span className="text-yellow-300">Jauu</span>
                    </h1>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8 text-white items-center text-lg">
                    <Link
                        to="/"
                        className="flex items-center text-yellow-200 hover:text-white transition-transform transform hover:scale-110"
                    >
                        <FaHome className="mr-2" /> Home
                    </Link>
                    <Link
                        to="/about"
                        className="flex items-center text-yellow-200 hover:text-white transition-transform transform hover:scale-110"
                    >
                        <FaInfoCircle className="mr-2" /> About Us
                    </Link>
                    <Link
                        to="/blog"
                        className="flex items-center text-yellow-200 hover:text-white transition-transform transform hover:scale-110"
                    >
                        <FaBlog className="mr-2" /> Blog
                    </Link>
                    <Link
                        to="/contact"
                        className="flex items-center text-yellow-200 hover:text-white transition-transform transform hover:scale-110"
                    >
                        <FaPhoneAlt className="mr-2" /> Contact Us
                    </Link>
                </div>

                {/* Profile Icon */}
                <div
                    className="relative flex items-center"
                    ref={profileDropdownRef}
                >
                    {user ? (
                        <>
                            <div
                                className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer border-2 border-white shadow-lg hover:shadow-xl transition-shadow bg-purple-600 text-white font-bold"
                                onClick={toggleProfileDropdown}
                            >
                                {user ? (
                                    JSON.parse(
                                        localStorage.getItem("loggedInUser")
                                    )
                                        ?.name.charAt(0)
                                        .toUpperCase()
                                ) : (
                                    <FaUser />
                                )}
                            </div>
                            {isProfileDropdownOpen && (
                                <div className="absolute top-14 right-0 w-48 bg-gradient-to-r from-purple-600 to-pink-500 border border-gray-300 shadow-lg rounded-lg z-10 text-white">
                                    <Link
                                        to="/profile"
                                        className="block px-4 py-2 hover:bg-purple-700 hover:text-yellow-300 transition"
                                        onClick={() =>
                                            setIsProfileDropdownOpen(false)
                                        }
                                    >
                                        Profile
                                    </Link>
                                    <Link
                                        to="/"
                                        className="block px-4 py-2 hover:bg-purple-700 hover:text-yellow-300 transition"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </Link>
                                </div>
                            )}
                        </>
                    ) : (
                        // <>
                        //     {/* <FaUser /> */}
                        //     <Profile user={user} />
                        // </>
                        <Link
                            to="/login"
                            className="flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                        >
                            <FaUser className="mr-2" /> Login
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-white text-3xl"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gradient-to-r from-purple-800 via-pink-500 to-yellow-500 text-white space-y-4 py-4 px-6">
                    <Link
                        to="/"
                        className="flex items-center hover:text-yellow-300"
                        onClick={toggleMobileMenu}
                    >
                        <FaHome className="mr-2" /> Home
                    </Link>
                    <Link
                        to="/about"
                        className="flex items-center hover:text-yellow-300"
                        onClick={toggleMobileMenu}
                    >
                        <FaInfoCircle className="mr-2" /> About Us
                    </Link>
                    <Link
                        to="/blog"
                        className="flex items-center hover:text-yellow-300"
                        onClick={toggleMobileMenu}
                    >
                        <FaBlog className="mr-2" /> Blog
                    </Link>
                    <Link
                        to="/contact"
                        className="flex items-center hover:text-yellow-300"
                        onClick={toggleMobileMenu}
                    >
                        <FaPhoneAlt className="mr-2" /> Contact Us
                    </Link>
                    <Link
                        to="/login"
                        className="flex items-center px-10 py-2 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105"
                        onClick={toggleMobileMenu}
                    >
                        <FaUser className="mr-2" /> Login
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
