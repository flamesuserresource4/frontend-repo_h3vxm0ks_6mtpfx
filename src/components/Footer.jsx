import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <nav className="flex items-center gap-6 text-sm text-neutral-700">
          <a href="#top" className="hover:text-neutral-900">Home</a>
          <a href="#about" className="hover:text-neutral-900">About</a>
          <a href="#gallery" className="hover:text-neutral-900">Gallery</a>
          <a href="#contact" className="hover:text-neutral-900">Contact</a>
        </nav>
        <p className="text-sm text-neutral-500">© Vila Djuric Petrovac</p>
      </div>
    </footer>
  )
}

export default Footer
