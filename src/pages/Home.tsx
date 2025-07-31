import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext'; // adjust path as needed




type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
const { theme } = useTheme();
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 16))) // 16 products
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
<div
  className={`mt-16 max-w-screen-2xl px-4 space-y-12 mx-auto ${
    theme === 'theme2' ? 'md:ml-64' : ''
  }`}
>

      {/* Title & paragraph */}
      <section className="text-center space-y-4">
        <h1
          className="text-4xl font-bold tracking-tight"
          style={{ color: 'var(--text)' }}
        >
          ✨ Discover Your Style
        </h1>
        <p
          className="max-w-2xl mx-auto text-lg font-medium"
          style={{ color: 'var(--text)' }}
        >
          Explore top trending items handpicked just for you. Shop smart, shop beautiful.
        </p>
        <button className="px-6 py-2 rounded-full bg-black text-white font-semibold transition duration-300 shadow-md hover:shadow-lg">
          Start Shopping
        </button>
      </section>

      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ backgroundColor: 'var(--card)', color: 'var(--text)' }}
          >
            {/* Image */}
            <div className="h-48 flex items-center justify-center bg-white p-3">
              <img
                src={product.image}
                alt={product.title}
                className="h-32 object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              <h2
                className="font-semibold text-base mb-1 truncate"
                title={product.title}
              >
                {product.title}
              </h2>
              <p className="text-sm font-bold">${product.price.toFixed(2)}</p>
              <button className="mt-2 w-full py-1 rounded bg-black text-white font-medium transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
