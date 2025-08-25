import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import {
  Users,
  Award,
  Phone,
  Mail,
  TrendingUp,
  Briefcase,
  Calendar,
  MapPin,
  GraduationCap,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PlacementsPage() {
  const placementStats = [
    { label: "Overall Placement Rate", value: "100%", color: "text-green-600" },
    { label: "Highest Package", value: "₹15 LPA", color: "text-blue-600" },
    { label: "Average Package", value: "₹5.2 LPA", color: "text-purple-600" },
    { label: "Companies Visited", value: "250+", color: "text-orange-600" },
    { label: "Students Placed", value: "2500+", color: "text-pink-600" },
    { label: "Dream Offers", value: "180+", color: "text-indigo-600" },
  ]

  const departmentStats = [
    {
      department: "Engineering & Technology",
      placement: "100%",
      highest: "₹15 LPA",
      average: "₹5.8 LPA",
      companies: "120+",
      color: "bg-blue-100 text-blue-800",
    },
    {
      department: "Pharmacy",
      placement: "100%",
      highest: "₹8 LPA",
      average: "₹4.2 LPA",
      companies: "60+",
      color: "bg-green-100 text-green-800",
    },
    {
      department: "Nursing",
      placement: "100%",
      highest: "₹8 LPA",
      average: "₹3.8 LPA",
      companies: "50+",
      color: "bg-pink-100 text-pink-800",
    },
    {
      department: "Allied Health Sciences",
      placement: "100%",
      highest: "₹10 LPA",
      average: "₹4.5 LPA",
      companies: "70+",
      color: "bg-purple-100 text-purple-800",
    },
  ]

  const topRecruiters = [
    { name: "TCS", logo: "/placeholder.svg?height=60&width=120", sector: "IT Services" },
    { name: "Infosys", logo: "/placeholder.svg?height=60&width=120", sector: "IT Services" },
    { name: "Wipro", logo: "/placeholder.svg?height=60&width=120", sector: "IT Services" },
    { name: "Cognizant", logo: "/placeholder.svg?height=60&width=120", sector: "IT Services" },
    { name: "Accenture", logo: "/placeholder.svg?height=60&width=120", sector: "Consulting" },
    { name: "HCL Technologies", logo: "/placeholder.svg?height=60&width=120", sector: "IT Services" },
    { name: "Tech Mahindra", logo: "/placeholder.svg?height=60&width=120", sector: "IT Services" },
    { name: "Capgemini", logo: "/placeholder.svg?height=60&width=120", sector: "Consulting" },
    { name: "Apollo Hospitals", logo: "/placeholder.svg?height=60&width=120", sector: "Healthcare" },
    { name: "Fortis Healthcare", logo: "/placeholder.svg?height=60&width=120", sector: "Healthcare" },
    { name: "Dr. Reddy's Labs", logo: "/placeholder.svg?height=60&width=120", sector: "Pharmaceuticals" },
    { name: "Sun Pharma", logo: "/placeholder.svg?height=60&width=120", sector: "Pharmaceuticals" },
    { name: "Biocon", logo: "/placeholder.svg?height=60&width=120", sector: "Biotechnology" },
    { name: "Cipla", logo: "/placeholder.svg?height=60&width=120", sector: "Pharmaceuticals" },
    { name: "L&T", logo: "/placeholder.svg?height=60&width=120", sector: "Engineering" },
    { name: "Ashok Leyland", logo: "/placeholder.svg?height=60&width=120", sector: "Automotive" },
  ]

  const successStories = [
    {
      name: "Priya Sharma",
      department: "B.Tech Computer Science",
      company: "Google",
      package: "₹15 LPA",
      year: "2024",
      image: "/placeholder.svg?height=100&width=100",
      story:
        "The rigorous training and industry exposure at Sri Shanmugha prepared me for the competitive tech industry. The placement cell's guidance was instrumental in landing my dream job at Google.",
      position: "Software Engineer",
    },
    {
      name: "Rajesh Kumar",
      department: "B.Pharm",
      company: "Dr. Reddy's Laboratories",
      package: "₹8 LPA",
      year: "2024",
      image: "/placeholder.svg?height=100&width=100",
      story:
        "The comprehensive pharmaceutical education and hands-on lab experience gave me the confidence to excel in the industry. I'm grateful for the strong foundation provided by the college.",
      position: "Research Associate",
    },
    {
      name: "Anitha Devi",
      department: "B.Sc. Nursing",
      company: "Apollo Hospitals",
      package: "₹6 LPA",
      year: "2024",
      image: "/placeholder.svg?height=100&width=100",
      story:
        "The clinical training and international exposure through the dual degree program opened doors to excellent career opportunities. I'm now working in one of India's premier hospitals.",
      position: "Staff Nurse - ICU",
    },
    {
      name: "Karthik Raj",
      department: "B.Sc. Medical Lab Technology",
      company: "Quest Diagnostics",
      package: "₹7 LPA",
      year: "2024",
      image: "/placeholder.svg?height=100&width=100",
      story:
        "The advanced laboratory training and industry partnerships helped me secure a position in a leading diagnostic company. The practical knowledge gained here is invaluable.",
      position: "Lab Technologist",
    },
  ]

  const placementProcess = [
    {
      step: "1",
      title: "Pre-Placement Training",
      description: "Comprehensive training on aptitude, technical skills, and soft skills",
      duration: "6 months",
    },
    {
      step: "2",
      title: "Resume Building",
      description: "Professional resume preparation and portfolio development",
      duration: "2 weeks",
    },
    {
      step: "3",
      title: "Mock Interviews",
      description: "Practice sessions with industry experts and HR professionals",
      duration: "1 month",
    },
    {
      step: "4",
      title: "Company Visits",
      description: "On-campus recruitment drives and placement opportunities",
      duration: "Ongoing",
    },
    {
      step: "5",
      title: "Final Placement",
      description: "Job offers and placement confirmation with leading companies",
      duration: "Final Year",
    },
  ]

  const upcomingDrives = [
    {
      company: "Microsoft",
      date: "March 15, 2025",
      roles: ["Software Engineer", "Data Analyst"],
      package: "₹12-18 LPA",
      eligibility: "B.Tech/B.E - CSE, IT",
    },
    {
      company: "Amazon",
      date: "March 20, 2025",
      roles: ["SDE-1", "Business Analyst"],
      package: "₹15-20 LPA",
      eligibility: "B.Tech/B.E - All Branches",
    },
    {
      company: "Pfizer",
      date: "March 25, 2025",
      roles: ["Quality Analyst", "Research Associate"],
      package: "₹6-10 LPA",
      eligibility: "B.Pharm, M.Pharm",
    },
    {
      company: "Manipal Hospitals",
      date: "April 2, 2025",
      roles: ["Staff Nurse", "Clinical Coordinator"],
      package: "₹4-7 LPA",
      eligibility: "B.Sc. Nursing",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header title="Placements & Career Services" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-500 text-white mb-4">100% Placement Record</Badge>
              <h1 className="text-5xl font-bold mb-6 leading-tight">Launching Careers, Building Futures</h1>
              <p className="text-xl mb-8 text-blue-100">
                With our industry partnerships, comprehensive training programs, and dedicated placement cell, we ensure
                every student transitions seamlessly from education to employment.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-orange-400" />
                  <span>250+ Partner Companies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-orange-400" />
                  <span>2500+ Students Placed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-orange-400" />
                  <span>₹15 LPA Highest Package</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  View Placement Statistics
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Success Stories
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Placement Success"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm">Placement Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Placement Statistics 2024</h2>
            <p className="text-xl text-gray-600">Outstanding placement record across all departments</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {placementStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department-wise Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Department-wise Placement Statistics</h2>
            <p className="text-xl text-gray-600">Consistent excellence across all academic programs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {departmentStats.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{dept.department}</span>
                    <Badge className={dept.color}>{dept.placement}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{dept.highest}</div>
                      <div className="text-sm text-gray-600">Highest Package</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{dept.average}</div>
                      <div className="text-sm text-gray-600">Average Package</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{dept.companies}</div>
                      <div className="text-sm text-gray-600">Companies</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Top Recruiters</h2>
            <p className="text-xl text-gray-600">Leading companies across various industries trust our graduates</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {topRecruiters.map((company, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow group-hover:scale-105 transform transition-transform">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    width={120}
                    height={60}
                    className="mx-auto mb-2 grayscale group-hover:grayscale-0 transition-all"
                  />
                  <div className="text-sm font-semibold">{company.name}</div>
                  <div className="text-xs text-gray-600">{company.sector}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our successful alumni who are making their mark</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{story.name}</h3>
                      <p className="text-gray-600">{story.department}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge className="bg-blue-100 text-blue-800">{story.company}</Badge>
                        <Badge className="bg-green-100 text-green-800">{story.package}</Badge>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4">"{story.story}"</p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{story.position}</span>
                    <span>Class of {story.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Placement Process</h2>
            <p className="text-xl text-gray-600">Comprehensive training and support throughout your journey</p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {placementProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{process.description}</p>
                <Badge variant="secondary" className="text-xs">
                  {process.duration}
                </Badge>
                {index < placementProcess.length - 1 && (
                  <ChevronRight className="w-6 h-6 text-gray-400 mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Placement Drives */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Placement Drives</h2>
            <p className="text-xl text-gray-600">Don't miss these exciting opportunities</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingDrives.map((drive, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{drive.company}</span>
                    <Badge className="bg-orange-100 text-orange-800">{drive.package}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">{drive.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Briefcase className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{drive.roles.join(", ")}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">{drive.eligibility}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Cell Contact */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Connect with Our Placement Cell</h2>
              <p className="text-xl text-blue-100 mb-8">
                Our dedicated placement team is here to guide you through your career journey and connect you with the
                right opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-orange-400" />
                  <span>Placement Cell: +91 733 93 83 999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-orange-400" />
                  <span>placements@shanmugha.edu.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-orange-400" />
                  <span>Placement Office, Administrative Block</span>
                </div>
              </div>
            </div>
            <div className="bg-white text-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">For Recruiters</h3>
              <p className="text-gray-600 mb-6">
                Partner with us to hire talented graduates from our diverse academic programs.
              </p>
              <div className="space-y-4">
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Schedule Campus Visit</Button>
                <Button className="w-full" variant="outline">
                  Download Placement Brochure
                </Button>
                <Button className="w-full" variant="outline">
                  View Student Profiles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logo.svg"
                  alt="Sri Shanmugha Educational Institutions"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div>
                  <h3 className="text-lg font-bold">Sri Shanmugha</h3>
                  <p className="text-sm text-gray-400">Placements & Career Services</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Connecting talent with opportunities for a brighter future.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/placement-statistics" className="text-gray-400 hover:text-white">
                    Placement Statistics
                  </Link>
                </li>
                <li>
                  <Link href="/recruiters" className="text-gray-400 hover:text-white">
                    Our Recruiters
                  </Link>
                </li>
                <li>
                  <Link href="/success-stories" className="text-gray-400 hover:text-white">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="/training-programs" className="text-gray-400 hover:text-white">
                    Training Programs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">For Students</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/placement-registration" className="text-gray-400 hover:text-white">
                    Placement Registration
                  </Link>
                </li>
                <li>
                  <Link href="/resume-builder" className="text-gray-400 hover:text-white">
                    Resume Builder
                  </Link>
                </li>
                <li>
                  <Link href="/interview-preparation" className="text-gray-400 hover:text-white">
                    Interview Preparation
                  </Link>
                </li>
                <li>
                  <Link href="/career-guidance" className="text-gray-400 hover:text-white">
                    Career Guidance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">For Recruiters</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/hire-from-us" className="text-gray-400 hover:text-white">
                    Hire From Us
                  </Link>
                </li>
                <li>
                  <Link href="/campus-recruitment" className="text-gray-400 hover:text-white">
                    Campus Recruitment
                  </Link>
                </li>
                <li>
                  <Link href="/student-profiles" className="text-gray-400 hover:text-white">
                    Student Profiles
                  </Link>
                </li>
                <li>
                  <Link href="/placement-brochure" className="text-gray-400 hover:text-white">
                    Placement Brochure
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Sri Shanmugha Educational Institutions - Placement Cell. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
