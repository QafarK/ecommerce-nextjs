"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: string;
  title: string;
  price: number;
  currency: string;
  image: string;
};

export default function HomeHeader() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

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

      // API success=false gələndə
      if (data.success === false) {
        setErrorMsg(data.message || "No results found");
        setResults([]);
      }
      // products gələndə
      else {
        setResults(data.content || []);
        if (!data.content?.length) {
          setErrorMsg("No results found");
        }
      }
    } catch (error) {
      console.error(error);
      setErrorMsg("Something went wrong. Try again.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 rounded-xl mx-4 mt-4 mb-2 p-4">
      {/* SEARCH BOX */}
      <div className="flex items-center gap-2 bg-white border rounded-xl px-3 py-2 shadow-sm">
        <input
          className="text-base px-2 flex-1 outline-none"
          placeholder="Search products..."
          value={query}
          onChange={handleChange}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />

        <button
          className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-1.5 rounded-lg"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center mt-4 text-gray-500 animate-pulse">
          Searching...
        </p>
      )}

      {/* ERROR MESSAGE */}
      {!loading && errorMsg && (
        <p className="text-center mt-4 text-red-500 font-medium">{errorMsg}</p>
      )}

      {/* RESULTS */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {results.map((item) => (
          <div
            key={item.id}
            className="border p-2 rounded-xl bg-white shadow-sm hover:shadow-md transition"
          >
            <Link href={`/product/${item.id}`}>
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={160}
                className="w-full h-40 object-cover rounded-md"
              />

              <h3 className="font-medium mt-2">{item.title}</h3>

              <p className="text-gray-600">
                {item.currency}
                {item.price}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
