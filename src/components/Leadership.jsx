import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import FadeUp from './FadeUp'

const roles = [
  {
    title: 'Governance Ambassador',
    context: 'Associated Students Inc.',
    period: 'Sep 2024 – Present',
    description:
      'Represent student interests in university governance, serving as a bridge between students, faculty, and administration to drive meaningful campus-wide impact.',
    contributions: [
      'Represent student interests by participating in governance meetings alongside faculty members and university executives, contributing to discussions on campus initiatives and policies.',
      'Serve on multiple university committees, helping improve student engagement and institutional collaboration.',
      'Act as a liaison between students, faculty, and administration, communicating student feedback and concerns.',
      'Support initiatives that promote student awareness and participation in campus governance.',
    ],
  },
]

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 border-t border-stone-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <SectionHeader
            label="04 / Leadership"
            title="Leadership & Volunteer"
            subtitle="Community impact through technical skill, mentorship, and collaboration."
            color="emerald"
          />
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((role, i) => (
            <FadeUp key={role.title} delay={i * 0.1}>
              <motion.div
                className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border-l-4 border-emerald-200 dark:border-emerald-800"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="font-mono text-xs px-2 py-1 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-400 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 rounded-lg">
                    {role.context}
                  </span>
                  <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">{role.period}</span>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-3">{role.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-5">{role.description}</p>

                <ul className="space-y-2">
                  {role.contributions.map((c) => (
                    <li key={c} className="flex gap-3 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      <span className="text-emerald-300 dark:text-emerald-600 shrink-0 mt-0.5">&#9658;</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
