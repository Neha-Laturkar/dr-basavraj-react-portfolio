import { motion } from 'framer-motion';
import { ShieldCheck, Star, ExternalLink } from 'lucide-react';

const CERTS = [
  {
    title: 'DNB Cardiology',
    body: 'National Board of Examinations, India',
    year: '2019',
    id: 'NBE / CARD / 2019',
    color: 'teal',
    icon: '🫀',
    desc: 'Diplomat of National Board in Cardiology — the highest postgraduate cardiology credential awarded by NBE India.',
  },
  {
    title: 'Fellowship in Electrophysiology',
    body: 'AIG Hospitals, Hyderabad',
    year: '2024',
    id: 'AIG / EP / 2024',
    color: 'blue',
    icon: '⚡',
    desc: 'Specialised fellowship covering advanced cardiac EP, ablation procedures, device therapy and complex arrhythmia management.',
  },
  {
    title: 'DNB General Medicine',
    body: 'National Board of Examinations, India',
    year: '2015',
    id: 'NBE / MED / 2015',
    color: 'violet',
    icon: '🩺',
    desc: 'Diplomat of National Board in Internal Medicine — comprehensive training in general medicine and critical care.',
  },
  {
    title: 'MBBS',
    body: 'Maharashtra University of Health Sciences',
    year: '2009',
    id: 'MUHS / MBBS / 2009',
    color: 'amber',
    icon: '🏅',
    desc: 'Bachelor of Medicine and Bachelor of Surgery from Dr. VM Govt. Medical College, Solapur — the foundation of clinical practice.',
  },
];

const SKILLS = [
  { label: 'Coronary Angioplasty & PCI', pct: 98 },
  { label: 'Cardiac Ablation (RF & Cryo)', pct: 95 },
  { label: 'Pacemaker & ICD Implantation', pct: 94 },
  { label: 'Echocardiography', pct: 96 },
  { label: 'EP Studies & Mapping', pct: 93 },
  { label: 'Emergency Cardiac Care', pct: 97 },
];

const COLORS = {
  teal:   { ring: 'ring-teal-500/40',   icon: 'bg-teal-50',   bar: 'bg-teal-500',   badge: 'bg-teal-50 text-teal-700 border-teal-200',   darkIcon: 'bg-teal-500/15', darkBadge: 'bg-teal-500/15 text-teal-300 border-teal-500/30'   },
  blue:   { ring: 'ring-blue-500/40',   icon: 'bg-blue-50',   bar: 'bg-blue-500',   badge: 'bg-blue-50 text-blue-700 border-blue-200',     darkIcon: 'bg-blue-500/15', darkBadge: 'bg-blue-500/15 text-blue-300 border-blue-500/30'   },
  violet: { ring: 'ring-violet-500/40', icon: 'bg-violet-50', bar: 'bg-violet-500', badge: 'bg-violet-50 text-violet-700 border-violet-200',darkIcon: 'bg-violet-500/15',darkBadge: 'bg-violet-500/15 text-violet-300 border-violet-500/30'},
  amber:  { ring: 'ring-amber-500/40',  icon: 'bg-amber-50',  bar: 'bg-amber-500',  badge: 'bg-amber-50 text-amber-700 border-amber-200',  darkIcon: 'bg-amber-500/15', darkBadge: 'bg-amber-500/15 text-amber-300 border-amber-500/30'  },
};

