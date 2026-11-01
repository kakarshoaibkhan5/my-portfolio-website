"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowUpRight,
  Atom,
  BookOpen,
  Check,
  Languages,
  Send,
  Sparkles,
  Wand2,
} from "lucide-react"
import { findLesson, lessons, type CategoryId, type Lesson } from "./lesson-data"
import { LessonDiagram } from "./lesson-diagram"

type ChatMessage =
  | { id: string; role: "user"; text: string }
  | { id: string; role: "assistant"; text: string; variant: "welcome" | "fallback" }
  | { id: string; role: "assistant"; lesson: Lesson }

type AiChatProps = {
  activeCategory: CategoryId | "all"
  onClearCategory: () => void
}

const welcomeMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  variant: "welcome",
  text: "السلام علیکم! میں Physics Seekho AI ہوں۔ آپ فزکس کا کوئی بھی سوال اردو یا English میں پوچھ سکتے ہیں۔ نیچے دیے گئے سوالات پر کلک کر کے شروع کریں۔",
}

function MessageAvatar() {
  return (
    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#38BDF8] to-[#A78BFA] text-[#071021] shadow-[0_0_22px_-6px_rgba(56,189,248,0.8)]">
      <Atom className="h-4 w-4" />
    </span>
  )
}

function SectionLabel({
  children,
  tone = "sky",
}: {
  children: React.ReactNode
  tone?: "sky" | "violet" | "warm"
}) {
  const tones = {
    sky: "text-[#7DD3FC]",
    violet: "text-[#C4B5FD]",
    warm: "text-[#FCD34D]",
  }
  return (
    <p
      className={`mb-1.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] ${tones[tone]}`}
    >
      {children}
    </p>
  )
}

function LessonAnswer({ lesson }: { lesson: Lesson }) {
  return (
    <div className="space-y-4">
      <div>
        <h4 dir="rtl" className="ps-urdu text-lg leading-[1.9] text-white">
          {lesson.titleUrdu}
        </h4>
        <p className="mt-0.5 text-xs font-medium text-slate-400">
          {lesson.titleEnglish}
        </p>
      </div>

      <div>
        <SectionLabel>
          <Languages className="h-3 w-3" /> آسان اردو میں
        </SectionLabel>
        <p
          dir="rtl"
          className="ps-urdu text-right text-[14px] leading-[2.15] text-slate-200 sm:text-[15px]"
        >
          {lesson.answerUrdu}
        </p>
      </div>

      <div>
        <SectionLabel tone="violet">
          <BookOpen className="h-3 w-3" /> In simple English
        </SectionLabel>
        <p className="text-[13px] leading-relaxed text-slate-300 sm:text-sm">
          {lesson.answerEnglish}
        </p>
      </div>

      <div className="rounded-xl border border-[#38BDF8]/25 bg-[#38BDF8]/[0.07] px-3.5 py-3">
        <SectionLabel>
          <Sparkles className="h-3 w-3" /> Formula
        </SectionLabel>
        <p className="overflow-x-auto whitespace-nowrap font-mono text-[15px] font-semibold text-white sm:text-base">
          {lesson.formula}
        </p>
        <p className="mt-1 text-[10px] leading-relaxed text-slate-400">
          {lesson.formulaNote}
        </p>
      </div>

      <div className="rounded-xl border border-[#FBBF24]/25 bg-[#FBBF24]/[0.06] px-3.5 py-3">
        <SectionLabel tone="warm">
          <Wand2 className="h-3 w-3" /> Real life example
        </SectionLabel>
        <p
          dir="rtl"
          className="ps-urdu text-right text-[13px] leading-[2.1] text-[#FDE68A] sm:text-[14px]"
        >
          {lesson.example}
        </p>
      </div>

      <div>
        <SectionLabel tone="violet">
          <ArrowUpRight className="h-3 w-3" /> Diagram
        </SectionLabel>
        <LessonDiagram kind={lesson.diagram} />
      </div>

      <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1 border-t border-white/[0.07] pt-3 text-[10px] text-slate-500">
        <Check className="h-3 w-3 text-emerald-400" />
        Demo response · Gemini API integration placeholder
      </p>
    </div>
  )
}

