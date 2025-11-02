import Hero from './components/Hero';
import Features from './components/Features';
import Tools from './components/Tools';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500" />
            <span className="font-extrabold tracking-tight text-lg">Pulse</span>
            <span className="text-sm text-slate-500">• Pulse of the World</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#features" className="text-slate-600 hover:text-slate-900">Features</a>
            <a href="#coming" className="text-slate-600 hover:text-slate-900">Coming Soon</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Tools />
        <ComingSoon />
      </main>

      <footer className="py-10 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 text-sm text-slate-500 flex flex-col sm:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} Pulse — Pulse of the World</p>
          <p>Built with love for real, fast, and personalized news.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
