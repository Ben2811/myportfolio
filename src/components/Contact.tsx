export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 island-shell rounded-2xl p-6 bg-[rgba(79,184,178,0.05)] border border-[rgba(79,184,178,0.1)]">
      <h2 className="text-2xl font-bold mb-6 text-[var(--sea-ink)] flex items-center gap-2">
        <span className="h-6 w-1 bg-[var(--lagoon-deep)] rounded-full" />
        Get In Touch
      </h2>
      <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white/50 rounded-xl border border-[var(--line)] text-[var(--lagoon-deep)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-[var(--sea-ink-soft)] uppercase tracking-wider">Email</p>
            <a href="mailto:luanchuong51@gmail.com" className="text-sm font-medium text-[var(--sea-ink)] hover:text-[var(--lagoon-deep)]">luanchuong51@gmail.com</a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 bg-white/50 rounded-xl border border-[var(--line)] text-[var(--lagoon-deep)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-[var(--sea-ink-soft)] uppercase tracking-wider">Phone</p>
            <a href="tel:0938533520" className="text-sm font-medium text-[var(--sea-ink)] hover:text-[var(--lagoon-deep)]">0938533520</a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 bg-white/50 rounded-xl border border-[var(--line)] text-[var(--lagoon-deep)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-[var(--sea-ink-soft)] uppercase tracking-wider">Location</p>
            <p className="text-sm font-medium text-[var(--sea-ink)]">Ho Chi Minh City, Vietnam</p>
          </div>
        </div>
      </div>
    </section>
  )
}
