import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FiPackage,
  FiCheckCircle,
  FiClock,
  FiXCircle,
  FiTruck,
  FiCreditCard,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ==========================================
  // Get User Orders
  // ==========================================
  const getOrders = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        "http://api.time4hobbies.in/api/orders/getOrderByUserId",
        {
          withCredentials: true,
        }
      );

      console.log("Orders Response:", response.data);

      if (response.data.success) {
        setOrders(response.data.orders || []);
      } else {
        setOrders([]);
        setError(response.data.message || "No orders found");
      }
    } catch (error) {
      console.error("Get Orders Error:", error);

      if (error.response?.status === 401) {
        setError("Please login to view your orders.");
      } else if (error.response?.status === 404) {
        setOrders([]);
        setError("You have not placed any orders yet.");
      } else {
        setError(
          error.response?.data?.message ||
            "Something went wrong while loading orders."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // API Call
  // ==========================================
  useEffect(() => {
    getOrders();
  }, []);

  // ==========================================
  // Order Status Icon
  // ==========================================
  const getStatusIcon = (status) => {
    switch (status) {
      case "Confirmed":
        return <FiCheckCircle />;

      case "Pending":
        return <FiClock />;

      case "Shipped":
        return <FiTruck />;

      case "Cancelled":
        return <FiXCircle />;

      case "Delivered":
        return <FiCheckCircle />;

      default:
        return <FiPackage />;
    }
  };

  // ==========================================
  // Order Status Color
  // ==========================================
  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-blue-100 text-blue-600";

      case "Pending":
        return "bg-yellow-100 text-yellow-600";

      case "Shipped":
        return "bg-purple-100 text-purple-600";

      case "Delivered":
        return "bg-green-100 text-green-600";

      case "Cancelled":
        return "bg-red-100 text-red-600";

      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  // ==========================================
  // Loading
  // ==========================================
  if (loading) {
    return (
      <section className="min-h-screen bg-slate-50 pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="animate-pulse">

            <div className="h-10 bg-gray-200 rounded-lg w-48 mb-4"></div>

            <div className="h-5 bg-gray-200 rounded-lg w-72 mb-10"></div>

            <div className="bg-white rounded-3xl p-6 mb-6">
              <div className="h-6 bg-gray-200 rounded w-40 mb-5"></div>

              <div className="grid md:grid-cols-3 gap-5">
                <div className="h-24 bg-gray-200 rounded-2xl"></div>
                <div className="h-24 bg-gray-200 rounded-2xl"></div>
                <div className="h-24 bg-gray-200 rounded-2xl"></div>
              </div>
            </div>

          </div>

        </div>
      </section>
    );
  }

  // ==========================================
  // Login Required
  // ==========================================
  if (error === "Please login to view your orders.") {
    return (
      <section className="min-h-screen bg-slate-50 pt-36 pb-20">

        <div className="max-w-xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">

            <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto">
              <FiPackage size={36} />
            </div>

            <h2 className="text-2xl font-bold mt-6">
              Login Required
            </h2>

            <p className="text-gray-500 mt-3">
              Please login to view your orders.
            </p>

            <Link to="/login">
              <button className="mt-7 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold">
                Login
              </button>
            </Link>

          </div>

        </div>

      </section>
    );
  }

  // ==========================================
  // No Orders
  // ==========================================
  if (orders.length === 0) {
    return (
      <section className="min-h-screen bg-slate-50 pt-36 pb-20">

        <div className="max-w-xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">

            <div className="w-24 h-24 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center mx-auto">
              <FiPackage size={40} />
            </div>

            <h2 className="text-3xl font-bold mt-6">
              No Orders Yet
            </h2>

            <p className="text-gray-500 mt-3">
              You haven't placed any orders yet.
            </p>

            <Link to="/FeaturedProducts">
              <button className="mt-7 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold">
                Start Shopping
              </button>
            </Link>

          </div>

        </div>

      </section>
    );
  }

  // ==========================================
  // Orders Page
  // ==========================================
  return (
    <section className="min-h-screen bg-slate-50 pt-36 pb-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* ================================
            Header
        ================================= */}
        <div className="mb-10">

          <span className="text-indigo-600 uppercase font-semibold tracking-widest text-sm">
            My Account
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            My Orders
          </h1>

          <p className="text-gray-500 mt-3">
            Track and manage your recent orders.
          </p>

        </div>

        {/* ================================
            Order Summary
        ================================= */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                <FiPackage size={24} />
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Total Orders
                </p>

                <h3 className="text-2xl font-bold">
                  {orders.length}
                </h3>
              </div>

            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                <FiCheckCircle size={24} />
              </div>

              <div>

                <p className="text-gray-500 text-sm">
                  Confirmed
                </p>

                <h3 className="text-2xl font-bold">
                  {
                    orders.filter(
                      (order) =>
                        order.orderStatus === "Confirmed"
                    ).length
                  }
                </h3>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center">
                <FiClock size={24} />
              </div>

              <div>

                <p className="text-gray-500 text-sm">
                  Pending
                </p>

                <h3 className="text-2xl font-bold">
                  {
                    orders.filter(
                      (order) =>
                        order.orderStatus === "Pending"
                    ).length
                  }
                </h3>

              </div>

            </div>

          </div>

        </div>

        {/* ================================
            Orders
        ================================= */}
        <div className="space-y-6">

          {orders.map((order) => (

            <div
              key={order._id}
              className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >

              {/* Order Header */}
              <div className="border-b border-gray-100 px-6 py-5">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                  <div>

                    <p className="text-sm text-gray-500">
                      Order ID
                    </p>

                    <h3 className="font-bold text-gray-900">
                      #{order._id}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(
                        order.createdAt
                      ).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>

                  </div>

                  {/* Status */}
                  <div
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm ${getStatusColor(
                      order.orderStatus
                    )}`}
                  >
                    {getStatusIcon(order.orderStatus)}

                    {order.orderStatus}
                  </div>

                </div>

              </div>

              {/* Order Items */}
              <div className="p-6">

                <div className="space-y-5">

                  {order.items?.map((item) => {

                    const product = item.productId;

                    return (
                      <div
                        key={item._id}
                        className="flex flex-col sm:flex-row gap-5 border-b border-gray-100 pb-5 last:border-b-0 last:pb-0"
                      >

                        {/* Product Image */}
                        <div className="w-full sm:w-28 h-28 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0">

                          <img
                            src={
                              product?.productImage ||
                              "https://via.placeholder.com/300"
                            }
                            alt={
                              product?.productName ||
                              "Product"
                            }
                            className="w-full h-full object-cover"
                          />

                        </div>

                        {/* Product Info */}
                        <div className="flex-1">

                          <p className="text-sm text-gray-500">
                            Product
                          </p>

                          <h3 className="text-xl font-bold mt-1">
                            {product?.productName ||
                              "Product unavailable"}
                          </h3>

                          <div className="flex flex-wrap gap-5 mt-3 text-sm">

                            <p className="text-gray-500">
                              Quantity:
                              <span className="font-semibold text-gray-900 ml-2">
                                {item.quantity}
                              </span>
                            </p>

                            <p className="text-gray-500">
                              Price:
                              <span className="font-semibold text-gray-900 ml-2">
                                ₹
                                {Number(
                                  product?.productPrice || 0
                                ).toLocaleString("en-IN")}
                              </span>
                            </p>

                          </div>

                        </div>

                        {/* Item Total */}
                        <div className="flex sm:flex-col justify-between sm:justify-center items-center sm:items-end">

                          <p className="text-sm text-gray-500">
                            Total
                          </p>

                          <p className="text-xl font-bold text-indigo-600">
                            ₹
                            {(
                              Number(
                                product?.productPrice || 0
                              ) *
                              Number(item.quantity || 0)
                            ).toLocaleString("en-IN")}
                          </p>

                        </div>

                      </div>
                    );
                  })}

                </div>

                {/* ================================
                    Order Footer
                ================================= */}
                <div className="border-t border-gray-100 mt-6 pt-6">

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    {/* Payment */}
                    <div>

                      <p className="text-sm text-gray-500">
                        Payment Mode
                      </p>

                      <div className="flex items-center gap-2 mt-2 font-semibold">
                        <FiCreditCard className="text-indigo-600" />

                        {order.paymentMode}
                      </div>

                    </div>

                    {/* Payment Status */}
                    <div>

                      <p className="text-sm text-gray-500">
                        Payment Status
                      </p>

                      <p
                        className={`mt-2 font-semibold ${
                          order.paymentStatus === "Paid"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {order.paymentStatus}
                      </p>

                    </div>

                    {/* Items */}
                    <div>

                      <p className="text-sm text-gray-500">
                        Items
                      </p>

                      <p className="mt-2 font-semibold">
                        {order.items?.reduce(
                          (total, item) =>
                            total +
                            Number(item.quantity || 0),
                          0
                        )}{" "}
                        item(s)
                      </p>

                    </div>

                    {/* Total */}
                    <div className="lg:text-right">

                      <p className="text-sm text-gray-500">
                        Order Total
                      </p>

                      <p className="text-2xl font-bold text-indigo-600 mt-1">
                        ₹
                        {Number(
                          order.totalAmount || 0
                        ).toLocaleString("en-IN")}
                      </p>

                    </div>

                  </div>

                </div>

                {/* Notes */}
                {order.notes && (
                  <div className="bg-gray-50 rounded-xl p-4 mt-6">

                    <p className="text-sm text-gray-500">
                      Order Note
                    </p>

                    <p className="font-medium mt-1">
                      {order.notes}
                    </p>

                  </div>
                )}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Orders;