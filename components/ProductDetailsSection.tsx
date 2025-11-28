import ProductImages from "./ProductImages";
import { getProductById } from "@/lib/getProductById";
import number2 from "../public/images/2number.png";
import number3 from "../public/images/3number.png";
import number4 from "../public/images/4number.png";

export default async function ProductDetailsSection({ id }: { id: string }) {
  const data = await getProductById(id);

  // data.images: string[] — sənin API-dən gəlir
  const images = data.images || [];

  // 4-lük layout yaratmaq üçün boş yerləri placeholder edirik
  const thumbnails = [
    images[0] ?? "/placeholder.png",
    images[1] ?? number2,
    images[2] ?? number3,
    images[3] ?? number4
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
        <h1 className="text-4xl font-bold text-gray-900">
          {data.title}
        </h1>

        <p className="text-3xl font-semibold">
          {data.currency}{data.price}
        </p>

        <p className="text-gray-600 leading-relaxed">
          {data.description}
        </p>

        <button className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition">
          Add to Basket
        </button>
      </div>
    </div>
  );
}
