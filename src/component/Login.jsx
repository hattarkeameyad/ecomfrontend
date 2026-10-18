import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // ============================
  // Handle Input Change
  // ============================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ============================
  // Login API
  // ============================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

  const response = await axios.post(
  "http://api.time4hobbies.in/api/user/login",
  {
    email: formData.email,
    password: formData.password,
  },
  {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  }
);

      console.log("Login Response:", response.data);

      if (response.data.success) {
        alert(response.data.message || "Login successful");

        // Home page par redirect
        navigate("/");
      } else {
        alert(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login Error:", error);

      alert(
        error.response?.data?.message ||
          "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center mt-20">

      <div className="w-full max-w-lg bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8">

        <form
          className="max-w-sm mx-auto mt-10"
          onSubmit={handleSubmit}
        >

          <h1 className="text-center font-bold text-2xl mb-10">
            Login
          </h1>

          {/* Email */}
          <div className="mb-5">

            <label
              htmlFor="email"
              className="block mb-2.5 text-sm font-medium text-gray-700"
            >
              Your email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 shadow-sm"
              placeholder="name@example.com"
              required
            />

          </div>

          {/* Password */}
          <div className="mb-5">

            <label
              htmlFor="password"
              className="block mb-2.5 text-sm font-medium text-gray-700"
            >
              Your password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 shadow-sm"
              placeholder="••••••••"
              required
            />

          </div>

          {/* Remember Me */}
          <div className="flex items-start mb-5">

            <label
              htmlFor="remember"
              className="flex items-center h-5"
            >

              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded"
              />

              <p className="ms-2 text-sm font-medium text-gray-700">
                Remember me
              </p>

            </label>

          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 focus:outline-none disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Submit"}
          </button>

          {/* Register Link */}
          <p className="text-center mt-5 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>

        </form>

      </div>
    </div>
  );
};

export default Login;