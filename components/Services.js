'use client'

import { useEffect, useRef } from 'react'

const SERVICES = [
  {
    number: '01',
    title: 'UI/UX Design',
    description:
      'Pixel-perfect interfaces that feel intuitive and alive. We research, wireframe, prototype, and ship experiences users remember.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="4" y="8" width="40" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="22" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 15v14M17 22h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 40h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 36l-2 4M28 36l2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    tags: ['Figma', 'Prototyping', 'User Research'],
  },
  {
    number: '02',
    title: 'Web Development',
    description:
      'Fast, scalable, and maintainable code. We build with Next.js, React, and modern stacks — from MVP to production.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M8 16L2 24l6 8M40 16l6 8-6 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 10L18 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    tags: ['Next.js', 'React', 'TypeScript'],
  },
  {
    number: '03',
    title: 'Brand Identity',
    description:
      'A brand is more than a logo. We build visual systems — from identity marks to motion guidelines — that scale.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 6C24 6 14 16 14 24s10 18 10 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 24h36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 16h32M8 32h32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    tags: ['Logo Design', 'Style Guide', 'Motion'],
  },
  {
    number: '04',
    title: 'Digital Marketing',
    description:
      'Data-driven strategies that grow. SEO, content, paid media — aligned with your brand and built to compound.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <polyline points="6,36 16,22 24,28 34,14 42,20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="42" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 40h36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    tags: ['SEO', 'Paid Media', 'Analytics'],
  },
]

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="relative bg-ink py-24 md:py-36">
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent" />
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                What We Do
              </span>
            </div>
            <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-none text-paper">
              OUR<br />SERVICES
            </h2>
          </div>
          <p className="reveal delay-200 max-w-sm text-paper/45 leading-relaxed md:text-right">
            End-to-end creative and technical capability — everything you need to build a brand that stands out.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {SERVICES.map((service, i) => (
            <div
              key={service.number}
              className={`service-card reveal delay-${(i + 1) * 100} group relative bg-ink p-8 md:p-10 cursor-default overflow-hidden transition-colors duration-300 hover:bg-[#111]`}
            >
              {/* Hover accent glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(200,255,0,0.04) 0%, transparent 60%)' }}
              />

              {/* Number */}
              <div className="font-mono text-xs text-paper/15 tracking-widest mb-6">
                {service.number}
              </div>

              {/* Icon */}
              <div className="service-icon text-accent mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-3xl md:text-4xl text-paper mb-4 tracking-wide">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-paper/45 leading-relaxed text-sm md:text-base mb-8">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-widest uppercase text-paper/30 border border-white/10 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="absolute bottom-8 right-8 md:bottom-10 md:right-10 text-paper/20 group-hover:text-accent transition-colors duration-300">
                <svg className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
