import { Code2, Layout, Terminal, Users } from 'lucide-react'


export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      desc: 'JavaScript, HTML, CSS, Typescript',
      icon: <Code2 className="w-5 h-5 text-[var(--lagoon-deep)]" />,
    },
    {
      title: 'Frontend Frameworks',
      desc: 'ReactJS, Next.JS, Tailwind CSS, Shadcn/ui',
      icon: <Layout className="w-5 h-5 text-[var(--lagoon-deep)]" />,
    },
    {
      title: 'Runtime & Tools',
      desc: 'BunJS, npm, Git, VS Code, Figma',
      icon: <Terminal className="w-5 h-5 text-[var(--lagoon-deep)]" />,
    },
    {
      title: 'Soft Skills',
      desc: 'Teamwork, Collaboration, Problem Solving',
      icon: <Users className="w-5 h-5 text-[var(--lagoon-deep)]" />,
    },
  ]

  return (
    <section id="skill" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6 text-[var(--sea-ink)] flex items-center gap-2">
        <span className="h-6 w-1 bg-[var(--lagoon-deep)] rounded-full" />
        Technical Skills
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((skill, index) => (
          <article
            key={skill.title}
            className="island-shell feature-card rise-in rounded-2xl p-5"
            style={{ animationDelay: `${index * 90 + 80}ms` }}
          >
            <div className="mb-3 p-2 bg-[rgba(79,184,178,0.1)] w-fit rounded-lg">
              {skill.icon}
            </div>
            <h3 className="mb-2 text-base font-semibold text-[var(--sea-ink)]">
              {skill.title}
            </h3>
            <p className="m-0 text-sm text-[var(--sea-ink-soft)]">{skill.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
