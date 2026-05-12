import { motion } from 'framer-motion';
import { 
  Layout, Search, ShieldCheck, Zap, 
  ShieldAlert, Network, Cpu, Send 
} from 'lucide-react';

// --- NAVBAR & LOGO ---
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050608]/90 backdrop-blur-2xl border-b border-white/5">
      <div className="container mx-auto px-6 h-24 flex justify-between items-center">
        
        {/* LOGO BÖLÜMÜ - Boyut h-24 olarak güncellendi */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative h-24 w-auto flex items-center">
            <img 
              src="/logo.png" 
              alt="EsasWeb Logo" 
              className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
            {/* Logo arkasındaki siber ışıltı */}
            <div className="absolute inset-0 bg-cyan-400 blur-[50px] opacity-10 group-hover:opacity-30 transition-opacity scale-125" />
          </div>
        </motion.div>

        {/* NAV MENÜ */}
        <div className="hidden md:flex items-center gap-10">
          {['BAŞLANGIÇ', 'HİZMETLER', 'YAKLAŞIMIM'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-[10px] font-black tracking-[0.3em] text-slate-500 hover:text-cyan-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* SAĞ TARAF: GÜVENLİ BAĞLANTI */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <button className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all duration-500 flex items-center gap-3 group text-white">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse group-hover:bg-black" />
            GÜVENLİ BAĞLANTI
          </button>
        </motion.div>
      </div>
    </nav>
  );
}

// --- ANA APP BİLEŞENİ ---
export default function App() {
  return (
    <main className="min-h-screen bg-[#050608] text-white selection:bg-cyan-500/30 font-sans overflow-x-hidden pt-24">
      <Navbar />

      {/* 1. BÖLÜM: HERO & BENTO GRID */}
      <section id="başlangiç" className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-12 flex flex-col justify-end min-h-[550px] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Layout size={400} strokeWidth={0.5} />
            </div>
            <div className="relative z-10">
              <span className="label-mono text-cyan-400 text-xs mb-6 block tracking-[0.4em] uppercase">MODERN WEB TASARIMCISI & STRATEJİST</span>
              <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-10">
                HIZLI, MODERN <br /> VE <span className="text-gradient">ETKİLEYİCİ</span> <br /> WEB SİTELERİ.
              </h1>
              <p className="text-slate-400 max-w-md text-xl leading-relaxed mb-10">
                İşletmenizi dijital dünyada öne çıkaran, en gelişmiş teknolojilerle zırhlandırılmış çözümler.
              </p>
              <div className="flex gap-6">
                <button className="bg-white text-black px-10 py-5 rounded-2xl font-black hover:bg-cyan-400 transition-all uppercase text-xs tracking-widest shadow-2xl shadow-white/5">Hizmetlerim</button>
                <button className="bg-white/5 border border-white/10 px-10 py-5 rounded-2xl font-black hover:bg-white/10 transition-all uppercase text-xs tracking-widest text-white">Hemen Başla</button>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 grid grid-rows-2 gap-6">
            <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden">
               <span className="label-mono text-[10px] text-slate-500 block mb-8 uppercase tracking-widest">Hizmet Durumu</span>
               <div className="flex items-center gap-4">
                 <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                 <h3 className="font-bold text-2xl uppercase tracking-tight">Web Tasarım & Geliştirme</h3>
               </div>
               <p className="text-slate-500 text-xs mt-3 font-mono uppercase tracking-[0.3em]">Modern Mimari: Aktif</p>
               <div className="mt-12 opacity-[0.03] select-none">
                 <span className="text-9xl font-black uppercase">KALİTE</span>
               </div>
            </div>
            <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-end group hover:bg-white/[0.04] transition-all">
              <h3 className="font-bold text-2xl uppercase mb-3 group-hover:text-cyan-400 transition-colors">Estetik Tasarım</h3>
              <p className="text-slate-400 text-base leading-relaxed">Kullanıcı deneyimi ve görsel mükemmellik odaklı, siber standartlarda arayüzler.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BÖLÜM: METODOLOJİ */}
      <ApproachSection />

      {/* 3. BÖLÜM: UZMANLIK */}
      <ExpertiseSection />

      {/* 4. BÖLÜM: İLETİŞİM */}
      <section id="contact" className="container mx-auto px-6 py-32 border-t border-white/5">
        <div className="bg-white/[0.02] border border-white/10 rounded-[4rem] p-10 md:p-24 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h3 className="label-mono text-slate-500 mb-8 uppercase tracking-[0.5em] text-[10px]">İletişime Geçin</h3>
              <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-10 leading-none">
                SİSTEME <br />
                <span className="text-gradient">KATILIN</span>.
              </h2>
              <p className="text-slate-400 text-xl leading-relaxed max-w-sm font-light">
                TEKNOFEST birincisi bir disiplinle projenizi inşa etmek için terminalin başındayım.
              </p>
            </div>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <input type="text" placeholder="ADINIZ" className="form-input" />
                <input type="email" placeholder="E-POSTA" className="form-input" />
              </div>
              <textarea rows={5} placeholder="MESAJINIZ" className="form-input"></textarea>
              <button className="w-full bg-white text-black font-black py-6 rounded-3xl hover:bg-cyan-400 transition-all duration-500 uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-4 group">
                SİNYALİ GÖNDER <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-16 text-center text-slate-700 text-[10px] font-mono uppercase tracking-[1em] opacity-50">
        © 2026 ESASWEB // SİBER GÜVENLİK VE MODERN WEB MİMARİSİ
      </footer>
    </main>
  );
}

