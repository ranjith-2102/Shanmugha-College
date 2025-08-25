"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Car,
  Bus,
  Plane,
  Train,
  Camera,
  Building,
  Users,
  Shield,
  Wifi,
  Utensils,
  BookOpen,
  ChevronRight,
  ExternalLink,
  Play,
  Eye,
} from "lucide-react"
import Image from "next/image"

export default function VisitorsPage() {
  const campusDirections = [
    {
      mode: "By Car",
      icon: <Car className="w-8 h-8 text-blue-600" />,
      description: "Drive via NH-44 Salem-Coimbatore Highway",
      directions: [
        "Take NH-44 from Salem towards Coimbatore",
        "Exit at Tiruchengode Junction (Exit 15)",
        "Follow signs to Sri Shanmugha Educational Institutions",
        "Campus entrance is 2km from the highway exit",
      ],
      duration: "45 mins from Salem",
      parking: "Free parking available on campus",
    },
    {
      mode: "By Bus",
      icon: <Bus className="w-8 h-8 text-green-600" />,
      description: "Regular bus services from major cities",
      directions: [
        "Take TNSTC bus to Tiruchengode Bus Stand",
        "Board local bus to Sri Shanmugha Campus",
        "Auto-rickshaws available from bus stand",
        "Campus is 3km from Tiruchengode Bus Stand",
      ],
      duration: "1 hour from Salem",
      parking: "Bus parking facility available",
    },
    {
      mode: "By Train",
      icon: <Train className="w-8 h-8 text-purple-600" />,
      description: "Nearest railway station: Salem Junction",
      directions: [
        "Arrive at Salem Junction Railway Station",
        "Take taxi or bus to Tiruchengode",
        "Campus shuttle available on request",
        "Pre-booking recommended for shuttle service",
      ],
      duration: "1.5 hours from Salem Station",
      parking: "Railway parking at Salem Junction",
    },
    {
      mode: "By Air",
      icon: <Plane className="w-8 h-8 text-orange-600" />,
      description: "Nearest airport: Coimbatore International",
      directions: [
        "Fly to Coimbatore International Airport",
        "Take taxi or rental car to campus",
        "Airport shuttle service available",
        "Pre-arranged transportation recommended",
      ],
      duration: "2 hours from Coimbatore Airport",
      parking: "Airport parking available",
    },
  ]

  const virtualTourSections = [
    {
      title: "Engineering Block",
      description: "State-of-the-art laboratories and classrooms for engineering programs",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
      duration: "5 minutes",
      highlights: ["AI Lab", "Robotics Center", "CAD Lab", "Project Rooms"],
    },
    {
      title: "Pharmacy Department",
      description: "Modern pharmaceutical laboratories and research facilities",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
      duration: "4 minutes",
      highlights: ["Drug Testing Lab", "Research Center", "Herbal Garden", "Quality Control Lab"],
    },
    {
      title: "Nursing College",
      description: "Clinical simulation labs and nursing education facilities",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      duration: "4 minutes",
      highlights: ["Simulation Lab", "Skills Lab", "Anatomy Lab", "Clinical Training"],
    },
    {
      title: "Central Library",
      description: "24/7 library with extensive digital and physical collections",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      duration: "3 minutes",
      highlights: ["Digital Library", "Study Halls", "Research Section", "Reading Rooms"],
    },
    {
      title: "Sports Complex",
      description: "Comprehensive sports facilities for various indoor and outdoor games",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      duration: "6 minutes",
      highlights: ["Swimming Pool", "Gymnasium", "Basketball Court", "Cricket Ground"],
    },
    {
      title: "Student Hostels",
      description: "Comfortable accommodation with modern amenities",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop",
      duration: "4 minutes",
      highlights: ["Rooms", "Mess Hall", "Recreation Area", "Study Rooms"],
    },
  ]

  const visitorFacilities = [
    {
      facility: "Visitor Reception",
      description: "Dedicated reception desk for all visitor inquiries and assistance",
      hours: "8:00 AM - 6:00 PM",
      location: "Main Gate",
      contact: "reception@shanmugha.edu.in",
      icon: <Users className="w-6 h-6 text-blue-600" />,
    },
    {
      facility: "Guest Parking",
      description: "Free parking facility for visitors with security surveillance",
      hours: "24/7",
      location: "Near Main Entrance",
      contact: "security@shanmugha.edu.in",
      icon: <Car className="w-6 h-6 text-green-600" />,
    },
    {
      facility: "Cafeteria",
      description: "Refreshments and meals available for visitors",
      hours: "7:00 AM - 9:00 PM",
      location: "Central Block",
      contact: "cafeteria@shanmugha.edu.in",
      icon: <Utensils className="w-6 h-6 text-orange-600" />,
    },
    {
      facility: "Wi-Fi Access",
      description: "Complimentary internet access for visitors",
      hours: "24/7",
      location: "Campus Wide",
      contact: "ithelp@shanmugha.edu.in",
      icon: <Wifi className="w-6 h-6 text-purple-600" />,
    },
    {
      facility: "Information Center",
      description: "Campus maps, brochures, and detailed information",
      hours: "9:00 AM - 5:00 PM",
      location: "Administrative Block",
      contact: "info@shanmugha.edu.in",
      icon: <BookOpen className="w-6 h-6 text-red-600" />,
    },
    {
      facility: "Security Assistance",
      description: "24/7 security support and emergency assistance",
      hours: "24/7",
      location: "Multiple Locations",
      contact: "security@shanmugha.edu.in",
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
    },
  ]

  const visitingHours = [
    {
      day: "Monday - Friday",
      hours: "9:00 AM - 5:00 PM",
      type: "Regular Visits",
      note: "Guided tours available",
    },
    {
      day: "Saturday",
      hours: "9:00 AM - 3:00 PM",
      type: "Weekend Visits",
      note: "Limited services",
    },
    {
      day: "Sunday",
      hours: "10:00 AM - 2:00 PM",
      type: "Special Arrangements",
      note: "Prior appointment required",
    },
  ]

  const contactInfo = [
    {
      title: "Visitor Information",
      contact: "visitors@shanmugha.edu.in",
      phone: "0428-335-9999 Ext: 301",
      hours: "8:00 AM - 6:00 PM",
      icon: <Phone className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Campus Tours",
      contact: "tours@shanmugha.edu.in",
      phone: "0428-335-9999 Ext: 302",
      hours: "9:00 AM - 5:00 PM",
      icon: <Camera className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Admissions Office",
      contact: "admissions@shanmugha.edu.in",
      phone: "0428-335-9999 Ext: 303",
      hours: "9:00 AM - 5:00 PM",
      icon: <Building className="w-6 h-6 text-purple-600" />,
    },
    {
      title: "Emergency Contact",
      contact: "emergency@shanmugha.edu.in",
      phone: "0428-335-9999 Ext: 911",
      hours: "24/7",
      icon: <Shield className="w-6 h-6 text-red-600" />,
    },
  ]

  const stats = [
    { number: "50+", label: "Acres Campus", icon: <MapPin className="w-6 h-6" /> },
    { number: "1000+", label: "Daily Visitors", icon: <Users className="w-6 h-6" /> },
    { number: "24/7", label: "Security", icon: <Shield className="w-6 h-6" /> },
    { number: "Free", label: "Parking", icon: <Car className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-yellow-500 text-blue-900 font-bold mb-6 px-4 py-2">Welcome to Campus</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Visitors</h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Plan your visit to Sri Shanmugha Educational Institutions with detailed directions and virtual campus
              tours
            </p>
          </div>
        </div>
      </section>

      {/* Visitor Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Directions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">How to Reach Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple transportation options to reach our campus conveniently
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {campusDirections.map((direction, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    {direction.icon}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{direction.mode}</h3>
                      <p className="text-gray-600">{direction.description}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Directions:</h4>
                    <ol className="space-y-2">
                      {direction.directions.map((step, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-blue-600 font-bold text-sm mt-1">{idx + 1}.</span>
                          <span className="text-sm text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-gray-900">Duration:</div>
                      <div className="text-blue-600">{direction.duration}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Parking:</div>
                      <div className="text-green-600">{direction.parking}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Campus Tour */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Virtual Campus Tour</h2>
            <p className="text-xl text-gray-600">Explore our campus from anywhere with our interactive virtual tour</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {virtualTourSections.map((section, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <Image
                    src={section.image || "/placeholder.svg"}
                    alt={section.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-blue-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {section.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{section.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{section.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Tour Highlights:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {section.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Eye className="w-3 h-3 text-blue-500" />
                          <span className="text-xs text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Start Virtual Tour
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold">
              Complete Campus Virtual Tour
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Visitor Facilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Visitor Facilities</h2>
            <p className="text-xl text-gray-600">
              Comprehensive facilities to make your visit comfortable and informative
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visitorFacilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    {facility.icon}
                    <h3 className="text-lg font-bold text-gray-900">{facility.facility}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{facility.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Hours:</span>
                      <span className="font-semibold">{facility.hours}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-semibold">{facility.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Contact:</span>
                      <span className="font-semibold text-blue-600">{facility.contact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visiting Hours */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Visiting Hours</h2>
            <p className="text-xl text-gray-600">Plan your visit according to our campus visiting schedule</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {visitingHours.map((schedule, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <Clock className="w-12 h-12 text-blue-600 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{schedule.day}</h3>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{schedule.hours}</div>
                    <Badge className="mb-3">{schedule.type}</Badge>
                    <p className="text-sm text-gray-600">{schedule.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Contact Information</h2>
            <p className="text-xl text-gray-600">Get in touch with us for any visitor-related inquiries</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{contact.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{contact.title}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{contact.contact}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{contact.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{contact.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Campus Location</h2>
            <p className="text-xl text-gray-600">Find us on the map and plan your route</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Campus Map</h3>
                  <p className="text-gray-600 mb-4">Click to view detailed campus map with building locations</p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    View Interactive Map
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Address:</h4>
                    <p className="text-gray-600">
                      Sri Shanmugha Educational Institutions
                      <br />
                      Tiruchengode, Salem District
                      <br />
                      Tamil Nadu - 637211, India
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">GPS Coordinates:</h4>
                    <p className="text-gray-600">
                      Latitude: 11.3885° N<br />
                      Longitude: 77.8867° E
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Visit Our Campus?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Experience our world-class facilities and vibrant campus life firsthand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold">
              Schedule Campus Visit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              Download Campus Map
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
