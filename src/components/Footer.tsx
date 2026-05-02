import { Link } from 'react-router-dom';
import { Facebook, Instagram, Music2, Map } from 'lucide-react';
import { RESTAURANT_INFO } from '@/src/data/restaurant';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-ink text-brand-paper pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <Link to="/" className="flex flex-col mb-8">
              <span className="editorial-heading text-5xl tracking-tighter">Olisipo</span>
              <span className="editorial-caps text-brand-terra">Bistro — Lisboa</span>
            </Link>
            <p className="font-sans font-light text-brand-paper/60 leading-relaxed max-w-sm mb-10">
              Honrando a tradição alfacinha com o frescor da modernidade. Sabores que contam histórias de Lisboa através dos séculos.
            </p>
            <div className="flex space-x-6">
              <a href={RESTAURANT_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-brand-paper/40 hover:text-brand-terra transition-colors">
                <Instagram size={20} />
              </a>
              <a href={RESTAURANT_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-brand-paper/40 hover:text-brand-terra transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="editorial-caps text-brand-paper/40 mb-8">Navegação</h4>
            <ul className="space-y-4 font-serif text-xl italic">
              <li><Link to="/#menu" className="hover:text-brand-terra transition-colors">O Menu</Link></li>
              <li><Link to="/#about" className="hover:text-brand-terra transition-colors">A Nossa Alma</Link></li>
              <li><Link to="/#booking" className="hover:text-brand-terra transition-colors">Reservas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="editorial-caps text-brand-paper/40 mb-8">Legal</h4>
            <ul className="space-y-4 font-serif text-xl italic">
              <li><Link to="/privacy" className="hover:text-brand-terra transition-colors">Privacidade</Link></li>
              <li><Link to="/terms" className="hover:text-brand-terra transition-colors">Termos</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-paper/10 pt-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <p className="editorial-caps text-brand-paper/40">
            &copy; {currentYear} {RESTAURANT_INFO.name} — Crafted for Excellence
          </p>
          <div className="flex flex-wrap justify-center gap-6 editorial-caps text-brand-paper/40">
            <span>Alfama, Lisboa</span>
            <span className="hidden md:inline">/</span>
            <span>Vercel Deploy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
