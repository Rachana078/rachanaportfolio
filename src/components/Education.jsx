import SectionHeader from './SectionHeader'

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
      'Principles of Artificial Intelligence'
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="03 / Education"
          title="Education & Foundations"
          subtitle="Academic background and the CS concepts that shape how I think."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {degrees.map((item) => (
            <div key={item.degree + item.field} className="border border-zinc-800 rounded-lg p-8 bg-zinc-900/20">
              <p className="font-mono text-cyan-400 text-xs tracking-widest mb-5 uppercase">
                Degree
              </p>
              <h3 className="text-xl font-semibold text-zinc-100 mb-1">{item.degree}</h3>
              <p className="text-zinc-400 mb-1">{item.field}</p>
              <p className="font-mono text-zinc-600 text-xs mb-1">{item.university}</p>
              <p className="font-mono text-zinc-600 text-xs mb-1">{item.period}</p>
              {item.gpa && (
                <p className="font-mono text-zinc-500 text-xs mb-6">GPA &nbsp;·&nbsp; {item.gpa}</p>
              )}

              <div className={`border-t border-zinc-800 ${item.gpa ? '' : 'mt-6'} pt-5`}>
                <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-3">
                  Relevant Coursework
                </p>
                <ul className="space-y-2">
                  {item.coursework.map((course) => (
                    <li key={course} className="flex items-center gap-2 text-sm text-zinc-400">
                      <span className="w-1 h-1 rounded-full bg-zinc-700 shrink-0" />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
