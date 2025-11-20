import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, 80])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.85])

  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-[#f7f3ee]">
      {/* Background image with subtle parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')",
          }}
        />
      </motion.div>

      {/* Soft gradient + tint overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#0b2545]/10 to-[#f7f3ee]/80 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#f7f3ee]/40 to-transparent" />

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
            <span className="text-sm text-neutral-700">Petrovac, Montenegro</span>
          </div>
          <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl leading-tight text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
            Vila Djuric – Petrovac
          </h1>
          <p className="mt-3 text-white/90 text-lg">
            Vaš savršen odmor na obali Crne Gore
          </p>
          <p className="mt-4 text-white/90 max-w-xl">
            Moderan apartman na samo minut od plaže, idealan za miran i prijatan letnji boravak.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#c7a86f] text-white px-6 py-3 shadow transition-all hover:shadow-md hover:-translate-y-0.5">
              Check Availability
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/70 text-white hover:bg-white/10 px-6 py-3 transition-all">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
