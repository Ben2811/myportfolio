export default function Projects() {
  const projectList = [
    {
      title: 'Webbuilder (Team Project)',
      role: 'Frontend Developer',
      description: 'Collaborated in a team of three to develop a platform that supports frontend designers in building and designing web layouts.',
      points: [
        'Developed UI components using Tailwind CSS.',
        'Managed global application state using React Query.',
        'Implemented custom React Hooks to improve performance and maintainability.',
      ],
      links: [
        { label: 'Live Demo', url: 'https://webbuilderv2.vercel.app' },
        { label: 'GitHub Repo', url: 'https://github.com/Ben2811/webbuilderv2' },
      ],
    },
    {
      title: 'Legal Services Platform (Team Project)',
      role: 'Frontend Developer',
      description: 'A professional platform showcasing legal services and training programs with dynamic content management.',
      points: [
        'Developed modern and responsive UI using Tailwind CSS and Shadcn/UI.',
        'Utilized Next.js Server Components to improve SEO and page performance.',
        'Built reusable frontend components and managed complex form states using React Hook Form and Zod.',
      ],
      links: [
        { label: 'GitHub Repo', url: 'https://github.com/Ben2811/websiteluatsutunglam' },
      ],
    },
  ]

  return (
    <section id="project" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6 text-[var(--sea-ink)] flex items-center gap-2">
        <span className="h-6 w-1 bg-[var(--lagoon-deep)] rounded-full" />
        Projects
      </h2>
      <div className="grid gap-6">
        {projectList.map((project, index) => (
          <article key={index} className="island-shell rounded-2xl p-6 relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-[var(--sea-ink)]">{project.title}</h3>
                  <span className="text-sm font-medium text-[var(--lagoon-deep)] bg-[rgba(79,184,178,0.1)] px-3 py-1 rounded-full">{project.role}</span>
                </div>
                <p className="text-sm text-[var(--sea-ink-soft)] mb-4 italic">{project.description}</p>
                <ul className="list-disc pl-5 text-sm text-[var(--sea-ink-soft)] space-y-1 mb-6">
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  {project.links.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noreferrer" className="text-sm font-semibold text-[var(--lagoon-deep)] underline hover:text-[var(--sea-ink)]">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
