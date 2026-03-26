import { ThemeProvider } from './ThemeContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import TechExperience from './components/TechExperience'
import Education from './components/Education'
import Leadership from './components/Leadership'
import Gallery from './components/Gallery'
import SkillsMatrix from './components/SkillsMatrix'
import Contact from './components/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <div className="bg-[#fdf8f3] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen font-sans transition-colors duration-300">
        <Nav />
        <main>
          <Hero />
          <Projects />
          <TechExperience />
          <Education />
          <Leadership />
          <SkillsMatrix />
          <Gallery />
          <Contact />
        </main>
        <footer className="border-t border-stone-200 dark:border-zinc-800 py-10 text-center">
          <p className="font-mono text-stone-400 dark:text-zinc-600 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Rachana
          </p>
        </footer>
      </div>
    </ThemeProvider>
  )
}
