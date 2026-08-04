import Link from 'next/link'
import { Sidebar } from '@/components/layout/Sidebar'
import { SuggestionsPanel } from '@/components/feed/SuggestionsPanel'
import { ChangeEmailForm } from '@/components/forms/ChangeEmailForm'
import { ChangePasswordForm } from '@/components/forms/ChangePasswordForm'
import { ArrowLeft } from 'lucide-react'

export default function SettingsAccountPage() {
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
            className="flex-1 py-4 px-4 font-semibold text-gray-500 border-b-2 border-transparent text-center hover:bg-violet-500/5 transition-colors"
          >
            Profile
          </Link>
          <Link
            href="/settings/account"
            className="flex-1 py-4 px-4 font-semibold text-white border-b-2 border-violet-500 text-center hover:bg-violet-500/5 transition-colors relative"
          >
            Account
          </Link>
        </div>

        {/* Forms */}
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-white mb-6">Account Settings</h3>

          <ChangeEmailForm />
          <ChangePasswordForm />

          {/* Delete Account Section */}
          <div className="bg-red-950/20 backdrop-blur-xl rounded-2xl border border-red-500/15 p-6">
            <h3 className="text-lg font-bold text-red-400 mb-2">Delete Account</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Permanently delete your Loop account and all associated data. This action cannot be undone.
            </p>
            <label className="flex items-center gap-3 mb-4 cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 rounded bg-[#0a0a1a] border-red-500/30 accent-red-600"
              />
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                I understand that this action is permanent and cannot be reversed
              </span>
            </label>
            <button className="px-6 py-2.5 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all hover:shadow-lg hover:shadow-red-500/20">
              Delete Account
            </button>
          </div>
        </div>
      </main>

      <SuggestionsPanel />
    </div>
  )
}
