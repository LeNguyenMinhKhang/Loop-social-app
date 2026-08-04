import Link from 'next/link'
import { Home, User, Settings, Compass, Bell, Mail, PenSquare, Sparkles } from 'lucide-react'

const navItems = [
  { href: '/feed', icon: Home, label: 'Home' },
  { href: '/explore', icon: Compass, label: 'Explore' },
  { href: '/notifications', icon: Bell, label: 'Notifications' },
  { href: '/messages', icon: Mail, label: 'Messages' },
  { href: '/profile/me', icon: User, label: 'Profile' },
  { href: '/settings/account', icon: Settings, label: 'Settings' },
]

export function Sidebar() {
  return (
    <aside className="w-[280px] border-r border-violet-500/10 bg-[#0d0d20] hidden md:flex flex-col sticky top-0 h-screen">
      {/* Logo */}
      <div className="px-6 py-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold gradient-text">Loop</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3.5 px-4 py-3 text-gray-400 hover:text-white hover:bg-violet-500/10 rounded-xl transition-all duration-200 group"
          >
            <Icon size={22} className="group-hover:text-violet-400 transition-colors" />
            <span className="text-[15px] font-medium">{label}</span>
          </Link>
        ))}
      </nav>

      {/* Post button */}
      <div className="px-4 pb-6">
        <button className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 hover:scale-[1.02] btn-glow flex items-center justify-center gap-2">
          <PenSquare size={18} />
          New Post
        </button>
      </div>
    </aside>
  )
}
