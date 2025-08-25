"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, Star, Music, Flower, Gift, ChevronRight, Heart } from "lucide-react"
import { useState, useEffect } from "react"

export default function OnamPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-09-01T10:00:00").getTime()

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

  const competitions = [
    {
      name: "Pookalam Competition",
      venue: "SSEI Ground",
      description: "Traditional floral art & competitions",
      icon: <Flower className="w-8 h-8 text-orange-500" />,
    },
    {
      name: "Thiruvathira Dance",
      venue: "Main Stage",
      description: "Traditional Kerala dance performances",
      icon: <Music className="w-8 h-8 text-pink-500" />,
    },
    {
      name: "Chendamelam",
      venue: "Entire College",
      description: "Traditional percussion ensemble",
      icon: <Star className="w-8 h-8 text-yellow-500" />,
    },
    {
      name: "Cultural Programs",
      venue: "Main Stage",
      description: "Various cultural performances",
      icon: <Gift className="w-8 h-8 text-purple-500" />,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-orange-600 via-yellow-500 to-red-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg mb-4 text-orange-100">Celebrating</p>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">Onam at SSEI</h1>
            <p className="text-xl mb-8 text-orange-100">with joy, unity, and festive spirit.</p>
            <h2 className="text-4xl font-bold mb-12 text-yellow-200">Asthra'25</h2>
          </div>
        </div>
      </section>

      {/* Section 01 - Countdown */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <span className="text-6xl font-bold text-orange-500 mr-4">01</span>
            <h2 className="text-3xl font-bold text-gray-900">Onam Countdown</h2>
          </div>
          <div className="max-w-4xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Countdown to Grand Onam Celebrations</h3>
            <p className="text-lg text-gray-600 mb-8">
              Join us in celebrating Onam with joy, tradition, and togetherness. The countdown has begun!
            </p>

            <div className="grid grid-cols-4 gap-4 mb-8">
              <Card className="text-center p-6 bg-orange-500 text-white">
                <div className="text-3xl font-bold">{timeLeft.days}</div>
                <div className="text-sm">Days</div>
              </Card>
              <Card className="text-center p-6 bg-yellow-500 text-white">
                <div className="text-3xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm">Hours</div>
              </Card>
              <Card className="text-center p-6 bg-red-500 text-white">
                <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm">Minutes</div>
              </Card>
              <Card className="text-center p-6 bg-pink-500 text-white">
                <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                <div className="text-sm">Seconds</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 - About Onam */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <span className="text-6xl font-bold text-orange-500 mr-4">02</span>
            <h2 className="text-3xl font-bold text-gray-900">About Onam</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Onam at SSEI</h3>
              <p className="text-lg text-gray-600 mb-6">
                Join us for a vibrant and traditional Onam celebration at SSEI! Mark your calendars for
                <strong className="text-orange-600"> 1st September</strong> — a day filled with culture, colors, unity,
                and joy.
              </p>
              <p className="text-gray-600 mb-8">
                Onam at SSEI brings together students and staff for an unforgettable day of fun, culture, and bonding.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 bg-orange-50">
                <Calendar className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900">01 Sep</div>
                <div className="text-sm text-gray-600">Celebration Day</div>
              </Card>
              <Card className="text-center p-6 bg-yellow-50">
                <Flower className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <div className="text-lg font-bold text-gray-900">Grand Onam Celebration</div>
                <div className="text-sm text-gray-600">Traditional floral art & competitions</div>
              </Card>
              <Card className="text-center p-6 bg-red-50">
                <Star className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Cultural Programs & Games</div>
              </Card>
              <Card className="text-center p-6 bg-pink-50">
                <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <div className="text-lg font-bold text-gray-900">Unity & Joy</div>
                <div className="text-sm text-gray-600">A celebration of tradition, food & festivities</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03 - Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <span className="text-6xl font-bold text-orange-500 mr-4">03</span>
            <h2 className="text-3xl font-bold text-gray-900">Schedule</h2>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Asthra'25 Event Schedule</h3>
          <p className="text-lg text-gray-600 mb-12">
            Join us for a full day of festivities and fun. Here's a look at what we have planned!
          </p>

          <div className="max-w-3xl mx-auto">
            {[
              { time: "10:00 AM", activity: "Registration & Pookalam Competition Begins" },
              { time: "12:00 PM", activity: "Traditional Sadhya (Feast)" },
              { time: "1:00 PM", activity: "Cultural Program Inauguration" },
              { time: "2:00 PM", activity: "Thiruvathira Dance Competition" },
              { time: "3:30 PM", activity: "Onam Songs Competition" },
              { time: "5:00 PM", activity: "Traditional Dress Competition" },
              { time: "5:30 PM", activity: "Prize Distribution & Closing" },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-lg font-bold text-orange-600">{item.time}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900">{item.activity}</h3>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 04 - Main Items */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <span className="text-6xl font-bold text-orange-500 mr-4">04</span>
            <h2 className="text-3xl font-bold text-gray-900">Main Items</h2>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Iconic Programs</h3>
          <p className="text-lg text-gray-600 mb-12">Iconic items presenting in this year!</p>

          <div className="grid md:grid-cols-2 gap-8">
            {competitions.map((competition, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-gray-100 rounded-lg p-4">{competition.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{competition.name}</h4>
                      <p className="text-orange-600 font-semibold mb-2">Venue: {competition.venue}</p>
                      <p className="text-gray-600">{competition.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 05 - Registration */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <span className="text-6xl font-bold text-white/80 mr-4">05</span>
            <h2 className="text-3xl font-bold">Register</h2>
          </div>
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Registration for Events</h3>
            <p className="text-lg text-orange-100 mb-8">Please register for one or more event categories below.</p>
            <p className="text-orange-100 mb-8">Contact the Onam Committee for any questions or support.</p>
            <Button size="lg" className="bg-white hover:bg-gray-100 text-orange-600 font-bold px-8 py-4">
              Register Now
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
