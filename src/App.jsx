import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Logos from './components/Logos'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import CTA from './components/CTA'
import Footer from './components/Footer'

function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}

function FeaturesPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}

function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}

function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  )
}

export default HomePage
export { FeaturesPage, PricingPage, ContactPage }
