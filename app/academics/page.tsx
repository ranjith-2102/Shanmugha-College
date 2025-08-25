"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  BookOpen,
  Users,
  Award,
  Globe,
  Calendar,
  GraduationCap,
  Target,
  TrendingUp,
  Building,
  ChevronRight,
  Star,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AcademicsPage() {
  const departments = [
    {
      name: "Engineering & Technology",
      description: "Cutting-edge engineering programs with industry-aligned curriculum",
      programs: [
        "B.Tech Computer Science & Engineering",
        "B.Tech Artificial Intelligence & Data Science",
        "B.Tech Information Technology",
        "B.Tech Electronics & Communication",
        "B.Tech Mechanical Engineering",
        "B.Tech Civil Engineering",
        "M.Tech Computer Science",
        "M.Tech Industrial Safety",
      ],
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop",
      students: "500+",
      faculty: "45",
      href: "/engineering",
      color: "bg-blue-50 border-blue-200",
    },
    {
      name: "Pharmacy",
      description: "Comprehensive pharmaceutical education and research programs",
      programs: [
        "Pharm.D (Doctor of Pharmacy)",
        "B.Pharm (Bachelor of Pharmacy)",
        "M.Pharm Pharmaceutics",
        "M.Pharm Pharmaceutical Chemistry",
        "D.Pharm (Diploma in Pharmacy)",
        "B.Pharm (Lateral Entry)",
      ],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      students: "200+",
      faculty: "25",
      href: "/pharmacy",
      color: "bg-green-50 border-green-200",
    },
    {
      name: "Nursing",
      description: "Excellence in nursing education with international recognition",
      programs: [
        "B.Sc. Nursing (Dual Degree)",
        "B.Sc. Nursing",
        "BHSM (Bachelor of Humanistic & Social Medicine)",
        "Post Basic B.Sc. Nursing",
        "M.Sc. Nursing",
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      students: "190",
      faculty: "20",
      href: "/nursing",
      color: "bg-pink-50 border-pink-200",
    },
    {
      name: "Allied Health Sciences",
      description: "Specialized healthcare programs for modern medical needs",
      programs: [
        "B.Sc. Medical Laboratory Technology",
        "B.Sc. Cardiac Care Technology",
        "B.Sc. Optometry",
        "B.Sc. Operation Theatre Technology",
        "B.Sc. Occupational Therapy",
      ],
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop",
      students: "120",
      faculty: "15",
      href: "/allied-health",
      color: "bg-orange-50 border-orange-200",
    },
  ]

  const academicFeatures = [
    {
      title: "Industry-Aligned Curriculum",
      description: "Programs designed in consultation with industry experts to meet current market demands",
      icon: <Target className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Experienced Faculty",
      description: "Highly qualified faculty with extensive academic and industry experience",
      icon: <Users className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Research Opportunities",
      description: "Active research programs with opportunities for student participation",
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "International Collaborations",
      description: "Partnerships with global universities for exchange programs and dual degrees",
      icon: <Globe className="w-8 h-8 text-orange-600" />,
    },
    {
      title: "Modern Infrastructure",
      description: "State-of-the-art laboratories, libraries, and learning facilities",
      icon: <Building className="w-8 h-8 text-red-600" />,
    },
    {
      title: "100% Placement Support",
      description: "Comprehensive placement assistance with industry partnerships",
      icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
    },
  ]

  const academicCalendar = [
    { event: "Semester Registration", date: "June 1-15, 2025", type: "Registration" },
    { event: "Classes Begin", date: "June 16, 2025", type: "Academic" },
    { event: "Mid-Semester Exams", date: "August 15-25, 2025", type: "Examination" },
    { event: "Semester End Exams", date: "November 15-30, 2025", type: "Examination" },
    { event: "Results Declaration", date: "December 15, 2025", type: "Results" },
    { event: "Winter Break", date: "December 20 - January 5", type: "Break" },
  ]

  const stats = [
    { number: "25+", label: "Academic Programs", icon: <BookOpen className="w-6 h-6" /> },
    { number: "105", label: "Faculty Members", icon: <Users className="w-6 h-6" /> },
    { number: "1000+", label: "Students", icon: <GraduationCap className="w-6 h-6" /> },
    { number: "95%", label: "Pass Rate", icon: <Award className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-yellow-500 text-blue-900 font-bold mb-6 px-4 py-2">Academic Excellence</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Academics</h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Comprehensive academic programs designed to foster innovation, critical thinking, and professional
              excellence across multiple disciplines
            </p>
          </div>
        </div>
      </section>

      {/* Academic Stats */}
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

      {/* Departments */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Academic Departments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of academic programs across four major departments
            </p>
          </div>
          <div className="space-y-12">
            {departments.map((dept, index) => (
              <Card key={index} className={`${dept.color} border-2 hover:shadow-xl transition-all duration-300`}>
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{dept.name}</h3>
                    <p className="text-gray-700 mb-6">{dept.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{dept.students}</div>
                        <div className="text-sm text-gray-600">Students</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{dept.faculty}</div>
                        <div className="text-sm text-gray-600">Faculty</div>
                      </div>
                    </div>
                    <Link href={dept.href}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Explore Department
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <Image
                      src={dept.image || "/placeholder.svg"}
                      alt={dept.name}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg mb-6"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Programs Offered:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {dept.programs.slice(0, 4).map((program, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm text-gray-700">{program}</span>
                          </div>
                        ))}
                        {dept.programs.length > 4 && (
                          <div className="text-sm text-blue-600 font-medium">
                            +{dept.programs.length - 4} more programs
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Department Listing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">All Academic Programs</h2>
            <p className="text-xl text-gray-600">Complete listing of all departments and programs</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Engineering & Technology</h3>
                  <div className="space-y-2">
                    <Link href="/engineering" className="block text-gray-700 hover:text-blue-600 transition-colors">
                      → B.Tech Computer Science & Engineering
                    </Link>
                    <Link href="/engineering" className="block text-gray-700 hover:text-blue-600 transition-colors">
                      → B.Tech Artificial Intelligence & Data Science
                    </Link>
                    <Link href="/engineering" className="block text-gray-700 hover:text-blue-600 transition-colors">
                      → B.Tech Information Technology
                    </Link>
                    <Link href="/engineering" className="block text-gray-700 hover:text-blue-600 transition-colors">
                      → B.Tech Electronics & Communication
                    </Link>
                    <Link href="/engineering" className="block text-gray-700 hover:text-blue-600 transition-colors">
                      → B.Tech Mechanical Engineering
                    </Link>
                    <Link href="/engineering" className="block text-gray-700 hover:text-blue-600 transition-colors">
                      → B.Tech Civil Engineering
                    </Link>
                    <Link href="/engineering" className="block text-gray-700 hover:text-blue-600 transition-colors">
                      → M.Tech Programs
                    </Link>
                  </div>
                  <Link href="/engineering" className="inline-block mt-4">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">View All Engineering Programs</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-4">Pharmacy</h3>
                  <div className="space-y-2">
                    <Link href="/pharmacy" className="block text-gray-700 hover:text-green-600 transition-colors">
                      → Pharm.D (Doctor of Pharmacy)
                    </Link>
                    <Link href="/pharmacy" className="block text-gray-700 hover:text-green-600 transition-colors">
                      → B.Pharm (Bachelor of Pharmacy)
                    </Link>
                    <Link href="/pharmacy" className="block text-gray-700 hover:text-green-600 transition-colors">
                      → M.Pharm Pharmaceutics
                    </Link>
                    <Link href="/pharmacy" className="block text-gray-700 hover:text-green-600 transition-colors">
                      → M.Pharm Pharmaceutical Chemistry
                    </Link>
                    <Link href="/pharmacy" className="block text-gray-700 hover:text-green-600 transition-colors">
                      → D.Pharm (Diploma in Pharmacy)
                    </Link>
                    <Link href="/pharmacy" className="block text-gray-700 hover:text-green-600 transition-colors">
                      → B.Pharm (Lateral Entry)
                    </Link>
                  </div>
                  <Link href="/pharmacy" className="inline-block mt-4">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">View All Pharmacy Programs</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-pink-900 mb-4">Nursing</h3>
                  <div className="space-y-2">
                    <Link href="/nursing" className="block text-gray-700 hover:text-pink-600 transition-colors">
                      → B.Sc. Nursing (Dual Degree)
                    </Link>
                    <Link href="/nursing" className="block text-gray-700 hover:text-pink-600 transition-colors">
                      → B.Sc. Nursing
                    </Link>
                    <Link href="/nursing" className="block text-gray-700 hover:text-pink-600 transition-colors">
                      → BHSM (Bachelor of Humanistic & Social Medicine)
                    </Link>
                    <Link href="/nursing" className="block text-gray-700 hover:text-pink-600 transition-colors">
                      → Post Basic B.Sc. Nursing
                    </Link>
                    <Link href="/nursing" className="block text-gray-700 hover:text-pink-600 transition-colors">
                      → M.Sc. Nursing
                    </Link>
                  </div>
                  <Link href="/nursing" className="inline-block mt-4">
                    <Button className="bg-pink-600 hover:bg-pink-700 text-white">View All Nursing Programs</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-orange-900 mb-4">Allied Health Sciences</h3>
                  <div className="space-y-2">
                    <Link href="/allied-health" className="block text-gray-700 hover:text-orange-600 transition-colors">
                      → B.Sc. Medical Laboratory Technology
                    </Link>
                    <Link href="/allied-health" className="block text-gray-700 hover:text-orange-600 transition-colors">
                      → B.Sc. Cardiac Care Technology
                    </Link>
                    <Link href="/allied-health" className="block text-gray-700 hover:text-orange-600 transition-colors">
                      → B.Sc. Optometry
                    </Link>
                    <Link href="/allied-health" className="block text-gray-700 hover:text-orange-600 transition-colors">
                      → B.Sc. Operation Theatre Technology
                    </Link>
                    <Link href="/allied-health" className="block text-gray-700 hover:text-orange-600 transition-colors">
                      → B.Sc. Occupational Therapy
                    </Link>
                  </div>
                  <Link href="/allied-health" className="inline-block mt-4">
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                      View All Allied Health Programs
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Academic Excellence</h2>
            <p className="text-xl text-gray-600">What makes our academic programs stand out</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Academic Calendar 2025-26</h2>
            <p className="text-xl text-gray-600">Important dates and events for the academic year</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {academicCalendar.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-gray-900">{item.event}</h3>
                      <Badge
                        variant={
                          item.type === "Examination"
                            ? "destructive"
                            : item.type === "Registration"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {item.type}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Academic Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of students who have built successful careers through our comprehensive academic programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply-now">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold">
                Apply Now
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              Download Academic Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
