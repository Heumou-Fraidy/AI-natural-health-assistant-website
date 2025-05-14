"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const articles = [
  {
    id: 1,
    title: "New Study: Turmeric Effective for Joint Pain Relief",
    excerpt:
      "A recent study published in the Journal of Natural Medicine has found that turmeric extract is as effective as conventional treatments for joint pain relief.",
    category: "Remedies",
    author: "Dr. Ngono",
    time: "5 hours ago",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%27%C3%A9cran%202025-05-13%20143127-BRksvgdLzrgTsRYVNbwuvqcOD0NpOA.png",
  },
  {
    id: 2,
    title: "Traditional African Plant Shows Promise Against Diabetes",
    excerpt:
      "Researchers have discovered that a traditional African plant commonly used in folk medicine contains compounds that may help regulate blood sugar levels.",
    category: "Research",
    author: "Dr. Magne",
    time: "Yesterday",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "5 Natural Ways to Boost Your Immune System",
    excerpt:
      "Discover simple, natural methods to strengthen your body's defenses and maintain optimal health throughout the year.",
    category: "Tips",
    author: "Dr. Sandra",
    time: "2 days ago",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function NewsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="news" className="w-full py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-green-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center mb-12">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-800"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
            transition={{ duration: 0.8 }}
          >
            Health News & <span className="text-green-600">Tips</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <Button variant="ghost" className="text-green-600 hover:text-green-700 flex items-center group">
              View All
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="mb-3 flex justify-between items-center">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.time}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">By {article.author}</span>
                  <Button variant="link" className="text-green-600 hover:text-green-700 p-0 group-hover:underline">
                    Read more
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
