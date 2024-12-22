import React from 'react';
import { ShoppingCart, Menu, Search, User } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-500 sm:hidden" />
            <h1 className="ml-4 text-2xl font-bold text-indigo-600">ArtisanMarket</h1>
          </div>
          
          <div className="hidden sm:flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search artisans or products"
                  type="search"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <User className="h-6 w-6 text-gray-500" />
            </button>
            <button className="ml-4 p-2 rounded-full hover:bg-gray-100 relative">
              <ShoppingCart className="h-6 w-6 text-gray-500" />
              <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-indigo-600 text-xs text-white text-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}