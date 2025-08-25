import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Users, Building } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContactPage() {
  const contactInfo = [
    {
      title: "Main Office",
      phone: "0428-335-9999",
      email: "info@shanmugha.edu.in",
      address: "Tiruchengode - Sankari Main Road, Pullipalayam, Morur(Po), Sankari(Tk), Salem(Dt), Tamil Nadu-637304",
    },
    {
      title: "Admissions Office",
      phone: "73 73 672 999",
      email: "admissions@shanmugha.edu.in",
      address: "Same as Main Office",
    },
    {
      title: "Placement Cell",
      phone: "733 93 83 999",
      email: "placements@shanmugha.edu.in",
      address: "Same as Main Office",
    },
  ]

  const departments = [
    { name: "Engineering & Technology", phone: "7200 567817", email: "engineering@shanmugha.edu.in" },
    { name: "Pharmacy", phone: "0428-335-9999", email: "pharmacy@shanmugha.edu.in" },
    { name: "Nursing", phone: "0428-335-9999", email: "nursing@shanmugha.edu.in" },
    { name: "Allied Health Sciences", phone: "0428-335-9999", email: "alliedhealth@shanmugha.edu.in" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-orange-500 text-white mb-4">Get in Touch</Badge>
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to start your educational journey? We're here to help you every step of the way. Contact our
              admissions team for personalized guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach us for all your queries</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="w-6 h-6 text-blue-600" />
                    <span>{info.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <span>{info.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">{info.email}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-red-600 mt-1" />
                    <span className="text-sm text-gray-600">{info.address}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Department Contacts</h2>
            <p className="text-xl text-gray-600">Direct contact information for each department</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{dept.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{dept.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span className="text-xs">{dept.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have a specific question? Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Office Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Quick Response</h3>
                    <p className="text-gray-600">We respond to all inquiries within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Personal Guidance</h3>
                    <p className="text-gray-600">One-on-one counseling sessions available</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                      Course Interest
                    </label>
                    <select
                      id="course"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Course</option>
                      <option value="engineering">Engineering & Technology</option>
                      <option value="pharmacy">Pharmacy</option>
                      <option value="nursing">Nursing</option>
                      <option value="allied-health">Allied Health Sciences</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about your query or requirements..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center space-x-2">
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">Located in the heart of Tamil Nadu with excellent connectivity</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Campus Location</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <p className="font-semibold">Sri Shanmugha Educational Institutions</p>
                      <p className="text-gray-600">
                        Tiruchengode - Sankari Main Road, Pullipalayam, Morur(Po), Sankari(Tk), Salem(Dt), Tamil
                        Nadu-637304
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-green-600" />
                    <span>0428-335-9999</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <span>info@shanmugha.edu.in</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">How to Reach</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 15 km from Salem Railway Station</li>
                    <li>• 20 km from Salem Bus Stand</li>
                    <li>• 45 km from Salem Airport</li>
                    <li>• Well connected by road and public transport</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <p className="text-gray-600">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logo.svg"
                  alt="Sri Shanmugha Educational Institutions"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div>
                  <h3 className="text-lg font-bold">Sri Shanmugha</h3>
                  <p className="text-sm text-gray-400">Educational Institutions</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Crafting the future through excellence in education and innovation.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/admissions" className="text-gray-400 hover:text-white">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="/placements" className="text-gray-400 hover:text-white">
                    Placements
                  </Link>
                </li>
                <li>
                  <Link href="/facilities" className="text-gray-400 hover:text-white">
                    Facilities
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Departments</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/engineering" className="text-gray-400 hover:text-white">
                    Engineering
                  </Link>
                </li>
                <li>
                  <Link href="/pharmacy" className="text-gray-400 hover:text-white">
                    Pharmacy
                  </Link>
                </li>
                <li>
                  <Link href="/nursing" className="text-gray-400 hover:text-white">
                    Nursing
                  </Link>
                </li>
                <li>
                  <Link href="/allied-health" className="text-gray-400 hover:text-white">
                    Allied Health
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>0428-335-9999</li>
                <li>info@shanmugha.edu.in</li>
                <li>shanmugha.edu.in</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Sri Shanmugha Educational Institutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
