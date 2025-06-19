// src/components/Products.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../hooks/useProducts';



const Products = () => {
  const products = useProducts();
  console.log(products.products);
  return (
    <section className="mb-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Öne Çıkan Ürünler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.products.map(product => (
            <div key={product.id} className="product-card bg-white border border-gray-200 rounded-lg shadow-sm p-3 text-center">
              <img src={product.image} alt={product.name} className="mx-auto w-full h-40 object-cover rounded-md" />
              <h3 className="mt-3 font-medium">{product.name}</h3>
              <p className="text-sm text-orange-500 mt-1">{product.price}</p>
              <Link to={`/urun-detay/${product.id}`} className="block mt-2 text-blue-600 no-underline">Ürünü Gör</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;