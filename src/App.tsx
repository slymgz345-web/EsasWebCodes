import { motion } from 'framer-motion';
import { 
  Layout, Search, ShieldCheck, Zap, 
  ShieldAlert, Network, Cpu, MousePointer2, 
  Send 
} from 'lucide-react';

// --- ANA BİLEŞEN (ORCHESTRATOR) ---
export default function App() {
  return (
    <main className="min-h-screen bg-[#050608] text-white selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      
      {/* 1. BÖLÜM: HERO & SERVICES (BENTO GRID) */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Sol Büyük Kart: Vizyon */}
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

          {/* Sağ Kolon: Durum ve Özet Kartları */}
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
              <p className="text-slate-400 text-sm leading-relaxed">
                Kullanıcı deneyimi ve görsel mükemmellik odaklı, AI Studio derinliğinde çözümler.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BÖLÜM: ÇALIŞMA METODOLOJİSİ */}
      <ApproachSection />

      {/* 3. BÖLÜM: UZMANLIK HİZMETLERİ */}
      <ExpertiseSection />

      {/* 4. BÖLÜM: İLETİŞİM (FINAL BOSS) */}
      <section id="contact" className="container mx-auto px-6 py-24 border-t border-white/5">
        <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h3 className="label-mono text-slate-500 mb-6 uppercase tracking-widest text-xs">İletişime Geçin</h3>
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                PROJENİZİ <br />
                <span className="text-gradient">ZIRHLAYALIM</span>.
              </h2>
              <p className="text-slate-400 text-lg">
                Fikirlerinizi gerçeğe dönüştürmek için terminalin başındayım. 
                Mesajınızı bırakın, sistemlerimizi senkronize edelim.
              </p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="ADINIZ" className="form-input" />
                <input type="email" placeholder="E-POSTA" className="form-input" />
              </div>
              <textarea rows={4} placeholder="MESAJINIZ" className="form-input"></textarea>
              <button className="w-full bg-white text-black font-black py-5 rounded-2xl hover:bg-cyan-400 transition-all duration-500 uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 group">
                SİNYALİ GÖNDER <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-slate-600 text-[10px] font-mono uppercase tracking-[0.5em]">
        © 2026 ESASWEB // SİBER GÜVENLİK VE MODERN WEB
      </footer>

    </main>
  );
}

// --- ALT BİLEŞENLER (HELPERS) ---

function ApproachSection() {
  return (
    <section className="container mx-auto px-6 py-24 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-12">
          <div>
            <span className="label-mono text-slate-500 text-[10px] tracking-[0.3em] uppercase mb-4 block">ÇALIŞMA METODOLOJİM</span>
            <h2 className="text-6xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
              PROFESYONEL <br /><span className="text-gradient">STANDARTLAR</span>.
            </h2>
          </div>
          <motion.div whileHover={{ y: -5 }} className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="w-14 h-14 bg-cyan-400/10 rounded-2xl flex items-center justify-center text-cyan-400 mb-8">
              <ShieldAlert size={28} />
            </div>
            <h3 className="text-2xl font-bold uppercase mb-4">KALİTELİ VE HIZLI ÇÖZÜMLER</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Siber vatan disipliniyle, her projeye butik ve güvenli bir yaklaşımla yaklaşıyorum.
            </p>
          </motion.div>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <MethodCard icon={<Network size={24} />} title="HIZ VE PERFORMANS" desc="Işık hızında açılan, global erişime sahip dijital yapılar." />
          <MethodCard icon={<ShieldCheck size={24} />} title="KALİTE GARANTİSİ" desc="Hatasız kod yapısı ve modern tasarımın mükemmel uyumu." />
          <MethodCard icon={<Cpu size={24} />} title="ESNEK ALTYAPI" desc="Gelecekteki büyümeye şimdiden hazır modüler mimariler." />
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section className="container mx-auto px-6 py-24 border-t
