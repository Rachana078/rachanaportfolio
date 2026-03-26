import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import FadeUp from './FadeUp'

const experiences = [
  {
    role: 'Information Technology Assistant',
    org: 'Associated Students Inc., CSUF',
    period: 'Ongoing',
    type: 'IT / Systems',
    bullets: [
      'Built internal web tools and automated workflows to streamline IT operations, applying development principles to reduce manual administrative tasks.',
      'Automated system support tasks using Bash scripting, improving IT service efficiency and reducing ticket turnaround time.',
      'Provided technical support for 400+ users, troubleshooting issues across operating systems, enterprise software, and web-based platforms.',
      'Managed user access, authentication, and network configurations, ensuring secure and reliable system usage across departments.',
      'Diagnosed and resolved application-level and system-level issues, strengthening debugging and production support experience.',
    ],
  },
  {
    role: 'Software Engineer I',
    org: 'Capgemini',
    period: 'June 2022 – July 2024',
    type: 'Developer',
    bullets: [
      'Architected and developed cloud-ready microservices using Java, Spring Boot, and REST APIs to support scalable enterprise applications.',
      'Engineered high-performance backend services, reducing API response times by 30% through optimized service logic and efficient data handling.',
      'Implemented Kafka-based event-driven workflows to handle large-scale data migration and asynchronous processing across distributed systems.',
      'Contributed to full stack feature development, integrating backend APIs with frontend components to deliver end-to-end functionality.',
      'Led sprint planning and technical discussions while mentoring teammates and ensuring Agile development best practices.',
      'Performed code reviews and architectural improvements, strengthening application reliability and maintainability.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    org: 'Capgemini',
    period: 'Feb 2022 – May 2022',
    type: 'Intern',
    bullets: [
      'Developed a full stack Airline Ticket Booking System, implementing backend APIs and frontend interfaces to enable seamless flight search, booking, and ticket management.',
      'Designed and built RESTful APIs to handle booking workflows, user data, and real-time flight information, ensuring secure and efficient data processing.',
      'Implemented backend business logic and database integration to support booking transactions and maintain system reliability.',
      'Built responsive frontend UI components to enhance usability, navigation flow, and overall user experience.',
      'Collaborated with developers to integrate frontend interfaces with backend services, delivering end-to-end application functionality.',
      'Contributed to CI/CD pipelines and automated testing, improving build stability and reducing integration errors during deployment.',
      'Participated in code reviews and Agile development processes, gaining experience in collaborative software engineering practices.',
    ],
  },
]

export default function TechExperience() {
  return (
    <section id="experience" className="py-24 border-t border-stone-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <SectionHeader
            label="02 / Experience"
            title="Technical Experience"
            subtitle="Building scalable systems, shipping features, and solving real problems with code."
            color="amber"
          />
        </FadeUp>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <FadeUp key={exp.role} delay={i * 0.1}>
              <motion.div
                className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-stone-100 dark:border-zinc-800"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{exp.role}</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1 font-mono">{exp.org}</p>
                  </div>
                  <div className="text-right flex flex-col items-end gap-2">
                    <span className="font-mono text-xs px-2 py-1 bg-stone-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-md">
                      {exp.type}
                    </span>
                    <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      <span className="text-zinc-300 dark:text-zinc-600 mt-1 shrink-0">&#9658;</span>
                      {b}
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
