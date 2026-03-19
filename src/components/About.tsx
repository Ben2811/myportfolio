export default function About() {
  return (
    <section id="about" className="scroll-mt-20 island-shell rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-[var(--sea-ink)] flex items-center gap-2">
        <span className="h-6 w-1 bg-[var(--lagoon-deep)] rounded-full" />
        About Me & Achievements
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[var(--sea-ink)]">Summary</h3>
          <p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed">
            Demonstrated teamwork ability through collaborative projects such as Webbuilder. Passionate about solving real-world problems through technology and continuously improving technical and professional skills in a dynamic development environment.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[var(--sea-ink)]">Achievements</h3>
          <ul className="space-y-3">
            <li className="flex justify-between items-center text-sm border-b border-[var(--line)] pb-2">
              <span className="font-medium text-[var(--sea-ink)]">Third Prize — HDBank Hackathon</span>
              <span className="text-[var(--sea-ink-soft)]">2023</span>
            </li>
            <li className="flex justify-between items-center text-sm border-b border-[var(--line)] pb-2">
              <span className="font-medium text-[var(--sea-ink)]">Participant — IT GOT TALENT</span>
              <span className="text-[var(--sea-ink-soft)]">2024 - 2025</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
