'use client'

import { Image as ImageIcon, Smile, MapPin, Sparkles } from 'lucide-react'
import { useState } from 'react'

export function ComposePost() {
  const [text, setText] = useState('')

  return (
    <div className="px-5 py-4 border-b border-violet-500/10">
      <div className="flex gap-3.5">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex-shrink-0 overflow-hidden ring-2 ring-violet-500/20 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full bg-transparent text-lg text-white placeholder:text-gray-600 outline-none resize-none min-h-[80px] py-2"
          />
          <div className="flex justify-between items-center border-t border-violet-500/10 pt-3 mt-2">
            <div className="flex gap-1 text-violet-400">
              <button className="p-2.5 hover:bg-violet-400/10 rounded-xl transition-colors">
                <ImageIcon size={20} />
              </button>
              <button className="p-2.5 hover:bg-violet-400/10 rounded-xl transition-colors">
                <Smile size={20} />
              </button>
              <button className="p-2.5 hover:bg-violet-400/10 rounded-xl transition-colors">
                <MapPin size={20} />
              </button>
            </div>
            <button
              disabled={!text.trim()}
              className="bg-gradient-to-r from-violet-600 to-purple-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105 btn-glow disabled:hover:scale-100 disabled:hover:shadow-none"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
