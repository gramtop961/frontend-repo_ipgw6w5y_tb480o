import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Newspaper } from 'lucide-react';

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
        {/* News ticker style headline */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-full ring-1 ring-slate-200 bg-white/80 backdrop-blur flex items-center gap-3 px-3 py-1.5 w-full overflow-hidden"
        >
          <span className="inline-flex items-center gap-2 shrink-0 text-white bg-gradient-to-r from-rose-600 to-orange-500 px-3 py-1 rounded-full text-xs font-semibold">
            <Newspaper className="h-4 w-4" /> Breaking
          </span>
          <div className="relative flex-1 overflow-hidden h-6">
            <motion.div
              aria-hidden
              className="absolute whitespace-nowrap text-sm font-semibold tracking-wide text-slate-900"
              animate={{ x: ['0%', '-60%'] }}
              transition={{ repeat: Infinity, repeatType: 'loop', duration: 10, ease: 'linear' }}
            >
              Live, real reporting with anime-speed clarity • Headlines stay moving so you never miss the pulse • Minimalist design. Maximum focus • 
            </motion.div>
          </div>
        </motion.div>

        {/* Content and reporter layout */}
        <div className="mt-8 grid lg:grid-cols-12 gap-8 items-center">
          <motion.div
            style={{ rotateX, rotateY }}
            className="lg:col-span-7 max-w-3xl will-change-transform"
          >
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"
            >
              Live. Real. Reported.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg md:text-xl text-slate-700"
            >
              Headlines stay in motion with a continuous ticker. Beside it, a live reporter brings the story to life.
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

          {/* Reporter card with a real reporter image and subtle floating animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-white/85 backdrop-blur p-5 ring-1 ring-slate-200 shadow-xl overflow-hidden">
              {/* glow */}
              <motion.div
                aria-hidden
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="pointer-events-none absolute -inset-10 bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-amber-500/10 blur-2xl"
              />

              <div className="relative grid grid-cols-5 gap-4 items-center">
                {/* Animated reporter photograph */}
                <motion.div
                  className="col-span-3 overflow-hidden rounded-xl ring-1 ring-slate-200 shadow-md"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop"
                    alt="Live reporter on the scene"
                    className="h-44 w-full object-cover"
                    loading="eager"
                  />
                </motion.div>

                {/* Desk + paper panel */}
                <motion.div
                  className="col-span-2"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="mx-auto h-2 w-24 rounded-full bg-slate-200" />
                  <div className="mt-3 rounded-xl ring-1 ring-slate-200 bg-white p-3 shadow-md">
                    <div className="flex items-center gap-2">
                      <div className="h-9 w-9 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                        <Newspaper className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Live Reporter</p>
                        <p className="text-xs text-slate-600">Reading the latest on-air</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* particle lines for anime vibe */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -right-2 top-2 space-y-2"
              >
                {[...Array(3)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="block h-px w-24 bg-gradient-to-r from-transparent via-slate-400 to-transparent"
                    animate={{ x: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 2 + i * 0.3, ease: 'easeInOut' }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Anime-style speedlines behind content */}
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
