'use client'

import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <form className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
        <input
          type="email"
          className="w-full bg-[#0a0a1a]/80 border border-violet-500/15 rounded-xl py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 transition-colors"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-gray-300">Password</label>
          <Link href="/forgot-password" className="text-xs text-violet-400 hover:text-violet-300 transition-colors">Forgot password?</Link>
        </div>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-full bg-[#0a0a1a]/80 border border-violet-500/15 rounded-xl py-3 px-4 pr-12 text-white focus:outline-none focus:border-violet-500/50 transition-colors"
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-violet-400 transition-colors"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>
      <button type="button" className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 mt-2 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-[1.02] btn-glow">
        Sign In
      </button>
    </form>
  )
}
