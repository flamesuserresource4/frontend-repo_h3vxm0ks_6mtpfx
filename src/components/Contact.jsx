import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900">Kontakt i rezervacije</h2>
            <p className="mt-2 text-neutral-700">Pošaljite upit i brzo ćemo odgovoriti</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-neutral-700">
                <div className="h-10 w-10 rounded-full bg-[#f1eadf] text-[#c7a86f] flex items-center justify-center"><MessageCircle className="h-5 w-5" /></div>
                <span>WhatsApp: +382 68 xxx xxx</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-700">
                <div className="h-10 w-10 rounded-full bg-[#f1eadf] text-[#c7a86f] flex items-center justify-center"><Phone className="h-5 w-5" /></div>
                <span>Telefon: +382 68 xxx xxx</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-700">
                <div className="h-10 w-10 rounded-full bg-[#f1eadf] text-[#c7a86f] flex items-center justify-center"><Mail className="h-5 w-5" /></div>
                <span>Email: viladjuricpetrovac@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-neutral-200 bg-[#f7f3ee] p-6 shadow-sm">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="text-sm text-neutral-600">Ime</label>
                  <input type="text" className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c7a86f]/40" placeholder="Vaše ime" />
                </div>
                <div>
                  <label className="text-sm text-neutral-600">Email</label>
                  <input type="email" className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c7a86f]/40" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="text-sm text-neutral-600">Poruka</label>
                  <textarea rows="5" className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c7a86f]/40" placeholder="Napišite poruku" />
                </div>
                <button className="mt-2 inline-flex items-center justify-center rounded-full bg-[#c7a86f] text-white px-6 py-3 shadow hover:shadow-md transition-all hover:-translate-y-0.5">Pošalji poruku</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
