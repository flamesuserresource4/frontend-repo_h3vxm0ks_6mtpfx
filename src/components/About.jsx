import React from 'react'
import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1505691723518-36a5ac3b2a59?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop',
]

const About = () => {
  return (
    <section id="about" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900">Dobrodošli u naš dom pored mora</h2>
            <p className="mt-6 text-neutral-700 leading-relaxed">
              Vila Djuric je smeštena u srcu Petrovca, u tihom i prijatnom komšiluku koji odiše mediteranskim šarmom. Naš apartman je potpuno opremljen, moderno uređen i savršen za porodice, parove i sve koji žele komfor, privatnost i blizinu plaže.
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Sve što vam je potrebno je na nekoliko koraka – plaža, šetalište, restorani, prodavnice i najlepše lokacije Petrovca. Ovde ćete se osećati kao kod kuće, uz mir koji pruža more i lagani ritam leta.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {images.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="aspect-[3/4] overflow-hidden rounded-2xl shadow-sm"
              >
                <img src={src} alt={`Lifestyle ${i + 1} – Vila Djuric Petrovac`} className="h-full w-full object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
