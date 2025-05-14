import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext
import { Link } from "react-router-dom"; // Import Link for navigation
import axios from "axios"; // Import axios for API requests
import { GoogleLogin } from "@react-oauth/google";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/auth/login`,
        {
          email,
          password,
        }
      );
      login(response.data.user, response.data.token);

      const { token } = response.data;

      if (token) {
        const userData = { email, token }; // add more fields if needed
        login(response.data.user, response.data.token);
        // Save to context and localStorage
        navigate("/"); // Redirect after login
      } else {
        console.log("Login failed: No token received");
      }
    } catch (err) {
      console.error(
        "Login failed:",
        err.response?.data?.message || err.message
      );
    }
  };

  const handleGoogleLogin = async (response) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/google`,
        {
          token: response.credential,
        }
      );
  
      const { token, user } = res.data;
  
      // Save to context (and localStorage if not already done in context)
      login(user, token);
  
      console.log("Google Login Successful:", res.data);
      navigate("/");
    } catch (err) {
      console.error("Google Login Error:", err.response?.data || err.message);
    }
  };
  

  return (
    <div className="max-w-md mx-auto mt-10 p-10 bg-white shadow-lg rounded-lg dark:bg-gray-900 dark:border border border-[#6366f1] dark:hover:shadow-blue-800 dark:shadow-md ">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200  ">
          Welcome Back
        </h2>
        <p className="text-gray-500 mt-2">Please sign in to your account</p>
      </div>

      <form onSubmit={handleLogin}>
        <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
          Email Address
        </label>
        <input
          type="email"
          className="block w-full pl-10 mb-4 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent  "
          placeholder="Enter your email"
          // className="w-full mb-4 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300 ">
          Password
        </label>
        <input
          type="password"
          className="block w-full pl-10 pr-3 py-2 mb-8 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full  text-white p-2 rounded hover:bg-indigo-600 bg-indigo-500 shadow-lg shadow-indigo-500/50 "
        >
          Login
        </button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center mb-4 ">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex mb-6 justify-center text-sm">
          <span className="px-2 bg-white text-gray-500"></span>
        </div>
        <p className="  text-center text-sm text-gray-500 p-2 ">
          Don't have an account?
          <Link
            to="/register"
            // data-readdy="true"
            className="font-medium text-primary hover:text-secondary ml-2 hover:text-blue-700 text-violet-400"
          >
            Sign up
          </Link>
        </p>
        <div className="relative mt-4">
  <div className="absolute inset-0 flex items-center">
    <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
  </div>
  <div className="relative flex justify-center text-sm">
    <span className="bg-white px-2 text-gray-500 dark:bg-gray-900">or</span>
  </div>
</div>

<div className="mt-6">
  <GoogleLogin
    onSuccess={handleGoogleLogin}
    onError={(error) => console.error("Google Login Error:", error)}
    useOneTap
  />
</div>

      </div>
    </div>
  );
};

export default Login;
