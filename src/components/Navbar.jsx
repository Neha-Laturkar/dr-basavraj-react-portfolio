import { useState, useEffect } from 'react';
import { Heart, Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Education',    href: '#education' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeId,  setActiveId]  = useState('');

  /* ── scroll state & active section tracking ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = NAV_LINKS.map(l => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveId(ids[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── close mobile menu on resize ── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  /* ── derived styles ── */
  const navBg = scrolled
    ? darkMode
      ? 'bg-navy-900/96 shadow-2xl shadow-black/40 border-b border-white/8'
      : 'bg-white/96 shadow-lg shadow-gray-900/8 border-b border-gray-100/80'
    : 'bg-transparent';

  return (
    <>
      {/* ═══ NAVBAR ═══════════════════════════════════════ */}
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 backdrop-blur-xl ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group"
              aria-label="Home"
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-glow-teal group-hover:scale-105 transition-transform duration-300">
                <Heart className="w-5 h-5 text-white" fill="currentColor" style={{ animation: 'heartbeat 1.4s ease-in-out infinite' }} />
              </div>
              <div className="text-left">
                <p className={`font-display font-bold text-[17px] leading-none ${darkMode ? 'text-white' : 'text-navy-800'}`}>
                  Dr. Basavaraj S
                </p>
                <p className="font-body text-[11px] text-teal-500 tracking-wider mt-0.5 uppercase font-medium">
                  Cardiologist
                </p>
              </div>
            </button>

            {/* Desktop links */}
            <ul className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map(({ label, href }) => {
                const id = href.slice(1);
                const isActive = activeId === id;
                return (
                  <li key={label}>
                    <button
                      onClick={() => scrollTo(href)}
                      className={`relative px-4 py-2 rounded-lg font-body font-medium text-sm transition-all duration-200
                        ${isActive
                          ? 'text-teal-500'
                          : darkMode
                            ? 'text-white/70 hover:text-white'
                            : 'text-gray-600 hover:text-navy-800'}
                      `}
                    >
                      {label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-lg bg-teal-500/10"
                          style={{ zIndex: -1 }}
                          transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Dark mode toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? 'text-amber-300 hover:bg-white/10' : 'text-gray-500 hover:bg-gray-100'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#contact')}
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl
                           bg-gradient-to-r from-teal-500 to-teal-600 text-white
                           font-body font-semibold text-sm shadow-md shadow-teal-500/25
                           hover:shadow-glow-teal transition-shadow duration-300"
              >
                <Heart className="w-4 h-4" fill="currentColor" />
                Book Appointment
              </motion.button>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  darkMode ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'
                }`}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ═══ MOBILE DRAWER ════════════════════════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className={`fixed inset-y-0 right-0 z-50 w-72 flex flex-col pt-20 px-6 pb-8 gap-2 lg:hidden shadow-2xl
                ${darkMode ? 'bg-navy-900 border-l border-white/10' : 'bg-white border-l border-gray-100'}`}
            >
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.button
                  key={label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.055 }}
                  onClick={() => scrollTo(href)}
                  className={`flex items-center gap-3 w-full text-left px-4 py-3.5 rounded-xl font-body font-semibold text-base transition-all
                    ${activeId === href.slice(1)
                      ? 'text-teal-500 bg-teal-50 dark:bg-teal-500/15'
                      : darkMode
                        ? 'text-white/80 hover:bg-white/8 hover:text-white'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-navy-800'
                    }`}
                >
                  {label}
                </motion.button>
              ))}

              <div className="mt-auto">
                <button
                  onClick={() => scrollTo('#contact')}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600
                             text-white font-semibold font-body shadow-md hover:shadow-glow-teal transition-shadow"
                >
                  Book Appointment
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
