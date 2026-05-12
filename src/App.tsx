import { motion } from 'framer-motion';
import { 
  Layout, Search, ShieldCheck, Zap, 
  ShieldAlert, Network, Cpu, Send 
} from 'lucide-react';

// --- NAVBAR & LOGO (Genişletilmiş Versiyon) ---
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050608]/90 backdrop-blur-3xl border-b border-white/5">
      <div className="container mx-auto px-6 h-32 flex justify-between items-center">
        
        {/* LOGO BÖLÜMÜ - h-32 (128px) olarak güncellendi */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative h-32 w-auto flex items-center">
            <img 
              src="/logo.png" 
              alt="EsasWeb Logo" 
              className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
            {/* Logo arkasındaki siber aura */}
            <div className="absolute inset-0 bg-cyan-400 blur-[80px] opacity-10 group-hover:opacity-40 transition-opacity scale-150" />
          </div>
        </motion.div>

        {/* NAV MENÜ */}
        <div className="hidden md:flex items-center gap-12">
          {['BAŞLANGIÇ', 'HİZMETLER', 'YAKLAŞIMIM'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-[10px] font-black tracking-[0.4em] text-slate-500 hover:text-cyan-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* SAĞ TARAF: GÜVENLİ BAĞLANTI */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <button className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all duration-500 flex items-center gap-3 group text-white">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse group-hover:bg-black" />
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
    <main className="min-h-screen bg-[#050608] text-white selection:bg-cyan-500/30 font-sans overflow-x-hidden pt-32">
      <Navbar />

      {/* 1. BÖLÜM: HERO & BENTO GRID */}
      <section id="başlangiç" className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-[3rem] p-14 flex flex-col justify-end min-h-[600px] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Layout size={450} strokeWidth={0.5} />
            </div>
            <div className="relative z-10">
              <span className="label-mono text-cyan-400 text-[11px] mb-6 block tracking-[0.5em] uppercase font-bold">MODERN WEB TASARIMCISI & STRATEJİST</span>
              <h1 className="text-7xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter mb-12">
                HIZLI, MODERN <br /> VE <span className="text-gradient">ETKİLEYİCİ</span> <br /> WEB SİTELERİ.
              </h1>
              <p className="text-slate-400 max-w-lg text-xl leading-relaxed mb-12 font-light">
                Dijital dünyadaki varlığınızı sadece inşa etmiyoruz; onu siber bir disiplinle zırhlandırıyoruz.
              </p>
              <div className="flex gap-8">
                <button className="bg-white text-black px-12 py-6 rounded-2xl font-black hover:bg-cyan-400 transition-all uppercase text-xs tracking-widest shadow-2xl">Hizmetlerim</button>
                <button className="bg-white/5 border border-white/10 px-12 py-6 rounded-2xl font-black hover:bg-white/10 transition-all uppercase text-xs tracking-widest text-white">Hemen Başla</button>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 grid grid-rows-2 gap-8">
            <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-12 relative overflow-hidden">
               <span className="label-mono text-[11px] text-slate-500 block mb-10 uppercase tracking-widest">Hizmet Durumu</span>
               <div className="flex items-center gap-5">
                 <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
                 <h3 className="font-bold text-3xl uppercase tracking-tight">Web Tasarım & Geliştirme</h3>
               </div>
               <p className="text-slate-500 text-xs mt-4 font-mono uppercase tracking-[0.4em]">Modern Mimari: Aktif</p>
               <div className="mt-14 opacity-[0.03] select-none pointer-events-none">
                 <span className="text-9xl font-black uppercase tracking-tighter">KALİTE</span>
               </div>
            </div>
            <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-12 flex flex-col justify-end group hover:bg-white/[0.05] transition-all duration-500">
              <h3 className="font-bold text-3xl uppercase mb-4 group-hover:text-cyan-400 transition-colors">Estetik Tasarım</h3>
              <p className="text-slate-400 text-lg leading-relaxed font-light">Kullanıcı deneyimi ve görsel mükemmellik odaklı, siber standartlarda arayüzler.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DİĞER BÖLÜMLER (Aynı şekilde devam eder) */}
      <ApproachSection />
      <ExpertiseSection />
      <ContactSection />

      <footer className="py-20 text-center text-slate-700 text-[11px] font-mono uppercase tracking-[1.2em] opacity-40">
        © 2026 ESASWEB // DIGITAL ARMOR & MODERN WEB
      </footer>
    </main>
  );
}

// --- ALT BİLEŞENLER (TEMİZLENDİ) ---

