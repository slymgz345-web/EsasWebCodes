import { motion } from 'framer-motion';
import { Layout, Search, ShieldCheck, Zap, ShieldAlert, Network, Cpu } from 'lucide-react';

// --- ANA BİLEŞEN (PATRON) ---
export default function App() {
  return (
    <main className="min-h-screen bg-[#050608] text-white selection:bg-cyan-500/30 font-sans">
      
      {/* 1. BÖLÜM: HERO & SERVICES (BENTO GRID) */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Sol Büyük Kart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-3xl p-10 flex flex-col justify-end min-h-[500px] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <Layout size={300} strokeWidth={0.5} />
            </div>
            <div className="relative z-10">
              <span className="label-mono text-cyan-400 text-xs mb-4 block tracking-widest uppercase">MODERN WEB TASARIMCISI & STRATEJİST</span>
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
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col justify-end">
              <h3 className="font-bold text-xl uppercase mb-2">Estetik Tasarım</h3>
              <p className="text-slate-400 text-sm">Kullanıcı deneyimi ve görsel mükemmellik odaklı çözümler.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BÖLÜM: ÇALIŞMA METODOLOJİSİ */}
      <ApproachSection />

    </main>
  );
}

// --- ALT BİLEŞEN: ÇALIŞMA METODOLOJİSİ (Burada "export default" yok!) ---
function ApproachSection() {
  return (
    <section className="container mx-auto px-6 py-24 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* SOL KOLON */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <span className="label-mono text-slate-500 text-[10px] tracking-[0.3em] uppercase mb-4 block">
              ÇALIŞMA METODOLOJİM
            </span>
            <h2 className="text-6xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
              PROFESYONEL <br />
              <span className="text-gradient">STANDARTLAR</span>.
            </h2>
          </div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 relative group"
          >
            <div className="w-14 h-14 bg-cyan-400/10 rounded-2xl flex items-center justify-center text-cyan-400 mb-8">
              <ShieldAlert size={28} />
            </div>
            <h3 className="text-2xl font-bold uppercase mb-4 tracking-tight">
              KALİTELİ VE HIZLI ÇÖZÜMLER
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Her projeye butik bir yaklaşımla yaklaşıyorum. Sadece bir web sitesi değil, markanızı yansıtan dijital bir kimlik inşa ediyoruz.
            </p>
          </motion.div>
        </div>

        {/* SAĞ KOLON */}
        <div className="lg:col-span-7 space-y-6">
          <MethodCard 
            icon={<Network size={24} />}
            title="HIZ VE PERFORMANS"
            desc="Dünya standartlarında, global erişime sahip ve ışık hızında açılan web siteleri."
          />
          <MethodCard 
            icon={<ShieldCheck size={24} />}
            title="KALİTE GARANTİSİ"
            desc="Geleceğe hazır, hatasız kod yapısı ve modern tasarım standartları."
          />
          <MethodCard 
            icon={<Cpu size={24} />}
            title="ESNEK ALTYAPI"
            desc="İşletmenizin büyümesine uyum sağlayan, modüler ve geliştirilebilir mimariler."
          />
        </div>
      </div>
    </section>
  );
}

// --- YARDIMCI BİLEŞEN: KARTLAR ---
function MethodCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row md:items-center gap-8 group hover:bg-white/[0.04] transition-all"
    >
      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-bold uppercase tracking-tight mb-2">{title}</h4>
        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}
