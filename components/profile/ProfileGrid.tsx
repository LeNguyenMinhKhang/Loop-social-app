export function ProfileGrid({ posts }: { posts?: any[] }) {
  return (
    <div className="grid grid-cols-3 gap-0.5 p-0.5">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className="aspect-square bg-[#12122a] hover:opacity-80 transition-all duration-200 cursor-pointer relative group overflow-hidden">
          <img src={`https://picsum.photos/seed/${i + 10}/400/400`} alt="Grid item" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-violet-500/0 group-hover:bg-violet-500/10 transition-colors duration-300" />
        </div>
      ))}
    </div>
  )
}
