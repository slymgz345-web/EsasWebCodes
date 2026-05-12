import { motion } from 'framer-motion';

export default function App() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="label-mono text-slate-500 mb-6">İletişime Geçin</h3>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-10 leading-none">
              Hemen <br />
              <span className="text-gradient">Başlayalım</span>.
            </h2>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="ADINIZ"
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-xs font-mono text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <input
                  type="email"
                  placeholder="E-POSTA ADRESİNİZ"
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-xs font-mono text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <textarea
                rows={4}
                placeholder="MESAJINIZ"
                className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-xs font-mono text-white focus:outline-none focus:border-cyan-400 transition-colors"
              ></textarea>
              <button className="bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-cyan-400 transition-all duration-300 tracking-widest text-xs">
                MESAJI GÖNDER
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
