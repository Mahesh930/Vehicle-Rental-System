import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Correct import of useNavigate
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // useNavigate properly initialized

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Email:", email);
    // console.log("Password:", password);
    //send data to backend
    
    try {
      const loginData = { email, password }; // Corrected variable name
      const response = await axios.post(
        "http://localhost:5000/api/v1/users/login",
        loginData
      );
      toast.success("Login successful!");
      console.log("User data:", response.data);

      // navigate("/register");
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer autoClose={2000} theme="dark"/>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't Have Account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Register
          </Link>{" "}
          {/* Fixed route path */}
        </p>
      </div>
    </div>
  );
};

export default Login;
