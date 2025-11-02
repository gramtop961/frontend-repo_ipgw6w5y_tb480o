import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function ComingSoon() {
  return (
    <section id="coming" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-[1px]"
        >
          <div className="relative rounded-2xl bg-white px-8 py-12">
            {/* particle trail */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute left-6 top-6 flex gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.span
                  key={i}
                  className="block h-1 w-6 rounded-full bg-gradient-to-r from-fuchsia-500/40 to-amber-500/40"
                  animate={{ x: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
                  transition={{ repeat: Infinity, duration: 2 + i * 0.15, ease: 'easeInOut' }}
                />
              ))}
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <motion.div
                initial={{ scale: 0.9, rotate: -6, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 180, damping: 18 }}
                className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg shadow-slate-900/20"
              >
                <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
                  <Rocket className="h-6 w-6" />
                </motion.div>
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Website is coming soon
              </h3>
              <p className="mt-3 text-slate-600 text-lg">
                A calm, modern news experience with subtle motion and delightful interaction. Stay tuned.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <motion.a
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white font-semibold shadow-lg shadow-slate-900/20"
                >
                  Notify Me
                </motion.a>
                <motion.a
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="#features"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-slate-800 font-semibold ring-1 ring-slate-200 hover:bg-slate-50"
                >
                  See Features
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
