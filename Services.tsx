import { motion } from 'motion/react';

export default function Navbar() {
  const navItems = [
    { name: 'Başlangıç', href: '#' },
    { name: 'Hizmetler', href: '#services' },
    { name: 'Yaklaşımım', href: '#approach' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
    >
      <div className="container mx-auto flex justify-between items-center bg-dark-bg/50 backdrop-blur-md px-6 py-3 rounded-xl border border-white/5 shadow-2xl">
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-3">
            <img 
              src="https://api.aistudio.google.com/v1/artifacts/1bb12ae3-7fdb-433d-a50a-2879dcdcb26e/input_file_0.png" 
              alt="EsasWeb Logo" 
              className="h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
              onLoad={(e) => {
                // If image loads, we can optionally hide text or just keep both
                // For now, let's just make sure both look good or image takes priority
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="text-xl font-bold tracking-tighter text-white uppercase">
              EsasWeb<span className="text-cyan-custom font-black">.</span>
            </span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-cyan-custom transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <button className="px-5 py-2 bg-white/5 border border-white/10 rounded text-[11px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
          Güvenli Bağlantı
        </button>
      </div>
    </motion.nav>
  );
}
