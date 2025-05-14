import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await axios.post(`${API_BASE_URL}/api/auth/register`, {
        name,
        email,
        password,
      });

      console.log("User Registered:", res.data);
      alert("Registration successful! Please log in.");
      navigate("/login"); // Redirect to login page
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
      console.error("Registration Error:", err.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async (response) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/google`
, {
        token: response.credential,
      });
      const { token, user } = res.data;

      // Save token and user info
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      
  
      

    // If using context:
    console.log("Google Login Successful:", res.data);

      alert("Google Registration successful!");
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Google registration failed.");
      console.error("Google Registration Error:", err.response?.data);
    }
  };
  console.log(import.meta.env.VITE_APP_GOOGLE_CLIENT_ID);


  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-10 bg-white shadow-lg rounded-lg dark:bg-gray-900 dark:border border border-[#6366f1] dark:hover:shadow-blue-800 dark:shadow-md ">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mt-2 mb-8">
            Register
          </h2>
          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleRegister} className="space-y-4">
            <label className="text-left ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="block w-full pl-10 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <label className="text-left ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full pl-10 mb-4 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <label className="text-left ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full pl-10 mb-4 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              type="submit"
              className="w-full p bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
          <div>
            <p className="text-center mt-5">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Log in
              </a>
            </p>
          </div>

          {/* Google Login Button */}
          <div className="mt-4
          ">
            <GoogleLogin 
              onSuccess={handleGoogleLogin}
              onError={(error) => console.error("Google Login Error:", error)}
              useOneTap
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
