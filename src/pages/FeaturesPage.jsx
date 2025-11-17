import Features from '../components/Features'
import CTA from '../components/CTA'

export default function FeaturesPage() {
  return (
    <main className="bg-slate-900 min-h-screen pt-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">Features</h1>
        <p className="mt-2 text-white/70 max-w-2xl">A complete toolkit to run and grow your food business across dine-in, pickup and delivery.</p>
      </section>
      <Features />
      <CTA />
    </main>
  )
}
