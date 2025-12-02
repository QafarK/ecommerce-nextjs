"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

type Product = {
  id: string;
  title: string;
  price: number;
  currency: string;
  image: string;
};

const HomeHeader = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setErrorMsg("");
    setResults([]);

    try {
      const res = await fetch(
        `https://ilkinibadov.com/api/v1/search?searchterm=${encodeURIComponent(
          query
        )}`
      );

      const data = await res.json();

      if (data.success === false) {
        setErrorMsg(data.message || "No products found");
        setResults([]);
      } else {
        setResults(data.content || []);
        if (!data.content?.length) {
          setErrorMsg("No products found");
        }
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center pt-8 pb-7 px-28 ">
        <Link href="/" className="text-2xl font-bold">
          Exclusive
        </Link>

        <div className="flex items-center space-x-4">
          {/* SEARCH BAR */}
          <div className="flex items-center bg-gray-200 rounded pr-2 w-full max-w-sm">
            <input
              type="text"
              placeholder="What are you looking for?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 outline-none h-9 pr-6 pl-4 w-60"
            />
            <button onClick={handleSearch} type="button">
              <Image
                src="/icons/searchIcon.svg"
                alt="Search"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </button>
          </div>
          
          <Link href={"/basket"}>
            <Image
              src="/icons/basket.svg"
              alt="Basket"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          </Link>

          <Image
            src="/icons/user.svg"
            alt="User"
            width={32}
            height={32}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="border-b border-gray-300"></div>

      {/* SEARCH RESULTS */}

      {/* LOADING */}
      {loading && (
        <p className="text-center text-gray-500 mt-6 animate-pulse">
          Searching...
        </p>
      )}

      {/* ERROR MESSAGE */}
      {!loading && errorMsg && (
        <p className="text-center text-red-500 mt-6 font-medium">{errorMsg}</p>
      )}

      {/* RESULTS GRID */}
      <div className="px-28 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {results.map((product) => (
          <div
            key={product.id}
            className="border bg-white shadow-sm hover:shadow-md rounded-xl p-3 transition"
          >
            <Link href={`/product/${product.id}`}>
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded cursor-pointer"
              />
            </Link>

            <h3 className="mt-3 font-medium">{product.title}</h3>
            <p className="text-gray-700">
              {product.currency}
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeHeader;
