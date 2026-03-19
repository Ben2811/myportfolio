import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="island-shell rise-in relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14">
      <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.32),transparent_66%)]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.18),transparent_66%)]" />
      
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
        <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-white/20 shadow-xl flex-shrink-0">
          <img 
            src="https://avatars.githubusercontent.com/u/103912953?v=4" 
            alt="Chuong Tu Luan" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="island-kicker mb-3">Frontend Developer Fresher</p>
          <h1 className="display-title mb-5 max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-[var(--sea-ink)] sm:text-6xl">
            Chuong Tu Luan
          </h1>
          <p className="mb-8 max-w-2xl text-base text-[var(--sea-ink-soft)] sm:text-lg">
            Motivated frontend developer student at Ho Chi Minh City University of Technology with a strong interest in modern web development. Experienced in building responsive and user-friendly interfaces using React, Next.js and Tailwind CSS.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] px-5 py-2.5 text-sm font-semibold text-[var(--lagoon-deep)] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]"
            >
              Hire Me
            </a>
            <a
              href="https://github.com/Ben2811"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[rgba(23,58,64,0.2)] bg-white/50 px-5 py-2.5 text-sm font-semibold text-[var(--sea-ink)] no-underline transition hover:-translate-y-0.5 hover:border-[rgba(23,58,64,0.35)]"
            >
              My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
