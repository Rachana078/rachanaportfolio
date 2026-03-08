import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import TechExperience from './components/TechExperience'
import Education from './components/Education'
import Leadership from './components/Leadership'
import SkillsMatrix from './components/SkillsMatrix'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <TechExperience />
        <Education />
        <Leadership />
        <SkillsMatrix />
        <Contact />
      </main>
      <footer className="border-t border-zinc-800 py-10 text-center">
        <p className="font-mono text-zinc-600 text-xs tracking-wider">
          &copy; {new Date().getFullYear()} Rachana &mdash; Built with React &amp; Tailwind CSS
        </p>
      </footer>
    </div>
  )
}
