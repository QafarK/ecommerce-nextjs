"use client";
import { useState } from "react";

export default function ProductsSection() {
  const [showMore, setShowMore] = useState(false);

  const products = Array.from({ length: 16 });

  const visibleCount = showMore ? products.length : 8;

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-5 h-10 bg-red-500 rounded"></div>
        <h2 className="text-lg font-semibold text-red-500 pl-2">
          Our Products
        </h2>
      </div>

      <h3 className="text-4xl font-bold mb-11">Explore Our Products</h3>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.slice(0, visibleCount).map((_, idx) => (
          <div key={idx} className="border p-4 rounded-md text-center">
            <div className="h-32 bg-gray-200 mb-2"></div>
            <h4 className="font-semibold">Product {idx + 1}</h4>
            <p className="text-red-500 font-bold">$100</p>
            <button className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
              Add To Basket
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
}
