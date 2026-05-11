import { motion } from 'motion/react';
import { Layout, Search, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Layout,
      title: 'Kullanıcı Odaklı Tasarım',
      desc: 'Ziyaretçilerinizi müşteriye dönüştüren, estetik ve işlevsel arayüz mimarileri.',
      accent: 'bg-cyan-custom/10 text-cyan-custom'
    },
    {
      icon: Search,
      title: 'SEO Stratejileri',
      desc: 'Arama motorlarında üst sıralarda yer almanız için teknik optimizasyon ve içerik stratejisi.',
      accent: 'bg-blue-custom/10 text-blue-custom'
    },
    {
      icon: ShieldCheck,
      title: 'Modern Web Geliştirme',
      desc: 'En yeni teknolojilerle inşa edilmiş, hızlı ve tüm cihazlarla uyumlu altyapılar.',
      accent: 'bg-purple-custom/10 text-purple-custom'
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="label-mono text-slate-500 mb-6">Uzmanlık Hizmetleri</h3>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
              Yüksek-Performans <br />
              <span className="text-gradient">Çözümleri</span>.
            </h2>
            <p className="text-slate-400 max-w-md text-lg leading-relaxed mb-8">
              Dijital dünyadaki varlığınızı sadece inşa etmiyoruz; onu en gelişmiş teknolojilerle zırhlandırıyoruz.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-crosshair">
                <Layout size={20} className="text-cyan-custom" />
              </div>
              <div className="w-12 h-12 rounded border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-crosshair">
                <Search size={20} className="text-blue-custom" />
              </div>
              <div className="w-12 h-12 rounded border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-crosshair">
                <ShieldCheck size={20} className="text-purple-custom" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white/[0.02] rounded-2xl border border-white/5 flex items-center gap-6 group hover:border-white/20 transition-all"
              >
                <div className={`w-14 h-14 rounded-lg flex-shrink-0 flex items-center justify-center ${service.accent} transition-transform group-hover:scale-110`}>
                  <service.icon size={24} />
                </div>
                <div>
                  <div className="text-lg font-bold text-white uppercase tracking-tight mb-1">{service.title}</div>
                  <div className="text-sm text-slate-500 leading-relaxed">{service.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
