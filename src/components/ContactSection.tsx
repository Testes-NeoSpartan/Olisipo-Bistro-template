import { Copy, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { RESTAURANT_INFO } from '@/src/data/restaurant';
import { copyToClipboard } from '@/src/lib/utils';
import { useState } from 'react';

export function ContactSection() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    copyToClipboard(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-paper border-t border-brand-ink/5">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <span className="editorial-caps text-brand-terra mb-4 block">
            Dê-nos um Olá
          </span>
          <h2 className="editorial-heading text-6xl md:text-8xl text-brand-ink mb-12">
            Alma de <br/> <span className="italic font-light text-brand-terra">Lisboa</span>
          </h2>

          <div className="space-y-6">
            <div className="p-8 bg-brand-stone rounded-2xl border border-brand-ink/5 group">
              <h4 className="editorial-caps text-brand-ink/40 mb-4 flex items-center gap-2">
                <MapPin size={14} /> Localização
              </h4>
              <p className="font-serif text-2xl text-brand-ink italic">{RESTAURANT_INFO.location}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <button 
                onClick={() => handleCopy(RESTAURANT_INFO.phone, 'phone')}
                className="p-8 bg-brand-stone rounded-2xl border border-brand-ink/5 group flex flex-col items-start transition-all hover:bg-brand-ash active:scale-95"
              >
                <div className="w-full flex justify-between items-center mb-4">
                  <h4 className="editorial-caps text-brand-ink/40 flex items-center gap-2">
                    <Phone size={14} /> Telefone
                  </h4>
                  <span className="editorial-caps text-[8px] text-brand-terra">Copy</span>
                </div>
                <p className="font-serif text-2xl text-brand-ink italic">{RESTAURANT_INFO.phone}</p>
              </button>

              <button 
                onClick={() => handleCopy(RESTAURANT_INFO.email, 'email')}
                className="p-8 bg-brand-stone rounded-2xl border border-brand-ink/5 group flex flex-col items-start transition-all hover:bg-brand-ash active:scale-95"
              >
                <div className="w-full flex justify-between items-center mb-4">
                  <h4 className="editorial-caps text-brand-ink/40 flex items-center gap-2">
                    <Mail size={14} /> Email
                  </h4>
                  <span className="editorial-caps text-[8px] text-brand-terra">Copy</span>
                </div>
                <p className="font-serif text-xl md:text-2xl text-brand-ink italic break-all">{RESTAURANT_INFO.email}</p>
              </button>
            </div>
          </div>
        </div>

        <div className="relative aspect-square">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
            alt="Interior layout"
            className="w-full h-full object-cover rounded-3xl shadow-2xl"
          />
          <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-2xl shadow-xl hidden md:block">
            <h5 className="font-serif text-2xl mb-4 italic text-brand-olive">Horário</h5>
            <div className="space-y-3">
              {RESTAURANT_INFO.openingHours.map((h) => (
                <div key={h.days} className="flex justify-between gap-10 border-b border-brand-cream pb-1">
                  <span className="font-display text-[10px] uppercase tracking-widest text-slate-400">{h.days}</span>
                  <span className="font-sans text-xs text-slate-600">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
