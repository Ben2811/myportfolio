import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14 flex flex-col gap-12">
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}
