'use client'

import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { Zap, Shield, Palette, Globe, Smartphone, Rocket, ArrowRight, Sparkles } from 'lucide-react'

function StarryCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let stars: { x: number; y: number; r: number; opacity: number; speed: number; twinkleSpeed: number; phase: number }[] = []
    let shootingStars: { x: number; y: number; len: number; speed: number; opacity: number; angle: number; life: number; maxLife: number }[] = []

    function resize() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
      initStars()
    }

    function initStars() {
      const count = Math.floor((canvas!.width * canvas!.height) / 3000)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        r: Math.random() * 1.8 + 0.3,
        opacity: Math.random(),
        speed: Math.random() * 0.02 + 0.005,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        phase: Math.random() * Math.PI * 2,
      }))
    }

    function spawnShootingStar() {
      if (Math.random() < 0.003) {
        const angle = Math.PI / 4 + Math.random() * 0.5
        shootingStars.push({
          x: Math.random() * canvas!.width * 0.7,
          y: Math.random() * canvas!.height * 0.4,
          len: 80 + Math.random() * 120,
          speed: 6 + Math.random() * 8,
          opacity: 1,
          angle,
          life: 0,
          maxLife: 60 + Math.random() * 40,
        })
      }
    }

    function draw(time: number) {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

      // Draw stars
      for (const star of stars) {
        star.phase += star.twinkleSpeed
        const twinkle = (Math.sin(star.phase) + 1) / 2
        const alpha = 0.2 + twinkle * 0.8

        // Glow
        const gradient = ctx!.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.r * 4)
        gradient.addColorStop(0, `rgba(200, 180, 255, ${alpha * 0.6})`)
        gradient.addColorStop(0.5, `rgba(167, 139, 250, ${alpha * 0.15})`)
        gradient.addColorStop(1, 'transparent')
        ctx!.fillStyle = gradient
        ctx!.beginPath()
        ctx!.arc(star.x, star.y, star.r * 4, 0, Math.PI * 2)
        ctx!.fill()

        // Core
        ctx!.fillStyle = `rgba(230, 220, 255, ${alpha})`
        ctx!.beginPath()
        ctx!.arc(star.x, star.y, star.r, 0, Math.PI * 2)
        ctx!.fill()
      }

      // Draw shooting stars
      spawnShootingStar()
      shootingStars = shootingStars.filter(s => s.life < s.maxLife)
      for (const s of shootingStars) {
        s.life++
        const progress = s.life / s.maxLife
        s.x += Math.cos(s.angle) * s.speed
        s.y += Math.sin(s.angle) * s.speed
        s.opacity = progress < 0.2 ? progress * 5 : 1 - ((progress - 0.2) / 0.8)

        const tailX = s.x - Math.cos(s.angle) * s.len
        const tailY = s.y - Math.sin(s.angle) * s.len
        const gradient = ctx!.createLinearGradient(tailX, tailY, s.x, s.y)
        gradient.addColorStop(0, 'transparent')
        gradient.addColorStop(0.7, `rgba(167, 139, 250, ${s.opacity * 0.4})`)
        gradient.addColorStop(1, `rgba(255, 255, 255, ${s.opacity})`)

        ctx!.strokeStyle = gradient
        ctx!.lineWidth = 2
        ctx!.lineCap = 'round'
        ctx!.beginPath()
        ctx!.moveTo(tailX, tailY)
        ctx!.lineTo(s.x, s.y)
        ctx!.stroke()

        // Bright head
        ctx!.fillStyle = `rgba(255, 255, 255, ${s.opacity})`
        ctx!.beginPath()
        ctx!.arc(s.x, s.y, 2, 0, Math.PI * 2)
        ctx!.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    animationId = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}

