import { useState, useEffect } from 'react';
import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import About     from './components/About';
import Services  from './components/Services';
import './index.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About    darkMode={darkMode} />
        <Services darkMode={darkMode} />

        {/* Phase 3 placeholder */}
        <div className={`min-h-[25vh] flex items-center justify-center ${darkMode ? 'bg-navy-800' : 'bg-slate-50'}`}>
          <p className={`font-body text-lg ${darkMode ? 'text-white/25' : 'text-gray-300'}`}>
            ⏳ Experience · Education · Testimonials · Contact — coming in Phase 3 & 4…
          </p>
        </div>
      </main>
    </div>
  );
}
