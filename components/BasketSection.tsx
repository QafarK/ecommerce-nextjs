"use client";
import Image from "next/image";
import { removeAllBasketProducts } from "@/actions/cartActions";
type BasketItem = {
  id: string;
  productId: string;
  title: string;
  count: number;
  pricePerItem: string; 
  currency: string;
  total: string;
  image: string;
};

type BasketSectionProps = {
  items: BasketItem[];
  totalPrice: number;
  onRemove: (id: string) => void;
};

export default function BasketSection({ items, totalPrice, onRemove }: BasketSectionProps) {
  
    
    return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Basket ({items.length})</h1>
        <button onClick={() => removeAllBasketProducts()} className="border px-5 py-2 rounded hover:bg-red-500 hover:text-white transition cursor-pointer">
          Clear all
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <div key={item.id} className="border rounded-lg p-3 relative group">
            {/* Remove icon */}
            <button
              onClick={() => onRemove(item.id)}
              className="absolute top-3 right-3 text-gray-600 cursor-pointer hover:text-black rounded-2xl bg-gray-200 p-1"
            >
              🗑️
            </button>

            {/* Image */}
            <div className="aspect-square w-full bg-gray-100 rounded flex items-center justify-center">
              <Image
                src={item.image}
                width={300}
                height={300}
                alt={item.title}
                className="object-contain rounded"
              />
            </div>

            {/* Title */}
            <p className="mt-3 font-medium">
              {item.title} {item.count > 1 && `(${item.count})`}
            </p>

            {/* Price */}
            <p className="text-red-500 font-semibold text-lg mt-1">
              {item.pricePerItem}{item.currency} {`(${item.count})`}
            </p>
          </div>
        ))}
      </div>

      {/* Total Price */}
      <div className="text-right mt-10 text-xl font-semibold">
        Total Price: <span className="text-red-500">{totalPrice}$</span>
      </div>
    </div>
  );
}
