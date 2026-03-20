import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'

const links = [
  { label: 'About', href: '#about', color: 'hover:bg-rose-100 hover:text-rose-500 dark:hover:bg-rose-950/40 dark:hover:text-rose-300' },
  { label: 'Projects', href: '#projects', color: 'hover:bg-violet-100 hover:text-violet-500 dark:hover:bg-violet-950/40 dark:hover:text-violet-300' },
  { label: 'Experience', href: '#experience', color: 'hover:bg-amber-100 hover:text-amber-500 dark:hover:bg-amber-950/40 dark:hover:text-amber-300' },
  { label: 'Education', href: '#education', color: 'hover:bg-blue-100 hover:text-blue-500 dark:hover:bg-blue-950/40 dark:hover:text-blue-300' },
  { label: 'Leadership', href: '#leadership', color: 'hover:bg-emerald-100 hover:text-emerald-500 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300' },
  { label: 'Skills', href: '#skills', color: 'hover:bg-violet-100 hover:text-violet-500 dark:hover:bg-violet-950/40 dark:hover:text-violet-300' },
  { label: 'Moments', href: '#gallery', color: 'hover:bg-pink-100 hover:text-pink-500 dark:hover:bg-pink-950/40 dark:hover:text-pink-300' },
  { label: 'Contact', href: '#contact', color: 'hover:bg-orange-100 hover:text-orange-500 dark:hover:bg-orange-950/40 dark:hover:text-orange-300' },
]

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.166 17.834a.75.75 0 00-1.06 1.06l1.59 1.591a.75.75 0 001.061-1.06l-1.59-1.591zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.166 6.166a.75.75 0 001.06 1.06l1.59-1.59a.75.75 0 00-1.061-1.06l-1.59 1.59z" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
    </svg>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fdf8f3]/95 dark:bg-zinc-950/95 backdrop-blur-sm border-b border-amber-100 dark:border-zinc-800 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#about" className="font-mono font-bold text-sm text-zinc-800 dark:text-zinc-100 tracking-wide">
          rachana.dev
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map(({ label, href, color }) => (
            <motion.a
              key={href}
              href={href}
              className={`text-zinc-500 dark:text-zinc-400 text-sm font-medium px-3 py-1.5 rounded-full transition-colors duration-150 ${color}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              {label}
            </motion.a>
          ))}

          {/* Theme toggle */}
          <motion.button
            onClick={toggle}
            className="ml-2 p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-stone-200 dark:hover:bg-zinc-800 transition-colors duration-150"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.15 }}
            aria-label="Toggle theme"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </motion.button>
        </div>
      </div>
    </nav>
  )
}
