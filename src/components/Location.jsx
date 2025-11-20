import React from 'react'
import { motion } from 'framer-motion'

const Location = () => {
  return (
    <section id="location" className="bg-[#f7f3ee]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900">Lokacija – Petrovac na moru</h2>
        <p className="mt-3 text-neutral-600">“Mirno primorsko mesto, savršeno za letnji odmor.”</p>

        <div className="mt-10 grid md:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
            <div className="aspect-[16/10] w-full bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
            <div className="p-4 text-sm text-neutral-600">
              Map placeholder • Ugradite Google Mapu ovde
            </div>
          </div>
          <div>
            <p className="text-neutral-700 leading-relaxed">
              “Vila se nalazi pored glavne šetnice i plaže, sa lakim pristupom restoranima, prodavnicama i lokalnim atrakcijama.”
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
