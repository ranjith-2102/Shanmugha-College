"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Star, Trophy, Medal, Shield, CheckCircle, ExternalLink, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ScrollReveal from "./scroll-reveal"
import AnimatedCounter from "./animated-counter"

interface Ranking {
  id: string
  category: string
  rank: number
  total?: number
  year: string
  organization: string
  logo: string
  description: string
  color: string
}

interface Accreditation {
  id: string
  name: string
  organization: string
  logo: string
  validUntil: string
  description: string
  category: string
  status: "active" | "renewed" | "pending"
}

const rankings: Ranking[] = [
  {
    id: "1",
    category: "Engineering",
    rank: 13,
    total: 200,
    year: "2024",
    organization: "NIRF India Rankings",
    logo: "/placeholder.svg?height=60&width=60&text=NIRF",
    description: "National Institutional Ranking Framework - Engineering Category",
    color: "bg-blue-50 border-blue-200 text-blue-800",
  },
  {
    id: "2",
    category: "Overall",
    rank: 21,
    total: 300,
    year: "2024",
    organization: "NIRF India Rankings",
    logo: "/placeholder.svg?height=60&width=60&text=NIRF",
    description: "National Institutional Ranking Framework - Overall Category",
    color: "bg-green-50 border-green-200 text-green-800",
  },
  {
    id: "3",
    category: "Research",
    rank: 24,
    total: 150,
    year: "2024",
    organization: "ARIIA Rankings",
    logo: "/placeholder.svg?height=60&width=60&text=ARIIA",
    description: "Atal Ranking of Institutions on Innovation Achievements",
    color: "bg-purple-50 border-purple-200 text-purple-800",
  },
  {
    id: "4",
    category: "Architecture",
    rank: 11,
    total: 50,
    year: "2024",
    organization: "NIRF India Rankings",
    logo: "/placeholder.svg?height=60&width=60&text=NIRF",
    description: "National Institutional Ranking Framework - Architecture Category",
    color: "bg-orange-50 border-orange-200 text-orange-800",
  },
]

const accreditations: Accreditation[] = [
  {
    id: "1",
    name: "NAAC A+",
    organization: "National Assessment and Accreditation Council",
    logo: "/placeholder.svg?height=80&width=80&text=NAAC",
    validUntil: "2027",
    description: "Highest grade accreditation for academic excellence and quality assurance",
    category: "Academic Excellence",
    status: "active",
  },
  {
    id: "2",
    name: "NBA Accreditation",
    organization: "National Board of Accreditation",
    logo: "/placeholder.svg?height=80&width=80&text=NBA",
    validUntil: "2026",
    description: "Accreditation for Engineering and Technology programs",
    category: "Program Accreditation",
    status: "active",
  },
  {
    id: "3",
    name: "ISO 9001:2015",
    organization: "International Organization for Standardization",
    logo: "/placeholder.svg?height=80&width=80&text=ISO",
    validUntil: "2025",
    description: "Quality Management System certification",
    category: "Quality Management",
    status: "renewed",
  },
  {
    id: "4",
    name: "AICTE Approval",
    organization: "All India Council for Technical Education",
    logo: "/placeholder.svg?height=80&width=80&text=AICTE",
    validUntil: "2025",
    description: "Statutory approval for technical education programs",
    category: "Regulatory Approval",
    status: "active",
  },
  {
    id: "5",
    name: "UGC Recognition",
    organization: "University Grants Commission",
    logo: "/placeholder.svg?height=80&width=80&text=UGC",
    validUntil: "Permanent",
    description: "Recognition under Section 2(f) and 12(B) of UGC Act",
    category: "University Recognition",
    status: "active",
  },
  {
    id: "6",
    name: "DSIR Recognition",
    organization: "Department of Scientific and Industrial Research",
    logo: "/placeholder.svg?height=80&width=80&text=DSIR",
    validUntil: "2026",
    description: "Recognition for research and development activities",
    category: "Research Recognition",
    status: "active",
  },
]

