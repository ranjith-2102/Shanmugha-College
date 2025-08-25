"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  Users,
  Building,
  BookOpen,
  Globe,
  TrendingUp,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Target,
  Heart,
  Star,
  GraduationCap,
  Lightbulb,
  Shield,
  Zap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const milestones = [
    {
      year: "2010",
      title: "Foundation",
      description: "Sri Shanmugha Educational Institutions established with a vision for excellence",
    },
    {
      year: "2015",
      title: "NAAC Accreditation",
      description: "Achieved NAAC A+ accreditation for quality education standards",
    },
    {
      year: "2018",
      title: "International Partnerships",
      description: "Established collaborations with global universities",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented state-of-the-art digital learning infrastructure",
    },
    {
      year: "2023",
      title: "Research Excellence",
      description: "Recognized as a leading research institution in South India",
    },
  ]

  const values = [
    {
      icon: <Lightbulb className="w-12 h-12 text-yellow-600" />,
      title: "Innovation",
      description: "Fostering creativity and innovative thinking in all our endeavors",
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Integrity",
      description: "Maintaining the highest standards of ethical conduct and transparency",
    },
    {
      icon: <Star className="w-12 h-12 text-purple-600" />,
      title: "Excellence",
      description: "Striving for excellence in education, research, and service",
    },
    {
      icon: <Heart className="w-12 h-12 text-red-600" />,
      title: "Compassion",
      description: "Creating a caring and inclusive environment for all stakeholders",
    },
    {
      icon: <Zap className="w-12 h-12 text-orange-600" />,
      title: "Empowerment",
      description: "Empowering students to become leaders and change-makers",
    },
    {
      icon: <Globe className="w-12 h-12 text-green-600" />,
      title: "Global Perspective",
      description: "Preparing students for success in a globalized world",
    },
  ]

  const leadership = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Chairman & Managing Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      description: "Visionary leader with 25+ years in educational administration",
    },
    {
      name: "Dr. Priya Sharma",
      position: "Vice Chancellor",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
      description: "Renowned academician with expertise in curriculum development",
    },
    {
      name: "Prof. Arun Krishnan",
      position: "Dean of Academics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      description: "Distinguished professor with international research recognition",
    },
  ]

  const stats = [
    { number: "15+", label: "Years of Excellence", icon: <Calendar className="w-8 h-8 text-blue-600" /> },
    { number: "5000+", label: "Students", icon: <Users className="w-8 h-8 text-green-600" /> },
    { number: "300+", label: "Faculty Members", icon: <GraduationCap className="w-8 h-8 text-purple-600" /> },
    { number: "25+", label: "Academic Programs", icon: <BookOpen className="w-8 h-8 text-orange-600" /> },
    { number: "100%", label: "Placement Rate", icon: <TrendingUp className="w-8 h-8 text-red-600" /> },
    { number: "50+", label: "Industry Partners", icon: <Building className="w-8 h-8 text-indigo-600" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-yellow-500 text-blue-900 font-bold px-4 py-2 mb-6">About Us</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Shaping Futures Since 2010
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Sri Shanmugha Educational Institutions stands as a beacon of academic excellence, innovation, and holistic
              development, committed to nurturing the next generation of leaders and professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply-now">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold">
                  Join Our Community
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8">Our Mission & Vision</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Target className="w-6 h-6 text-yellow-500 mr-3" />
                    Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To provide world-class education that combines academic excellence with practical skills, fostering
                    innovation, critical thinking, and ethical leadership to create professionals who contribute
                    meaningfully to society and the global economy.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Star className="w-6 h-6 text-blue-500 mr-3" />
                    Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be recognized as a premier educational institution that transforms lives through innovative
                    teaching, cutting-edge research, and community engagement, preparing students to excel in a rapidly
                    evolving global landscape.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop"
                alt="Campus Vision"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600">Measurable excellence across all dimensions</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that guide our institution and shape our educational philosophy
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our path to excellence</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <Badge className="bg-yellow-500 text-blue-900 font-bold mb-3">{milestone.year}</Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Visionary leaders driving our institution forward</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{leader.position}</p>
                  <p className="text-gray-600 text-sm">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Be Part of Our Legacy</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of successful alumni who have built their careers with the foundation provided by Sri
              Shanmugha Educational Institutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/apply-now">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold">
                  Apply for Admission
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>0428-335-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@shanmugha.edu.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Tiruchengode, Salem, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
