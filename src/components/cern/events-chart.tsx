"use client"

import { Line } from "react-chartjs-2"
import type { ChartData, ChartOptions } from "chart.js"
import { AURORA, legendStyle, tooltipStyle } from "./chart-theme"

const labels = Array.from({ length: 24 }, (_, hour) => {
  const h = ((hour + 8) % 24).toString().padStart(2, "0")
  return `${h}:00`
})

const eventsPerMinute = [
  781, 812, 846, 803, 875, 921, 958, 1002, 987, 1046, 1091, 1028, 972, 1015,
  1063, 1120, 1088, 1042, 997, 951, 903, 862, 824, 793,
]

const higgsCandidates = [
  46, 51, 49, 55, 58, 63, 67, 71, 69, 75, 79, 73, 68, 72, 77, 84, 80, 74, 70,
  66, 61, 57, 53, 49,
]

const data: ChartData<"line"> = {
  labels,
  datasets: [
    {
      label: "Collision events / min",
      data: eventsPerMinute,
      borderColor: AURORA.sky,
      borderWidth: 2.5,
      pointRadius: 0,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 2,
      pointHoverBackgroundColor: "#0B1224",
      pointHoverBorderColor: AURORA.sky,
      tension: 0.38,
      fill: true,
      backgroundColor: (context) => {
        const { chart } = context
        const { ctx, chartArea } = chart
        if (!chartArea) return "rgba(56, 189, 248, 0.12)"
        const gradient = ctx.createLinearGradient(
          0,
          chartArea.top,
          0,
          chartArea.bottom
        )
        gradient.addColorStop(0, "rgba(56, 189, 248, 0.38)")
        gradient.addColorStop(0.6, "rgba(56, 189, 248, 0.10)")
        gradient.addColorStop(1, "rgba(56, 189, 248, 0)")
        return gradient
      },
    },
    {
      label: "Higgs candidates",
      data: higgsCandidates,
      yAxisID: "y1",
      borderColor: AURORA.violet,
      borderWidth: 2,
      borderDash: [5, 4],
      pointRadius: 0,
      pointHoverRadius: 4,
      pointHoverBackgroundColor: AURORA.violet,
      tension: 0.38,
      fill: false,
    },
  ],
}

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: { mode: "index", intersect: false },
  animation: { duration: 1000, easing: "easeOutQuart" },
  plugins: {
    legend: legendStyle,
    tooltip: {
      ...tooltipStyle,
      callbacks: {
        title: (items) => `Run window · ${items[0]?.label ?? ""}`,
        label: (context) =>
          ` ${context.dataset.label}: ${Number(
            context.parsed.y
          ).toLocaleString()}`,
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
        maxTicksLimit: 7,
      },
      title: {
        display: true,
        text: "Time (UTC)",
        color: AURORA.muted,
        font: { size: 10 },
      },
    },
    y: {
      beginAtZero: false,
      suggestedMin: 700,
      suggestedMax: 1200,
      grid: { color: AURORA.grid },
      border: { display: false },
      ticks: {
        color: AURORA.axis,
        font: { size: 10 },
        maxTicksLimit: 5,
        callback: (value) => Number(value).toLocaleString(),
      },
      title: {
        display: true,
        text: "Events / min",
        color: AURORA.muted,
        font: { size: 10 },
      },
    },
    y1: {
      position: "right",
      beginAtZero: true,
      suggestedMax: 100,
      grid: { display: false },
      border: { display: false },
      ticks: {
        color: "rgba(167, 139, 250, 0.8)",
        font: { size: 9 },
        maxTicksLimit: 4,
        stepSize: 25,
      },
      title: {
        display: false,
        text: "Candidates",
      },
    },
  },
}

export function EventsTimelineChart() {
  return (
    <div className="h-[300px] w-full sm:h-[330px]">
      <Line data={data} options={options} />
    </div>
  )
}
