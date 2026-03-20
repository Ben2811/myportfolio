

import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'
import { useIsMobile } from '#/hooks/use-mobile'
import { Menu, X } from 'lucide-react'
import React from 'react'

export default function Header() {
  const isMobile = useIsMobile()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--line)] bg-[var(--header-bg)]/80 backdrop-blur-xl transition-all duration-300">
      <nav className="page-wrap flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link
            to="/"
            hash="home"
            className="flex items-center gap-2 rounded-2xl border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3.5 py-1.5 text-sm font-bold text-[var(--sea-ink)] transition-all hover:scale-105 hover:shadow-lg active:scale-95"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[linear-gradient(90deg,#56c6be,#7ed3bf)] shadow-[0_0_8px_rgba(86,198,190,0.5)]" />
            <span className="tracking-tight sm:inline">Chuong Tu Luan</span>
          </Link>
        </div>

        {/* Navigation - Centered Desktop */}
        <div className="hidden items-center gap-1 rounded-full border border-gray-200/50 bg-white/50 p-1.5 shadow-sm dark:border-white/10 dark:bg-white/5 md:flex">
          <Link to="/" hash="home" className="nav-link-modern">Home</Link>
          <Link to="/" hash="skill" className="nav-link-modern">Skills</Link>
          <Link to="/" hash="project" className="nav-link-modern">Projects</Link>
          <Link to="/" hash="about" className="nav-link-modern">About</Link>
          <Link to="/" hash="contact" className="nav-link-modern">Contact</Link>
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Ben2811"
            target="_blank"
            rel="noreferrer"
            className="hidden h-10 w-10 items-center justify-center rounded-xl text-[var(--sea-ink-soft)] transition-colors hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)] sm:flex"
          >
            <span className="sr-only">GitHub</span>
            <svg viewBox="0 0 16 16" aria-hidden="true" width="24" height="24">
              <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
          
          <ThemeToggle />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--chip-bg)] border border-[var(--chip-line)] text-[var(--sea-ink)] md:hidden"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobile && isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[var(--header-bg)] border-b border-[var(--line)] backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-4 gap-2">
            <Link to="/" hash="home" className="nav-link-mobile-full" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/" hash="skill" className="nav-link-mobile-full" onClick={() => setIsMenuOpen(false)}>Skills</Link>
            <Link to="/" hash="project" className="nav-link-mobile-full" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link to="/" hash="about" className="nav-link-mobile-full" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/" hash="contact" className="nav-link-mobile-full" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <div className="h-[1px] bg-gray-100 dark:bg-white/10 my-2" />
            <a
              href="https://github.com/Ben2811"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-[var(--sea-ink-soft)] hover:bg-[var(--link-bg-hover)]"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg viewBox="0 0 16 16" width="20" height="20">
                <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub Profile
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
