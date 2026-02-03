"use client";

import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();

  function handleAddToCart() {
    if (!product) {
        console.error("Product is undefined in AddToCartButton")
        return;
    }

    addToCart(product);
  }

  return (
    <button
      onClick={() => addToCart(product)}
      className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >Add to Cart</button>
  );
}
