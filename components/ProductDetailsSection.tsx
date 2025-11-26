import Image from "next/image";

export default async function ProductDetailsPage({ id }: { id: string }) {

  // Örnek ürün verisi (gerçek projede API'den gelir)
  const product = {
    name: "Havic HV G-92 Gamepad",
    price: 192.00,
    oldPrice: 250.00,
    description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    mainImage: "/controller-main.jpg",
    thumbnails: [
      "/thumb1.jpg",
      "/thumb2.jpg",
      "/thumb3.jpg",
      "/thumb4.jpg",
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">

      {/* ANA İÇERİK – flex-1 ile footer en alta gider */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16">
          
          {/* SOL TARAFTA: 4 TANE KÜÇÜK RESİM + BÜYÜK RESİM */}
          <div className="flex gap-6">
            {/* Thumbnail'ler – sol dikey */}
            <div className="flex flex-col gap-4">
              {product.thumbnails.map((thumb, i) => (
                <div
                  key={i}
                  className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-red-600 transition"
                >
                  <Image
                    src={thumb}
                    alt={`Thumbnail ${i + 1}`}
                    width={96}
                    height={96}
                    className="object-contain w-full h-full p-2"
                  />
                </div>
              ))}
            </div>

            {/* Ana büyük resim */}
            <div className="flex-1 relative bg-gray-50 rounded-2xl overflow-hidden">
              <Image
                src={product.mainImage}
                alt={product.name}
                fill
                className="object-contain p-8 sm:p-12"
                priority
              />
            </div>
          </div>

          {/* SAĞ TARAFTA: Ürün Bilgileri */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mt-4">
                <span className="text-4xl font-bold">${product.price}</span>
                <span className="text-2xl text-gray-400 line-through">
                  ${product.oldPrice}
                </span>
                <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
                  -23%
                </span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-6">
              <div className="flex items-center border rounded-lg">
                <button className="p-4 hover:bg-gray-100">-</button>
                <span className="px-8 text-lg font-medium">2</span>
                <button className="p-4 hover:bg-gray-100">+</button>
              </div>

              <button className="flex-1 bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition">
                Add to Basket
              </button>
            </div>

            {/* Teslimat & İade */}
            <div className="space-y-5 pt-6 border-t">
              <div className="flex gap-4">
                <div className="text-green-600">Truck Icon</div>
                <div>
                  <p className="font-medium">Free Delivery</p>
                  <p className="text-sm text-gray-500 underline">Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-gray-600">Return Icon</div>
                <div>
                  <p className="font-medium">Return Delivery</p>
                  <p className="text-sm text-gray-500">Free 30 Days Delivery Returns. <u>Details</u></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}