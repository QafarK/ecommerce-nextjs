"use client";

import { useTransition } from "react";
import { addBasketProduct } from "@/actions/cartActions";

export default function AddToBasketButton({
  productId,
  children,
  count = 1,
  className,
}: {
  productId: string;
  children: React.ReactNode;
  count: number;
  className?: string;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => {
        startTransition(() => {
          addBasketProduct(productId, count);
        });
      }}
      className={className}
      disabled={isPending}
    >
      {isPending ? "Adding..." : children}
    </button>
  );
}
