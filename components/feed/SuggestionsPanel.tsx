import { mockUsers } from '@/data/mockData'
import { UserPlus } from 'lucide-react'

export function SuggestionsPanel() {
  return (
    <aside className="w-[320px] hidden lg:block py-6 px-4 sticky top-0 h-screen">
      <div className="bg-[#12122a]/80 backdrop-blur-xl rounded-2xl border border-violet-500/10 p-5">
        <h3 className="font-bold text-lg mb-5 text-white flex items-center gap-2">
          <UserPlus size={18} className="text-violet-400" />
          Who to follow
        </h3>
        <div className="space-y-4">
          {mockUsers.map(user => (
            <div key={user.id} className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-600/20 overflow-hidden ring-2 ring-violet-500/10 flex-shrink-0">
                <img src={user.avatar} alt={user.name} className="object-cover w-full h-full" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate group-hover:text-violet-300 transition-colors">{user.name}</p>
                <p className="text-xs text-gray-500 truncate">@{user.username}</p>
              </div>
              <button className="px-4 py-1.5 bg-white/90 text-[#0a0a1a] text-xs font-bold rounded-full hover:bg-white transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/10 flex-shrink-0">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Trending section */}
      <div className="bg-[#12122a]/80 backdrop-blur-xl rounded-2xl border border-violet-500/10 p-5 mt-4">
        <h3 className="font-bold text-lg mb-4 text-white">Trending</h3>
        <div className="space-y-3">
          {['#LoopLaunch', '#DesignSystem', '#WebDev'].map((tag, i) => (
            <div key={tag} className="group cursor-pointer">
              <p className="text-xs text-gray-500">Trending #{i + 1}</p>
              <p className="text-sm font-semibold text-violet-300 group-hover:text-violet-200 transition-colors">{tag}</p>
              <p className="text-xs text-gray-600">{Math.floor(Math.random() * 50 + 10)}K posts</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
