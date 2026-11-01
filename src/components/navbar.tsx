"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { motion } from "framer-motion"

type NavLink = {
  href: string
  label: string
  external?: boolean
  prefetch?: boolean
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/projects/physics-seekho", label: "Physics Seekho" },
  { href: "/projects/cern-ai-lab", label: "AI Lab" },
  { href: "/projects/quantum-lab", label: "Quantum Lab", prefetch: false },
  { href: "/services", label: "Services" },
  { href: "/certificates", label: "Certificates" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isDarkPage =
    (pathname?.startsWith("/projects/physics-seekho") ||
      pathname?.startsWith("/projects/cern-ai-lab")) ??
    false

  const linkClass = isDarkPage
    ? "text-slate-300 hover:text-white transition-colors"
    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
  const mobileLinkClass = isDarkPage
    ? "text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b backdrop-blur-xl ${
        isDarkPage
          ? "border-white/10 bg-[#0B1224]/80"
          : "border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-[#060814]/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-base sm:text-xl font-bold tracking-tight whitespace-nowrap"
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
            <span
              className={`bg-clip-text text-transparent ${
                isDarkPage
                  ? "bg-gradient-to-r from-white to-slate-300"
                  : "bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300"
              }`}
            >
              Shoaib Ur Rehman
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-[13px] xl:text-sm">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 ${linkClass}`}
                >
                  {link.label}
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={link.prefetch}
                  className={linkClass}
                >
                  {link.label}
                </Link>
              )
            )}
            <span className={isDarkPage ? "text-slate-300" : undefined}>
              <ThemeToggle />
            </span>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <span className={isDarkPage ? "text-slate-300" : undefined}>
              <ThemeToggle />
            </span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isDarkPage
                  ? "text-slate-300 hover:bg-white/10"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-base font-medium ${mobileLinkClass}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={link.prefetch}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${mobileLinkClass}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}