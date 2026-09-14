'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Atom, Download } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Education', path: '/education' },
  { name: 'Skills', path: '/skills' },
  { name: 'Research', path: '/research' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-deep-space/80 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="animate-[spin_10s_linear_infinite]">
              <Atom className="w-8 h-8 text-electric-cyan" />
            </div>
            <span className="font-bold text-xl tracking-wider text-soft-white group-hover:text-electric-cyan transition-colors">
              SADIA AMJAD
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative text-sm font-medium transition-colors hover:text-electric-cyan ${
                  pathname === link.path ? 'text-electric-cyan' : 'text-soft-white/80'
                }`}
              >
                {link.name}
                {pathname === link.path && (
                  <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-electric-cyan" />
                )}
              </Link>
            ))}
            <a
              href="/Sadia_Amjad_CV.pdf"
              download
              className="ml-2 px-5 py-2 rounded-full border border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-deep-space transition-colors text-sm font-bold flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden p-2 text-soft-white hover:text-electric-cyan transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-deep-space/95 backdrop-blur-lg border-b border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-5 duration-200">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                    pathname === link.path
                      ? 'bg-white/10 text-electric-cyan'
                      : 'text-soft-white hover:bg-white/5 hover:text-electric-cyan'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-white/10">
                <a
                  href="/Sadia_Amjad_CV.pdf"
                  download
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-base font-bold bg-electric-cyan text-deep-space hover:bg-plasma-blue transition-colors"
                >
                  <Download className="w-5 h-5" /> Download Resume
                </a>
              </div>
            </div>
          </div>
        )}
    </header>
  );
}
