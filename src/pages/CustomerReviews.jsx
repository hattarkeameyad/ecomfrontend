import React from "react";
import { FiStar, FiCheckCircle } from "react-icons/fi";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review:
      "Absolutely loved the quality! The delivery was quick and the product looks even better than the pictures.",
    date: "2 Days Ago",
  },
  {
    id: 2,
    name: "Priya Verma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "Premium quality with beautiful packaging. Customer support was very helpful. Highly recommended!",
    date: "5 Days Ago",
  },
  {
    id: 3,
    name: "Aman Singh",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 4,
    review:
      "Comfortable product and exactly as described. Will definitely order again.",
    date: "1 Week Ago",
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-indigo-600 uppercase tracking-[4px] font-semibold">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold mt-4">
            What Our Customers Say
          </h2>

          <p className="text-gray-500 mt-5 leading-8">
            Thousands of happy customers trust us for quality products,
            secure shopping and fast delivery.
          </p>

        </div>

        {/* Rating */}

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-14">

          <div className="bg-white rounded-3xl shadow-lg px-10 py-8 text-center">

            <h2 className="text-6xl font-extrabold text-indigo-600">
              4.9
            </h2>

            <div className="flex justify-center text-yellow-400 mt-3">

              {[1,2,3,4,5].map((i)=>(
                <FiStar key={i} fill="currentColor"/>
              ))}

            </div>

            <p className="text-gray-500 mt-3">
              Based on 12,500+ Reviews
            </p>

          </div>

        </div>

        {/* Review Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {reviews.map((review)=>(
            <div
              key={review.id}
              className="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition duration-300 p-8"
            >

              {/* User */}

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <div>

                    <h3 className="font-bold text-lg">
                      {review.name}
                    </h3>

                    <div className="flex items-center gap-2 text-green-600 text-sm mt-1">

                      <FiCheckCircle />

                      Verified Purchase

                    </div>

                  </div>

                </div>

                <span className="text-sm text-gray-400">
                  {review.date}
                </span>

              </div>

              {/* Stars */}

              <div className="flex text-yellow-400 mt-6">

                {[...Array(review.rating)].map((_,index)=>(
                  <FiStar key={index} fill="currentColor"/>
                ))}

              </div>

              {/* Review */}

              <p className="text-gray-600 mt-5 leading-8">
                "{review.review}"
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CustomerReviews;