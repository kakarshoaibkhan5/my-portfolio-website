"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Code, Zap, Sparkles } from "lucide-react"

const stats = [
  { value: "10x", label: "Faster delivery" },
  { value: "7", label: "AI certifications" },
  { value: "5", label: "Live projects" },
]

const services = [
  {
    icon: Code,
    title: "Website Development",
    description:
      "Modern, responsive websites built with Next.js and Tailwind CSS",
  },
  {
    icon: Zap,
    title: "AI Automation",
    description:
      "Intelligent automation solutions to streamline your workflows",
  },
  {
    icon: Sparkles,
    title: "Academic Writing",
    description:
      "Professional academic content and technical documentation",
  },
]

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-grid absolute inset-x-0 top-0 h-[680px]" />
        <div className="absolute -top-44 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px] dark:bg-blue-600/25" />
        <div className="absolute -top-24 right-0 h-[380px] w-[380px] rounded-full bg-violet-500/15 blur-[120px] dark:bg-violet-600/20" />
        <div className="absolute top-[420px] -left-32 h-[320px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px] dark:bg-cyan-500/10" />
      </div>

      {/* Hero */}
      <section className="relative px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-8 flex flex-col items-center gap-5"
            >
              <div className="relative">
                <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-blue-500/30 blur-3xl dark:bg-blue-500/40" />
                <div className="rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-violet-500 p-[3px] shadow-[0_0_60px_-10px_rgba(59,130,246,0.85)]">
                  <img
                    src="/shoaib-profile.jpg"
                    alt="Shoaib Ur Rehman"
                    className="h-28 w-28 rounded-full object-cover sm:h-36 sm:w-36"
                  />
                </div>
              </div>

              <div className="glass-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-slate-700 sm:text-sm dark:text-slate-200">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for freelance &amp; full-time
              </div>
            </motion.div>

            <h1 className="mb-6 text-balance text-4xl font-bold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">
              I build{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-sky-300 dark:via-blue-400 dark:to-violet-400 dark:drop-shadow-[0_0_35px_rgba(56,189,248,0.35)]">
                10x faster
              </span>
              <br className="hidden sm:block" /> with OpenCode
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl dark:text-slate-400">
              AI Developer based in Lahore, Pakistan. I ship modern web apps,
              intelligent automations, and e-commerce stores — clean, fast, and
              built to deliver results.
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:text-base"
              >
                View Projects
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="glass-card inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/40 dark:text-slate-100 dark:hover:border-white/20 sm:text-base"
              >
                Get in Touch
              </Link>
            </div>

            {/* Stat strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-3 sm:gap-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl px-3 py-4 sm:px-4 sm:py-5"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-2xl font-bold text-transparent dark:from-sky-300 dark:to-violet-400 sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What I Do */}
      <section className="relative px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-sky-400">
              What I do
            </span>
            <h2 className="mb-4 mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Built to ship, designed to last
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600 sm:text-lg dark:text-slate-400">
              Three ways I help founders and teams move faster without cutting
              corners on quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-28px_rgba(59,130,246,0.55)] sm:p-7"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-blue-600 ring-1 ring-blue-500/20 dark:text-sky-400 dark:ring-white/10">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight sm:text-xl">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card relative mx-auto max-w-4xl overflow-hidden rounded-3xl px-6 py-12 text-center sm:px-12 sm:py-14"
        >
          <div
            aria-hidden
            className="absolute -top-24 left-1/2 h-56 w-[420px] -translate-x-1/2 rounded-full bg-blue-500/25 blur-3xl dark:bg-blue-500/20"
          />
          <h2 className="relative mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Have a project in mind?
          </h2>
          <p className="relative mx-auto mb-8 max-w-xl text-sm text-slate-600 dark:text-slate-400 sm:text-base">
            Tell me what you&apos;re building. I&apos;ll show you how fast it can
            ship.
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:text-base"
          >
            Start a conversation
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
