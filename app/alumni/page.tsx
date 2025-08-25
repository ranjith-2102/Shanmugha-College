"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  Users,
  Award,
  Building,
  TrendingUp,
  Globe,
  Heart,
  Calendar,
  MapPin,
  Briefcase,
  Star,
  ChevronRight,
  ExternalLink,
  Network,
} from "lucide-react"
import Image from "next/image"

export default function AlumniPage() {
  const featuredAlumni = [
    {
      name: "Dr. Arjun Krishnan",
      batch: "B.Tech CSE 2015",
      position: "Senior Software Engineer",
      company: "Google Inc., USA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      achievement: "Led development of Google Assistant's AI features",
      location: "Mountain View, California",
      linkedin: "linkedin.com/in/arjunkrishnan",
    },
    {
      name: "Dr. Priya Sharma",
      batch: "Pharm.D 2016",
      position: "Clinical Research Director",
      company: "Pfizer Inc., USA",
      image: "https://images.unsplash.com/photo-1494790108755-2616c6d4e6e8?w=300&h=300&fit=crop&crop=face",
      achievement: "Contributed to COVID-19 vaccine development",
      location: "New York, USA",
      linkedin: "linkedin.com/in/priyasharma",
    },
    {
      name: "Ms. Lakshmi Nair",
      batch: "B.Sc Nursing 2017",
      position: "Chief Nursing Officer",
      company: "Apollo Hospitals",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      achievement: "Implemented innovative patient care protocols",
      location: "Chennai, India",
      linkedin: "linkedin.com/in/lakshminnair",
    },
    {
      name: "Mr. Rajesh Kumar",
      batch: "B.Sc MLT 2018",
      position: "Lab Director",
      company: "Quest Diagnostics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      achievement: "Pioneered automated diagnostic solutions",
      location: "Bangalore, India",
      linkedin: "linkedin.com/in/rajeshkumar",
    },
  ]

  const alumniServices = [
    {
      title: "Alumni Network",
      description: "Connect with fellow graduates worldwide through our alumni platform",
      icon: <Network className="w-8 h-8 text-blue-600" />,
      features: ["Global Directory", "Professional Networking", "Mentorship Programs", "Industry Connections"],
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Career Services",
      description: "Ongoing career support and professional development opportunities",
      icon: <Briefcase className="w-8 h-8 text-green-600" />,
      features: ["Job Referrals", "Career Counseling", "Skill Development", "Industry Updates"],
      color: "bg-green-50 border-green-200",
    },
    {
      title: "Alumni Events",
      description: "Regular reunions, networking events, and professional gatherings",
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      features: ["Annual Reunions", "Regional Meetups", "Professional Seminars", "Cultural Events"],
      color: "bg-purple-50 border-purple-200",
    },
    {
      title: "Giving Back",
      description: "Opportunities to contribute to your alma mater and support current students",
      icon: <Heart className="w-8 h-8 text-red-600" />,
      features: ["Scholarship Programs", "Mentoring Students", "Guest Lectures", "Infrastructure Support"],
      color: "bg-red-50 border-red-200",
    },
  ]

  const alumniAchievements = [
    {
      category: "Technology Leaders",
      count: "500+",
      description: "Alumni working in top tech companies globally",
      companies: ["Google", "Microsoft", "Amazon", "Apple", "Meta"],
      icon: <Building className="w-8 h-8 text-blue-600" />,
    },
    {
      category: "Healthcare Professionals",
      count: "800+",
      description: "Alumni serving in healthcare sector worldwide",
      companies: ["Apollo", "Fortis", "AIIMS", "Johns Hopkins", "Mayo Clinic"],
      icon: <Heart className="w-8 h-8 text-red-600" />,
    },
    {
      category: "Entrepreneurs",
      count: "200+",
      description: "Alumni who started their own successful ventures",
      companies: ["Startups", "SMEs", "Unicorns", "Social Enterprises", "Tech Companies"],
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
    },
    {
      category: "Global Presence",
      count: "50+",
      description: "Countries where our alumni are making impact",
      companies: ["USA", "UK", "Canada", "Australia", "Germany"],
      icon: <Globe className="w-8 h-8 text-purple-600" />,
    },
  ]

  const upcomingEvents = [
    {
      title: "Global Alumni Meet 2025",
      date: "April 20-21, 2025",
      location: "Campus Auditorium",
      type: "Reunion",
      description: "Annual gathering of alumni from all batches with networking sessions and cultural programs",
      registrations: "500+ registered",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=250&fit=crop",
    },
    {
      title: "Tech Talk Series",
      date: "March 15, 2025",
      location: "Virtual Event",
      type: "Professional",
      description: "Industry insights and technology trends by successful alumni in tech sector",
      registrations: "200+ registered",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop",
    },
    {
      title: "Healthcare Innovation Summit",
      date: "May 5, 2025",
      location: "Medical College Auditorium",
      type: "Professional",
      description: "Healthcare alumni sharing innovations and best practices in medical field",
      registrations: "150+ registered",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
    },
  ]

  const alumniTestimonials = [
    {
      name: "Suresh Babu",
      batch: "B.Tech Mechanical 2014",
      position: "Engineering Manager, Tesla",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      testimonial:
        "Sri Shanmugha gave me the foundation to excel in the automotive industry. The practical knowledge and values instilled here continue to guide my career.",
      rating: 5,
    },
    {
      name: "Kavitha Reddy",
      batch: "B.Pharm 2016",
      position: "Research Scientist, Novartis",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      testimonial:
        "The research opportunities and faculty mentorship at Sri Shanmugha prepared me for a successful career in pharmaceutical research.",
      rating: 5,
    },
    {
      name: "Arun Kumar",
      batch: "B.Sc Nursing 2015",
      position: "Nurse Manager, Singapore General Hospital",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      testimonial:
        "The clinical training and compassionate care values learned at Sri Shanmugha have been instrumental in my international nursing career.",
      rating: 5,
    },
  ]

  const stats = [
    { number: "5000+", label: "Alumni Worldwide", icon: <Users className="w-6 h-6" /> },
    { number: "50+", label: "Countries", icon: <Globe className="w-6 h-6" /> },
    { number: "95%", label: "Employment Rate", icon: <Briefcase className="w-6 h-6" /> },
    { number: "15+", label: "Years Legacy", icon: <Award className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-yellow-500 text-blue-900 font-bold mb-6 px-4 py-2">Global Network</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Alumni</h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Join our thriving global community of successful graduates making impact across industries worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Alumni Stats */}
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

      {/* Featured Alumni */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Distinguished Alumni</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet some of our successful graduates who are making significant contributions in their fields
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredAlumni.map((alumni, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <Image
                      src={alumni.image || "/placeholder.svg"}
                      alt={alumni.name}
                      width={120}
                      height={120}
                      className="w-30 h-30 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{alumni.name}</h3>
                      <Badge className="mb-2">{alumni.batch}</Badge>
                      <p className="text-blue-600 font-semibold mb-1">{alumni.position}</p>
                      <p className="text-gray-600 mb-2">{alumni.company}</p>
                      <div className="flex items-center space-x-2 mb-3">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{alumni.location}</span>
                      </div>
                      <p className="text-gray-700 mb-4 text-sm italic">"{alumni.achievement}"</p>
                      <div className="flex items-center space-x-2">
                        <ExternalLink className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-blue-600">{alumni.linkedin}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Alumni Impact</h2>
            <p className="text-xl text-gray-600">
              Our graduates are making significant contributions across various sectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {alumniAchievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">{achievement.icon}</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.count}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{achievement.category}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{achievement.description}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {achievement.companies.slice(0, 3).map((company, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {company}
                      </Badge>
                    ))}
                    {achievement.companies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{achievement.companies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Alumni Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive support and networking opportunities for our graduates
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {alumniServices.map((service, index) => (
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
                    <h4 className="font-semibold text-gray-900 mb-3">Available Services:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Access Service
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
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
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Upcoming Alumni Events</h2>
            <p className="text-xl text-gray-600">
              Join us for networking, learning, and reconnecting with fellow alumni
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{event.type}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{event.title}</h3>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{event.registrations}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{event.description}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Register Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Alumni Voices</h2>
            <p className="text-xl text-gray-600">Hear from our successful graduates about their journey</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {alumniTestimonials.map((testimonial, index) => (
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
                  <p className="text-sm text-gray-600">{testimonial.batch}</p>
                  <p className="text-sm text-blue-600">{testimonial.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Connected with Your Alma Mater</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join our alumni network and continue to be part of the Sri Shanmugha family
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold">
              Join Alumni Network
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              Update Your Profile
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