function SkillBar({ label, pct, darkMode, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className={`font-body text-sm ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>{label}</span>
        <span className="font-body text-xs font-semibold text-teal-500">{pct}%</span>
      </div>
      <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-white/8' : 'bg-gray-100'}`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: i * 0.08 + 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-400"
        />
      </div>
    </motion.div>
  );
}

export default function Certifications({ darkMode }) {
  return (
    <section
      id="certifications"
      className={`py-28 ${darkMode ? 'bg-navy-800' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <span className={`section-tag mb-5 ${darkMode ? 'bg-teal-500/15 border border-teal-500/25 text-teal-300' : 'bg-teal-50 border border-teal-100 text-teal-600'}`}>
            Credentials
          </span>
          <h2 className={`font-display text-4xl sm:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-navy-800'}`}>
            Certifications &amp; <span className="text-teal-500">Skills</span>
          </h2>
          <p className={`font-body text-base max-w-xl mx-auto ${darkMode ? 'text-white/55' : 'text-gray-500'}`}>
            Every certification reflects years of rigorous examination, supervised practice, 
            and a commitment to the highest standards of cardiac care.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── LEFT: Cert cards ────────────────────── */}
          <div className="grid sm:grid-cols-2 gap-4">
            {CERTS.map((cert, i) => {
              const c = COLORS[cert.color];
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative rounded-2xl p-5 transition-all duration-300
                              hover:-translate-y-1 hover:shadow-lg card-shimmer
                              ${darkMode
                                ? 'bg-navy-900 border border-white/6 hover:border-white/14 shadow-md shadow-black/30'
                                : 'bg-white border border-gray-100 hover:border-gray-200 shadow-sm'
                              }`}
                >
                  {/* Verified tick */}
                  <div className="absolute top-4 right-4">
                    <ShieldCheck className="w-4 h-4 text-teal-500" />
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4
                    ring-2 ${c.ring} ${darkMode ? c.darkIcon : c.icon}`}>
                    {cert.icon}
                  </div>

                  {/* Year badge */}
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-body font-bold border mb-2.5
                    ${darkMode ? c.darkBadge : c.badge}`}>
                    {cert.year}
                  </span>

                  <h3 className={`font-display font-bold text-[15px] leading-snug mb-1 ${darkMode ? 'text-white' : 'text-navy-800'}`}>
                    {cert.title}
                  </h3>
                  <p className={`font-body text-xs mb-3 ${darkMode ? 'text-white/45' : 'text-gray-400'}`}>
                    {cert.body}
                  </p>
                  <p className={`font-body text-[12px] leading-relaxed ${darkMode ? 'text-white/50' : 'text-gray-500'}`}>
                    {cert.desc}
                  </p>

                  {/* ID tag */}
                  <div className={`mt-4 pt-3 border-t flex items-center gap-1.5 ${darkMode ? 'border-white/8' : 'border-gray-100'}`}>
                    <Star className="w-3 h-3 text-amber-400" fill="currentColor" />
                    <span className={`font-body text-[10px] tracking-wide ${darkMode ? 'text-white/30' : 'text-gray-300'}`}>
                      {cert.id}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── RIGHT: Skill bars + associations ─────── */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className={`rounded-2xl p-7 mb-6 ${darkMode ? 'bg-navy-900 border border-white/6' : 'bg-slate-50 border border-gray-100'}`}
            >
              <h3 className={`font-display font-bold text-xl mb-6 ${darkMode ? 'text-white' : 'text-navy-800'}`}>
                Clinical Expertise
              </h3>
              <div className="flex flex-col gap-5">
                {SKILLS.map((sk, i) => (
                  <SkillBar key={sk.label} {...sk} darkMode={darkMode} i={i} />
                ))}
              </div>
            </motion.div>

            {/* Membership / associations strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className={`rounded-2xl p-6 ${darkMode ? 'bg-navy-900 border border-white/6' : 'bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100'}`}
            >
              <h3 className={`font-display font-bold text-lg mb-4 ${darkMode ? 'text-white' : 'text-navy-800'}`}>
                Professional Memberships
              </h3>
              <ul className="space-y-3">
                {[
                  'Cardiological Society of India (CSI)',
                  'Indian Heart Rhythm Society (IHRS)',
                  'Indian Medical Association (IMA)',
                  'Association of Physicians of India (API)',
                ].map((org) => (
                  <li key={org} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                    <span className={`font-body text-sm ${darkMode ? 'text-white/65' : 'text-gray-600'}`}>{org}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
