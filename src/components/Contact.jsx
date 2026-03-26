import { motion } from 'framer-motion'
import FadeUp from './FadeUp'

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-stone-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <FadeUp>
          <span className="inline-block font-mono text-xs font-semibold tracking-widest px-3 py-1.5 rounded-full mb-4 uppercase bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900">
            06 / Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-100 mb-4">Let's Connect</h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-base max-w-md mx-auto mb-10 leading-relaxed">
            Have an opportunity, question, or just want to say hi? My inbox is always open.
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <motion.a
            href="mailto:rachanap782@gmail.com"
            className="inline-block font-mono text-sm font-semibold px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full mb-6"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.2 }}
          >
            rachanap782@gmail.com
          </motion.a>

          <div className="flex items-center justify-center gap-4 mt-2">
            <motion.a
              href="https://www.linkedin.com/in/rachana-p-07/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm px-6 py-3 border-2 border-stone-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 rounded-full hover:border-zinc-500 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/Rachana078"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm px-6 py-3 border-2 border-stone-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 rounded-full hover:border-zinc-500 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
            >
              GitHub
            </motion.a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
