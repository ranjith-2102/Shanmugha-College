"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import VisualStories from "@/components/visual-stories"
import RankingsAccreditations from "@/components/rankings-accreditations"
import ShanmughahEcosystem from "@/components/shanmughah-ecosystem"
import HeroNotificationPanel from "@/components/hero-notification-panel"
import {
  Users,
  Award,
  Building,
  Globe,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  Play,
  ChevronRight,
  Star,
  GraduationCap,
  Target,
  Heart,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const departments = [
    {
      name: "Engineering & Technology",
      description: "Cutting-edge programs in AI, Computer Science, and Engineering",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop",
      programs: "8 UG Programs",
      students: "500+ Students",
      href: "/engineering",
      color: "bg-blue-50 border-blue-200",
      icon: <Building className="w-8 h-8 text-blue-600" />,
    },
    {
      name: "Pharmacy",
      description: "Comprehensive pharmaceutical education and research",
      image: "https://images.unsplash.com/photo-1559757148399-112ba8d25d1f?w=400&h=300&fit=crop",
      programs: "6 Programs",
      students: "200+ Students",
      href: "/pharmacy",
      color: "bg-green-50 border-green-200",
      icon: <Heart className="w-8 h-8 text-green-600" />,
    },
    {
      name: "Nursing",
      description: "Excellence in nursing education with international recognition",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      programs: "3 Programs",
      students: "190 Seats",
      href: "/nursing",
      color: "bg-pink-50 border-pink-200",
      icon: <Users className="w-8 h-8 text-pink-600" />,
    },
    {
      name: "Allied Health Sciences",
      description: "Specialized healthcare programs for modern medical needs",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
      programs: "4 Programs",
      students: "120 Seats",
      href: "/allied-health",
      color: "bg-orange-50 border-orange-200",
      icon: <Target className="w-8 h-8 text-orange-600" />,
    },
  ]

  const achievements = [
    {
      title: "NAAC A+ Accreditation",
      description: "Recognized for academic excellence and quality education",
      icon: <Award className="w-12 h-12 text-yellow-600" />,
    },
    {
      title: "100% Placement Record",
      description: "Consistent placement success across all departments",
      icon: <TrendingUp className="w-12 h-12 text-green-600" />,
    },
    {
      title: "International Partnerships",
      description: "Collaborations with global universities",
      icon: <Globe className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "15+ Years Excellence",
      description: "Established legacy of quality education since 2010",
      icon: <Star className="w-12 h-12 text-purple-600" />,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Enhanced Hero Section with Video Background and Integrated Notification Panel */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CollegeEntranceBuilding-MgBcGbcSRVUtBr3ekR3esFlMAG2Jws.webp"
          >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CollegeEntranceBuilding-MgBcGbcSRVUtBr3ekR3esFlMAG2Jws.webp"
              alt="Sri Shanmugha Campus - Main Building"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </video>
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
            {/* Left Content - Main Hero */}
            <div className="lg:col-span-7 text-white">
              <div className="flex items-center space-x-4 mb-6">
                <Badge className="bg-yellow-500 text-blue-900 font-bold px-4 py-2 text-sm">
                  Admissions Open 2025-26
                </Badge>
                <Badge className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 border border-white/30">
                  NAAC A+
                </Badge>
                <Badge className="bg-red-500 text-white px-3 py-1 animate-pulse">Alumni Reunion 2025</Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Sri Shanmugha Educational Institutions
                <span className="block text-yellow-400">Innovate and Inspire</span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-blue-100 max-w-2xl">
                Pioneering Innovation in Higher Education Since 2010. With 15+ Years of Educational Excellence, 20,000+
                Students Transformed, 100+ Quality Awards, and 95% Placement Success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/apply-now">
                  <Button
                    size="lg"
                    className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Apply Now
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg bg-transparent backdrop-blur-sm transition-all duration-300"
                >
                  Download Brochure
                </Button>
              </div>

              {/* Video Play Button */}
              <div className="flex items-center space-x-4">
                <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group border border-white/30">
                  <Play className="w-6 h-6 text-white ml-1 group-hover:scale-110 transition-transform" />
                </button>
                <div>
                  <p className="text-white font-semibold">Watch Campus Tour</p>
                  <p className="text-blue-200 text-sm">3:45 minutes</p>
                </div>
              </div>
            </div>

            {/* Right Content - Notification Panel */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm">
                <HeroNotificationPanel />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content - Decorative Element */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative">
                {/* Golden Laurel Wreath */}
                <div className="w-80 h-80 relative">
                  <svg viewBox="0 0 320 320" className="w-full h-full">
                    {/* Left Laurel Branch */}
                    <path
                      d="M50 160 Q30 140 40 120 Q50 100 70 110 Q90 120 80 140 Q70 160 50 160"
                      fill="#D4AF37"
                      opacity="0.8"
                    />
                    <path
                      d="M60 180 Q40 160 50 140 Q60 120 80 130 Q100 140 90 160 Q80 180 60 180"
                      fill="#D4AF37"
                      opacity="0.9"
                    />
                    <path d="M70 200 Q50 180 60 160 Q70 140 90 150 Q110 160 100 180 Q90 200 70 200" fill="#D4AF37" />

                    {/* Right Laurel Branch */}
                    <path
                      d="M270 160 Q290 140 280 120 Q270 100 250 110 Q230 120 240 140 Q250 160 270 160"
                      fill="#D4AF37"
                      opacity="0.8"
                    />
                    <path
                      d="M260 180 Q280 160 270 140 Q260 120 240 130 Q220 140 230 160 Q240 180 260 180"
                      fill="#D4AF37"
                      opacity="0.9"
                    />
                    <path
                      d="M250 200 Q270 180 260 160 Q250 140 230 150 Q210 160 220 180 Q230 200 250 200"
                      fill="#D4AF37"
                    />

                    {/* Bottom Ribbon */}
                    <path d="M120 240 Q160 250 200 240 Q180 260 160 250 Q140 260 120 240" fill="#D4AF37" />
                  </svg>

                  {/* Center Circle with Number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white rounded-full shadow-lg flex flex-col items-center justify-center border-4 border-yellow-400">
                      <div className="text-4xl font-black text-blue-900">7</div>
                      <div className="text-xs text-center text-gray-600 font-semibold leading-tight">
                        Accreditation of
                        <br />7 programmes by
                        <br />
                        NBA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Welcome Text */}
          <div className="lg:col-span-8">
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-black text-blue-600 mb-8">
                Welcome to Sri Shanmugha Educational Institutions
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <span className="font-semibold text-blue-900">Sri Shanmugha Educational Institutions</span> is the
                  most sought after Institution among the premier educational Institutions in South India. Since its
                  establishment in the year <span className="font-semibold text-blue-900">2010</span>, the Institution
                  has marched towards the pinnacle of glory through remarkable achievements in the field of Higher
                  Education.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  It is an <span className="font-semibold text-blue-900">Autonomous Institution</span>, Affiliated to{" "}
                  <span className="font-semibold text-blue-900">Anna University</span> with{" "}
                  <span className="font-semibold text-blue-900">7 programmes being accredited by NBA</span> and it
                  offers{" "}
                  <span className="font-semibold text-blue-900">
                    11 UG programmes, 4 PG programmes, 1 integrated programme and 8 research programmes
                  </span>
                  .
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  The Institution offers an exciting academic environment with well qualified dedicated faculty members
                  to inspire and nurture the student fraternity. With industry drafted{" "}
                  <span className="font-semibold text-blue-900">Choice Based Credit System (CBCS)</span> curriculum and
                  syllabi, the Institution takes every effort to bring its students to the forefront of the society as
                  skillful and responsible professionals.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid md:grid-cols-3 gap-6 mt-10">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                  <div className="flex items-center mb-3">
                    <Award className="w-6 h-6 text-blue-600 mr-2" />
                    <h4 className="font-bold text-blue-900">NBA Accredited</h4>
                  </div>
                  <p className="text-gray-600 text-sm">7 programmes accredited by National Board of Accreditation</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
                  <div className="flex items-center mb-3">
                    <GraduationCap className="w-6 h-6 text-green-600 mr-2" />
                    <h4 className="font-bold text-blue-900">Anna University</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Autonomous Institution affiliated to Anna University</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
                  <div className="flex items-center mb-3">
                    <Target className="w-6 h-6 text-purple-600 mr-2" />
                    <h4 className="font-bold text-blue-900">CBCS Curriculum</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Industry-drafted Choice Based Credit System</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section with External Site Data */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">15 Years of Educational Excellence</h2>
            <p className="text-lg text-gray-600">Pioneering Innovation in Higher Education Since 2010</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">20,000+</div>
              <div className="text-gray-600">Students Transformed</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">100+</div>
              <div className="text-gray-600">Quality Awards</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">95%</div>
              <div className="text-gray-600">Placement Success</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rankings & Accreditations Section */}
      <RankingsAccreditations />

      {/* Enhanced Departments Section with External Site Data */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Institutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on any institution to explore their programs and courses. Leading the Future of Education with UGC
              Autonomous Institution, 300+ Corporate Collaborations, 100% Placement Assurance, and World-Class
              Infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">4</div>
              <div className="text-gray-600">Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">3000+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">300+</div>
              <div className="text-gray-600">Corporate Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">120</div>
              <div className="text-gray-600">Acre Campus</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className={`${dept.color} border-2 hover:shadow-xl transition-all duration-300 group`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={dept.image || "/placeholder.svg"}
                    alt={`${dept.name} - Sri Shanmugha Educational Institutions`}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-4 left-4">{dept.icon}</div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{dept.name}</h3>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="secondary">{dept.programs}</Badge>
                    <Badge variant="outline">{dept.students}</Badge>
                  </div>
                  <Link href={dept.href}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Explore Department
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Placements Section with External Site Data */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Placements & Career Opportunities</h2>
            <p className="text-xl text-gray-600">Your gateway to successful careers with industry leaders</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Placement Assurance</div>
              <div className="text-sm text-gray-500">Guaranteed job placement for all eligible students</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">20+</div>
              <div className="text-gray-600 font-medium">Companies on Campus</div>
              <div className="text-sm text-gray-500">Top MNCs and organizations visit for recruitment</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Stipend Internships</div>
              <div className="text-sm text-gray-500">Paid internship opportunities across industries</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">₹95L+</div>
              <div className="text-gray-600 font-medium">Total Stipends Earned</div>
              <div className="text-sm text-gray-500">Collective earnings by students through internships</div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Our Recruitment Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center text-gray-600 text-sm font-medium">
              <div>TCS</div>
              <div>Infosys</div>
              <div>Wipro</div>
              <div>Cognizant</div>
              <div>HCL Technologies</div>
              <div>Tech Mahindra</div>
              <div>L&T</div>
              <div>Ashok Leyland</div>
              <div>Apollo Hospitals</div>
              <div>Manipal Hospitals</div>
              <div>Max Healthcare</div>
              <div>Fortis Healthcare</div>
              <div>K7 Computing</div>
              <div>Aero Knots</div>
              <div>StartupTN Partners</div>
              <div>And Many More...</div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Stories Section */}
      <VisualStories />

      {/* Shanmughah Ecosystem Section */}
      <ShanmughahEcosystem />

      {/* Contact CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover how Sri Shanmugha Educational Institutions can help you achieve your academic and career goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/apply-now">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold">
                  Apply for Admission
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                Schedule Campus Visit
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                Download Brochure
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>0428-335-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@shanmugha.edu.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Tiruchengode, Salem, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
