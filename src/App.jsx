import React from 'react'
import { Helmet } from 'react-helmet'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-neutral-900">
      <Helmet>
        <title>Vila Djuric – Petrovac | Luksuzni apartman uz more</title>
        <meta name="description" content="Vila Djuric u Petrovcu na moru – moderan, potpuno opremljen apartman na 1 minut od plaže. Rezervišite savršen odmor na obali Crne Gore." />
        <meta property="og:title" content="Vila Djuric – Petrovac" />
        <meta property="og:description" content="Moderan apartman u srcu Petrovca, 1 minut od mora. Komfor, privatnost i elegancija." />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/60 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="font-serif text-lg tracking-wide">Vila Djuric</a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="hover:text-neutral-600">O nama</a>
            <a href="#features" className="hover:text-neutral-600">Sadržaj</a>
            <a href="#gallery" className="hover:text-neutral-600">Galerija</a>
            <a href="#location" className="hover:text-neutral-600">Lokacija</a>
            <a href="#contact" className="rounded-full bg-[#c7a86f] text-white px-4 py-2">Rezervišite</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <div id="features"><Features /></div>
        <About />
        <Gallery />
        <Location />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
