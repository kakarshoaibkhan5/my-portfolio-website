"use client"

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js"

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip
)

ChartJS.defaults.color = "#94A3B8"
ChartJS.defaults.font.family = "inherit"

export const AURORA = {
  sky: "#38BDF8",
  skySoft: "rgba(56, 189, 248, 0.55)",
  violet: "#A78BFA",
  violetSoft: "rgba(167, 139, 250, 0.9)",
  ink: "#0B1224",
  grid: "rgba(148, 163, 184, 0.12)",
  axis: "#94A3B8",
  label: "#CBD5E1",
  muted: "#64748B",
} as const

export const tooltipStyle = {
  backgroundColor: "rgba(11, 18, 36, 0.96)",
  borderColor: "rgba(148, 163, 184, 0.24)",
  borderWidth: 1,
  titleColor: "#F8FAFC",
  bodyColor: "#CBD5E1",
  padding: 12,
  cornerRadius: 10,
  displayColors: true,
  boxWidth: 8,
  boxHeight: 8,
  usePointStyle: true,
} as const

export const legendStyle = {
  position: "top" as const,
  align: "end" as const,
  labels: {
    color: AURORA.label,
    usePointStyle: true,
    pointStyle: "circle" as const,
    boxWidth: 8,
    boxHeight: 8,
    padding: 14,
    font: { size: 11 },
  },
}
