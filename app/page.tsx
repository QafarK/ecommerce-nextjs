import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";
import Footer from "@/components/Footer";
import Products from "@/components/ProductsSection";
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* HEADER */}
      <header>
        <HomeHeader />
      </header>

      {/* Categories */}
      <section className="pt-14 px-28">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-10 bg-red-500 rounded"></div>
          <h2 className="text-lg font-semibold text-red-500 pl-2">
            Categories
          </h2>
        </div>

        <h3 className="text-4xl font-bold mb-11">Browse By Category</h3>
        <div className="flex space-x-4">
          <div className="w-42 h-36 border border-gray-300 p-6 pt-10 rounded-md cursor-pointer flex flex-col items-center gap-2">
            <Image
              src="/icons/Category-CellPhone.svg"
              alt="Search"
              width={32}
              height={32}
            ></Image>
            <span className="text-sm font-medium">Tech</span>
          </div>
          <div className="w-42 h-36 border border-gray-300 p-6 pt-10 rounded-md cursor-pointer flex flex-col items-center gap-2">
            <Image
              src="/icons/Category-Computer.svg"
              alt="Category"
              width={32}
              height={32}
            />
            <span className="text-sm font-medium">Fashion</span>
          </div>
          <div className="w-42 h-36 border border-gray-300 p-6 pt-10 rounded-md cursor-pointer flex flex-col items-center gap-2">
            <Image
              src="/icons/Category-SmartWatch.svg"
              alt="Search"
              width={32}
              height={32}
            ></Image>
            <span className="text-sm font-medium">Furniture</span>
          </div>
        </div>
        <div className="border-b border-gray-300 pb-24"></div>
      </section>

      {/* Products */}
      <section className="pb-24 pt-14 px-28">
        <Products/>
      </section>

      {/* Features */}
      <section className="p-6 pb-28 px-60 flex flex-col md:flex-row justify-around text-center space-y-4 md:space-y-0 md:space-x-6">
        {/* Delivery */}
        <div>
          <div className="h-12 w-12 bg-black border-6 border-gray-400 mx-auto rounded-full mb-2 flex items-center justify-center">
            <Image
              src="/icons/icon-delivery.svg"
              alt="Delivery"
              width={24}
              height={24}
            />
          </div>
          <p className="font-bold text-2xl">FREE AND FAST DELIVERY</p>
          <span>Free delivery for all orders over $140</span>
        </div>

        {/* Customer Service */}
        <div>
          <div className="h-12 w-12 bg-black border-6 border-gray-400 mx-auto rounded-full mb-2 flex items-center justify-center">
            <Image
              src="/icons/icon-service.svg"
              alt="Service"
              width={24}
              height={24}
            />
          </div>
          <p className="font-bold text-2xl">24/7 CUSTOMER SERVICE</p>
          <span>Friendly 24/7 customer support</span>

        </div>

        {/* Money Back */}
        <div>
          <div className="h-12 w-12 bg-black border-6 border-gray-400 mx-auto rounded-full mb-2 flex items-center justify-center">
            <Image
              src="/icons/icon-secure.svg"
              alt="Money Back"
              width={24}
              height={24}
            />
          </div>
          <p className="font-bold text-2xl">MONEY BACK GUARANTEE</p>
          <span>We reurn money within 30 days</span>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
