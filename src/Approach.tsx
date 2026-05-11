import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto grid grid-cols-12 gap-4 h-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-12 lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2v20M2 12h20" />
            </svg>
          </div>

          <h2 className="label-mono text-cyan-custom mb-6">Modern Web Tasarımcısı & Stratejist</h2>
          
          <h1 className="text-4xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter mb-8 uppercase">
            Hızlı, Modern ve <br/>
            <span className="text-gradient">Etkileyici</span> <br/>
            Web Siteleri.
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-lg font-medium leading-relaxed mb-10">
            İşletmenizi dijital dünyada öne çıkaran, hızlı ve modern web çözümleri sunuyoruz.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#services" 
              className="px-8 py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded hover:bg-cyan-custom transition-all"
            >
              HİZMETLERİM
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-widest rounded hover:bg-white/10 transition-all"
            >
              Hemen Başla
            </a>
          </div>
        </motion.div>

        {/* Side panels (Visual representation based on design HTML) */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 bg-white/[0.02] border border-white/10 rounded-2xl p-8 flex flex-col justify-between"
          >
             <div>
              <h3 className="label-mono text-slate-500 mb-6">Hizmet Durumu</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-cyan-custom animate-pulse" />
                <span className="text-sm font-bold text-white uppercase tracking-tighter">Web Tasarım & Geliştirme</span>
              </div>
              <div className="text-[11px] text-slate-500 font-mono">MODERN MİMARİ: AKTİF</div>
            </div>
            <div className="text-4xl font-black text-white/5 uppercase select-none pointer-events-none">
              KALİTE
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1 bg-gradient-to-br from-zinc-custom to-black border border-white/10 rounded-2xl p-8 flex flex-col justify-end"
          >
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tighter">Estetik Tasarım</h3>
            <p className="text-xs text-slate-400 font-medium">Kullanıcı deneyimi ve görsel mükemmellik odaklı çözümler.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
