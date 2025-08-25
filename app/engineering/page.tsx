"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Building, BookOpen, Globe, Clock } from "lucide-react"
import Image from "next/image"
import LoadingScreen from "@/components/loading-screen"
import ScrollReveal from "@/components/scroll-reveal"
import AnimatedCounter from "@/components/animated-counter"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function EngineeringPage() {
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const ugCourses = [
    {
      title: "B.Tech - Artificial Intelligence & Data Science",
      duration: "4 Years",
      seats: "60",
      eligibility: "10+2 with Physics, Chemistry, Mathematics",
      highlights: ["Industry 4.0 Ready", "AI/ML Focus", "Data Analytics"],
    },
    {
      title: "B.E - Computer Science & Engineering",
      duration: "4 Years",
      seats: "120",
      eligibility: "10+2 with Physics, Chemistry, Mathematics",
      highlights: ["Software Development", "System Design", "Programming"],
    },
    {
      title: "B.Tech - Information Technology",
      duration: "4 Years",
      seats: "60",
      eligibility: "10+2 with Physics, Chemistry, Mathematics",
      highlights: ["Web Technologies", "Database Systems", "Network Security"],
    },
    {
      title: "B.E - CSE (Cyber Security)",
      duration: "4 Years",
      seats: "60",
      eligibility: "10+2 with Physics, Chemistry, Mathematics",
      highlights: ["Ethical Hacking", "Network Security", "Digital Forensics"],
    },
    {
      title: "B.Tech - Agricultural Engineering",
      duration: "4 Years",
      seats: "30",
      eligibility: "10+2 with Physics, Chemistry, Mathematics/Biology",
      highlights: ["Farm Mechanization", "Irrigation Systems", "Crop Processing"],
    },
    {
      title: "B.E - Biomedical Engineering",
      duration: "4 Years",
      seats: "30",
      eligibility: "10+2 with Physics, Chemistry, Mathematics/Biology",
      highlights: ["Medical Devices", "Healthcare Technology", "Biomechanics"],
    },
    {
      title: "B.E - Electronics & Communication Engineering",
      duration: "4 Years",
      seats: "60",
      eligibility: "10+2 with Physics, Chemistry, Mathematics",
      highlights: ["VLSI Design", "Communication Systems", "Embedded Systems"],
    },
    {
      title: "B.E - Mechanical Engineering",
      duration: "4 Years",
      seats: "60",
      eligibility: "10+2 with Physics, Chemistry, Mathematics",
      highlights: ["Manufacturing", "Thermal Engineering", "Design Engineering"],
    },
  ]

  const pgCourses = [
    {
      title: "M.E - Computer Science & Engineering",
      duration: "2 Years",
      seats: "18",
      eligibility: "B.E/B.Tech in relevant field",
      highlights: ["Research Focus", "Advanced Computing", "Thesis Work"],
    },
    {
      title: "M.E - Industrial Safety Engineering",
      duration: "2 Years",
      seats: "18",
      eligibility: "B.E/B.Tech in relevant field",
      highlights: ["Safety Management", "Risk Assessment", "Industrial Hygiene"],
    },
  ]

  if (showLoading) {
    return <LoadingScreen department="engineering" />
  }

  return (
    <div className="min-h-screen bg-white">
      <Header department="engineering" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <Badge className="bg-orange-500 text-white mb-4 animate-pulse">Autonomous Since 2017</Badge>
                <h1 className="text-5xl font-bold mb-6 leading-tight">Engineering & Technology Excellence</h1>
                <p className="text-xl mb-8 text-gray-100">
                  Shaping tomorrow's engineers with cutting-edge technology, industry partnerships, and innovative
                  learning methodologies.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Award className="w-5 h-5 text-orange-400" />
                    <span>TNEA Code: 2302</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Users className="w-5 h-5 text-orange-400" />
                    <span>500+ Students</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Building className="w-5 h-5 text-orange-400" />
                    <span>State-of-art Labs</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 transform transition-all duration-300 hover:scale-105"
                  >
                    Download Brochure
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    Virtual Lab Tour
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={300}>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=500&fit=crop"
                  alt="Engineering Campus"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl transform transition-transform hover:scale-105"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg transform transition-all hover:scale-105">
                  <div className="text-2xl font-bold text-gray-600">100%</div>
                  <div className="text-sm">Placement Record</div>
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
                <div className="text-4xl font-bold text-gray-600 mb-2 transform transition-transform group-hover:scale-110">
                  <AnimatedCounter end={8} />
                </div>
                <div className="text-gray-600">UG Programs</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-gray-600 mb-2 transform transition-transform group-hover:scale-110">
                  <AnimatedCounter end={2} />
                </div>
                <div className="text-gray-600">PG Programs</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-gray-600 mb-2 transform transition-transform group-hover:scale-110">
                  <AnimatedCounter end={30} suffix="+" />
                </div>
                <div className="text-gray-600">Advanced Labs</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-gray-600 mb-2 transform transition-transform group-hover:scale-110">
                  <AnimatedCounter end={200} suffix="+" />
                </div>
                <div className="text-gray-600">Industry Partners</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Undergraduate Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Undergraduate Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Bachelor of Technology (B.Tech) and Bachelor of Engineering (B.E) programs designed for the future
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ugCourses.map((course, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                  <CardHeader>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-600" />
                        <span className="text-sm">Duration: {course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Seats: {course.seats}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <strong>Eligibility:</strong> {course.eligibility}
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm font-semibold">Key Highlights:</div>
                        <div className="flex flex-wrap gap-1">
                          {course.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Button className="w-full mt-4 group-hover:bg-gray-600 transition-all" variant="outline">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Postgraduate Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Postgraduate Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Master of Engineering (M.E) programs for advanced specialization and research
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pgCourses.map((course, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <Card className="hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                  <CardHeader>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-600" />
                        <span className="text-sm">Duration: {course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Seats: {course.seats}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <strong>Eligibility:</strong> {course.eligibility}
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm font-semibold">Key Highlights:</div>
                        <div className="flex flex-wrap gap-1">
                          {course.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Button className="w-full mt-4 group-hover:bg-gray-600 transition-all" variant="outline">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Labs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
              <p className="text-xl text-gray-600">
                State-of-the-art laboratories and infrastructure for hands-on learning
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <Card className="text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform group-hover:scale-110">
                    <BookOpen className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Advanced Computing Labs</h3>
                  <p className="text-gray-600">
                    High-performance computing systems with latest software and development tools
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Card className="text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform group-hover:scale-110">
                    <Building className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Research Centers</h3>
                  <p className="text-gray-600">Dedicated research facilities for innovation and project development</p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Card className="text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform group-hover:scale-110">
                    <Globe className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Industry Collaboration</h3>
                  <p className="text-gray-600">Live projects and internships with leading technology companies</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Placement Highlights */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Placement Excellence</h2>
              <p className="text-xl text-gray-100">Our students are placed in top companies with excellent packages</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-8">
            <ScrollReveal delay={100}>
              <div className="text-center group">
                <div className="text-4xl font-bold text-orange-400 mb-2 transform transition-transform group-hover:scale-110">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-gray-100">Placement Rate</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="text-center group">
                <div className="text-4xl font-bold text-orange-400 mb-2 transform transition-transform group-hover:scale-110">
                  ₹<AnimatedCounter end={12} /> LPA
                </div>
                <div className="text-gray-100">Highest Package</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="text-center group">
                <div className="text-4xl font-bold text-orange-400 mb-2 transform transition-transform group-hover:scale-110">
                  ₹<AnimatedCounter end={4.5} /> LPA
                </div>
                <div className="text-gray-100">Average Package</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="text-center group">
                <div className="text-4xl font-bold text-orange-400 mb-2 transform transition-transform group-hover:scale-110">
                  <AnimatedCounter end={150} suffix="+" />
                </div>
                <div className="text-gray-100">Recruiting Companies</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Engineering Journey?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of successful engineers who started their career at Sri Shanmugha
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 transform transition-all duration-300 hover:scale-105"
                >
                  Apply for Admission
                </Button>
                <Button size="lg" variant="outline" className="hover:bg-gray-600 hover:text-white transition-all">
                  Schedule Campus Visit
                </Button>
                <Button size="lg" variant="outline" className="hover:bg-gray-600 hover:text-white transition-all">
                  Download Brochure
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer department="engineering" />
    </div>
  )
}
