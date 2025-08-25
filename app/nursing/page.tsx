"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"
import LoadingScreen from "@/components/loading-screen"
import ScrollReveal from "@/components/scroll-reveal"
import AnimatedCounter from "@/components/animated-counter"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NursingPage() {
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const courses = [
    {
      title: "B.Sc. Nursing for Women (Dual Degree)",
      duration: "4 Years",
      seats: "100",
      eligibility: "10+2 with Physics, Chemistry, Biology (Women Only)",
      highlights: ["INC Approved", "UNESCO Approved", "Dual Degree Program", "International Recognition"],
      description:
        "Comprehensive nursing program with dual degree recognition from Tamil Nadu Dr. M.G.R. Medical University and University of Porto, Australia.",
      university: "Tamil Nadu Dr. M.G.R. Medical University & University of Porto, Australia",
    },
    {
      title: "B.Sc. Nursing",
      duration: "4 Years",
      seats: "60",
      eligibility: "10+2 with Physics, Chemistry, Biology",
      highlights: ["INC Approved", "Clinical Training", "Hospital Partnerships", "Skill Development"],
      description: "Standard nursing program focusing on comprehensive patient care and clinical excellence.",
      university: "Tamil Nadu Dr. M.G.R. Medical University",
    },
    {
      title: "BHSM (Bachelor of Humanistic & Social Medicine)",
      duration: "4 Years",
      seats: "30",
      eligibility: "10+2 with Physics, Chemistry, Biology",
      highlights: ["Unique Program", "Holistic Healthcare", "Community Medicine", "Social Health"],
      description: "Innovative program combining medical knowledge with humanistic and social aspects of healthcare.",
      university: "University of Porto, Australia",
    },
  ]

  if (showLoading) {
    return <LoadingScreen department="nursing" />
  }

  return (
    <div className="min-h-screen bg-white">
      <Header department="nursing" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-800 via-pink-900 to-pink-800 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-orange-500 text-white animate-pulse">INC Approved</Badge>
                  <Badge className="bg-blue-500 text-white animate-pulse">UNESCO Approved</Badge>
                </div>
                <h1 className="text-5xl font-bold mb-6 leading-tight">Compassionate Care Through Excellence</h1>
                <p className="text-xl mb-8 text-pink-100">
                  Comprehensive nursing education with international recognition, clinical excellence, and 100%
                  placement assurance for future healthcare leaders.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Award className="w-5 h-5 text-orange-400" />
                    <span>100% Placement</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Users className="w-5 h-5 text-orange-400" />
                    <span>190 Seats</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Globe className="w-5 h-5 text-orange-400" />
                    <span>International Recognition</span>
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
                    className="border-white text-white hover:bg-white hover:text-pink-900 transition-all duration-300"
                  >
                    Virtual Campus Tour
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={300}>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=500&fit=crop"
                  alt="Nursing Students"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl transform transition-transform hover:scale-105"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg transform transition-all hover:scale-105">
                  <div className="text-2xl font-bold text-pink-600">Dual</div>
                  <div className="text-sm">Degree Program</div>
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
                <div className="text-4xl font-bold text-pink-600 mb-2 transform transition-transform group-hover:scale-110">
                  <AnimatedCounter end={3} />
                </div>
                <div className="text-gray-600">Nursing Programs</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-pink-600 mb-2 transform transition-transform group-hover:scale-110">
                  <AnimatedCounter end={190} />
                </div>
                <div className="text-gray-600">Total Seats</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-pink-600 mb-2 transform transition-transform group-hover:scale-110">
                  <AnimatedCounter end={20} suffix="+" />
                </div>
                <div className="text-gray-600">Clinical Partners</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-pink-600 mb-2 transform transition-transform group-hover:scale-110">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-gray-600">Placement Rate</div>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nursing Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive nursing education with international recognition and clinical excellence
              </p>
            </div>
          </ScrollReveal>
          <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {courses.map((course, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <Card className="hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                  <CardHeader>
                    <CardTitle className="text-xl text-pink-800">{course.title}</CardTitle>
                    <p className="text-sm text-gray-600">{course.university}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-pink-600" />
                        <span className="text-sm">Duration: {course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Seats: {course.seats}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Approved Program</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm text-gray-600 mb-2">
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
                    <Button className="w-full group-hover:bg-pink-600 transition-all" variant="outline">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer department="nursing" />
    </div>
  )
}
