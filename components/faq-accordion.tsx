"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "What is the Natural Health Assistant?",
    answer:
      "The Natural Health Assistant is an AI-powered mobile application that combines artificial intelligence with natural healthcare solutions. It provides personalized health recommendations, connects you with traditional doctors, and offers natural remedies based on your symptoms and health needs.",
  },
  {
    question: "How does the AI voice consultation work?",
    answer:
      "The AI voice consultation allows you to speak directly to our health assistant using natural language. Simply describe your symptoms or health concerns, and the AI will ask relevant follow-up questions to gather more information. Based on your responses, it generates a personalized health report and suggests appropriate natural remedies.",
  },
  {
    question: "Is my health data secure and private?",
    answer:
      "Yes, we take data privacy and security very seriously. All your health information is encrypted and stored securely. We comply with healthcare data protection regulations, and your personal information is never shared with third parties without your explicit consent.",
  },
  {
    question: "Can the app identify medicinal plants?",
    answer:
      "Yes, our app features AI-powered image recognition technology that can identify medicinal plants from photos you take. Once identified, the app provides detailed information about the plant's medicinal properties, traditional uses, and potential health benefits.",
  },
  {
    question: "How do I book an appointment with a traditional doctor?",
    answer:
      "Booking an appointment is simple. Navigate to the 'Doctors' section in the app, browse available traditional practitioners by specialty, select your preferred doctor, and choose a convenient date and time. You can opt for in-person consultations or video calls, depending on your preference and the doctor's availability.",
  },
  {
    question: "What types of natural remedies does the app recommend?",
    answer:
      "The app recommends a wide range of natural remedies including herbal preparations, dietary adjustments, lifestyle modifications, breathing exercises, meditation techniques, and traditional healing practices. All recommendations are based on scientific research and traditional knowledge.",
  },
  {
    question: "Is the Natural Health Assistant a replacement for medical care?",
    answer:
      "No, the Natural Health Assistant is designed to complement, not replace, conventional medical care. While it provides valuable natural health recommendations, it will always advise seeking professional medical attention for serious conditions. The app helps you make informed decisions about your health and provides natural support alongside conventional treatments.",
  },
]

export default function FAQAccordion() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      value={openItem || undefined}
      onValueChange={(value) => setOpenItem(value)}
    >
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <AccordionItem
            value={`item-${index}`}
            className="border border-gray-100 rounded-lg mb-4 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            <AccordionTrigger className="text-left font-medium text-gray-800 p-6 hover:bg-gray-50">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-amber-600 font-semibold">{index + 1}</span>
                </div>
                <span>{faq.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 px-6 pb-6 pt-2">
              <div className="pl-11">{faq.answer}</div>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  )
}
