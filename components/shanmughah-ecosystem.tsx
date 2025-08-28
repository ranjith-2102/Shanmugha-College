"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Building2,
  Users,
  GraduationCap,
  BookOpen,
  Microscope,
  Heart,
  Stethoscope,
  Cpu,
  MapPin,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ScrollReveal from "./scroll-reveal"
import AnimatedCounter from "./animated-counter"

interface Institution {
  id: string
  name: string
  type: string
  established: string
  location: string
  description: string
  programs: string[]
  students: number
  faculty: number
  icon: React.ReactNode
  color: string
  image: string
  website?: string
  accreditation: string[]
}

const institutions: Institution[] = [
  {
    id: "1",
    name: "Sri Shanmugha College of Engineering",
    type: "Engineering & Technology",
    established: "2010",
    location: "Tiruchengode, Salem",
    description: "Premier engineering college offering cutting-edge programs in technology and innovation",
    programs: ["Computer Science", "Electronics", "Mechanical", "Civil", "AI & ML", "Data Science"],
    students: 2500,
    faculty: 180,
    icon: <Cpu className="w-8 h-8" />,
    color: "bg-blue-50 border-blue-200 text-blue-800",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop",
    website: "/engineering",
    accreditation: ["NAAC A+", "NBA", "AICTE"],
  },
  {
    id: "2",
    name: "Sri Shanmugha College of Pharmacy",
    type: "Pharmaceutical Sciences",
    established: "2012",
    location: "Tiruchengode, Salem",
    description: "Leading pharmacy college with state-of-the-art laboratories and research facilities",
    programs: ["B.Pharm", "M.Pharm", "Pharm.D", "Research Programs"],
    students: 800,
    faculty: 65,
    icon: <Heart className="w-8 h-8" />,
    color: "bg-green-50 border-green-200 text-green-800",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    website: "/pharmacy",
    accreditation: ["NAAC A+", "PCI", "AICTE"],
  },
  {
    id: "3",
    name: "Sri Shanmugha College of Nursing",
    type: "Nursing & Healthcare",
    established: "2014",
    location: "Tiruchengode, Salem",
    description: "Excellence in nursing education with international standards and clinical training",
    programs: ["B.Sc Nursing", "M.Sc Nursing", "Post Basic B.Sc"],
    students: 600,
    faculty: 45,
    icon: <Stethoscope className="w-8 h-8" />,
    color: "bg-pink-50 border-pink-200 text-pink-800",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
    website: "/nursing",
    accreditation: ["NAAC A+", "INC", "Tamil Nadu Nurses Council"],
  },
  {
    id: "4",
    name: "Sri Shanmugha College of Allied Health Sciences",
    type: "Allied Health Sciences",
    established: "2016",
    location: "Tiruchengode, Salem",
    description: "Specialized programs in allied health sciences for modern healthcare needs",
    programs: ["Medical Lab Technology", "Radiology", "Physiotherapy", "Optometry"],
    students: 400,
    faculty: 35,
    icon: <Microscope className="w-8 h-8" />,
    color: "bg-orange-50 border-orange-200 text-orange-800",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
    website: "/allied-health",
    accreditation: ["NAAC A+", "AICTE", "State Health Department"],
  },
]

const ecosystemStats = [
  {
    number: 4,
    label: "Institutions",
    icon: <Building2 className="w-6 h-6 text-blue-600" />,
    description: "Specialized colleges",
  },
  {
    number: 4300,
    label: "Students",
    icon: <Users className="w-6 h-6 text-green-600" />,
    description: "Active learners",
  },
  {
    number: 325,
    label: "Faculty",
    icon: <GraduationCap className="w-6 h-6 text-purple-600" />,
    description: "Expert educators",
  },
  {
    number: 25,
    label: "Programs",
    icon: <BookOpen className="w-6 h-6 text-orange-600" />,
    description: "Academic offerings",
  },
]

export default function ShanmughahEcosystem() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Image
                src="/institutional-logo.png"
                alt="Sri Shanmugha Educational Institutions"
                width={60}
                height={60}
                className="w-15 h-15"
              />
              <div>
                <h2 className="text-4xl font-bold text-blue-900">Shanmughah Ecosystem</h2>
                <p className="text-lg text-blue-600 font-medium">Educational Excellence Since 2010</p>
              </div>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A comprehensive educational ecosystem comprising multiple specialized institutions, united by our
              commitment to academic excellence, innovation, and holistic development
            </p>
          </div>
        </ScrollReveal>

        {/* Ecosystem Statistics */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {ecosystemStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-blue-900 mb-2">
                    <AnimatedCounter end={stat.number} suffix={stat.number > 100 ? "+" : ""} />
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* Institutions Grid */}
        <ScrollReveal delay={400}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {institutions.map((institution, index) => (
              <Card key={institution.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={institution.image || "/placeholder.svg"}
                    alt={institution.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className={`${institution.color} mb-2`}>{institution.type}</Badge>
                    <h3 className="text-xl font-bold text-white mb-1">{institution.name}</h3>
                    <div className="flex items-center text-white/90 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {institution.location}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {institution.icon}
                      <span className="text-sm text-gray-600">Est. {institution.established}</span>
                    </div>
                    <div className="flex space-x-1">
                      {institution.accreditation.map((acc, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {acc}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{institution.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{institution.students}</div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{institution.faculty}</div>
                      <div className="text-sm text-gray-600">Faculty</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Programs Offered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {institution.programs.slice(0, 4).map((program, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {program}
                        </Badge>
                      ))}
                      {institution.programs.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{institution.programs.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {institution.website && (
                    <Link href={institution.website}>
                      <Button className="w-full group">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* Call to Action */}
        <ScrollReveal delay={600}>
          <div className="text-center mt-16">
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-4">Join Our Educational Ecosystem</h3>
                <p className="text-xl mb-8 text-blue-100">
                  Discover opportunities across our specialized institutions and become part of our legacy of excellence
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/admissions">
                    <Button size="lg" variant="secondary" className="group">
                      Apply Now
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
