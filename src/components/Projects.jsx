import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import FadeUp from './FadeUp'

const projects = [
  {
    number: '01',
    title: 'Looply',
    url: 'https://looply.rachanap.com/',
    color: 'rose',
    description:
      'A full-stack Jira-inspired project management app with real-time collaboration, role-based access control, and a rich commenting system with @mentions and notifications.',
    tags: ['React 18', 'TypeScript', 'Spring Boot 3', 'Java 21', 'PostgreSQL', 'WebSockets', 'JWT', 'Docker', 'Flyway', 'Supabase'],
    highlights: [
      'JWT auth with access token + HTTP-only refresh token cookie rotation and email verification via Resend',
      'Real-time Kanban boards and comments using WebSockets (STOMP), changes appear instantly without page refresh',
      'Role-based access control with Owner, Admin, and Member roles across workspaces and projects',
      '@mention system in comments with dropdown autocomplete, triggering in-app and email notifications',
      'Automatic ticket history tracking, every field change logged with timestamp and author',
      'Schema evolution managed with Flyway across 10 versioned SQL migration scripts',
      'Deployed backend on Render (Docker), frontend on custom domain, database on Supabase',
    ],
  },
  {
    number: '02',
    title: 'StudyPack',
    url: 'https://studypack-brown.vercel.app/',
    color: 'violet',
    description:
      'An AI-powered study tool that converts PDF/DOCX files into flashcards and quizzes. Features spaced repetition scheduling, an AI chat grounded in uploaded material, daily streaks, and public shareable study sets.',
    tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'Supabase', 'Groq API', 'Vercel'],
    highlights: [
      'Converts PDF/DOCX to flashcards & quizzes using Groq LLaMA 3.3 70B',
      'Spaced repetition (SM-2 algorithm) based on user performance',
      'AI chat grounded in uploaded content, no hallucinations outside material',
      'Three-theme UI (pink, light, dark) with hydration-safe switching',
      'PDF export, public shareable links, and daily study streak tracking',
    ],
  },
  {
    number: '03',
    title: 'AI Art Studio',
    url: null,
    color: 'amber',
    description:
      'A creative platform leveraging generative AI to empower artists and non-artists alike. Features real-time style transfer, an accessible prompt engineering UI, and inclusive controls designed for users of all skill levels.',
    tags: ['React', 'Generative AI', 'API Integration', 'Accessible UI'],
    highlights: [
      'User-centered AI interface with progressive disclosure',
      'Accessible design patterns, keyboard nav, ARIA labels',
      'Real-time generation with live feedback',
    ],
  },
  {
    number: '04',
    title: 'Smart Task Management Tool',
    url: null,
    color: 'emerald',
    description:
      'An intuitive productivity application with intelligent task prioritization, deadline tracking, and a distraction-free interface. Built with attention to user workflow, cognitive load, and long-term usability.',
    tags: ['React', 'Generative AI', 'Node.js', 'MongoDB'],
    highlights: [
      'Intelligent prioritization based on urgency & context',
      'Minimal UI designed to reduce cognitive overhead',
      'Offline-first, works without a connection',
    ],
  },
]

const styles = {
  rose: {
    border: 'border-t-4 border-rose-200 dark:border-rose-800',
    num: 'text-rose-400 bg-rose-50 dark:bg-rose-950/30 dark:text-rose-300',
    tag: 'bg-rose-50 text-rose-400 border border-rose-200 dark:bg-rose-950/30 dark:text-rose-300 dark:border-rose-800',
    bullet: 'text-rose-300 dark:text-rose-600',
    link: 'text-rose-400 hover:text-rose-300 dark:text-rose-400 dark:hover:text-rose-300',
  },
  violet: {
    border: 'border-t-4 border-violet-200 dark:border-violet-800',
    num: 'text-violet-400 bg-violet-50 dark:bg-violet-950/30 dark:text-violet-300',
    tag: 'bg-violet-50 text-violet-400 border border-violet-200 dark:bg-violet-950/30 dark:text-violet-300 dark:border-violet-800',
    bullet: 'text-violet-300 dark:text-violet-600',
    link: 'text-violet-400 hover:text-violet-300 dark:text-violet-400 dark:hover:text-violet-300',
  },
  amber: {
    border: 'border-t-4 border-amber-200 dark:border-amber-800',
    num: 'text-amber-400 bg-amber-50 dark:bg-amber-950/30 dark:text-amber-300',
    tag: 'bg-amber-50 text-amber-500 border border-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-800',
    bullet: 'text-amber-300 dark:text-amber-600',
    link: 'text-amber-400 hover:text-amber-300 dark:text-amber-400 dark:hover:text-amber-300',
  },
  emerald: {
    border: 'border-t-4 border-emerald-200 dark:border-emerald-800',
    num: 'text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 dark:text-emerald-300',
    tag: 'bg-emerald-50 text-emerald-500 border border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-800',
    bullet: 'text-emerald-300 dark:text-emerald-600',
    link: 'text-emerald-400 hover:text-emerald-300 dark:text-emerald-400 dark:hover:text-emerald-300',
  },
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-stone-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <SectionHeader
            label="01 / Work"
            title="Projects"
            subtitle="Applications built with a focus on usability, accessibility, and clean code."
            color="rose"
          />
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeUp key={project.title} delay={i * 0.1}>
              <motion.div
                className={`group bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm ${styles[project.color].border}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className={`font-mono font-bold text-xs tracking-widest px-2 py-1 rounded-lg ${styles[project.color].num}`}>
                    {project.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">{project.description}</p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                      <span className={`mt-0.5 shrink-0 ${styles[project.color].bullet}`}>&#9658;</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-5 border-t border-stone-100 dark:border-zinc-800">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`font-mono text-xs px-2 py-1 rounded-lg ${styles[project.color].tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {project.url && (
                  <div className="mt-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 font-mono text-xs font-semibold transition-colors ${styles[project.color].link}`}
                    >
                      View Live
                      <span>&#8599;</span>
                    </a>
                  </div>
                )}
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
