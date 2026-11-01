import type { Metadata, Viewport } from "next"
import { Manrope, Noto_Nastaliq_Urdu } from "next/font/google"
import "./physics-seekho.css"

const urdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-urdu",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Physics Seekho — AI Tutor for Pakistani Students | Shoaib Ur Rehman",
  description:
    "Physics Seekho is a free AI physics tutor for FSc and BS Physics students in Pakistan. Learn concepts in simple Urdu and English with formulas, diagrams and real-life examples.",
  keywords: [
    "Physics Seekho",
    "AI tutor Pakistan",
    "FSc Physics",
    "BS Physics",
    "Urdu Physics",
    "Physics AI",
    "Shoaib Ur Rehman",
    "social impact project",
  ],
  authors: [{ name: "Shoaib Ur Rehman" }],
  openGraph: {
    title: "Physics Seekho — AI Tutor for Pakistani Students",
    description:
      "A free AI tutor that explains physics in simple Urdu + English. Built by Shoaib Ur Rehman as a social impact project.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0B1224",
}

export default function PhysicsSeekhoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${urdu.variable} ${manrope.variable}`}>{children}</div>
  )
}
