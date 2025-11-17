import Hero from '../components/Hero'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <main className="bg-slate-900 min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <CTA />
    </main>
  )
}
