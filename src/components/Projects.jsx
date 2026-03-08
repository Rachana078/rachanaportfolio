import SectionHeader from './SectionHeader'

const projects = [
  {
    number: '01',
    title: 'AI Art Studio',
    description:
      'A creative platform leveraging generative AI to empower artists and non-artists alike. Features real-time style transfer, an accessible prompt engineering UI, and inclusive controls designed for users of all skill levels.',
    tags: ['React', 'Generative AI', 'API Integration', 'Accessible UI'],
    highlights: [
      'User-centered AI interface with progressive disclosure',
      'Accessible design patterns — keyboard nav, ARIA labels',
      'Real-time generation with live feedback',
    ],
  },
  {
    number: '02',
    title: 'Smart Task Management Tool',
    description:
      'An intuitive productivity application with intelligent task prioritization, deadline tracking, and a distraction-free interface. Built with attention to user workflow, cognitive load, and long-term usability.',
    tags: ['React', 'Generative AI', 'Node.js', 'MongoDB'],
    highlights: [
      'Intelligent prioritization based on urgency & context',
      'Minimal UI designed to reduce cognitive overhead',
      'Offline-first — works without a connection',
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="01 / Work"
          title="Projects"
          subtitle="Applications built with a focus on usability, accessibility, and clean code."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group border border-zinc-800 rounded-lg p-8 hover:border-zinc-600 transition-all duration-300 bg-zinc-900/20 hover:bg-zinc-900/50"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-cyan-400/50 text-xs tracking-widest">
                  {project.number}
                </span>
                <span className="font-mono text-xs text-zinc-700 tracking-wider">
                  FEATURED PROJECT
                </span>
              </div>

              <h3 className="text-xl font-semibold text-zinc-100 mb-3 group-hover:text-white transition-colors">
                {project.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">{project.description}</p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-zinc-500">
                    <span className="text-cyan-400/50 mt-0.5 shrink-0">&#9658;</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-5 border-t border-zinc-800">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-1 bg-zinc-800/80 text-zinc-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
