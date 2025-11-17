export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Plateform Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 text-white/60 text-sm">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="/pricing" className="hover:text-white">Pricing</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
