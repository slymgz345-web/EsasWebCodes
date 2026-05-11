import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-blue-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-blue-500 font-bold text-xl tracking-wider">ESAS WEB</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">Ana Sayfa</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">Hizmetler</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">İletişim</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
