import { Link, NavLink } from 'react-router-dom'
import { Menu, X, UtensilsCrossed } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = ({ to, label }) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'text-white bg-white/10' : 'text-white/80 hover:text-white'
        }`
      }
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30">
              <UtensilsCrossed className="h-5 w-5 text-white" />
            </span>
            <span className="font-semibold tracking-tight">Plateform</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItem({ to: '/', label: 'Home' })}
            {navItem({ to: '/features', label: 'Features' })}
            {navItem({ to: '/pricing', label: 'Pricing' })}
            {navItem({ to: '/contact', label: 'Contact' })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/pricing" className="px-4 py-2 rounded-md text-sm font-medium bg-white text-slate-900 hover:bg-blue-50 transition-colors">
              Start free trial
            </Link>
          </div>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="px-4 py-3 space-y-1">
            <div>{navItem({ to: '/', label: 'Home' })}</div>
            <div>{navItem({ to: '/features', label: 'Features' })}</div>
            <div>{navItem({ to: '/pricing', label: 'Pricing' })}</div>
            <div>{navItem({ to: '/contact', label: 'Contact' })}</div>
          </div>
        </div>
      )}
    </header>
  )
}
