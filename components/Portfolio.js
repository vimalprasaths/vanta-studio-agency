'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const PROJECTS = [
  {
    id: 1,
    title: 'Lumina Finance',
    category: 'UI/UX Design',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    size: 'large',
  },
  {
    id: 2,
    title: 'Arco Coffee',
    category: 'Brand Identity',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    size: 'small',
  },
  {
    id: 3,
    title: 'Orbit SaaS',
    category: 'Web Development',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    size: 'small',
  },
  {
    id: 4,
    title: 'Mova Athletics',
    category: 'Brand Identity',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2171073fb?w=800&q=80',
    size: 'small',
  },
  {
    id: 5,
    title: 'Solara Architecture',
    category: 'Digital Marketing',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
    size: 'small',
  },
  {
    id: 6,
    title: 'Pulse Health App',
    category: 'UI/UX Design',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    size: 'large',
  },
]

export default function Portfolio() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.05 }
    )
    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" ref={sectionRef} className="relative bg-[#080808] py-24 md:py-36">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent" />
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                Selected Work
              </span>
            </div>
            <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-none text-paper">
              OUR<br />PORTFOLIO
            </h2>
          </div>
          <div className="reveal delay-200 flex items-center gap-8">
            <div className="text-right">
              <div className="font-display text-5xl text-paper">6</div>
              <div className="font-mono text-[10px] text-paper/35 tracking-widest uppercase">Featured Projects</div>
            </div>
          </div>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[240px] md:auto-rows-[280px]">
          {PROJECTS.map((project, i) => {
            const isLarge = project.size === 'large'
            return (
              <div
                key={project.id}
                className={`reveal delay-${Math.min((i + 1) * 100, 500)} portfolio-item relative overflow-hidden group cursor-pointer
                  ${isLarge ? 'md:col-span-7 md:row-span-2' : 'md:col-span-5'}
                `}
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={isLarge ? '(max-width: 768px) 100vw, 58vw' : '(max-width: 768px) 100vw, 42vw'}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-ink/40" />

                {/* Hover overlay */}
                <div className="portfolio-overlay absolute inset-0 bg-ink/85 flex flex-col justify-end p-6 md:p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="font-mono text-[10px] text-accent tracking-widest uppercase">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl text-paper mt-2 mb-4">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-paper/40">{project.year}</span>
                      <div className="w-8 h-8 border border-accent/50 flex items-center justify-center text-accent">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M7 7h10v10" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Default label (visible without hover) */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 portfolio-overlay" style={{ opacity: 1, background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 100%)' }}>
                  <h3 className="font-display text-xl text-paper">{project.title}</h3>
                  <span className="font-mono text-[10px] text-paper/50 tracking-widest uppercase">{project.category}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="reveal delay-300 text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-paper/50 hover:text-accent transition-colors duration-300 border-b border-white/10 hover:border-accent pb-1"
          >
            Start a Project
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
