import React from 'react'
import { motion } from 'framer-motion'

const gallery = [
  'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505691723518-36a5ac3b2a59?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=1600&auto=format&fit=crop',
]

const Gallery = () => {
  return (
    <section id="gallery" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900">Galerija</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="aspect-[4/3] overflow-hidden rounded-2xl shadow-sm"
            >
              <img src={src} alt="Vila Djuric" className="h-full w-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
