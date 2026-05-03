import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
 
const TESTIMONIALS = [
  {
    name: 'Ramesh Patil',
    age: 58,
    location: 'Solapur, Maharashtra',
    condition: 'Heart Attack (STEMI)',
    review: 'Dr. Basavaraj performed emergency angioplasty on me at 2am. His calm confidence saved my life. Within hours I was stable. I owe everything to his skill and speed. The entire team at Hrudayaspandan was outstanding.',
    rating: 5,
    avatar: 'RP',
    color: 'teal',
  },
  {
    name: 'Sunita Deshpande',
    age: 45,
    location: 'Pune, Maharashtra',
    condition: 'Atrial Fibrillation',
    review: 'I had been suffering from irregular heartbeat for 3 years. Multiple doctors could not give me relief. Dr. Basavaraj diagnosed me correctly, explained everything clearly, and the ablation procedure changed my life completely.',
    rating: 5,
    avatar: 'SD',
    color: 'blue',
  },
  {
    name: 'Vijay Kumar Sharma',
    age: 62,
    location: 'Ahmednagar, Maharashtra',
    condition: 'Triple Vessel Disease',
    review: 'Complex three-vessel blockage at 62. Dr. Basavaraj handled it with extraordinary precision. He treated me like family, not just a patient. I walked out of the hospital in 3 days. Truly world-class care.',
    rating: 5,
    avatar: 'VK',
    color: 'violet',
  },
  {
    name: 'Meena Kulkarni',
    age: 51,
    location: 'Solapur, Maharashtra',
    condition: 'Pacemaker Implantation',
    review: 'My pacemaker was implanted by Dr. Basavaraj last year. From consultation to procedure to follow-up, every step was handled with exceptional care. He takes time to answer every question patiently.',
    rating: 5,
    avatar: 'MK',
    color: 'amber',
  },
  {
    name: 'Prakash Naidu',
    age: 49,
    location: 'Hyderabad, Telangana',
    condition: 'SVT Ablation',
    review: 'I travelled from Hyderabad specifically for Dr. Basavaraj\'s EP expertise after his fellowship at AIG. The SVT ablation was perfect. No recurrence in 18 months. Best cardiac decision I ever made.',
    rating: 5,
    avatar: 'PN',
    color: 'rose',
  },
  {
    name: 'Anita Bendre',
    age: 38,
    location: 'Latur, Maharashtra',
    condition: 'Hypertension & Preventive Care',
    review: 'Young, stressed, high BP and a family history of heart disease — I was worried. Dr. Basavaraj was thorough, reassuring and practical. His preventive care plan has genuinely transformed my health.',
    rating: 5,
    avatar: 'AB',
    color: 'green',
  },
];
 
const AVATAR_COLORS = {
  teal:   'from-teal-400 to-teal-600',
  blue:   'from-blue-400 to-blue-600',
  violet: 'from-violet-400 to-violet-600',
  amber:  'from-amber-400 to-amber-600',
  rose:   'from-rose-400 to-rose-600',
  green:  'from-emerald-400 to-emerald-600',
};
 
function StarRow({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-amber-400" fill="currentColor" />
      ))}
    </div>
  );
}
 
