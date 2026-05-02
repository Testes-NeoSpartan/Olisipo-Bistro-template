import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Users, Clock, Send } from 'lucide-react';
import { useBooking } from '@/src/context/BookingContext';
import { useState } from 'react';

export function BookingModal() {
  const { isBookingOpen, closeBooking } = useBooking();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        closeBooking();
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isBookingOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBooking}
            className="absolute inset-0 bg-brand-ink/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-brand-paper w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-brand-ink text-brand-paper p-8 md:w-2/5 flex flex-col justify-between overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-terra/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
              <div>
                <span className="editorial-caps text-brand-terra mb-4 block">Reserva</span>
                <h3 className="editorial-heading text-4xl mb-6">Mesa em Alfama</h3>
              </div>
              <p className="font-sans text-sm font-light leading-relaxed opacity-60">
                Garantimos uma experiência gastronómica inesquecível. Para reservas de grupos ({'>'}8 pessoas), por favor contacte-nos por telefone.
              </p>
            </div>

            <div className="p-8 md:w-3/5">
              <button 
                onClick={closeBooking}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-brand-ash transition-colors"
              >
                <X size={20} />
              </button>

              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6">
                    <Send size={24} />
                  </div>
                  <h4 className="editorial-heading text-3xl mb-2">Pedido Recebido!</h4>
                  <p className="font-sans text-slate-500 font-light">Entraremos em contacto brevemente.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="editorial-caps text-[9px] mb-2 block">Data</label>
                        <div className="relative">
                          <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input required type="date" className="w-full bg-brand-stone border border-brand-ink/5 rounded-lg py-3 pl-10 pr-4 font-sans text-sm outline-none focus:border-brand-terra transition-colors" />
                        </div>
                      </div>
                      <div>
                        <label className="editorial-caps text-[9px] mb-2 block">Hora</label>
                        <div className="relative">
                          <Clock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                          <select required className="w-full bg-brand-stone border border-brand-ink/5 rounded-lg py-3 pl-10 pr-4 font-sans text-sm outline-none appearance-none focus:border-brand-terra transition-colors">
                            <option>12:30</option>
                            <option>13:00</option>
                            <option>19:30</option>
                            <option>20:00</option>
                            <option>21:00</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="editorial-caps text-[9px] mb-2 block">Pessoas</label>
                      <div className="relative">
                        <Users size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <select required className="w-full bg-brand-stone border border-brand-ink/5 rounded-lg py-3 pl-10 pr-4 font-sans text-sm outline-none appearance-none focus:border-brand-terra transition-colors">
                          <option>1 Pessoa</option>
                          <option>2 Pessoas</option>
                          <option>3 Pessoas</option>
                          <option>4 Pessoas</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-brand-ink/5">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-brand-ink text-brand-paper py-4 rounded-xl editorial-caps hover:bg-brand-terra transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? 'A Processar...' : 'Confirmar Disponibilidade'}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
