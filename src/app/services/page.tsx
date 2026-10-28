"use client"

import { motion } from "framer-motion"
import { FileText, Globe, Bot, CheckCircle } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Academic Writing",
    description: "Professional academic content tailored to your requirements.",
    features: [
      "Research papers",
      "Essays & assignments",
      "Thesis & dissertations",
      "Proper citations & formatting"
    ]
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Modern, responsive websites built for performance and conversion.",
    features: [
      "Next.js & React applications",
      "Responsive design",
      "SEO optimization",
      "Fast & scalable"
    ]
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Intelligent automation solutions to save time and boost productivity.",
    features: [
      "Workflow automation",
      "AI integrations",
      "Custom scripts & tools",
      "Process optimization"
    ]
  }
]

export default function Services() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="rounded-xl border border-gray-200 dark:border-gray-800 p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-all hover:shadow-lg"
            >
              <service.icon className="h-12 w-12 mb-6 text-blue-600" />
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
