import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Mocking the data structure that will come from your easy visual admin dashboard
const dishes = [
  {
    id: '1',
    name: 'Classic Aloo Samosa (6 Pack)',
    category: 'Samosas',
    price: 8.99,
    rating: 4.9,
    reviews: 247,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78',
  },
  {
    id: '2',
    name: 'Lahori Chicken Biryani',
    category: 'Biryanis',
    price: 16.99,
    rating: 4.9,
    reviews: 312,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8',
  },
  {
    id: '3',
    name: 'Samosa Party Box (24 Pack)',
    category: 'Samosas',
    price: 29.99,
    rating: 5.0,
    reviews: 94,
    badge: 'Top Value',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78',
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#2C1A11]">
      {/* Header */}
      <header className="border-b border-[#F0E6DF] bg-white sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="font-serif text-2xl font-bold tracking-wide text-[#E05320]">Lahori Samosay</h1>
          <p className="text-xs tracking-widest uppercase text-gray-500">Authentic Street Food</p>
        </div>
        <nav className="flex gap-6 font-medium text-sm">
          <Link href="#" className="text-[#E05320]">Home</Link>
          <Link href="#" className="hover:text-[#E05320]">Menu</Link>
          <Link href="#" className="hover:text-[#E05320]">Samosas</Link>
          <Link href="#" className="hover:text-[#E05320]">Biryanis</Link>
        </nav>
      </header>

      {/* Main Grid Section */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-8">
          <p className="text-sm font-medium text-gray-500">Showing {dishes.length} premium dishes</p>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-[#E6DCD5] rounded-full text-sm font-medium bg-white hover:bg-gray-50">Filters</button>
            <button className="px-4 py-2 border border-[#E6DCD5] rounded-full text-sm font-medium bg-white hover:bg-gray-50">Featured ▾</button>
          </div>
        </div>

        {/* Responsive Layout Grid identical to Arena */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {dishes.map((dish) => (
            <div key={dish.id} className="group bg-white border border-[#EDE4DC] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col">
              {/* Product Badge */}
              {dish.badge && (
                <span className="absolute top-3 left-3 z-10 bg-[#E05320] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                  {dish.badge}
                </span>
              )}

              {/* Food Image Wrapper */}
              <div className="relative aspect-square w-full bg-gray-100 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Details */}
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#B58A63] mb-1">{dish.category}</span>
                <h3 className="font-serif text-base font-bold leading-snug mb-2 group-hover:text-[#E05320] transition-colors">{dish.name}</h3>
                
                {/* Ratings */}
                <div className="flex items-center gap-1 mb-4 text-sm">
                  <span className="text-amber-500">★</span>
                  <span className="font-bold text-xs">{dish.rating}</span>
                  <span className="text-gray-400 text-xs">({dish.reviews})</span>
                </div>

                {/* Price and Action Button */}
                <div className="mt-auto pt-3 border-t border-[#FAFAFA] flex justify-between items-center">
                  <span className="text-lg font-extrabold text-[#2C1A11]">${dish.price.toFixed(2)}</span>
                  <button className="bg-[#2C1A11] hover:bg-[#E05320] text-white text-xs font-bold tracking-wider uppercase px-4 py-2.5 rounded-xl transition-colors shadow-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
