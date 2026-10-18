import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    PhoneNo: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log("formData",formData);
  



  const [loading, setLoading] = useState(false);

  // ============================
  // Handle Input Change
  // ============================
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("e.target.value",e.target.value);
    console.log("e.target.name",e.target.name);
    

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://api.time4hobbies.in/api/user/register",
        {
          name: formData.name,
          PhoneNo: formData.PhoneNo,
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Register Response:", response.data);

      if (response.data.success) {
        alert(response.data.message || "Registration successful");

        // Login page par redirect
        navigate("/login");
      } else {
        alert(response.data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Register Error:", error);

      alert(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center mt-32">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8">

        <form
          className="max-w-md mx-auto"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center font-bold text-2xl">
            Register
          </h1>

          {/* Name */}
          <div className="relative z-0 w-full mb-5 group mt-10">

            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              placeholder=" "
              required
            />

            <label
              htmlFor="name"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full Name
            </label>

          </div>

          {/* Email */}
          <div className="relative z-0 w-full mb-5 group">

            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              placeholder=" "
              required
            />

            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>

          </div>

          {/* Password */}
          <div className="relative z-0 w-full mb-5 group">

            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              placeholder=" "
              required
            />

            <label
              htmlFor="password"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>

          </div>

          {/* Confirm Password */}
          <div className="relative z-0 w-full mb-5 group">

            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              placeholder=" "
              required
            />

            <label
              htmlFor="confirmPassword"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm password
            </label>

          </div>

          {/* PhoneNo */}
          <div className="relative z-0 w-full mb-5 group">

            <input
              type="tel"
              name="PhoneNo"
              id="PhoneNo"
              value={formData.PhoneNo}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              placeholder=" "
              required
            />

            <label
              htmlFor="PhoneNo"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              PhoneNo number
            </label>

          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 shadow font-medium rounded-lg text-sm px-4 py-2.5 focus:outline-none disabled:opacity-50"
          >
            {loading ? "Registering..." : "Submit"}
          </button>

          {/* Login Link */}
          <p className="text-center mt-5 text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Register;