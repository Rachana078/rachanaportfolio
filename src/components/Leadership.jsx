import SectionHeader from './SectionHeader'

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
    <section id="leadership" className="py-24 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="04 / Leadership"
          title="Leadership & Volunteer"
          subtitle="Community impact through technical skill, mentorship, and collaboration."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((role) => (
            <div
              key={role.title}
              className="border border-zinc-800 rounded-lg p-8 bg-zinc-900/20 hover:border-zinc-600 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="font-mono text-xs px-2 py-1 border border-zinc-700 text-zinc-400 rounded">
                  {role.context}
                </span>
                <span className="font-mono text-xs text-zinc-600">{role.period}</span>
              </div>

              <h3 className="text-lg font-semibold text-zinc-100 mb-3">{role.title}</h3>

              <p className="text-zinc-400 text-sm leading-relaxed mb-5">{role.description}</p>

              <ul className="space-y-2">
                {role.contributions.map((c) => (
                  <li key={c} className="flex gap-3 text-xs text-zinc-500 leading-relaxed">
                    <span className="text-cyan-400/40 shrink-0 mt-0.5">&#9658;</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
