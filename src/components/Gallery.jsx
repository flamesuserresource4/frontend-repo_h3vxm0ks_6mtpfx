import React from 'react'
import { motion } from 'framer-motion'

const gallery = [
  'https://images.unsplash.com/photo-1505691723518-36a5ac3b2a59?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1600&auto=format&fit=crop',
]

const Gallery = () => {
  return (
    <section id="gallery" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900">Galerija</h2>
            <p className="mt-2 text-neutral-600">Zavirite u naš prostor</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group aspect-[4/3] overflow-hidden rounded-2xl shadow-sm"
            >
              <img
                src={src}
                alt={`Galerija ${i + 1} – Vila Djuric Petrovac`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
