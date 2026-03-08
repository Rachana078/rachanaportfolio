import SectionHeader from './SectionHeader'

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

const systemHighlights = [
  { label: 'Dell Systems', detail: 'OptiPlex · Latitude · Precision' },
  { label: 'OS Support', detail: 'Windows · macOS · Linux' },
  { label: 'Troubleshooting', detail: 'Hardware · Software · Network' },
  { label: 'Deployment', detail: 'Imaging · Config · Rollout' },
]

export default function TechExperience() {
  return (
    <section id="experience" className="py-24 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="02 / Experience"
          title="Technical Experience"
          subtitle="IT administration, hardware deployment, and systems support."
        />

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="border border-zinc-800 rounded-lg p-8 bg-zinc-900/20"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100">{exp.role}</h3>
                  <p className="text-zinc-500 text-sm mt-1 font-mono">{exp.org}</p>
                </div>
                <div className="text-right flex flex-col items-end gap-2">
                  <span className="font-mono text-xs px-2 py-1 border border-cyan-400/30 text-cyan-400 rounded">
                    {exp.type}
                  </span>
                  <span className="font-mono text-xs text-zinc-600">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                    <span className="text-cyan-400/50 mt-1 shrink-0">&#9658;</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* System capability grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {systemHighlights.map(({ label, detail }) => (
              <div
                key={label}
                className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/20"
              >
                <p className="text-zinc-200 text-sm font-medium mb-1">{label}</p>
                <p className="font-mono text-zinc-600 text-xs leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
