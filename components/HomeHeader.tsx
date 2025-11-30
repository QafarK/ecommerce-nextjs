"use client";

import { useState } from "react";
import Image from "next/image";

type Product = {
  _id: string;
  title: string;
  price: number;
  currency: string;
  image: string;
};

export default function HomeHeader() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);

    try {
      const res = await fetch(
        `https://ilkinibadov.com/api/v1/search?searchterm=${encodeURIComponent(query)}`
      );

      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setResults(data.content || []);
      console.log(data.content);
    } catch (error) {
      console.error(error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 rounded-xl mx-4 mt-4 mb-2 p-2">
      <div className="flex gap-2">
        <input
          className="text-base px-2 flex-1"
          placeholder="Search products..."
          value={query}
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 text-white px-4 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {results.map((item: Product) => (
          <div key={item._id} className="border p-2 rounded">
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={160}
              className="w-full h-40 object-cover"
            />
            <h3 className="font-medium mt-2">{item.title}</h3>
            <p className="text-gray-600">
              {item.currency}
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
