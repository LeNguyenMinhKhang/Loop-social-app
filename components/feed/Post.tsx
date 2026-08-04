'use client'

import { MessageCircle, Heart, Share2, Repeat2 } from 'lucide-react'
import { useState } from 'react'

export function Post({ post }: { post: any }) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)

  function handleLike() {
    setLiked(!liked)
    setLikeCount(liked ? likeCount - 1 : likeCount + 1)
  }

  return (
    <article className="px-5 py-4 hover:bg-violet-500/[0.03] transition-colors duration-200 border-b border-violet-500/10 last:border-b-0">
      <div className="flex gap-3.5">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-600/20 overflow-hidden flex-shrink-0 ring-2 ring-violet-500/10">
          <img src={post.author.avatar} alt={post.author.name} className="object-cover w-full h-full" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-white text-[15px] truncate">{post.author.name}</h4>
            <span className="text-violet-400/60 text-sm truncate">@{post.author.username}</span>
            <span className="text-gray-600 text-xs flex-shrink-0">· {new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
          <p className="mt-2 text-gray-200 text-[15px] leading-relaxed">{post.content}</p>
          <div className="mt-4 flex items-center gap-1 text-gray-500 max-w-md">
            <button className="flex items-center gap-1.5 hover:text-violet-400 transition-colors group">
              <div className="p-2 rounded-full group-hover:bg-violet-400/10 transition-colors">
                <MessageCircle size={18} />
              </div>
              <span className="text-xs">{post.comments}</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors group ml-4">
              <div className="p-2 rounded-full group-hover:bg-emerald-400/10 transition-colors">
                <Repeat2 size={18} />
              </div>
              <span className="text-xs">0</span>
            </button>
            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 transition-colors group ml-4 ${liked ? 'text-pink-500' : 'hover:text-pink-500'}`}
            >
              <div className={`p-2 rounded-full transition-colors ${liked ? 'bg-pink-500/10' : 'group-hover:bg-pink-500/10'}`}>
                <Heart size={18} fill={liked ? 'currentColor' : 'none'} />
              </div>
              <span className="text-xs">{likeCount}</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-violet-400 transition-colors group ml-4">
              <div className="p-2 rounded-full group-hover:bg-violet-400/10 transition-colors">
                <Share2 size={18} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
