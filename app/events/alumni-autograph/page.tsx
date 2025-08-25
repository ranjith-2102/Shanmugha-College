"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, Clock, MapPin, Users, Star, Award, Heart, Pen, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function AlumniAutographPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-09-20T14:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const eventDetails = {
    title: "Alumni Autograph Session",
    date: "September 20, 2025",
    time: "2:00 PM - 5:00 PM",
    venue: "Alumni Hall, Main Campus",
    description:
      "A special session where distinguished alumni share their experiences and sign autographs for current students",
    registrationFee: "Free",
    capacity: "200 Students",
  }

  const featuredAlumni = [
    {
      name: "Dr. Rajesh Kumar",
      batch: "2010",
      position: "Chief Technology Officer, Tech Innovations Ltd",
      achievement: "Leading AI research in healthcare",
      image: "/professional-male-doctor.png",
    },
    {
      name: "Ms. Priya Sharma",
      batch: "2012",
      position: "Senior Manager, Global Pharmaceuticals",
      achievement: "Pioneer in drug discovery research",
      image: "/professional-female-manager.png",
    },
    {
      name: "Mr. Arun Nair",
      batch: "2008",
      position: "Entrepreneur & Startup Founder",
      achievement: "Founded 3 successful tech startups",
      image: "/professional-male-entrepreneur.png",
    },
  ]

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-6xl mx-auto">
            <div className="text-8xl md:text-9xl font-black text-white/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              01
            </div>
            <Badge className="bg-yellow-500 text-purple-900 font-bold px-6 py-2 text-lg mb-6 relative z-10">
              <Pen className="w-5 h-5 mr-2" />
              Alumni Autograph Session
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black mb-8 relative z-10 leading-tight">
              MEET YOUR
              <span className="block text-yellow-400">HEROES</span>
            </h1>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-12 relative z-10">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-black text-yellow-400">{value}</div>
                  <div className="text-sm uppercase tracking-wider">{unit}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 relative z-10">
              <div className="flex items-center space-x-3 text-lg bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Calendar className="w-6 h-6 text-yellow-400" />
                <span className="font-semibold">{eventDetails.date}</span>
              </div>
              <div className="flex items-center space-x-3 text-lg bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Clock className="w-6 h-6 text-yellow-400" />
                <span className="font-semibold">{eventDetails.time}</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-black px-12 py-6 text-xl rounded-full relative z-10"
            >
              REGISTER NOW
              <ChevronRight className="w-6 h-6 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-9xl font-black text-gray-100 absolute top-8 left-8">02</div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 text-center">ABOUT THE EVENT</h2>
            <div className="bg-purple-50 rounded-3xl p-12">
              <p className="text-2xl text-gray-700 leading-relaxed text-center mb-8">{eventDetails.description}</p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Venue</h3>
                  <p className="text-gray-600">{eventDetails.venue}</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Capacity</h3>
                  <p className="text-gray-600">{eventDetails.capacity}</p>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Registration</h3>
                  <p className="text-gray-600">{eventDetails.registrationFee}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-9xl font-black text-gray-200 absolute top-8 right-8">03</div>
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-16 text-center">FEATURED ALUMNI</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredAlumni.map((alumni, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 rounded-3xl overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={alumni.image || "/placeholder.svg"}
                        alt={alumni.name}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-yellow-500 rounded-full p-3">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-black text-gray-900 mb-2">{alumni.name}</h3>
                      <p className="text-purple-600 font-bold mb-3">Batch of {alumni.batch}</p>
                      <p className="text-gray-600 mb-4">{alumni.position}</p>
                      <div className="bg-purple-100 rounded-2xl p-4">
                        <p className="text-purple-800 font-semibold">{alumni.achievement}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-9xl font-black text-gray-100 absolute top-8 left-8">04</div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-16 text-center">EVENT SCHEDULE</h2>
            <div className="space-y-8">
              {[
                { time: "2:00 PM", activity: "Welcome & Registration", desc: "Check-in and welcome refreshments" },
                {
                  time: "2:30 PM",
                  activity: "Alumni Introduction Session",
                  desc: "Meet and greet with featured alumni",
                },
                {
                  time: "3:00 PM",
                  activity: "Success Stories & Career Guidance",
                  desc: "Inspiring talks and career advice",
                },
                { time: "4:00 PM", activity: "Autograph & Photo Session", desc: "Personal interactions and memories" },
                { time: "4:30 PM", activity: "Networking & Refreshments", desc: "Casual networking with snacks" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-8 group">
                  <div className="flex-shrink-0 w-32 text-right">
                    <div className="text-2xl font-black text-purple-600">{item.time}</div>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="flex-1">
                    <Card className="hover:shadow-xl transition-all duration-300 border-0 rounded-2xl">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.activity}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-900 text-white relative">
        <div className="container mx-auto px-4">
          <div className="text-9xl font-black text-white/10 absolute top-8 right-8">05</div>
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <Heart className="w-20 h-20 text-yellow-400 mx-auto mb-8" />
            <h2 className="text-5xl md:text-6xl font-black mb-8">SECURE YOUR SPOT</h2>
            <p className="text-2xl text-purple-100 mb-12 leading-relaxed">
              Don't miss this once-in-a-lifetime opportunity to meet your heroes and create memories that will inspire
              your journey ahead.
            </p>
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-black px-16 py-8 text-2xl rounded-full"
            >
              REGISTER NOW
              <ChevronRight className="w-8 h-8 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
