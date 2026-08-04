import { Sparkles } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-violet-500/10 py-8 bg-[#0a0a1a]">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-violet-400" />
          <span className="font-bold gradient-text text-sm">Loop</span>
        </div>
        <p className="text-sm text-gray-500 text-center md:text-right">
          © 2026 Loop. Built with ❤️ by the Loop Team.
        </p>
      </div>
    </footer>
  )
}
