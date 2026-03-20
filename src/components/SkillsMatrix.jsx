import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import FadeUp from './FadeUp'

const categories = [
  {
    label: 'Programming & Web Technologies',
    skills: ['Java', 'Python', 'JavaScript', 'React.js', 'Spring Boot', 'HTML', 'CSS', 'Node.js', 'Flutter', 'Generative AI'],
    header: 'text-violet-400 dark:text-violet-400',
    tagClass: 'bg-violet-50 text-violet-400 border border-violet-200 dark:bg-violet-950/30 dark:text-violet-300 dark:border-violet-800',
  },
  {
    label: 'Databases & Cloud',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Azure', 'Google Cloud Platform', 'AWS'],
    header: 'text-blue-400 dark:text-blue-400',
    tagClass: 'bg-blue-50 text-blue-400 border border-blue-200 dark:bg-blue-950/30 dark:text-blue-300 dark:border-blue-800',
  },
  {
    label: 'Tools',
    skills: ['Kafka', 'Git', 'Bash', 'REST APIs', 'Agile', 'Jira', 'Postman', 'Swagger', 'JUnit', 'Maven', 'Gradle', 'Docker', 'Kubernetes'],
    header: 'text-amber-400 dark:text-amber-400',
    tagClass: 'bg-amber-50 text-amber-400 border border-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-800',
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
                <h3 className={`font-mono text-xs font-semibold uppercase tracking-widest mb-4 ${cat.header}`}>
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      className={`font-mono text-sm px-3 py-1.5 rounded-xl cursor-default ${cat.tagClass}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 + j * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
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
