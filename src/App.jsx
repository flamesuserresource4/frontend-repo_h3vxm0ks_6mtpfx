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
  const metaTitle = 'Vila Djuric – Petrovac | Luksuzni apartman uz more'
  const metaDesc = 'Vila Djuric u Petrovcu – moderan, topao i potpuno opremljen apartman na 1 minut od plaže. Rezervišite savršen, miran i prijatan letnji boravak.'
  const ogImage = 'https://images.unsplash.com/photo-1502920917128-1aa500764ce7?q=80&w=1200&auto=format&fit=crop'

  return (
    <div id="top" className="min-h-screen bg-white text-neutral-900">
      <Helmet>
        <html lang="sr" />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
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
        <Features />
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
