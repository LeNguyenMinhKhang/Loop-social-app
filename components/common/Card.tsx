import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={`bg-[#12122a]/80 backdrop-blur-xl rounded-2xl border border-violet-500/10 shadow-lg ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  )
}
