import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';

const EXPERIENCES = [
  {
    role: 'Consultant Cardiologist & Electrophysiologist',
    org: 'Hrudayaspandan Heart Care',
    location: 'Solapur, Maharashtra',
    period: 'Jan 2024 — Present',
    duration: '1+ yr',
    type: 'Current',
    color: 'teal',
    points: [
      'Leading full cardiac OPD, performing advanced interventional procedures',
      'Electrophysiology studies, ablations and device implantations',
      'Managing complex arrhythmias, heart failure and acute coronary syndromes',
    ],
    img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=500&q=80&auto=format&fit=crop',
  },
  {
    role: 'Fellow in Electrophysiology',
    org: 'AIG Hospitals',
    location: 'Hyderabad, Telangana',
    period: 'Oct 2021 — Apr 2024',
    duration: '2 yrs 7 mo',
    type: 'Fellowship',
    color: 'blue',
    points: [
      'Trained in advanced cardiac electrophysiology at one of Asia\'s largest cardiac centres',
      'Performed 1000+ EP studies, ablations (RF & cryo), pacemaker & ICD implantations',
      'Managed SVT, AF, VT, heart block and complex channelopathies',
    ],
    img: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&q=80&auto=format&fit=crop',
  },
  {
    role: 'Consultant Interventional Cardiologist',
    org: 'Asian Noble Hospital Pvt. Ltd.',
    location: 'Ahmednagar, Maharashtra',
    period: 'Mar 2021 — May 2022',
    duration: '1 yr 3 mo',
    type: 'Consultant',
    color: 'violet',
    points: [
      'Independent cardiac OPD and cath lab procedures',
      'Primary PCI for STEMI, elective angioplasty and complex PCI',
      'Echocardiography, TMT and non-invasive cardiac work-up',
    ],
    img: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=500&q=80&auto=format&fit=crop',
  },
  {
    role: 'Assistant Interventional Cardiologist',
    org: 'GKNM Hospital',
    location: 'Coimbatore, Tamil Nadu',
    period: 'Jun 2019 — Mar 2021',
    duration: '1 yr 10 mo',
    type: 'Post-DNB',
    color: 'amber',
    points: [
      'Assisted and independently performed coronary angiography & PCI',
      'Structural heart disease interventions and peripheral vascular work',
      'Active participation in cardiac emergency and ICCU management',
    ],
    img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&q=80&auto=format&fit=crop',
  },
];

const COLOR_MAP = {
  teal:   { dot: 'bg-teal-500',   badge: 'bg-teal-50 text-teal-700 border-teal-200',   line: 'from-teal-500'   },
  blue:   { dot: 'bg-blue-500',   badge: 'bg-blue-50 text-blue-700 border-blue-200',   line: 'from-blue-500'   },
  violet: { dot: 'bg-violet-500', badge: 'bg-violet-50 text-violet-700 border-violet-200', line: 'from-violet-500' },
  amber:  { dot: 'bg-amber-500',  badge: 'bg-amber-50 text-amber-700 border-amber-200',  line: 'from-amber-500'  },
};

const DARK_COLOR_MAP = {
  teal:   { badge: 'bg-teal-500/15 text-teal-300 border-teal-500/30' },
  blue:   { badge: 'bg-blue-500/15 text-blue-300 border-blue-500/30' },
  violet: { badge: 'bg-violet-500/15 text-violet-300 border-violet-500/30' },
  amber:  { badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30' },
};

export default function Experience({ darkMode }) {
  return (
    <section
      id="experience"
      className={`py-28 ${darkMode ? 'bg-navy-800' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
          className="text-center mb-20"
        >
          <span className={`section-tag mb-5 ${darkMode ? 'bg-teal-500/15 border border-teal-500/25 text-teal-300' : 'bg-teal-50 border border-teal-100 text-teal-600'}`}>
            Career Journey
          </span>
          <h2 className={`font-display text-4xl sm:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-navy-800'}`}>
            Professional <span className="text-teal-500">Experience</span>
          </h2>
          <p className={`font-body text-base max-w-xl mx-auto ${darkMode ? 'text-white/55' : 'text-gray-500'}`}>
            A decade-long journey across India's finest cardiac institutions — each role building deeper expertise and patient trust.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line (desktop) */}
          <div className={`hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2
            ${darkMode ? 'bg-gradient-to-b from-teal-500/40 via-blue-500/20 to-transparent' : 'bg-gradient-to-b from-teal-200 via-blue-100 to-transparent'}`}
          />

          <div className="flex flex-col gap-14">
            {EXPERIENCES.map((exp, i) => {
              const c = COLOR_MAP[exp.color];
              const dc = DARK_COLOR_MAP[exp.color];
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={exp.org}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-12 items-center
                    ${isLeft ? '' : 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'}`}
                >
                  {/* ── Centre dot (desktop) ── */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex-col items-center">
                    <div className={`w-5 h-5 rounded-full ${c.dot} ring-4 ${darkMode ? 'ring-navy-800' : 'ring-white'} shadow-lg`} />
                  </div>

                  {/* ── Image side ── */}
                  <div className={`relative rounded-2xl overflow-hidden h-52 sm:h-64 shadow-xl
                    ${darkMode ? 'shadow-black/40' : 'shadow-gray-200'}`}>
                    <img
                      src={exp.img}
                      alt={exp.org}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${c.line} opacity-50`} />
                    {/* Duration pill */}
                    <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-full">
                      <span className="font-body text-white text-xs font-semibold">{exp.duration}</span>
                    </div>
                  </div>

                  {/* ── Content side ── */}
                  <div className={`mt-5 lg:mt-0 ${isLeft ? 'lg:text-left' : 'lg:text-left'}`}>
                    {/* Type badge */}
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-body font-semibold border mb-3
                      ${darkMode ? dc.badge : c.badge}`}>
                      {exp.type}
                    </span>

                    <h3 className={`font-display font-bold text-xl sm:text-2xl leading-snug mb-1
                      ${darkMode ? 'text-white' : 'text-navy-800'}`}>
                      {exp.role}
                    </h3>
                    <p className="text-teal-500 font-body font-semibold text-base mb-1">{exp.org}</p>

                    <div className="flex flex-wrap gap-x-5 gap-y-1 mb-4">
                      <span className={`flex items-center gap-1.5 font-body text-xs ${darkMode ? 'text-white/45' : 'text-gray-400'}`}>
                        <MapPin className="w-3.5 h-3.5" /> {exp.location}
                      </span>
                      <span className={`flex items-center gap-1.5 font-body text-xs ${darkMode ? 'text-white/45' : 'text-gray-400'}`}>
                        <Calendar className="w-3.5 h-3.5" /> {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <ChevronRight className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                          <span className={`font-body text-sm leading-relaxed ${darkMode ? 'text-white/60' : 'text-gray-600'}`}>
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
