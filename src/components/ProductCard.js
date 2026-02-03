import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />

      <h2 className="mt-3 text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">₹{product.price}</p>
      <Link
        href={`/products/${product.id}`}
        className="inline-block mt-3 text-blue-600 hover:underline"
      >View Details</Link>
    </div>
  );
}
