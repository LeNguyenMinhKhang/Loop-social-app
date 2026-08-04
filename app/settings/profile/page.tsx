import Link from 'next/link'
import { Sidebar } from '@/components/layout/Sidebar'
import { SuggestionsPanel } from '@/components/feed/SuggestionsPanel'
import { EditProfileForm } from '@/components/forms/EditProfileForm'
import { ArrowLeft } from 'lucide-react'

export default function SettingsProfilePage() {
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
          <h2 className="text-lg font-bold text-white">Settings</h2>
        </div>

        {/* Settings Navigation */}
        <div className="border-b border-violet-500/10 flex">
          <Link
            href="/settings/profile"
            className="flex-1 py-4 px-4 font-semibold text-white border-b-2 border-violet-500 text-center hover:bg-violet-500/5 transition-colors relative"
          >
            Profile
          </Link>
          <Link
            href="/settings/account"
            className="flex-1 py-4 px-4 font-semibold text-gray-500 border-b-2 border-transparent text-center hover:bg-violet-500/5 transition-colors"
          >
            Account
          </Link>
        </div>

        {/* Form */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-6">Edit Profile</h3>
          <EditProfileForm />
        </div>
      </main>

      <SuggestionsPanel />
    </div>
  )
}
