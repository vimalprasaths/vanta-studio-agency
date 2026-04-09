'use client'

import { useEffect, useRef } from 'react'

const MARQUEE_ITEMS = [
  'UI/UX Design', '—', 'Branding', '—', 'Web Development', '—',
  'Digital Strategy', '—', 'Motion Design', '—', 'Art Direction', '—',
  'UI/UX Design', '—', 'Branding', '—', 'Web Development', '—',
  'Digital Strategy', '—', 'Motion Design', '—', 'Art Direction', '—',
]

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const onMove = (e) => {
      const { clientX, clientY } = e
      const { width, height } = el.getBoundingClientRect()
      const x = (clientX / width - 0.5) * 20
      const y = (clientY / height - 0.5) * 20
      el.style.setProperty('--mx', `${x}px`)
      el.style.setProperty('--my', `${y}px`)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-ink"
      style={{ '--mx': '0px', '--my': '0px' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200,255,0,0.06) 0%, transparent 70%)',
          transform: `translate(calc(-50% + var(--mx)), calc(-50% + var(--my)))`,
          transition: 'transform 0.3s ease',
        }}
      />

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#f5f0e8 1px, transparent 1px), linear-gradient(90deg, #f5f0e8 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Corner labels */}
      <div className="absolute top-20 left-6 md:left-12 font-mono text-[10px] text-paper/25 tracking-widest uppercase">
        Est. 2024
      </div>
      <div className="absolute top-20 right-6 md:right-12 font-mono text-[10px] text-paper/25 tracking-widest uppercase text-right">
        Studio No. 01
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16 md:pt-32">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <div className="w-8 h-px bg-accent" />
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            Design Agency
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-display leading-none mb-8">
          <span
            className="block text-[clamp(4rem,14vw,13rem)] text-paper glitch-text"
            data-text="WE BUILD"
            style={{ animationDelay: '0ms' }}
          >
            WE BUILD
          </span>
          <span className="block text-[clamp(4rem,14vw,13rem)] text-accent leading-none">
            BOLD
          </span>
          <span className="block text-[clamp(4rem,14vw,13rem)] text-paper/20 leading-none -mt-2 md:-mt-4">
            FUTURES.
          </span>
        </h1>

        {/* Sub + CTA row */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16 mt-8">
          <p className="max-w-xs text-paper/50 leading-relaxed text-base md:text-lg">
            VANTA is a design-first studio crafting digital experiences that captivate, convert, and endure.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#portfolio"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-accent text-ink font-mono text-xs tracking-widest uppercase font-medium overflow-hidden transition-all duration-300 hover:pr-12"
            >
              View Work
              <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-paper/20 text-paper font-mono text-xs tracking-widest uppercase hover:border-accent hover:text-accent transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex gap-10 md:gap-20 mt-16 md:mt-24 border-t border-white/5 pt-8">
          {[
            { num: '120+', label: 'Projects Delivered' },
            { num: '40+', label: 'Happy Clients' },
            { num: '5★', label: 'Average Rating' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl md:text-5xl text-paper">{stat.num}</div>
              <div className="font-mono text-[10px] text-paper/35 tracking-widest uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 py-3 bg-ink overflow-hidden">
        <div className="marquee-track">
          {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, i) => (
            <span
              key={i}
              className={`font-mono text-xs tracking-widest uppercase mr-6 ${
                item === '—' ? 'text-accent' : 'text-paper/30'
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
