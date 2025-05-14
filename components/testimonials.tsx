"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Yoga Instructor",
    quote:
      "The Natural Health Assistant has completely transformed how I manage my health. The AI recommendations for herbal remedies have helped me address my chronic inflammation issues naturally.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    quote:
      "As someone who works long hours at a computer, I often experience neck pain. This app helped me identify natural remedies and exercises that have significantly reduced my discomfort.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Amara Okafor",
    role: "Teacher",
    quote:
      "I was skeptical about an AI health assistant at first, but the personalized recommendations and the ability to connect with traditional doctors have been invaluable for my family's health.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="w-full py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how our Natural Health Assistant is helping people improve their health naturally.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
            <div className="absolute top-8 left-8 text-green-100">
              <Quote className="h-16 w-16 text-green-200" />
            </div>

            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-700 mb-8 italic">"{testimonials[currentIndex].quote}"</p>

              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-green-600 text-green-600 hover:bg-green-50"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-green-600" : "bg-gray-300"}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}

            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-green-600 text-green-600 hover:bg-green-50"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
