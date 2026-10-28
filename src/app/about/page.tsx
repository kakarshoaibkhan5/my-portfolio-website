"use client"

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
            I'm Shoaib, an AI Developer who leverages cutting-edge tools like OpenCode to build 
            applications 10x faster without compromising on quality. I specialize in creating 
            modern, responsive web applications and intelligent automation solutions.
          </p>
          <p className="text-lg leading-relaxed">
            My approach combines technical expertise with efficient development workflows, 
            allowing me to deliver high-quality projects rapidly. Whether it's a complex web 
            application, AI-powered automation, or academic content, I focus on clean, 
            professional solutions that exceed expectations.
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
      </div>
    </div>
  )
}