function ApproachSection() {
  return (
    <section id="yaklaşimim" className="container mx-auto px-6 py-32 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
        <div className="lg:col-span-5 space-y-20">
          <div>
            <span className="label-mono text-slate-500 text-[11px] tracking-[0.5em] mb-6 block font-black uppercase">ÇALIŞMA METODOLOJİM</span>
            <h2 className="text-8xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter">
              PROFESYONEL <br /><span className="text-gradient">STANDARTLAR</span>.
            </h2>
          </div>
          <motion.div whileHover={{ y: -15 }} className="bg-white/[0.02] border border-white/10 rounded-[4rem] p-14 group transition-all duration-700">
            <div className="w-20 h-20 bg-cyan-400/10 rounded-3xl flex items-center justify-center text-cyan-400 mb-12 group-hover:bg-cyan-400 group-hover:text-black transition-all">
              <ShieldAlert size={40} />
            </div>
            <h3 className="text-4xl font-bold uppercase mb-8 tracking-tight">KALİTELİ ÇÖZÜMLER</h3>
            <p className="text-slate-400 text-lg leading-relaxed font-light italic">
              "Siber Vatan" disipliniyle her satır kodda %100 güvenliğe odaklanıyorum.
            </p>
          </motion.div>
        </div>
        <div className="lg:col-span-7 space-y-10">
          <MethodCard icon={<Network size={32} />} title="HIZ VE PERFORMANS" desc="Global erişime sahip, ışık hızında açılan siber yapılar." />
          <MethodCard icon={<ShieldCheck size={32} />} title="KALİTE GARANTİSİ" desc="Hatasız kod yapısı ve modern tasarımın milimetrik uyumu." />
          <MethodCard icon={<Cpu size={32} />} title="ESNEK ALTYAPI" desc="Gelecekteki büyüme senaryolarına şimdiden hazır mimariler." />
        </div>
      </div>
    </section>
  );
}

// Yardımcı bileşenlerin mantığı (MethodCard, ServiceRow) App V2 ile aynı kalarak boyutlar ölçeklendi.
function MethodCard({ icon, title, desc }: any) {
  return (
    <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-12 flex flex-col md:flex-row md:items-center gap-12 group hover:bg-white/[0.06] transition-all duration-700 border-l-8 border-l-transparent hover:border-l-cyan-400">
      <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-700">{icon}</div>
      <div><h4 className="text-2xl font-black uppercase mb-4 tracking-widest">{title}</h4><p className="text-slate-500 text-lg font-light">{desc}</p></div>
    </motion.div>
  );
}

function ExpertiseSection() {
  return (
    <section id="hizmetler" className="container mx-auto px-6 py-32 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
        <div className="lg:col-span-5">
          <span className="label-mono text-slate-500 text-[11px] tracking-[0.5em] mb-8 block uppercase font-black">UZMANLIK HİZMETLERİ</span>
          <h2 className="text-8xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter mb-12">YÜKSEK- <br />PERFORMANS <br /><span className="text-gradient">ÇÖZÜMLERİ</span>.</h2>
          <div className="flex gap-6">
            {[Layout, Search, ShieldCheck].map((Icon, i) => (
              <div key={i} className="w-20 h-20 bg-white/[0.02] border border-white/10 rounded-2xl flex items-center justify-center text-slate-500 hover:text-cyan-400 transition-all cursor-pointer group hover:border-cyan-400/50"><Icon size={28} className="group-hover:scale-125 transition-transform" /></div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7 space-y-8">
          <ServiceRow icon={<Layout size={30} />} title="Kullanıcı Odaklı Tasarım" desc="Müşteriye dönüşen, estetik ve işlevsel siber arayüzler." />
          <ServiceRow icon={<Search size={30} />} title="SEO Stratejileri" desc="Teknik optimizasyon ve içerik stratejisi ile zirveyi hedefleyin." />
          <ServiceRow icon={<ShieldCheck size={30} />} title="Modern Web Geliştirme" desc="En yeni teknolojilerle zırhlandırılmış siber altyapılar." />
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ icon, title, desc }: any) {
  return (
    <motion.div whileHover={{ x: 20 }} className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-12 flex items-start gap-12 group hover:bg-white/[0.06] transition-all duration-700 cursor-default">
      <div className="w-20 h-20 bg-cyan-400/10 rounded-3xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-1000 shadow-[0_0_30px_rgba(34,211,238,0.2)]">{icon}</div>
      <div><h4 className="text-3xl font-black uppercase mb-4 group-hover:text-cyan-400 transition-colors">{title}</h4><p className="text-slate-500 text-lg leading-relaxed max-w-xl font-light">{desc}</p></div>
    </motion.div>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="container mx-auto px-6 py-40 border-t border-white/5">
        <div className="bg-white/[0.02] border border-white/10 rounded-[5rem] p-16 md:p-32 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <h3 className="label-mono text-slate-500 mb-10 uppercase tracking-[0.6em] text-[11px] font-black">İletişime Geçin</h3>
              <h2 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter mb-12 leading-none">PROJENİZİ <br /><span className="text-gradient">ZIRHLAYALIM</span>.</h2>
            </div>
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-10">
                <input type="text" placeholder="ADINIZ" className="form-input text-lg p-7" />
                <input type="email" placeholder="E-POSTA" className="form-input text-lg p-7" />
              </div>
              <textarea rows={6} placeholder="MESAJINIZ" className="form-input text-lg p-7"></textarea>
              <button className="w-full bg-white text-black font-black py-8 rounded-3xl hover:bg-cyan-400 transition-all duration-700 uppercase tracking-[0.4em] text-sm flex items-center justify-center gap-5 group">SİNYALİ GÖNDER <Send size={22} className="group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform" /></button>
            </form>
          </div>
        </div>
      </section>
  );
}
