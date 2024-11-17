import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Clock, Truck } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1543353071-087092ec393a?auto=format&fit=crop&w=1920&q=80"
            alt="Kitchen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative pt-32 pb-16 sm:pt-48 sm:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              Delicious Food,
              <br />
              Delivered to Your Door
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Experience restaurant-quality meals prepared in our cloud kitchen. 
              Fresh ingredients, expert chefs, and quick delivery to your doorstep.
            </p>
            <div className="mt-10">
              <Link
                to="/menu"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <UtensilsCrossed className="h-12 w-12 text-orange-500" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Expert Chefs</h3>
              <p className="mt-2 text-gray-600">
                Our professional chefs craft each dish with passion and expertise
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Clock className="h-12 w-12 text-orange-500" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Quick Preparation</h3>
              <p className="mt-2 text-gray-600">
                Fresh meals prepared quickly without compromising on quality
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Truck className="h-12 w-12 text-orange-500" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Fast Delivery</h3>
              <p className="mt-2 text-gray-600">
                Hot and fresh food delivered right to your doorstep
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}