import axios from "axios";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

const Profile = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleLogout = async () => {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            alert("No access token found. You're already logged out.");
            return;
        }
        // localStorage.removeItem("accessToken");
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/v1/users/logout`,
                {}, // Empty request body
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`, // Send the token in the Authorization header
                    },
                }
            );

            if (response.data.statusCode === 200) {
                // Clear tokens from localStorage
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");

                alert("You have been logged out successfully!");

                // Redirect the user to the login page
                window.location.href = "/login";
            } else {
                alert("Logout failed. Please try again.");
            }
        } catch (error) {
            console.error("Logout error:", error);
            alert("An error occurred while logging out.");
        }
    };

    return (
        <div className="relative">
            {/* Profile Icon */}
            <button
                onClick={toggleDropdown}
                className="btn btn-ghost btn-circle avatar"
            >
                <div className="w-10 rounded-full">
                    {user?.photoURL ? (
                        <img
                            alt="Profile"
                            src={user.photoURL}
                        />
                    ) : (
                        <FaUser style={{ fontSize: "38px" }} />
                    )}
                </div>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                    <ul className="py-1">
                        <li>
                            <a
                                href="/update-profile"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Profile
                            </a>
                        </li>

                        {/* <li>
                            <a
                                href="/settings"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Settings
                            </a>
                        </li> */}
                        <li>
                            <button
                                onClick={handleLogout}
                                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Profile;
