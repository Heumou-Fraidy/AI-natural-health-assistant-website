"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Yoga Instructor",
    quote:
      "The Natural Health Assistant has completely transformed how I manage my health. The AI recommendations for herbal remedies have helped me address my chronic inflammation issues naturally.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    quote:
      "As someone who works long hours at a computer, I often experience neck pain. This app helped me identify natural remedies and exercises that have significantly reduced my discomfort.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 4,
  },
  {
    id: 3,
    name: "Amara Okafor",
    role: "Teacher",
    quote:
      "I was skeptical about an AI health assistant at first, but the personalized recommendations and the ability to connect with traditional doctors have been invaluable for my family's health.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Fitness Trainer",
    quote:
      "The plant recognition feature is incredible! I can now identify medicinal plants during my hikes and learn about their benefits. This app has deepened my connection with nature and improved my wellness routine.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    id: 5,
    name: "Emma Thompson",
    role: "Nutritionist",
    quote:
      "As a nutritionist, I'm impressed by the accuracy of the AI recommendations. I often suggest this app to my clients as a complementary tool for their health journey. The natural remedy database is comprehensive and well-researched.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    id: 6,
    name: "Jamal Wilson",
    role: "Retired Athlete",
    quote:
      "After years of sports injuries, I've tried many solutions for pain management. This app introduced me to natural anti-inflammatory remedies that have been game-changers for my joint health. The AI voice assistant makes it so easy to use.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 4,
  },
]

export default function EnhancedTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="w-full py-24 bg-gradient-to-br from-purple-50 to-green-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full -mr-32 -mt-32 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-100 rounded-full -ml-24 -mb-24 opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl transform -rotate-3 shadow-lg">
              <Star className="h-10 w-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800 leading-tight">
            What Our <span className="text-purple-600">Users Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how our Natural Health Assistant is helping people improve their health naturally.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative h-[400px] md:h-[300px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-[30px] shadow-xl p-8 md:p-12 h-full transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-1/3 flex flex-col items-center justify-center mb-6 md:mb-0">
                      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-purple-100">
                        <Image
                          src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                          alt={testimonials[currentIndex].name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800 text-center">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-600 text-center">{testimonials[currentIndex].role}</p>
                      <div className="flex items-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonials[currentIndex].rating ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="md:w-2/3 flex items-center">
                      <div className="relative">
                        <Quote className="absolute -top-6 -left-6 h-12 w-12 text-purple-200" />
                        <p className="text-xl md:text-2xl text-gray-700 italic relative z-10">
                          "{testimonials[currentIndex].quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-12 space-x-6">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-purple-600 text-purple-600 hover:bg-purple-50 w-14 h-14 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-purple-600 text-purple-600 hover:bg-purple-50 w-14 h-14 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-purple-600 w-6" : "bg-gray-300 hover:bg-purple-400"
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
