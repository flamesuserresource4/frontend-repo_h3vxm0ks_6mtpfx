import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-[#f7f3ee]">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient + tint overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-[#f7f3ee]/70 to-[#f7f3ee] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-8 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-sm px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#c7a86f]" />
            <span className="text-sm text-neutral-600">Petrovac, Montenegro</span>
          </div>
          <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl leading-tight text-neutral-900">
            Vila Djuric – Petrovac
          </h1>
          <p className="mt-4 text-neutral-700 text-lg">
            Vaš savršen odmor na obali Crne Gore
          </p>
          <p className="mt-4 text-neutral-600">
            “Uživajte u modernom, potpuno opremljenom apartmanu u srcu Petrovca, na samo minut od mora.”
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#c7a86f] text-white px-6 py-3 shadow hover:shadow-md transition-shadow">
              Check Availability
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-[#c7a86f]/40 text-neutral-800 hover:bg-white px-6 py-3">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
