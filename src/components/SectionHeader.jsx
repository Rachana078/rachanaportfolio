export default function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="mb-12">
      <span className="inline-block font-mono text-xs font-semibold tracking-widest px-3 py-1.5 rounded-full mb-4 uppercase bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900">
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
