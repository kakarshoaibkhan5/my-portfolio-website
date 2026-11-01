"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Atom,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Code2,
  ExternalLink,
  GraduationCap,
  Heart,
  Languages,
  Lightbulb,
  MessageCircle,
  Orbit,
  Play,
  Quote,
  Sparkles,
  Star,
  Users,
  Waves,
  Zap,
} from "lucide-react"
import { AiChat } from "@/components/physics-seekho/ai-chat"
import { Counter } from "@/components/physics-seekho/counter"
import {
  categories,
  lessons,
  type CategoryId,
} from "@/components/physics-seekho/lesson-data"

const categoryIcons = {
  mechanics: Orbit,
  electromagnetism: Zap,
  modern: Atom,
  quantum: Waves,
} as const

const categoryAccents = {
  mechanics: "from-[#38BDF8] to-[#0EA5E9]",
  electromagnetism: "from-[#A78BFA] to-[#7C3AED]",
  modern: "from-[#FBBF24] to-[#F97316]",
  quantum: "from-[#F472B6] to-[#A78BFA]",
} as const

const heroBadges = [
  { icon: Users, label: "500+ Students Helped" },
  { icon: Heart, label: "100% Free" },
  { icon: GraduationCap, label: "Built by Shoaib Ur Rehman" },
  { icon: Sparkles, label: "Social Impact Project" },
]

const impactStats = [
  {
    value: 500,
    suffix: "+",
    label: "Questions Answered",
    urdu: "سوالات کے جوابات",
    icon: MessageCircle,
  },
  {
    value: 4,
    suffix: "",
    label: "Major Topics Covered",
    urdu: "بڑے موضوعات",
    icon: BookOpen,
  },
  {
    value: 2,
    suffix: "",
    label: "Languages (Urdu + English)",
    urdu: "اردو + انگریزی",
    icon: Languages,
  },
]

const techStack = ["Next.js 15", "Gemini API", "Tailwind CSS", "Framer Motion"]

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55 },
}

