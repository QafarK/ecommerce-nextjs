import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import ProductDetailsSection from "@/components/ProductDetailsSection";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex flex-col min-h-screen">
    
      <header className="shrink-0">
        <HomeHeader />
      </header>

      <main className="flex-1">
        <ProductDetailsSection id={id} />
      </main>

      <footer className="shrink-0">
        <Footer />
      </footer>
    </div>
  );
}



