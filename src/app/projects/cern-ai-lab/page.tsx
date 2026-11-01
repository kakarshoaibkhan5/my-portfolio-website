"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Atom,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Database,
  ExternalLink,
  FlaskConical,
  GitBranch,
  Github,
  GraduationCap,
  Home,
  Layers,
  LineChart,
  ScanSearch,
  Sparkles,
  Target,
} from "lucide-react"
import { EnergyDistributionChart } from "@/components/cern/energy-chart"
import { EventsTimelineChart } from "@/components/cern/events-chart"
import { ClassificationChart } from "@/components/cern/classification-chart"
import { PythonSnippet } from "@/components/cern/python-snippet"
import "@/components/cern/chart-theme"

const techBadges = ["Python", "Pandas", "Scikit-learn", "Next.js", "Chart.js"]

const stats = [
  {
    value: "10k+",
    label: "Collision Events",
    detail: "Processed in the sample",
    icon: Atom,
  },
  {
    value: "94%",
    label: "AI Accuracy",
    detail: "Random Forest classifier",
    icon: Target,
  },
  {
    value: "2",
    label: "Datasets",
    detail: "Signal + background",
    icon: Database,
  },
  {
    value: "100%",
    label: "Open Source",
    detail: "CERN data & code",
    icon: GitBranch,
  },
]

const pipeline = [
  {
    step: "01",
    icon: Database,
    title: "Data Cleaning",
    description:
      "Pandas removes nulls, calibrates detector units, and filters noise from 10,000+ collision events.",
  },
  {
    step: "02",
    icon: Layers,
    title: "Feature Engineering",
    description:
      "Physics-aware features: transverse momentum, pseudorapidity, missing energy, and jet mass.",
  },
  {
    step: "03",
    icon: BrainCircuit,
    title: "Random Forest / Neural Network",
    description:
      "Ensemble trees learn the boundary between Higgs signal and Standard Model background.",
  },
  {
    step: "04",
    icon: ScanSearch,
    title: "Prediction",
    description:
      "Each event receives a probability score. Above 0.5, the model flags a Higgs candidate.",
  },
]

const proofPoints = [
  "Large-scale scientific data handling",
  "Reproducible ML pipeline",
  "Research-ready documentation",
]

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
}

