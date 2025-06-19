// src/components/Blogs.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const blogs = [
  { id: 1, title: "Moda Akıllı Alışveriş Rehberi", summary: "Online alışverişte doğru seçim için ipuçları." },
  { id: 2, title: "En Trend Giyim Tarzları", summary: "Bu yıl trend olan stiller neler?" },
  { id: 3, title: "Akıllı Kullanım: Teknolojik Ürünler", summary: "TeknoFuar'dan en çok konuşulan teknolojik ürünler!" }
];

const Blogs = () => {
  return (
    <section className="px-4 pb-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Son Blog Yazıları</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map(blog => (
            <div key={blog.id} className="blog-card bg-white border border-gray-200 rounded-lg shadow-sm p-3">
              <img src={`https://placehold.co/300x200?text=Blog+${blog.id}`} alt={blog.title} className="w-full h-32 object-cover rounded-md mb-3" />
              <h3 className="font-semibold text-gray-800">{blog.title}</h3>
              <p className="text-xs text-gray-600 mt-2">{blog.summary}</p>
              <Link to="#" className="block mt-3 text-blue-600 hover:text-blue-800 underline">Devamını Oku</Link> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;