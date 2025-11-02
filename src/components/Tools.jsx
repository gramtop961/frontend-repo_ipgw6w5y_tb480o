import { motion } from 'framer-motion';
import { Volume2, FileText, Bot, Video } from 'lucide-react';

const ToolItem = ({ icon: Icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.45 }}
    className="flex items-start gap-4 rounded-xl bg-white p-5 ring-1 ring-slate-200 shadow-sm hover:shadow-md"
  >
    <div className="shrink-0 rounded-lg bg-slate-900 p-2.5 text-white">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h3 className="text-base md:text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-slate-600">{desc}</p>
    </div>
  </motion.div>
);

export default function Tools() {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Click-to-read, powered by smart tools
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Tap a headline to focus and expand the full story. Enhance your flow with assistive features built for clarity.
          </p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <ToolItem icon={Volume2} title="Text to Speech" desc="Listen to any story in a natural voice — perfect for when you’re on the move." />
          <ToolItem icon={FileText} title="Summarizer" desc="Get crisp, 2–3 line snapshots before diving deeper." />
          <ToolItem icon={Bot} title="AI Assistant" desc="Ask follow-ups, get bullet points, and surface context on demand." />
          <ToolItem icon={Video} title="Text to Video" desc="Auto-generate quick recaps for visual catch-ups and shareable bites." />
        </div>
      </div>
    </section>
  );
}
