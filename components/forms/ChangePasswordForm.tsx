export function ChangePasswordForm() {
  return (
    <div className="bg-[#12122a]/80 backdrop-blur-xl rounded-2xl border border-violet-500/10 p-6 mb-4">
      <h4 className="text-lg font-bold text-white mb-4">Change Password</h4>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Current Password</label>
          <input type="password" className="w-full bg-[#0a0a1a]/80 border border-violet-500/15 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-violet-500/50 transition-colors" placeholder="••••••••" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">New Password</label>
          <input type="password" className="w-full bg-[#0a0a1a]/80 border border-violet-500/15 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-violet-500/50 transition-colors" placeholder="••••••••" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Confirm New Password</label>
          <input type="password" className="w-full bg-[#0a0a1a]/80 border border-violet-500/15 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-violet-500/50 transition-colors" placeholder="••••••••" />
        </div>
        <button type="button" className="bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold py-2.5 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-[1.02] btn-glow">
          Change Password
        </button>
      </form>
    </div>
  )
}
