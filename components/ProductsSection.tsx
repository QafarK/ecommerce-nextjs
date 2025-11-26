import { getProducts } from "@/lib/getProducts";
import ProductsGrid from "./ProductsGrid";

export default async function ProductsSection() {
  const data = await getProducts();

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-5 h-10 bg-red-500 rounded"></div>
        <h2 className="text-lg font-semibold text-red-500 pl-2">
          Our Products
        </h2>
      </div>
      <h3 className="text-4xl font-bold mb-11">Explore Our Products</h3>

      <ProductsGrid products={data} />
    </div>
  );
}
