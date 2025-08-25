"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Users, Star, Zap, Code, Cpu, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function IgnitePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-11-10T09:00:00").getTime()

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

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-6xl mx-auto">
            <div className="text-8xl md:text-9xl font-black text-white/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              01
            </div>
            <Badge className="bg-yellow-500 text-gray-900 font-bold px-6 py-2 text-lg mb-6 relative z-10">
              <Zap className="w-5 h-5 mr-2" />
              Technical Fest
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black mb-8 relative z-10 leading-tight">
              IGNITE
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
              Spark your technical passion with coding competitions, robotics, AI challenges, and innovation showcases
            </p>

            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-black px-12 py-6 text-xl rounded-full relative z-10"
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
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 text-center">ABOUT IGNITE</h2>
            <div className="bg-gray-50 rounded-3xl p-12">
              <p className="text-2xl text-gray-700 leading-relaxed text-center mb-8">
                A three-day technical extravaganza featuring coding competitions, robotics, AI workshops, and innovation
                showcases that will ignite your passion for technology.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Venue</h3>
                  <p className="text-gray-600">Engineering Campus</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Capacity</h3>
                  <p className="text-gray-600">1500 Participants</p>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Registration</h3>
                  <p className="text-gray-600">₹300</p>
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
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-16 text-center">COMPETITIONS</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Code Sprint",
                  description: "24-hour coding marathon with challenging problems",
                  prize: "₹50,000",
                  participants: "Teams of 3",
                  icon: <Code className="w-8 h-8 text-blue-500" />,
                  color: "blue",
                },
                {
                  name: "Robo Wars",
                  description: "Build and battle with your custom robots",
                  prize: "₹30,000",
                  participants: "Teams of 4",
                  icon: <Cpu className="w-8 h-8 text-red-500" />,
                  color: "red",
                },
                {
                  name: "AI Challenge",
                  description: "Machine learning and AI problem solving",
                  prize: "₹40,000",
                  participants: "Teams of 2",
                  icon: <Zap className="w-8 h-8 text-yellow-500" />,
                  color: "yellow",
                },
                {
                  name: "Innovation Showcase",
                  description: "Present your innovative project ideas",
                  prize: "₹25,000",
                  participants: "Individual/Team",
                  icon: <Star className="w-8 h-8 text-purple-500" />,
                  color: "purple",
                },
              ].map((competition, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 rounded-3xl overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className={`bg-${competition.color}-100 rounded-2xl p-4`}>{competition.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-black text-gray-900 mb-3">{competition.name}</h3>
                        <p className="text-gray-600 mb-4 text-lg">{competition.description}</p>
                        <div className="flex items-center justify-between mb-4">
                          <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
                            Prize: {competition.prize}
                          </Badge>
                        </div>
                        <p className="text-gray-500 mb-4">{competition.participants}</p>
                        <Button className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3 rounded-full">
                          REGISTER
                        </Button>
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
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-16 text-center">3-DAY SCHEDULE</h2>
            <div className="space-y-8">
              {[
                {
                  day: "Day 1 - November 10",
                  events: [
                    { time: "9:00 AM", activity: "Registration & Opening Ceremony" },
                    { time: "10:00 AM", activity: "Code Sprint Begins" },
                    { time: "2:00 PM", activity: "Blockchain Workshop" },
                    { time: "6:00 PM", activity: "Tech Talk: Future of Computing" },
                  ],
                },
                {
                  day: "Day 2 - November 11",
                  events: [
                    { time: "9:00 AM", activity: "Robo Wars Competition" },
                    { time: "11:00 AM", activity: "AI Challenge Begins" },
                    { time: "2:00 PM", activity: "Machine Learning Workshop" },
                    { time: "6:00 PM", activity: "Innovation Showcase Presentations" },
                  ],
                },
                {
                  day: "Day 3 - November 12",
                  events: [
                    { time: "9:00 AM", activity: "Final Rounds of Competitions" },
                    { time: "2:00 PM", activity: "IoT Workshop" },
                    { time: "5:00 PM", activity: "Prize Distribution" },
                    { time: "7:00 PM", activity: "Closing Ceremony" },
                  ],
                },
              ].map((day, dayIndex) => (
                <Card key={dayIndex} className="border-0 rounded-3xl overflow-hidden shadow-xl">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                    <h3 className="text-2xl font-black">{day.day}</h3>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {day.events.map((event, eventIndex) => (
                        <div key={eventIndex} className="flex items-center space-x-6 group">
                          <div className="w-24 text-blue-600 font-black text-lg">{event.time}</div>
                          <div className="w-4 h-4 bg-yellow-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                          <div className="flex-1 text-gray-900 text-lg font-semibold">{event.activity}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative">
        <div className="container mx-auto px-4">
          <div className="text-9xl font-black text-white/10 absolute top-8 right-8">05</div>
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <Zap className="w-20 h-20 text-yellow-400 mx-auto mb-8" />
            <h2 className="text-5xl md:text-6xl font-black mb-8">IGNITE YOUR FUTURE</h2>
            <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
              Join us for three days of technical excellence, innovation, and competition. Limited seats available!
            </p>
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-black px-16 py-8 text-2xl rounded-full"
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
