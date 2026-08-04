import { Sidebar } from '@/components/layout/Sidebar'
import { SuggestionsPanel } from '@/components/feed/SuggestionsPanel'
import { Post } from '@/components/feed/Post'
import { ComposePost } from '@/components/feed/ComposePost'
import { mockPosts } from '@/data/mockData'

export default function FeedPage() {
  return (
    <div className="flex min-h-screen bg-[#0a0a1a]">
      <Sidebar />

      {/* Main Feed */}
      <main className="flex-1 border-l border-r border-violet-500/10 max-w-2xl">
        <div className="border-b border-violet-500/10 sticky top-0 glass-strong z-10 px-5 py-4">
          <h2 className="text-xl font-bold text-white">Home</h2>
        </div>

        <ComposePost />

        <div>
          {mockPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </main>

      <SuggestionsPanel />
    </div>
  )
}
