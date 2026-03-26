import FadeUp from './FadeUp'

const photos = [
  { src: '/gallery/IMG_8673.JPG', caption: 'Hackathon', position: '50% 70%' },
  { src: '/gallery/IMG_8693.JPG', caption: 'Hackathon' },
  { src: '/gallery/IMG_5855.jpg', caption: 'Campus Life' },
  { src: '/gallery/IMG_5856.jpg', caption: 'Campus Life' },
  { src: '/gallery/photo-output 2.png', caption: 'Governance Ambassador' },
]

const placeholderColors = ['from-stone-200 to-stone-100']

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 border-t border-stone-200 dark:border-zinc-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <FadeUp>
          <span className="inline-block font-mono text-xs font-semibold tracking-widest px-3 py-1.5 rounded-full mb-4 uppercase bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900">
            Moments
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-100">Life in Frames</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-3 text-base md:text-lg max-w-2xl leading-relaxed">
            Snapshots from hackathons, campus, and everything in between.
          </p>
        </FadeUp>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#fdf8f3] dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#fdf8f3] dark:from-zinc-950 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 animate-marquee w-max cursor-pointer">
          {[...photos, ...photos].map((photo, i) => (
            <div
              key={i}
              className="relative w-64 h-52 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${placeholderColors[i % placeholderColors.length]}`} />
              <img
                src={photo.src}
                alt={photo.caption}
                className="absolute inset-0 w-full h-full object-cover"
                style={photo.position ? { objectPosition: photo.position } : undefined}
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent px-4 py-3">
                <p className="text-white text-xs font-semibold tracking-wide drop-shadow">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
