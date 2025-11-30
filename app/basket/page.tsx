import Footer from "@/components/Footer";
import HomeHeader from "@/components/HomeHeader";
import BasketSection from "@/components/BasketSection";
import { getBasketProducts } from "@/actions/cartActions";
import { removeBasketProductById } from "@/actions/cartActions";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function BasketPage() {
  const basketData = await getBasketProducts();
  const items = basketData.content ?? [];
  const totalPrice = basketData.basketTotal ?? 0;

  return (
    <div className="flex flex-col min-h-screen">
      <header className="shrink-0">
        <HomeHeader />
      </header>

      <main className="flex-1 mb-20">
        {items.length === 0 ? (
          <div className="text-center py-20 mb-80">
            <h2 className="text-3xl font-semibold text-gray-700">Basket is empty.</h2>
            <p className="mt-4 text-gray-500">
              Start adding some products!
            </p>
          </div>
        ) : (
          <BasketSection
            items={items}
            totalPrice={totalPrice}
            onRemove={removeBasketProductById} // Server Action direkt bağlanıyor → sihir!
          />
        )}
      </main>

      <footer className="shrink-0">
        <Footer />
      </footer>
    </div>
  );
}