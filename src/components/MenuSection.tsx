import { motion } from 'motion/react';
import { MENU_HIGHLIGHTS } from '@/src/data/restaurant';

export function MenuSection() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-brand-paper border-t border-brand-ink/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="editorial-caps text-brand-terra mb-4 block">
              A Nossa Seleção
            </span>
            <h2 className="editorial-heading text-6xl md:text-8xl text-brand-ink">
              Sabores <br/> <span className="italic font-light">da Terra</span>
            </h2>
          </div>
          <p className="font-sans text-brand-ink/60 max-w-sm mb-2">
            Uma curadoria dos melhores produtos portugueses, trabalhados com o máximo respeito pela natureza e sazonalidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {MENU_HIGHLIGHTS.map((category, idx) => (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <h3 className="font-serif text-3xl mb-10 border-b border-brand-cream pb-4 italic">
                {category.category}
              </h3>
              <div className="space-y-10">
                {category.items.map((item) => (
                  <div key={item.name} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-display text-xs uppercase tracking-widest text-brand-ink group-hover:text-brand-terra transition-colors duration-300">
                        {item.name}
                      </h4>
                      <span className="font-serif text-lg opacity-60 ml-4">{item.price}</span>
                    </div>
                    <p className="font-sans text-sm text-brand-ink/50 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="font-serif text-xl italic text-slate-400 mb-8 max-w-2xl mx-auto">
            "A gastronomia é a arte de usar comida para criar felicidade."
          </p>
          <button 
            onClick={() => alert('O menu completo (PDF) está a ser atualizado. Por favor, consulte as nossas opções da época acima.')}
            className="px-12 py-4 bg-brand-ink text-white editorial-caps hover:bg-brand-terra transition-all duration-500 shadow-lg"
          >
            Ver Menu Completo (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}
