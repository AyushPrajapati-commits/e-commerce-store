"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar(){
    const { cartItems } = useCart();
    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <nav className="w-full border-b">
            <div className="max-w-7x1 mx-auto px-4 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-x1 font-bold">ShopEase</Link>
            {/* Links */}
            <div className="flex gap-6">
                <Link href="/products" className="hover:text-blue-600">Products</Link>
                <Link href="/cart" className="hover:text-blue-600">Cart
                {totalItems > 0 && (
                    <span className="absolute-top-2-right-3 bg-red-500 text-white text-sx px-2 py-0.5 rounded-full">{totalItems}</span>
                )}
                </Link>
            </div>
            </div>
        </nav>
    );
}