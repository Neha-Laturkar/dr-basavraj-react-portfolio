import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock, Send, CheckCircle, ExternalLink } from 'lucide-react';
 
const INFO = [
  {
    icon: MapPin,
    label: 'Clinic Address',
    value: 'Hrudayaspandan Heart Care',
    sub: 'Solapur, Maharashtra, India',
    color: 'teal',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'drbasu394@yahoo.co.in',
    sub: 'Reply within 24 hours',
    href: 'mailto:drbasu394@yahoo.co.in',
    color: 'blue',
  },
  {
    icon: Clock,
    label: 'OPD Timings',
    value: 'Mon – Sat: 10am – 2pm',
    sub: 'Emergency: 24 / 7',
    color: 'violet',
  },
  {
    icon: Phone,
    label: 'Appointment',
    value: 'Book via Contact Form',
    sub: 'Or reach out on LinkedIn',
    color: 'amber',
  },
];
 
const ICON_COLORS = {
  teal:   { bg: 'bg-teal-50',   icon: 'text-teal-600',   dark: 'bg-teal-500/15 text-teal-300'   },
  blue:   { bg: 'bg-blue-50',   icon: 'text-blue-600',   dark: 'bg-blue-500/15 text-blue-300'   },
  violet: { bg: 'bg-violet-50', icon: 'text-violet-600', dark: 'bg-violet-500/15 text-violet-300'},
  amber:  { bg: 'bg-amber-50',  icon: 'text-amber-600',  dark: 'bg-amber-500/15 text-amber-300' },
};
 
export default function Contact({ darkMode }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', condition: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
 
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
 
  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };
 
  const inputClass = (darkMode) =>
    `w-full px-4 py-3 rounded-xl font-body text-sm outline-none transition-all duration-200
     border focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20
     ${darkMode
       ? 'bg-navy-900 border-white/10 text-white placeholder-white/30'
       : 'bg-white border-gray-200 text-gray-800 placeholder-gray-400'}`;
 
  return (
    <section
      id="contact"
      className={`py-28 ${darkMode ? 'bg-navy-800' : 'bg-white'}`}
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
            Get in Touch
          </span>
          <h2 className={`font-display text-4xl sm:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-navy-800'}`}>
            Book a <span className="text-teal-500">Consultation</span>
          </h2>
          <p className={`font-body text-base max-w-xl mx-auto ${darkMode ? 'text-white/55' : 'text-gray-500'}`}>
            Take the first step towards better heart health. Fill in the form and 
            Dr. Basavaraj's team will get back to you within 24 hours.
          </p>
        </motion.div>
 
        <div className="grid lg:grid-cols-5 gap-10">
 
          {/* LEFT – Info cards + map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {INFO.map((item, i) => {
              const Icon = item.icon;
              const c = ICON_COLORS[item.color];
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex items-start gap-4 p-4 rounded-2xl transition-all
                    ${darkMode ? 'bg-navy-900 border border-white/6' : 'bg-slate-50 border border-gray-100'}`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0
                    ${darkMode ? c.dark.split(' ')[0] : c.bg}`}>
                    <Icon className={`w-5 h-5 ${darkMode ? c.dark.split(' ')[1] : c.icon}`} />
                  </div>
                  <div>
                    <p className={`font-body text-xs font-medium mb-0.5 ${darkMode ? 'text-white/40' : 'text-gray-400'}`}>{item.label}</p>
                    {item.href
                      ? <a href={item.href} className="font-body font-semibold text-sm text-teal-500 hover:text-teal-600 transition-colors">{item.value}</a>
                      : <p className={`font-body font-semibold text-sm ${darkMode ? 'text-white' : 'text-navy-800'}`}>{item.value}</p>
                    }
                    <p className={`font-body text-xs mt-0.5 ${darkMode ? 'text-white/35' : 'text-gray-400'}`}>{item.sub}</p>
                  </div>
                </motion.div>
              );
            })}
 
            {/* Social links */}
            <div className={`p-4 rounded-2xl ${darkMode ? 'bg-navy-900 border border-white/6' : 'bg-slate-50 border border-gray-100'}`}>
              <p className={`font-body text-xs font-medium mb-3 ${darkMode ? 'text-white/40' : 'text-gray-400'}`}>Follow & Connect</p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/dr-basavaraj-s-14221570"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-body font-semibold text-sm transition-all hover:shadow-lg hover:shadow-blue-600/25"
                >
                  <ExternalLink className="w-4 h-4" /> LinkedIn
                </a>
                <a
                  href="https://www.facebook.com/share/1aduz24gsz/?mibextid=wwxifr"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1877f2] hover:bg-blue-700 text-white font-body font-semibold text-sm transition-all hover:shadow-lg hover:shadow-blue-600/25"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
