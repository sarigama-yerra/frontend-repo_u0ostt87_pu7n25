import { QrCode, Megaphone, Star, ShoppingCart, Gauge, CreditCard } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: QrCode,
      title: 'QR Table Ordering',
      desc: 'Contactless ordering with smart menus. Increase table turns and average spend.'
    },
    {
      icon: ShoppingCart,
      title: 'Online Delivery',
      desc: 'Own your customers with a commission-free delivery channel and real-time tracking.'
    },
    {
      icon: Megaphone,
      title: 'Marketing Automation',
      desc: 'Email, SMS, and push campaigns triggered by visits, spend and behavior.'
    },
    {
      icon: Star,
      title: 'Google Reviews',
      desc: 'Automated review requests that drive more 5-star ratings and local SEO.'
    },
    {
      icon: Gauge,
      title: 'Analytics Dashboard',
      desc: 'Track sales, retention, and campaign ROI in one clean dashboard.'
    },
    {
      icon: CreditCard,
      title: 'Unified Payments',
      desc: 'In-person and online payments with instant reconciliation.'
    }
  ]

  return (
    <section id="features" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_40%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to run and grow</h2>
          <p className="mt-3 text-white/70">Built for restaurants, cafes, bars, food trucks and franchises.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
