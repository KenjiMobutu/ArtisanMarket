import React from 'react';
import { Navbar } from './components/Navbar';
import { FeaturedArtisans } from './components/FeaturedArtisans';
import { ProductCard } from './components/ProductCard';
import type { Product } from './types';

function App() {
  const featuredProducts: Product[] = [
    {
      id: '1',
      title: 'Artisanal Dark Chocolate Selection',
      description: 'Hand-crafted dark chocolate assortment with local ingredients',
      price: 24.99,
      stock: 15,
      imageUrl: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9',
      artisanId: '1',
      category: 'Food',
      region: 'Provence-Alpes-Côte d\'Azur',
      createdAt: new Date()
    },
    {
      id: '2',
      title: 'Handcrafted Oak Coffee Table',
      description: 'Beautiful coffee table made from sustainable French oak',
      price: 299.99,
      stock: 3,
      imageUrl: 'https://images.unsplash.com/photo-1537130508299-46ab547b4be3?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      artisanId: '2',
      category: 'Furniture',
      region: 'Bretagne',
      createdAt: new Date()
    },
    {
      id: '3',
      title: 'Ceramic Vase Collection',
      description: 'Set of three unique hand-painted ceramic vases',
      price: 89.99,
      stock: 8,
      imageUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61',
      artisanId: '3',
      category: 'Home Decor',
      region: 'Occitanie',
      createdAt: new Date()
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-indigo-800 text-white">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover mix-blend-multiply filter brightness-50"
            src="https://images.unsplash.com/photo-1513135065346-a098a63a71ee"
            alt="Artisan working"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Discover Authentic Belgian Craftsmanship
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Connect directly with talented artisans across Belgium. Browse unique, handcrafted products
            and support local craftspeople.
          </p>
        </div>
      </div>

      <FeaturedArtisans />

      {/* Featured Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
