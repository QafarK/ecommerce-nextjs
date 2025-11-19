"use client";
import Image from "next/image";
import { useState } from "react";

const HomeHeader = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Axtaris edildi:" , query);
  };

  return (
    <>
    
    <div className="flex justify-between items-center pt-8 pb-7 px-28 ">
      <h1 className="text-2xl font-bold">Exclusive</h1>
      <div className="flex items-center space-x-4">


        <div className="flex items-center bg-gray-200 rounded pr-2  w-full max-w-sm">
          <input
            type="text"
            placeholder="What are you looking for?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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

        <Image
          src="/icons/basket.svg"
          alt="Search"
          width={32}
          height={32}
          className="cursor-pointer"
        ></Image>

        <Image
          src="/icons/user.svg"
          alt="Search"
          width={32}
          height={32}
          className="cursor-pointer"
        ></Image>
      </div>
    </div>
    <div className="border-b border-gray-300"></div>
    </>
  );
};

export default HomeHeader;
