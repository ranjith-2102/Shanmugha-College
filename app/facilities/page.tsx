import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import {
  Building,
  Wifi,
  Car,
  Utensils,
  Bed,
  BookOpen,
  Shield,
  Heart,
  Zap,
  Trees,
  Camera,
  Music,
  Dumbbell,
  Bus,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FacilitiesPage() {
  const academicFacilities = [
    {
      name: "Smart Classrooms",
      description: "Technology-enabled classrooms with interactive whiteboards and audio-visual systems",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Interactive Whiteboards", "Audio-Visual Systems", "High-Speed Internet", "Climate Control"],
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      name: "Advanced Laboratories",
      description: "State-of-the-art labs for engineering, pharmacy, nursing, and allied health sciences",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Latest Equipment", "Safety Systems", "Research Facilities", "Industry Standards"],
      icon: <Zap className="w-8 h-8" />,
    },
    {
      name: "Central Library",
      description: "Modern library with extensive collection of books, journals, and digital resources",
      image: "/placeholder.svg?height=300&width=400",
      features: ["50,000+ Books", "Digital Library", "Study Halls", "Research Sections"],
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      name: "Computer Centers",
      description: "High-performance computing facilities with latest software and hardware",
      image: "/placeholder.svg?height=300&width=400",
      features: ["500+ Workstations", "Latest Software", "High-Speed Network", "24/7 Access"],
      icon: <Zap className="w-8 h-8" />,
    },
  ]

  const campusAmenities = [
    {
      name: "Student Hostels",
      description: "Comfortable accommodation with modern amenities for outstation students",
      image: "/placeholder.svg?height=300&width=400",
      capacity: "1200 Students",
      icon: <Bed className="w-6 h-6" />,
      features: ["AC Rooms", "Wi-Fi", "Mess Facility", "Recreation Room"],
    },
    {
      name: "Dining Facilities",
      description: "Hygienic and nutritious food options with diverse menu choices",
      image: "/placeholder.svg?height=300&width=400",
      capacity: "2000 Capacity",
      icon: <Utensils className="w-6 h-6" />,
      features: ["Multi-Cuisine", "Hygienic Kitchen", "Nutritious Meals", "Special Diets"],
    },
    {
      name: "Sports Complex",
      description: "Comprehensive sports facilities for various indoor and outdoor games",
      image: "/placeholder.svg?height=300&width=400",
      capacity: "Multiple Courts",
      icon: <Dumbbell className="w-6 h-6" />,
      features: ["Cricket Ground", "Basketball Court", "Gym", "Swimming Pool"],
    },
    {
      name: "Medical Center",
      description: "24/7 medical facility with qualified doctors and emergency services",
      image: "/placeholder.svg?height=300&width=400",
      capacity: "24/7 Service",
      icon: <Heart className="w-6 h-6" />,
      features: ["Qualified Doctors", "Emergency Care", "Pharmacy", "Ambulance"],
    },
    {
      name: "Transportation",
      description: "Safe and reliable bus services connecting major areas of the city",
      image: "/placeholder.svg?height=300&width=400",
      capacity: "50+ Routes",
      icon: <Bus className="w-6 h-6" />,
      features: ["GPS Tracking", "Safe Routes", "Comfortable Buses", "Regular Service"],
    },
    {
      name: "Parking Facilities",
      description: "Secure parking spaces for students, faculty, and visitors",
      image: "/placeholder.svg?height=300&width=400",
      capacity: "1000+ Vehicles",
      icon: <Car className="w-6 h-6" />,
      features: ["CCTV Surveillance", "Covered Parking", "Two-Wheeler Section", "Visitor Parking"],
    },
  ]

  const specialFacilities = [
    {
      name: "Auditoriums",
      description: "Multiple auditoriums for events, seminars, and cultural programs",
      details: [
        "500-seat Indoor Auditorium",
        "3000-seat Outdoor Auditorium",
        "Audio-Visual Equipment",
        "Stage Facilities",
      ],
      icon: <Music className="w-8 h-8" />,
    },
    {
      name: "Innovation Labs",
      description: "Dedicated spaces for research, innovation, and startup incubation",
      details: ["Maker Space", "3D Printing", "IoT Lab", "Startup Incubator"],
      icon: <Zap className="w-8 h-8" />,
    },
    {
      name: "Green Campus",
      description: "Eco-friendly campus with sustainable practices and green initiatives",
      details: ["Solar Power", "Rainwater Harvesting", "Waste Management", "Green Buildings"],
      icon: <Trees className="w-8 h-8" />,
    },
    {
      name: "Security Systems",
      description: "Comprehensive security measures ensuring safe campus environment",
      details: ["24/7 Security", "CCTV Surveillance", "Access Control", "Emergency Response"],
      icon: <Shield className="w-8 h-8" />,
    },
  ]

  const infrastructureStats = [
    { label: "Total Campus Area", value: "50 Acres", icon: <Building className="w-6 h-6" /> },
    { label: "Academic Buildings", value: "15+", icon: <BookOpen className="w-6 h-6" /> },
    { label: "Laboratory Facilities", value: "100+", icon: <Zap className="w-6 h-6" /> },
    { label: "Hostel Capacity", value: "1200", icon: <Bed className="w-6 h-6" /> },
    { label: "Wi-Fi Coverage", value: "100%", icon: <Wifi className="w-6 h-6" /> },
    { label: "Green Coverage", value: "40%", icon: <Trees className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header title="Campus Facilities" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-900 via-teal-800 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-orange-500 text-white mb-4">World-Class Infrastructure</Badge>
            <h1 className="text-5xl font-bold mb-6">Campus Facilities</h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Experience our state-of-the-art campus with modern facilities designed to support academic excellence,
              research innovation, and holistic student development.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {infrastructureStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Facilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Facilities</h2>
            <p className="text-xl text-gray-600">Modern infrastructure supporting quality education and research</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {academicFacilities.map((facility, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <div className="text-blue-600">{facility.icon}</div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{facility.name}</h3>
                  <p className="text-gray-600 mb-4">{facility.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {facility.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Amenities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus Amenities</h2>
            <p className="text-xl text-gray-600">Comprehensive facilities for comfortable campus life</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campusAmenities.map((amenity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={amenity.image || "/placeholder.svg"}
                    alt={amenity.name}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-gray-800">{amenity.capacity}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <div className="text-blue-600">{amenity.icon}</div>
                    </div>
                    <h3 className="text-lg font-semibold">{amenity.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{amenity.description}</p>
                  <div className="space-y-2">
                    {amenity.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Facilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Facilities</h2>
            <p className="text-xl text-gray-600">Unique features that set our campus apart</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialFacilities.map((facility, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-blue-600">{facility.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{facility.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{facility.description}</p>
                  <div className="space-y-2">
                    {facility.details.map((detail, idx) => (
                      <div key={idx} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                        {detail}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Experience Our Campus</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Take a virtual tour of our facilities or schedule an in-person visit to experience our world-class
              infrastructure and vibrant campus life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Camera className="w-5 h-5 mr-2" />
                Virtual Campus Tour
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                Schedule Visit
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logo.svg"
                  alt="Sri Shanmugha Educational Institutions"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div>
                  <h3 className="text-lg font-bold">Sri Shanmugha</h3>
                  <p className="text-sm text-gray-400">Campus Facilities</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                World-class infrastructure supporting excellence in education and research.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Facilities</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/facilities/academic" className="text-gray-400 hover:text-white">
                    Academic Facilities
                  </Link>
                </li>
                <li>
                  <Link href="/facilities/hostels" className="text-gray-400 hover:text-white">
                    Hostel Facilities
                  </Link>
                </li>
                <li>
                  <Link href="/facilities/sports" className="text-gray-400 hover:text-white">
                    Sports Complex
                  </Link>
                </li>
                <li>
                  <Link href="/facilities/library" className="text-gray-400 hover:text-white">
                    Library Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/facilities/medical" className="text-gray-400 hover:text-white">
                    Medical Center
                  </Link>
                </li>
                <li>
                  <Link href="/facilities/transport" className="text-gray-400 hover:text-white">
                    Transportation
                  </Link>
                </li>
                <li>
                  <Link href="/facilities/dining" className="text-gray-400 hover:text-white">
                    Dining Services
                  </Link>
                </li>
                <li>
                  <Link href="/facilities/security" className="text-gray-400 hover:text-white">
                    Campus Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>facilities@shanmugha.edu.in</li>
                <li>+91 9876543210</li>
                <li>Campus Administration</li>
                <li>Main Campus</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Sri Shanmugha Educational Institutions - Campus Facilities. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