const achievements = [
  {
    icon: <Trophy className="w-8 h-8 text-yellow-600" />,
    title: "Top 25 Engineering Colleges",
    description: "Consistently ranked among India's top engineering institutions",
    year: "2024",
  },
  {
    icon: <Medal className="w-8 h-8 text-blue-600" />,
    title: "Excellence in Innovation",
    description: "Recognized for outstanding innovation and research initiatives",
    year: "2024",
  },
  {
    icon: <Star className="w-8 h-8 text-purple-600" />,
    title: "Best Campus Infrastructure",
    description: "Award for state-of-the-art facilities and learning environment",
    year: "2023",
  },
  {
    icon: <Shield className="w-8 h-8 text-green-600" />,
    title: "Industry Partnership Excellence",
    description: "Outstanding collaboration with leading industry partners",
    year: "2023",
  },
]

export default function RankingsAccreditations() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Award className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl font-bold text-blue-900">Rankings & Accreditations</h2>
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our prestigious rankings and accreditations from leading
              national and international bodies
            </p>
          </div>
        </ScrollReveal>

        {/* Rankings Section */}
        <ScrollReveal delay={200}>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">National Rankings 2024</h3>
              <p className="text-lg text-gray-600">
                Recognized excellence across multiple categories by premier ranking agencies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {rankings.map((ranking, index) => (
                <ScrollReveal key={ranking.id} delay={index * 100}>
                  <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 mx-auto mb-4 relative">
                          <Image
                            src={ranking.logo || "/placeholder.svg"}
                            alt={ranking.organization}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="absolute -top-2 -right-2">
                          <Badge className="bg-yellow-500 text-yellow-900 font-bold">#{ranking.rank}</Badge>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-4xl font-bold text-blue-900 mb-2">
                          <AnimatedCounter end={ranking.rank} />
                        </div>
                        <Badge className={`${ranking.color} font-medium mb-2`}>{ranking.category}</Badge>
                        <p className="text-sm text-gray-600">
                          {ranking.total && `out of ${ranking.total} institutions`}
                        </p>
                      </div>

                      <div className="text-center">
                        <p className="font-semibold text-gray-900 mb-1">{ranking.organization}</p>
                        <p className="text-sm text-gray-600 mb-3">{ranking.description}</p>
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {ranking.year}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" className="group bg-transparent">
                View All Rankings & Accreditations
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Accreditations Section */}
        <ScrollReveal delay={400}>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Accreditations & Approvals</h3>
              <p className="text-lg text-gray-600">
                Certified excellence through prestigious accreditations and regulatory approvals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accreditations.map((accreditation, index) => (
                <ScrollReveal key={accreditation.id} delay={index * 100}>
                  <Card className="hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 flex-shrink-0 relative">
                          <Image
                            src={accreditation.logo || "/placeholder.svg"}
                            alt={accreditation.organization}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-bold text-gray-900">{accreditation.name}</h4>
                            <div className="flex items-center">
                              {accreditation.status === "active" && <CheckCircle className="w-4 h-4 text-green-500" />}
                              {accreditation.status === "renewed" && (
                                <Badge className="bg-blue-100 text-blue-800 text-xs">Renewed</Badge>
                              )}
                              {accreditation.status === "pending" && (
                                <Badge className="bg-yellow-100 text-yellow-800 text-xs">Pending</Badge>
                              )}
                            </div>
                          </div>
                          <p className="text-sm font-medium text-gray-700 mb-2">{accreditation.organization}</p>
                          <p className="text-sm text-gray-600 mb-3">{accreditation.description}</p>
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary" className="text-xs">
                              {accreditation.category}
                            </Badge>
                            <span className="text-xs text-gray-500">Valid until: {accreditation.validUntil}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Achievements Section */}
        <ScrollReveal delay={600}>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Recent Achievements</h3>
              <p className="text-lg text-gray-600">
                Celebrating our latest recognitions and milestones in educational excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-colors">
                      {achievement.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{achievement.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                    <Badge variant="outline" className="text-xs">
                      {achievement.year}
                    </Badge>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Call to Action */}
        <ScrollReveal delay={800}>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Join Our Legacy of Excellence</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Be part of an institution that consistently ranks among the best and maintains the highest standards of
                education and research
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/apply-now">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Apply Now
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
