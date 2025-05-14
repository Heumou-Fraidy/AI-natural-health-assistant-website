import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="w-full min-h-[90vh] flex items-center bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
              Natural Health <span className="text-green-600">AI Assistant</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Combining the wisdom of natural medicine with cutting-edge AI technology to provide personalized
              healthcare solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-medium">
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg text-lg font-medium"
              >
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=40&width=40`}
                      alt={`User ${i}`}
                      width={40}
                      height={40}
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
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-[300px] h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-100">
                <div className="relative h-full w-full bg-green-50">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%27%C3%A9cran%202025-04-22%20141038-SUzyGvY8utrHXC1uaR3Yj0tIG2pCTB.png"
                    alt="Natural Health Assistant App"
                    width={300}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-100 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm font-medium text-purple-800">Powered by</p>
                  <p className="text-xl font-bold text-purple-600">AI Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
