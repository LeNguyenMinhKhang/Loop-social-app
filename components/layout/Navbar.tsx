import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-violet-500/10 glass-strong">
      <div className="flex h-16 items-center justify-between px-6 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold gradient-text">Loop</span>
        </Link>
        <div className="flex items-center space-x-3">
          <Link href="/login" className="text-sm font-medium text-gray-400 hover:text-violet-300 transition-colors px-4 py-2 rounded-lg hover:bg-violet-500/10">
            Login
          </Link>
          <Link href="/register" className="text-sm font-semibold px-5 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 hover:shadow-lg hover:shadow-violet-500/25 transition-all hover:scale-105">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  )
}
