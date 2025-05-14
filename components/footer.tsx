"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Leaf, Heart, Send } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-900/10 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-900/10 rounded-full -ml-48 -mb-48"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Healix</span>
            </div>
            <p className="text-gray-400 mb-6">
              Combining the wisdom of natural medicine with cutting-edge AI technology to provide personalized
              healthcare solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-700 flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-700 flex items-center justify-center transition-colors duration-300"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-700 flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-700 flex items-center justify-center transition-colors duration-300"
              >
                <Youtube className="h-5 w-5 text-white" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Heart className="h-5 w-5 text-green-500 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Phone className="h-5 w-5 text-green-500 mr-2" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5 group-hover:text-green-400 transition-colors duration-300" />
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  123 Health Avenue, Natural City, 10001
                </span>
              </li>
              <li className="flex items-center group">
                <Phone className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 group-hover:text-green-400 transition-colors duration-300" />
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  +1 (234) 567-8901
                </span>
              </li>
              <li className="flex items-center group">
                <Mail className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 group-hover:text-green-400 transition-colors duration-300" />
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  info@naturalhealth.ai
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Mail className="h-5 w-5 text-green-500 mr-2" />
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on natural health and AI advancements.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 pr-12"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Send className="h-5 w-5 text-green-500" />
                </div>
              </div>
              <Button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Healix. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "Remedies", href: "#remedies" },
  { name: "News", href: "#news" },
  { name: "FAQ", href: "#faq" },
]
