"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  label: string
  suffix?: string
  icon: ReactNode
}

export default function AnimatedCounter({ value, label, suffix = "", icon }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      let start = 0
      const duration = 2000 // ms
      const step = Math.floor(duration / value)

      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start >= value) {
          clearInterval(timer)
          setCount(value)
        }
      }, step)

      return () => clearInterval(timer)
    }
  }, [isInView, value, hasAnimated])

  return (
    <div
      ref={ref}
      className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        {icon}
      </div>
      <div className="text-4xl font-bold text-gray-800 mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}
