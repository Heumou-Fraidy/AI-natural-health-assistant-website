import Image from "next/image"
import { ChevronRight, Check, MessageCircle, Calendar, Leaf, Brain, Activity, FileText, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import EnhancedTestimonials from "@/components/enhanced-testimonials"
import FeatureCard from "@/components/feature-card"
import FAQAccordion from "@/components/faq-accordion"
import EnhancedHeroSection from "@/components/enhanced-hero-section"
import NaturalRemediesSection from "@/components/natural-remedies-section"
import NewsSection from "@/components/news-section"
import AnimatedCounter from "@/components/animated-counter"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      {/* Hero Section */}
      <EnhancedHeroSection />

      {/* Stats Section */}
      <section className="w-full py-16 bg-gradient-to-r from-green-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter
              icon={<Heart className="h-8 w-8 text-pink-500" />}
              value={10000}
              label="Happy Users"
              suffix="+"
            />
            <AnimatedCounter
              icon={<Leaf className="h-8 w-8 text-green-500" />}
              value={500}
              label="Natural Remedies"
              suffix="+"
            />
            <AnimatedCounter
              icon={<Calendar className="h-8 w-8 text-purple-500" />}
              value={2500}
              label="Daily Consultations"
              suffix="+"
            />
            <AnimatedCounter
              icon={<MessageCircle className="h-8 w-8 text-blue-500" />}
              value={98}
              label="Satisfaction Rate"
              suffix="%"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full -mr-32 -mt-32 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-100 rounded-full -ml-24 -mb-24 opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-2xl transform rotate-3 shadow-lg">
                <Brain className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800 leading-tight">
              Revolutionizing <span className="text-green-600">Natural Healthcare</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered health assistant combines modern technology with traditional remedies to provide
              personalized healthcare solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<MessageCircle className="h-10 w-10 text-white" />}
              title="AI Voice Consultation"
              description="Interact with our AI assistant through voice commands for a natural consultation experience."
              color="from-blue-400 to-blue-600"
              delay={0.1}
            />
            <FeatureCard
              icon={<Brain className="h-10 w-10 text-white" />}
              title="Smart Symptom Checker"
              description="Describe your symptoms and receive AI-powered analysis and natural remedy suggestions."
              color="from-purple-400 to-purple-600"
              delay={0.2}
            />
            <FeatureCard
              icon={<Leaf className="h-10 w-10 text-white" />}
              title="Plant Recognition"
              description="Take photos of plants to identify their medicinal properties and health benefits."
              color="from-green-400 to-green-600"
              delay={0.3}
            />
            <FeatureCard
              icon={<Calendar className="h-10 w-10 text-white" />}
              title="Appointment Booking"
              description="Schedule consultations with traditional doctors and specialists with ease."
              color="from-amber-400 to-amber-600"
              delay={0.4}
            />
            <FeatureCard
              icon={<Activity className="h-10 w-10 text-white" />}
              title="Health Tracking"
              description="Monitor your progress and maintain a personalized health diary over time."
              color="from-pink-400 to-pink-600"
              delay={0.5}
            />
            <FeatureCard
              icon={<FileText className="h-10 w-10 text-white" />}
              title="Personalized Reports"
              description="Receive detailed health reports and tailored natural remedy recommendations."
              color="from-teal-400 to-teal-600"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="w-full py-24 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-white transform -skew-y-3"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative">
                <div className="absolute -top-6 -left-6">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Leaf sticker"
                    width={60}
                    height={60}
                    className="animate-bounce"
                  />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
                  Experience Natural Healthcare at Your Fingertips
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Our intuitive mobile application brings the power of AI and natural medicine together, providing you
                with personalized healthcare solutions wherever you are.
              </p>
              <ul className="space-y-4">
                {[
                  "24/7 AI health assistant",
                  "Voice-enabled interactions",
                  "Traditional doctor consultations",
                  "Personalized health plans",
                  "Natural remedy suggestions",
                ].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 group-hover:bg-green-200 flex items-center justify-center mr-3 transition-colors duration-300">
                      <Check className="h-4 w-4 text-green-600" />
                    </span>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Download App
                  <ChevronRight className="ml-2 h-5 w-5 animate-pulse" />
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-100 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-yellow-100 rounded-full animate-pulse delay-300"></div>

                <div className="relative w-[350px] h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=350&width=350"
                    alt="Doctor with patient"
                    width={350}
                    height={350}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-gray-800 font-medium">
                      Connect with traditional doctors for personalized consultations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Natural Remedies Section (replacing Doctors Section) */}
      <NaturalRemediesSection />

      {/* Health News Section */}
      <NewsSection />

      {/* How It Works Section */}
      <section className="w-full py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-green-50 rounded-full -mr-36 -mt-36"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-50 rounded-full -ml-36 -mb-36"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl transform -rotate-3 shadow-lg">
                <Activity className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800 leading-tight">
              How It <span className="text-purple-600">Works</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered health assistant makes natural healthcare simple and accessible in just a few steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-3">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Describe Your Symptoms</h3>
              <p className="text-gray-600">
                Use voice or text to tell our AI assistant about your health concerns and symptoms.
              </p>
              <div className="mt-6">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Voice interaction"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 md:translate-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Receive AI Analysis</h3>
              <p className="text-gray-600">
                Our AI analyzes your symptoms and provides personalized health insights and recommendations.
              </p>
              <div className="mt-6">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="AI analysis"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-3">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Get Natural Solutions</h3>
              <p className="text-gray-600">
                Discover natural remedies and treatment options tailored to your specific health needs.
              </p>
              <div className="mt-6">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Natural solutions"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <EnhancedTestimonials />

      {/* FAQ Section */}
      <section id="faq" className="w-full py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-50 to-white"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl transform rotate-3 shadow-lg">
                <MessageCircle className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800 leading-tight">
              Frequently Asked <span className="text-amber-600">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our Natural Health Assistant.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </main>
  )
}
