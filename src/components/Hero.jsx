import { motion } from 'framer-motion';
import { ChevronDown, Calendar, Phone, Award, Users, Stethoscope, Star } from 'lucide-react';

/* ── ECG waveform SVG ─────────────────────────── */
const ECGLine = () => (
  <svg
    viewBox="0 0 1000 90"
    preserveAspectRatio="none"
    className="w-full h-full"
    aria-hidden
  >
    <path
      className="ecg-path"
      d="M0,45 L160,45 L185,45 L195,8 L208,82 L220,22 L235,45
         L400,45 L425,45 L435,8 L448,82 L460,22 L475,45
         L640,45 L665,45 L675,8 L688,82 L700,22 L715,45
         L900,45 L925,45 L935,8 L948,82 L960,22 L975,45 L1000,45"
      fill="none"
      stroke="rgba(45,212,191,0.55)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ── Floating stat badge ───────────────────────── */
const StatBadge = ({ icon: Icon, value, label, color, delay, className }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    style={{ animationDelay: `${delay}s` }}
    className={`glass rounded-2xl px-4 py-3 flex items-center gap-3 absolute ${className}`}
    aria-hidden
  >
    <div className={`w-9 h-9 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
      <Icon className="w-4 h-4 text-white" />
    </div>
    <div>
      <p className="text-white font-display font-bold text-lg leading-none">{value}</p>
      <p className="text-white/55 font-body text-xs mt-0.5 leading-tight">{label}</p>
    </div>
  </motion.div>
);

/* ── Grid dot pattern ──────────────────────────── */
const DotGrid = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.04]" aria-hidden>
    <defs>
      <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.5" fill="white" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dots)" />
  </svg>
);

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden
                 bg-gradient-to-br from-[#060e24] via-[#0c1e3e] to-[#0a2d3a]"
    >
      {/* ── Background decorations ────────────────── */}
      <DotGrid />
      <div className="absolute inset-0 pointer-events-none">
        {/* Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[80px]" />
        <div className="absolute top-10 right-1/3 w-72 h-72 bg-cyan-400/6 rounded-full blur-[60px]" />
      </div>

      {/* ── ECG strip at bottom ─────────────────────── */}
      <div className="absolute bottom-16 left-0 right-0 h-[80px] pointer-events-none">
        <ECGLine />
      </div>

      {/* ── Main content ─────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 lg:pt-32 pb-24">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* LEFT ─ Text (3/5 width on desktop) */}
          <div className="lg:col-span-3 order-2 lg:order-1">

            {/* Availability pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-7"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-400" />
              </span>
              <span className="font-body text-sm text-teal-300 font-medium tracking-wider">
                Available for Consultations · Solapur, Maharashtra
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-4"
            >
              Dr.{' '}
              <span className="relative inline-block">
                Basavaraj
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden>
                  <path d="M0,10 Q75,0 150,8 Q225,16 300,6" fill="none" stroke="url(#ug)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="ug" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2dd4bf"/>
                      <stop offset="100%" stopColor="#38bdf8"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              {' '}S<span className="text-teal-400">.</span>
            </motion.h1>

            {/* Title tag */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 mb-5"
            >
              <span className="px-3.5 py-1.5 rounded-lg bg-teal-500/15 border border-teal-500/30 text-teal-300 font-body font-medium text-sm">
                Interventional Cardiologist
              </span>
              <span className="text-white/30 hidden sm:block">|</span>
              <span className="px-3.5 py-1.5 rounded-lg bg-blue-500/15 border border-blue-500/30 text-blue-300 font-body font-medium text-sm">
                Electrophysiologist
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="font-display italic text-xl sm:text-2xl text-white/65 mb-5 leading-snug"
            >
              "Dedicated to Advanced Heart Care &amp; Lifesaving Interventions"
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-body text-white/55 text-base sm:text-lg leading-relaxed mb-10 max-w-xl"
            >
              Over 15 years of advanced cardiac training across India's premier institutions — 
              combining precision intervention with genuine patient-first care at 
              <strong className="text-white/80"> Hrudayaspandan Heart Care, Solapur</strong>.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#contact')}
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl
                           bg-gradient-to-r from-teal-500 to-teal-400
                           text-white font-body font-semibold text-base
                           shadow-lg shadow-teal-500/30 hover:shadow-glow-teal
                           transition-shadow duration-300"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#contact')}
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl
                           border border-white/20 text-white font-body font-semibold text-base
                           hover:bg-white/8 hover:border-white/35
                           transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Contact Now
              </motion.button>
            </motion.div>

            {/* Quick stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52 }}
              className="flex flex-wrap gap-10"
            >
              {[
                { value: '15+', label: 'Years Trained', icon: Award },
                { value: '10K+', label: 'Patients Served', icon: Users },
                { value: '5K+', label: 'Procedures', icon: Stethoscope },
              ].map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3 group">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/12 border border-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl text-white leading-none">{value}</p>
                    <p className="font-body text-xs text-white/45 mt-0.5 tracking-wide">{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT ─ Doctor image (2/5 width on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 order-1 lg:order-2 flex justify-center relative"
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-teal-500/10 blur-3xl" />

            <div className="relative">
              {/* Decorative border rings */}
              <div className="absolute -inset-3 rounded-[2rem] border border-teal-500/20 rotate-3" />
              <div className="absolute -inset-6 rounded-[2.5rem] border border-white/5 -rotate-2" />

              {/* Main doctor photo */}
              <div className="relative w-72 h-[380px] sm:w-80 sm:h-[430px] lg:w-72 lg:h-[400px] xl:w-80 xl:h-[450px] rounded-[1.75rem] overflow-hidden shadow-2xl shadow-black/50">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&q=85&auto=format&fit=crop&crop=top"
                  alt="Dr. Basavaraj S – Consultant Interventional Cardiologist"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e3e]/80 via-transparent to-transparent" />

                {/* Name card at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="glass rounded-xl p-3 text-center">
                    <p className="font-display font-bold text-white text-[15px]">Dr. Basavaraj S</p>
                    <p className="font-body text-teal-300 text-[11px] mt-0.5">
                      Hrudayaspandan Heart Care, Solapur
                    </p>
                    <div className="flex justify-center gap-0.5 mt-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-amber-400" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge – Award */}
              <StatBadge
                icon={Award}
                value="DNB"
                label="Cardiology Certified"
                color="bg-gradient-to-br from-teal-500 to-teal-600"
                delay={0.7}
                className="-left-12 top-14 z-20"
                style={{ animation: 'float 5s ease-in-out infinite' }}
              />

              {/* Floating badge – Patients */}
              <StatBadge
                icon={Users}
                value="10K+"
                label="Happy Patients"
                color="bg-gradient-to-br from-blue-500 to-indigo-600"
                delay={0.85}
                className="-right-10 bottom-28 z-20"
                style={{ animation: 'float 5s ease-in-out infinite 2.5s' }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll cue ────────────────────────────────── */}
      <motion.button
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, opacity: { duration: 0.5 }, y: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' } }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/35 hover:text-teal-400 transition-colors"
        aria-label="Scroll down"
      >
        <span className="font-body text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
}
