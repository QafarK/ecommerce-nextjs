"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductImages({
  mainImage,
  thumbnails,
}: {
  mainImage: string;
  thumbnails: string[];
}) {
  const [selectedImage, setSelectedImage] = useState(mainImage);

  return (
    <div className="flex gap-6">

      {/* === LEFT THUMBNAILS (4 eded) === */}
      <div className="flex flex-col gap-4">
        {thumbnails.map((thumb, i) => {
          const active = thumb === selectedImage;

          return (
            <button
              key={i}
              onClick={() => setSelectedImage(thumb)}
              className={`w-20 h-20 sm:w-24 sm:h-24 border rounded-xl overflow-hidden transition cursor-pointer
                ${active ? "border-red-600" : "border-transparent hover:border-gray-300"}
              `}
            >
              <Image
                src={thumb}
                alt={`Thumbnail ${i}`}
                width={96}
                height={96}
                className="object-contain w-full h-full p-2"
              />
            </button>
            
          );
        })}
      </div>

      {/* === MAIN IMAGE === */}
      <div className="flex-1 relative rounded-2xl overflow-hidden border ">
        <Image
          src={selectedImage}
          alt="Product image"
          fill
          className="object-contain p-2"
        />
      </div>

    </div>
  );
}