export default function Testimonials({ darkMode }) {
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;
 
  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);
 
  const t = TESTIMONIALS[active];
 
  return (
    <section
      id="testimonials"
      className={`py-28 ${darkMode ? 'bg-navy-900' : 'bg-gradient-to-b from-slate-50 to-white'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <span className={`section-tag mb-5 ${darkMode ? 'bg-teal-500/15 border border-teal-500/25 text-teal-300' : 'bg-teal-50 border border-teal-100 text-teal-600'}`}>
            Patient Stories
          </span>
          <h2 className={`font-display text-4xl sm:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-navy-800'}`}>
            Lives <span className="text-teal-500">Transformed</span>
          </h2>
          <p className={`font-body text-base max-w-xl mx-auto ${darkMode ? 'text-white/55' : 'text-gray-500'}`}>
            Every heartbeat matters. Here's what patients say about their experience with Dr. Basavaraj S.
          </p>
        </motion.div>
 
        {/* Main featured testimonial */}
        <div className="grid lg:grid-cols-5 gap-8 mb-10 items-center">
 
          {/* Big quote card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-3"
          >
            <div className={`relative rounded-3xl p-8 sm:p-10 overflow-hidden
              ${darkMode ? 'bg-navy-800 border border-white/8' : 'bg-white border border-gray-100 shadow-xl shadow-gray-100'}`}>
 
              {/* Big quote mark */}
              <Quote className={`absolute top-6 right-8 w-16 h-16 opacity-[0.06] ${darkMode ? 'text-white' : 'text-navy-800'}`} />
 
              <StarRow />
 
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className={`font-body text-base sm:text-lg leading-relaxed mt-5 mb-8 ${darkMode ? 'text-white/75' : 'text-gray-600'}`}>
                    "{t.review}"
                  </p>
 
                  <div className="flex items-center gap-4">
                    <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${AVATAR_COLORS[t.color]} flex items-center justify-center shadow-lg flex-shrink-0`}
                      style={{ width: 52, height: 52 }}>
                      <span className="font-display font-bold text-white text-sm">{t.avatar}</span>
                    </div>
                    <div>
                      <p className={`font-display font-bold text-lg ${darkMode ? 'text-white' : 'text-navy-800'}`}>{t.name}</p>
                      <p className={`font-body text-xs ${darkMode ? 'text-white/45' : 'text-gray-400'}`}>
                        Age {t.age} · {t.location}
                      </p>
                      <span className={`inline-block mt-1 px-2.5 py-0.5 rounded-full text-[11px] font-body font-semibold
                        ${darkMode ? 'bg-teal-500/15 text-teal-300' : 'bg-teal-50 text-teal-700'}`}>
                        {t.condition}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
 
              {/* Nav arrows */}
              <div className="flex gap-3 mt-8">
                <button
                  onClick={prev}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all
                    ${darkMode ? 'bg-white/8 hover:bg-white/15 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl bg-teal-500 hover:bg-teal-600 flex items-center justify-center transition-all text-white"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2 ml-2">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`rounded-full transition-all duration-300 ${i === active ? 'w-6 h-2 bg-teal-500' : `w-2 h-2 ${darkMode ? 'bg-white/25' : 'bg-gray-300'}`}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
 
          {/* Side: mini cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {TESTIMONIALS.filter((_, i) => i !== active).slice(0, 3).map((tt, i) => (
              <motion.button
                key={tt.name}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setActive(TESTIMONIALS.indexOf(tt))}
                className={`text-left rounded-2xl p-4 transition-all hover:-translate-y-0.5 hover:shadow-md
                  ${darkMode ? 'bg-navy-800 border border-white/6 hover:border-white/12' : 'bg-white border border-gray-100 hover:border-teal-200 shadow-sm'}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${AVATAR_COLORS[tt.color]} flex items-center justify-center flex-shrink-0`}>
                    <span className="font-display font-bold text-white text-xs">{tt.avatar}</span>
                  </div>
                  <div>
                    <p className={`font-display font-bold text-sm ${darkMode ? 'text-white' : 'text-navy-800'}`}>{tt.name}</p>
                    <p className={`font-body text-[11px] ${darkMode ? 'text-white/40' : 'text-gray-400'}`}>{tt.condition}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, si) => <Star key={si} className="w-2.5 h-2.5 text-amber-400" fill="currentColor" />)}
                  </div>
                </div>
                <p className={`font-body text-xs leading-relaxed line-clamp-2 ${darkMode ? 'text-white/50' : 'text-gray-500'}`}>
                  "{tt.review}"
                </p>
              </motion.button>
            ))}
          </div>
        </div>
 
        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-2xl p-6
            ${darkMode ? 'bg-navy-800 border border-white/6' : 'bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100'}`}
        >
          {[
            { value: '10,000+', label: 'Patients Treated' },
            { value: '4.9 / 5', label: 'Average Rating' },
            { value: '5,000+', label: 'Procedures Done' },
            { value: '100%', label: 'Recommend Rate' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className={`font-display font-bold text-2xl sm:text-3xl ${darkMode ? 'text-white' : 'text-navy-800'}`}>{value}</p>
              <p className={`font-body text-xs mt-1 ${darkMode ? 'text-white/45' : 'text-gray-500'}`}>{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
 