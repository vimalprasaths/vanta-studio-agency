'use client'

import { useState, useEffect, useRef } from 'react'

export default function Contact() {
  const sectionRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.message.trim()) errs.message = 'Message is required'
    else if (form.message.trim().length < 20) errs.message = 'Message must be at least 20 characters'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    // Simulate async submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" ref={sectionRef} className="relative bg-ink py-24 md:py-36 overflow-hidden">
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Background accent blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,255,0,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left col */}
          <div>
            <div className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-accent" />
                <span className="font-mono text-xs text-accent tracking-widest uppercase">
                  Get In Touch
                </span>
              </div>
              <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-none text-paper mb-8">
                LET'S<br />TALK.
              </h2>
              <p className="text-paper/45 leading-relaxed max-w-sm">
                Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
              </p>
            </div>

            {/* Contact info */}
            <div className="reveal delay-200 mt-12 space-y-6">
              {[
                { label: 'Email', value: 'hello@vantastudio.co' },
                { label: 'Phone', value: '+1 (555) 000-0000' },
                { label: 'Location', value: 'Remote · Worldwide' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 group">
                  <div className="w-px h-12 bg-white/10 group-hover:bg-accent transition-colors duration-300" />
                  <div>
                    <div className="font-mono text-[10px] text-paper/30 tracking-widest uppercase mb-1">
                      {item.label}
                    </div>
                    <div className="text-paper/70 text-sm group-hover:text-paper transition-colors duration-300">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right col — form */}
          <div className="reveal delay-300">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 border border-accent flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-4xl text-paper mb-4">Message Sent!</h3>
                <p className="text-paper/45 text-sm max-w-xs">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 font-mono text-xs tracking-widest uppercase text-accent border-b border-accent/50 pb-0.5 hover:border-accent transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name */}
                <div>
                  <label className="block font-mono text-[10px] tracking-widest uppercase text-paper/40 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`form-input w-full px-4 py-3.5 text-sm ${errors.name ? 'border-red-500/70' : ''}`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 font-mono text-[10px] text-red-400">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block font-mono text-[10px] tracking-widest uppercase text-paper/40 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`form-input w-full px-4 py-3.5 text-sm ${errors.email ? 'border-red-500/70' : ''}`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 font-mono text-[10px] text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-[10px] tracking-widest uppercase text-paper/40 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project..."
                    className={`form-input w-full px-4 py-3.5 text-sm resize-none ${errors.message ? 'border-red-500/70' : ''}`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 font-mono text-[10px] text-red-400">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full py-4 bg-accent text-ink font-mono text-xs tracking-widest uppercase font-medium overflow-hidden transition-all duration-300 hover:bg-accent/80 disabled:opacity-60"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      Send Message
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
