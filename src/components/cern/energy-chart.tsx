"use client"

import { Bar } from "react-chartjs-2"
import type { ChartData, ChartOptions } from "chart.js"
import { AURORA, legendStyle, tooltipStyle } from "./chart-theme"

// 16 bins across the 100–160 GeV window, modelled on a Higgs → ZZ → 4ℓ search.
// Background falls smoothly; the signal forms the characteristic 125 GeV bump.
const labels = [
  "100",
  "104",
  "108",
  "112",
  "116",
  "120",
  "124",
  "128",
  "132",
  "136",
  "140",
  "144",
  "148",
  "152",
  "156",
  "160",
]

const background = [
  920, 880, 845, 810, 776, 744, 713, 684, 656, 629, 603, 578, 554, 531, 509,
  488,
]

const signal = [0, 0, 0, 0, 3, 53, 171, 116, 17, 1, 0, 0, 0, 0, 0, 0]

const data: ChartData<"bar"> = {
  labels,
  datasets: [
    {
      label: "Background (SM)",
      data: background,
      backgroundColor: AURORA.skySoft,
      hoverBackgroundColor: AURORA.sky,
      borderColor: "rgba(56, 189, 248, 0.9)",
      borderWidth: 1,
      borderRadius: 4,
      borderSkipped: false,
      barPercentage: 0.86,
      categoryPercentage: 0.76,
    },
    {
      label: "Signal (Higgs)",
      data: signal,
      backgroundColor: AURORA.violetSoft,
      hoverBackgroundColor: "#C4B5FD",
      borderColor: "rgba(196, 181, 253, 0.95)",
      borderWidth: 1,
      borderRadius: 4,
      borderSkipped: false,
      barPercentage: 0.86,
      categoryPercentage: 0.76,
    },
  ],
}

const options: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: { mode: "index", intersect: false },
  animation: { duration: 900, easing: "easeOutQuart" },
  plugins: {
    legend: legendStyle,
    tooltip: {
      ...tooltipStyle,
      callbacks: {
        title: (items) => `${items[0]?.label ?? ""} GeV`,
        label: (context) =>
          ` ${context.dataset.label}: ${Number(
            context.parsed.y
          ).toLocaleString()} events`,
      },
    },
  },
  scales: {
    x: {
      grid: { display: false },
      border: { display: false },
      ticks: {
        color: AURORA.axis,
        font: { size: 10 },
        maxRotation: 0,
        autoSkip: true,
        maxTicksLimit: 8,
      },
      title: {
        display: true,
        text: "Energy (GeV)",
        color: AURORA.muted,
        font: { size: 10 },
      },
    },
    y: {
      beginAtZero: true,
      suggestedMax: 1000,
      grid: { color: AURORA.grid },
      border: { display: false },
      ticks: {
        color: AURORA.axis,
        font: { size: 10 },
        maxTicksLimit: 6,
        callback: (value) => Number(value).toLocaleString(),
      },
      title: {
        display: true,
        text: "Events",
        color: AURORA.muted,
        font: { size: 10 },
      },
    },
  },
}

export function EnergyDistributionChart() {
  return (
    <div className="h-[300px] w-full sm:h-[330px]">
      <Bar data={data} options={options} />
    </div>
  )
}
