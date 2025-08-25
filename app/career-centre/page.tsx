import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  Award,
  Building,
  Phone,
  Mail,
  Target,
  TrendingUp,
  Calendar,
  MapPin,
  Briefcase,
  Star,
  Clock,
  ChevronRight,
  UserCheck,
  Globe,
} from "lucide-react"
import Image from "next/image"

export default function CareerCentrePage() {
  const services = [
    {
      title: "Career Counseling",
      description: "One-on-one guidance sessions with industry experts",
      icon: <UserCheck className="w-8 h-8 text-blue-600" />,
      features: ["Resume Building", "Interview Preparation", "Career Planning", "Skill Assessment"],
    },
    {
      title: "Placement Assistance",
      description: "Direct connections with top recruiters and companies",
      icon: <Briefcase className="w-8 h-8 text-green-600" />,
      features: ["Campus Drives", "Job Matching", "Industry Networking", "Placement Support"],
    },
    {
      title: "Skill Development",
      description: "Industry-relevant training programs and certifications",
      icon: <Target className="w-8 h-8 text-purple-600" />,
      features: ["Technical Training", "Soft Skills", "Certification Programs", "Workshop Series"],
    },
    {
      title: "Alumni Network",
      description: "Connect with successful graduates in your field",
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      features: ["Mentorship Programs", "Industry Insights", "Networking Events", "Career Guidance"],
    },
  ]

  const topRecruiters = [
    { name: "Microsoft", logo: "/placeholder.svg?height=60&width=120", packages: "₹12-18 LPA" },
    { name: "Google", logo: "/placeholder.svg?height=60&width=120", packages: "₹15-25 LPA" },
    { name: "Amazon", logo: "/placeholder.svg?height=60&width=120", packages: "₹10-16 LPA" },
    { name: "TCS", logo: "/placeholder.svg?height=60&width=120", packages: "₹3.5-7 LPA" },
    { name: "Infosys", logo: "/placeholder.svg?height=60&width=120", packages: "₹4-8 LPA" },
    { name: "Wipro", logo: "/placeholder.svg?height=60&width=120", packages: "₹3.5-6 LPA" },
    { name: "Cognizant", logo: "/placeholder.svg?height=60&width=120", packages: "₹4-7 LPA" },
    { name: "Accenture", logo: "/placeholder.svg?height=60&width=120", packages: "₹4.5-8 LPA" },
  ]

  const placementStats = [
    { number: "100%", label: "Placement Rate", icon: <Award className="w-8 h-8 text-green-600" /> },
    { number: "300+", label: "Partner Companies", icon: <Building className="w-8 h-8 text-blue-600" /> },
    { number: "₹25 LPA", label: "Highest Package", icon: <TrendingUp className="w-8 h-8 text-purple-600" /> },
    { number: "₹6.5 LPA", label: "Average Package", icon: <Star className="w-8 h-8 text-orange-600" /> },
  ]

  const upcomingEvents = [
    {
      title: "Microsoft Campus Drive",
      date: "March 20, 2025",
      time: "10:00 AM",
      type: "Placement Drive",
      eligibility: "CSE, IT, ECE",
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Resume Building Workshop",
      date: "March 18, 2025",
      time: "2:00 PM",
      type: "Workshop",
      eligibility: "All Departments",
      color: "bg-green-50 border-green-200",
    },
    {
      title: "Industry Expert Talk",
      date: "March 22, 2025",
      time: "11:00 AM",
      type: "Seminar",
      eligibility: "Final Year Students",
      color: "bg-purple-50 border-purple-200",
    },
    {
      title: "Mock Interview Session",
      date: "March 25, 2025",
      time: "9:00 AM",
      type: "Training",
      eligibility: "Pre-final & Final Year",
      color: "bg-orange-50 border-orange-200",
    },
  ]

  const successStories = [
    {
      name: "Priya Sharma",
      batch: "2024",
      department: "Computer Science",
      company: "Microsoft",
      package: "₹18 LPA",
      image: "/placeholder.svg?height=100&width=100",
      quote: "The career guidance and placement support helped me land my dream job at Microsoft.",
    },
    {
      name: "Rajesh Kumar",
      batch: "2024",
      department: "Electronics",
      company: "Google",
      package: "₹22 LPA",
      image: "/placeholder.svg?height=100&width=100",
      quote: "Excellent training programs and industry connections made all the difference.",
    },
    {
      name: "Anitha Devi",
      batch: "2023",
      department: "Information Technology",
      company: "Amazon",
      package: "₹16 LPA",
      image: "/placeholder.svg?height=100&width=100",
      quote: "The mock interviews and skill development sessions were incredibly valuable.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-orange-500 text-white mb-4">Career Development</Badge>
            <h1 className="text-5xl font-bold mb-6">Career Centre</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Empowering students with comprehensive career services, industry connections, and placement opportunities
              to launch successful careers.
            </p>
          </div>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {placementStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Career Services</h2>
            <p className="text-xl text-gray-600">Comprehensive support for your career journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Top Recruiters</h2>
            <p className="text-xl text-gray-600">Leading companies that trust our graduates</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {topRecruiters.map((recruiter, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Image
                    src={recruiter.logo || "/placeholder.svg"}
                    alt={recruiter.name}
                    width={120}
                    height={60}
                    className="mx-auto mb-4"
                  />
                  <h3 className="font-semibold text-gray-900 mb-2">{recruiter.name}</h3>
                  <Badge className="bg-green-100 text-green-800">{recruiter.packages}</Badge>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Career Events</h2>
            <p className="text-xl text-gray-600">Don't miss these important career development opportunities</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className={`${event.color} border-2 hover:shadow-lg transition-shadow`}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-blue-600 text-white">{event.type}</Badge>
                    <div className="text-right text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {event.date}
                      </div>
                      <div className="flex items-center mt-1">
                        <Clock className="w-4 h-4 mr-1" />
                        {event.time}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">Eligibility: {event.eligibility}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Register Now
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our successful alumni</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
                  <p className="text-gray-600 mb-1">
                    {story.department} - {story.batch}
                  </p>
                  <div className="flex justify-center items-center space-x-2 mb-4">
                    <Badge className="bg-blue-100 text-blue-800">{story.company}</Badge>
                    <Badge className="bg-green-100 text-green-800">{story.package}</Badge>
                  </div>
                  <p className="text-gray-600 italic text-sm">"{story.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Career?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Connect with our career counselors and take the first step towards your dream job
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Schedule Career Counseling
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                View Job Opportunities
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                Download Placement Brochure
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Career Helpline</h3>
                <p>0428-335-9999 (Ext: 234)</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p>careers@shanmugha.edu.in</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p>Career Centre, Block A, Ground Floor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
