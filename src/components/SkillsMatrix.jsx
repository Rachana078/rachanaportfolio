import SectionHeader from './SectionHeader'
import FadeUp from './FadeUp'

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
    <section id="skills" className="py-24 border-t border-stone-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <SectionHeader
            label="05 / Skills"
            title="Technical Skills"
            subtitle="My technical toolkit, organized by domain."
            color="violet"
          />
        </FadeUp>

        <div className="space-y-6">
          {categories.map((cat, i) => (
            <FadeUp key={cat.label} delay={i * 0.1}>
              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-stone-100 dark:border-zinc-800">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-widest mb-4 text-zinc-400 dark:text-zinc-500">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-sm px-3 py-1.5 rounded-xl cursor-default bg-stone-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-stone-200 dark:border-zinc-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
