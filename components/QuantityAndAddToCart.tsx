'use client';
import { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import AddToBasketButton from "./AddToBasketButton";


export default function QuantityAndAddToCart({ productId }: { productId: string }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center gap-6 pt-20 pb-5">
      <QuantitySelector defaultValue={1} onChange={setQuantity} />

      <AddToBasketButton productId={productId} count={quantity} className="flex-1 h-12 bg-red-600 text-white py-2 rounded-md font-semibold cursor-pointer hover:bg-red-700 transition">
        Add to Basket
      </AddToBasketButton>
    </div>
  );
}