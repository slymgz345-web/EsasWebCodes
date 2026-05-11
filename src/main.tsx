import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-dark-bg mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-4">
              <img 
                src="https://api.aistudio.google.com/v1/artifacts/1bb12ae3-7fdb-433d-a50a-2879dcdcb26e/input_file_0.png" 
                alt="EsasWeb Logo" 
                className="h-8 w-auto object-contain brightness-0 invert opacity-70"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-lg font-black tracking-tighter text-white uppercase">
                EsasWeb<span className="text-cyan-custom">.</span>
              </span>
            </a>
          </div>

          <div className="flex gap-12">
            {[
              { label: 'Platform', value: 'Modern Web' },
              { label: 'Standart', value: 'Yüksek Kalite' },
              { label: 'Hizmet', value: '7/24 Aktif' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="label-mono text-slate-600 mb-1">{stat.label}</span>
                <span className="text-[11px] font-bold text-slate-400">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6 text-[10px] font-mono text-slate-600 uppercase">
          <div>© 2024 ESASWEB DIJITAL | PROFESYONEL WEB TASARIM</div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-cyan-custom" />
               GÜVENLİ BAĞLANTI
            </span>
            <span className="text-cyan-900">v1.0.0-PRO</span>
            <div className="flex items-center gap-2 text-cyan-custom/40">
              <Shield size={12} />
              MODERN TASARIM
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
