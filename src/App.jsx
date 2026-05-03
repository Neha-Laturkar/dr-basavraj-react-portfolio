import { useState, useEffect } from 'react';
import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import About           from './components/About';
import Services        from './components/Services';
import Experience      from './components/Experience';
import Education       from './components/Education';
import Certifications  from './components/Certifications';
import Testimonials    from './components/Testimonials';
import Contact         from './components/Contact';
import Footer          from './components/Footer';
import ScrollToTop     from './components/ScrollToTop';
 
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
        <About          darkMode={darkMode} />
        <Services       darkMode={darkMode} />
        <Experience     darkMode={darkMode} />
        <Education      darkMode={darkMode} />
        <Certifications darkMode={darkMode} />
        <Testimonials   darkMode={darkMode} />
        <Contact        darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
      <ScrollToTop />
    </div>
  );
}