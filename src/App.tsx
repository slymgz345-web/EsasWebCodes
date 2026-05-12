import { motion } from 'framer-motion';
import { Layout, Search, ShieldCheck, Zap } from 'lucide-react';

export default function App() {
  return (
    <main className="min-h-screen bg-[#050608] text-white selection:bg-cyan-500/30 font-sans">
      
      {/* --- HERO & SERVICES SECTION (BENTO GRID) --- */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Sol Büyük Kart: Başlık */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-3xl p-10 flex flex-col justify-end min-h-[500px] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <Layout size={300} strokeWidth={0.5} />
            </div>
            <div className="relative z-10">
              <span className="label-mono text-cyan-400 text-xs mb-4 block tracking-widest">MODERN WEB TASARIMCISI & STRATEJİST</span>
              <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
                HIZLI, MODERN <br /> VE <span className="text-gradient">ETKİLEYİCİ</span> <br /> WEB SİTELERİ.
              </h1>
              <p className="text-slate-400 max-w-md text-lg leading-relaxed">
                İşletmenizi dijital dünyada öne çıkaran, hızlı ve modern web çözümleri sunuyoruz.
              </p>
              <div className="flex gap-4 mt-10">
                <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-cyan-400 transition-all uppercase text-xs tracking-widest">Hizmetlerim</button>
                <button className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all uppercase text-xs tracking-widest">Hemen Başla</button>
              </div>
            </div>
          </motion.div>

          {/* Sağ Kolon: Küçük Kartlar */}
          <div className="lg:col-span-5 grid grid-rows-2 gap-6">
            
            {/* Hizmet Durumu Kartı */}
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 relative overflow-hidden">
               <span className="label-mono text-[10px] text-slate-500 block mb-6 uppercase">Hizmet Durumu</span>
               <div className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                 <h3 className="font-bold text-xl uppercase tracking-tight">Web Tasarım & Geliştirme</h3>
               </div>
               <p className="text-slate-500 text-xs mt-2 font-mono uppercase tracking-widest">Modern Mimari: Aktif</p>
               <div className="mt-10 opacity-5">
                 <span className="text-8xl font-black uppercase">KALİTE</span>
               </div>
            </div>

            {/* Estetik Tasarım Kartı */}
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col justify-end">
              <h3 className="font-bold text-xl uppercase mb-2">Estetik Tasarım</h3>
              <p className="text-slate-400 text-sm">Kullanıcı deneyimi ve görsel mükemmellik odaklı çözümler.</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- SERVICES LIST (ICON CARDS) --- */}
      <section className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard icon={<Layout size={20} />} title="KULLANICI ODAKLI TASARIM" desc="Ziyaretçilerinizi müşteriye dönüştüren, estetik ve işlevsel arayüz mimarileri." />
          <ServiceCard icon={<Search size={20} />} title="SEO STRATEJİLERİ" desc="Arama motorlarında üst sıralarda yer almanız için teknik optimizasyon ve içerik stratejisi." />
          <ServiceCard icon={<ShieldCheck size={20} />} title="MODERN WEB GELİŞTİRME" desc="En yeni teknolojilerle inşa edilmiş, hızlı ve tüm cihazlarla uyumlu altyapılar." />
        </div>
      </section>

      {/* Daha önce yaptığımız İletişim Formu buraya eklenebilir */}
      
    </main>
  );
}

function ServiceCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-white/[0.01] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.03] transition-all group">
      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="font-bold text-lg mb-3 tracking-tight uppercase">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
