export default function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-cyan-400 text-xs tracking-widest mb-3 uppercase">{label}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">{title}</h2>
      {subtitle && (
        <p className="text-zinc-400 mt-3 text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
