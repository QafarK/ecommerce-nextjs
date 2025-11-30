// components/QuantitySelector.tsx
'use client';

import { useState } from "react";

type QuantitySelectorProps = {
  defaultValue?: number;
  onChange?: (value: number) => void; 
};

export default function QuantitySelector({
  defaultValue = 1,
  onChange,
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(defaultValue);

  const handleChange = (newQty: number) => {
    if (newQty < 1) return;
    setQuantity(newQty);
    onChange?.(newQty);
  };

  return (
    <div className="flex h-12 items-center border rounded-md overflow-hidden select-none">
      <button
        onClick={() => handleChange(quantity - 1)}
        className="px-4 py-3 text-lg hover:bg-red-500 border-r cursor-pointer transition"
        disabled={quantity <= 1}
      >
        −
      </button>

      <span className="px-10 py-3 bg-gray-200 text-lg font-medium">
        {quantity}
      </span>

      <button
        onClick={() => handleChange(quantity + 1)}
        className="px-4 py-3 text-lg hover:bg-red-500 border-l cursor-pointer transition"
      >
        +
      </button>
    </div>
  );
}