const features = [
  {
    Icon: Zap,
    title: 'Lightning Fast',
    description: 'Real-time updates with zero lag. Built on cutting-edge infrastructure for instant interactions.',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    Icon: Shield,
    title: 'Privacy First',
    description: 'End-to-end encryption and zero-knowledge architecture. Your data belongs to you.',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    Icon: Palette,
    title: 'Beautiful Design',
    description: 'Every pixel crafted with care. A stunning, modern interface that feels alive.',
    gradient: 'from-indigo-500 to-violet-600',
  },
  {
    Icon: Globe,
    title: 'Global Community',
    description: 'Connect with millions of creators, thinkers, and dreamers across the world.',
    gradient: 'from-fuchsia-500 to-purple-600',
  },
  {
    Icon: Smartphone,
    title: 'Cross Platform',
    description: 'Seamless experience across all your devices. Your world, everywhere you go.',
    gradient: 'from-violet-500 to-fuchsia-600',
  },
  {
    Icon: Rocket,
    title: 'Always Evolving',
    description: 'Continuous updates and features shaped by community feedback and innovation.',
    gradient: 'from-purple-500 to-violet-600',
  },
]

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white overflow-hidden relative">
      <StarryCanvas />

      {/* Nebula background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-violet-600 rounded-full mix-blend-screen filter blur-[120px] opacity-[0.07] animate-blob-move" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-indigo-500 rounded-full mix-blend-screen filter blur-[120px] opacity-[0.06] animate-blob-move" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-[-10%] left-[30%] w-[700px] h-[700px] bg-purple-700 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.05] animate-blob-move" style={{ animationDelay: '8s' }} />
        <div className="absolute top-[50%] left-[60%] w-[400px] h-[400px] bg-fuchsia-600 rounded-full mix-blend-screen filter blur-[100px] opacity-[0.04] animate-blob-move" style={{ animationDelay: '12s' }} />
      </div>

      {/* Navbar */}
      <nav className={`relative z-10 flex items-center justify-between px-6 md:px-12 py-5 glass-strong ${isLoaded ? 'animate-fade-in-down' : 'opacity-0'}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center font-bold text-lg shadow-lg shadow-violet-500/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-2xl font-bold gradient-text">Loop</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            {['Features'].map((item) => (
              <button
                key={item}
                className="hover:text-violet-300 transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>
          <Link
            href="/login"
            className="px-6 py-2.5 rounded-xl border border-violet-500/30 hover:border-violet-400 text-sm font-medium transition-all duration-300 hover:bg-violet-500/10 hover:shadow-lg hover:shadow-violet-500/20"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="hidden sm:block px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 hover:scale-105 btn-glow"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-16 items-center min-h-[600px]">
          {/* Left content */}
          <div className={isLoaded ? 'animate-fade-in-up' : 'opacity-0'}>
            <div className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-500/10 border border-violet-500/20 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-violet-300 font-medium">
                The future of social networking
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-8 tracking-tight">
              <span className="block text-white">Connect.</span>
              <span className="block mt-1 gradient-text">Share.</span>
              <span className="block mt-1 text-white animate-text-glow">Grow.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-lg font-light">
              Join millions building meaningful connections. Share your thoughts, discover new ideas, and grow your network on the most beautiful social platform.
            </p>

            <div className="flex gap-4 flex-col sm:flex-row mb-14">
              <Link
                href="/register"
                className="group px-8 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/40 hover:scale-105 text-center relative overflow-hidden btn-glow"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="/feed"
                className="px-8 py-4 border border-violet-500/30 rounded-xl font-semibold hover:border-violet-400 hover:bg-violet-500/10 transition-all duration-300 text-center backdrop-blur-md"
              >
                Explore Loop
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-10">
              {[{ num: '10M+', label: 'Active Users' }, { num: '500M+', label: 'Messages Sent' }, { num: '150+', label: 'Countries' }].map((stat, i) => (
                <div key={i} className="group cursor-default">
                  <div className="text-2xl md:text-3xl font-bold gradient-text group-hover:scale-110 transition-transform origin-left">
                    {stat.num}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Animated visual */}
          <div className={`relative h-96 md:h-full ${isLoaded ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Aura */}
              <div className="absolute w-80 h-80 rounded-full bg-violet-600/20 blur-3xl animate-aura-pulse" />

              {/* Outer orbit ring */}
              <div className="absolute w-72 h-72 rounded-full border border-violet-500/10 animate-orbit-spin" style={{ animationDuration: '25s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full shadow-lg shadow-violet-500/50" />
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 bg-indigo-400 rounded-full shadow-lg shadow-indigo-400/50" />
              </div>

              {/* Middle orbit ring */}
              <div className="absolute w-52 h-52 rounded-full border border-purple-500/15 animate-orbit-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }}>
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-fuchsia-400 to-pink-500 rounded-full shadow-lg shadow-fuchsia-500/50" />
              </div>

              {/* Inner orbit ring */}
              <div className="absolute w-36 h-36 rounded-full border border-indigo-500/20 animate-orbit-spin" style={{ animationDuration: '12s' }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-violet-300 rounded-full shadow-lg shadow-violet-300/50" />
              </div>

              {/* Center core glow */}
              <div className="absolute w-28 h-28 rounded-full bg-gradient-to-br from-violet-500/40 to-purple-600/40 blur-xl animate-pulse-scale" />
              <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-violet-500/50 animate-glow">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
            <Zap className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-violet-300 font-medium">Why Loop?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to connect with the world, built with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group relative p-8 rounded-2xl border border-violet-500/10 hover:border-violet-500/30 bg-[#12122a]/60 hover:bg-[#12122a]/90 transition-all duration-500 cursor-pointer backdrop-blur-sm overflow-hidden ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-transparent to-purple-500/0 group-hover:from-violet-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-500" />

              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-violet-500/20 transition-all duration-500`}>
                  <feature.Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-violet-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-24">
        <div className="relative rounded-3xl overflow-hidden group">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-indigo-600/20 group-hover:opacity-40 transition-opacity duration-500 animate-gradient-shift" />
          <div className="absolute inset-0 bg-[#12122a]/70 backdrop-blur-xl" />
          <div className="absolute inset-0 border border-violet-500/20 rounded-3xl animate-border-glow" />

          {/* Content */}
          <div className="relative p-12 md:p-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8">
              <Rocket className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-violet-300 font-medium">Join the community</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-text-glow">Ready to connect?</h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Join millions sharing their stories and building meaningful connections every day
            </p>
            <Link
              href="/register"
              className="group inline-flex items-center gap-2 px-12 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/40 hover:scale-105 btn-glow"
            >
              Create Your Account
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-violet-500/10 py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-violet-400" />
            <span className="font-bold gradient-text">Loop</span>
          </div>
          <p className="text-sm text-gray-500">© 2026 Loop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
