import React from 'react';
import type { Artisan } from '../types';
import { Star } from 'lucide-react';

interface ArtisanCardProps {
  artisan: Artisan;
}

function ArtisanCard({ artisan }: ArtisanCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center space-x-4">
        <img
          src={artisan.imageUrl}
          alt={artisan.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{artisan.name}</h3>
          <div className="flex items-center mt-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{artisan.rating}</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">{artisan.region}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-600 text-sm line-clamp-2">{artisan.description}</p>
    </div>
  );
}

export function FeaturedArtisans() {
  const featuredArtisans: Artisan[] = [
    {
      id: '1',
      name: 'Marie Dubois',
      description: 'Artisan chocolatier with 15 years of experience crafting unique flavors',
      region: 'Provence-Alpes-Côte d\'Azur',
      rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      products: []
    },
    {
      id: '2',
      name: 'Pierre Martin',
      description: 'Traditional woodworker specializing in handcrafted furniture',
      region: 'Bretagne',
      rating: 4.9,
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      products: []
    },
    {
      id: '3',
      name: 'Sophie Laurent',
      description: 'Ceramic artist creating unique pieces inspired by nature',
      region: 'Occitanie',
      rating: 4.7,
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      products: []
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Artisans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtisans.map((artisan) => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))}
        </div>
      </div>
    </section>
  );
}