</svg>
                </a>
              </div>
            </div>
 
            {/* Google Map embed */}
            <div className="rounded-2xl overflow-hidden h-48 shadow-lg">
              <iframe
                title="Solapur location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121770.56682529463!2d75.81630334863283!3d17.686077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5db1327888687%3A0x7b04e16b87a888a4!2sSolapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </motion.div>
 
          {/* RIGHT – Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className={`rounded-3xl p-7 sm:p-9 shadow-xl
              ${darkMode ? 'bg-navy-900 border border-white/8' : 'bg-white border border-gray-100 shadow-gray-100'}`}>
 
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-teal-50 flex items-center justify-center mb-5 shadow-lg shadow-teal-100">
                    <CheckCircle className="w-10 h-10 text-teal-500" />
                  </div>
                  <h3 className={`font-display font-bold text-2xl mb-2 ${darkMode ? 'text-white' : 'text-navy-800'}`}>
                    Message Sent!
                  </h3>
                  <p className={`font-body text-sm max-w-xs ${darkMode ? 'text-white/55' : 'text-gray-500'}`}>
                    Thank you for reaching out. Dr. Basavaraj's team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name:'',phone:'',email:'',condition:'',message:'' }); }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-teal-500 text-white font-body font-semibold text-sm hover:bg-teal-600 transition-colors"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className={`font-display font-bold text-2xl mb-1.5 ${darkMode ? 'text-white' : 'text-navy-800'}`}>
                    Request an Appointment
                  </h3>
                  <p className={`font-body text-sm mb-7 ${darkMode ? 'text-white/45' : 'text-gray-400'}`}>
                    All fields marked * are required
                  </p>
 
                  <form onSubmit={submit} className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className={`block font-body text-xs font-medium mb-1.5 ${darkMode ? 'text-white/55' : 'text-gray-500'}`}>
                          Full Name *
                        </label>
                        <input
                          name="name" value={form.name} onChange={handle} required
                          placeholder="e.g. Ramesh Patil"
                          className={inputClass(darkMode)}
                        />
                      </div>
                      <div>
                        <label className={`block font-body text-xs font-medium mb-1.5 ${darkMode ? 'text-white/55' : 'text-gray-500'}`}>
                          Phone Number *
                        </label>
                        <input
                          name="phone" value={form.phone} onChange={handle} required
                          placeholder="+91 98765 43210"
                          className={inputClass(darkMode)}
                        />
                      </div>
                    </div>
 
                    <div>
                      <label className={`block font-body text-xs font-medium mb-1.5 ${darkMode ? 'text-white/55' : 'text-gray-500'}`}>
                        Email Address
                      </label>
                      <input
                        name="email" value={form.email} onChange={handle}
                        placeholder="you@example.com"
                        type="email"
                        className={inputClass(darkMode)}
                      />
                    </div>
 
                    <div>
                      <label className={`block font-body text-xs font-medium mb-1.5 ${darkMode ? 'text-white/55' : 'text-gray-500'}`}>
                        Condition / Reason for Visit *
                      </label>
                      <select
                        name="condition" value={form.condition} onChange={handle} required
                        className={inputClass(darkMode)}
                      >
                        <option value="">Select a condition…</option>
                        <option>Chest pain / Angina</option>
                        <option>Irregular heartbeat / Arrhythmia</option>
                        <option>Heart attack follow-up</option>
                        <option>Hypertension / High blood pressure</option>
                        <option>Pacemaker / ICD consultation</option>
                        <option>General cardiac check-up</option>
                        <option>ECG / Echo review</option>
                        <option>Other</option>
                      </select>
                    </div>
 
                    <div>
                      <label className={`block font-body text-xs font-medium mb-1.5 ${darkMode ? 'text-white/55' : 'text-gray-500'}`}>
                        Message / Additional Details
                      </label>
                      <textarea
                        name="message" value={form.message} onChange={handle}
                        rows={4}
                        placeholder="Briefly describe your symptoms, medical history, or any questions…"
                        className={`${inputClass(darkMode)} resize-none`}
                      />
                    </div>
 
                    <motion.button
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={loading}
                      className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl
                                 bg-gradient-to-r from-teal-500 to-teal-600 text-white
                                 font-body font-semibold text-base shadow-lg shadow-teal-500/25
                                 hover:shadow-teal-500/40 transition-shadow duration-300
                                 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                      ) : <Send className="w-5 h-5" />}
                      {loading ? 'Sending…' : 'Send Message'}
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
 