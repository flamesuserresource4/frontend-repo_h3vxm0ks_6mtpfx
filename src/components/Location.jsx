import React from 'react'
import { MapPin, ShoppingBag, Utensils } from 'lucide-react'

const Location = () => {
  return (
    <section id="location" className="bg-[#f7f3ee]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900">Gde se nalazimo</h2>
        <p className="mt-3 text-neutral-700">Smješteni u mirnom dijelu Petrovca, na samo 1 minut od plaže i šetališta. Idealan položaj za miran odmor, porodična putovanja i istraživanje obale.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
            <div className="aspect-[16/10] w-full">
              <iframe
                title="Vila Djuric – mapa"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.363538938255!2d18.842!3d42.205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPetrovac!5e0!3m2!1sen!2sme!4v1700000000000"
                className="h-full w-full"
                allowFullScreen
              />
            </div>
            <div className="p-4 text-sm text-neutral-600">
              Prikaz mape – precizna lokacija na upit.
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <div className="h-10 w-10 rounded-full bg-[#f1eadf] text-[#c7a86f] flex items-center justify-center"><MapPin className="h-5 w-5" /></div>
              <p className="text-neutral-700">Plaža i šetalište – 1 minut hoda</p>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <div className="h-10 w-10 rounded-full bg-[#f1eadf] text-[#c7a86f] flex items-center justify-center"><ShoppingBag className="h-5 w-5" /></div>
              <p className="text-neutral-700">Market i prodavnice – nekoliko koraka</p>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <div className="h-10 w-10 rounded-full bg-[#f1eadf] text-[#c7a86f] flex items-center justify-center"><Utensils className="h-5 w-5" /></div>
              <p className="text-neutral-700">Restorani i kafići u blizini</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
