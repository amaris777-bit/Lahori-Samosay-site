import React from 'react';
import Link from 'next/next-link'; 
import HomeClient from './HomeClient';

// Mocking the data layout structure from the original dashboard store
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
    <div className="min-h-screen bg-[#FFFDF9] text-[#2C1A11] flex flex-col justify-between">
      <div>
        {/* Main Brand Navigation Header */}
        <header className="border-b border-[#F0E6DF] bg-white sticky top-0 z-50 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🥟</span>
            <div>
              <h1 className="font-serif text-xl font-bold tracking-wide text-[#E05320]">Lahori Samosay</h1>
              <p className="text-[10px] tracking-widest uppercase text-gray-400 font-semibold">Authentic Street Food</p>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-8 font-medium text-sm text-gray-700">
            <a href="#" className="text-[#E05320] transition-colors">Home</a>
            <a href="#" className="hover:text-[#E05320] transition-colors">Menu</a>
            <a href="#" className="hover:text-[#E05320] transition-colors">Samosas</a>
            <a href="#" className="hover:text-[#E05320] transition-colors">Biryanis</a>
          </nav>

          <div className="flex items-center gap-4 text-gray-600">
            <button className="p-1 hover:text-[#E05320]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
            <button className="p-1 hover:text-[#E05320]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 11h14l1 12H4L5 11z"></path></svg>
            </button>
          </div>
        </header>

        {/* Brown Hero Banner Section */}
        <section className="bg-[#4A3525] text-white py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-3">Our Full Menu</h2>
            <p className="text-gray-300 text-lg max-w-xl">Explore our complete collection of authentic Lahori dishes</p>
          </div>
        </section>

        {/* Search Bar Container */}
        <div className="max-w-7xl mx-auto px-6 mt-8">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between border-b border-[#F0E6DF] pb-6">
            <div className="relative flex-1 max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </span>
              <input 
                type="text" 
                placeholder="Search dishes..." 
                className="w-full pl-10 pr-4 py-2 bg-white border border-[#D0C2B7] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#E05320] focus:border-[#E05320]"
              />
            </div>
            
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-[#D0C2B7] bg-white rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-50">
                <span>📊</span> Filters
              </button>
              <select className="px-4 py-2 border border-[#D0C2B7] bg-white rounded-lg text-sm font-medium focus:outline-none">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Client Side Filter Grid Mounting Component */}
        <main className="max-w-7xl mx-auto px-6 py-8">
          <HomeClient products={dishes} categories={['All', 'Samosas', 'Biryanis']} />
        </main>
      </div>

      {/* Dark Brand Footer Section */}
      <footer className="bg-[#332218] text-[#F5EBE6] pt-16 pb-8 px-6 mt-20 border-t-4 border-[#E05320]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🥟</span>
              <div>
                <h3 className="font-serif font-bold text-lg text-white">Lahori Samosay</h3>
                <p className="text-[9px] tracking-widest uppercase text-[#D29075]">Authentic Street Food</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Bringing the authentic flavors of Lahore's legendary food streets to your doorstep. Handcrafted with love, tradition, and the finest spices.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Full Menu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Samosas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Biryanis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Curries</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Delivery Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Catering</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2 items-start">
                <span>📍</span> <span>123 Food Street, Anarkali<br/>Lahore, Pakistan</span>
              </li>
              <li className="flex gap-2 items-center">
                <span>📞</span> <span>+92 300 1234567</span>
              </li>
              <li className="flex gap-2 items-center">
                <span>✉️</span> <span>hello@lahorisamosay.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-[#4A3525] text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Lahori Samosay. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
