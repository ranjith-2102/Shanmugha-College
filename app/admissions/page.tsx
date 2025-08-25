"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  FileText,
  GraduationCap,
  Users,
  Award,
  CheckCircle,
  Download,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  Target,
  TrendingUp,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import AnimatedCounter from "@/components/animated-counter"

function Upload({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
      />
    </svg>
  )
}

export default function AdmissionsPage() {
  const admissionProcess = [
    {
      step: "1",
      title: "Online Application",
      description: "Fill out the online application form with all required details",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      step: "2",
      title: "Document Submission",
      description: "Upload all necessary documents and certificates",
      icon: <Upload className="w-6 h-6" />,
      color: "bg-green-500",
    },
    {
      step: "3",
      title: "Entrance Exam",
      description: "Appear for the entrance examination (if applicable)",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-purple-500",
    },
    {
      step: "4",
      title: "Interview & Counseling",
      description: "Attend the interview and counseling session",
      icon: <Users className="w-6 h-6" />,
      color: "bg-orange-500",
    },
    {
      step: "5",
      title: "Admission Confirmation",
      description: "Complete the admission process and fee payment",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "bg-emerald-500",
    },
  ]

  const importantDates = [
    { event: "Application Opens", date: "January 15, 2025", status: "active" },
    { event: "Last Date to Apply", date: "March 30, 2025", status: "upcoming" },
    { event: "Entrance Exam", date: "April 15, 2025", status: "upcoming" },
    { event: "Results Declaration", date: "April 30, 2025", status: "upcoming" },
    { event: "Counseling Begins", date: "May 5, 2025", status: "upcoming" },
    { event: "Classes Commence", date: "June 1, 2025", status: "upcoming" },
  ]

  const programs = [
    {
      department: "Engineering & Technology",
      programs: [
        { name: "B.Tech Computer Science & Engineering", seats: 120, duration: "4 Years" },
        { name: "B.Tech Artificial Intelligence & Data Science", seats: 60, duration: "4 Years" },
        { name: "B.Tech Mechanical Engineering", seats: 60, duration: "4 Years" },
        { name: "B.Tech Electronics & Communication", seats: 60, duration: "4 Years" },
        { name: "B.Tech Civil Engineering", seats: 60, duration: "4 Years" },
        { name: "M.Tech Computer Science", seats: 18, duration: "2 Years" },
      ],
      color: "bg-blue-50 border-blue-200",
      icon: <Target className="w-6 h-6 text-blue-600" />,
    },
    {
      department: "Pharmacy",
      programs: [
        { name: "Pharm.D", seats: 30, duration: "6 Years" },
        { name: "B.Pharm", seats: 60, duration: "4 Years" },
        { name: "M.Pharm Pharmaceutics", seats: 9, duration: "2 Years" },
        { name: "M.Pharm Pharmacology", seats: 9, duration: "2 Years" },
        { name: "D.Pharm", seats: 60, duration: "2 Years" },
      ],
      color: "bg-green-50 border-green-200",
      icon: <Award className="w-6 h-6 text-green-600" />,
    },
    {
      department: "Nursing",
      programs: [
        { name: "B.Sc Nursing", seats: 100, duration: "4 Years" },
        { name: "Post Basic B.Sc Nursing", seats: 20, duration: "2 Years" },
        { name: "M.Sc Nursing", seats: 10, duration: "2 Years" },
        { name: "GNM", seats: 60, duration: "3.5 Years" },
      ],
      color: "bg-pink-50 border-pink-200",
      icon: <Users className="w-6 h-6 text-pink-600" />,
    },
    {
      department: "Allied Health Science",
      programs: [
        { name: "B.Sc Medical Laboratory Technology", seats: 30, duration: "3 Years" },
        { name: "B.Sc Cardiac Care Technology", seats: 20, duration: "3 Years" },
        { name: "B.Sc Optometry", seats: 20, duration: "3 Years" },
        { name: "B.Sc Operation Theatre Technology", seats: 20, duration: "3 Years" },
        { name: "B.Sc Radiology & Imaging Technology", seats: 30, duration: "3 Years" },
      ],
      color: "bg-orange-50 border-orange-200",
      icon: <GraduationCap className="w-6 h-6 text-orange-600" />,
    },
  ]

  const eligibilityCriteria = [
    {
      program: "Engineering (B.Tech)",
      criteria: "12th with Physics, Chemistry, Mathematics (PCM) - Minimum 50% marks",
      entrance: "JEE Main / TNEA / Institution Entrance Exam",
    },
    {
      program: "Pharmacy (B.Pharm)",
      criteria: "12th with Physics, Chemistry, Biology/Mathematics - Minimum 50% marks",
      entrance: "NEET / TNEA / Institution Entrance Exam",
    },
    {
      program: "Nursing (B.Sc)",
      criteria: "12th with Physics, Chemistry, Biology - Minimum 50% marks",
      entrance: "NEET / Institution Entrance Exam",
    },
    {
      program: "Allied Health Science",
      criteria: "12th with Physics, Chemistry, Biology - Minimum 50% marks",
      entrance: "Institution Entrance Exam / Merit Based",
    },
  ]

  const scholarships = [
    {
      name: "Merit Scholarship",
      description: "For students scoring above 90% in qualifying examination",
      amount: "Up to 50% fee waiver",
      icon: <Award className="w-8 h-8 text-yellow-600" />,
    },
    {
      name: "Sports Scholarship",
      description: "For students with outstanding sports achievements",
      amount: "Up to 25% fee waiver",
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
    },
    {
      name: "Need-based Scholarship",
      description: "For economically disadvantaged students",
      amount: "Up to 30% fee waiver",
      icon: <Users className="w-8 h-8 text-blue-600" />,
    },
  ]

  const stats = [
    { number: 95, suffix: "%", label: "Admission Success Rate" },
    { number: 1200, suffix: "+", label: "Students Admitted Annually" },
    { number: 100, suffix: "%", label: "Placement Assistance" },
    { number: 15, suffix: "+", label: "Years of Excellence" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/engineering%20building.JPG-O1Kw8MP5i8so3v2tkJy63ajuYBfdQa.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex justify-center items-center space-x-4 mb-8">
                <Image
                  src="/badges/15-years-badge.svg"
                  alt="15 Years Excellence"
                  width={80}
                  height={80}
                  className="animate-pulse"
                />
                <Image src="/badges/naac-badge.svg" alt="NAAC A+ Accreditation" width={80} height={80} />
                <Image src="/badges/nba-badge.svg" alt="NBA Accreditation" width={80} height={80} />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">Admissions 2025-26</h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Join India's premier educational institution with NAAC A+ accreditation and 100% placement record
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/apply-now">
                  <Button
                    size="lg"
                    className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
                  >
                    Apply Now
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
                >
                  Download Prospectus
                  <Download className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Important Dates</h2>
              <p className="text-xl text-gray-600">Mark your calendar for key admission milestones</p>
            </div>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {importantDates.map((date, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            date.status === "active" ? "bg-green-500" : "bg-blue-500"
                          }`}
                        ></div>
                        <Badge variant={date.status === "active" ? "default" : "secondary"} className="text-xs">
                          {date.status === "active" ? "Active" : "Upcoming"}
                        </Badge>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{date.event}</h3>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{date.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Programs Offered</h2>
              <p className="text-xl text-gray-600">
                Choose from our comprehensive range of undergraduate and postgraduate programs
              </p>
            </div>
          </ScrollReveal>
          <div className="space-y-12">
            {programs.map((dept, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <Card className={`${dept.color} border-2 hover:shadow-xl transition-all duration-300`}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl">
                      {dept.icon}
                      <span>{dept.department}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {dept.programs.map((program, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                          <h4 className="font-semibold text-gray-900 mb-2">{program.name}</h4>
                          <div className="flex justify-between items-center text-sm text-gray-600">
                            <span>Duration: {program.duration}</span>
                            <Badge variant="outline">{program.seats} Seats</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Admission Process</h2>
              <p className="text-xl text-gray-600">Simple steps to secure your future with us</p>
            </div>
          </ScrollReveal>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {admissionProcess.map((step, index) => (
                <ScrollReveal key={index} delay={index * 150}>
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}
                    >
                      {step.icon}
                    </div>
                    <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold text-gray-700">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Eligibility Criteria</h2>
              <p className="text-xl text-gray-600">Check if you meet the requirements for your desired program</p>
            </div>
          </ScrollReveal>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {eligibilityCriteria.map((criteria, index) => (
                <ScrollReveal key={index} delay={index * 150}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{criteria.program}</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-1">Academic Requirements:</h4>
                          <p className="text-gray-600">{criteria.criteria}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-1">Entrance Exam:</h4>
                          <p className="text-gray-600">{criteria.entrance}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Scholarships Available</h2>
              <p className="text-xl text-gray-600">Financial assistance to support your educational journey</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {scholarships.map((scholarship, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-8">
                    <div className="mb-6">{scholarship.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{scholarship.name}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{scholarship.description}</p>
                    <Badge className="bg-green-100 text-green-800 font-semibold">{scholarship.amount}</Badge>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Need Help with Admissions?</h2>
              <p className="text-xl text-blue-100 mb-8">Our admission counselors are here to guide you</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={150}>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-blue-100">0428-335-9999</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-blue-100">admissions@shanmugha.edu.in</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={450}>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                <p className="text-blue-100">Salem, Tamil Nadu</p>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={600}>
            <div className="text-center mt-12">
              <Link href="/apply-now">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full"
                >
                  Start Your Application
                  <ChevronRight className="w-6 h-6 ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
