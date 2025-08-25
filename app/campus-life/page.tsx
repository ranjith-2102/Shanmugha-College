"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  Users,
  Calendar,
  MapPin,
  Clock,
  Trophy,
  Music,
  Palette,
  BookOpen,
  Utensils,
  Car,
  Shield,
  Heart,
  Gamepad2,
  Dumbbell,
  Theater,
  ChevronRight,
  Star,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CampusLifePage() {
  const studentActivities = [
    {
      title: "Cultural Club",
      description: "Dance, music, drama, and cultural events throughout the year",
      members: "200+",
      events: "15+ per year",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      icon: <Music className="w-6 h-6 text-purple-600" />,
      color: "bg-purple-50 border-purple-200",
    },
    {
      title: "Technical Society",
      description: "Coding competitions, hackathons, and technical workshops",
      members: "150+",
      events: "20+ per year",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Sports Club",
      description: "Cricket, football, basketball, badminton, and athletics",
      members: "300+",
      events: "25+ per year",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      icon: <Trophy className="w-6 h-6 text-green-600" />,
      color: "bg-green-50 border-green-200",
    },
    {
      title: "Art & Design Club",
      description: "Painting, photography, graphic design, and creative workshops",
      members: "100+",
      events: "12+ per year",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      icon: <Palette className="w-6 h-6 text-orange-600" />,
      color: "bg-orange-50 border-orange-200",
    },
    {
      title: "Community Service",
      description: "Social service activities and community outreach programs",
      members: "120+",
      events: "10+ per year",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
      icon: <Heart className="w-6 h-6 text-red-600" />,
      color: "bg-red-50 border-red-200",
    },
    {
      title: "Gaming & Esports",
      description: "Gaming tournaments, esports competitions, and gaming events",
      members: "80+",
      events: "8+ per year",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      icon: <Gamepad2 className="w-6 h-6 text-indigo-600" />,
      color: "bg-indigo-50 border-indigo-200",
    },
  ]

  const campusFacilities = [
    {
      name: "Central Library",
      description: "24/7 access with over 50,000 books and digital resources",
      features: ["Digital Library", "Study Rooms", "Research Section", "Wi-Fi Access"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    },
    {
      name: "Sports Complex",
      description: "Multi-sport facility with indoor and outdoor courts",
      features: ["Basketball Court", "Badminton Courts", "Gym", "Swimming Pool"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      icon: <Dumbbell className="w-8 h-8 text-green-600" />,
    },
    {
      name: "Student Cafeteria",
      description: "Multiple dining options with healthy and affordable meals",
      features: ["Multi-cuisine", "Healthy Options", "Affordable Prices", "Clean Environment"],
      image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=300&fit=crop",
      icon: <Utensils className="w-8 h-8 text-orange-600" />,
    },
    {
      name: "Auditorium",
      description: "State-of-the-art auditorium for events and performances",
      features: ["500 Seating", "Audio/Visual", "Stage Lighting", "Air Conditioned"],
      image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=400&h=300&fit=crop",
      icon: <Theater className="w-8 h-8 text-purple-600" />,
    },
    {
      name: "Student Hostels",
      description: "Comfortable accommodation with modern amenities",
      features: ["Wi-Fi", "Mess Facility", "Recreation Room", "24/7 Security"],
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop",
      icon: <Shield className="w-8 h-8 text-red-600" />,
    },
    {
      name: "Transportation",
      description: "Bus service connecting major areas of the city",
      features: ["Multiple Routes", "Safe Travel", "Affordable Rates", "Regular Service"],
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop",
      icon: <Car className="w-8 h-8 text-indigo-600" />,
    },
  ]

  const upcomingEvents = [
    {
      title: "Shanmugha Utsav 2025",
      date: "March 15-17, 2025",
      time: "All Day",
      location: "Campus Wide",
      type: "Cultural Festival",
      description: "Annual cultural festival featuring music, dance, drama, and literary competitions",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
      status: "upcoming",
    },
    {
      title: "Inter-College Sports Meet",
      date: "April 5-7, 2025",
      time: "8:00 AM - 6:00 PM",
      location: "Sports Complex",
      type: "Sports Event",
      description: "Annual sports competition with various indoor and outdoor games",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      status: "upcoming",
    },
    {
      title: "Tech Symposium",
      date: "February 28, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium",
      type: "Technical Event",
      description: "Technical presentations, workshops, and industry expert sessions",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop",
      status: "upcoming",
    },
    {
      title: "Art Exhibition",
      date: "March 1-3, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Art Gallery",
      type: "Cultural Event",
      description: "Student artwork display featuring paintings, sculptures, and digital art",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop",
      status: "upcoming",
    },
  ]

  const studentTestimonials = [
    {
      name: "Priya Sharma",
      course: "B.Tech Computer Science",
      year: "Final Year",
      image: "https://images.unsplash.com/photo-1494790108755-2616c6d4e6e8?w=150&h=150&fit=crop&crop=face",
      testimonial:
        "The campus life at Sri Shanmugha is incredible. The cultural activities and technical events have helped me grow both personally and professionally.",
      rating: 5,
    },
    {
      name: "Rahul Kumar",
      course: "B.Pharm",
      year: "Third Year",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      testimonial:
        "The sports facilities are amazing, and the faculty support for extracurricular activities is outstanding. I've made lifelong friends here.",
      rating: 5,
    },
    {
      name: "Anjali Patel",
      course: "B.Sc Nursing",
      year: "Second Year",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      testimonial:
        "The hostel facilities are excellent, and the campus environment is very safe and conducive to learning. The cultural clubs are very active.",
      rating: 5,
    },
  ]

  const stats = [
    { number: "15+", label: "Student Clubs", icon: <Users className="w-6 h-6" /> },
    { number: "100+", label: "Events per Year", icon: <Calendar className="w-6 h-6" /> },
    { number: "500+", label: "Active Members", icon: <Trophy className="w-6 h-6" /> },
    { number: "24/7", label: "Campus Security", icon: <Shield className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-yellow-500 text-blue-900 font-bold mb-6 px-4 py-2">Vibrant Community</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Campus Life</h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Experience a vibrant campus community with diverse activities, modern facilities, and lifelong friendships
            </p>
          </div>
        </div>
      </section>

      {/* Campus Stats */}
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

      {/* Student Activities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Student Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join diverse clubs and organizations to explore your interests and develop new skills
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentActivities.map((activity, index) => (
              <Card key={index} className={`${activity.color} border-2 hover:shadow-xl transition-all duration-300`}>
                <div className="relative">
                  <Image
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    {activity.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{activity.members}</div>
                      <div className="text-sm text-gray-600">Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{activity.events}</div>
                      <div className="text-sm text-gray-600">Events</div>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Join Club
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Campus Facilities</h2>
            <p className="text-xl text-gray-600">
              World-class amenities for a comfortable and enriching campus experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campusFacilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.name}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    {facility.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{facility.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{facility.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {facility.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span className="text-xs text-gray-700">{feature}</span>
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

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Don't miss these exciting campus events and activities</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
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

      {/* Student Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Student Voices</h2>
            <p className="text-xl text-gray-600">Hear what our students say about campus life</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {studentTestimonials.map((testimonial, index) => (
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
                  <p className="text-sm text-gray-600">{testimonial.course}</p>
                  <p className="text-sm text-blue-600">{testimonial.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Campus Community?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Experience the vibrant campus life at Sri Shanmugha Educational Institutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply-now">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold">
                Apply for Admission
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              Schedule Campus Visit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