export default function PhysicsSeekhoPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId | "all">(
    "all",
  )

  function toggleCategory(category: CategoryId) {
    setActiveCategory((current) => (current === category ? "all" : category))
  }

  return (
    <div className="ps-root -mt-16 pt-16">
      {/* Ambient aurora ------------------------------------------------------ */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ps-blob -left-24 top-10 h-72 w-72 bg-[#38BDF8]/20" />
        <div className="ps-blob ps-blob-slow -right-20 top-24 h-80 w-80 bg-[#A78BFA]/20" />
        <div className="ps-blob left-1/3 top-[720px] h-72 w-72 bg-[#F59E0B]/10" />
        <div className="ps-blob ps-blob-slow -right-24 top-[1350px] h-80 w-80 bg-[#F472B6]/10" />
        <div className="ps-blob -left-20 top-[2100px] h-72 w-72 bg-[#38BDF8]/10" />
      </div>

      {/* Hero ---------------------------------------------------------------- */}
      <section className="relative px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FBBF24]/25 bg-[#FBBF24]/[0.07] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FCD34D]">
              <Heart className="h-3.5 w-3.5" />
              Social impact · Free for students
            </span>

            <h1
              dir="rtl"
              className="ps-urdu mt-5 text-[2.15rem] font-semibold leading-[1.7] tracking-tight text-white sm:text-[2.75rem] lg:text-[3.35rem]"
            >
              فزکس اب مشکل نہیں
              <span className="ps-gradient-text mt-1 block sm:mt-2">
                AI سے سیکھو
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base lg:mx-0 lg:text-lg">
              An AI Tutor Built for FSc, BS Physics Students of Pakistan
              <span className="mx-2 hidden text-slate-600 sm:inline">|</span>
              <span className="block sm:inline">Urdu + English</span>
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {heroBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-[10.5px] font-medium text-slate-300 backdrop-blur-sm sm:text-[11px]"
                >
                  <badge.icon className="h-3.5 w-3.5 text-[#7DD3FC]" />
                  {badge.label}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#ai-tutor"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#A78BFA] px-6 py-3.5 text-sm font-semibold text-[#06101F] shadow-[0_18px_50px_-20px_rgba(56,189,248,0.85)] transition hover:-translate-y-0.5 hover:brightness-110"
              >
                <Sparkles className="h-4 w-4" />
                Ask Physics Seekho AI
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#story"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08]"
              >
                Read my story
              </a>
            </div>
          </motion.div>

          {/* Counter card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.65 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div
              aria-hidden
              className="absolute -top-5 left-5 z-10 hidden -rotate-6 rounded-xl border border-white/10 bg-[#0B1224]/70 px-3.5 py-2 font-mono text-xs text-[#7DD3FC] shadow-2xl backdrop-blur-md sm:block"
            >
              F = ma
            </div>
            <div
              aria-hidden
              className="absolute -bottom-5 right-5 z-10 hidden rotate-6 rounded-xl border border-[#FBBF24]/25 bg-[#160F2E]/80 px-3.5 py-2 font-mono text-xs text-[#FCD34D] shadow-2xl backdrop-blur-md sm:block"
            >
              E = hf
            </div>

            <div className="ps-glass relative overflow-hidden rounded-[26px] p-6 sm:p-7">
              <div
                aria-hidden
                className="absolute -right-14 -top-16 h-48 w-48 rounded-full bg-[#A78BFA]/25 blur-3xl"
              />
              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Students helped
                  </p>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-2.5 py-1 text-[10px] font-medium text-emerald-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    Growing
                  </span>
                </div>

                <div className="mt-2 flex items-end gap-1">
                  <span className="ps-gradient-text text-6xl font-extrabold tracking-tight sm:text-7xl">
                    <Counter value={500} duration={1800} />
                  </span>
                  <span className="ps-gradient-text mb-2 text-3xl font-bold">
                    +
                  </span>
                </div>

                <p
                  dir="rtl"
                  className="ps-urdu mt-1 text-right text-sm leading-[2] text-slate-400"
                >
                  پاکستان بھر کے طلباء کے لیے
                </p>

                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.035] px-3 py-2.5">
                    <p className="text-lg font-bold text-white">4</p>
                    <p className="text-[10px] text-slate-400">Core topics</p>
                  </div>
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.035] px-3 py-2.5">
                    <p className="text-lg font-bold text-white">2</p>
                    <p className="text-[10px] text-slate-400">Languages</p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="mb-1.5 flex items-center justify-between text-[10px] text-slate-500">
                    <span>Free access for every student</span>
                    <span>100%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.6, duration: 1.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#38BDF8] to-[#A78BFA]"
                    />
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-white/[0.07] pt-4">
                  <div className="flex -space-x-2">
                    {["A", "F", "S", "M"].map((letter, index) => (
                      <span
                        key={letter}
                        className="grid h-7 w-7 place-items-center rounded-full border-2 border-[#0D1330] bg-gradient-to-br from-[#1E3A5F] to-[#3B1D6E] text-[9px] font-bold text-white"
                        style={{ zIndex: 4 - index }}
                      >
                        {letter}
                      </span>
                    ))}
                  </div>
                  <p className="text-[10px] leading-snug text-slate-400">
                    FSc &amp; BS Physics students across Pakistan
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Chat ------------------------------------------------------------- */}
      <section
        id="ai-tutor"
        className="relative scroll-mt-24 px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <motion.div {...fadeUp} className="mb-7 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/25 bg-[#38BDF8]/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7DD3FC]">
              <Sparkles className="h-3.5 w-3.5" />
              The main feature
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Ask anything. Learn in{" "}
              <span className="ps-gradient-text">Urdu + English.</span>
            </h2>
            <p
              dir="rtl"
              className="ps-urdu mt-2 text-sm leading-[2.1] text-slate-400 sm:text-base"
            >
              کوئی بھی فزکس کا سوال پوچھیں — جواب اردو، English، formula اور
              real-life example کے ساتھ
            </p>
            <p className="mx-auto mt-2 max-w-xl text-xs text-slate-500 sm:text-sm">
              Click an example question or type your own. This is a live demo
              with sample responses — Gemini API integration is the next step.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <AiChat
              activeCategory={activeCategory}
              onClearCategory={() => setActiveCategory("all")}
            />
          </motion.div>
        </div>
      </section>

      {/* Categories ---------------------------------------------------------- */}
      <section
        id="topics"
        className="relative scroll-mt-24 px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="mb-8 text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C4B5FD]">
              4 major topics
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Choose a topic to explore
            </h2>
            <p
              dir="rtl"
              className="ps-urdu mt-2 text-sm leading-[2.1] text-slate-400"
            >
              اپنا موضوع منتخب کریں — نیچے دیے گئے سوالات اسی موضوع کے مطابق
              بدل جائیں گے
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => {
              const Icon = categoryIcons[category.id]
              const isActive = activeCategory === category.id
              const questionCount = lessons.filter(
                (lesson) => lesson.category === category.id,
              ).length

              return (
                <motion.button
                  key={category.id}
                  type="button"
                  onClick={() => toggleCategory(category.id)}
                  aria-pressed={isActive}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: index * 0.07, duration: 0.5 }}
                  className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? "border-[#38BDF8]/50 bg-[#38BDF8]/[0.09] shadow-[0_20px_60px_-35px_rgba(56,189,248,0.9)]"
                      : "border-white/[0.09] bg-white/[0.035] hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]"
                  }`}
                >
                  <div
                    aria-hidden
                    className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${categoryAccents[category.id]} opacity-15 blur-2xl transition group-hover:opacity-30`}
                  />
                  <div className="relative flex items-start justify-between gap-2">
                    <span
                      className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${categoryAccents[category.id]} text-[#071021] shadow-lg`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    {isActive ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#38BDF8]/15 px-2 py-1 text-[9px] font-semibold text-[#7DD3FC]">
                        <Check className="h-3 w-3" /> Active
                      </span>
                    ) : (
                      <span className="text-[9px] font-medium text-slate-500">
                        {questionCount} questions
                      </span>
                    )}
                  </div>

                  <h3 className="relative mt-4 text-sm font-semibold text-white">
                    {category.name}
                  </h3>
                  <p
                    dir="rtl"
                    className="ps-urdu relative mt-0.5 text-right text-[13px] leading-[2] text-slate-400"
                  >
                    {category.urdu}
                  </p>
                  <p className="relative mt-1 text-[10px] text-slate-500">
                    {category.blurb}
                  </p>
                </motion.button>
              )
            })}
          </div>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`rounded-full border px-3.5 py-1.5 text-[11px] font-medium transition ${
                activeCategory === "all"
                  ? "border-[#38BDF8]/40 bg-[#38BDF8]/10 text-[#7DD3FC]"
                  : "border-white/10 bg-white/[0.03] text-slate-400 hover:text-white"
              }`}
            >
              All topics
            </button>
            <span className="text-[10px] text-slate-500">
              {activeCategory === "all"
                ? `${lessons.length} example questions`
                : `Filtering ${lessons.filter((lesson) => lesson.category === activeCategory).length} questions`}
            </span>
          </div>
        </div>
      </section>

      {/* My Story ------------------------------------------------------------ */}
      <section
        id="story"
        className="relative scroll-mt-24 px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-[28px] border border-[#FBBF24]/20 bg-gradient-to-br from-[#F59E0B]/[0.08] via-white/[0.035] to-[#A78BFA]/[0.07] p-6 shadow-[0_30px_100px_-50px_rgba(251,191,36,0.45)] backdrop-blur-xl sm:p-9"
          >
            <div
              aria-hidden
              className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-[#F59E0B]/20 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-20 -right-10 h-52 w-52 rounded-full bg-[#A78BFA]/20 blur-3xl"
            />

            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#FBBF24]/25 bg-[#FBBF24]/[0.08] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FCD34D]">
                  <Quote className="h-3.5 w-3.5" />
                  Why I built this
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-medium text-slate-300">
                  <GraduationCap className="h-3.5 w-3.5 text-[#7DD3FC]" />
                  Erasmus Mundus · Social Impact
                </span>
              </div>

              <div className="mt-6 flex items-start gap-4 sm:gap-5">
                <div className="hidden shrink-0 sm:block">
                  <div className="rounded-full bg-gradient-to-br from-[#FBBF24] via-[#F472B6] to-[#A78BFA] p-[2px] shadow-[0_0_35px_-8px_rgba(251,191,36,0.8)]">
                    <img
                      src="/shoaib-profile.jpg"
                      alt="Shoaib Ur Rehman"
                      className="h-16 w-16 rounded-full object-cover"
                    />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <h2
                    dir="rtl"
                    className="ps-urdu text-right text-xl leading-[1.9] text-white sm:text-2xl"
                  >
                    میں نے یہ کیوں بنایا؟ - My Story
                  </h2>

                  <p
                    dir="rtl"
                    className="ps-urdu mt-4 text-right text-[15px] leading-[2.35] text-slate-200 sm:text-base"
                  >
                    جب میں BS Physics کر رہا تھا تو مجھے بہت مشکل ہوئی کیونکہ
                    انٹرنیٹ پر اچھی وضاحت اردو میں نہیں ملتی تھی۔ میں نے سوچا کہ
                    میرے جیسے ہزاروں پاکستانی طلباء بھی اسی مشکل کا سامنا کر رہے
                    ہیں۔ اس لیے میں نے Physics Seekho بنایا - ایک فری AI ٹیوٹر جو
                    فزکس کو آسان اردو میں سمجھاتا ہے۔ میرا مشن ہے کہ پاکستان کے
                    ہر طالب علم کو فزکس آسان لگے۔ یہ پروجیکٹ میری ریسرچ کے ساتھ
                    ساتھ سوشل امپیکٹ کو بھی دکھاتا ہے جو Erasmus Mundus اسکالرشپ
                    کے لیے بہت ضروری ہے۔
                  </p>

                  <div className="mt-5 rounded-xl border-l-2 border-[#FBBF24]/60 bg-[#FBBF24]/[0.05] px-4 py-3">
                    <p className="text-[12.5px] leading-relaxed text-slate-300 sm:text-sm">
                      I built this because I struggled in BS Physics due to lack
                      of resources in Urdu. My mission is to uplift Pakistani
                      students.
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {[
                      "Free forever",
                      "Urdu-first explanations",
                      "Built for Pakistani students",
                    ].map((value) => (
                      <span
                        key={value}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] text-slate-300"
                      >
                        <Check className="h-3 w-3 text-emerald-400" />
                        {value}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 flex items-center gap-2 text-[11px] font-medium text-[#FCD34D]">
                    <span className="h-px w-6 bg-[#FBBF24]/50" />
                    Shoaib Ur Rehman · BS Physics + AI Developer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact -------------------------------------------------------------- */}
      <section
        id="impact"
        className="relative scroll-mt-24 px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="mb-8 text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7DD3FC]">
              Impact so far
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Small steps. Real student impact.
            </h2>
            <p
              dir="rtl"
              className="ps-urdu mt-2 text-sm leading-[2.1] text-slate-400"
            >
              ایک طالب علم، ایک سوال، ایک آسان جواب — یہی سفر شروع ہوا ہے
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="ps-glass group relative overflow-hidden rounded-2xl p-5 text-center transition hover:-translate-y-1 sm:p-6"
              >
                <div
                  aria-hidden
                  className="absolute left-1/2 top-0 h-24 w-40 -translate-x-1/2 rounded-full bg-[#38BDF8]/10 blur-3xl transition group-hover:bg-[#38BDF8]/20"
                />
                <span className="relative mx-auto grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-[#38BDF8]/15 to-[#A78BFA]/15 text-[#7DD3FC]">
                  <stat.icon className="h-5 w-5" />
                </span>
                <p className="ps-gradient-text relative mt-3 text-3xl font-extrabold sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="relative mt-1 text-xs font-semibold text-slate-200 sm:text-sm">
                  {stat.label}
                </p>
                <p
                  dir="rtl"
                  className="ps-urdu relative mt-0.5 text-[11px] leading-[2] text-slate-500"
                >
                  {stat.urdu}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp}
            className="ps-glass-soft relative mt-4 overflow-hidden rounded-2xl p-6 sm:p-8"
          >
            <div
              aria-hidden
              className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-[#A78BFA]/15 blur-3xl"
            />
            <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <div className="mb-3 flex items-center gap-1 text-[#FBBF24]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-base font-medium leading-relaxed text-slate-200 sm:text-lg">
                  &ldquo;Ab physics samajh aati hai&rdquo;
                </blockquote>
                <p
                  dir="rtl"
                  className="ps-urdu mt-2 text-right text-[13px] leading-[2] text-slate-400 sm:text-right"
                >
                  اب فزکس سمجھ آتی ہے — الحمدللہ
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#38BDF8] to-[#A78BFA] text-[11px] font-bold text-[#071021]">
                    FS
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-white">
                      FSc student from Lahore
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Testimonial placeholder · real student stories coming soon
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden h-16 w-px bg-white/10 sm:block" />

              <div className="flex items-center gap-2 rounded-xl border border-[#FBBF24]/20 bg-[#FBBF24]/[0.06] px-4 py-3">
                <Lightbulb className="h-5 w-5 text-[#FCD34D]" />
                <div>
                  <p className="text-[11px] font-semibold text-[#FDE68A]">
                    Mission
                  </p>
                  <p className="text-[10px] text-slate-400">
                    Make physics easy for every student in Pakistan.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer -------------------------------------------------------------- */}
      <footer className="relative border-t border-white/[0.07] px-4 pb-10 pt-12 sm:px-6 sm:pb-14 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/25 bg-[#38BDF8]/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7DD3FC]">
              <Code2 className="h-3.5 w-3.5" />
              Built with purpose
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Explore Physics Seekho
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-400">
              A free AI tutor for Pakistani students — part of my mission to
              make physics accessible in Urdu.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-2.5 sm:flex-row sm:flex-wrap">
              <a
                href="https://github.com/kakarshoaibkhan5/my-portfolio-website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#A78BFA] px-5 py-3 text-sm font-semibold text-[#06101F] shadow-[0_18px_45px_-22px_rgba(56,189,248,0.9)] transition hover:-translate-y-0.5 hover:brightness-110"
              >
                <Code2 className="h-4 w-4" />
                View Source Code
                <ExternalLink className="h-3.5 w-3.5 opacity-70" />
              </a>
              <a
                href="#ai-tutor"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08]"
              >
                <Play className="h-4 w-4" />
                Try Live Demo
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-300 transition hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Tech stack
              </span>
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mx-auto mt-8 max-w-2xl border-t border-white/[0.07] pt-5">
              <p className="flex items-center justify-center gap-1.5 text-[11px] leading-relaxed text-slate-500">
                <Heart className="h-3.5 w-3.5 shrink-0 fill-[#F472B6] text-[#F472B6]" />
                Built for Social Impact - Part of my mission to make Physics
                accessible in Pakistan
                <span className="hidden sm:inline">|</span>
                <span className="block text-[10px] text-slate-600 sm:inline">
                  For European Masters Scholarship Application
                </span>
              </p>
              <p className="mt-3 text-[10px] text-slate-600">
                © {new Date().getFullYear()} Shoaib Ur Rehman · Physics Seekho
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
