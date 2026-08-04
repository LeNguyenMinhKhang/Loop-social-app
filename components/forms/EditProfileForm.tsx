export function EditProfileForm() {
  return (
    <form className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Display Name</label>
        <input type="text" className="w-full bg-[#0a0a1a]/80 border border-violet-500/15 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-violet-500/50 transition-colors" defaultValue="User Name" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-violet-400/60">@</span>
          <input type="text" className="w-full bg-[#0a0a1a]/80 border border-violet-500/15 rounded-xl py-3 px-4 pl-8 text-white focus:outline-none focus:border-violet-500/50 transition-colors" defaultValue="username" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
        <textarea className="w-full bg-[#0a0a1a]/80 border border-violet-500/15 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-violet-500/50 transition-colors min-h-[120px] resize-none" defaultValue="Living on the edge of tomorrow. 🚀" />
        <p className="text-xs text-gray-600 mt-1">160 characters remaining</p>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Website</label>
        <input type="url" className="w-full bg-[#0a0a1a]/80 border border-violet-500/15 rounded-xl py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 transition-colors" placeholder="https://yourwebsite.com" />
      </div>
      <button type="button" className="bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-[1.02] btn-glow">
        Save Changes
      </button>
    </form>
  )
}
