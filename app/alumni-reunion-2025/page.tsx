"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Award,
  Gift,
  Heart,
  Star,
  Phone,
  Mail,
  ChevronRight,
  Quote,
  Download,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

const siteConfig = {
  event: {
    title: "Sri Shanmugha – 15 Years of Excellence: A Grand Alumni Reunion",
    date: "30th Aug 2025",
    time: "11:00 AM – 1:00 PM",
    venue: "E-Block, Sri Shanmugha Convention Center",
    rsvpLink: "https://example.com/rsvp",
    rsvpDeadline: "20 Aug 2025",
  },
}

export default function AlumniReunion2025() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const schedule = [
    {
      time: "11:00 AM",
      title: "Welcome & Opening",
      description: "Opening ceremony and welcome address",
    },
    {
      time: "11:15 AM",
      title: "Reflection: 15 Years of Excellence",
      description: "Journey through our institutional milestones",
    },
    {
      time: "11:40 AM",
      title: "Alumni Networking & Photo Session",
      description: "Reconnect with classmates and capture memories",
    },
    {
      time: "12:20 PM",
      title: "Closing & Group Photo",
      description: "Grand group photograph of all attendees",
    },
    {
      time: "12:30 PM",
      title: "Refreshments",
      description: "Light refreshments and continued networking",
    },
  ]

  const highlights = [
    {
      title: "Reconnect with Classmates",
      description: "Meet your batch mates and relive college memories",
      icon: <Users className="w-8 h-8 text-[#D4AF37]" />,
    },
    {
      title: "Meet Faculty & Leadership",
      description: "Interact with current and former faculty members",
      icon: <Award className="w-8 h-8 text-[#D4AF37]" />,
    },
    {
      title: "Campus Walkthrough & Photo Spots",
      description: "Explore the campus and capture beautiful moments",
      icon: <MapPin className="w-8 h-8 text-[#D4AF37]" />,
    },
    {
      title: "Alumni Networking",
      description: "Build professional connections with fellow alumni",
      icon: <Star className="w-8 h-8 text-[#D4AF37]" />,
    },
    {
      title: "Memories Booth",
      description: "Share your stories and create new memories",
      icon: <Heart className="w-8 h-8 text-[#D4AF37]" />,
    },
    {
      title: "15 Years Celebration",
      description: "Celebrate our institutional journey and achievements",
      icon: <Gift className="w-8 h-8 text-[#D4AF37]" />,
    },
  ]

  const testimonials = [
    {
      quote: "Sri Shanmugha shaped my career and gave me lifelong friendships. Excited to reconnect!",
      name: "Dr. Priya Sharma",
      batch: "2015",
      program: "Engineering & Technology",
    },
    {
      quote: "The values and education I received here continue to guide me in my professional journey.",
      name: "Rajesh Kumar",
      batch: "2018",
      program: "Pharmacy",
    },
    {
      quote: "Looking forward to seeing how our alma mater has grown and evolved over the years.",
      name: "Meera Nair",
      batch: "2020",
      program: "Nursing",
    },
  ]

  const faqs = [
    {
      question: "Who can attend?",
      answer: "All alumni of Sri Shanmugha Educational Institutions across all programs are welcome to attend.",
    },
    {
      question: "Is there a dress code?",
      answer: "Smart casual attire is recommended. Feel free to wear your institutional colors!",
    },
    {
      question: "Can I bring a guest?",
      answer: "This event is exclusively for alumni. Family events will be organized separately.",
    },
    {
      question: "Do I need to print the invite?",
      answer: "No, digital confirmation is sufficient. Just bring a valid ID for verification.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B2A4A]">
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#0B2A4A]/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/logo.svg" alt="Logo" width={40} height={40} />
              <span className="text-white font-semibold">Sri Shanmugha Educational Institutions</span>
            </div>
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <Link href="/" className="text-white hover:text-[#D4AF37] transition-colors">
                Home
              </Link>
              <a href="#about" className="text-white hover:text-[#D4AF37] transition-colors">
                About
              </a>
              <a href="#event" className="text-white hover:text-[#D4AF37] transition-colors">
                Event
              </a>
              <a href="#schedule" className="text-white hover:text-[#D4AF37] transition-colors">
                Schedule
              </a>
              <a href="#venue" className="text-white hover:text-[#D4AF37] transition-colors">
                Venue
              </a>
              <a href="#voices" className="text-white hover:text-[#D4AF37] transition-colors">
                Alumni Voices
              </a>
              <a href="#gallery" className="text-white hover:text-[#D4AF37] transition-colors">
                Gallery
              </a>
              <a href="#faq" className="text-white hover:text-[#D4AF37] transition-colors">
                FAQ
              </a>
              <a href="#contact" className="text-white hover:text-[#D4AF37] transition-colors">
                Contact
              </a>
              <Button className="bg-[#D4AF37] hover:bg-[#F5C451] text-[#0B2A4A] font-semibold">RSVP</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0B2A4A] via-[#0E3A79] to-[#0B2A4A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <Badge className="bg-[#D4AF37] text-[#0B2A4A] font-bold px-4 py-2">
                <Calendar className="w-4 h-4 mr-2" />
                {siteConfig.event.date}
              </Badge>
              <Badge className="bg-[#D4AF37] text-[#0B2A4A] font-bold px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                {siteConfig.event.time}
              </Badge>
              <Badge className="bg-[#D4AF37] text-[#0B2A4A] font-bold px-4 py-2">
                <MapPin className="w-4 h-4 mr-2" />
                {siteConfig.event.venue}
              </Badge>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Calling All Alumni —<br />
              <span className="text-[#D4AF37]">Celebrate 15 Years</span>
              <br />
              of Excellence!
            </h1>

            <p className="text-2xl md:text-3xl mb-12 text-[#E6EDF5] font-light tracking-wide">
              Reconnect • Relive • Rejoice
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#F5C451] text-[#0B2A4A] font-bold px-8 py-4 transform hover:scale-105 transition-all"
              >
                RSVP Now
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B2A4A] bg-transparent transform hover:scale-105 transition-all"
              >
                <Download className="w-5 h-5 mr-2" />
                Add to Calendar
              </Button>
            </div>

            {/* QR Code Card */}
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#E6EDF5]/20">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-300 rounded"></div>
                </div>
                <div className="text-left">
                  <p className="text-[#D4AF37] font-semibold">Scan to RSVP</p>
                  <p className="text-sm text-[#E6EDF5]">Quick registration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0B2A4A] mb-4">About This Celebration</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              For 15 years, Sri Shanmugha Educational Institutions has fostered excellence across Engineering &
              Technology (Autonomous), Pharmacy, Nursing, Allied Health Sciences, Medical Science and Research, and
              Health Inspector programs. Join us as we honor our journey and the alumni who shaped it.
            </p>
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section id="event" className="py-20 bg-[#E6EDF5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B2A4A] mb-4">Why Attend</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl border-0"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">{highlight.icon}</div>
                  <h3 className="text-xl font-bold text-[#0B2A4A] mb-4">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B2A4A] mb-4">Event Schedule</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            {schedule.map((item, index) => (
              <div key={index} className="flex items-start space-x-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-lg font-bold text-[#D4AF37]">{item.time}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-[#D4AF37] rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0B2A4A] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue */}
      <section id="venue" className="py-20 bg-[#E6EDF5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B2A4A] mb-4">Venue</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="rounded-2xl overflow-hidden">
              <div className="h-64 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-600">Map Placeholder</p>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#0B2A4A] mb-4">{siteConfig.event.venue}</h3>
                <p className="text-gray-600 mb-6">
                  Ample parking available. Check-in starts 30 minutes before the event.
                </p>
                <Button className="bg-[#D4AF37] hover:bg-[#F5C451] text-[#0B2A4A] font-semibold">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alumni Voices */}
      <section id="voices" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B2A4A] mb-4">Alumni Voices</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="rounded-2xl border-0 shadow-lg">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-[#D4AF37] mb-4" />
                  <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-[#0B2A4A]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.program} • Batch {testimonial.batch}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 bg-[#D4AF37]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0B2A4A] mb-6">Confirm Your Presence</h2>
            <p className="text-xl text-[#0B2A4A] mb-8">
              Limited seats • Kindly RSVP by {siteConfig.event.rsvpDeadline}
            </p>
            <Button
              size="lg"
              className="bg-[#0B2A4A] hover:bg-[#0E3A79] text-white font-bold px-12 py-4 transform hover:scale-105 transition-all"
            >
              RSVP Now
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B2A4A] mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="rounded-2xl border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#0B2A4A] mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-[#E6EDF5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B2A4A] mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-[#0B2A4A] font-semibold">0428-335-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-[#0B2A4A] font-semibold">alumni@shanmugha.edu.in</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B2A4A] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image src="/logo.svg" alt="Logo" width={40} height={40} />
              <span className="text-[#D4AF37] font-bold">Celebrating 15 Years of Excellence (2011–2025)</span>
            </div>
            <div className="text-center text-sm text-gray-400">
              © 2025 Sri Shanmugha Educational Institutions. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
