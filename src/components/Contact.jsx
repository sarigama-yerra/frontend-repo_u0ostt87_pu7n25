import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      // Normally we'd post to the backend. For now, simulate success.
      await new Promise((r) => setTimeout(r, 600))
      setStatus({ ok: true, message: 'Thanks! We\'ll be in touch within 1 business day.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let\'s talk</h2>
            <p className="mt-3 text-white/70">Tell us about your business and goals. We\'ll craft a plan to help you grow orders and repeat visits.</p>
            <ul className="mt-6 space-y-2 text-white/80 text-sm">
              <li>• Onboarding and menu import included</li>
              <li>• Live training for your team</li>
              <li>• Cancel anytime</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/80">First name</label>
                <input name="firstName" required className="mt-1 w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Alex" />
              </div>
              <div>
                <label className="text-sm text-white/80">Last name</label>
                <input name="lastName" required className="mt-1 w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nguyen" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/80">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@restaurant.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/80">Business name</label>
                <input name="business" required className="mt-1 w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Blue Bottle Cafe" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/80">How can we help?</label>
                <textarea name="message" rows="4" className="mt-1 w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your goals and timeline" />
              </div>
            </div>
            <button className="mt-4 w-full px-4 py-2 rounded-md font-medium bg-white text-slate-900 hover:bg-blue-50 transition-colors">Submit</button>
            {status && (
              <p className={`mt-3 text-sm ${status.ok ? 'text-emerald-400' : 'text-red-400'}`}>{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