export default function CernAiDashboardPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B1224] text-slate-100">
      {/* Midnight Aurora backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(155deg, #0B1224 0%, #101632 46%, #1E1145 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-[720px] opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.09) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 75% 58% at 50% 0%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 58% at 50% 0%, black 30%, transparent 100%)",
          }}
        />
        <div className="absolute -top-48 left-1/2 h-[460px] w-[860px] -translate-x-1/2 rounded-full bg-[#38BDF8]/20 blur-[150px]" />
        <div className="absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-[#A78BFA]/20 blur-[130px]" />
        <div className="absolute left-[-12%] top-[760px] h-[360px] w-[480px] rounded-full bg-[#38BDF8]/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-8%] h-[380px] w-[520px] rounded-full bg-[#A78BFA]/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:px-8">
        {/* HERO */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-4xl"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-[11px] font-medium text-slate-300 backdrop-blur-xl sm:text-xs">
              <FlaskConical className="h-3.5 w-3.5 text-sky-400" />
              CERN Open Data
              <span className="h-3 w-px bg-white/20" />
              <span className="text-slate-400">AI Research Project</span>
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
            </div>

            <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block text-white">CERN Data Explorer</span>
              <span className="mt-2 block bg-gradient-to-r from-[#38BDF8] via-[#7DD3FC] to-[#A78BFA] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(56,189,248,0.25)]">
                AI Powered
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base font-medium text-slate-300 sm:text-lg">
              Analyzing Real CERN Open Data with Artificial Intelligence
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
              A research-grade demo that turns 10,000+ particle collision events
              into an interpretable Higgs boson classifier — bridging physics
              intuition with modern data science.
            </p>

            {/* Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              <span className="mr-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Tech
              </span>
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium text-slate-200 backdrop-blur-xl transition-colors hover:border-sky-400/40 hover:text-white sm:text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 flex justify-center">
              <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-white/10 bg-gradient-to-r from-sky-400/[0.08] to-violet-400/[0.10] px-4 py-2 text-[11px] text-slate-300 backdrop-blur-xl sm:text-xs">
                <Sparkles className="h-3.5 w-3.5 text-violet-300" />
                Built by{" "}
                <span className="font-semibold text-white">
                  Shoaib Ur Rehman
                </span>
                <span className="h-3 w-px bg-white/20" />
                <span className="font-medium text-sky-300">BS Physics</span>
                <ArrowRight className="h-3 w-3 text-slate-500" />
                <span className="font-medium text-violet-300">AI</span>
              </span>
            </div>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#dashboard"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#A78BFA] px-6 py-3 text-sm font-semibold text-[#0B1224] shadow-[0_18px_50px_-18px_rgba(56,189,248,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-16px_rgba(56,189,248,0.9)]"
              >
                Explore the Lab
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="https://github.com/kakarshoaibkhan5/my-portfolio-website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
              >
                <Github className="h-4 w-4" />
                View Source
              </a>
            </div>
          </motion.div>

          {/* STAT STRIP */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.55 }}
            className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-5 text-left backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.06] sm:px-5"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <stat.icon className="absolute right-3 top-3 h-4 w-4 text-slate-600 transition-colors group-hover:text-sky-400/70" />
                <div className="bg-gradient-to-r from-[#38BDF8] to-[#A78BFA] bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300 sm:text-[11px]">
                  {stat.label}
                </div>
                <div className="mt-1 text-[10px] text-slate-500 sm:text-[11px]">
                  {stat.detail}
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* DASHBOARD */}
        <section id="dashboard" className="scroll-mt-24 pt-20 sm:pt-24">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-400">
                <BarChart3 className="h-3.5 w-3.5" />
                Live Analysis Lab
              </div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Three views. One physics question.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-400">
                Explore the same 10,000-event sample from three angles: energy,
                time, and the model&apos;s decision.
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-medium text-slate-400 backdrop-blur-xl">
              <Activity className="h-3.5 w-3.5 text-emerald-400" />
              Interactive demo · illustrative sample
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {/* CHART A */}
            <motion.article
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:border-sky-400/30 hover:shadow-[0_30px_80px_-40px_rgba(56,189,248,0.45)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sky-400/20 bg-sky-400/10 text-sky-300">
                    <Atom className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-tight text-white">
                      Particle Energy Distribution
                    </h3>
                    <p className="mt-0.5 text-[11px] text-slate-500">
                      Higgs boson search · 100–160 GeV
                    </p>
                  </div>
                </div>
                <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[9px] uppercase tracking-wider text-slate-500">
                  Histogram
                </span>
              </div>

              <EnergyDistributionChart />

              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[10px] text-slate-500">
                <span>Peak region · 125 GeV</span>
                <span>16 energy bins</span>
              </div>
            </motion.article>

            {/* CHART B */}
            <motion.article
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:border-sky-400/30 hover:shadow-[0_30px_80px_-40px_rgba(56,189,248,0.45)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A78BFA]/40 to-transparent" />
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-400/10 text-violet-300">
                    <LineChart className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-tight text-white">
                      Collision Events Timeline
                    </h3>
                    <p className="mt-0.5 text-[11px] text-slate-500">
                      24-hour run window · events per minute
                    </p>
                  </div>
                </div>
                <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[9px] uppercase tracking-wider text-slate-500">
                  Line
                </span>
              </div>

              <EventsTimelineChart />

              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[10px] text-slate-500">
                <span>Peak · 1,120 events/min</span>
                <span>Hover to inspect</span>
              </div>
            </motion.article>

            {/* CHART C */}
            <motion.article
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.19 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:border-sky-400/30 hover:shadow-[0_30px_80px_-40px_rgba(56,189,248,0.45)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
              <div className="mb-3 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                    <BrainCircuit className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-tight text-white">
                      AI Classification Result
                    </h3>
                    <p className="mt-0.5 text-[11px] text-slate-500">
                      Is this a Higgs boson?
                    </p>
                  </div>
                </div>
                <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[9px] uppercase tracking-wider text-slate-500">
                  Donut
                </span>
              </div>

              <ClassificationChart />

              <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-3 text-[10px] text-slate-500">
                <span>Threshold · 0.50</span>
                <span>10,000 test events</span>
              </div>
            </motion.article>
          </div>
        </section>

        {/* AI ANALYSIS */}
        <section className="pt-20 sm:pt-24">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-8 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-300">
              <BrainCircuit className="h-3.5 w-3.5" />
              AI Methodology
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              How AI Detects Higgs Boson
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
              A four-stage pipeline turns raw detector output into a
              physics-informed classification — the same workflow used in
              modern high-energy physics analysis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1.05fr]">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl sm:p-6"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#A78BFA]/10 blur-3xl" />
              <div className="relative space-y-1">
                {pipeline.map((item, index) => (
                  <div key={item.step} className="group relative flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sky-400/25 bg-gradient-to-br from-sky-400/15 to-violet-400/15 text-sky-300">
                        <item.icon className="h-4 w-4" />
                      </div>
                      {index < pipeline.length - 1 && (
                        <div className="my-1 w-px flex-1 bg-gradient-to-b from-sky-400/30 to-violet-400/10" />
                      )}
                    </div>

                    <div className="pb-6">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-slate-500">
                          {item.step}
                        </span>
                        <h3 className="text-sm font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative mt-1 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-[10px] text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                  5 physics features
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                  300 decision trees
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                  Probability threshold 0.5
                </span>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              <PythonSnippet />
            </motion.div>
          </div>
        </section>

        {/* LEARNING / SOP */}
        <section className="pt-20 sm:pt-24">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-sky-400/[0.07] via-white/[0.03] to-violet-400/[0.10] p-6 backdrop-blur-xl sm:p-10"
          >
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#A78BFA]/15 blur-[90px]" />
            <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-[#38BDF8]/10 blur-[90px]" />

            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.45fr_1fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                  <GraduationCap className="h-3.5 w-3.5 text-sky-400" />
                  Learning / SOP
                </div>
                <h2 className="mt-5 text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Why I Built This — From Physics to Data Science
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  As a BS Physics student, I always loved data behind particles.
                  This project shows my journey from theoretical physics to
                  practical Data Science. I used real CERN Open Data portal
                  datasets to practice skills needed for Masters in Data Science
                  in Europe. This demonstrates my ability to handle large
                  scientific datasets, a key skill for research.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0B1224]/50 p-4 backdrop-blur-xl sm:p-5">
                <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  What this project proves
                </div>
                <ul className="mt-3 space-y-2.5">
                  {proofPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-xs text-slate-300 sm:text-[13px]"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t border-white/10 pt-3 text-[10px] leading-relaxed text-slate-500">
                  Preparing for Erasmus Mundus &amp; DAAD Masters in AI and Data
                  Science.
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FOOTER */}
        <motion.footer
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="pt-16 sm:pt-20"
        >
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-8 backdrop-blur-xl sm:px-8 sm:py-10">
            <div className="flex flex-col items-center gap-6 text-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  <Atom className="h-3.5 w-3.5 text-sky-400" />
                  CERN AI Lab
                </div>
                <p className="mt-3 max-w-2xl text-sm text-slate-400">
                  Built for Erasmus Mundus Masters in Data Science &amp; AI -
                  Demonstrates research readiness in handling large-scale
                  scientific data
                </p>
              </div>

              <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                <a
                  href="https://github.com/kakarshoaibkhan5/my-portfolio-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#A78BFA] px-5 py-3 text-sm font-semibold text-[#0B1224] shadow-[0_16px_44px_-18px_rgba(56,189,248,0.8)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Github className="h-4 w-4" />
                  View Source Code
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <a
                  href="https://opendata.cern.ch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/40 hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                  View CERN Open Data Portal
                </a>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/40 hover:text-white"
                >
                  <Home className="h-4 w-4" />
                  Back to Home
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-white/10 pt-5 text-[10px] text-slate-500">
                <span>Shoaib Ur Rehman · BS Physics → AI</span>
                <span className="hidden h-3 w-px bg-white/10 sm:block" />
                <span>Python · Pandas · Scikit-learn · Chart.js</span>
                <span className="hidden h-3 w-px bg-white/10 sm:block" />
                <span>Illustrative sample data</span>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  )
}
