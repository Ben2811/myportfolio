import { createFileRoute } from '@tanstack/react-router'
import { Suspense, lazy } from 'react'
import Hero from '../components/Hero'

const Skills = lazy(() => import('../components/Skills'))
const Projects = lazy(() => import('../components/Projects'))
const About = lazy(() => import('../components/About'))
const Contact = lazy(() => import('../components/Contact'))

export const Route = createFileRoute('/')({ component: App })

function SectionLoader() {
  return (
    <div className="w-full h-48 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-[var(--lagoon)] border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

function App() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14 flex flex-col gap-12">
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
    </main>
  )
}
