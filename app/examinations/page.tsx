import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  Users,
  Award,
  Phone,
  Mail,
  Calendar,
  MapPin,
  FileText,
  Download,
  Clock,
  CheckCircle,
  BookOpen,
  Bell,
} from "lucide-react"

export default function ExaminationsPage() {
  const examServices = [
    {
      title: "Hall Ticket Download",
      description: "Download your examination hall tickets digitally",
      icon: <Download className="w-8 h-8 text-blue-600" />,
      link: "/hall-ticket",
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Results Portal",
      description: "Access your examination results and transcripts",
      icon: <Award className="w-8 h-8 text-green-600" />,
      link: "/results",
      color: "bg-green-50 border-green-200",
    },
    {
      title: "Exam Schedule",
      description: "View detailed examination timetables and schedules",
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      link: "/schedule",
      color: "bg-purple-50 border-purple-200",
    },
    {
      title: "Revaluation",
      description: "Apply for answer script revaluation and rechecking",
      icon: <FileText className="w-8 h-8 text-orange-600" />,
      link: "/revaluation",
      color: "bg-orange-50 border-orange-200",
    },
  ]

  const examStats = [
    { number: "98.5%", label: "Pass Rate", icon: <CheckCircle className="w-8 h-8 text-green-600" /> },
    { number: "15,000+", label: "Students Examined", icon: <Users className="w-8 h-8 text-blue-600" /> },
    { number: "450+", label: "Courses Offered", icon: <BookOpen className="w-8 h-8 text-purple-600" /> },
    { number: "24/7", label: "Online Support", icon: <Clock className="w-8 h-8 text-orange-600" /> },
  ]

  const upcomingExams = [
    {
      title: "End Semester Examinations",
      date: "April 15 - May 10, 2025",
      type: "Theory & Practical",
      departments: "All Departments",
      status: "Registration Open",
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Supplementary Examinations",
      date: "June 5 - June 20, 2025",
      type: "Theory Only",
      departments: "All Departments",
      status: "Coming Soon",
      color: "bg-orange-50 border-orange-200",
    },
    {
      title: "Mid Semester Examinations",
      date: "March 1 - March 15, 2025",
      type: "Theory & Assignments",
      departments: "All Departments",
      status: "Completed",
      color: "bg-green-50 border-green-200",
    },
  ]

  const examGuidelines = [
    {
      title: "Before the Exam",
      points: [
        "Download hall ticket 3 days before exam",
        "Verify exam center and seat number",
        "Carry valid ID proof and hall ticket",
        "Reach exam center 30 minutes early",
      ],
    },
    {
      title: "During the Exam",
      points: [
        "Follow all COVID-19 safety protocols",
        "No electronic devices allowed",
        "Use only blue/black pen for writing",
        "Maintain exam hall discipline",
      ],
    },
    {
      title: "After the Exam",
      points: [
        "Results will be published within 15 days",
        "Check results on official portal",
        "Apply for revaluation if needed",
        "Collect original certificates from office",
      ],
    },
  ]

  const importantNotices = [
    {
      title: "Exam Fee Payment Deadline Extended",
      date: "March 10, 2025",
      type: "Important",
      description: "Last date for exam fee payment extended to March 15, 2025.",
    },
    {
      title: "Hall Ticket Correction Window",
      date: "March 8, 2025",
      type: "Notice",
      description: "Students can correct hall ticket details from March 12-14, 2025.",
    },
    {
      title: "New Exam Pattern Implementation",
      date: "March 5, 2025",
      type: "Update",
      description: "New continuous assessment pattern effective from current semester.",
    },
    {
      title: "Digital Answer Sheet Submission",
      date: "March 1, 2025",
      type: "Info",
      description: "Online submission portal for practical exam answer sheets now live.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-orange-500 text-white mb-4">Academic Services</Badge>
            <h1 className="text-5xl font-bold mb-6">Examinations</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive examination services with digital hall tickets, online results, and 24/7 student support for
              a seamless academic experience.
            </p>
          </div>
        </div>
      </section>

      {/* Exam Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {examStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Examination Services</h2>
            <p className="text-xl text-gray-600">Digital solutions for all your examination needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {examServices.map((service, index) => (
              <Card key={index} className={`${service.color} border-2 hover:shadow-lg transition-shadow`}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Access Service</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Exams */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Examination Schedule</h2>
            <p className="text-xl text-gray-600">Stay updated with upcoming examinations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingExams.map((exam, index) => (
              <Card key={index} className={`${exam.color} border-2 hover:shadow-lg transition-shadow`}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge
                      className={`${exam.status === "Registration Open" ? "bg-green-600" : exam.status === "Coming Soon" ? "bg-orange-600" : "bg-gray-600"} text-white`}
                    >
                      {exam.status}
                    </Badge>
                    <Calendar className="w-5 h-5 text-gray-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{exam.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {exam.date}
                    </div>
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      {exam.type}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {exam.departments}
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Guidelines */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Examination Guidelines</h2>
            <p className="text-xl text-gray-600">Important instructions for students</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {examGuidelines.map((guideline, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{guideline.title}</h3>
                  <ul className="space-y-3">
                    {guideline.points.map((point, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notices */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Important Notices</h2>
            <p className="text-xl text-gray-600">Latest updates and announcements</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {importantNotices.map((notice, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge
                          className={`${notice.type === "Important" ? "bg-red-100 text-red-800" : notice.type === "Notice" ? "bg-blue-100 text-blue-800" : notice.type === "Update" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                        >
                          {notice.type}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-1" />
                          {notice.date}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{notice.title}</h3>
                      <p className="text-gray-600">{notice.description}</p>
                    </div>
                    <Bell className="w-5 h-5 text-gray-400 ml-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Need Examination Support?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our examination cell is here to assist you with all your queries and concerns
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Download Hall Ticket
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                Check Results
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                Exam Guidelines
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Exam Helpline</h3>
                <p>0428-335-9999 (Ext: 123)</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p>exams@shanmugha.edu.in</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Exam Office</h3>
                <p>Administrative Block, 2nd Floor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
