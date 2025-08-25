"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Users, BookOpen, Pen, Quote, Award, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function IyalPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2026-02-20T10:00:00").getTime()

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

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-6xl mx-auto">
            <div className="text-8xl md:text-9xl font-black text-white/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              01
            </div>
            <Badge className="bg-yellow-500 text-indigo-900 font-bold px-6 py-2 text-lg mb-6 relative z-10">
              <BookOpen className="w-5 h-5 mr-2" />
              Literary Festival
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black mb-8 relative z-10 leading-tight">
              IYAL
              <span className="block text-yellow-400">2026</span>
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
              Exploring Literature - A celebration of poetry, prose, storytelling, and the written word across languages
            </p>

            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-indigo-900 font-black px-12 py-6 text-xl rounded-full relative z-10"
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
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 text-center">ABOUT IYAL</h2>
            <div className="bg-purple-50 rounded-3xl p-12">
              <p className="text-2xl text-gray-700 leading-relaxed text-center mb-8">
                A literary festival celebrating poetry, prose, storytelling, and creative writing across multiple
                languages. Discover the power of words and storytelling.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Venue</h3>
                  <p className="text-gray-600">Library Auditorium & Seminar Halls</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Participants</h3>
                  <p className="text-gray-600">300 Literature Enthusiasts</p>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Entry Fee</h3>
                  <p className="text-gray-600">₹100</p>
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
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-16 text-center">LITERARY EVENTS</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Poetry Recitation",
                  time: "10:30 AM - 12:00 PM",
                  description: "Recite original or classic poems in Tamil, English, or Hindi",
                  prize: "₹8,000",
                  icon: <Quote className="w-8 h-8 text-purple-500" />,
                  color: "purple",
                },
                {
                  name: "Short Story Writing",
                  time: "1:00 PM - 3:00 PM",
                  description: "Create compelling short stories on given themes",
                  prize: "₹10,000",
                  icon: <Pen className="w-8 h-8 text-blue-500" />,
                  color: "blue",
                },
                {
                  name: "Storytelling Competition",
                  time: "3:30 PM - 4:30 PM",
                  description: "Narrate captivating stories with expression and creativity",
                  prize: "₹6,000",
                  icon: <BookOpen className="w-8 h-8 text-green-500" />,
                  color: "green",
                },
                {
                  name: "Literary Quiz",
                  time: "5:00 PM - 6:00 PM",
                  description: "Test your knowledge of literature, authors, and literary works",
                  prize: "₹5,000",
                  icon: <Award className="w-8 h-8 text-orange-500" />,
                  color: "orange",
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
                        <p className="text-purple-600 font-bold mb-2 text-lg">{event.time}</p>
                        <p className="text-gray-600 mb-4 text-lg">{event.description}</p>
                        <div className="flex items-center justify-between mb-4">
                          <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">Prize: {event.prize}</Badge>
                        </div>
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-full">
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
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-16 text-center">DISTINGUISHED SPEAKERS</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Meera Venkatesh",
                  designation: "Renowned Tamil Poet & Author",
                  topic: "Modern Tamil Literature",
                  image: "/placeholder.svg?height=300&width=300&text=Dr.+Meera",
                },
                {
                  name: "Prof. Rajesh Kumar",
                  designation: "English Literature Professor",
                  topic: "Contemporary Indian Writing",
                  image: "/placeholder.svg?height=300&width=300&text=Prof.+Rajesh",
                },
                {
                  name: "Ms. Priya Sharma",
                  designation: "Published Novelist",
                  topic: "Creative Writing Techniques",
                  image: "/placeholder.svg?height=300&width=300&text=Ms.+Priya",
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
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="p-8 text-center">
                      <h3 className="text-2xl font-black text-gray-900 mb-2">{speaker.name}</h3>
                      <p className="text-purple-600 font-bold mb-3">{speaker.designation}</p>
                      <div className="bg-purple-100 rounded-2xl p-4">
                        <p className="text-purple-800 font-semibold">{speaker.topic}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 text-white relative">
        <div className="container mx-auto px-4">
          <div className="text-9xl font-black text-white/10 absolute top-8 right-8">05</div>
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <BookOpen className="w-20 h-20 text-yellow-400 mx-auto mb-8" />
            <h2 className="text-5xl md:text-6xl font-black mb-8">JOIN THE LITERARY JOURNEY</h2>
            <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
              Immerse yourself in the world of literature and connect with fellow writers and readers!
            </p>
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-indigo-900 font-black px-16 py-8 text-2xl rounded-full"
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
