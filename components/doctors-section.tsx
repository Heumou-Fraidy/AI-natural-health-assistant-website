import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const doctors = [
  {
    id: 1,
    name: "Dr. Magne",
    specialty: "Herbalist",
    rating: 4.8,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%27%C3%A9cran%202025-05-13%20143143-KvAWiMcMrs4FzMO9Zu1wS84zEbntqu.png",
  },
  {
    id: 2,
    name: "Dr. Ataangana",
    specialty: "Bone Setter",
    rating: 4.7,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Dr. Sandra",
    specialty: "Dermatologist",
    rating: 4.9,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Dr. Emmanuel",
    specialty: "Nutritionist",
    rating: 4.6,
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function DoctorsSection() {
  return (
    <section id="doctors" className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Traditional Doctors</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with experienced traditional medicine practitioners who combine ancient wisdom with modern
            approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-64 relative">
                <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">{doctor.name}</h3>
                <p className="text-gray-600 mb-3">{doctor.specialty}</p>
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-700">{doctor.rating}</span>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Book Appointment</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-6 py-2 rounded-lg">
            View All Doctors
          </Button>
        </div>
      </div>
    </section>
  )
}
