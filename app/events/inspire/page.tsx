"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Users, Star, Lightbulb, Target, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function InspirePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-10-15T09:00:00").getTime()

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

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-6xl mx-auto">
            <div className="text-8xl md:text-9xl font-black text-white/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              01
            </div>
            <Badge className="bg-yellow-500 text-blue-900 font-bold px-6 py-2 text-lg mb-6 relative z-10">
              <Lightbulb className="w-5 h-5 mr-2" />
              Innovation & Leadership Summit
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black mb-8 relative z-10 leading-tight">
              INSPIRE
              <span className="block text-yellow-400">2025</span>
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

            <p className="text-2xl mb-12 text-blue-100 leading-relaxed relative z-10 max-w-4xl mx-auto">
              Get inspired by industry leaders, entrepreneurs, and change-makers who are shaping the future
            </p>

            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-black px-12 py-6 text-xl rounded-full relative z-10"
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
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 text-center">ABOUT INSPIRE</h2>
            <div className="bg-blue-50 rounded-3xl p-12">
              <p className="text-2xl text-gray-700 leading-relaxed text-center mb-8">
                A motivational summit featuring industry leaders, entrepreneurs, and innovators sharing their success
                stories and insights to inspire the next generation of leaders.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Venue</h3>
                  <p className="text-gray-600">Convention Center, Main Campus</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Capacity</h3>
                  <p className="text-gray-600">500 Participants</p>
                </div>
                <div className="text-center">
                  <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Registration</h3>
                  <p className="text-gray-600">₹200</p>
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
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-16 text-center">KEYNOTE SPEAKERS</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Kiran Mazumdar-Shaw",
                  designation: "Executive Chairperson, Biocon Limited",
                  topic: "Innovation in Biotechnology",
                  image: "/placeholder.svg?height=300&width=300&text=Dr.+Kiran",
                },
                {
                  name: "Mr. Ritesh Agarwal",
                  designation: "Founder & CEO, OYO",
                  topic: "Entrepreneurship in Digital Age",
                  image: "/placeholder.svg?height=300&width=300&text=Ritesh+Agarwal",
                },
                {
                  name: "Ms. Falguni Nayar",
                  designation: "Founder & CEO, Nykaa",
                  topic: "Building Successful Startups",
                  image: "/placeholder.svg?height=300&width=300&text=Falguni+Nayar",
                },
              ].map((speaker, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 rounded-3xl overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={speaker.image || "/placeholder.svg"}
                        alt={speaker.name}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-yellow-500 rounded-full p-3">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-black text-gray-900 mb-2">{speaker.name}</h3>
                      <p className="text-blue-600 font-bold mb-3">{speaker.designation}</p>
                      <div className="bg-blue-100 rounded-2xl p-4">
                        <p className="text-blue-800 font-semibold">{speaker.topic}</p>
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
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-16 text-center">EVENT SESSIONS</h2>
            <div className="space-y-8">
              {[
                {
                  time: "9:00 AM - 10:30 AM",
                  title: "Opening Keynote: Future of Innovation",
                  speaker: "Dr. Kiran Mazumdar-Shaw",
                  type: "Keynote",
                },
                {
                  time: "11:00 AM - 12:00 PM",
                  title: "Panel Discussion: Startup Ecosystem in India",
                  speaker: "Industry Experts",
                  type: "Panel",
                },
                {
                  time: "1:00 PM - 2:00 PM",
                  title: "Leadership in Digital Transformation",
                  speaker: "Mr. Ritesh Agarwal",
                  type: "Talk",
                },
                {
                  time: "2:30 PM - 3:30 PM",
                  title: "Women in Entrepreneurship",
                  speaker: "Ms. Falguni Nayar",
                  type: "Talk",
                },
                {
                  time: "4:00 PM - 5:00 PM",
                  title: "Interactive Q&A and Networking",
                  speaker: "All Speakers",
                  type: "Interactive",
                },
              ].map((session, index) => (
                <div key={index} className="flex items-center gap-8 group">
                  <div className="flex-shrink-0 w-32 text-right">
                    <div className="text-2xl font-black text-blue-600">{session.time}</div>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="flex-1">
                    <Card className="hover:shadow-xl transition-all duration-300 border-0 rounded-2xl">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge
                            className={`${
                              session.type === "Keynote"
                                ? "bg-blue-100 text-blue-800"
                                : session.type === "Panel"
                                  ? "bg-green-100 text-green-800"
                                  : session.type === "Talk"
                                    ? "bg-purple-100 text-purple-800"
                                    : "bg-orange-100 text-orange-800"
                            }`}
                          >
                            {session.type}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{session.title}</h3>
                        <p className="text-gray-600">Speaker: {session.speaker}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-white relative">
        <div className="container mx-auto px-4">
          <div className="text-9xl font-black text-white/10 absolute top-8 right-8">05</div>
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <Lightbulb className="w-20 h-20 text-yellow-400 mx-auto mb-8" />
            <h2 className="text-5xl md:text-6xl font-black mb-8">GET INSPIRED</h2>
            <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
              Transform your mindset, accelerate your career, and connect with industry leaders who are shaping the
              future.
            </p>
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-black px-16 py-8 text-2xl rounded-full"
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
