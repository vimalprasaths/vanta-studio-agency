export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[#060606] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div>
            <div className="font-display text-3xl text-paper tracking-wider mb-2">
              VAN<span className="text-accent">TA</span>
            </div>
            <p className="font-mono text-[10px] text-paper/25 tracking-widest uppercase">
              Design That Moves.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-8">
            {['Services', 'Portfolio', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-mono text-[10px] text-paper/35 tracking-widest uppercase hover:text-accent transition-colors link-underline"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {['Dribbble', 'Behance', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="font-mono text-[10px] text-paper/25 tracking-widest uppercase hover:text-accent transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-paper/20 tracking-widest">
            © {year} VANTA Studio. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-paper/20 tracking-widest">
            Built with Next.js · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
