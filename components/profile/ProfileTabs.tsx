export function ProfileTabs({ onTabChange }: { onTabChange: (tab: string) => void }) {
  const tabs = ['Posts', 'Replies', 'Media', 'Likes']
  return (
    <div className="flex border-b border-violet-500/10">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab.toLowerCase())}
          className={`flex-1 py-4 text-center font-medium transition-all relative text-gray-400 hover:bg-violet-500/5 hover:text-violet-300 ${i === 0 ? 'text-white' : ''}`}
        >
          {tab}
          {i === 0 && <div className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-t-full" />}
        </button>
      ))}
    </div>
  )
}
