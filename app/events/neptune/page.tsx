"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Users, Trophy, Target, Zap, Medal, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function NeptunePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-12-05T06:00:00").getTime()

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

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 via-green-500 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-6xl mx-auto">
            <div className="text-8xl md:text-9xl font-black text-white/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              01
            </div>
            <Badge className="bg-yellow-500 text-blue-900 font-bold px-6 py-2 text-lg mb-6 relative z-10">
              <Trophy className="w-5 h-5 mr-2" />
              Sports Championship
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black mb-8 relative z-10 leading-tight">
              NEPTUNE
              <span className="block text-yellow-300">2025</span>
            </h1>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-12 relative z-10">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-black text-yellow-300">{value}</div>
                  <div className="text-sm uppercase tracking-wider">{unit}</div>
                </div>
              ))}
            </div>

            <p className="text-2xl mb-12 text-blue-100 leading-relaxed relative z-10 max-w-4xl mx-auto">
              Dive into the ultimate sports championship featuring cricket, football, basketball, athletics, and more
            </p>

            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-black px-12 py-6 text-xl rounded-full relative z-10"
            >
              REGISTER TEAM
              <ChevronRight className="w-6 h-6 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-9xl font-black text-gray-100 absolute top-8 left-8">02</div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 text-center">ABOUT NEPTUNE</h2>
            <div className="bg-blue-50 rounded-3xl p-12">
              <p className="text-2xl text-gray-700 leading-relaxed text-center mb-8">
                Four days of intense sports competition featuring cricket, football, basketball, athletics, and more.
                Experience the thrill of victory and the spirit of sportsmanship.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Venue</h3>
                  <p className="text-gray-600">Sports Complex & Main Ground</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Athletes</h3>
                  <p className="text-gray-600">2000 Participants</p>
                </div>
                <div className="text-center">
                  <Medal className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Entry Fee</h3>
                  <p className="text-gray-600">₹150</p>
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
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-16 text-center">SPORTS EVENTS</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Cricket Tournament",
                  format: "T20 Format",
                  teams: "16 Teams",
                  prize: "₹25,000",
                  icon: <Target className="w-8 h-8 text-green-500" />,
                  color: "green",
                },
                {
                  name: "Football Championship",
                  format: "11v11",
                  teams: "12 Teams",
                  prize: "₹20,000",
                  icon: <Zap className="w-8 h-8 text-blue-500" />,
                  color: "blue",
                },
                {
                  name: "Basketball League",
                  format: "5v5",
                  teams: "10 Teams",
                  prize: "₹15,000",
                  icon: <Trophy className="w-8 h-8 text-orange-500" />,
                  color: "orange",
                },
                {
                  name: "Athletics Meet",
                  format: "Individual Events",
                  teams: "Open Category",
                  prize: "₹30,000",
                  icon: <Medal className="w-8 h-8 text-yellow-500" />,
                  color: "yellow",
                },
                {
                  name: "Volleyball Tournament",
                  format: "6v6",
                  teams: "8 Teams",
                  prize: "₹12,000",
                  icon: <Target className="w-8 h-8 text-purple-500" />,
                  color: "purple",
                },
                {
                  name: "Badminton Championship",
                  format: "Singles & Doubles",
                  teams: "Individual",
                  prize: "₹10,000",
                  icon: <Zap className="w-8 h-8 text-red-500" />,
                  color: "red",
                },
              ].map((sport, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 rounded-3xl overflow-hidden"
                >
                  <CardContent className="p-8 text-center">
                    <div className={`bg-${sport.color}-100 rounded-full p-4 w-fit mx-auto mb-6`}>{sport.icon}</div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3">{sport.name}</h3>
                    <p className="text-blue-600 font-bold mb-2 text-lg">{sport.format}</p>
                    <p className="text-gray-600 mb-4">{sport.teams}</p>
                    <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2 mb-6">Prize: {sport.prize}</Badge>
                    <div>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full">
                        REGISTER TEAM
                      </Button>
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
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-16 text-center">4-DAY SCHEDULE</h2>
            <div className="space-y-8">
              {[
                {
                  day: "Day 1 - December 5",
                  events: [
                    { time: "6:00 AM", activity: "Opening Ceremony & March Past" },
                    { time: "8:00 AM", activity: "Athletics Heats & Cricket Matches Begin" },
                    { time: "2:00 PM", activity: "Football & Basketball Matches" },
                    { time: "6:00 PM", activity: "Volleyball & Badminton Matches" },
                  ],
                },
                {
                  day: "Day 2 - December 6",
                  events: [
                    { time: "6:00 AM", activity: "Athletics Finals" },
                    { time: "9:00 AM", activity: "Cricket Quarter Finals" },
                    { time: "2:00 PM", activity: "Football & Basketball Semi Finals" },
                    { time: "6:00 PM", activity: "Individual Sports Finals" },
                  ],
                },
                {
                  day: "Day 3 - December 7",
                  events: [
                    { time: "8:00 AM", activity: "Cricket Semi Finals" },
                    { time: "2:00 PM", activity: "Football & Basketball Finals" },
                    { time: "6:00 PM", activity: "Cultural Program" },
                  ],
                },
                {
                  day: "Day 4 - December 8",
                  events: [
                    { time: "9:00 AM", activity: "Cricket Finals" },
                    { time: "4:00 PM", activity: "Prize Distribution Ceremony" },
                    { time: "6:00 PM", activity: "Closing Ceremony" },
                  ],
                },
              ].map((day, dayIndex) => (
                <Card key={dayIndex} className="border-0 rounded-3xl overflow-hidden shadow-xl">
                  <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-6">
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

      <section className="py-24 bg-gradient-to-br from-blue-600 via-green-500 to-blue-800 text-white relative">
        <div className="container mx-auto px-4">
          <div className="text-9xl font-black text-white/10 absolute top-8 right-8">05</div>
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <Trophy className="w-20 h-20 text-yellow-300 mx-auto mb-8" />
            <h2 className="text-5xl md:text-6xl font-black mb-8">READY TO COMPETE?</h2>
            <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
              Register your team now and be part of the most exciting sports championship of the year!
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
