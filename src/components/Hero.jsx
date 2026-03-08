export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-32 relative">
        <div className="max-w-3xl">
          <p className="font-mono text-cyan-400 text-xs tracking-widest mb-6 uppercase">
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-zinc-100 mb-6 leading-none tracking-tight">
            Hey, I'm Rachana
          </h1>

          <div className="w-16 h-px bg-cyan-400 mb-8" />

          <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-4 max-w-2xl">
            I am a{' '}
            <span className="text-zinc-100 font-medium">Software Engineer</span> with over 3+ years of experience building scalable microservices and distributed systems. At Capgemini, I optimized high-volume services using Java and Spring Boot, improving response times by 30%.
            Currently, I am pursuing my MS in Computer Science at CSU Fullerton while serving as an IT Assistant, supporting 400+ users and automating workflows with Bash scripting. I bridge the gap between complex backend architecture and intuitive, accessible user experiences.
          </p>

          <p className="text-zinc-500 text-base leading-relaxed mb-10 max-w-xl">
            Rooted in computer science fundamentals, experienced in IT administration, and
            passionate about building software that genuinely helps people.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-400 text-zinc-950 font-semibold text-sm rounded hover:bg-cyan-300 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#skills"
              className="px-6 py-3 border border-zinc-700 text-zinc-300 text-sm rounded hover:border-zinc-500 hover:text-zinc-100 transition-colors"
            >
              Skills &amp; Stack
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
