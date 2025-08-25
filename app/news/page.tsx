import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowLeft, Newspaper, ChevronRight, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NewsPage() {
  const featuredNews = [
    {
      id: 1,
      title: "Sri Shanmugha Engineering College Achieves NAAC A+ Grade",
      excerpt:
        "The college has been awarded the prestigious NAAC A+ grade for its outstanding academic performance and infrastructure.",
      content:
        "Sri Shanmugha College of Engineering & Technology has achieved a significant milestone by securing the NAAC A+ grade, recognizing its commitment to academic excellence, research innovation, and student development. This achievement reflects our dedication to providing world-class education and maintaining the highest standards in technical education.",
      category: "Achievement",
      date: "January 15, 2025",
      author: "Dr. Rajesh Kumar",
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
      views: 2500,
      readTime: "3 min read",
    },
    {
      id: 2,
      title: "International Partnership with University of Porto Expanded",
      excerpt:
        "New dual degree programs launched in collaboration with University of Porto, Australia for Nursing and Allied Health Sciences.",
      content:
        "Sri Shanmugha Educational Institutions has expanded its international partnership with the University of Porto, Australia, introducing new dual degree programs in Nursing and Allied Health Sciences. This collaboration provides students with global exposure and internationally recognized qualifications.",
      category: "Partnership",
      date: "January 10, 2025",
      author: "International Relations Office",
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
      views: 1800,
      readTime: "4 min read",
    },
  ]

  const recentNews = [
    {
      id: 3,
      title: "Record-Breaking Placement Season 2024-25",
      excerpt:
        "Over 95% students placed with highest package of ₹15 LPA, showcasing the quality of education and industry readiness.",
      category: "Placements",
      date: "January 8, 2025",
      author: "Placement Cell",
      image: "/placeholder.svg?height=200&width=300",
      views: 3200,
      readTime: "2 min read",
    },
    {
      id: 4,
      title: "New State-of-the-Art Research Labs Inaugurated",
      excerpt:
        "Advanced research facilities for AI, Robotics, and Pharmaceutical Sciences opened to enhance research capabilities.",
      category: "Infrastructure",
      date: "January 5, 2025",
      author: "Research & Development",
      image: "/placeholder.svg?height=200&width=300",
      views: 1500,
      readTime: "3 min read",
    },
    {
      id: 5,
      title: "Students Win National Level Technical Competition",
      excerpt:
        "Engineering students secure first place in Smart India Hackathon 2024, developing innovative healthcare solutions.",
      category: "Student Achievement",
      date: "December 28, 2024",
      author: "Student Affairs",
      image: "/placeholder.svg?height=200&width=300",
      views: 2100,
      readTime: "2 min read",
    },
    {
      id: 6,
      title: "Faculty Research Paper Published in International Journal",
      excerpt: "Dr. Priya Sharma's research on sustainable engineering practices featured in IEEE Transactions.",
      category: "Research",
      date: "December 25, 2024",
      author: "Research Office",
      image: "/placeholder.svg?height=200&width=300",
      views: 900,
      readTime: "4 min read",
    },
    {
      id: 7,
      title: "Annual Cultural Fest 'Kaleidoscope 2024' Grand Success",
      excerpt:
        "Three-day cultural extravaganza witnesses participation from 50+ colleges with spectacular performances.",
      category: "Events",
      date: "December 20, 2024",
      author: "Cultural Committee",
      image: "/placeholder.svg?height=200&width=300",
      views: 2800,
      readTime: "3 min read",
    },
    {
      id: 8,
      title: "New Scholarship Program Launched for Meritorious Students",
      excerpt:
        "₹2.21 crore scholarship fund established to support academically excellent and financially needy students.",
      category: "Scholarship",
      date: "December 15, 2024",
      author: "Administration",
      image: "/placeholder.svg?height=200&width=300",
      views: 1600,
      readTime: "2 min read",
    },
  ]

  const announcements = [
    {
      title: "Admission Process for 2025-26 Academic Year",
      date: "January 20, 2025",
      type: "Admission",
      urgent: true,
    },
    {
      title: "Mid-Semester Examination Schedule Released",
      date: "January 18, 2025",
      type: "Academic",
      urgent: false,
    },
    {
      title: "Industry Visit Registration Open",
      date: "January 16, 2025",
      type: "Industry",
      urgent: false,
    },
    {
      title: "Library Extended Hours During Exams",
      date: "January 14, 2025",
      type: "Facility",
      urgent: false,
    },
  ]

  const newsCategories = [
    { name: "All News", count: 45, active: true },
    { name: "Achievements", count: 12, active: false },
    { name: "Placements", count: 8, active: false },
    { name: "Research", count: 15, active: false },
    { name: "Events", count: 10, active: false },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.svg"
                alt="Sri Shanmugha Educational Institutions"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div>
                <h1 className="text-xl font-bold text-blue-900">Sri Shanmugha</h1>
                <p className="text-sm text-gray-600">News & Announcements</p>
              </div>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">Subscribe to Updates</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-orange-500 text-white mb-4">Latest Updates</Badge>
            <h1 className="text-5xl font-bold mb-6">News & Announcements</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Stay updated with the latest news, achievements, events, and announcements from Sri Shanmugha Educational
              Institutions.
            </p>
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {newsCategories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                className={category.active ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured News</h2>
            <p className="text-xl text-gray-600">Highlighting our most important updates and achievements</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredNews.map((news) => (
              <Card key={news.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <Image
                    src={news.image || "/placeholder.svg"}
                    alt={news.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-500 text-white">Featured</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-gray-800">{news.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{news.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{news.author}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{news.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{news.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Read Full Article
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News & Announcements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent News */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent News</h2>
              <div className="space-y-6">
                {recentNews.map((news) => (
                  <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="flex">
                      <Image
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        width={200}
                        height={150}
                        className="w-48 h-36 object-cover"
                      />
                      <CardContent className="flex-1 p-6">
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="bg-blue-100 text-blue-800">{news.category}</Badge>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Eye className="w-4 h-4" />
                            <span>{news.views}</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{news.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{news.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{news.readTime}</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            Read More
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Load More News
                </Button>
              </div>
            </div>

            {/* Announcements Sidebar */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Announcements</h2>
              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge
                          className={announcement.urgent ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-800"}
                        >
                          {announcement.type}
                        </Badge>
                        {announcement.urgent && <Badge className="bg-red-500 text-white text-xs">Urgent</Badge>}
                      </div>
                      <h4 className="font-semibold text-sm mb-2">{announcement.title}</h4>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{announcement.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Stats */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Total News Articles</span>
                      <span className="font-semibold">145</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">This Month</span>
                      <span className="font-semibold">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Total Views</span>
                      <span className="font-semibold">25,400</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Subscribers</span>
                      <span className="font-semibold">3,200</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="mt-6">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Newspaper className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Stay Updated</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Subscribe to our newsletter for the latest news and updates.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                      />
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Subscribe</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Never Miss an Update</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Stay connected with Sri Shanmugha Educational Institutions. Get the latest news, achievements, and
              announcements delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 p-3 rounded-lg text-gray-900"
              />
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Subscribe Now
              </Button>
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
                  <p className="text-sm text-gray-400">News & Updates</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted source for the latest news and updates from our institution.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">News Categories</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/news/achievements" className="text-gray-400 hover:text-white">
                    Achievements
                  </Link>
                </li>
                <li>
                  <Link href="/news/placements" className="text-gray-400 hover:text-white">
                    Placements
                  </Link>
                </li>
                <li>
                  <Link href="/news/research" className="text-gray-400 hover:text-white">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="/news/events" className="text-gray-400 hover:text-white">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/news/archive" className="text-gray-400 hover:text-white">
                    News Archive
                  </Link>
                </li>
                <li>
                  <Link href="/news/press-releases" className="text-gray-400 hover:text-white">
                    Press Releases
                  </Link>
                </li>
                <li>
                  <Link href="/news/media-kit" className="text-gray-400 hover:text-white">
                    Media Kit
                  </Link>
                </li>
                <li>
                  <Link href="/news/contact" className="text-gray-400 hover:text-white">
                    Contact Media Team
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>media@shanmugha.edu.in</li>
                <li>+91 9876543210</li>
                <li>Public Relations Office</li>
                <li>Main Campus</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Sri Shanmugha Educational Institutions - News & Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
