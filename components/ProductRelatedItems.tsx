import { getProducts } from "@/lib/getProducts";
import Image from "next/image";
import Link from "next/link";
import AddToBasketButton from "./AddToBasketButton";
type Product = {
  _id: string;
  title: string;
  price: number;
  currency: string;
  images: string[];
};

const ProductRelatedItems = async () => {
  const products: Product[] = await getProducts();

  return (
    <div className="overflow-x-auto max-w-7xl mx-auto pt-16 px-4 mb-30">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-5 h-10 bg-red-500 rounded"></div>
        <h2 className="text-lg font-semibold text-red-500 pl-2">
          Related Items
        </h2>
      </div>
      <div className="flex gap-6 pb-2">
        {products.map((product) => (
          <div
            key={product._id}
            className="group min-w-[180px] sm:min-w-[200px]"
          >
            {/* IMAGE BOX + ADD TO BASKET */}
            <div className="relative bg-gray-100 rounded p-4 w-full aspect-square flex items-center justify-center">
              <Link
                href={`/product/${product._id}`}
                className="absolute inset-0 z-10"
              >
              </Link>

              {product.images && product.images[0] ? (
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              ) : (
                <div className="w-full h-24 bg-gray-200 flex items-center justify-center">
                  No Image
                </div>
              )}

              <div className="absolute left-0 right-0 bottom-0 z-20">
                <AddToBasketButton
                  productId={product._id}
                  count={1}
                  className="w-full bg-black text-white text-xs py-2 opacity-0 group-hover:opacity-100 hover:bg-gray-800 transition-opacity duration-300 cursor-pointer"
                >
                  Add To Basket
                </AddToBasketButton>
              </div>
            </div>

            {/* TITLE + PRICE */}
            <Link href={`/product/${product._id}`}>
              <h4 className="mt-3 font-semibold text-sm line-clamp-2">
                {product.title}
              </h4>

              <p className="text-red-500 font-bold text-sm">
                {product.currency}
                {product.price}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRelatedItems;
