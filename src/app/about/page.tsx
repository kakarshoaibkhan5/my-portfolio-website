"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Code2, Brain, Rocket } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            AI Developer passionate about building fast, modern solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="prose prose-lg dark:prose-invert max-w-none mb-16"
        >
          <p className="text-lg leading-relaxed">
            I&apos;m <strong>Shoaib Ur Rehman</strong>, an AI Developer based in
            Lahore, Pakistan. I leverage cutting-edge tools like OpenCode to
            build modern, responsive web applications and intelligent
            automation solutions 10x faster without compromising on quality.
          </p>
          <p className="text-lg leading-relaxed">
            Google &amp; Coursera Certified -{" "}
            <Link
              href="/certificates"
              className="font-semibold text-blue-600 dark:text-blue-400 underline underline-offset-2"
            >
              7 Verified Certificates
            </Link>{" "}
            in AI, Google Cloud, and Digital Marketing including AI Essentials,
            Productivity with AI, Innovating with Google Cloud AI, Shopify
            E-commerce, and Facebook &amp; Google Ads.
          </p>
          <p className="text-lg leading-relaxed">
            My approach combines technical expertise with efficient AI-powered
            workflows. Whether it&apos;s a complex web application, AI
            automation, or an e-commerce store that drives sales, I focus on
            clean, professional, and results-driven solutions that exceed
            expectations.
          </p>
          <p className="text-lg leading-relaxed">
            <span className="font-semibold">My Mission:</span> To help Pakistani
            small businesses grow faster with AI and modern tech.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Code2,
              title: "Fast Development",
              description: "Building 10x faster with AI-powered development tools"
            },
            {
              icon: Brain,
              title: "AI-Focused",
              description: "Specialized in AI automation and intelligent solutions"
            },
            {
              icon: Rocket,
              title: "Modern Tech",
              description: "Using cutting-edge technologies for optimal results"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="text-center p-6 rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <item.icon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400"
        >
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            Tech Stack:
          </span>{" "}
          OpenCode | Next.js | Vercel | Google AI &amp; Cloud | Shopify | Facebook
          Ads | Google Ads
        </motion.p>
      </div>
    </div>
  )
}
