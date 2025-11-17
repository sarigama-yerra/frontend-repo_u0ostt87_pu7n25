import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <main className="bg-slate-900 min-h-screen pt-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">Contact</h1>
        <p className="mt-2 text-white/70 max-w-2xl">We\'ll help you choose the right plan, import your menu and get you live fast.</p>
      </section>
      <Contact />
    </main>
  )
}
