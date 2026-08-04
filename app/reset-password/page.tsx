import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { ResetPasswordForm } from '@/components/forms/ResetPasswordForm'
import { Card } from '@/components/common/Card'
import { ShieldCheck } from 'lucide-react'

export default function ResetPasswordPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col bg-[#0a0a1a] relative overflow-hidden">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-violet-600 rounded-full mix-blend-screen filter blur-[120px] opacity-[0.06] animate-blob-move" />
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-[120px] opacity-[0.05] animate-blob-move" style={{ animationDelay: '3s' }} />
        </div>

        <div className="flex-1 flex items-center justify-center px-4 py-12 relative z-10">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-xl shadow-violet-500/25 mb-6">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white">Set New Password</h1>
              <p className="text-gray-400 mt-2">Create a new password for your account</p>
            </div>

            <Card className="p-8">
              <ResetPasswordForm />
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}
