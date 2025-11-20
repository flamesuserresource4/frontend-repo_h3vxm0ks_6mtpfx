import React from 'react'
import { motion } from 'framer-motion'
import { Wifi, Tv, Sun, Wind, Car, Home, Bath, Users, MapPin } from 'lucide-react'

const features = [
  { icon: Home, label: 'Kompletno opremljena kuhinja' },
  { icon: Wind, label: 'Klima i Wi-Fi' },
  { icon: Users, label: 'Dnevna i spavaća soba' },
  { icon: Tv, label: 'Smart TV' },
  { icon: Sun, label: 'Velika terasa' },
  { icon: Bath, label: 'Moderno kupatilo' },
  { icon: Car, label: 'Besplatan parking' },
  { icon: Users, label: 'Idealan za 2–4 osobe' },
  { icon: MapPin, label: '1 minut do plaže' },
]

const Features = () => {
  return (
    <section className="bg-[#f7f3ee]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900">Sadržaj i pogodnosti</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl bg-white p-6 border border-neutral-200 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-[#f1eadf] text-[#c7a86f] flex items-center justify-center shadow-sm">
                  <f.icon className="h-6 w-6" />
                </div>
                <p className="text-neutral-800">{f.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
