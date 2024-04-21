import Image from "next/image";
import ProductList from "./components/ProductList";

export default async function Home() {
  const response = await fetch(`${process.env.BACKEND_URL}/posts`);
  if (!response.ok) {
    throw new Error("An error occurred while fetching the data.");
  }

  const products = await response.json();
  return (
    <ProductList products={products}/>
  );
}
