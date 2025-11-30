"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AddToBasketButton from "./AddToBasketButton";
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
          <div key={product._id} className="group cursor-pointer">
            {/* IMAGE + ADD TO BASKET */}
            <div className="relative bg-gray-100 rounded p-4 w-full aspect-square flex items-center justify-center">
              {/* CLICK → PRODUCT PAGE */}
              <Link
                href={`/product/${product._id}`}
                className="absolute inset-0 z-10"
              ></Link>

              {/* IMAGE */}
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

              {/* ADD TO BASKET BUTTON */}
              <div className="absolute left-0 right-0 bottom-0 z-20">
                <AddToBasketButton
                  productId={product._id}
                  count={1}
                  className="w-full bg-black text-white text-xs py-2 opacity-0 group-hover:opacity-100 hover:bg-gray-800 transition-opacity duration-300 cursor-pointer"
                >
                  Add To Basket
                </AddToBasketButton>
              </div>
            </div>

            {/* TITLE + PRICE */}
            <Link href={`/product/${product._id}`}>
              <h4 className="mt-3 font-semibold text-sm line-clamp-2">
                {product.title}
              </h4>

              <p className="text-red-500 font-bold text-sm">
                {product.currency}
                {product.price}
              </p>
            </Link>
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
    </>
  );
}
