import Link from 'next/link';
import { Atom } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-deep-space/80 border-t border-white/10 pt-12 pb-8 mt-auto z-10 relative backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <Atom className="w-6 h-6 text-scientific-purple group-hover:text-electric-cyan transition-colors" />
              <span className="font-bold text-lg tracking-wider text-soft-white">
                SADIA AMJAD
              </span>
            </Link>
            <p className="text-soft-white/60 text-sm max-w-sm">
              Exploring Physics, Inspiring Minds, Building Future Scientists.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-soft-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Experience', 'Education', 'Research'].map((link) => (
                <li key={link}>
                  <Link 
                    href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-sm text-soft-white/60 hover:text-electric-cyan transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-soft-white mb-4">Contact</h3>
            <p className="text-sm text-soft-white/60 mb-2">
              <a href="mailto:sa3701195@gmail.com" className="hover:text-electric-cyan transition-colors">sa3701195@gmail.com</a>
            </p>
            <p className="text-sm text-soft-white/60">
              <a href="tel:+923056119809" className="hover:text-electric-cyan transition-colors">+92 305 6119809</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-soft-white/40">
          <p>&copy; {currentYear} Sadia Amjad. All rights reserved.</p>
          <p>Designed with a passion for Physics & Education.</p>
        </div>
      </div>
    </footer>
  );
}
