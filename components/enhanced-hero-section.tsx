"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Leaf, Heart, Brain, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function EnhancedHeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="w-full min-h-[100vh] flex items-center bg-gradient-to-br from-green-50 via-white to-purple-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-100 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-100 rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-yellow-100 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-blue-100 rounded-full animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="lg:w-1/2 mb-16 lg:mb-0 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 relative">
              <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                AI-Powered Healthcare
              </span>
              <div className="absolute -right-2 -top-2 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center animate-bounce">
                <Leaf className="h-3 w-3 text-purple-600" />
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-800 leading-tight">
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-green-600 to-green-700 text-transparent bg-clip-text">
                  Healix
                </span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-green-100 -z-10 transform -rotate-1"></span>
              </span>{" "}
              <br />
              <span className="text-4xl lg:text-5xl font-semibold tracking-wide font-sans">
                Natural Health Assistant
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Combining the wisdom of natural medicine with cutting-edge AI technology for personalized healthcare
              solutions.
            </p>

            <div className="flex justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-green-600 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <Button
                  variant="outline"
                  className="relative px-10 py-7 bg-white border-0 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Play className="h-5 w-5 text-white fill-current ml-1" />
                  </div>
                  <span className="bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent font-bold">
                    Watch Demo
                  </span>
                </Button>
              </motion.div>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-lg">
                    <Image
                      src={`/placeholder.svg?height=48&width=48`}
                      alt={`User ${i}`}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600">Trusted by 10,000+ users</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Floating elements */}
              <motion.div
                className="absolute -top-10 -left-10 p-4 bg-white rounded-xl shadow-xl z-20"
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Leaf className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Natural Remedies</p>
                    <p className="text-xs text-gray-500">500+ options</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -right-8 p-4 bg-white rounded-xl shadow-xl z-20"
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Brain className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">AI Powered</p>
                    <p className="text-xs text-gray-500">Smart analysis</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/3 -right-12 p-3 bg-white rounded-xl shadow-xl z-20"
                animate={{ x: [0, 10, 0], rotate: [0, 3, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-pink-600" />
                  </div>
                  <p className="text-xs font-medium text-gray-800">Wellness</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-2/3 -left-12 p-3 bg-white rounded-xl shadow-xl z-20"
                animate={{ x: [0, -10, 0], rotate: [0, -3, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4.5, ease: "easeInOut", delay: 1.5 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-xs font-medium text-gray-800">24/7 Support</p>
                </div>
              </motion.div>

              {/* Main phone mockup */}
              <div className="relative w-[320px] h-[650px]">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[40px] shadow-2xl overflow-hidden border-8 border-gray-700"
                  animate={{ rotate: [0, 2, 0, -2, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "easeInOut" }}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%27%C3%A9cran%202025-04-22%20141038-SUzyGvY8utrHXC1uaR3Yj0tIG2pCTB.png"
                    alt="Natural Health Assistant App"
                    fill
                    className="object-cover"
                  />

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent"></div>
                </motion.div>
              </div>

              {/* Background decorative circle */}
              <div className="absolute -z-10 w-[500px] h-[500px] -right-20 -bottom-20">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-green-200/30 to-purple-200/30 blur-3xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
