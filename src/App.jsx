import { useState, useEffect } from 'react';
import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import About           from './components/About';
import Services        from './components/Services';
import Experience      from './components/Experience';
import Education       from './components/Education';
import Certifications  from './components/Certifications';

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
        <About           darkMode={darkMode} />
        <Services        darkMode={darkMode} />
        <Experience      darkMode={darkMode} />
        <Education       darkMode={darkMode} />
        <Certifications  darkMode={darkMode} />

        {/* Phase 4 placeholder */}
        <div className={`min-h-[20vh] flex items-center justify-center ${darkMode ? 'bg-navy-900' : 'bg-slate-50'}`}>
          <p className={`font-body text-base ${darkMode ? 'text-white/25' : 'text-gray-300'}`}>
            ⏳ Testimonials · Contact · Footer — coming in Phase 4…
          </p>
        </div>
      </main>
    </div>
  );
}
