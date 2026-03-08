import SectionHeader from './SectionHeader'

const categories = [
  {
    label: 'Programming & Web Technologies',
    skills: ['Java', 'Python', 'JavaScript', 'React.js', 'Spring Boot', 'HTML', 'CSS', 'Node.js', 'Flutter', 'Generative AI'],
  },
  {
    label: 'Databases & Cloud',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Azure', 'Google Cloud Platform', 'AWS'],
  },
  {
    label: 'Tools',
    skills: ['Kafka', 'Git', 'Bash', 'REST APIs', 'Agile', 'Jira', 'Postman', 'Swagger', 'JUnit', 'Maven', 'Gradle', 'Docker', 'Kubernetes'],
  },
]

export default function SkillsMatrix() {
  return (
    <section id="skills" className="py-24 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="05 / Skills"
          title="Technicle Skills"
          subtitle="My technical toolkit, organized by domain."
        />

        <div className="space-y-8">
          {categories.map((cat) => (
            <div key={cat.label} className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/20">
              <h3 className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-sm text-zinc-300 px-3 py-1.5 border border-zinc-700 rounded bg-zinc-900 hover:border-zinc-500 transition-colors duration-200"
                  >
                    {skill}
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
