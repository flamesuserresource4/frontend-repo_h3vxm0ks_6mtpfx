import React from 'react'
import { motion } from 'framer-motion'
import { Utensils, Wind, Wifi, BedDouble, Tv, Sun, Bath, Car, Users, MapPin, ShoppingBag } from 'lucide-react'

const items = [
  { icon: Utensils, label: 'Potpuno opremljena kuhinja' },
  { icon: Wind, label: 'Klimatizacija' },
  { icon: Wifi, label: 'Brzi Wi‑Fi' },
  { icon: BedDouble, label: 'Dnevna + spavaća soba' },
  { icon: Tv, label: 'Smart TV' },
  { icon: Sun, label: 'Velika terasa' },
  { icon: Bath, label: 'Moderno kupatilo' },
  { icon: Car, label: 'Besplatan parking' },
  { icon: Users, label: 'Idealno za 2–4 osobe' },
  { icon: MapPin, label: '1 minut do plaže' },
  { icon: ShoppingBag, label: 'Sve na dohvat ruke' },
  { icon: MapPin, label: 'Miran kraj' },
]

const Features = () => {
  return (
    <section id="features" className="bg-[#f7f3ee]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900">Šta nudimo</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group rounded-2xl bg-white p-6 border border-neutral-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-[#f1eadf] text-[#c7a86f] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
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
