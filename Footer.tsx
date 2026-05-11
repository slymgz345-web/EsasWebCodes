import { motion } from 'motion/react';
import { ShieldAlert, Cpu, Network } from 'lucide-react';

export default function Approach() {
  const steps = [
    {
      icon: Network,
      title: 'Hız ve Performans',
      desc: 'Dünya standartlarında, global erişime sahip ve ışık hızında açılan web siteleri.'
    },
    {
      icon: ShieldAlert,
      title: 'Kalite Garantisi',
      desc: 'Geleceğe hazır, hatasız kod yapısı ve modern tasarım standartları.'
    },
    {
      icon: Cpu,
      title: 'Esnek Altyapı',
      desc: 'İşletmenizin büyümesine uyum sağlayan, modüler ve geliştirilebilir mimariler.'
    }
  ];

  return (
    <section id="approach" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/2">
             <h3 className="label-mono text-slate-500 mb-6">Çalışma Metodolojim</h3>
             <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-12">
               Profesyonel <br />
               <span className="text-gradient">Standartlar</span>.
             </h2>
             <div className="p-8 bg-white/[0.02] border border-white/10 rounded-2xl">
                <ShieldAlert size={48} className="text-cyan-custom mb-6 opacity-30" />
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Kaliteli ve Hızlı Çözümler</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Her projeye butik bir yaklaşımla yaklaşıyorum. Sadece bir web sitesi değil, markanızı yansıtan dijital bir kimlik inşa ediyoruz.
                </p>
             </div>
          </div>

          <div className="md:w-1/2 space-y-4">
             {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col gap-4 group hover:bg-white/[0.04] transition-all"
                >
                  <div className="flex items-center gap-4">
                    <step.icon size={20} className="text-cyan-custom" />
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
