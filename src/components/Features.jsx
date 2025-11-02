import { motion } from 'framer-motion';
import { Shield, Sparkles, Newspaper, Flame, Film, Trophy, Globe, ArrowUpRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="group relative rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md"
  >
    <div className="flex items-start gap-4">
      <div className="shrink-0 rounded-xl bg-slate-900 p-3 text-white shadow-lg shadow-slate-900/20">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          {title}
          <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition" />
        </h3>
        <div className="mt-2 text-slate-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Features() {
  return (
    <section id="features" className="relative py-16 md:py-24 bg-gradient-to-b from-white via-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Thoughtfully designed features
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Clean, fast, and focused. Everything you need for a calm and engaging reading flow.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Shield} title="Trusted, verified content">
            Our editorial pipeline emphasizes accuracy. Clear sourcing and signals keep misinformation out of your way.
          </FeatureCard>

          <FeatureCard icon={Sparkles} title="Personalized and delightful">
            A minimalist, responsive UI tailored to you. Sections for what matters most, without the noise:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Trending <span className="inline-flex items-center"><Flame className="h-4 w-4 text-orange-500 ml-1" /></span></li>
              <li>Entertainment <span className="inline-flex items-center"><Film className="h-4 w-4 text-pink-500 ml-1" /></span></li>
              <li>Sports <span className="inline-flex items-center"><Trophy className="h-4 w-4 text-yellow-500 ml-1" /></span></li>
              <li>World <span className="inline-flex items-center"><Globe className="h-4 w-4 text-blue-500 ml-1" /></span></li>
            </ul>
          </FeatureCard>

          <FeatureCard icon={Newspaper} title="Short, effective reading">
            Bite-sized highlights when you want speed. Dive deeper with context when you’re ready — no clutter, no friction.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
