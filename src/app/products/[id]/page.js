import products from "@/data/products";
import AddToCartButton from "@/components/AddToCartButton";

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  const product = products.find((item) => item.id === id);

  if (!product) {
    return <h1 className="text-x1 font-bold">Product not found</h1>;
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 obeject-cover rounded"
      />
      <div>
        <h1 className="text-3x1 font-bold">{product.name}</h1>
        <p className="text-x1 text-gray-700 mt-2">₹{product.price}</p>
        <p className="mt-4 text-gray-600">{product.description}</p>
        {/*Client Component*/}
        <AddToCartButton product={product}/>
      </div>
    </div>
  );
}
