import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-blue-500/30">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-blue-500 font-bold text-xl tracking-tighter">ESAS WEB</div>
        <div className="flex space-x-6 text-gray-300 text-sm">
          <a href="#" className="hover:text-blue-400">Ana Sayfa</a>
          <a href="#" className="hover:text-blue-400">Hizmetler</a>
          <a href="#" className="hover:text-blue-400">İletişim</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
