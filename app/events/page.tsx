"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  Award,
  BookOpen,
  Trophy,
  Music,
  Zap,
  Filter,
  Search,
  Heart,
  Share2,
  Bookmark,
  ChevronRight,
  GraduationCap,
} from "lucide-react"
import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"
import AnimatedCounter from "@/components/animated-counter"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [likedEvents, setLikedEvents] = useState<number[]>([])
  const [bookmarkedEvents, setBookmarkedEvents] = useState<number[]>([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const toggleLike = (eventId: number) => {
    setLikedEvents((prev) => (prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId]))
  }

  const toggleBookmark = (eventId: number) => {
    setBookmarkedEvents((prev) => (prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId]))
  }

  const upcomingEvents = [
    {
      id: 1,
      title: "GRAND INAUGURATION - Academic Year 2025-26",
      date: "August 30, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Main Campus Auditorium",
      category: "academic",
      description:
        "Join us for the grand inauguration of the new academic year featuring distinguished guests, cultural performances, and the unveiling of new academic initiatives.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
      featured: true,
      registrations: 2500,
      icon: <Award className="w-6 h-6" />,
      price: "Free",
      organizer: "Academic Affairs",
      isLive: false,
      countdown: true,
      specialEvent: true,
    },
    {
      id: 2,
      title: "Alumni Reunion 2025 - Golden Memories",
      date: "September 15, 2025",
      time: "10:00 AM - 8:00 PM",
      location: "Main Campus & Alumni Hall",
      category: "alumni",
      description:
        "A grand reunion celebrating our distinguished alumni with networking sessions, cultural programs, and recognition ceremonies.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop",
      featured: true,
      registrations: 1500,
      icon: <GraduationCap className="w-6 h-6" />,
      price: "₹1000",
      organizer: "Alumni Association",
      isLive: false,
      countdown: true,
      specialEvent: true,
    },
    {
      id: 3,
      title: "Annual Tech Fest 2025 - INNOVATE",
      date: "March 15-17, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Main Campus Auditorium",
      category: "technical",
      description:
        "Three-day technical extravaganza featuring coding competitions, robotics, AI workshops, and tech exhibitions.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      featured: true,
      registrations: 1200,
      icon: <Zap className="w-6 h-6" />,
      price: "Free",
      organizer: "Computer Science Department",
      isLive: false,
      countdown: false,
      specialEvent: false,
    },
    {
      id: 4,
      title: "International Nursing Conference",
      date: "March 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Nursing College Auditorium",
      category: "academic",
      description: "Global experts sharing insights on modern nursing practices and healthcare innovations.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      featured: true,
      registrations: 300,
      icon: <BookOpen className="w-6 h-6" />,
      price: "₹500",
      organizer: "Nursing Department",
      isLive: false,
      countdown: false,
      specialEvent: false,
    },
    {
      id: 5,
      title: "Cultural Fest - KALEIDOSCOPE",
      date: "April 5-6, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "Open Air Theatre",
      category: "cultural",
      description: "Vibrant cultural celebration with dance, music, drama, and art competitions.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      featured: false,
      registrations: 800,
      icon: <Music className="w-6 h-6" />,
      price: "₹200",
      organizer: "Cultural Committee",
      isLive: false,
      countdown: false,
      specialEvent: false,
    },
    {
      id: 6,
      title: "Pharmacy Research Symposium",
      date: "April 12, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Pharmacy College",
      category: "research",
      description: "Latest research findings and innovations in pharmaceutical sciences.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      featured: false,
      registrations: 250,
      icon: <Award className="w-6 h-6" />,
      price: "₹300",
      organizer: "Pharmacy Department",
      isLive: false,
      countdown: false,
      specialEvent: false,
    },
    {
      id: 7,
      title: "Sports Championship 2025",
      date: "April 20-22, 2025",
      time: "8:00 AM - 6:00 PM",
      location: "Sports Complex",
      category: "sports",
      description: "Inter-collegiate sports competition featuring cricket, football, basketball, and athletics.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop",
      featured: false,
      registrations: 500,
      icon: <Trophy className="w-6 h-6" />,
      price: "Free",
      organizer: "Sports Department",
      isLive: false,
      countdown: false,
      specialEvent: false,
    },
    {
      id: 8,
      title: "Industry Connect Summit",
      date: "May 8, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Convention Center",
      category: "industry",
      description: "Networking event connecting students with industry leaders and potential employers.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
      featured: false,
      registrations: 600,
      icon: <Users className="w-6 h-6" />,
      price: "Free",
      organizer: "Placement Cell",
      isLive: false,
      countdown: false,
      specialEvent: false,
    },
  ]

  const pastEvents = [
    {
      title: "Graduation Ceremony 2024",
      date: "December 15, 2024",
      description: "Celebrating the achievements of 800+ graduates across all departments",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop",
      highlights: ["800+ Graduates", "100% Placement", "Distinguished Guests"],
      attendees: 2000,
    },
    {
      title: "Research Excellence Awards",
      date: "November 20, 2024",
      description: "Recognizing outstanding research contributions by faculty and students",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      highlights: ["25 Research Papers", "5 Patents Filed", "International Recognition"],
      attendees: 500,
    },
    {
      title: "Alumni Homecoming 2024",
      date: "October 10, 2024",
      description: "Reunion of alumni from the past decade sharing success stories",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=300&h=200&fit=crop",
      highlights: ["500+ Alumni", "Success Stories", "Networking Sessions"],
      attendees: 800,
    },
  ]

  const eventCategories = [
    {
      id: "all",
      name: "All Events",
      count: upcomingEvents.length,
      color: "bg-gray-100 text-gray-800 hover:bg-gray-200",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      id: "technical",
      name: "Technical",
      count: upcomingEvents.filter((e) => e.category === "technical").length,
      color: "bg-blue-100 text-blue-800 hover:bg-blue-200",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      id: "cultural",
      name: "Cultural",
      count: upcomingEvents.filter((e) => e.category === "cultural").length,
      color: "bg-purple-100 text-purple-800 hover:bg-purple-200",
      icon: <Music className="w-5 h-5" />,
    },
    {
      id: "academic",
      name: "Academic",
      count: upcomingEvents.filter((e) => e.category === "academic").length,
      color: "bg-green-100 text-green-800 hover:bg-green-200",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      id: "alumni",
      name: "Alumni",
      count: upcomingEvents.filter((e) => e.category === "alumni").length,
      color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      id: "sports",
      name: "Sports",
      count: upcomingEvents.filter((e) => e.category === "sports").length,
      color: "bg-orange-100 text-orange-800 hover:bg-orange-200",
      icon: <Trophy className="w-5 h-5" />,
    },
    {
      id: "industry",
      name: "Industry",
      count: upcomingEvents.filter((e) => e.category === "industry").length,
      color: "bg-red-100 text-red-800 hover:bg-red-200",
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: "research",
      name: "Research",
      count: upcomingEvents.filter((e) => e.category === "research").length,
      color: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200",
      icon: <Award className="w-5 h-5" />,
    },
  ]

  const filteredEvents = upcomingEvents.filter((event) => {
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getCountdown = (eventDate: string) => {
    const event = new Date(eventDate)
    const now = new Date()
    const diff = event.getTime() - now.getTime()

    if (diff <= 0) return null

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    return { days, hours, minutes }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Prominent Logo */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white pt-32 pb-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-200 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-green-200 rounded-full opacity-25 animate-pulse"></div>
          <div className="absolute bottom-20 right-40 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center">
              {/* Prominent Logo */}
              <div className="flex justify-center mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-full border border-white/20">
                    <Image
                      src="/institutional-logo.png"
                      alt="Sri Shanmugha Educational Institutions"
                      width={120}
                      height={120}
                      className="w-24 h-24 md:w-32 md:h-32 object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white mb-6 animate-pulse text-lg px-6 py-2">
                <Calendar className="w-5 h-5 mr-2" />
                Campus Events & Activities
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-yellow-200 bg-clip-text text-transparent">
                Vibrant Campus Life
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Experience a dynamic campus environment with exciting events, competitions, conferences, and
                celebrations that enrich your educational journey and create lasting memories.
              </p>

              {/* Live Clock */}
              <div className="mt-8 inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span className="text-lg font-mono">
                  {currentTime.toLocaleTimeString("en-IN", {
                    timeZone: "Asia/Kolkata",
                    hour12: true,
                  })}
                </span>
                <span className="text-sm text-blue-200">IST</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Event Stats with Interactive Elements */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl font-bold text-blue-600 mb-2 transform transition-transform group-hover:scale-110">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <div className="text-gray-600 font-medium">Annual Events</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                    <div className="bg-blue-600 h-2 rounded-full w-4/5 animate-pulse"></div>
                  </div>
                </div>
              </div>

              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl font-bold text-purple-600 mb-2 transform transition-transform group-hover:scale-110">
                    <AnimatedCounter end={5000} suffix="+" />
                  </div>
                  <div className="text-gray-600 font-medium">Participants</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                    <div className="bg-purple-600 h-2 rounded-full w-5/6 animate-pulse"></div>
                  </div>
                </div>
              </div>

              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl font-bold text-green-600 mb-2 transform transition-transform group-hover:scale-110">
                    <AnimatedCounter end={100} suffix="+" />
                  </div>
                  <div className="text-gray-600 font-medium">Colleges Participating</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                    <div className="bg-green-600 h-2 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                </div>
              </div>

              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl font-bold text-orange-600 mb-2 transform transition-transform group-hover:scale-110">
                    <AnimatedCounter end={25} suffix="+" />
                  </div>
                  <div className="text-gray-600 font-medium">Awards & Prizes</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                    <div className="bg-orange-600 h-2 rounded-full w-2/3 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Search and Filter */}
      <section className="py-8 bg-white border-b sticky top-20 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
              <div className="relative w-full sm:w-auto">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64 transition-all duration-300"
                />
              </div>
              <Button variant="outline" size="sm" className="hover:bg-blue-50 transition-colors bg-transparent">
                <Filter className="w-4 h-4 mr-2" />
                Advanced Filter
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
              {eventCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : `${category.color} border-gray-300`
                  } transition-all duration-300 transform hover:scale-105`}
                >
                  {category.icon}
                  <span className="ml-2">
                    {category.name} ({category.count})
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Events Section - August 30th & Alumni Reunion */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white mb-4 text-lg px-6 py-2 animate-bounce">
                <Star className="w-5 h-5 mr-2" />
                SPECIAL EVENTS
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Highlights</h2>
              <p className="text-xl text-blue-100">Don't miss these extraordinary events</p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Grand Inauguration */}
            <ScrollReveal delay={200}>
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=400&fit=crop"
                    alt="Grand Inauguration"
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white animate-pulse">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></div>
                      UPCOMING
                    </Badge>
                  </div>

                  {getCountdown("August 30, 2025") && (
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex space-x-4 text-white text-center">
                        <div>
                          <div className="text-2xl font-bold">{getCountdown("August 30, 2025")?.days}</div>
                          <div className="text-xs">DAYS</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{getCountdown("August 30, 2025")?.hours}</div>
                          <div className="text-xs">HRS</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{getCountdown("August 30, 2025")?.minutes}</div>
                          <div className="text-xs">MIN</div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => toggleLike(1)}
                      className={`${likedEvents.includes(1) ? "bg-red-500 text-white" : "bg-white/20 text-white"} backdrop-blur-sm hover:scale-110 transition-all`}
                    >
                      <Heart className={`w-4 h-4 ${likedEvents.includes(1) ? "fill-current" : ""}`} />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => toggleBookmark(1)}
                      className={`${bookmarkedEvents.includes(1) ? "bg-yellow-500 text-white" : "bg-white/20 text-white"} backdrop-blur-sm hover:scale-110 transition-all`}
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarkedEvents.includes(1) ? "fill-current" : ""}`} />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 text-white backdrop-blur-sm hover:scale-110 transition-all"
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">GRAND INAUGURATION</h3>
                      <p className="text-blue-200">Academic Year 2025-26</p>
                    </div>
                  </div>

                  <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                    Join us for the grand inauguration featuring distinguished guests, cultural performances, and new
                    academic initiatives.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-yellow-400" />
                      <span>Aug 30, 2025</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-yellow-400" />
                      <span>9:00 AM</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-yellow-400" />
                      <span>Main Campus</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-green-400 font-bold">FREE</span>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold transform transition-all duration-300 hover:scale-105"
                  >
                    Register Now
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Alumni Reunion */}
            <ScrollReveal delay={400}>
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=400&fit=crop"
                    alt="Alumni Reunion 2025"
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white animate-pulse">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      ALUMNI EVENT
                    </Badge>
                  </div>

                  {getCountdown("September 15, 2025") && (
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex space-x-4 text-white text-center">
                        <div>
                          <div className="text-2xl font-bold">{getCountdown("September 15, 2025")?.days}</div>
                          <div className="text-xs">DAYS</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{getCountdown("September 15, 2025")?.hours}</div>
                          <div className="text-xs">HRS</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{getCountdown("September 15, 2025")?.minutes}</div>
                          <div className="text-xs">MIN</div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => toggleLike(2)}
                      className={`${likedEvents.includes(2) ? "bg-red-500 text-white" : "bg-white/20 text-white"} backdrop-blur-sm hover:scale-110 transition-all`}
                    >
                      <Heart className={`w-4 h-4 ${likedEvents.includes(2) ? "fill-current" : ""}`} />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => toggleBookmark(2)}
                      className={`${bookmarkedEvents.includes(2) ? "bg-yellow-500 text-white" : "bg-white/20 text-white"} backdrop-blur-sm hover:scale-110 transition-all`}
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarkedEvents.includes(2) ? "fill-current" : ""}`} />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 text-white backdrop-blur-sm hover:scale-110 transition-all"
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">ALUMNI REUNION 2025</h3>
                      <p className="text-blue-200">Golden Memories</p>
                    </div>
                  </div>

                  <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                    A grand reunion celebrating our distinguished alumni with networking sessions, cultural programs,
                    and recognition ceremonies.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-yellow-400" />
                      <span>Sep 15, 2025</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-yellow-400" />
                      <span>10:00 AM</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-yellow-400" />
                      <span>Alumni Hall</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-yellow-400" />
                      <span>1500+ Expected</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold transform transition-all duration-300 hover:scale-105"
                    >
                      Register
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300 bg-transparent"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Events</h2>
              <p className="text-xl text-gray-600">Don't miss these exciting upcoming events</p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {filteredEvents
              .filter((event) => event.featured && event.id !== 1 && event.id !== 2)
              .map((event, index) => (
                <ScrollReveal key={event.id} delay={index * 200}>
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
                    <div className="relative">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        width={600}
                        height={300}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">Featured</Badge>
                      </div>

                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 text-gray-800 capitalize">{event.category}</Badge>
                      </div>

                      <div className="absolute bottom-4 left-4 flex space-x-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => toggleLike(event.id)}
                          className={`${likedEvents.includes(event.id) ? "bg-red-500 text-white" : "bg-white/20 text-white"} backdrop-blur-sm hover:scale-110 transition-all`}
                        >
                          <Heart className={`w-4 h-4 ${likedEvents.includes(event.id) ? "fill-current" : ""}`} />
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => toggleBookmark(event.id)}
                          className={`${bookmarkedEvents.includes(event.id) ? "bg-yellow-500 text-white" : "bg-white/20 text-white"} backdrop-blur-sm hover:scale-110 transition-all`}
                        >
                          <Bookmark
                            className={`w-4 h-4 ${bookmarkedEvents.includes(event.id) ? "fill-current" : ""}`}
                          />
                        </Button>
                      </div>

                      <div className="absolute bottom-4 right-4 text-white">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            {event.icon}
                          </div>
                          <span className="font-semibold text-sm">{event.organizer}</span>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4 text-blue-600" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 text-blue-600" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Users className="w-4 h-4 text-blue-600" />
                          <span>{event.registrations} Registered</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold text-green-600">{event.price}</div>
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 transform transition-all duration-300 hover:scale-105">
                          Register Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">All Upcoming Events</h2>
              <p className="text-xl text-gray-600">Mark your calendar for these exciting events</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents
              .filter((event) => !event.featured)
              .map((event, index) => (
                <ScrollReveal key={event.id} delay={index * 150}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-500 transform hover:scale-105 group">
                    <div className="relative">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      <div className="absolute top-4 right-4">
                        <Badge className={`${eventCategories.find((c) => c.id === event.category)?.color} capitalize`}>
                          {event.category}
                        </Badge>
                      </div>

                      <div className="absolute bottom-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => toggleLike(event.id)}
                          className={`${likedEvents.includes(event.id) ? "bg-red-500 text-white" : "bg-white/80 text-gray-800"} hover:scale-110 transition-all`}
                        >
                          <Heart className={`w-4 h-4 ${likedEvents.includes(event.id) ? "fill-current" : ""}`} />
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => toggleBookmark(event.id)}
                          className={`${bookmarkedEvents.includes(event.id) ? "bg-yellow-500 text-white" : "bg-white/80 text-gray-800"} hover:scale-110 transition-all`}
                        >
                          <Bookmark
                            className={`w-4 h-4 ${bookmarkedEvents.includes(event.id) ? "fill-current" : ""}`}
                          />
                        </Button>
                      </div>

                      <div className="absolute bottom-4 right-4">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <div className="text-white">{event.icon}</div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 text-blue-600" />
                          <span className="truncate">{event.location}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-green-600 font-semibold">{event.price}</span>
                          <span className="text-gray-500">{event.registrations} registered</span>
                        </div>
                      </div>

                      <Button
                        className="w-full hover:bg-blue-600 hover:text-white transition-all duration-300 bg-transparent"
                        variant="outline"
                      >
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Past Events Highlights</h2>
              <p className="text-xl text-gray-600">Celebrating our successful events and achievements</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-500 transform hover:scale-105 group">
                  <div className="relative">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 text-white">
                      <div className="flex items-center space-x-1 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                        <Users className="w-4 h-4" />
                        <span className="text-sm font-semibold">{event.attendees}</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{event.description}</p>

                    <div className="space-y-1">
                      <h4 className="font-semibold text-sm text-gray-800">Highlights:</h4>
                      {event.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span className="text-sm text-gray-600">{highlight}</span>
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Photo Gallery</h2>
              <p className="text-xl text-gray-600">Capturing memorable moments from our vibrant campus events</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <ScrollReveal delay={100}>
              <div className="relative group overflow-hidden rounded-lg aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=400&fit=crop"
                  alt="Cultural Event"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">Cultural Festival</h4>
                    <p className="text-sm text-gray-200">Annual Day Celebration</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative group overflow-hidden rounded-lg aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=400&fit=crop"
                  alt="Sports Event"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">Neptune Sports</h4>
                    <p className="text-sm text-gray-200">Inter-College Championship</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="relative group overflow-hidden rounded-lg aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=400&fit=crop"
                  alt="Tech Event"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">Ignite Tech Fest</h4>
                    <p className="text-sm text-gray-200">Innovation Showcase</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="relative group overflow-hidden rounded-lg aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop"
                  alt="Graduation"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">Convocation</h4>
                    <p className="text-sm text-gray-200">Graduation Ceremony</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="relative group overflow-hidden rounded-lg aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1559757148399-112ba8d25d1f?w=400&h=400&fit=crop"
                  alt="Workshop"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">Industry Workshop</h4>
                    <p className="text-sm text-gray-200">Skill Development</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="relative group overflow-hidden rounded-lg aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop"
                  alt="Onam Celebration"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">Onam Festival</h4>
                    <p className="text-sm text-gray-200">Traditional Celebration</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={700}>
              <div className="relative group overflow-hidden rounded-lg aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop"
                  alt="Medical Camp"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">Health Camp</h4>
                    <p className="text-sm text-gray-200">Community Service</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={800}>
              <div className="relative group overflow-hidden rounded-lg aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop"
                  alt="Alumni Meet"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">Alumni Autograph</h4>
                    <p className="text-sm text-gray-200">Celebrity Meet</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              View All Photos
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Event Registration CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20">
                    <Image
                      src="/institutional-logo.png"
                      alt="Sri Shanmugha Educational Institutions"
                      width={80}
                      height={80}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
              </div>

              <h2 className="text-4xl font-bold mb-6">Ready to Join Our Events?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Be part of our vibrant campus community. Register for upcoming events and create unforgettable memories
                while enhancing your skills and network.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 transform transition-all duration-300 hover:scale-105"
                >
                  View All Events
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300 bg-transparent"
                >
                  Event Calendar
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300 bg-transparent"
                >
                  Contact Event Team
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
