'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Sidebar } from '@/components/layout/Sidebar'
import { SuggestionsPanel } from '@/components/feed/SuggestionsPanel'
import { ProfileHeader } from '@/components/profile/ProfileHeader'
import { ProfileTabs } from '@/components/profile/ProfileTabs'
import { ProfileGrid } from '@/components/profile/ProfileGrid'
import { mockUsers, mockPosts } from '@/data/mockData'
import { ArrowLeft } from 'lucide-react'

export function ProfilePageClient({ username }: { username: string }) {
  const [activeTab, setActiveTab] = useState('posts')

  // Get user from mock data
  const user = mockUsers.find(u => u.username === username)

  if (!user) {
    return (
      <div className="flex min-h-screen bg-[#0a0a1a]">
        <Sidebar />
        <main className="flex-1 border-l border-r border-violet-500/10 max-w-2xl px-5 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white">User not found</h1>
            <p className="text-gray-400 mt-2">
              <Link href="/feed" className="text-violet-400 hover:text-violet-300 transition-colors">
                Back to feed
              </Link>
            </p>
          </div>
        </main>
        <SuggestionsPanel />
      </div>
    )
  }

  // Filter posts by user
  const userPosts = mockPosts.filter((post) => post.author.id === user.id)

  return (
    <div className="flex min-h-screen bg-[#0a0a1a]">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 border-l border-r border-violet-500/10 max-w-2xl">
        {/* Header Navigation */}
        <div className="border-b border-violet-500/10 sticky top-0 glass-strong z-10 px-5 py-3 flex items-center gap-4">
          <Link href="/feed" className="text-gray-400 hover:text-white p-2 hover:bg-violet-500/10 rounded-xl transition-all">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h2 className="text-lg font-bold text-white">{user.name}</h2>
            <p className="text-xs text-gray-500">{userPosts.length} posts</p>
          </div>
        </div>

        <ProfileHeader user={user} />
        <ProfileTabs onTabChange={setActiveTab} />
        <ProfileGrid posts={activeTab === 'posts' ? userPosts : []} />
      </main>

      <SuggestionsPanel />
    </div>
  )
}
