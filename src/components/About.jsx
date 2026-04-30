import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, MapPin, Mail, ExternalLink, Globe } from 'lucide-react';

const highlights = [
  'MBBS – Dr. VM Govt. Medical College, Solapur (2003–2009)',
  'DNB General Medicine – ADH Dibrugarh, Assam (2012–2015)',
  'DNB Cardiology – GKNM Hospital, Coimbatore (2016–2019)',
  'Fellow in Electrophysiology – AIG Hospitals, Hyderabad (2021–2024)',
  'Expert in complex PCI, coronary stenting & device implantation',
  'Cardiac ablation & advanced arrhythmia management',
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function About({ darkMode }) {
  return (
    <section
      id="about"
      className={`py-28 ${darkMode ? 'bg-navy-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── LEFT: Images collage ───────────────────── */}
          <motion.div {...fadeUp(0)} className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Large top image */}
              <div className="col-span-2 h-64 sm:h-72 rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=85&auto=format&fit=crop"
                  alt="Cardiac catheterisation lab"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Bottom left */}
              <div className="h-44 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=500&q=80&auto=format&fit=crop"
                  alt="Doctor consulting patient"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Bottom right */}
              <div className="h-44 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&q=80&auto=format&fit=crop"
                  alt="ECG heart monitoring"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Experience stamp */}
            <div className="absolute -bottom-7 -right-4 sm:-right-7 w-32 h-32 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-br from-teal-500 to-teal-700 flex flex-col items-center justify-center shadow-2xl shadow-teal-500/40 z-10">
              <span className="font-display font-bold text-4xl sm:text-5xl text-white leading-none">15+</span>
              <span className="font-body text-white/75 text-[11px] text-center mt-1.5 leading-tight px-2">Years of<br/>Excellence</span>
            </div>

            {/* Floating accent card */}
            <div className={`absolute -left-4 sm:-left-7 top-10 rounded-2xl px-4 py-3 shadow-xl z-10 ${darkMode ? 'bg-navy-900 border border-white/10' : 'bg-white border border-gray-100'}`}>
              <p className={`font-body text-xs font-medium mb-1 ${darkMode ? 'text-white/50' : 'text-gray-400'}`}>Current Practice</p>
              <p className={`font-display font-bold text-sm ${darkMode ? 'text-white' : 'text-navy-800'}`}>Hrudayaspandan</p>
              <p className="text-teal-500 font-body text-xs">Heart Care, Solapur</p>
            </div>
          </motion.div>

          {/* ── RIGHT: Content ─────────────────────────── */}
          <div>
            <motion.div {...fadeUp(0.1)}>
              <span className={`section-tag mb-5 ${darkMode ? 'bg-teal-500/15 border border-teal-500/25 text-teal-300' : 'bg-teal-50 border border-teal-100 text-teal-600'}`}>
                About the Doctor
              </span>
            </motion.div>

            <motion.h2 {...fadeUp(0.15)} className={`font-display text-4xl sm:text-5xl font-bold leading-tight mb-6 ${darkMode ? 'text-white' : 'text-navy-800'}`}>
              A Legacy of<br/>
              <span className="text-teal-500">Advanced Heart Care</span>
            </motion.h2>

            <motion.p {...fadeUp(0.2)} className={`font-body text-[15px] leading-relaxed mb-4 ${darkMode ? 'text-white/65' : 'text-gray-600'}`}>
              Dr. Basavaraj S is a highly accomplished Consultant Interventional Cardiologist and 
              Electrophysiologist with over 15 years of dedicated medical training across India's 
              most prestigious cardiac institutions. His journey began with an MBBS from Dr. VM 
              Govt. Medical College, Solapur, followed by rigorous post-graduation in General 
              Medicine and Cardiology.
            </motion.p>

            <motion.p {...fadeUp(0.25)} className={`font-body text-[15px] leading-relaxed mb-8 ${darkMode ? 'text-white/65' : 'text-gray-600'}`}>
              He completed a highly competitive Fellowship in Electrophysiology at <strong className={darkMode ? 'text-white' : 'text-navy-800'}>AIG Hospitals, Hyderabad</strong> — 
              one of Asia's largest cardiac centres — mastering cardiac ablation, pacemaker 
              implantation, ICD therapy, and complex arrhythmia management. Today, he brings 
              this world-class expertise to patients at Hrudayaspandan Heart Care, Solapur.
            </motion.p>

            {/* Highlights checklist */}
            <motion.ul {...fadeUp(0.3)} className="space-y-3 mb-9">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.3 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className={`font-body text-sm leading-relaxed ${darkMode ? 'text-white/65' : 'text-gray-600'}`}>{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Contact row */}
            <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-5 items-center">
              <a
                href="mailto:drbasu394@yahoo.co.in"
                className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-body font-medium text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                  <Mail className="w-4 h-4 text-teal-600" />
                </div>
                drbasu394@yahoo.co.in
              </a>
              <a
                href="https://www.linkedin.com/in/dr-basavaraj-s-14221570"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-body font-medium text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
            <Globe className="w-4 h-4 text-blue-600" />
              </div>
                LinkedIn
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className={`flex items-center gap-2 font-body text-sm ${darkMode ? 'text-white/45' : 'text-gray-400'}`}>
                <MapPin className="w-4 h-4 text-teal-500" />
                Solapur, Maharashtra
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
