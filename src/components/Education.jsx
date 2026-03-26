import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import FadeUp from './FadeUp'

const degrees = [
  {
    degree: 'Master of Science',
    field: 'Computer Science',
    university: 'California State University Fullerton',
    period: 'Aug 2024 – Present',
    gpa: '3.95 / 4.0',
    coursework: [
      'Advanced Algorithms',
      'Software Architecture',
      'Adv. Blockchain Technologies',
      'Advanced Computer Networking',
    ],
  },
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science Engineering',
    university: 'Presidency University – Bangalore',
    period: 'Aug 2018 – June 2022',
    gpa: null,
    coursework: [
      'Database Management System',
      'Object Oriented Programming',
      'Analysis of Algorithms',
      'Operating Systems',
      'Principles of Artificial Intelligence',
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-stone-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <SectionHeader
            label="03 / Education"
            title="Education"
            subtitle="Academic background and the CS concepts that shape how I think."
            color="blue"
          />
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-6">
          {degrees.map((item, i) => (
            <FadeUp key={item.degree + item.field} delay={i * 0.1}>
              <motion.div
                className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-stone-100 dark:border-zinc-800"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <span className="inline-block font-mono text-xs font-semibold px-2 py-1 bg-stone-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-md mb-5 uppercase tracking-widest">
                  Degree
                </span>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">{item.degree}</h3>
                <p className="text-zinc-600 dark:text-zinc-300 mb-1">{item.field}</p>
                <p className="font-mono text-zinc-400 dark:text-zinc-500 text-xs mb-1">{item.university}</p>
                <p className="font-mono text-zinc-400 dark:text-zinc-500 text-xs mb-1">{item.period}</p>
                {item.gpa && (
                  <p className="font-mono text-zinc-500 dark:text-zinc-400 text-xs font-semibold mb-6">
                    GPA &nbsp;·&nbsp; {item.gpa}
                  </p>
                )}

                <div className={`border-t border-stone-100 dark:border-zinc-800 ${item.gpa ? '' : 'mt-6'} pt-5`}>
                  <p className="text-zinc-400 dark:text-zinc-500 text-xs font-mono uppercase tracking-widest mb-3">
                    Relevant Coursework
                  </p>
                  <ul className="space-y-2">
                    {item.coursework.map((course) => (
                      <li key={course} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-zinc-600 shrink-0" />
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
