"use client"

import { useEffect, useState } from "react"
import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  color: string
  delay?: number
}

export default function FeatureCard({ icon, title, description, color, delay = 0 }: FeatureCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-500 transform hover:-translate-y-2 group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className="mb-6">
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300`}
        >
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-6 w-1/3 h-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full group-hover:w-full transition-all duration-300"></div>
    </motion.div>
  )
}
