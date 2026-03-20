
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-20">
      <Card className="island-shell rise-in relative overflow-hidden rounded-[2rem] border-none shadow-none bg-transparent">
        <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.32),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.18),transparent_66%)]" />
        
        <CardContent className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10 px-6 py-10 sm:px-10 sm:py-14">
          <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-white/20 shadow-xl flex-shrink-0">
            <img 
              src="https://avatars.githubusercontent.com/u/103912953?v=4" 
              alt="Chuong Tu Luan" 
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
              fetchPriority="high"
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
              <Button asChild className="rounded-full px-6 h-11 bg-[rgba(79,184,178,0.14)] text-[var(--lagoon-deep)] border-[rgba(50,143,151,0.3)] hover:bg-[rgba(79,184,178,0.24)] transition hover:-translate-y-0.5 shadow-none">
                <a href="#contact">Hire Me</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6 h-11 bg-white/50 text-[var(--sea-ink)] border-[rgba(23,58,64,0.2)] hover:border-[rgba(23,58,64,0.35)] transition hover:-translate-y-0.5 shadow-none">
                <a href="https://github.com/Ben2811" target="_blank" rel="noopener noreferrer">
                  My GitHub
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
