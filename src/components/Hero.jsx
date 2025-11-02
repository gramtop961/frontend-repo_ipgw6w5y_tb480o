import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Full-width interactive Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft top/bottom gradients for legibility; allow interaction through */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/80" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
          >
            Modern • Interactive • Minimal
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"
          >
            A clean, modern news experience with a playful interactive vibe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-slate-700"
          >
            Real stories, smart features, and a minimalist interface. Explore a seamless grid aesthetic that responds to your touch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#features"
              className="inline-flex justify-center items-center rounded-lg bg-slate-900 text-white px-5 py-3 font-semibold shadow-lg shadow-slate-900/10 hover:opacity-90 transition"
            >
              Explore Features
            </a>
            <a
              href="#coming"
              className="inline-flex justify-center items-center rounded-lg bg-white/80 backdrop-blur text-slate-900 px-5 py-3 font-semibold ring-1 ring-slate-200 hover:bg-white"
            >
              Coming Soon
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
