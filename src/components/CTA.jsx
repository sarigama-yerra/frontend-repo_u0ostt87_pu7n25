import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">Ready to serve more guests and grow faster?</h3>
          <p className="mt-2 text-white/90">Join hundreds of restaurants switching to Plateform.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link to="/pricing" className="px-5 py-2.5 rounded-md bg-white text-slate-900 font-semibold hover:bg-blue-50 transition-colors">Start free trial</Link>
            <Link to="/contact" className="px-5 py-2.5 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors">Talk to sales</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
