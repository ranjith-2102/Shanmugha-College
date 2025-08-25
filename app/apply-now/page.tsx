"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  FileText,
  CheckCircle,
  Users,
  GraduationCap,
  Phone,
  Mail,
  Download,
  AlertCircle,
  BookOpen,
  CreditCard,
  Calendar,
  MapPin,
  Star,
} from "lucide-react"
import Image from "next/image"

export default function ApplyNowPage() {
  const eligibilityCriteria = [
    {
      department: "Engineering & Technology",
      criteria: [
        "12th Standard with Physics, Chemistry, Mathematics",
        "Minimum 50% marks in 12th Standard",
        "Valid JEE Main/TNEA score (preferred)",
        "Age limit: 17-25 years",
      ],
    },
    {
      department: "Pharmacy",
      criteria: [
        "12th Standard with Physics, Chemistry, Biology/Mathematics",
        "Minimum 50% marks in 12th Standard",
        "Valid NEET score for Pharm.D",
        "Age limit: 17-25 years",
      ],
    },
    {
      department: "Nursing",
      criteria: [
        "12th Standard with Physics, Chemistry, Biology",
        "Minimum 45% marks in 12th Standard",
        "Valid NEET score",
        "Age limit: 17-35 years (for women only)",
      ],
    },
    {
      department: "Allied Health Science",
      criteria: [
        "12th Standard with Physics, Chemistry, Biology",
        "Minimum 50% marks in 12th Standard",
        "Valid entrance exam score (if applicable)",
        "Age limit: 17-25 years",
      ],
    },
  ]

  const requiredDocuments = [
    {
      name: "10th Standard Mark Sheet & Certificate",
      type: "Academic",
      required: true,
      description: "Original mark sheet and passing certificate",
    },
    {
      name: "12th Standard Mark Sheet & Certificate",
      type: "Academic",
      required: true,
      description: "Original mark sheet and passing certificate",
    },
    {
      name: "Transfer Certificate (TC)",
      type: "Academic",
      required: true,
      description: "From the last attended institution",
    },
    {
      name: "Conduct Certificate",
      type: "Academic",
      required: true,
      description: "Character certificate from previous institution",
    },
    {
      name: "Entrance Exam Score Card",
      type: "Exam",
      required: false,
      description: "JEE Main/NEET/TNEA score card (if applicable)",
    },
    {
      name: "Aadhaar Card",
      type: "Identity",
      required: true,
      description: "Government issued identity proof",
    },
    {
      name: "Passport Size Photographs",
      type: "Personal",
      required: true,
      description: "Recent colored photographs (6 copies)",
    },
    {
      name: "Community Certificate",
      type: "Category",
      required: false,
      description: "For SC/ST/OBC candidates",
    },
    {
      name: "Income Certificate",
      type: "Financial",
      required: false,
      description: "For scholarship applications",
    },
    {
      name: "Migration Certificate",
      type: "Academic",
      required: false,
      description: "For students from other states/boards",
    },
  ]

  const applicationSteps = [
    {
      step: 1,
      title: "Check Eligibility",
      description: "Verify you meet the eligibility criteria for your chosen course",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Prepare Documents",
      description: "Gather all required documents and certificates",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Fill Application",
      description: "Complete the online application form with accurate details",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      step: 4,
      title: "Upload Documents",
      description: "Upload scanned copies of all required documents",
      icon: <Download className="w-6 h-6" />,
    },
    {
      step: 5,
      title: "Pay Application Fee",
      description: "Pay the non-refundable application processing fee",
      icon: <CreditCard className="w-6 h-6" />,
    },
    {
      step: 6,
      title: "Submit Application",
      description: "Review and submit your completed application",
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ]

  const importantDates = [
    {
      event: "Application Opens",
      date: "January 15, 2025",
      status: "completed",
    },
    {
      event: "Last Date to Apply",
      date: "June 30, 2025",
      status: "upcoming",
    },
    {
      event: "Merit List Publication",
      date: "July 15, 2025",
      status: "upcoming",
    },
    {
      event: "Counselling Begins",
      date: "July 20, 2025",
      status: "upcoming",
    },
    {
      event: "Classes Commence",
      date: "August 15, 2025",
      status: "upcoming",
    },
  ]

  const feeStructure = [
    {
      department: "Engineering & Technology",
      courses: [
        { name: "B.Tech - AI & Data Science", fee: "₹1,25,000/year" },
        { name: "B.E - Computer Science", fee: "₹1,20,000/year" },
        { name: "B.E - Electronics & Communication", fee: "₹1,15,000/year" },
        { name: "B.E - Mechanical Engineering", fee: "₹1,10,000/year" },
      ],
    },
    {
      department: "Pharmacy",
      courses: [
        { name: "Pharm.D (Doctor of Pharmacy)", fee: "₹1,50,000/year" },
        { name: "B.Pharm (Bachelor of Pharmacy)", fee: "₹95,000/year" },
        { name: "D.Pharm (Diploma in Pharmacy)", fee: "₹75,000/year" },
      ],
    },
    {
      department: "Nursing",
      courses: [
        { name: "B.Sc. Nursing (Dual Degree)", fee: "₹1,20,000/year" },
        { name: "B.Sc. Nursing", fee: "₹1,00,000/year" },
      ],
    },
    {
      department: "Allied Health Science",
      courses: [
        { name: "B.Sc. Medical Lab Technology", fee: "₹85,000/year" },
        { name: "B.Sc. Cardiac Technology", fee: "₹90,000/year" },
        { name: "B.Optometry", fee: "₹80,000/year" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="bg-orange-500 text-white mb-6 text-lg px-4 py-2">Admissions Open 2025-26</Badge>
              <h1 className="text-5xl font-bold mb-6">Apply Now</h1>
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text text-2xl font-bold mb-6">
                🎉 Join Our 15-Year Legacy of Excellence! 🎉
              </div>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Join Sri Shanmugha Educational Institutions and embark on a journey of academic excellence. Follow our
                simple application process to secure your future in engineering, pharmacy, nursing, or allied health
                sciences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                  Start Application
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
                >
                  Download Prospectus
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shanmugha%20Institution.jpg-VIntAD2AZ7LWHFulL6SoBuAyp2N8aG.jpeg"
                alt="Sri Shanmugha Educational Institutions"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4 rounded-lg shadow-xl">
                <div className="text-xl font-bold">15 Years</div>
                <div className="text-sm">Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600 font-semibold">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">5000+</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Courses Offered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to complete your application and join our prestigious institution
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {applicationSteps.map((step, index) => (
                <Card key={index} className="relative">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      {step.icon}
                    </div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campus Images Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Campus</h2>
            <div className="text-xl text-orange-600 font-semibold mb-2">15 Years of Infrastructure Development</div>
            <p className="text-xl text-gray-600">Modern facilities and world-class infrastructure</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="space-y-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/auditorium.JPG-2N1AWYbaba3LvnSzG7jW3IQtNFPacq.jpeg"
                alt="Modern Auditorium"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full"
              />
              <h3 className="text-lg font-semibold text-center">Modern Auditorium</h3>
            </div>
            <div className="space-y-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lab.JPG-9kfbqIB6KsUK41TaJtBdtB7Y52tcIx.jpeg"
                alt="Computer Laboratory"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full"
              />
              <h3 className="text-lg font-semibold text-center">Advanced Computer Labs</h3>
            </div>
            <div className="space-y-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/building.JPG-iOWfxUaDWlTZhORC242KNPOfFcOjWz.jpeg"
                alt="Campus Courtyard"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full"
              />
              <h3 className="text-lg font-semibold text-center">Beautiful Campus</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check if you meet the requirements for your desired course
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {eligibilityCriteria.map((dept, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-900">{dept.department}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {dept.criteria.map((criterion, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{criterion}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Required Documents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prepare these documents before starting your application
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {requiredDocuments.map((doc, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">{doc.name}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge variant={doc.required ? "destructive" : "secondary"}>
                          {doc.required ? "Required" : "Optional"}
                        </Badge>
                        <Badge variant="outline">{doc.type}</Badge>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{doc.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Document Guidelines</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• All documents should be in PDF, JPG, or PNG format</li>
                    <li>• Maximum file size: 2MB per document</li>
                    <li>• Ensure documents are clear and readable</li>
                    <li>• Original documents required during counselling</li>
                    <li>• Self-attested copies acceptable for online submission</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Important Dates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mark your calendar with these crucial admission dates
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {importantDates.map((date, index) => (
                <Card
                  key={index}
                  className={`${date.status === "completed" ? "bg-green-50 border-green-200" : "bg-white"}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            date.status === "completed" ? "bg-green-100" : "bg-blue-100"
                          }`}
                        >
                          {date.status === "completed" ? (
                            <CheckCircle className="w-6 h-6 text-green-600" />
                          ) : (
                            <Calendar className="w-6 h-6 text-blue-600" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{date.event}</h3>
                          <p className="text-gray-600">{date.date}</p>
                        </div>
                      </div>
                      <Badge variant={date.status === "completed" ? "default" : "secondary"}>
                        {date.status === "completed" ? "Completed" : "Upcoming"}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fee Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent and competitive fee structure for all courses
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {feeStructure.map((dept, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-900">{dept.department}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {dept.courses.map((course, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium text-gray-900">{course.name}</span>
                          <span className="font-bold text-blue-600">{course.fee}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                * Additional fees may apply for hostel, transport, and other facilities
              </p>
              <Button variant="outline" size="lg">
                Download Detailed Fee Structure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Fee */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg p-8 shadow-lg border">
              <CreditCard className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Fee</h2>
              <div className="text-5xl font-bold text-blue-600 mb-4">₹500</div>
              <p className="text-gray-600 mb-6">One-time non-refundable application processing fee for all courses</p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Secure Payment Gateway</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Multiple Payment Options</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Instant Receipt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our admission support team is here to assist you throughout the application process
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Phone Support</h3>
                  <p className="text-gray-600 mb-4">Get instant help over phone</p>
                  <div className="space-y-2">
                    <p className="font-semibold">0428-335-9999</p>
                    <p className="font-semibold">73 73 672 999</p>
                    <p className="text-sm text-gray-500">Mon-Sat: 9 AM - 6 PM</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Email Support</h3>
                  <p className="text-gray-600 mb-4">Send us your queries</p>
                  <div className="space-y-2">
                    <p className="font-semibold">admissions@shanmugha.edu.in</p>
                    <p className="font-semibold">info@shanmugha.edu.in</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Visit Campus</h3>
                  <p className="text-gray-600 mb-4">Come and see our facilities</p>
                  <div className="space-y-2">
                    <p className="text-sm">Tiruchengode - Sankari Main Road</p>
                    <p className="text-sm">Pullipalayam, Morur(Po)</p>
                    <p className="text-sm">Salem, Tamil Nadu - 637304</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <div className="text-2xl text-orange-300 font-semibold mb-4">Join Our 15-Year Legacy of Excellence!</div>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't wait! Secure your future with Sri Shanmugha Educational Institutions. Apply now and take the first
            step towards academic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
              Start Your Application
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
            >
              Schedule Campus Visit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
