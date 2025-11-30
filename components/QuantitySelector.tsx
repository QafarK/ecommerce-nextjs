"use client";

import { useState } from "react";

export default function QuantitySelector() {
  const [qty, setQty] = useState(1);

  const decrease = () => setQty((q) => Math.max(1, q - 1));
  const increase = () => setQty((q) => q + 1);

  return (
    <div className="flex h-12 items-center border rounded-md overflow-hidden select-none">
      <button
        onClick={decrease}
        className="px-4 py-3 text-lg hover:bg-red-500 border-r cursor-pointer transition"
      >
        -
      </button>

      <span className="px-10 py-3 bg-gray-200 text-lg font-medium">{qty}</span>

      <button
        onClick={increase}
        className="px-4 py-3 text-lg hover:bg-red-500 border-l cursor-pointer transition"
      >
        +
      </button>
    </div>
  );
}
