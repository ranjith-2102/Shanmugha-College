"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  Globe,
  Users,
  Award,
  BookOpen,
  Plane,
  GraduationCap,
  MapPin,
  Calendar,
  ChevronRight,
  FileText,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"

export default function InternationalPage() {
  const globalPartners = [
    {
      name: "University of California, USA",
      country: "United States",
      programs: ["Student Exchange", "Dual Degree", "Research Collaboration"],
      duration: "1-2 Semesters",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
      flag: "🇺🇸",
      established: "2018",
    },
    {
      name: "University of Melbourne, Australia",
      country: "Australia",
      programs: ["Study Abroad", "Internship Program", "Faculty Exchange"],
      duration: "6 months - 1 year",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      flag: "🇦🇺",
      established: "2019",
    },
    {
      name: "Technical University of Munich, Germany",
      country: "Germany",
      programs: ["Research Exchange", "Dual Degree", "Summer Programs"],
      duration: "3 months - 2 years",
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=300&fit=crop",
      flag: "🇩🇪",
      established: "2020",
    },
    {
      name: "National University of Singapore",
      country: "Singapore",
      programs: ["Student Exchange", "Research Collaboration", "Joint Programs"],
      duration: "1 semester - 1 year",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      flag: "🇸🇬",
      established: "2017",
    },
    {
      name: "University of Toronto, Canada",
      country: "Canada",
      programs: ["Study Abroad", "Co-op Programs", "Research Exchange"],
      duration: "4 months - 2 years",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop",
      flag: "🇨🇦",
      established: "2021",
    },
    {
      name: "University of Edinburgh, UK",
      country: "United Kingdom",
      programs: ["Semester Abroad", "Summer School", "Research Programs"],
      duration: "3 months - 1 year",
      image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=400&h=300&fit=crop",
      flag: "🇬🇧",
      established: "2019",
    },
  ]

  const internationalPrograms = [
    {
      title: "Student Exchange Program",
      description: "Study abroad for one or two semesters at partner universities",
      duration: "1-2 Semesters",
      eligibility: "CGPA 7.5+",
      benefits: ["Cultural Exposure", "Academic Credits", "Global Network", "Language Skills"],
      icon: <Users className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Dual Degree Program",
      description: "Earn degrees from both Sri Shanmugha and partner universities",
      duration: "2-3 Years",
      eligibility: "CGPA 8.0+",
      benefits: ["Two Degrees", "International Experience", "Enhanced Career Prospects", "Research Opportunities"],
      icon: <GraduationCap className="w-8 h-8 text-green-600" />,
      color: "bg-green-50 border-green-200",
    },
    {
      title: "Research Exchange",
      description: "Collaborate on research projects with international faculty",
      duration: "3-12 Months",
      eligibility: "Research Aptitude",
      benefits: ["Research Experience", "Publications", "International Mentorship", "Lab Access"],
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-50 border-purple-200",
    },
    {
      title: "Summer Programs",
      description: "Short-term intensive programs during summer breaks",
      duration: "2-8 Weeks",
      eligibility: "All Students",
      benefits: ["Skill Development", "Cultural Immersion", "Networking", "Certificates"],
      icon: <Calendar className="w-8 h-8 text-orange-600" />,
      color: "bg-orange-50 border-orange-200",
    },
  ]

  const studentExperiences = [
    {
      name: "Arjun Patel",
      program: "Student Exchange - UC Berkeley",
      course: "B.Tech Computer Science",
      duration: "Fall 2024",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      experience:
        "Studying at UC Berkeley was life-changing. The exposure to cutting-edge research and diverse perspectives has broadened my horizons significantly.",
      country: "🇺🇸 USA",
    },
    {
      name: "Priya Sharma",
      program: "Research Exchange - TU Munich",
      course: "M.Tech AI & Data Science",
      duration: "Spring 2024",
      image: "https://images.unsplash.com/photo-1494790108755-2616c6d4e6e8?w=150&h=150&fit=crop&crop=face",
      experience:
        "Working in German research labs gave me invaluable experience in advanced AI techniques. The collaboration resulted in two research publications.",
      country: "🇩🇪 Germany",
    },
    {
      name: "Rahul Kumar",
      program: "Dual Degree - University of Melbourne",
      course: "B.Pharm + Master's",
      duration: "2023-2025",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      experience:
        "The dual degree program allowed me to gain international perspective in pharmaceutical sciences while maintaining strong roots in Indian education.",
      country: "🇦🇺 Australia",
    },
  ]

  const applicationProcess = [
    {
      step: 1,
      title: "Initial Application",
      description: "Submit application with academic transcripts and statement of purpose",
      timeline: "3 months before program start",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
    },
    {
      step: 2,
      title: "Selection Process",
      description: "Academic review, interview, and language proficiency assessment",
      timeline: "2 months before program start",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
    },
    {
      step: 3,
      title: "Visa & Documentation",
      description: "Assistance with visa application and required documentation",
      timeline: "1.5 months before program start",
      icon: <FileText className="w-6 h-6 text-orange-600" />,
    },
    {
      step: 4,
      title: "Pre-departure Orientation",
      description: "Cultural orientation, travel arrangements, and final preparations",
      timeline: "2 weeks before departure",
      icon: <Plane className="w-6 h-6 text-purple-600" />,
    },
  ]

  const stats = [
    { number: "15+", label: "Partner Universities", icon: <Globe className="w-6 h-6" /> },
    { number: "200+", label: "Students Abroad", icon: <Users className="w-6 h-6" /> },
    { number: "12", label: "Countries", icon: <MapPin className="w-6 h-6" /> },
    { number: "95%", label: "Success Rate", icon: <Award className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-yellow-500 text-blue-900 font-bold mb-6 px-4 py-2">Global Education</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">International Programs</h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Expand your horizons with world-class international education opportunities and global partnerships
            </p>
          </div>
        </div>
      </section>

      {/* International Stats */}
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

      {/* Global Partners */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Global University Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborate with prestigious universities worldwide through our established partnerships
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalPartners.map((partner, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <Image
                    src={partner.image || "/placeholder.svg"}
                    alt={partner.name}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-2xl">{partner.flag}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    Since {partner.established}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
                  <p className="text-gray-600 mb-4">{partner.country}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Programs Available:</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.programs.map((program, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {program}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <strong>Duration:</strong> {partner.duration}
                    </div>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* International Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">International Programs</h2>
            <p className="text-xl text-gray-600">Choose from various international education opportunities</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {internationalPrograms.map((program, index) => (
              <Card key={index} className={`${program.color} border-2 hover:shadow-xl transition-all duration-300`}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    {program.icon}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                      <p className="text-gray-600">{program.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Duration</div>
                      <div className="text-blue-600 font-medium">{program.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Eligibility</div>
                      <div className="text-green-600 font-medium">{program.eligibility}</div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Program Benefits:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Apply Now
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Experiences */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Student Experiences</h2>
            <p className="text-xl text-gray-600">
              Hear from students who have participated in our international programs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {studentExperiences.map((student, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src={student.image || "/placeholder.svg"}
                      alt={student.name}
                      width={60}
                      height={60}
                      className="w-15 h-15 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">{student.name}</h3>
                      <p className="text-sm text-gray-600">{student.course}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-sm">{student.country}</span>
                        <Badge variant="outline" className="text-xs">
                          {student.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-blue-600 text-sm mb-2">{student.program}</h4>
                    <p className="text-gray-600 text-sm italic">"{student.experience}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">Simple steps to begin your international education journey</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applicationProcess.map((step, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-2xl font-bold text-blue-600">{step.step}</div>
                    </div>
                    <div className="mb-4">{step.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{step.description}</p>
                    <div className="text-xs text-blue-600 font-medium">{step.timeline}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Go Global?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Take the first step towards an international education experience that will transform your future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold">
              Apply for International Programs
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
