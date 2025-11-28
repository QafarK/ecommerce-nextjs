// pages/product/[id].tsx
"use client";
// pages/product/[id].tsx
import { useState } from "react";
import { useRouter } from "next/router";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [selectedImage, setSelectedImage] = useState("/blank.png");

  const thumbnails = ["/blank.png", "/blank.png", "/blank.png", "/blank.png"];

  return (
    <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-10">

      {/* LEFT SECTION */}
      <div className="flex gap-4">

        {/* Thumbnails (sol vertical) */}
        <div className="flex flex-col gap-4">
          {thumbnails.map((src, index) => (
            <img
              key={index}
              src={src}
              onClick={() => setSelectedImage(src)}
              className="w-20 h-20 cursor-pointer border rounded-lg object-contain hover:opacity-80"
            />
          ))}
        </div>

        {/* Main image */}
        <div className="flex-1">
          <img
            src={selectedImage}
            className="w-full h-[420px] object-contain border rounded-lg"
          />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">
          Havic HV G-92 Gamepad
        </h1>

        <p className="text-green-600 font-medium">In Stock</p>

        <p className="text-xl font-semibold">$192.00</p>

        <p className="text-gray-600">
          PlayStation 5 Controller Skin. High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal.
        </p>

        {/* Quantity + Add button */}
        <div className="flex items-center gap-3 mt-4">
          <button className="border px-3 py-1">-</button>
          <span>1</span>
          <button className="border px-3 py-1">+</button>

          <button className="ml-4 bg-red-600 text-white px-5 py-2">
            Add to Basket
          </button>
        </div>

        {/* Delivery info */}
        <div className="mt-6 flex flex-col gap-3 text-gray-700">
          <div className="flex gap-2">
            <span className="material-icons">local_shipping</span>
            Free Delivery – Enter your postal code for delivery availability
          </div>

          <div className="flex gap-2">
            <span className="material-icons">assignment_return</span>
            Free 30 Days Returns
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductPage;
