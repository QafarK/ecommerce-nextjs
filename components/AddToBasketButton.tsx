import { addBasketProduct } from "@/actions/cartActions";
import { getBasketProducts } from "@/actions/cartActions";
import { removeBasketProductById } from "@/actions/cartActions";


type Props = {
  productId: string;
  count?: number; 
  children?: React.ReactNode;
  className?: string;
};

export default function AddToBasketButton({
  productId,
  count = 1,
  children = "Add To Basket",
  className = "",
}: Props) {
  return (
    <form action={async () => {
      "use server";
      await addBasketProduct(productId, count);
      // await removeBasketProductById("68e3ac59fafd4c040e6a3401");
      console.log(await getBasketProducts());
    }}>
      <button
        type="submit"
        className={className}
      >
        {children}
      </button>
    </form>
  );
}
