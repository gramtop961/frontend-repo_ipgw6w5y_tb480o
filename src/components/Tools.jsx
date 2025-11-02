import { motion } from 'framer-motion';
import { Volume2, FileText, Bot, Video } from 'lucide-react';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const ToolItem = ({ icon: Icon, title, desc }) => (
  <motion.div
    variants={item}
    whileHover={{ y: -4, scale: 1.02, boxShadow: '0 12px 28px rgba(15,23,42,0.15)' }}
    whileTap={{ scale: 0.98 }}
    className="group flex items-start gap-4 rounded-xl bg-white p-5 ring-1 ring-slate-200 shadow-sm hover:shadow-xl relative overflow-hidden"
  >
    {/* diagonal sheen */}
    <motion.span
      aria-hidden
      initial={{ x: '-120%' }}
      whileHover={{ x: '120%' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="pointer-events-none absolute -top-6 left-0 h-24 w-20 rotate-12 bg-gradient-to-r from-transparent via-white/50 to-transparent"
    />

    <div className="shrink-0 rounded-lg bg-slate-900 p-2.5 text-white">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h3 className="text-base md:text-lg font-semibold text-slate-900 flex items-center gap-2">
        {title}
        <motion.span
          initial={{ opacity: 0, x: -4 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="text-xs font-medium text-slate-500"
        >
          tap →
        </motion.span>
      </h3>
      <p className="mt-1 text-slate-600">{desc}</p>
    </div>
  </motion.div>
);

export default function Tools() {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Click-to-read, powered by smart tools
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Tap a headline to focus and expand the full story. Enhance your flow with assistive features built for clarity.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          <ToolItem icon={Volume2} title="Text to Speech" desc="Listen to any story in a natural voice — perfect for when you’re on the move." />
          <ToolItem icon={FileText} title="Summarizer" desc="Get crisp, 2–3 line snapshots before diving deeper." />
          <ToolItem icon={Bot} title="AI Assistant" desc="Ask follow-ups, get bullet points, and surface context on demand." />
          <ToolItem icon={Video} title="Text to Video" desc="Auto-generate quick recaps for visual catch-ups and shareable bites." />
        </motion.div>
      </div>

      {/* subtle animated grid background for the section */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:20px_20px]" />
      </motion.div>
    </section>
  );
}
