"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
  _id: string;
  title: string;
  price: number;
  currency: string;
  images: string[];
};

export default function ProductsGrid({ products }: { products: Product[] }) {
  const [showMore, setShowMore] = useState(false);

  const visibleCount = showMore
    ? products.length
    : Math.min(12, products.length);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {products.slice(0, visibleCount).map((product) => (
          <Link
            key={product._id}
            href={`/product/${product._id}`}
            className="group cursor-pointer"
          >
            <div className="relative bg-gray-100 rounded p-4 mx-auto w-full aspect-square flex items-center justify-center">
              {product.images && product.images[0] ? (
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              ) : (
                <div className="w-full h-24 bg-gray-200 flex items-center justify-center">
                  No Image
                </div>
              )}

              <button className="absolute left-0 right-0 bottom-0 bg-black text-white text-sm py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add To Basket
              </button>
            </div>

            <h4 className="mt-3 font-semibold text-sm">{product.title}</h4>
            <p className="text-red-500 font-bold text-sm">
              {product.currency}
              {product.price}
            </p>
          </Link>
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
    </>
  );
}
