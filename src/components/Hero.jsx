import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center relative overflow-hidden">
      <motion.div
        className="absolute top-10 right-10 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-60 pointer-events-none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute bottom-10 left-0 w-80 h-80 bg-amber-100 dark:bg-amber-900/20 rounded-full blur-3xl opacity-50 pointer-events-none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
      />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-100 dark:bg-pink-900/10 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-32 relative">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="max-w-3xl">
            <motion.div {...fadeUp(0.1)}>
              <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-400 dark:text-purple-300 text-xs font-mono font-semibold px-3 py-1.5 rounded-full mb-6 tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-purple-300 dark:bg-purple-500 animate-pulse" />
                Open to opportunities
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-zinc-100 mb-6 leading-tight tracking-tight"
              {...fadeUp(0.2)}
            >
              Hey, I'm Rachana
            </motion.h1>

            <motion.div {...fadeUp(0.3)}>
              <div className="w-16 h-1.5 bg-purple-200 dark:bg-purple-700 rounded-full mb-8" />
            </motion.div>

            <motion.p
              className="text-zinc-600 dark:text-zinc-300 text-lg md:text-xl leading-relaxed mb-4 max-w-2xl"
              {...fadeUp(0.35)}
            >
              I am a{' '}
              <span className="text-zinc-900 dark:text-zinc-100 font-semibold">Software Engineer</span> with over 3+
              years of experience building scalable microservices and distributed systems. At
              Capgemini, I optimized high-volume services using Java and Spring Boot, improving
              response times by 30%. Currently, I am pursuing my MS in Computer Science at CSU
              Fullerton while serving as an IT Assistant, supporting 400+ users and automating
              workflows with Bash scripting. I bridge the gap between complex backend architecture
              and intuitive, accessible user experiences.
            </motion.p>

            <motion.p
              className="text-zinc-400 dark:text-zinc-500 text-base leading-relaxed mb-10 max-w-xl"
              {...fadeUp(0.4)}
            >
              I geek out over clean architecture, obsess over API design, and get genuinely
              excited when a complex system finally clicks. From distributed backends to
              interactive UIs. I love building things end-to-end, and building them well.
            </motion.p>

            <motion.div className="flex gap-4 flex-wrap" {...fadeUp(0.45)}>
              <a
                href="#projects"
                className="px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold text-sm rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#skills"
                className="px-6 py-3 border-2 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 text-sm font-medium rounded-full hover:border-zinc-500 dark:hover:border-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                Skills &amp; Stack
              </a>
            </motion.div>
          </div>

          <motion.div
            className="shrink-0 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-full bg-purple-100 dark:bg-purple-900/40" />
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl relative">
              <img
                src="/Rachana_Image.jpg"
                alt="Rachana"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
