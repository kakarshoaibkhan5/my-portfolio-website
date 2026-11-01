import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CERN AI Lab - Analyzing Real Particle Physics Data with AI",
  description:
    "CERN Data Explorer: an AI-powered Higgs boson analysis built with Python, Pandas, Scikit-learn, Next.js, and Chart.js. A physics-to-data-science research project by Shoaib Ur Rehman.",
  keywords: [
    "CERN Open Data",
    "Higgs boson",
    "AI",
    "Data Science",
    "Machine Learning",
    "Python",
    "Pandas",
    "Scikit-learn",
    "Erasmus Mundus",
    "Shoaib Ur Rehman",
  ],
  openGraph: {
    title: "CERN AI Lab - AI Powered Particle Physics",
    description:
      "Analyzing real CERN Open Data with AI: 10k+ collision events, 94% classifier accuracy, and an interactive Higgs boson explorer.",
    type: "website",
  },
}

export default function CernAiDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
