"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Leaf, ArrowRight } from "lucide-react"

const remedies = [
  {
    id: 1,
    name: "Turmeric",
    benefits: "Anti-inflammatory, Joint Pain Relief",
    description: "A powerful natural anti-inflammatory that helps reduce joint pain and improve overall health.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%27%C3%A9cran%202025-05-13%20143127-BRksvgdLzrgTsRYVNbwuvqcOD0NpOA.png",
    color: "from-amber-400 to-amber-600",
  },
  {
    id: 2,
    name: "Ginger",
    benefits: "Digestive Health, Immune Support",
    description: "Helps with digestion, reduces nausea, and provides immune system support.",
    image: "/placeholder.svg?height=300&width=300",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    id: 3,
    name: "Lavender",
    benefits: "Stress Relief, Better Sleep",
    description: "Promotes relaxation, reduces anxiety, and helps improve sleep quality.",
    image: "/placeholder.svg?height=300&width=300",
    color: "from-purple-400 to-purple-600",
  },
  {
    id: 4,
    name: "Aloe Vera",
    benefits: "Skin Health, Wound Healing",
    description: "Soothes skin irritations, promotes wound healing, and has anti-inflammatory properties.",
    image: "/placeholder.svg?height=300&width=300",
    color: "from-green-400 to-green-600",
  },
]

export default function NaturalRemediesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeRemedy, setActiveRemedy] = useState(remedies[0])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="remedies" className="w-full py-24 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full -mr-32 -mt-32 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-100 rounded-full -ml-24 -mb-24 opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-2xl transform rotate-3 shadow-lg">
              <Leaf className="h-10 w-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800 leading-tight">
            Natural <span className="text-green-600">Remedies</span> Database
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the healing power of nature with our extensive collection of natural remedies and their benefits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-1 space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {remedies.map((remedy) => (
              <div
                key={remedy.id}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeRemedy.id === remedy.id
                    ? "bg-white shadow-lg border-l-4 border-green-500"
                    : "bg-gray-50 hover:bg-white hover:shadow-md"
                }`}
                onClick={() => setActiveRemedy(remedy)}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                    <Image
                      src={remedy.image || "/placeholder.svg"}
                      alt={remedy.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{remedy.name}</h3>
                    <p className="text-sm text-gray-600">{remedy.benefits}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="h-64 relative">
              <Image
                src={activeRemedy.image || "/placeholder.svg"}
                alt={activeRemedy.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-2 inline-block">
                    Natural Remedy
                  </span>
                  <h3 className="text-3xl font-bold text-white mt-2">{activeRemedy.name}</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Benefits</h4>
                <p className="text-gray-600">{activeRemedy.benefits}</p>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Description</h4>
                <p className="text-gray-600">{activeRemedy.description}</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${activeRemedy.color} flex items-center justify-center mr-3`}
                  >
                    <Leaf className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm text-gray-600">Recommended by our AI</span>
                </div>
                <Button className="bg-green-600 hover:bg-green-700 text-white group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-6 py-2 rounded-lg">
            Explore All Natural Remedies
          </Button>
        </div>
      </div>
    </section>
  )
}
