"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  Heart,
  Shield,
  Users,
  Award,
  BookOpen,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Target,
  TrendingUp,
  Building,
  Star,
  CheckCircle,
  Eye,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"

export default function ParentsPage() {
  const collegeVision = {
    mission:
      "To provide world-class education that nurtures intellectual growth, character development, and professional excellence, preparing students to become responsible global citizens and leaders in their chosen fields.",
    vision:
      "To be a premier educational institution recognized globally for academic excellence, innovative research, and holistic development of students who contribute meaningfully to society.",
    values: [
      {
        title: "Academic Excellence",
        description: "Commitment to the highest standards of teaching and learning",
        icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      },
      {
        title: "Character Building",
        description: "Fostering ethical values and moral integrity in students",
        icon: <Heart className="w-8 h-8 text-red-600" />,
      },
      {
        title: "Innovation & Research",
        description: "Encouraging creativity and scientific inquiry",
        icon: <Target className="w-8 h-8 text-green-600" />,
      },
      {
        title: "Global Perspective",
        description: "Preparing students for international opportunities",
        icon: <Award className="w-8 h-8 text-purple-600" />,
      },
    ],
  }

  const parentServices = [
    {
      title: "Academic Progress Tracking",
      description: "Real-time access to your child's academic performance and attendance",
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      features: ["Grade Reports", "Attendance Records", "Assignment Tracking", "Teacher Feedback"],
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Fee Management Portal",
      description: "Convenient online fee payment and financial tracking system",
      icon: <Shield className="w-8 h-8 text-green-600" />,
      features: ["Online Payments", "Fee Structure", "Payment History", "Receipt Downloads"],
      color: "bg-green-50 border-green-200",
    },
    {
      title: "Communication Platform",
      description: "Direct communication with faculty and administration",
      icon: <Users className="w-8 h-8 text-purple-600" />,
      features: ["Teacher Messages", "Event Notifications", "Meeting Requests", "Feedback System"],
      color: "bg-purple-50 border-purple-200",
    },
    {
      title: "Safety & Security Updates",
      description: "Regular updates on campus safety and student well-being",
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      features: ["Safety Alerts", "Campus Security", "Health Updates", "Emergency Contacts"],
      color: "bg-orange-50 border-orange-200",
    },
  ]

  const studentSupport = [
    {
      title: "Academic Support",
      description: "Comprehensive academic assistance and mentoring programs",
      services: ["Tutoring Programs", "Study Groups", "Academic Counseling", "Career Guidance"],
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Personal Development",
      description: "Programs focused on character building and life skills",
      services: ["Leadership Training", "Communication Skills", "Personality Development", "Ethics Education"],
      icon: <Heart className="w-6 h-6 text-red-600" />,
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive healthcare and wellness support",
      services: ["Medical Center", "Counseling Services", "Fitness Programs", "Mental Health Support"],
      icon: <Shield className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Career Preparation",
      description: "Industry-focused training and placement assistance",
      services: ["Skill Development", "Industry Internships", "Placement Training", "Alumni Network"],
      icon: <Target className="w-6 h-6 text-purple-600" />,
    },
  ]

  const safetyMeasures = [
    {
      measure: "24/7 Campus Security",
      description: "Round-the-clock security personnel and surveillance systems",
      icon: <Shield className="w-6 h-6 text-blue-600" />,
    },
    {
      measure: "Medical Facilities",
      description: "On-campus health center with qualified medical staff",
      icon: <Heart className="w-6 h-6 text-red-600" />,
    },
    {
      measure: "Safe Transportation",
      description: "Secure bus services with GPS tracking and trained drivers",
      icon: <Building className="w-6 h-6 text-green-600" />,
    },
    {
      measure: "Emergency Response",
      description: "Quick response system for any emergency situations",
      icon: <Phone className="w-6 h-6 text-orange-600" />,
    },
  ]

  const parentTestimonials = [
    {
      name: "Mrs. Kavitha Reddy",
      relation: "Mother of Arjun Reddy, B.Tech CSE",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      testimonial:
        "Sri Shanmugha has provided my son with excellent education and values. The faculty's dedication and the institution's focus on character building is commendable.",
      rating: 5,
    },
    {
      name: "Mr. Rajesh Patel",
      relation: "Father of Priya Patel, B.Pharm",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      testimonial:
        "The transparency in communication and regular updates about my daughter's progress gives me complete peace of mind. The placement support is outstanding.",
      rating: 5,
    },
    {
      name: "Mrs. Lakshmi Nair",
      relation: "Mother of Anjali Nair, B.Sc Nursing",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      testimonial:
        "The nursing program has shaped my daughter into a compassionate healthcare professional. The practical training and industry exposure are excellent.",
      rating: 5,
    },
  ]

  const upcomingEvents = [
    {
      title: "Parent-Teacher Meeting",
      date: "March 25, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Campus Wide",
      description: "Quarterly meeting to discuss student progress and academic performance",
      type: "Academic",
    },
    {
      title: "Annual Day Celebration",
      date: "April 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Main Auditorium",
      description: "Celebration of student achievements and cultural performances",
      type: "Cultural",
    },
    {
      title: "Career Guidance Workshop",
      date: "May 10, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Conference Hall",
      description: "Workshop for parents on career opportunities and industry trends",
      type: "Career",
    },
  ]

  const stats = [
    { number: "100%", label: "Parent Satisfaction", icon: <Heart className="w-6 h-6" /> },
    { number: "24/7", label: "Campus Security", icon: <Shield className="w-6 h-6" /> },
    { number: "15+", label: "Years of Trust", icon: <Award className="w-6 h-6" /> },
    { number: "5000+", label: "Happy Families", icon: <Users className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-yellow-500 text-blue-900 font-bold mb-6 px-4 py-2">Trusted by Families</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Parents</h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Partner with us in nurturing your child's academic journey and character development
            </p>
          </div>
        </div>
      </section>

      {/* Parent Stats */}
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

      {/* College Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Vision & Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding our commitment to your child's holistic development
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-blue-50 border-blue-200 border-2">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <Eye className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-blue-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{collegeVision.vision}</p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-200 border-2">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <Target className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-green-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{collegeVision.mission}</p>
              </CardContent>
            </Card>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">Our Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {collegeVision.values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4">{value.icon}</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parent Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Parent Services</h2>
            <p className="text-xl text-gray-600">Stay connected with your child's educational journey</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {parentServices.map((service, index) => (
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
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Access Portal
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Support Systems */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Student Support Systems</h2>
            <p className="text-xl text-gray-600">Comprehensive support for your child's success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentSupport.map((support, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{support.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{support.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{support.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Services:</h4>
                    <div className="space-y-1">
                      {support.services.map((service, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span className="text-xs text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Safety & Security</h2>
            <p className="text-xl text-gray-600">Your child's safety is our top priority</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyMeasures.map((measure, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{measure.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{measure.measure}</h3>
                  <p className="text-gray-600 text-sm">{measure.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">What Parents Say</h2>
            <p className="text-xl text-gray-600">Hear from parents who trust us with their children's future</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {parentTestimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.testimonial}"</p>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600">{testimonial.relation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Upcoming Parent Events</h2>
            <p className="text-xl text-gray-600">Stay engaged with your child's educational community</p>
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
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
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
          <h2 className="text-4xl font-bold mb-6">Partner with Us in Your Child's Success</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join our community of parents who trust Sri Shanmugha Educational Institutions for their children's bright
            future
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
              Download Parent Handbook
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
