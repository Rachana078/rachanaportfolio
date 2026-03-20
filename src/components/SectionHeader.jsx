const colorMap = {
  rose: 'bg-rose-100 text-rose-400 dark:bg-rose-950/40 dark:text-rose-300',
  amber: 'bg-amber-100 text-amber-400 dark:bg-amber-950/40 dark:text-amber-300',
  blue: 'bg-blue-100 text-blue-400 dark:bg-blue-950/40 dark:text-blue-300',
  emerald: 'bg-emerald-100 text-emerald-400 dark:bg-emerald-950/40 dark:text-emerald-300',
  violet: 'bg-violet-100 text-violet-400 dark:bg-violet-950/40 dark:text-violet-300',
  orange: 'bg-orange-100 text-orange-400 dark:bg-orange-950/40 dark:text-orange-300',
  pink: 'bg-pink-100 text-pink-400 dark:bg-pink-950/40 dark:text-pink-300',
}

export default function SectionHeader({ label, title, subtitle, color = 'rose' }) {
  const pillClass = colorMap[color] || colorMap.rose

  return (
    <div className="mb-12">
      <span className={`inline-block font-mono text-xs font-semibold tracking-widest px-3 py-1.5 rounded-full mb-4 uppercase ${pillClass}`}>
        {label}
      </span>
      <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-100">{title}</h2>
      {subtitle && (
        <p className="text-zinc-500 dark:text-zinc-400 mt-3 text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
