"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
  Award,
  Users,
  BookOpen,
  Globe,
} from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Admissions", href: "/admissions" },
    { name: "Academics", href: "/academics" },
    { name: "Placements", href: "/placements" },
    { name: "Research", href: "/research" },
    { name: "Campus Life", href: "/campus-life" },
  ]

  const departments = [
    { name: "Engineering & Technology", href: "/engineering" },
    { name: "Pharmacy", href: "/pharmacy" },
    { name: "Nursing", href: "/nursing" },
    { name: "Allied Health Sciences", href: "/allied-health" },
  ]

  const resources = [
    { name: "Students", href: "/students" },
    { name: "Faculty", href: "/faculty" },
    { name: "Parents", href: "/parents" },
    { name: "Alumni", href: "/alumni" },
    { name: "Visitors", href: "/visitors" },
    { name: "Career Centre", href: "/career-centre" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-700" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-600" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8">
          {/* Institution Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Sri Shanmugha</h3>
                <p className="text-blue-300">Educational Institutions</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Established in 2010, Sri Shanmugha Educational Institutions has been a beacon of excellence in higher
              education, fostering innovation, research, and holistic development of students across multiple
              disciplines.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">NAAC A+</span>
                </div>
                <p className="text-sm text-gray-400">Accredited</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="w-5 h-5 text-green-500" />
                  <span className="font-semibold">5000+</span>
                </div>
                <p className="text-sm text-gray-400">Students</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-colors ${social.color}`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Departments</h4>
            <ul className="space-y-3">
              {departments.map((dept) => (
                <li key={dept.name}>
                  <Link href={dept.href} className="text-gray-300 hover:text-white transition-colors hover:underline">
                    {dept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 mb-6">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-white transition-colors hover:underline"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Tiruchengode, Salem District,
                  <br />
                  Tamil Nadu - 637211, India
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">0428-335-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-red-400" />
                <span className="text-gray-300">info@shanmugha.edu.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-300">Mon - Fri: 9:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300">
                Get the latest news and updates from Sri Shanmugha Educational Institutions
              </p>
            </div>
            <div className="flex space-x-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>&copy; {currentYear} Sri Shanmugha Educational Institutions. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/sitemap" className="hover:text-white transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Badge className="bg-green-600 text-white">
                <Globe className="w-3 h-3 mr-1" />
                NAAC A+ Accredited
              </Badge>
              <Badge className="bg-blue-600 text-white">
                <Award className="w-3 h-3 mr-1" />
                ISO Certified
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
