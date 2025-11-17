import Pricing from '../components/Pricing'
import CTA from '../components/CTA'

export default function PricingPage() {
  return (
    <main className="bg-slate-900 min-h-screen pt-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">Pricing</h1>
        <p className="mt-2 text-white/70 max-w-2xl">Try it free for 14 days. No credit card required.</p>
      </section>
      <Pricing />
      <CTA />
    </main>
  )
}
