import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <Card className="island-shell rounded-3xl border border-[var(--line)] shadow-sm bg-white/50 dark:bg-white/5 backdrop-blur-sm overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left Side: Info */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-[var(--line)]">
            <CardHeader className="p-0 mb-8">
              <CardTitle className="text-3xl font-bold text-[var(--sea-ink)] flex items-center gap-3">
                <span className="h-8 w-1.5 bg-[var(--lagoon-deep)] rounded-full" />
                Get In Touch
              </CardTitle>
              <p className="text-[var(--sea-ink-soft)] mt-4 max-w-sm">
                I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
              </p>
            </CardHeader>

            <div className="space-y-6">
              <a 
                href="mailto:luanchuong51@gmail.com" 
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-[var(--lagoon-deep)] hover:shadow-md transition-all duration-300"
              >
                <div className="p-3 bg-[rgba(79,184,178,0.1)] rounded-xl text-[var(--lagoon-deep)] group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[var(--sea-ink-soft)] uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-sm font-semibold text-[var(--sea-ink)]">luanchuong51@gmail.com</p>
                </div>
                <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-[var(--sea-ink-soft)]" />
              </a>

              <a 
                href="tel:0938533520" 
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-[var(--lagoon-deep)] hover:shadow-md transition-all duration-300"
              >
                <div className="p-3 bg-[rgba(79,184,178,0.1)] rounded-xl text-[var(--lagoon-deep)] group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[var(--sea-ink-soft)] uppercase tracking-widest mb-1">Call Me</p>
                  <p className="text-sm font-semibold text-[var(--sea-ink)]">0938533520</p>
                </div>
                <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-[var(--sea-ink-soft)]" />
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10">
                <div className="p-3 bg-[rgba(79,184,178,0.1)] rounded-xl text-[var(--lagoon-deep)]">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[var(--sea-ink-soft)] uppercase tracking-widest mb-1">Location</p>
                  <p className="text-sm font-semibold text-[var(--sea-ink)]">Ho Chi Minh City, Vietnam</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Decorative/Action */}
          <div className="bg-[rgba(79,184,178,0.03)] dark:bg-white/5 p-8 md:p-12 flex flex-col justify-center items-center text-center">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-[var(--lagoon-deep)] blur-3xl opacity-20 rounded-full animate-pulse" />
              <div className="relative p-6 bg-white dark:bg-slate-900 rounded-3xl border border-[var(--line)] shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--lagoon-deep)] to-cyan-400 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Mail size={32} />
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--sea-ink)] mb-4">Let's work together</h3>
            <p className="text-sm text-[var(--sea-ink-soft)] mb-8 max-w-xs">
              I am currently available for freelance work or full-time positions as a Frontend Developer.
            </p>
            <a 
              href="mailto:luanchuong51@gmail.com"
              className="px-8 py-3 text-[var(--sea-ink)] dark:bg-white/5 border dark:hover:bg-[var(--lagoon-deep)]/90 text-white rounded-2xl font-bold shadow-lg shadow-black/10 dark:shadow-[var(--lagoon-deep)]/20 hover:scale-105 transition-all duration-300"
            >
              Send a Message
            </a>
          </div>
        </div>
      </Card>
    </section>
  )
}
