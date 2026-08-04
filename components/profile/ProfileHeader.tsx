export function ProfileHeader({ user }: { user: any }) {
  const username = user.username
  return (
    <div className="border-b border-violet-500/10">
      {/* Cover */}
      <div className="h-52 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a1a] to-transparent" />
      </div>

      <div className="px-5 pb-5">
        <div className="relative flex justify-between items-end">
          <div className="w-32 h-32 rounded-full border-4 border-[#0a0a1a] bg-[#12122a] -mt-16 overflow-hidden ring-4 ring-violet-500/20">
            <img src={`https://i.pravatar.cc/150?u=${username}`} alt={username} className="w-full h-full object-cover" />
          </div>
          <button className="border border-violet-500/30 text-white font-semibold py-2 px-6 rounded-xl hover:bg-violet-500/10 hover:border-violet-400 transition-all duration-200">
            Edit Profile
          </button>
        </div>
        <div className="mt-4">
          <h1 className="text-2xl font-bold text-white capitalize">{user.name || username}</h1>
          <p className="text-violet-400/70 text-sm">@{username}</p>
        </div>
        <p className="mt-3 text-gray-300 text-[15px]">Living on the edge of tomorrow. 🚀 ✨</p>
        <div className="mt-4 flex gap-6 text-sm">
          <div className="group cursor-pointer">
            <span className="font-bold text-white group-hover:text-violet-300 transition-colors">124</span>{' '}
            <span className="text-gray-500">Following</span>
          </div>
          <div className="group cursor-pointer">
            <span className="font-bold text-white group-hover:text-violet-300 transition-colors">10.5K</span>{' '}
            <span className="text-gray-500">Followers</span>
          </div>
        </div>
      </div>
    </div>
  )
}
