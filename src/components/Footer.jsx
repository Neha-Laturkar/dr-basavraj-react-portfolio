import { motion } from 'framer-motion';
import { Heart, Mail, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
const QUICK_LINKS = [
  { label: 'About Dr. Basavaraj', href: '#about' },
  { label: 'Services & Treatments', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Book Appointment', href: '#contact' },
];
 
const SERVICES_LIST = [
  'Interventional Cardiology',
  'Electrophysiology',
  'Cardiac Ablation',
  'Pacemaker Implantation',
  'ECG & Holter Monitoring',
  'Emergency Cardiac Care',
];
 
export default function Footer({ darkMode }) {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
 
  return (
    <footer className="bg-[#060e24] text-white">
      {/* Top CTA banner */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl text-white mb-1">
              Your heart deserves the best care.
            </h3>
            <p className="font-body text-white/80 text-sm">
              Don't wait — early consultation can be lifesaving.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('#contact')}
            className="flex-shrink-0 px-7 py-3.5 rounded-xl bg-white text-teal-600
                       font-body font-bold shadow-xl hover:shadow-2xl transition-shadow"
          >
            Book Appointment →
          </motion.button>
        </div>
      </div>
 
      {/* Main footer body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
 
          {/* Column 1 – Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/30">
                <Heart className="w-5 h-5 text-white" fill="currentColor" style={{ animation: 'heartbeat 1.4s ease-in-out infinite' }} />
              </div>
              <div>
                <p className="font-display font-bold text-[17px] text-white leading-none">Dr. Basavaraj S</p>
                <p className="font-body text-teal-400 text-[11px] tracking-wider mt-0.5 uppercase">Interventional Cardiologist</p>
              </div>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed mb-6">
              Providing world-class interventional cardiology and electrophysiology care to the 
              people of Maharashtra and beyond.
            </p>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:drbasu394@yahoo.co.in" className="flex items-center gap-2.5 text-white/55 hover:text-teal-400 font-body text-sm transition-colors">
                <Mail className="w-4 h-4" /> drbasu394@yahoo.co.in
              </a>
              <span className="flex items-center gap-2.5 text-white/55 font-body text-sm">
                <MapPin className="w-4 h-4 text-teal-500" /> Solapur, Maharashtra, India
              </span>
            </div>
          </div>
 
          {/* Column 2 – Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base text-white mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="flex items-center gap-1.5 font-body text-sm text-white/50 hover:text-teal-400 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-teal-500/50 group-hover:text-teal-400 group-hover:translate-x-0.5 transition-all" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Column 3 – Services */}
          <div>
            <h4 className="font-display font-bold text-base text-white mb-5">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {SERVICES_LIST.map((s) => (
                <li key={s} className="flex items-center gap-1.5 font-body text-sm text-white/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
 
          {/* Column 4 – Social + Hours */}
          <div>
            <h4 className="font-display font-bold text-base text-white mb-5">Connect</h4>
            <div className="flex flex-col gap-3 mb-7">
              <a
                href="https://www.linkedin.com/in/dr-basavaraj-s-14221570"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-blue-600/20 border border-white/8 hover:border-blue-500/30 transition-all group"
              >
                <ExternalLink className="w-4 h-4 text-blue-400" />
                <span className="font-body text-sm text-white/70 group-hover:text-white transition-colors">LinkedIn Profile</span>
              </a>
              <a
                href="https://www.facebook.com/share/1aduz24gsz/?mibextid=wwxifr"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-[#1877f2]/20 border border-white/8 hover:border-[#1877f2]/40 transition-all group"
              >
                <svg className="w-4 h-4 text-[#1877f2]" fill="currentColor" viewBox="0 0 24 24">
  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
</svg>
                <span className="font-body text-sm text-white/70 group-hover:text-white transition-colors">Facebook Page</span>
              </a>
            </div>
 
            <div className="p-4 rounded-xl bg-white/4 border border-white/8">
              <p className="font-body text-xs font-semibold text-white/40 uppercase tracking-wider mb-2.5">OPD Hours</p>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between">
                  <span className="font-body text-xs text-white/55">Mon – Sat</span>
                  <span className="font-body text-xs text-teal-400 font-medium">10am – 2pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body text-xs text-white/55">Emergency</span>
                  <span className="font-body text-xs text-rose-400 font-medium">24 / 7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/30 text-center sm:text-left">
            © {new Date().getFullYear()} Dr. Basavaraj S · All rights reserved · Hrudayaspandan Heart Care, Solapur
          </p>
          <p className="font-body text-xs text-white/20">
            Website for informational purposes only · Not a substitute for professional medical advice
          </p>
        </div>
      </div>
    </footer>
  );
}
 