// --- ALT BİLEŞENLER ---

function ApproachSection() {
  return (
    <section id="yaklaşimim" className="container mx-auto px-6 py-28 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 space-y-16">
          <div>
            <span className="label-mono text-slate-500 text-[10px] tracking-[0.4em] uppercase mb-6 block font-bold">ÇALIŞMA METODOLOJİM</span>
            <h2 className="text-7xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter">
              PROFESYONEL <br /><span className="text-gradient">STANDARTLAR</span>.
            </h2>
          </div>
          <motion.div whileHover={{ y: -10 }} className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-10 md:p-14 group transition-all">
            <div className="w-16 h-16 bg-cyan-400/10 rounded-3xl flex items-center justify-center text-cyan-400 mb-10 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-500">
              <ShieldAlert size={32} />
            </div>
            <h3 className="text-3xl font-bold uppercase mb-6 tracking-tight">KALİTELİ ÇÖZÜMLER</h3>
            <p className="text-slate-400 text-base leading-relaxed font-light">
              Siber vatan disipliniyle, her projeye butik ve %100 güvenli bir yaklaşımla odaklanıyorum.
            </p>
          </motion.div>
        </div>
        <div className="lg:col-span-7 space-y-8">
          <MethodCard icon={<Network size={28} />} title="HIZ VE PERFORMANS" desc="Global erişime sahip, ışık hızında açılan siber yapılar." />
          <MethodCard icon={<ShieldCheck size={28} />} title="KALİTE GARANTİSİ" desc="Hatasız kod yapısı ve modern tasarımın milimetrik uyumu." />
          <MethodCard icon={<Cpu size={28} />} title="ESNEK ALTYAPI" desc="Gelecekteki büyüme senaryolarına şimdiden hazır mimariler." />
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section id="hizmetler" className="container mx-auto px-6 py-28 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-5">
          <span className="label-mono text-slate-500 text-[10px] tracking-[0.4em] mb-6 block uppercase font-bold text-white/40">UZMANLIK HİZMETLERİ</span>
          <h2 className="text-7xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-10">YÜKSEK- <br />PERFORMANS <br /><span className="text-gradient">ÇÖZÜMLERİ</span>.</h2>
          <div className="flex gap-5">
            {[Layout, Search, ShieldCheck].map((Icon, i) => (
              <div key={i} className="w-16 h-16 bg-white/[0.02] border border-white/10 rounded-2xl flex items-center justify-center text-slate-500 hover:text-cyan-400 transition-all cursor-pointer group hover:border-cyan-400/50"><Icon size={24} className="group-hover:scale-125 transition-transform duration-500" /></div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <ServiceRow icon={<Layout size={26} />} title="Kullanıcı Odaklı Tasarım" desc="Müşteriye dönüşen, estetik ve işlevsel siber arayüzler." />
          <ServiceRow icon={<Search size={26} />} title="SEO Stratejileri" desc="Arama motorlarında zirveyi hedefleyen teknik optimizasyon." />
          <ServiceRow icon={<ShieldCheck size={26} />} title="Modern Web Geliştirme" desc="En yeni teknolojilerle zırhlandırılmış yüksek performanslı altyapılar." />
        </div>
      </div>
    </section>
  );
}

function MethodCard({ icon, title, desc }: any) {
  return (
    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 flex flex-col md:flex-row md:items-center gap-10 group hover:bg-white/[0.05] transition-all duration-500 border-l-4 border-l-transparent hover:border-l-cyan-400">
      <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <div>
        <h4 className="text-xl font-bold uppercase mb-3 tracking-widest">{title}</h4>
        <p className="text-slate-500 text-base font-light leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function ServiceRow({ icon, title, desc }: any) {
  return (
    <motion.div whileHover={{ x: 15 }} className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 flex items-start gap-10 group hover:bg-white/[0.05] transition-all duration-500 cursor-default">
      <div className="w-16 h-16 bg-cyan-400/10 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-700 shadow-xl">{icon}</div>
      <div>
        <h4 className="text-2xl font-black uppercase mb-3 group-hover:text-cyan-400 transition-colors tracking-tight">{title}</h4>
        <p className="text-slate-500 text-base leading-relaxed max-w-lg font-light">{desc}</p>
      </div>
    </motion.div>
  );
}
