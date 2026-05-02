import { motion } from 'motion/react';
import { RESTAURANT_INFO } from '@/src/data/restaurant';
import { useBooking } from '@/src/context/BookingContext';

export function Hero() {
  const { openBooking } = useBooking();

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with zoom effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop"
          alt="Lisbon dining atmosphere"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-20 text-center px-6">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="editorial-caps text-white mb-6 block"
        >
          {RESTAURANT_INFO.tagline}
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="editorial-heading text-white text-7xl md:text-9xl lg:text-[160px] mb-12"
        >
          Olisipo <br/> <span className="italic font-light text-brand-terra">Bistro</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#menu"
            className="px-10 py-5 bg-white text-brand-ink rounded-full editorial-caps hover:bg-brand-ash transition-all duration-300"
          >
            Descobrir o Menu
          </a>
          <button 
            onClick={openBooking}
            className="px-10 py-5 border-2 border-white text-white rounded-full editorial-caps hover:bg-white hover:text-brand-ink transition-all duration-300"
          >
            Fazer Reserva
          </button>
        </motion.div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="flex flex-col items-center space-y-4">
           <span className="writing-vertical-rl text-white/40 font-display text-[10px] uppercase tracking-widest rotate-180">
            Est. 2024
          </span>
          <div className="w-px h-24 bg-white/20" />
        </div>
      </div>
    </section>
  );
}
