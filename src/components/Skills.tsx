import { Code2, Layout, Terminal, Users, CheckCircle2, MessageSquare, Lightbulb } from 'lucide-react'
import React, { Suspense, lazy, useMemo } from 'react'
import { Card, CardContent, CardTitle } from "./ui/card"
import { useIsMobile } from '#/hooks/use-mobile'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

const Javascript = lazy(() => import('./ui/svgs/javascript').then(m => ({ default: m.Javascript })))
const Html5 = lazy(() => import('./ui/svgs/html5').then(m => ({ default: m.Html5 })))
const Typescript = lazy(() => import('./ui/svgs/typescript').then(m => ({ default: m.Typescript })))
const ReactDark = lazy(() => import('./ui/svgs/reactDark').then(m => ({ default: m.ReactDark })))
const ReactLight = lazy(() => import('./ui/svgs/reactLight').then(m => ({ default: m.ReactLight })))
const NextjsIconDark = lazy(() => import('./ui/svgs/nextjsIconDark').then(m => ({ default: m.NextjsIconDark })))
const NextjsLogoDark = lazy(() => import('./ui/svgs/nextjsLogoDark').then(m => ({ default: m.NextjsLogoDark })))
const Tailwindcss = lazy(() => import('./ui/svgs/tailwindcss').then(m => ({ default: m.Tailwindcss })))
const ShadcnUi = lazy(() => import('./ui/svgs/shadcnUi').then(m => ({ default: m.ShadcnUi })))
const ShadcnUiDark = lazy(() => import('./ui/svgs/shadcnUiDark').then(m => ({ default: m.ShadcnUiDark })))
const Bun = lazy(() => import('./ui/svgs/bun').then(m => ({ default: m.Bun })))
const Npm = lazy(() => import('./ui/svgs/npm').then(m => ({ default: m.Npm })))
const Git = lazy(() => import('./ui/svgs/git').then(m => ({ default: m.Git })))
const Figma = lazy(() => import('./ui/svgs/figma').then(m => ({ default: m.Figma })))
const CssOld = lazy(() => import('./ui/svgs/cssOld').then(m => ({ default: m.CssOld })))

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

export default function Skills() {
  const isMobile = useIsMobile()
  const skillCategories: SkillCategory[] = useMemo(() => [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', icon: <Javascript className="w-5 h-5" /> },
        { name: 'TypeScript', icon: <Typescript className="w-5 h-5" /> },
        { name: 'HTML5', icon: <Html5 className="w-5 h-5" /> },
        { name: 'CSS3', icon: <CssOld className="w-5 h-5" /> },
      ],
      icon: <Code2 className="w-5 h-5 text-[var(--lagoon-deep)]" />,
    },
    {
      title: 'Frontend',
      skills: [
        { 
          name: 'React', 
          icon: (
            <>
              <ReactLight className="w-5 h-5 dark:hidden" />
              <ReactDark className="w-5 h-5 hidden dark:block" />
            </>
          ) 
        },
        { 
          name: 'Next.js', 
          icon: (
            <>
              <NextjsIconDark className="w-5 h-5 dark:hidden" />
              <NextjsLogoDark className="w-5 h-5 hidden dark:block" />
            </>
          ) 
        },
        { name: 'Tailwind', icon: <Tailwindcss className="w-5 h-5" /> },
        { 
          name: 'Shadcn', 
          icon: (
            <>
              <ShadcnUi className="w-5 h-5 dark:hidden" />
              <ShadcnUiDark className="w-5 h-5 hidden dark:block" />
            </>
          ) 
        },
      ],
      icon: <Layout className="w-5 h-5 text-[var(--lagoon-deep)]" />,
    },
    {
      title: 'Tools & Runtime',
      skills: [
        { name: 'Bun', icon: <Bun className="w-5 h-5" /> },
        { name: 'npm', icon: <Npm className="w-5 h-5" /> },
        { name: 'Git', icon: <Git className="w-5 h-5" /> },
        { name: 'Figma', icon: <Figma className="w-5 h-5" /> },
      ],
      icon: <Terminal className="w-5 h-5 text-[var(--lagoon-deep)]" />,
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Teamwork', icon: <Users className="w-5 h-5 text-blue-500" /> },
        { name: 'Problem Solving', icon: <Lightbulb className="w-5 h-5 text-yellow-500" /> },
        { name: 'Communication', icon: <MessageSquare className="w-5 h-5 text-green-500" /> },
        { name: 'Self-Learning', icon: <CheckCircle2 className="w-5 h-5 text-purple-500" /> },
      ],
      icon: <Users className="w-5 h-5 text-[var(--lagoon-deep)]" />,
    },
  ], [])

  return (
    <section id="skill" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-8 text-[var(--sea-ink)] flex items-center gap-2">
        <span className="h-6 w-1 bg-[var(--lagoon-deep)] rounded-full" />
        Technical Skills
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category, index) => (
          <Card
            key={category.title}
            className="island-shell feature-card rise-in rounded-3xl border border-[var(--line)] shadow-sm bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-[rgba(79,184,178,0.1)] rounded-xl">
                  {category.icon}
                </div>
                <CardTitle className="text-lg font-bold text-[var(--sea-ink)]">
                  {category.title}
                </CardTitle>
              </div>
              
              <div className={isMobile ? "flex flex-col gap-3" : "grid grid-cols-2 gap-3"}>
                {category.skills.map((skill) => (
                  <TooltipProvider key={skill.name}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className={`flex ${isMobile ? 'flex-row items-center gap-4' : 'flex-col items-center justify-center gap-2'} p-3 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md hover:scale-105 transition-all text-sm font-medium text-[var(--sea-ink-soft)] cursor-help`}>
                          <Suspense fallback={<div className="w-5 h-5 bg-gray-100 dark:bg-white/10 animate-pulse rounded" />}>
                            <span className="w-8 h-8 flex items-center justify-center">
                              {skill.icon}
                            </span>
                          </Suspense>
                          <span className={`${isMobile ? 'text-sm' : 'text-[10px] sm:text-xs text-center'} line-clamp-1`}>
                            {skill.name}
                          </span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="text-xs font-medium">
                        <p>{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}