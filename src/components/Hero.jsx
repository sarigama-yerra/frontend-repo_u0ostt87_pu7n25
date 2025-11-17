import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Stars } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-indigo-700/20" />
      <div className="absolute left-1/2 top-[-20%] -translate-x-1/2 h-[600px] w-[1100px] rounded-full bg-blue-500/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm mb-6">
          <Stars className="h-4 w-4" />
          Boost orders, reviews and loyalty — all in one place
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
          The operating system for modern restaurants
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
          Online delivery, QR table ordering, marketing automation, and Google reviews — everything you need to grow revenue and delight guests.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/pricing" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-slate-900 font-semibold hover:bg-blue-50 transition-colors">
            Start free trial
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="#features" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors">
            Explore features
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {["Increase order volume", "Automate marketing", "Earn 5-star reviews"].map((item) => (
            <div key={item} className="flex items-center gap-2 justify-center text-white/90">
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
