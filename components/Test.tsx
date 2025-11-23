import Image from "next/image"

const Test = () => {
  return (
    <div className="group">
  {/* Image box */}
  <div className="relative bg-gray-100 rounded p-4">
    <Image
      src="/images/Icon-secure.svg" // öz şəkil path-ını yaz
      alt="Product"
      width={100}
      height={100}
      className="w-full h-auto"
    />

    {/* Add to Basket bar */}
    <button
      className="
        absolute left-0 right-0 bottom-0
        bg-black text-white text-sm py-2
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
      "
    >
      Add To Basket
    </button>
  </div>

  {/* Product Title */}
  <h4 className="mt-3 font-semibold text-sm">
    CANON EOS DSLR Camera
  </h4>

  {/* Price */}
  <p className="text-red-500 font-bold text-sm">$360</p>
</div>

  )
}

export default Test