"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Building, Clock, CheckCircle, Heart, Eye, Activity, Microscope } from "lucide-react"
import Image from "next/image"
import LoadingScreen from "@/components/loading-screen"
import ScrollReveal from "@/components/scroll-reveal"
import AnimatedCounter from "@/components/animated-counter"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AlliedHealthPage() {
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const courses = [
    {
      title: "B.Sc. Occupational Therapy Assistant & Technician",
      duration: "3 Years",
      seats: "30",
      eligibility: "10+2 with Physics, Chemistry, Biology (Min 50%)",
      highlights: ["Rehabilitation", "Therapy Techniques", "Patient Care", "Clinical Training"],
      description:
        "Comprehensive program focusing on occupational therapy techniques and rehabilitation methods for various patient populations.",
    },
    {
      title: "B.Sc. Cardiac Technology",
      duration: "3 Years",
      seats: "30",
      eligibility: "10+2 with Physics, Chemistry, Biology (Min 50%)",
      highlights: ["Cardiac Procedures", "ECG Technology", "Heart Care", "Medical Equipment"],
      description: "Specialized program in cardiac technology covering diagnostic and therapeutic cardiac procedures.",
    },
    {
      title: "B.Sc. Medical Lab Technology",
      duration: "3 Years",
      seats: "30",
      eligibility: "10+2 with Physics, Chemistry, Biology (Min 50%)",
      highlights: ["Laboratory Diagnostics", "Medical Testing", "Research", "Quality Control"],
      description: "Comprehensive training in medical laboratory techniques and diagnostic procedures.",
    },
    {
      title: "B.Optometry",
      duration: "4 Years",
      seats: "30",
      eligibility: "10+2 with Physics, Chemistry, Biology (Min 50%)",
      highlights: ["Eye Care", "Vision Correction", "Optical Technology", "Clinical Practice"],
      description: "Complete optometry program covering eye care, vision correction, and optical technology.",
    },
  ]

  const facilities = [
    {
      name: "Occupational Therapy Lab",
      description: "Modern facilities for rehabilitation and therapy training",
      equipment: ["ADL Training Equipment", "Sensory Integration Tools", "Adaptive Devices", "Assessment Kits"],
    },
    {
      name: "Cardiac Technology Lab",
      description: "Advanced cardiac diagnostic and monitoring equipment",
      equipment: ["ECG Machines", "Holter Monitors", "Stress Test Equipment", "Echocardiography"],
    },
    {
      name: "Medical Lab Technology",
      description: "Comprehensive laboratory for medical diagnostics",
      equipment: ["Automated Analyzers", "Microscopes", "Centrifuges", "Incubators"],
    },
    {
      name: "Optometry Lab",
      description: "Complete eye care and vision testing facility",
      equipment: ["Auto Refractometers", "Slit Lamps", "Tonometers", "Visual Field Analyzers"],
    },
  ]

  if (showLoading) {
    return <LoadingScreen department="allied-health" />
  }

  return (
    <div className="min-h-screen bg-white">
      <Header department="allied-health" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-800 via-orange-900 to-orange-800 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <Badge className="bg-blue-500 text-white mb-4 animate-pulse">Healthcare Excellence</Badge>
                <h1 className="text-5xl font-bold mb-6 leading-tight">Allied Health Science Innovation</h1>
                <p className="text-xl mb-8 text-orange-100">
                  Comprehensive allied health programs with specialized training, modern facilities, and industry
                  partnerships for future healthcare professionals.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Award className="w-5 h-5 text-blue-400" />
                    <span>AICTE Approved</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span>120 Seats</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Building className="w-5 h-5 text-blue-400" />
                    <span>Specialized Labs</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button
                    size="lg"
                    className="bg-blue-500 hover:bg-blue-600 transform transition-all duration-300 hover:scale-105"
                  >
                    Explore Programs
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-orange-900 transition-all duration-300"
                  >
                    Virtual Lab Tour
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={300}>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=500&fit=crop"
                  alt="Allied Health Lab"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl transform transition-transform hover:scale-105"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg transform transition-all hover:scale-105">
                  <div className="text-2xl font-bold text-orange-600">100%</div>
                  <div className="text-sm">Clinical Training</div>
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
                <div className="text-4xl font-bold text-orange-600 mb-2 transform transition-transform group-hover:scale-110">
                  <AnimatedCounter end={4} />
                </div>
                <div className="text-gray-600">Specialized Programs</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-orange-600 mb-2 transform transition-transform group-hover:scale-110">
                  <AnimatedCounter end={120} />
                </div>
                <div className="text-gray-600">Total Seats</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-orange-600 mb-2 transform transition-transform group-hover:scale-110">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <div className="text-gray-600">Clinical Partners</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-orange-600 mb-2 transform transition-transform group-hover:scale-110">
                  <AnimatedCounter end={95} suffix="%" />
                </div>
                <div className="text-gray-600">Employment Rate</div>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Allied Health Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized healthcare programs designed to meet the growing demand for allied health professionals
              </p>
            </div>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-800">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-orange-600" />
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
                    <Button className="w-full group-hover:bg-orange-600 transition-all" variant="outline">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Facilities</h2>
              <p className="text-xl text-gray-600">
                Modern laboratories and equipment for comprehensive allied health education
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <Card className="hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Activity className="w-6 h-6 text-orange-600" />
                      <span>{facility.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{facility.description}</p>
                    <div className="space-y-2">
                      <div className="text-sm font-semibold">Key Equipment:</div>
                      <div className="grid grid-cols-2 gap-2">
                        {facility.equipment.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
              <p className="text-xl text-gray-600">Diverse career paths in healthcare and allied health professions</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-8">
            <ScrollReveal delay={100}>
              <Card className="text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform group-hover:scale-110">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Occupational Therapy</h3>
                  <p className="text-gray-600 text-sm">Rehabilitation Centers, Hospitals, Special Schools</p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Card className="text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform group-hover:scale-110">
                    <Activity className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Cardiac Technology</h3>
                  <p className="text-gray-600 text-sm">Cardiac Centers, ICUs, Diagnostic Centers</p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Card className="text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform group-hover:scale-110">
                    <Microscope className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Medical Lab Technology</h3>
                  <p className="text-gray-600 text-sm">Diagnostic Labs, Hospitals, Research Centers</p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <Card className="text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform group-hover:scale-110">
                    <Eye className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Optometry</h3>
                  <p className="text-gray-600 text-sm">Eye Clinics, Optical Stores, Vision Centers</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer department="allied-health" />
    </div>
  )
}
