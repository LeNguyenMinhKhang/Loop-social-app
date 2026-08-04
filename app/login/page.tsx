import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { LoginForm } from '@/components/forms/LoginForm'
import { Card } from '@/components/common/Card'
import { Sparkles } from 'lucide-react'

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col bg-[#0a0a1a] relative overflow-hidden">
        {/* Animated background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-violet-600 rounded-full mix-blend-screen filter blur-[120px] opacity-[0.06] animate-blob-move" />
          <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-[120px] opacity-[0.05] animate-blob-move" style={{ animationDelay: '3s' }} />
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-indigo-600 rounded-full mix-blend-screen filter blur-[100px] opacity-[0.04] animate-blob-move" style={{ animationDelay: '6s' }} />
        </div>

        <div className="flex-1 flex items-center justify-center px-4 py-12 relative z-10">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-xl shadow-violet-500/25 mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white">Welcome back</h1>
              <p className="text-gray-400 mt-2">Sign in to your Loop account</p>
            </div>

            <Card className="p-8">
              <LoginForm />
            </Card>

            <div className="mt-6 text-center text-sm text-gray-500">
              New to Loop?{' '}
              <Link href="/register" className="text-violet-400 font-medium hover:text-violet-300 transition-colors">
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
