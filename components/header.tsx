"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Menu,
  ChevronDown,
  Home,
  Users,
  Phone,
  Building,
  GraduationCap,
  Heart,
  Target,
  Globe,
  UserCheck,
  Parentheses as Parents,
  Eye,
  FileText,
  Briefcase,
  Calendar,
  Trophy,
  Sparkles,
  Zap,
  Waves,
  Flame,
  BookOpen,
} from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openCollapsible, setOpenCollapsible] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const academicsItems = [
    {
      title: "Engineering & Technology",
      href: "/engineering",
      description: "Cutting-edge programs in AI, Computer Science, and Engineering",
      icon: <Building className="w-4 h-4" />,
    },
    {
      title: "Pharmacy",
      href: "/pharmacy",
      description: "Comprehensive pharmaceutical education and research",
      icon: <Heart className="w-4 h-4" />,
    },
    {
      title: "Nursing",
      href: "/nursing",
      description: "Excellence in nursing education with international recognition",
      icon: <Users className="w-4 h-4" />,
    },
    {
      title: "Allied Health Sciences",
      href: "/allied-health",
      description: "Specialized healthcare programs for modern medical needs",
      icon: <Target className="w-4 h-4" />,
    },
  ]

  const eventsItems = [
    {
      title: "Alumni Autograph",
      href: "/events/alumni-autograph",
      description: "Celebrity meet and signature collection event",
      icon: <Users className="w-4 h-4" />,
    },
    {
      title: "Onam Festival",
      href: "/events/onam",
      description: "Traditional Kerala festival celebration",
      icon: <Sparkles className="w-4 h-4" />,
    },
    {
      title: "Inspire",
      href: "/events/inspire",
      description: "Motivational talks and leadership workshops",
      icon: <Trophy className="w-4 h-4" />,
    },
    {
      title: "Ignite",
      href: "/events/ignite",
      description: "Tech fest and innovation showcase",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      title: "Neptune",
      href: "/events/neptune",
      description: "Annual sports and athletics championship",
      icon: <Waves className="w-4 h-4" />,
    },
    {
      title: "Parambariyam",
      href: "/events/parambariyam",
      description: "Traditional Pongal festival celebration",
      icon: <Flame className="w-4 h-4" />,
    },
    {
      title: "Iyal",
      href: "/events/iyal",
      description: "Literature exploration and cultural programs",
      icon: <BookOpen className="w-4 h-4" />,
    },
  ]

  const quickLinks = [
    { title: "Students", href: "/students", icon: <GraduationCap className="w-4 h-4" /> },
    { title: "Faculty", href: "/faculty", icon: <Users className="w-4 h-4" /> },
    { title: "Parents", href: "/parents", icon: <Parents className="w-4 h-4" /> },
    { title: "Visitors", href: "/visitors", icon: <Eye className="w-4 h-4" /> },
    { title: "Alumni", href: "/alumni", icon: <UserCheck className="w-4 h-4" /> },
  ]

  const toggleCollapsible = (value: string) => {
    setOpenCollapsible(openCollapsible === value ? null : value)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl font-bold ${isScrolled ? "text-blue-900" : "text-white"}`}>Sri Shanmugha</h1>
              <p className={`text-sm ${isScrolled ? "text-blue-600" : "text-blue-100"}`}>Educational Institutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`px-4 py-2 rounded-md font-medium transition-colors hover:bg-white/10 ${
                      isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white"
                    }`}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`px-4 py-2 rounded-md font-medium transition-colors hover:bg-white/10 ${
                    isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white"
                  }`}
                >
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 p-4">
                    <div className="space-y-3">
                      <Link href="/about" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="font-semibold text-gray-900">About Us</div>
                        <div className="text-sm text-gray-600">Learn about our mission and values</div>
                      </Link>
                      <Link href="/research" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="font-semibold text-gray-900">Research</div>
                        <div className="text-sm text-gray-600">Explore our research initiatives</div>
                      </Link>
                      <Link href="/campus-life" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="font-semibold text-gray-900">Campus Life</div>
                        <div className="text-sm text-gray-600">Discover student life and activities</div>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`px-4 py-2 rounded-md font-medium transition-colors hover:bg-white/10 ${
                    isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white"
                  }`}
                >
                  Academics
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-96 p-4">
                    <div className="mb-4">
                      <Link
                        href="/academics"
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors border-b"
                      >
                        <div className="font-semibold text-gray-900">All Programs</div>
                        <div className="text-sm text-gray-600">View all academic programs</div>
                      </Link>
                    </div>
                    <div className="grid gap-2">
                      {academicsItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="mt-1">{item.icon}</div>
                          <div>
                            <div className="font-semibold text-gray-900">{item.title}</div>
                            <div className="text-sm text-gray-600">{item.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`px-4 py-2 rounded-md font-medium transition-colors hover:bg-white/10 ${
                    isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white"
                  }`}
                >
                  Events
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-96 p-4">
                    <div className="mb-4">
                      <Link href="/events" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors border-b">
                        <div className="font-semibold text-gray-900 flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>All Events</span>
                        </div>
                        <div className="text-sm text-gray-600">View all campus events and activities</div>
                      </Link>
                    </div>
                    <div className="grid gap-2">
                      {eventsItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="mt-1">{item.icon}</div>
                          <div>
                            <div className="font-semibold text-gray-900">{item.title}</div>
                            <div className="text-sm text-gray-600">{item.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/admissions" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`px-4 py-2 rounded-md font-medium transition-colors hover:bg-white/10 ${
                      isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white"
                    }`}
                  >
                    Admissions
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/placements" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`px-4 py-2 rounded-md font-medium transition-colors hover:bg-white/10 ${
                      isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white"
                    }`}
                  >
                    Placements
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`px-4 py-2 rounded-md font-medium transition-colors hover:bg-white/10 ${
                      isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white"
                    }`}
                  >
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/alumni-reunion-2025" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`px-4 py-2 rounded-md font-medium transition-colors hover:bg-white/10 ${
                      isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white"
                    } relative`}
                  >
                    Reunion 2025
                    <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded-full">
                      New
                    </Badge>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Quick Links & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {quickLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10 ${
                    isScrolled ? "text-gray-600 hover:text-blue-600" : "text-blue-100 hover:text-white"
                  }`}
                >
                  {link.icon}
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>
            <Link href="/apply-now">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold">Apply Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`lg:hidden ${isScrolled ? "text-gray-700" : "text-white"}`}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Navigate through our website</SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                <Link
                  href="/"
                  className="block py-2 text-lg font-medium text-gray-900 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>

                <Collapsible open={openCollapsible === "about"} onOpenChange={() => toggleCollapsible("about")}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-lg font-medium text-gray-900 hover:text-blue-600">
                    About
                    <ChevronDown className="w-4 h-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 ml-4">
                    <Link
                      href="/about"
                      className="block py-2 text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/research"
                      className="block py-2 text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Research
                    </Link>
                    <Link
                      href="/campus-life"
                      className="block py-2 text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Campus Life
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible open={openCollapsible === "academics"} onOpenChange={() => toggleCollapsible("academics")}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-lg font-medium text-gray-900 hover:text-blue-600">
                    Academics
                    <ChevronDown className="w-4 h-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 ml-4">
                    <Link
                      href="/academics"
                      className="block py-2 text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      All Programs
                    </Link>
                    {academicsItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 text-gray-600 hover:text-blue-600"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible open={openCollapsible === "events"} onOpenChange={() => toggleCollapsible("events")}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-lg font-medium text-gray-900 hover:text-blue-600">
                    Events
                    <ChevronDown className="w-4 h-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 ml-4">
                    <Link
                      href="/events"
                      className="block py-2 text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      All Events
                    </Link>
                    {eventsItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 text-gray-600 hover:text-blue-600"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                <Link
                  href="/admissions"
                  className="block py-2 text-lg font-medium text-gray-900 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admissions
                </Link>

                <Link
                  href="/placements"
                  className="block py-2 text-lg font-medium text-gray-900 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Placements
                </Link>

                <Link
                  href="/contact"
                  className="block py-2 text-lg font-medium text-gray-900 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <Link
                  href="/alumni-reunion-2025"
                  className="block py-2 text-lg font-medium text-gray-900 hover:text-blue-600 flex items-center space-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Alumni Reunion 2025</span>
                  <Badge className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">New</Badge>
                </Link>

                <div className="border-t pt-4 mt-4">
                  <p className="text-sm font-medium text-gray-900 mb-3">Quick Links</p>
                  <div className="space-y-2">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center space-x-2 py-2 text-gray-600 hover:text-blue-600"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.icon}
                        <span>{link.title}</span>
                      </Link>
                    ))}
                    <Link
                      href="/examinations"
                      className="flex items-center space-x-2 py-2 text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <FileText className="w-4 h-4" />
                      <span>Examinations</span>
                    </Link>
                    <Link
                      href="/career-centre"
                      className="flex items-center space-x-2 py-2 text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Briefcase className="w-4 h-4" />
                      <span>Career Centre</span>
                    </Link>
                  </div>
                </div>

                <div className="border-t pt-4 mt-4">
                  <Link href="/apply-now" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Secondary Navigation Bar */}
        <div className={`border-t transition-all duration-300 ${isScrolled ? "border-gray-200" : "border-white/20"}`}>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/examinations"
                className={`flex items-center space-x-1 hover:underline transition-colors ${
                  isScrolled ? "text-gray-600 hover:text-blue-600" : "text-blue-100 hover:text-white"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Examinations</span>
              </Link>
              <Link
                href="/career-centre"
                className={`flex items-center space-x-1 hover:underline transition-colors ${
                  isScrolled ? "text-gray-600 hover:text-blue-600" : "text-blue-100 hover:text-white"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Career Centre</span>
              </Link>
              <Link
                href="/international"
                className={`flex items-center space-x-1 hover:underline transition-colors ${
                  isScrolled ? "text-gray-600 hover:text-blue-600" : "text-blue-100 hover:text-white"
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>International</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Badge className="bg-green-500 text-white">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                Admissions Open
              </Badge>
              <div className={`text-sm ${isScrolled ? "text-gray-600" : "text-blue-100"}`}>
                <Phone className="w-4 h-4 inline mr-1" />
                0428-335-9999
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
