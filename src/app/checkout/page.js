"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const isFormValid =
    form.name && form.email && form.address && form.city && form.pincode;

  function handlePlaceOrder() {
    if (!isFormValid) return;
    const order = {
      items: cartItems,
      shipping: form,
      total: subtotal,
      createdAt: new Date().toISOString(),
    };
    console.log("ORDER PLACED:", order);
    alert("Order placed successfully!");
    clearCart();
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  if (cartItems.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-x1 font-semibold">Your cart is empty</h2>
        <Link href="/products" className="text-blue-600 underline mt-4 block">
          Go back to products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4x1 mx-auto py-6 grid-cols-1 md:grid-cols-2 gap-8">
      {/*Left: Shipping from (next step)*/}
      <div>
        <h2 className="text-x1 font-semibold mb-4">Shipping Details</h2>
        <div className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            name="pincode"
            placeholder="Pincode"
            value={form.pincode}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
      </div>
      <br />
      {/*Right: Order Summary*/}
      <div className="border p-4 rounded">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        <ul className="space-y-3">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between text-sm">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>₹{item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="border-t mt-4 pt-4 flex justify-between font-semibold">
          <span>Total</span>
          <span>₹{subtotal}</span>
        </div>
        <button
          onClick={handlePlaceOrder}
          disabled={!isFormValid}
          className="mt-6 w-full bg-green-600 text-white py-2 rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
