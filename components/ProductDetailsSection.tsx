import ProductImages from "./ProductImages";
import QuantitySelector from "./QuantitySelector";
import { getProductById } from "@/lib/getProductById";
import number2 from "../public/images/2number.png";
import number3 from "../public/images/3number.png";
import number4 from "../public/images/4number.png";
import Image from "next/image";

export default async function ProductDetailsSection({ id }: { id: string }) {
  const data = await getProductById(id);

  const images = data.images || [];

  const thumbnails = [
    images[0] ?? "/placeholder.png",
    images[1] ?? number2,
    images[2] ?? number3,
    images[3] ?? number4,
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto py-10 px-4">
      {/* LEFT — IMAGES */}
      <ProductImages
        mainImage={images[0] ?? "/placeholder.png"}
        thumbnails={thumbnails}
      />

      {/* RIGHT — PRODUCT INFO */}
      <div className="flex flex-col justify-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">{data.title}</h1>

        <p className="text-3xl font-semibold">
          {data.currency}
          {data.price}
        </p>

        <p className="text-gray-600 leading-relaxed border-b pb-6">
          {data.description}
        </p>

        {/* Quantity + Add to Basket */}
        <div className="flex items-center gap-20 pt-20 pb-5">
          <QuantitySelector />

          <button className="flex-1 h-12 bg-red-600 text-white py-2 rounded-md font-semibold cursor-pointer hover:bg-red-700 transition">
            Add to Basket
          </button>
        </div>

        {/* === DELIVERY & RETURN === */}
        <div className="border border-gray-500 rounded-md divide-y divide-gray-500 py-4">
          {/* DELIVERY */}
          <div className="flex gap-4 items-start pb-4 px-4">
            <div className="flex items-center justify-center h-10 w-10">
              <Image
                src="/icons/icon-delivery-black.svg"
                alt="Delivery"
                width={30}
                height={30}
              />
            </div>

            <div>
              <p className="font-medium">Free Delivery</p>
              <p className="text-sm text-gray-500 underline cursor-pointer">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>

          {/* RETURN */}
          <div className="flex gap-4 items-start pt-4 px-4">
            <div className="flex items-center justify-center h-10 w-10">
              <Image
                src="/icons/icon-return.svg"
                alt="Return"
                width={30}
                height={30}
              />
            </div>

            <div>
              <p className="font-medium">Return Delivery</p>
              <p className="text-sm text-gray-500">
                Free 30 Days Delivery Returns. <u className="cursor-pointer">Details</u>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
