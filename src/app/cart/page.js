"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return <h1>Your cart is empty</h1>;
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div>
      <h1 className="text-2x1 font-bold">Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between border-b py-4">
          <div>
            <h2>{item.name}</h2>
            <p>QTY:{item.quantity}</p>
            <p>₹{item.price}</p>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-600"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-6 border-t pt-4 text-right">
        <p className="text-lg">
          Subtotal: <span className="font-semibold">₹{subtotal}</span>
        </p>
        <Link href="/checkout">
          <button
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded disabled:opacity-50"
            disabled={cartItems.length === 0}
          >
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
