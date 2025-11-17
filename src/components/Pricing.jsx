import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$49',
    period: 'mo',
    highlight: 'Best for single locations',
    features: [
      'Online menu & ordering',
      'QR table ordering',
      'Basic marketing tools',
      'Email support'
    ]
  },
  {
    name: 'Growth',
    price: '$149',
    period: 'mo',
    highlight: 'Most popular',
    featured: true,
    features: [
      'Everything in Starter',
      'Delivery dispatch + tracking',
      'Automations & campaigns',
      'Google review booster',
      'Advanced analytics'
    ]
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: '',
    highlight: 'For multi‑location & franchise',
    features: [
      'All Growth features',
      'Multi‑location dashboard',
      'Priority support',
      'Custom integrations'
    ]
  }
]

export default function Pricing() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start free, upgrade when you grow. No hidden fees.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl border ${tier.featured ? 'border-blue-400/40 bg-blue-500/5' : 'border-white/10 bg-white/5'} p-6 flex flex-col`}>
              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-white text-xl font-semibold">{tier.name}</h3>
                  {tier.highlight && <span className="text-xs text-white/60">{tier.highlight}</span>}
                </div>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  {tier.period && <span className="text-white/60">/{tier.period}</span>}
                </div>
                <ul className="mt-6 space-y-2 text-sm text-white/80">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2"><Check className="h-4 w-4 text-emerald-400 mt-0.5" /> {f}</li>
                  ))}
                </ul>
              </div>
              <button className={`mt-6 w-full px-4 py-2 rounded-md font-medium ${tier.featured ? 'bg-white text-slate-900 hover:bg-blue-50' : 'bg-white/10 text-white hover:bg-white/20'} transition-colors`}>
                {tier.price === 'Custom' ? 'Talk to sales' : 'Start free trial'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
