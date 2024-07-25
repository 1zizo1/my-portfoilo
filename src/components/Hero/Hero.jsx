import axios from "axios";
import { useEffect, useState } from "react";
import Products from "../Products/products";

export default function Hero() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    try {
      let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
      setProducts(data.data);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-lg">
      <p className="text-white text-3xl font-bold mb-4">Product Showcase</p>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-16 h-16 border-4 border-t-4 border-t-transparent border-white rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="p-4 bg-transparent grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <Products key={i} {...product} />
          ))}
        </div>
      )}
    </div>
  );
}
