"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  Users,
  Award,
  BookOpen,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  FileText,
  Settings,
  User,
  Building,
  Target,
  TrendingUp,
  Heart,
  ChevronRight,
  Star,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FacultyPage() {
  const facultyHighlights = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Professor & Head",
      department: "Computer Science & Engineering",
      experience: "15+ Years",
      specialization: "Artificial Intelligence, Machine Learning",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      achievements: ["Best Faculty Award 2023", "50+ Research Publications", "PhD Guide for 15 scholars"],
      email: "rajesh.kumar@shanmugha.edu.in",
      phone: "+91 9876543210",
    },
    {
      name: "Dr. Priya Sharma",
      designation: "Associate Professor",
      department: "Pharmacy",
      experience: "12+ Years",
      specialization: "Pharmaceutical Chemistry, Drug Discovery",
      image: "https://images.unsplash.com/photo-1494790108755-2616c6d4e6e8?w=300&h=300&fit=crop&crop=face",
      achievements: ["Excellence in Teaching 2024", "30+ Research Papers", "Industry Collaboration Expert"],
      email: "priya.sharma@shanmugha.edu.in",
      phone: "+91 9876543211",
    },
    {
      name: "Dr. Lakshmi Nair",
      designation: "Professor",
      department: "Nursing",
      experience: "18+ Years",
      specialization: "Community Health, Nursing Education",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      achievements: ["Outstanding Educator 2023", "Clinical Excellence Award", "International Speaker"],
      email: "lakshmi.nair@shanmugha.edu.in",
      phone: "+91 9876543212",
    },
    {
      name: "Dr. Suresh Babu",
      designation: "Associate Professor",
      department: "Allied Health Sciences",
      experience: "10+ Years",
      specialization: "Medical Technology, Biomedical Engineering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      achievements: ["Innovation Award 2024", "25+ Patents Filed", "Research Excellence"],
      email: "suresh.babu@shanmugha.edu.in",
      phone: "+91 9876543213",
    },
  ]

  const facultyServices = [
    {
      title: "Faculty Portal",
      description: "Access teaching schedules, student records, and academic resources",
      icon: <User className="w-8 h-8 text-blue-600" />,
      href: "/faculty-portal",
      color: "bg-blue-50 border-blue-200",
      features: ["Course Management", "Grade Entry", "Attendance Tracking", "Resource Library"],
    },
    {
      title: "Research Support",
      description: "Research funding, publication support, and collaboration opportunities",
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      href: "/research-support",
      color: "bg-green-50 border-green-200",
      features: ["Grant Applications", "Publication Support", "Research Collaboration", "Lab Facilities"],
    },
    {
      title: "Professional Development",
      description: "Training programs, workshops, and skill enhancement opportunities",
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      href: "/professional-development",
      color: "bg-purple-50 border-purple-200",
      features: ["Training Programs", "Workshops", "Conferences", "Certification Courses"],
    },
    {
      title: "Administrative Services",
      description: "HR services, payroll, leave management, and administrative support",
      icon: <Settings className="w-8 h-8 text-orange-600" />,
      href: "/admin-services",
      color: "bg-orange-50 border-orange-200",
      features: ["Leave Management", "Payroll Services", "HR Support", "Policy Updates"],
    },
  ]

  const departmentStats = [
    {
      department: "Engineering",
      faculty: 45,
      professors: 12,
      associates: 18,
      assistants: 15,
      icon: <Building className="w-6 h-6 text-blue-600" />,
    },
    {
      department: "Pharmacy",
      faculty: 25,
      professors: 8,
      associates: 10,
      assistants: 7,
      icon: <Heart className="w-6 h-6 text-green-600" />,
    },
    {
      department: "Nursing",
      faculty: 20,
      professors: 6,
      associates: 8,
      assistants: 6,
      icon: <Users className="w-6 h-6 text-pink-600" />,
    },
    {
      department: "Allied Health",
      faculty: 15,
      professors: 4,
      associates: 6,
      assistants: 5,
      icon: <Target className="w-6 h-6 text-orange-600" />,
    },
  ]

  const upcomingEvents = [
    {
      title: "Faculty Development Program",
      date: "March 20-22, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Conference Hall",
      type: "Training",
      description: "Three-day intensive program on modern teaching methodologies and technology integration",
    },
    {
      title: "Research Symposium",
      date: "April 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Main Auditorium",
      type: "Research",
      description: "Annual research presentation and collaboration meeting for all faculty members",
    },
    {
      title: "Industry-Academia Meet",
      date: "May 5, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Seminar Hall",
      type: "Collaboration",
      description: "Networking event with industry partners for research and placement opportunities",
    },
  ]

  const supportServices = [
    {
      service: "IT Support",
      contact: "itsupport@shanmugha.edu.in",
      phone: "0428-335-9999 Ext: 201",
      hours: "8:00 AM - 6:00 PM",
      description: "Technical support for faculty computing needs",
    },
    {
      service: "Library Services",
      contact: "library@shanmugha.edu.in",
      phone: "0428-335-9999 Ext: 202",
      hours: "24/7",
      description: "Research resources and academic material support",
    },
    {
      service: "HR Department",
      contact: "hr@shanmugha.edu.in",
      phone: "0428-335-9999 Ext: 203",
      hours: "9:00 AM - 5:00 PM",
      description: "Human resources and administrative support",
    },
    {
      service: "Finance Office",
      contact: "finance@shanmugha.edu.in",
      phone: "0428-335-9999 Ext: 204",
      hours: "9:00 AM - 4:00 PM",
      description: "Payroll, reimbursements, and financial services",
    },
  ]

  const stats = [
    { number: "105", label: "Total Faculty", icon: <Users className="w-6 h-6" /> },
    { number: "30", label: "Professors", icon: <GraduationCap className="w-6 h-6" /> },
    { number: "200+", label: "Research Papers", icon: <FileText className="w-6 h-6" /> },
    { number: "15+", label: "Years Average Experience", icon: <Award className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-yellow-500 text-blue-900 font-bold mb-6 px-4 py-2">Excellence in Education</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Faculty & Staff</h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Dedicated educators and researchers committed to academic excellence and student success
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Stats */}
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

      {/* Featured Faculty */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Meet Our Distinguished Faculty</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from experienced educators and researchers who are leaders in their fields
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {facultyHighlights.map((faculty, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <Image
                      src={faculty.image || "/placeholder.svg"}
                      alt={faculty.name}
                      width={120}
                      height={120}
                      className="w-30 h-30 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{faculty.name}</h3>
                      <p className="text-blue-600 font-semibold mb-1">{faculty.designation}</p>
                      <p className="text-gray-600 mb-2">{faculty.department}</p>
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge variant="outline">{faculty.experience}</Badge>
                        <Badge className="bg-blue-100 text-blue-800">{faculty.specialization}</Badge>
                      </div>
                      <div className="space-y-2 mb-4">
                        {faculty.achievements.slice(0, 2).map((achievement, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm text-gray-700">{achievement}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Mail className="w-4 h-4" />
                          <span>{faculty.email}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Phone className="w-4 h-4" />
                          <span>{faculty.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Faculty by Department</h2>
            <p className="text-xl text-gray-600">Distribution of faculty across our academic departments</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departmentStats.map((dept, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">{dept.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{dept.department}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">{dept.faculty}</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Professors:</span>
                      <span className="font-semibold">{dept.professors}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Associates:</span>
                      <span className="font-semibold">{dept.associates}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Assistants:</span>
                      <span className="font-semibold">{dept.assistants}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Faculty Services</h2>
            <p className="text-xl text-gray-600">Comprehensive support services for our faculty members</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {facultyServices.map((service, index) => (
              <Card key={index} className={`${service.color} border-2 hover:shadow-xl transition-all duration-300`}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    {service.icon}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Available Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link href={service.href}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Access Service
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Upcoming Faculty Events</h2>
            <p className="text-xl text-gray-600">Professional development and networking opportunities</p>
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
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">Register Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Support Services</h2>
            <p className="text-xl text-gray-600">Get assistance from our dedicated support teams</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportServices.map((support, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{support.service}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{support.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{support.contact}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{support.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{support.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Faculty Team</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Be part of an institution committed to academic excellence and innovation in education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold">
              View Career Opportunities
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              Faculty Handbook
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