export function AiChat({ activeCategory, onClearCategory }: AiChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<number | null>(null)
  const idRef = useRef(0)

  const visibleLessons = useMemo(
    () =>
      activeCategory === "all"
        ? lessons
        : lessons.filter((lesson) => lesson.category === activeCategory),
    [activeCategory],
  )

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    }
  }, [])

  useEffect(() => {
    const node = scrollRef.current
    if (!node) return
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    node.scrollTo({
      top: node.scrollHeight,
      behavior: reduceMotion ? "auto" : "smooth",
    })
  }, [messages, isTyping])

  function askQuestion(rawQuestion: string) {
    const question = rawQuestion.trim()
    if (!question || isTyping) return

    idRef.current += 1
    const userId = `user-${idRef.current}`
    setMessages((current) => [
      ...current,
      { id: userId, role: "user", text: question },
    ])
    setInput("")
    setIsTyping(true)

    // Demo tutor only. Swap this block for a Gemini API call when ready.
    const lesson = findLesson(question)

    timerRef.current = window.setTimeout(() => {
      idRef.current += 1
      const assistantId = `assistant-${idRef.current}`

      setMessages((current) => {
        if (lesson) {
          return [
            ...current,
            { id: assistantId, role: "assistant", lesson },
          ]
        }

        return [
          ...current,
          {
            id: assistantId,
            role: "assistant",
            variant: "fallback",
            text: "یہ demo ورژن ہے، اس لیے میں ابھی ہر سوال کا مکمل جواب نہیں دے سکتا۔ نیچے دیے گئے example سوالات میں سے کوئی منتخب کریں — میں اسے اردو، English، formula اور real-life example کے ساتھ سمجھاؤں گا۔ (Gemini API integration coming soon.)",
          },
        ]
      })
      setIsTyping(false)
    }, 950)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    askQuestion(input)
  }

  const activeLabel =
    activeCategory === "all"
      ? null
      : activeCategory === "mechanics"
        ? "Mechanics"
        : activeCategory === "electromagnetism"
          ? "Electromagnetism"
          : activeCategory === "modern"
            ? "Modern Physics"
            : "Quantum"

  return (
    <div className="ps-chat-shell">
      <div className="ps-chat-inner">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] px-4 py-3.5 sm:px-5">
          <div className="flex items-center gap-3">
            <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#38BDF8] to-[#A78BFA] text-[#071021] shadow-[0_0_30px_-8px_rgba(56,189,248,0.9)]">
              <Atom className="h-5 w-5" />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#0A1022] bg-emerald-400" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">
                Physics Seekho AI
              </p>
              <p className="text-[11px] text-slate-400">
                Online · Demo mode · Urdu + English
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-slate-300">
            <Sparkles className="h-3 w-3 text-[#FBBF24]" />
            Gemini API placeholder
          </span>
        </div>

        <div
          ref={scrollRef}
          className="ps-chat-scroll h-[400px] space-y-4 overflow-y-auto px-3.5 py-4 sm:h-[470px] sm:px-5 sm:py-5"
          aria-live="polite"
          aria-label="Physics Seekho AI conversation"
        >
          <AnimatePresence initial={false}>
            {messages.map((message) => {
              if (message.role === "user") {
                return (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-end"
                  >
                    <div className="max-w-[88%] rounded-2xl rounded-br-md bg-gradient-to-br from-[#38BDF8] to-[#8B5CF6] px-3.5 py-2.5 text-[13px] font-medium text-[#06101F] shadow-[0_12px_35px_-18px_rgba(56,189,248,0.9)] sm:text-sm">
                      {message.text}
                    </div>
                  </motion.div>
                )
              }

              return (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2.5"
                >
                  <MessageAvatar />
                  <div className="min-w-0 flex-1 rounded-2xl rounded-tl-md border border-white/[0.08] bg-white/[0.035] px-3.5 py-3.5 sm:px-4">
                    {"lesson" in message ? (
                      <LessonAnswer lesson={message.lesson} />
                    ) : message.variant === "welcome" ? (
                      <div className="space-y-2">
                        <p
                          dir="rtl"
                          className="ps-urdu text-right text-[14px] leading-[2.15] text-slate-200 sm:text-[15px]"
                        >
                          {message.text}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          Ask in Urdu or English — formula, concept, and a
                          real-life example every time.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <p
                          dir="rtl"
                          className="ps-urdu text-right text-[14px] leading-[2.15] text-slate-200"
                        >
                          {message.text}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          Try one of the example questions below.
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>

          {isTyping && (
            <div className="flex items-start gap-2.5">
              <MessageAvatar />
              <div className="rounded-2xl rounded-tl-md border border-white/[0.08] bg-white/[0.035] px-4 py-3.5">
                <div className="flex items-center gap-1.5" aria-label="AI is typing">
                  <span className="ps-typing-dot" />
                  <span className="ps-typing-dot [animation-delay:160ms]" />
                  <span className="ps-typing-dot [animation-delay:320ms]" />
                  <span className="ml-1.5 text-[10px] text-slate-500">
                    Soch raha hoon…
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-white/[0.07] px-3.5 pb-1 pt-3 sm:px-5">
          <div className="mb-2 flex items-center justify-between gap-2">
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
              {activeLabel ? `${activeLabel} questions` : "Try an example"}
            </p>
            {activeCategory !== "all" && (
              <button
                type="button"
                onClick={onClearCategory}
                className="text-[10px] font-medium text-[#7DD3FC] transition hover:text-white"
              >
                Show all topics
              </button>
            )}
          </div>

          <div className="ps-no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-2 sm:flex-wrap">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleLessons.map((lesson) => (
                <motion.button
                  key={lesson.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  type="button"
                  onClick={() => askQuestion(lesson.chip)}
                  disabled={isTyping}
                  className="ps-chip"
                >
                  {lesson.chip}
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          <form onSubmit={handleSubmit} className="mb-2 mt-1.5">
            <div className="ps-input-wrap">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="کوئی بھی فزکس کا سوال پوچھو... مثال: نیوٹن کا دوسرا قانون کیا ہے؟"
                aria-label="Ask a physics question"
                className="ps-chat-input"
                dir="auto"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                aria-label="Send question"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[#38BDF8] to-[#8B5CF6] text-[#06101F] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>

          <p className="pb-2 text-center text-[9px] leading-relaxed text-slate-600">
            100% free for students · Demo responses now · Gemini API integration
            coming soon
          </p>
        </div>
      </div>
    </div>
  )
}
