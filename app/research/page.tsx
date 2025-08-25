"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  Calendar,
  GraduationCap,
  TrendingUp,
  ChevronRight,
  Star,
  Microscope,
  FlaskConical,
  Cpu,
  Heart,
  Lightbulb,
  FileText,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"

export default function ResearchPage() {
  const researchAreas = [
    {
      title: "Artificial Intelligence & Machine Learning",
      department: "Engineering",
      description: "Advanced research in AI algorithms, deep learning, and intelligent systems",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop",
      projects: 15,
      publications: 45,
      funding: "₹2.5 Cr",
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Drug Discovery & Development",
      department: "Pharmacy",
      description: "Novel drug formulations and pharmaceutical research for better healthcare",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
      projects: 12,
      publications: 38,
      funding: "₹1.8 Cr",
      icon: <FlaskConical className="w-8 h-8 text-green-600" />,
      color: "bg-green-50 border-green-200",
    },
    {
      title: "Clinical Nursing Research",
      department: "Nursing",
      description: "Evidence-based nursing practices and patient care innovations",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
      projects: 8,
      publications: 25,
      funding: "₹1.2 Cr",
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      color: "bg-pink-50 border-pink-200",
    },
    {
      title: "Medical Technology Innovation",
      department: "Allied Health",
      description: "Advanced medical devices and diagnostic technology research",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      projects: 10,
      publications: 20,
      funding: "₹1.5 Cr",
      icon: <Microscope className="w-8 h-8 text-orange-600" />,
      color: "bg-orange-50 border-orange-200",
    },
  ]

  const researchFacilities = [
    {
      name: "Central Research Laboratory",
      description: "State-of-the-art equipment for interdisciplinary research",
      equipment: ["HPLC", "GC-MS", "UV-Vis Spectrophotometer", "Rotary Evaporator"],
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop",
    },
    {
      name: "AI & Data Science Lab",
      description: "High-performance computing cluster for AI research",
      equipment: ["GPU Clusters", "Deep Learning Workstations", "Cloud Computing", "Big Data Analytics"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    },
    {
      name: "Clinical Skills Laboratory",
      description: "Advanced simulation lab for nursing research",
      equipment: ["Patient Simulators", "Vital Signs Monitors", "IV Training Arms", "CPR Manikins"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
    },
    {
      name: "Biomedical Engineering Lab",
      description: "Research facility for medical device development",
      equipment: ["3D Printers", "Circuit Design Tools", "Biosensors", "Signal Processing Units"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    },
  ]

  const recentPublications = [
    {
      title: "Machine Learning Approaches for Early Disease Detection",
      authors: "Dr. Rajesh Kumar, Dr. Priya Sharma",
      journal: "IEEE Transactions on Biomedical Engineering",
      year: "2024",
      citations: 45,
      type: "Journal Article",
    },
    {
      title: "Novel Drug Delivery Systems for Cancer Treatment",
      authors: "Dr. Meera Patel, Dr. Arun Singh",
      journal: "International Journal of Pharmaceutics",
      year: "2024",
      citations: 32,
      type: "Research Paper",
    },
    {
      title: "Evidence-Based Nursing Interventions in ICU Care",
      authors: "Dr. Lakshmi Nair, Dr. Kavitha Reddy",
      journal: "Journal of Advanced Nursing",
      year: "2024",
      citations: 28,
      type: "Clinical Study",
    },
    {
      title: "Wearable Sensors for Continuous Health Monitoring",
      authors: "Dr. Suresh Babu, Dr. Anitha Krishnan",
      journal: "Sensors and Actuators B: Chemical",
      year: "2024",
      citations: 38,
      type: "Technical Paper",
    },
  ]

  const upcomingEvents = [
    {
      title: "International Conference on AI in Healthcare",
      date: "April 15-17, 2025",
      location: "Main Auditorium",
      type: "Conference",
      description: "Global experts discussing AI applications in medical diagnosis and treatment",
    },
    {
      title: "Research Methodology Workshop",
      date: "March 25, 2025",
      location: "Research Center",
      type: "Workshop",
      description: "Hands-on training for faculty and research scholars",
    },
    {
      title: "Pharmaceutical Innovation Symposium",
      date: "May 10-11, 2025",
      location: "Conference Hall",
      type: "Symposium",
      description: "Latest developments in drug discovery and pharmaceutical technology",
    },
  ]

  const stats = [
    { number: "50+", label: "Active Research Projects", icon: <Lightbulb className="w-6 h-6" /> },
    { number: "150+", label: "Research Publications", icon: <FileText className="w-6 h-6" /> },
    { number: "₹8 Cr", label: "Research Funding", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "25+", label: "Research Scholars", icon: <GraduationCap className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-yellow-500 text-blue-900 font-bold mb-6 px-4 py-2">Innovation & Discovery</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Research</h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Advancing knowledge through cutting-edge research across engineering, pharmacy, nursing, and allied health
              sciences
            </p>
          </div>
        </div>
      </section>

      {/* Research Stats */}
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

      {/* Research Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Research Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse research initiatives spanning multiple disciplines
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className={`${area.color} border-2 hover:shadow-xl transition-all duration-300`}>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      {area.icon}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{area.title}</h3>
                        <Badge variant="secondary" className="mt-1">
                          {area.department}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Image
                    src={area.image || "/placeholder.svg"}
                    alt={area.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <p className="text-gray-700 mb-6">{area.description}</p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{area.projects}</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{area.publications}</div>
                      <div className="text-sm text-gray-600">Publications</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">{area.funding}</div>
                      <div className="text-sm text-gray-600">Funding</div>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Explore Research
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Research Facilities</h2>
            <p className="text-xl text-gray-600">State-of-the-art infrastructure supporting world-class research</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchFacilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.name}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{facility.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{facility.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Equipment:</h4>
                    <div className="space-y-1">
                      {facility.equipment.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span className="text-xs text-gray-700">{item}</span>
                        </div>
                      ))}
                      {facility.equipment.length > 3 && (
                        <div className="text-xs text-blue-600 font-medium">+{facility.equipment.length - 3} more</div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Recent Publications</h2>
            <p className="text-xl text-gray-600">Latest research contributions from our faculty</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {recentPublications.map((publication, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{publication.title}</h3>
                      <p className="text-gray-600 mb-2">{publication.authors}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{publication.journal}</span>
                        <span>•</span>
                        <span>{publication.year}</span>
                        <span>•</span>
                        <span>{publication.citations} citations</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{publication.type}</Badge>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
              View All Publications
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Upcoming Research Events</h2>
            <p className="text-xl text-gray-600">Join us for conferences, workshops, and symposiums</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-blue-600 text-white">{event.type}</Badge>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{event.description}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    <strong>Location:</strong> {event.location}
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Register Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Research Community</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Collaborate with leading researchers and contribute to groundbreaking discoveries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold">
              Apply for Research Programs
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              Contact Research Office
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
