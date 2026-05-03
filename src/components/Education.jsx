import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const EDUCATION = [
  {
    degree: 'DNB Cardiology',
    sub: 'Interventional Cardiology',
    institution: 'G. Kuppuswamy Naidu Memorial Hospital',
    location: 'Coimbatore, Tamil Nadu',
    period: 'Feb 2016 — Feb 2019',
    grade: 'Diplomat of National Board',
    color: 'teal',
    icon: '🫀',
    highlights: ['Coronary angiography & PCI', 'Structural heart interventions', 'Cardiac imaging & echocardiography'],
  },
  {
    degree: 'DNB General Medicine',
    sub: 'Internal Medicine',
    institution: 'Aditya Diagnostic & Hospitals',
    location: 'Dibrugarh, Assam',
    period: 'Apr 2012 — Apr 2015',
    grade: 'Diplomat of National Board',
    color: 'blue',
    icon: '🩺',
    highlights: ['General medicine & critical care', 'Endocrinology & nephrology', 'Emergency & acute medicine'],
  },
  {
    degree: 'MBBS',
    sub: 'Bachelor of Medicine & Bachelor of Surgery',
    institution: 'Dr. VM Govt. Medical College',
    location: 'Solapur, Maharashtra',
    period: '2003 — 2009',
    grade: 'Maharashtra University of Health Sciences',
    color: 'violet',
    icon: '🏥',
    highlights: ['Pre-clinical & clinical sciences', 'Surgery, medicine & obstetrics', 'Community health & preventive medicine'],
  },
  {
    degree: 'HSC (12th Science)',
    sub: 'Higher Secondary Certificate',
    institution: 'KBP College',
    location: 'Pandharpur, Maharashtra',
    period: '2002 — 2003',
    grade: 'Maharashtra State Board',
    color: 'amber',
    icon: '📚',
    highlights: ['Physics, Chemistry & Biology', 'Mathematics', 'Foundation for medical studies'],
  },
];

const COLORS = {
  teal:   { bg: 'bg-teal-500',   soft: 'bg-teal-50',   text: 'text-teal-600',   border: 'border-teal-200',   darkSoft: 'bg-teal-500/15',  darkText: 'text-teal-300',  darkBorder: 'border-teal-500/30'  },
  blue:   { bg: 'bg-blue-500',   soft: 'bg-blue-50',   text: 'text-blue-600',   border: 'border-blue-200',   darkSoft: 'bg-blue-500/15',  darkText: 'text-blue-300',  darkBorder: 'border-blue-500/30'  },
  violet: { bg: 'bg-violet-500', soft: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-200', darkSoft: 'bg-violet-500/15',darkText: 'text-violet-300',darkBorder: 'border-violet-500/30' },
  amber:  { bg: 'bg-amber-500',  soft: 'bg-amber-50',  text: 'text-amber-600',  border: 'border-amber-200',  darkSoft: 'bg-amber-500/15', darkText: 'text-amber-300', darkBorder: 'border-amber-500/30'  },
};

export default function Education({ darkMode }) {
  return (
    <section
      id="education"
      className={`py-28 ${darkMode ? 'bg-navy-900' : 'bg-gradient-to-b from-slate-50 to-white'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <span className={`section-tag mb-5 ${darkMode ? 'bg-teal-500/15 border border-teal-500/25 text-teal-300' : 'bg-teal-50 border border-teal-100 text-teal-600'}`}>
            Academic Background
          </span>
          <h2 className={`font-display text-4xl sm:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-navy-800'}`}>
            Education &amp; <span className="text-teal-500">Qualifications</span>
          </h2>
          <p className={`font-body text-base max-w-xl mx-auto ${darkMode ? 'text-white/55' : 'text-gray-500'}`}>
            A foundation of rigorous academic training from India's leading medical institutions, 
            building expertise from first principles to cutting-edge interventional techniques.
          </p>
        </motion.div>

        {/* ── Cards ───────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 gap-6">
          {EDUCATION.map((edu, i) => {
            const c = COLORS[edu.color];
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-2xl p-6 sm:p-7 transition-all duration-300
                            hover:-translate-y-1.5 hover:shadow-xl card-shimmer
                            ${darkMode
                              ? 'bg-navy-800 border border-white/6 hover:border-white/12 shadow-lg shadow-black/30'
                              : 'bg-white border border-gray-100 hover:border-gray-200 shadow-md shadow-gray-100/80'
                            }`}
              >
                {/* Top row */}
                <div className="flex items-start gap-4 mb-5">
                  {/* Emoji icon bubble */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0
                    ${darkMode ? c.darkSoft : c.soft}`}>
                    {edu.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-body font-semibold border mb-2
                      ${darkMode ? `${c.darkSoft} ${c.darkText} ${c.darkBorder}` : `${c.soft} ${c.text} ${c.border}`}`}>
                      {edu.sub}
                    </div>
                    <h3 className={`font-display font-bold text-xl leading-tight ${darkMode ? 'text-white' : 'text-navy-800'}`}>
                      {edu.degree}
                    </h3>
                  </div>
                </div>

                {/* Institution */}
                <div className={`flex items-start gap-2 mb-1.5 pb-5 border-b ${darkMode ? 'border-white/8' : 'border-gray-100'}`}>
                  <GraduationCap className={`w-4 h-4 flex-shrink-0 mt-0.5 ${darkMode ? c.darkText : c.text}`} />
                  <div>
                    <p className={`font-body font-semibold text-sm ${darkMode ? 'text-white/85' : 'text-gray-700'}`}>
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-1">
                      <span className={`flex items-center gap-1 font-body text-xs ${darkMode ? 'text-white/40' : 'text-gray-400'}`}>
                        <MapPin className="w-3 h-3" /> {edu.location}
                      </span>
                      <span className={`flex items-center gap-1 font-body text-xs ${darkMode ? 'text-white/40' : 'text-gray-400'}`}>
                        <Calendar className="w-3 h-3" /> {edu.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="mt-4 space-y-2">
                  {edu.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.bg}`} />
                      <span className={`font-body text-xs leading-relaxed ${darkMode ? 'text-white/55' : 'text-gray-500'}`}>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Awarding body */}
                <div className={`mt-5 pt-4 border-t flex items-center gap-2 ${darkMode ? 'border-white/8' : 'border-gray-100'}`}>
                  <Award className={`w-3.5 h-3.5 ${darkMode ? c.darkText : c.text}`} />
                  <span className={`font-body text-[11px] ${darkMode ? 'text-white/40' : 'text-gray-400'}`}>{edu.grade}</span>
                </div>

                {/* Hover accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl ${c.bg}
                                 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
