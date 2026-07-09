import React from 'react';
import HomeClient from './HomeClient';

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
    name: 'Keema Samosa (6 Pack)',
    category: 'Samosas',
    price: 11.99,
    rating: 4.8,
    reviews: 189,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77',
  },
  {
    id: '3',
    name: 'Lahori Chicken Biryani',
    category: 'Biryanis',
    price: 16.99,
    rating: 4.9,
    reviews: 312,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8',
  },
  {
    id: '4',
    name: 'Butter Chicken',
    category: 'Curries',
    price: 14.99,
    rating: 4.8,
    reviews: 278,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398',
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#2C1A11] font-sans flex flex-col justify-between scroll-smooth">
      <div>
        {/* Navigation Header */}
        <header className="border-b border-[#F0E6DF] bg-white/90 backdrop-blur sticky top-0 z-50 px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🥟</span>
              <div>
                <h1 className="font-serif text-xl font-bold tracking-wide text-[#E05320]">Lahori Samosay</h1>
                <p className="text-[10px] tracking-widest uppercase text-gray-400 font-semibold">Authentic Street Food</p>
              </div>
            </div>
            
            <nav className="hidden md:flex gap-6 font-medium text-sm text-gray-700">
              <a href="#home" className="hover:text-[#E05320] transition-colors">Home</a>
              <a href="#menu" className="hover:text-[#E05320] transition-colors">Menu</a>
              <a href="#delivery" className="hover:text-[#E05320] transition-colors">Delivery</a>
              <a href="#catering" className="hover:text-[#E05320] transition-colors">Catering Packs</a>
              <a href="#subscriptions" className="hover:text-[#E05320] transition-colors">Meal Subscriptions</a>
            </nav>

            <div className="flex items-center gap-4 text-gray-600">
              <span className="bg-[#EBE3DB] text-xs font-bold px-2.5 py-1 rounded text-[#4A3525]">Open 10AM - 10PM Everyday</span>
            </div>
          </div>
        </header>

        {/* SECTION 1: HOME HERO SCREEN */}
        <section id="home" className="relative bg-cover bg-center min-h-[550px] flex items-center px-6 text-white" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=1200')" }}>
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <span className="bg-[#E05320] text-xs uppercase font-bold px-3 py-1 rounded-full text-white inline-block mb-4">★ Rated 4.9/5 by 2,000+ foodies</span>
            <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-none">Taste the Soul of <br/><span className="text-[#F2994A]">Lahore</span></h2>
            <p className="text-gray-200 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">Handcrafted samosas, aromatic biryanis & authentic Lahori street food — delivered directly to your doorstep. Made with love, spice & everything nice.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#menu" className="bg-[#E05320] hover:bg-[#c64417] px-8 py-3.5 rounded-xl font-bold transition-all transform hover:-translate-y-0.5 inline-block shadow-lg">Order Now ➔</a>
              <a href="#subscriptions" className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur px-6 py-3.5 rounded-xl font-bold transition-all inline-block">Monthly Meal Subscriptions</a>
            </div>
            
            {/* Quick Promo Tags */}
            <div className="flex flex-wrap gap-6 mt-12 text-sm text-gray-300 font-medium">
              <div className="flex items-center gap-2"><span>🚗</span> Free delivery over $35</div>
              <div className="flex items-center gap-2"><span>🕒</span> Same-day delivery</div>
              <div className="flex items-center gap-2"><span>🔥</span> Made fresh daily</div>
            </div>
          </div>
        </section>

        {/* SECTION 2: MARKETING INFOGRAPHICS */}
        <section className="bg-[#F7F2EE] py-10 px-6 border-b border-[#F0E6DF]">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl mb-2">📦</div>
              <h4 className="font-bold text-sm">Free Delivery</h4>
              <p className="text-xs text-gray-500 mt-1">On orders over $35</p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">⏰</div>
              <h4 className="font-bold text-sm">Fast Delivery</h4>
              <p className="text-xs text-gray-500 mt-1">Order before 2pm</p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🛡️</div>
              <h4 className="font-bold text-sm">Freshness Guaranteed</h4>
              <p className="text-xs text-gray-500 mt-1">Hand-folded fresh daily</p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🎁</div>
              <h4 className="font-bold text-sm">Party Packs Available</h4>
              <p className="text-xs text-gray-500 mt-1">Save big on bulk catering</p>
            </div>
          </div>
        </section>

        {/* SECTION 3: THE INTERACTIVE MENU STALL */}
        <section id="menu" className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <span className="text-sm font-bold tracking-widest text-[#E05320] uppercase">Explore Our Menu</span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold mt-1">Curated Collections</h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto mt-2">From crispy samosas to aromatic biryanis — every dish tells a story of Lahore's vibrant food culture.</p>
          </div>
          <HomeClient products={dishes} categories={['All', 'Samosas', 'Biryanis', 'Curries']} />
        </section>

        {/* SECTION 4: FOOD DELIVERY POLICY DETAIL GRID (From your Menu Sheet) */}
        <section id="delivery" className="bg-[#4A3525] text-white py-16 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#F2994A] text-xs font-bold uppercase tracking-wider">Hot & Fresh Delivery</span>
              <h3 className="font-serif text-3xl font-bold mt-1 mb-4">Timely Delivery Policy</h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                We specialize in crafting unforgettable, homely flavours that reach you in perfect condition. To ensure high-quality preparation, <strong>must order at least 40 minutes earlier</strong> for timely deliveries.
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3 items-center bg-white/5 p-3 rounded-lg border border-white/10">
                  <span className="text-xl">📍</span>
                  <p><strong>FREE Local Delivery:</strong> Within 3 km of our primary kitchens.</p>
                </div>
                <div className="flex gap-3 items-center bg-white/5 p-3 rounded-lg border border-white/10">
                  <span className="text-xl">🛵</span>
                  <p>Dine-in or contactless home drop-offs are fully available daily.</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-inner">
              <h4 className="font-serif text-xl font-bold mb-4 text-[#F2994A]">Direct Order Placement</h4>
              <p className="text-sm text-gray-300 mb-6">Need quick support, large custom add-ons, or fast updates? Connect over our primary lines:</p>
              <div className="space-y-3 font-mono text-sm">
                <p className="flex justify-between border-b border-white/10 pb-2"><span>💬 Telegram:</span> <span className="text-white">@Lahori_Samosay</span></p>
                <p className="flex justify-between border-b border-white/10 pb-2"><span>📞 Phone Support:</span> <span className="text-white">+855 69 837 150</span></p>
                <p className="flex justify-between"><span>🏛️ ABA Banking:</span> <span className="text-white">005 724 995</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: CATERING PACKS PAGE MODULE */}
        <section id="catering" className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <span className="text-sm font-bold tracking-widest text-[#E05320] uppercase">Event & Party Catering</span>
            <h3 className="font-serif text-3xl font-bold mt-1">Host with Bold Lahori Flavour</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-[#F0E6DF] shadow-sm">
              <h4 className="font-serif font-bold text-lg text-[#E05320]">Mini Snack Platter</h4>
              <p className="text-xs text-gray-400 mt-1 mb-4">Perfect for casual office gatherings</p>
              <p className="text-2xl font-bold font-mono">$45.00</p>
              <ul className="text-sm text-gray-500 space-y-2 mt-4 border-t pt-4">
                <li>• 15 Classic Aloo Samosas</li>
                <li>• 15 Crispy Vegetable Rolls</li>
                <li>• Sweet & Spicy Chutney bowls</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl border-2 border-[#E05320] shadow-md relative">
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#E05320] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Most Popular</span>
              <h4 className="font-serif font-bold text-lg text-[#E05320]">The Royal Lahori Feast</h4>
              <p className="text-xs text-gray-400 mt-1 mb-4">Ideal for large dinner groups & family events</p>
              <p className="text-2xl font-bold font-mono">$120.00</p>
              <ul className="text-sm text-gray-500 space-y-2 mt-4 border-t pt-4">
                <li>• Large Premium Chicken Biryani Tray</li>
                <li>• 20 Hand-Folded Samosas (Choice of meat)</li>
                <li>• 12 Packs of Hot Pakoras Mix</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#F0E6DF] shadow-sm">
              <h4 className="font-serif font-bold text-lg text-[#E05320]">The Mega Samosa Box</h4>
              <p className="text-xs text-gray-400 mt-1 mb-4">Tailored for deep-fried lovers</p>
              <p className="text-2xl font-bold font-mono">$75.00</p>
              <ul className="text-sm text-gray-500 space-y-2 mt-4 border-t pt-4">
                <li>• 40 Mixed Samosas (Beef, Keema, Aloo)</li>
                <li>• Extra Mint Raita & Salad Jars</li>
                <li>• 10 Cups Masala Chai brewing kit</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 6: MONTHLY MEAL SUBSCRIPTIONS */}
        <section id="subscriptions" className="bg-[#FAF4F0] py-16 px-6 border-t border-b border-[#F0E6DF]">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs uppercase bg-[#F2994A]/20 text-[#D46013] font-bold px-3 py-1 rounded-full">Homely Food Every Day</span>
            <h3 className="font-serif text-3xl font-bold mt-3 mb-4">Monthly Tiffin & Meal Subscriptions</h3>
            <p className="text-gray-600 text-sm max-w-xl mx-auto mb-8">Save time and cash on home cooking. Get nutritious, fresh, traditional corporate packages and daily tiffin lunches dropped off at your workspace or home apartment automatically.</p>
            
            <div className="bg-white p-8 rounded-2xl border border-[#E8DEC9] text-left max-w-xl mx-auto shadow-sm">
              <h4 className="font-bold text-lg text-[#4A3525] flex justify-between"><span>🍛 Daily Traditional Plan</span> <span className="text-[#E05320]">$140/Month</span></h4>
              <p className="text-xs text-gray-400 mt-0.5">5 days a week (Monday to Friday)</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">✔ Rotational menu: Curries, Biryani plates, & Lentils</li>
                <li className="flex items-center gap-2">✔ Includes free choice of 2 samosas alongside every container</li>
                <li className="flex items-center gap-2">✔ Zero packaging charges & prompt afternoon lunch distribution</li>
              </ul>
              <button className="w-full mt-6 bg-[#4A3525] text-white font-bold py-3 rounded-xl hover:bg-[#332218] transition-colors text-sm text-center">Subscribe & Set Schedule</button>
            </div>
          </div>
        </section>

        {/* SECTION 7: CUSTOMER TESTIMONIALS */}
        <section className="bg-[#332218] text-white py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs tracking-widest text-[#F2994A] uppercase font-bold">Loved By Thousands</span>
              <h3 className="font-serif text-3xl font-bold mt-1">What Our Foodies Say</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-gray-300 text-sm leading-relaxed mb-4">"Lahori Samosay brings the authentic taste of Anarkali Bazaar right to your home. Their samosas are hands-down the best I've had outside Pakistan!"</p>
                <div className="flex items-center gap-2">
                  <span className="text-xl">👨‍🍳</span>
                  <div><h5 className="font-bold text-sm">Ahmed Khan</h5><p className="text-xs text-[#F2994A]">Food Blogger</p></div>
                </div>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-gray-300 text-sm leading-relaxed mb-4">"As a student on a budget, these are a lifesaver! Affordable, delicious, and filling. The chicken roll paratha is my study fuel!"</p>
                <div className="flex items-center gap-2">
                  <span className="text-xl">👩‍🎓</span>
                  <div><h5 className="font-bold text-sm">Sarah Williams</h5><p className="text-xs text-[#F2994A]">College Student</p></div>
                </div>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-gray-300 text-sm leading-relaxed mb-4">"I order the biryani every Friday for our team lunch. It's become a tradition. The flavors are incredible and the portions are very generous."</p>
                <div className="flex items-center gap-2">
                  <span className="text-xl">💻</span>
                  <div><h5 className="font-bold text-sm">Raj Patel</h5><p className="text-xs text-[#F2994A]">Software Engineer</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER BRYAND MODULE */}
      <footer className="bg-[#21140E] text-[#FAF4F0] pt-16 pb-8 px-6 border-t-4 border-[#E05320]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🥟</span>
              <div>
                <h3 className="font-serif font-bold text-lg text-white">Lahori Samosay</h3>
                <p className="text-[9px] tracking-widest uppercase text-[#F2994A]">Authentic Street Food</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Bringing the legendary street treats of Lahore right to your local neighborhood. Hand-folded premium delicacies with premium spices.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-4">Navigation Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home Base</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Interactive Menu</a></li>
              <li><a href="#delivery" className="hover:text-white transition-colors">Delivery Standards</a></li>
              <li><a href="#catering" className="hover:text-white transition-colors">Event Bulk Catering</a></li>
              <li><a href="#subscriptions" className="hover:text-white transition-colors">Monthly Meal Tiffins</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-4">Support Channels</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Delivery Track</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Allergen Safety</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-4">Official Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2"><span>📍</span> <span>Lahori Samosay Restaurant,<br/>Google Maps Local Guide</span></li>
              <li className="flex gap-2 text-[#F2994A] font-bold"><span>📞</span> <span>+855 69 837 150</span></li>
              <li className="flex gap-2"><span>✉️</span> <span>@lahorisamosay</span></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-xs text-gray-600 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Lahori Samosay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
