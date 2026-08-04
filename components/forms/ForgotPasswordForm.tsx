export function ForgotPasswordForm() {
  return (
    <form className="space-y-5">
      <p className="text-sm text-gray-400 leading-relaxed">Enter your email address and we&apos;ll send you a link to reset your password.</p>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
        <input type="email" className="w-full bg-[#0a0a1a]/80 border border-violet-500/15 rounded-xl py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 transition-colors" placeholder="you@example.com" />
      </div>
      <button type="button" className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 mt-2 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-[1.02] btn-glow">
        Send Reset Link
      </button>
    </form>
  )
}
