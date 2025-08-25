"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Building, Clock } from "lucide-react"
import Image from "next/image"
import LoadingScreen from "@/components/loading-screen"
import ScrollReveal from "@/components/scroll-reveal"
import AnimatedCounter from "@/components/animated-counter"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PharmacyPage() {
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const courses = [
    {
      title: "Pharm.D (Doctor of Pharmacy)",
      duration: "6 Years",
      seats: "30",
      eligibility: "10+2 with Physics, Chemistry, Biology/Mathematics",
      highlights: ["Clinical Practice", "Patient Care", "Hospital Training", "Research Projects"],
      description:
        "Comprehensive pharmaceutical care program focusing on clinical pharmacy practice and patient counseling.",
    },
    {
      title: "M.Pharm - Pharmaceutical Chemistry",
      duration: "2 Years",
      seats: "12",
      eligibility: "B.Pharm with minimum 55% marks",
      highlights: ["Drug Design", "Synthesis", "Quality Control", "Research Focus"],
      description: "Advanced study in pharmaceutical chemistry with emphasis on drug discovery and development.",
    },
    {
      title: "M.Pharm - Pharmaceutics",
      duration: "2 Years",
      seats: "12",
      eligibility: "B.Pharm with minimum 55% marks",
      highlights: ["Drug Delivery", "Formulation", "Biopharmaceutics", "Novel Systems"],
      description: "Specialized program in pharmaceutical formulation science and drug delivery systems.",
    },
    {
      title: "B.Pharm (Bachelor of Pharmacy)",
      duration: "4 Years",
      seats: "60",
      eligibility: "10+2 with Physics, Chemistry, Biology/Mathematics",
      highlights: ["Pharmaceutical Sciences", "Drug Manufacturing", "Quality Assurance", "Regulatory Affairs"],
      description: "Comprehensive undergraduate program covering all aspects of pharmaceutical sciences and practice.",
    },
    {
      title: "B.Pharm (Lateral Entry)",
      duration: "3 Years",
      seats: "6",
      eligibility: "D.Pharm with minimum 50% marks",
      highlights: ["Direct 2nd Year Entry", "Advanced Curriculum", "Industry Exposure", "Research Projects"],
      description: "Accelerated program for diploma holders to complete bachelor's degree in pharmacy.",
    },
    {
      title: "D.Pharm (Diploma in Pharmacy)",
      duration: "2 Years",
      seats: "60",
      eligibility: "10+2 with Physics, Chemistry, Biology/Mathematics",
      highlights: ["Community Pharmacy", "Hospital Pharmacy", "Drug Store Management", "Patient Counseling"],
      description: "Foundation program in pharmacy practice and pharmaceutical care.",
    },
  ]

  const facilities = [
    {
      name: "Pharmaceutical Chemistry Lab",
      description: "Advanced instrumentation for drug analysis and synthesis",
      equipment: ["HPLC", "GC-MS", "UV-Vis Spectrophotometer", "IR Spectrophotometer"],
    },
    {
      name: "Pharmaceutics Lab",
      description: "Modern facilities for formulation development and testing",
      equipment: [
        "Tablet Compression Machine",
        "Capsule Filling Machine",
        "Dissolution Apparatus",
        "Stability Chambers",
      ],
    },
    {
      name: "Pharmacology Lab",
      description: "Well-equipped for experimental pharmacology studies",
      equipment: ["Animal House", "Organ Bath", "Digital pH Meter", "Centrifuge"],
    },
    {
      name: "Hospital Pharmacy",
      description: "Live training facility for clinical pharmacy practice",
      equipment: ["Dispensing Unit", "IV Admixture", "Drug Information Center", "Patient Counseling Area"],
    },
  ]

  if (showLoading) {
    return <LoadingScreen department="pharmacy" />
  }

  return (
    <div className="min-h-screen bg-white">
      <Header department="pharmacy" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 via-green-900 to-green-800 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <Badge className="bg-orange-500 text-white mb-4 animate-pulse">Student-Centric Learning</Badge>
                <h1 className="text-5xl font-bold mb-6 leading-tight">Excellence in Pharmaceutical Education</h1>
                <p className="text-xl mb-8 text-green-100">
                  Comprehensive pharmacy education with hands-on training, research opportunities, and industry
                  partnerships for future pharmaceutical professionals.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Award className="w-5 h-5 text-orange-400" />
                    <span>AICTE Approved</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Users className="w-5 h-5 text-orange-400" />
                    <span>200+ Students</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Building className="w-5 h-5 text-orange-400" />
                    <span>Modern Labs</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 transform transition-all duration-300 hover:scale-105"
                  >
                    Explore Programs
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-green-900 transition-all duration-300"
                  >
                    Virtual Lab Tour
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={300}>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=500&fit=crop"
                  alt="Pharmacy Lab"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl transform transition-transform hover:scale-105"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg transform transition-all hover:scale-105">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm">Placement Assurance</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-4xl font-bold text-green-600 mb-2 transform transition-transform group-hover:scale-110">
                  <AnimatedCounter end={6} />
                </div>
                <div className="text-gray-600">Pharmacy Programs</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-green-600 mb-2 transform transition-transform group-hover:scale-110">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <div className="text-gray-600">Specialized Labs</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-green-600 mb-2 transform transition-transform group-hover:scale-110">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-gray-600">Hospital Partners</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-green-600 mb-2 transform transition-transform group-hover:scale-110">
                  <AnimatedCounter end={95} suffix="%" />
                </div>
                <div className="text-gray-600">Pass Percentage</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Pharmacy Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive pharmaceutical education from diploma to doctoral level with industry-aligned curriculum
              </p>
            </div>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-800">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Duration: {course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Seats: {course.seats}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <strong>Eligibility:</strong> {course.eligibility}
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="text-sm font-semibold">Key Highlights:</div>
                      <div className="flex flex-wrap gap-1">
                        {course.highlights.map((highlight, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full group-hover:bg-green-600 transition-all" variant="outline">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer department="pharmacy" />
    </div>
  )
}
