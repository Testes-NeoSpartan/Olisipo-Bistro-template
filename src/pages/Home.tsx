import { SEO } from '@/src/components/SEO';
import { Hero } from '@/src/components/Hero';
import { MenuSection } from '@/src/components/MenuSection';
import { ContactSection } from '@/src/components/ContactSection';
import { motion } from 'motion/react';

export function Home() {
  return (
    <>
      <SEO />
      <Hero />
      
      {/* Short manifest section */}
      <section id="about" className="py-24 md:py-32 bg-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2132&auto=format&fit=crop" 
              alt="Kitchen craft"
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -top-10 -right-10 w-64 h-64 border border-brand-gold/30 rounded-full z-0 animate-spin-slow" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="editorial-caps text-brand-terra mb-4 block">
              A Nossa Filosofia
            </span>
            <h2 className="editorial-heading text-6xl md:text-8xl text-brand-ink mb-8">
              Tradição que <br /> <span className="italic font-light">se Saboreia</span>
            </h2>
            <p className="font-sans text-xl text-brand-ink/80 font-light leading-relaxed mb-6">
              No Olisipo Bistro, acreditamos que a cozinha é o elo mais forte entre o passado e o presente. 
            </p>
            <p className="font-sans text-brand-ink/60 font-light leading-relaxed mb-10">
              Cada prato é uma homenagem aos mercados de Lisboa, aos produtores locais e às receitas que passaram de geração em geração, agora elevadas por técnicas contemporâneas e uma paixão inabalável pela excelência.
            </p>
            <div className="flex items-center space-x-12">
              <div>
                <span className="block font-serif text-4xl text-brand-ink italic">100%</span>
                <span className="editorial-caps text-brand-ink/40">Produtos Locais</span>
              </div>
              <div>
                <span className="block font-serif text-4xl text-brand-ink italic">Est. 2024</span>
                <span className="editorial-caps text-brand-ink/40">Em Alfama</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <MenuSection />
      
      {/* Atmospheric Break */}
      <section className="relative py-48 bg-brand-ink overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1528605248644-14dd04cb11c1?q=80&w=2670&auto=format&fit=crop" 
            alt="Lisbon street" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h3 className="editorial-heading text-white text-5xl md:text-8xl italic">
            "Lisboa tem sotaque de mar <br className="hidden md:block" /> e sabor a fado."
          </h3>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
