export default function Logos() {
  const logos = ['Acacia', 'Oak', 'Maple', 'Cedar', 'Pine', 'Willow']
  return (
    <section className="bg-slate-950 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-center text-white/60 text-sm">Trusted by growing restaurants and franchises</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center text-white/50">
          {logos.map((l) => (
            <div key={l} className="px-3 py-2 rounded bg-white/5">{l}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
