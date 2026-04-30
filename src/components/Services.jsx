import { motion } from 'framer-motion';
import { Activity, Zap, Stethoscope, Heart, ShieldCheck, AlertCircle } from 'lucide-react';

const SERVICES = [
  {
    icon: Heart,
    title: 'Interventional Cardiology',
    desc: 'Advanced coronary angioplasty, balloon dilatation, complex multi-vessel stenting, and primary PCI — restoring blood flow and saving lives at the critical moment.',
    img: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=500&q=80&auto=format&fit=crop',
    gradient: 'from-rose-500 to-red-600',
    light: 'bg-rose-50',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    tag: 'Core Specialty',
  },
  {
    icon: Zap,
    title: 'Electrophysiology',
    desc: 'Diagnosis and treatment of all cardiac arrhythmias — radiofrequency ablation, cryoablation, pacemaker & ICD implantation, and advanced EP studies.',
    img: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500&q=80&auto=format&fit=crop',
    gradient: 'from-violet-500 to-purple-600',
    light: 'bg-violet-50',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    tag: 'Core Specialty',
  },
  {
    icon: Stethoscope,
    title: 'Heart Checkups & Diagnostics',
    desc: 'Comprehensive cardiac screening — echocardiography, TMT stress tests, nuclear cardiology, and advanced cardiac imaging for thorough heart health evaluation.',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80&auto=format&fit=crop',
    gradient: 'from-teal-500 to-cyan-600',
    light: 'bg-teal-50',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    tag: 'Diagnostics',
  },
  {
    icon: Activity,
    title: 'ECG & Cardiac Monitoring',
    desc: '12-lead ECG interpretation, 24–48 hour Holter monitoring, ambulatory blood pressure recording, and event loop recording for precise cardiac diagnosis.',
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&q=80&auto=format&fit=crop',
    gradient: 'from-blue-500 to-indigo-600',
    light: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    tag: 'Monitoring',
  },
  {
    icon: ShieldCheck,
    title: 'Hypertension & Preventive Care',
    desc: 'Personalised management of high blood pressure, dyslipidaemia, diabetes-related cardiac risk, and comprehensive cardiovascular risk reduction strategies.',
    img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&q=80&auto=format&fit=crop',
    gradient: 'from-emerald-500 to-green-600',
    light: 'bg-emerald-50',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    tag: 'Preventive',
  },
  {
    icon: AlertCircle,
    title: 'Emergency Cardiac Treatment',
    desc: 'Round-the-clock emergency cardiology — primary PCI for STEMI, acute coronary syndrome management, haemodynamic stabilisation, and critical cardiac care.',
    img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=500&q=80&auto=format&fit=crop',
    gradient: 'from-orange-500 to-amber-600',
    light: 'bg-orange-50',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    tag: '24 / 7 Emergency',
  },
];

export default function Services({ darkMode }) {
  return (
    <section
      id="services"
      className={`py-28 ${darkMode ? 'bg-navy-900' : 'bg-gradient-to-b from-slate-50 to-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <span className={`section-tag mb-5 ${darkMode ? 'bg-teal-500/15 border border-teal-500/25 text-teal-300' : 'bg-teal-50 border border-teal-100 text-teal-600'}`}>
            What We Treat
          </span>
          <h2 className={`font-display text-4xl sm:text-5xl font-bold mb-5 ${darkMode ? 'text-white' : 'text-navy-800'}`}>
            Comprehensive{' '}
            <span className="text-teal-500">Cardiac Care</span>
          </h2>
          <p className={`font-body text-base max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-white/55' : 'text-gray-500'}`}>
            From routine preventive care to life-saving emergency interventions — every service 
            is delivered with surgical precision, the latest technology, and genuine compassion.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-2xl overflow-hidden card-shimmer
                            transition-all duration-350 hover:-translate-y-2 hover:shadow-2xl cursor-default
                            ${darkMode
                              ? 'bg-navy-800 border border-white/6 hover:border-teal-500/35 shadow-lg shadow-black/30'
                              : 'bg-white border border-gray-100 hover:border-teal-200 shadow-md shadow-gray-200/60'
                            }`}
              >
                {/* Top image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${svc.gradient} opacity-55`} />
                  {/* Tag badge */}
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-[10px] font-body font-semibold tracking-wide">
                    {svc.tag}
                  </span>
                  {/* Icon bubble */}
                  <div className="absolute bottom-3 left-4 w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 pb-6">
                  <h3 className={`font-display font-bold text-[17px] mb-2.5 group-hover:text-teal-500 transition-colors leading-snug
                    ${darkMode ? 'text-white' : 'text-navy-800'}`}>
                    {svc.title}
                  </h3>
                  <p className={`font-body text-[13.5px] leading-relaxed ${darkMode ? 'text-white/55' : 'text-gray-500'}`}>
                    {svc.desc}
                  </p>

                  {/* Arrow link */}
                  <div className={`mt-4 inline-flex items-center gap-1.5 text-[13px] font-body font-semibold
                    group-hover:gap-3 transition-all duration-300 ${svc.iconColor}`}>
                    <span>Learn more</span>
                    <span className="text-lg leading-none">→</span>
                  </div>
                </div>

                {/* Bottom accent line on hover */}
                <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${svc.gradient}
                                 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left`} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-14 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6
            ${darkMode ? 'bg-navy-800 border border-white/8' : 'bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100'}`}
        >
          <div>
            <h3 className={`font-display font-bold text-xl sm:text-2xl mb-1.5 ${darkMode ? 'text-white' : 'text-navy-800'}`}>
              Not sure which service you need?
            </h3>
            <p className={`font-body text-sm ${darkMode ? 'text-white/55' : 'text-gray-500'}`}>
              Book a general consultation and Dr. Basavaraj will guide you to the right care.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 px-7 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600
                       text-white font-body font-semibold shadow-lg shadow-teal-500/25
                       hover:shadow-teal-500/40 transition-shadow duration-300"
          >
            Book Consultation →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
