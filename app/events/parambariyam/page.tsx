"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Users, Star, Flower2, Gift, Music, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function ParambariyamPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2026-01-14T08:00:00").getTime()

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

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-6xl mx-auto">
            <div className="text-8xl md:text-9xl font-black text-white/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              01
            </div>
            <Badge className="bg-white text-orange-600 font-bold px-6 py-2 text-lg mb-6 relative z-10">
              <Flower2 className="w-5 h-5 mr-2" />
              Tamil Traditional Festival
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black mb-8 relative z-10 leading-tight">
              PARAMBARIYAM
              <span className="block text-yellow-200">PONGAL 2026</span>
            </h1>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-12 relative z-10">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-black text-yellow-200">{value}</div>
                  <div className="text-sm uppercase tracking-wider">{unit}</div>
                </div>
              ))}
            </div>

            <p className="text-2xl mb-12 text-orange-100 leading-relaxed relative z-10 max-w-4xl mx-auto">
              Celebrate the harvest festival with traditional Pongal cooking, Kolam art, cultural dances, and Tamil
              heritage
            </p>

            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-orange-600 font-black px-12 py-6 text-xl rounded-full relative z-10"
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
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 text-center">ABOUT PARAMBARIYAM</h2>
            <div className="bg-orange-50 rounded-3xl p-12">
              <p className="text-2xl text-gray-700 leading-relaxed text-center mb-8">
                Celebrate the harvest festival of Tamil Nadu with traditional Pongal cooking, cultural programs, and
                competitions that honor our rich heritage.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Venue</h3>
                  <p className="text-gray-600">Main Campus Ground</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Participants</h3>
                  <p className="text-gray-600">1500 People</p>
                </div>
                <div className="text-center">
                  <Gift className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Entry Fee</h3>
                  <p className="text-gray-600">₹50</p>
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
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-16 text-center">TRADITIONAL EVENTS</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Pongal Cooking Competition",
                  time: "8:00 AM - 11:00 AM",
                  description: "Traditional Pongal cooking using clay pots and firewood",
                  prize: "₹10,000",
                  icon: <Gift className="w-8 h-8 text-orange-500" />,
                  color: "orange",
                },
                {
                  name: "Kolam Competition",
                  time: "9:00 AM - 12:00 PM",
                  description: "Beautiful rangoli designs with rice flour and colors",
                  prize: "₹5,000",
                  icon: <Flower2 className="w-8 h-8 text-pink-500" />,
                  color: "pink",
                },
                {
                  name: "Traditional Dance",
                  time: "2:00 PM - 4:00 PM",
                  description: "Bharatanatyam, Karagattam, and folk dance performances",
                  prize: "₹7,000",
                  icon: <Music className="w-8 h-8 text-purple-500" />,
                  color: "purple",
                },
                {
                  name: "Traditional Attire",
                  time: "4:30 PM - 5:30 PM",
                  description: "Best traditional Tamil dress competition",
                  prize: "₹3,000",
                  icon: <Star className="w-8 h-8 text-yellow-500" />,
                  color: "yellow",
                },
              ].map((event, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 rounded-3xl overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className={`bg-${event.color}-100 rounded-2xl p-4`}>{event.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-black text-gray-900 mb-3">{event.name}</h3>
                        <p className="text-orange-600 font-bold mb-2 text-lg">{event.time}</p>
                        <p className="text-gray-600 mb-4 text-lg">{event.description}</p>
                        <div className="flex items-center justify-between mb-4">
                          <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">Prize: {event.prize}</Badge>
                        </div>
                        <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-full">
                          PARTICIPATE
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
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-16 text-center">CULTURAL PROGRAMS</h2>
            <div className="space-y-8">
              {[
                {
                  time: "12:00 PM - 1:00 PM",
                  program: "Traditional Music Concert",
                  artist: "Carnatic Music Ensemble",
                },
                {
                  time: "1:00 PM - 2:00 PM",
                  program: "Community Pongal Feast",
                  artist: "All Participants",
                },
                {
                  time: "5:30 PM - 6:00 PM",
                  program: "Prize Distribution & Cultural Show",
                  artist: "College Cultural Team",
                },
              ].map((program, index) => (
                <div key={index} className="flex items-center gap-8 group">
                  <div className="flex-shrink-0 w-32 text-right">
                    <div className="text-2xl font-black text-orange-600">{program.time}</div>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="flex-1">
                    <Card className="hover:shadow-xl transition-all duration-300 border-0 rounded-2xl">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{program.program}</h3>
                        <p className="text-gray-600">Featuring: {program.artist}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500 text-white relative">
        <div className="container mx-auto px-4">
          <div className="text-9xl font-black text-white/10 absolute top-8 right-8">05</div>
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <Star className="w-20 h-20 text-yellow-200 mx-auto mb-8" />
            <h2 className="text-5xl md:text-6xl font-black mb-8">JOIN THE CELEBRATION</h2>
            <p className="text-2xl text-orange-100 mb-12 leading-relaxed">
              Be part of this beautiful traditional festival and celebrate Tamil heritage with us!
            </p>
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-orange-600 font-black px-16 py-8 text-2xl rounded-full"
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
