"use client"

import { Doughnut } from "react-chartjs-2"
import type { ChartData, ChartOptions } from "chart.js"
import { tooltipStyle } from "./chart-theme"

const data: ChartData<"doughnut"> = {
  labels: ["Higgs signal", "Background"],
  datasets: [
    {
      data: [89, 11],
      backgroundColor: ["#38BDF8", "#A78BFA"],
      hoverBackgroundColor: ["#7DD3FC", "#C4B5FD"],
      borderColor: "rgba(11, 18, 36, 0.9)",
      borderWidth: 4,
      hoverOffset: 7,
    },
  ],
}

const options: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "76%",
  animation: { animateRotate: true, duration: 1000, easing: "easeOutQuart" },
  plugins: {
    legend: { display: false },
    tooltip: {
      ...tooltipStyle,
      callbacks: {
        label: (context) => ` ${context.label}: ${context.parsed}%`,
      },
    },
  },
}

const metrics = [
  { label: "Precision", value: "64.5%" },
  { label: "Recall", value: "89.0%" },
  { label: "F1 score", value: "74.8%" },
]

export function ClassificationChart() {
  return (
    <div>
      <div className="relative mx-auto h-[190px] w-full max-w-[220px]">
        <Doughnut data={data} options={options} />
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="bg-gradient-to-r from-[#38BDF8] to-[#A78BFA] bg-clip-text text-3xl font-bold tracking-tight text-transparent">
            94%
          </span>
          <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            AI accuracy
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-5 text-[11px] text-slate-300">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#38BDF8] shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
          Higgs signal · 89%
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#A78BFA] shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
          Background · 11%
        </span>
      </div>

      <div className="mt-5 border-t border-white/10 pt-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Confusion matrix
          </span>
          <span className="text-[9px] text-slate-500">n = 10,000</span>
        </div>

        <div className="grid grid-cols-[1.15fr_1fr_1fr] gap-1.5 text-center text-[9px]">
          <div />
          <div className="pb-1 font-medium text-slate-400">Pred. Higgs</div>
          <div className="pb-1 font-medium text-slate-400">Pred. Bg</div>

          <div className="flex items-center text-left font-medium text-slate-400">
            Actual Higgs
          </div>
          <div className="rounded-md border border-sky-400/25 bg-sky-400/15 px-1 py-1.5">
            <div className="text-sm font-bold text-sky-300">890</div>
            <div className="text-[8px] uppercase tracking-wider text-sky-400/70">
              TP
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.03] px-1 py-1.5">
            <div className="text-sm font-bold text-slate-200">110</div>
            <div className="text-[8px] uppercase tracking-wider text-slate-500">
              FN
            </div>
          </div>

          <div className="flex items-center text-left font-medium text-slate-400">
            Actual Bg
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.03] px-1 py-1.5">
            <div className="text-sm font-bold text-slate-200">490</div>
            <div className="text-[8px] uppercase tracking-wider text-slate-500">
              FP
            </div>
          </div>
          <div className="rounded-md border border-violet-400/25 bg-violet-400/15 px-1 py-1.5">
            <div className="text-sm font-bold text-violet-300">8,510</div>
            <div className="text-[8px] uppercase tracking-wider text-violet-400/70">
              TN
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-md border border-white/10 bg-white/[0.03] px-1 py-1.5 text-center"
            >
              <div className="text-[11px] font-semibold text-slate-100">
                {metric.value}
              </div>
              <div className="text-[8px] uppercase tracking-wider text-slate-500">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
