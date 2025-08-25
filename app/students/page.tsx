"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  BookOpen,
  Calendar,
  CreditCard,
  FileText,
  GraduationCap,
  Users,
  Clock,
  Phone,
  Mail,
  AlertCircle,
  CheckCircle,
  ExternalLink,
  Settings,
  Library,
  Bus,
  Shield,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

export default function StudentsPage() {
  const quickLinks = [
    {
      title: "Academic Portal",
      description: "Access grades, attendance, and course materials",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      href: "/student-portal",
      color: "bg-blue-50 border-blue-200",
      status: "Available",
    },
    {
      title: "Fee Payment",
      description: "Pay tuition fees and view payment history",
      icon: <CreditCard className="w-8 h-8 text-green-600" />,
      href: "/fee-payment",
      color: "bg-green-50 border-green-200",
      status: "Available",
    },
    {
      title: "Library Services",
      description: "Search books, renew loans, and access digital resources",
      icon: <Library className="w-8 h-8 text-purple-600" />,
      href: "/library",
      color: "bg-purple-50 border-purple-200",
      status: "Available",
    },
    {
      title: "Examination Portal",
      description: "View exam schedules, results, and hall tickets",
      icon: <FileText className="w-8 h-8 text-orange-600" />,
      href: "/examinations",
      color: "bg-orange-50 border-orange-200",
      status: "Available",
    },
    {
      title: "Hostel Services",
      description: "Room allocation, mess menu, and hostel facilities",
      icon: <Shield className="w-8 h-8 text-red-600" />,
      href: "/hostel",
      color: "bg-red-50 border-red-200",
      status: "Available",
    },
    {
      title: "Transport Services",
      description: "Bus routes, schedules, and transportation requests",
      icon: <Bus className="w-8 h-8 text-indigo-600" />,
      href: "/transport",
      color: "bg-indigo-50 border-indigo-200",
      status: "Available",
    },
  ]

  const academicServices = [
    {
      service: "Course Registration",
      deadline: "June 15, 2025",
      status: "Open",
      description: "Register for courses for the upcoming semester",
      action: "Register Now",
    },
    {
      service: "Mid-Semester Feedback",
      deadline: "August 30, 2025",
      status: "Upcoming",
      description: "Provide feedback on courses and faculty",
      action: "Coming Soon",
    },
    {
      service: "Semester Results",
      deadline: "December 20, 2024",
      status: "Available",
      description: "View your semester examination results",
      action: "View Results",
    },
    {
      service: "Transcript Request",
      deadline: "Ongoing",
      status: "Available",
      description: "Request official academic transcripts",
      action: "Request Now",
    },
  ]

  const campusServices = [
    {
      name: "Central Library",
      hours: "24/7",
      contact: "library@shanmugha.edu.in",
      status: "Open",
      description: "Books, journals, digital resources, and study spaces",
    },
    {
      name: "Student Cafeteria",
      hours: "7:00 AM - 10:00 PM",
      contact: "cafeteria@shanmugha.edu.in",
      status: "Open",
      description: "Multiple dining options with healthy meals",
    },
    {
      name: "Health Center",
      hours: "8:00 AM - 8:00 PM",
      contact: "health@shanmugha.edu.in",
      status: "Open",
      description: "Medical services and emergency care",
    },
    {
      name: "Sports Complex",
      hours: "6:00 AM - 10:00 PM",
      contact: "sports@shanmugha.edu.in",
      status: "Open",
      description: "Gym, courts, and sports equipment",
    },
    {
      name: "Student Counseling",
      hours: "9:00 AM - 5:00 PM",
      contact: "counseling@shanmugha.edu.in",
      status: "Available",
      description: "Academic and personal counseling services",
    },
    {
      name: "IT Help Desk",
      hours: "8:00 AM - 6:00 PM",
      contact: "ithelp@shanmugha.edu.in",
      status: "Available",
      description: "Technical support for students",
    },
  ]

  const importantNotices = [
    {
      title: "Semester Registration Extended",
      date: "January 15, 2025",
      type: "Academic",
      priority: "High",
      description: "Course registration deadline extended to January 20, 2025 due to technical issues.",
    },
    {
      title: "Cultural Fest - Shanmugha Utsav 2025",
      date: "January 12, 2025",
      type: "Event",
      priority: "Medium",
      description: "Annual cultural festival from March 15-17, 2025. Registration for events now open.",
    },
    {
      title: "Library Maintenance Schedule",
      date: "January 10, 2025",
      type: "Facility",
      priority: "Low",
      description: "Central library will be closed for maintenance on January 25, 2025 from 2:00 AM to 6:00 AM.",
    },
    {
      title: "Placement Drive - TCS",
      date: "January 8, 2025",
      type: "Placement",
      priority: "High",
      description: "TCS campus recruitment drive on January 30, 2025. Eligible students must register by January 25.",
    },
  ]

  const supportContacts = [
    {
      department: "Academic Office",
      contact: "academic@shanmugha.edu.in",
      phone: "0428-335-9999 Ext: 101",
      hours: "9:00 AM - 5:00 PM",
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
    },
    {
      department: "Student Affairs",
      contact: "studentaffairs@shanmugha.edu.in",
      phone: "0428-335-9999 Ext: 102",
      hours: "9:00 AM - 5:00 PM",
      icon: <Users className="w-6 h-6 text-green-600" />,
    },
    {
      department: "Finance Office",
      contact: "finance@shanmugha.edu.in",
      phone: "0428-335-9999 Ext: 103",
      hours: "9:00 AM - 4:00 PM",
      icon: <CreditCard className="w-6 h-6 text-orange-600" />,
    },
    {
      department: "Emergency Services",
      contact: "emergency@shanmugha.edu.in",
      phone: "0428-335-9999 Ext: 911",
      hours: "24/7",
      icon: <AlertCircle className="w-6 h-6 text-red-600" />,
    },
  ]

  const stats = [
    { number: "15+", label: "Online Services", icon: <Settings className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> },
    { number: "5000+", label: "Active Students", icon: <Users className="w-6 h-6" /> },
    { number: "99%", label: "Service Uptime", icon: <CheckCircle className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-yellow-500 text-blue-900 font-bold mb-6 px-4 py-2">Student Portal</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Students</h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Access all student services, academic resources, and campus information in one place
            </p>
          </div>
        </div>
      </section>

      {/* Student Stats */}
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

      {/* Quick Access Links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Quick Access</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access essential student services and resources with just one click
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickLinks.map((link, index) => (
              <Card key={index} className={`${link.color} border-2 hover:shadow-xl transition-all duration-300 group`}>
                <CardContent className="p-8 text-center">
                  <div className="mb-6">{link.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{link.title}</h3>
                  <p className="text-gray-600 mb-4">{link.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-green-100 text-green-800">{link.status}</Badge>
                  </div>
                  <Link href={link.href}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:shadow-lg transition-all duration-300">
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

      {/* Academic Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Academic Services</h2>
            <p className="text-xl text-gray-600">Important academic deadlines and services</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {academicServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{service.service}</h3>
                        <Badge
                          className={
                            service.status === "Open"
                              ? "bg-green-100 text-green-800"
                              : service.status === "Available"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {service.status}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-2">{service.description}</p>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>Deadline: {service.deadline}</span>
                      </div>
                    </div>
                    <Button
                      className={
                        service.status === "Open" || service.status === "Available"
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-gray-300 text-gray-600 cursor-not-allowed"
                      }
                      disabled={service.status === "Upcoming"}
                    >
                      {service.action}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Campus Services</h2>
            <p className="text-xl text-gray-600">Essential campus facilities and their availability</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campusServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>
                    <Badge className="bg-green-100 text-green-800">{service.status}</Badge>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{service.hours}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{service.contact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notices */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Important Notices</h2>
            <p className="text-xl text-gray-600">Stay updated with the latest announcements</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {importantNotices.map((notice, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{notice.title}</h3>
                        <Badge variant="outline">{notice.type}</Badge>
                        <Badge
                          className={
                            notice.priority === "High"
                              ? "bg-red-100 text-red-800"
                              : notice.priority === "Medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                          }
                        >
                          {notice.priority}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-2">{notice.description}</p>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{notice.date}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
              View All Notices
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Support Contacts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Support & Contact</h2>
            <p className="text-xl text-gray-600">Get help when you need it from our support teams</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportContacts.map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{contact.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{contact.department}</h3>
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

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Help?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our student support team is here to help you with any questions or concerns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold">
              Contact Support
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              Submit Feedback
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
