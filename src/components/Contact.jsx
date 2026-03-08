
export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-mono text-cyan-400 text-xs tracking-widest uppercase mb-4">
          06 / Contact
        </p>
        <h2 className="text-3xl font-semibold text-zinc-100 mb-4">Let's Connect</h2>
        <p className="text-zinc-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
          Have an opportunity, question, or just want to say hi? My inbox is always open.
        </p>
        <a
          href="mailto:rachanap782@gmail.com"
          className="inline-block font-mono text-sm px-6 py-3 border border-cyan-400/50 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors duration-200"
        >
          rachanap782@gmail.com
        </a>

        <div className="flex items-center justify-center gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/rachana-p-07/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm px-6 py-3 border border-zinc-700 text-zinc-400 rounded hover:border-zinc-500 hover:text-zinc-200 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Rachana078"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm px-6 py-3 border border-zinc-700 text-zinc-400 rounded hover:border-zinc-500 hover:text-zinc-200 transition-colors duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
