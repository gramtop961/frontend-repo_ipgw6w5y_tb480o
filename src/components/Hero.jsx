import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function Hero() {
  // Subtle parallax for headline group (anime-like depth)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-50, 50], [8, -8]);
  const rotateY = useTransform(mx, [-50, 50], [-8, 8]);

  return (
    <section
      className="relative min-h-[90vh] w-full overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - (rect.left + rect.width / 2));
        my.set(e.clientY - (rect.top + rect.height / 2));
      }}
    >
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
        <motion.div style={{ rotateX, rotateY }} className="max-w-3xl will-change-transform">
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
            A clean, modern news experience with an anime-flavor of motion
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-slate-700"
          >
            Real stories, smart features, and a minimalist interface. Smooth parallax, speedlines, and playful hover micro-interactions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.03, y: -2, boxShadow: '0 10px 30px rgba(15,23,42,0.25)' }}
              whileTap={{ scale: 0.98 }}
              href="#features"
              className="inline-flex justify-center items-center rounded-lg bg-slate-900 text-white px-5 py-3 font-semibold shadow-lg shadow-slate-900/10 transition [outline:none]"
            >
              Explore Features
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#coming"
              className="inline-flex justify-center items-center rounded-lg bg-white/80 backdrop-blur text-slate-900 px-5 py-3 font-semibold ring-1 ring-slate-200 hover:bg-white"
            >
              Coming Soon
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Anime-style speedlines behind text */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="pointer-events-none absolute right-0 top-24 hidden md:block"
        >
          <motion.div
            animate={{ x: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="h-40 w-72 opacity-40"
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
            <div className="mt-4 h-px w-3/4 bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
