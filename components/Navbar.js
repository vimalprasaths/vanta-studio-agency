'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = ['Services', 'Portfolio', 'Contact']

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-blur bg-ink/80 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="font-display text-2xl md:text-3xl tracking-wider text-paper">
          VAN<span className="text-accent">TA</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-mono text-xs tracking-widest uppercase text-paper/60 hover:text-accent link-underline transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono text-xs tracking-widest uppercase px-5 py-2.5 bg-accent text-ink font-medium hover:bg-accent/80 transition-colors duration-200"
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-paper transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-paper transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-paper transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } nav-blur bg-ink/95 border-b border-white/5`}
      >
        <nav className="flex flex-col px-6 py-6 gap-5">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs tracking-widest uppercase text-paper/60 hover:text-accent transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="font-mono text-xs tracking-widest uppercase px-5 py-3 bg-accent text-ink font-medium text-center"
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  )
}
