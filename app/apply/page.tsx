import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Phone,
  Mail,
  BookOpen,
  Upload,
  CheckCircle,
  FileText,
  CreditCard,
  UserCheck,
  ArrowLeft,
  Clock,
  Target,
  Award,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ApplyPage() {
  const applicationSteps = [
    {
      step: "1",
      title: "Personal Information",
      description: "Fill in your basic details and contact information",
      icon: <User className="w-6 h-6" />,
      status: "current",
    },
    {
      step: "2",
      title: "Academic Details",
      description: "Provide your educational background and qualifications",
      icon: <BookOpen className="w-6 h-6" />,
      status: "upcoming",
    },
    {
      step: "3",
      title: "Course Selection",
      description: "Choose your preferred course and department",
      icon: <Target className="w-6 h-6" />,
      status: "upcoming",
    },
    {
      step: "4",
      title: "Document Upload",
      description: "Upload required certificates and documents",
      icon: <Upload className="w-6 h-6" />,
      status: "upcoming",
    },
    {
      step: "5",
      title: "Review & Submit",
      description: "Review your application and submit",
      icon: <CheckCircle className="w-6 h-6" />,
      status: "upcoming",
    },
  ]

  const admissionTimeline = [
    {
      phase: "Application Submission",
      description: "Complete and submit your online application",
      duration: "15-30 minutes",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      phase: "Document Verification",
      description: "Our team will verify your submitted documents",
      duration: "2-3 working days",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      phase: "Counseling Process",
      description: "Participate in counseling and seat allocation",
      duration: "As per schedule",
      icon: <UserCheck className="w-5 h-5" />,
    },
    {
      phase: "Admission Confirmation",
      description: "Complete fee payment and confirm admission",
      duration: "1-2 days",
      icon: <CreditCard className="w-5 h-5" />,
    },
  ]

  const requiredDocuments = [
    "10th Standard Mark Sheet & Certificate",
    "12th Standard Mark Sheet & Certificate",
    "Transfer Certificate (TC)",
    "Community Certificate (if applicable)",
    "Aadhaar Card Copy",
    "Passport Size Photographs (6 copies)",
    "Income Certificate (for scholarship)",
    "Sports/Cultural Achievement Certificates (if any)",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/admissions" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Admissions</span>
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
                <p className="text-sm text-gray-600">Online Application</p>
              </div>
            </div>
            <Button variant="outline">Save as Draft</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-orange-500 text-white mb-4">Application Form</Badge>
            <h1 className="text-4xl font-bold mb-4">Start Your Journey with SSEI</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Complete the application form below to begin your admission process. Our team will guide you through every
              step.
            </p>
          </div>
        </div>
      </section>

      {/* Application Progress */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              {applicationSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                      step.status === "current"
                        ? "bg-blue-600 text-white"
                        : step.status === "completed"
                          ? "bg-green-600 text-white"
                          : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {step.status === "completed" ? <CheckCircle className="w-6 h-6" /> : step.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold">{step.title}</div>
                    <div className="text-xs text-gray-600 max-w-24">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Application Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Application Form</CardTitle>
                  <p className="text-gray-600">Please fill in all required fields marked with *</p>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                      <User className="w-5 h-5 text-blue-600" />
                      <span>Personal Information</span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter your last name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                        <input
                          type="date"
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                        <select
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="+91 9876543210"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Address Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Address Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Address *</label>
                        <textarea
                          required
                          rows={3}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter your complete address"
                        ></textarea>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                          <input
                            type="text"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="City"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                          <select
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Select State</option>
                            <option value="tamil-nadu">Tamil Nadu</option>
                            <option value="kerala">Kerala</option>
                            <option value="karnataka">Karnataka</option>
                            <option value="andhra-pradesh">Andhra Pradesh</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">PIN Code *</label>
                          <input
                            type="text"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="637304"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      <span>Academic Information</span>
                    </h3>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">10th Board *</label>
                          <select
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Select Board</option>
                            <option value="cbse">CBSE</option>
                            <option value="state">State Board</option>
                            <option value="icse">ICSE</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">10th Percentage *</label>
                          <input
                            type="number"
                            required
                            min="0"
                            max="100"
                            step="0.01"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="85.5"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">12th Board *</label>
                          <select
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Select Board</option>
                            <option value="cbse">CBSE</option>
                            <option value="state">State Board</option>
                            <option value="icse">ICSE</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">12th Percentage *</label>
                          <input
                            type="number"
                            required
                            min="0"
                            max="100"
                            step="0.01"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="88.2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                      <Target className="w-5 h-5 text-blue-600" />
                      <span>Course Selection</span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Department *</label>
                        <select
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select Department</option>
                          <option value="engineering">Engineering & Technology</option>
                          <option value="pharmacy">Pharmacy</option>
                          <option value="nursing">Nursing</option>
                          <option value="allied-health">Allied Health Sciences</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Course *</label>
                        <select
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select Course</option>
                          <option value="btech-ai">B.Tech - AI & Data Science</option>
                          <option value="be-cse">B.E - Computer Science</option>
                          <option value="btech-it">B.Tech - Information Technology</option>
                          <option value="be-ece">B.E - Electronics & Communication</option>
                          <option value="be-mech">B.E - Mechanical Engineering</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Document Upload */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                      <Upload className="w-5 h-5 text-blue-600" />
                      <span>Document Upload</span>
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Profile Photo *</label>
                        <input
                          type="file"
                          accept="image/*"
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">10th Mark Sheet *</label>
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">12th Mark Sheet *</label>
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Additional Documents (Optional)
                        </label>
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          multiple
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Upload sports certificates, achievements, etc. (Max 5 files)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Declaration */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Declaration</h3>
                    <div className="space-y-3">
                      <label className="flex items-start space-x-3">
                        <input type="checkbox" required className="mt-1" />
                        <span className="text-sm text-gray-700">
                          I hereby declare that all the information provided above is true and correct to the best of my
                          knowledge.
                        </span>
                      </label>
                      <label className="flex items-start space-x-3">
                        <input type="checkbox" required className="mt-1" />
                        <span className="text-sm text-gray-700">
                          I agree to the terms and conditions of Sri Shanmugha Educational Institutions.
                        </span>
                      </label>
                      <label className="flex items-start space-x-3">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-sm text-gray-700">
                          I would like to receive updates about admission process and college events via email/SMS.
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex space-x-4 pt-6">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 flex-1">
                      Submit Application
                      <CheckCircle className="w-5 h-5 ml-2" />
                    </Button>
                    <Button size="lg" variant="outline" className="flex-1">
                      Save as Draft
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Admission Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Admission Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {admissionTimeline.map((phase, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                          <div className="text-blue-600">{phase.icon}</div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm">{phase.phase}</h4>
                          <p className="text-xs text-gray-600 mb-1">{phase.description}</p>
                          <Badge variant="secondary" className="text-xs">
                            {phase.duration}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Required Documents */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Required Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {requiredDocuments.map((doc, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{doc}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-xs text-yellow-800">
                      <strong>Note:</strong> All documents should be in PDF, JPG, or PNG format. Maximum file size: 2MB
                      per document.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Help & Support */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <div>
                        <div className="text-sm font-semibold">Admissions Helpline</div>
                        <div className="text-xs text-gray-600">73 73 672 999</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <div>
                        <div className="text-sm font-semibold">Email Support</div>
                        <div className="text-xs text-gray-600">admissions@shanmugha.edu.in</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <div>
                        <div className="text-sm font-semibold">Office Hours</div>
                        <div className="text-xs text-gray-600">Mon-Sat: 9:00 AM - 6:00 PM</div>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline" size="sm">
                    Live Chat Support
                  </Button>
                </CardContent>
              </Card>

              {/* Application Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Award className="w-5 h-5 text-orange-500" />
                    <span>Application Tips</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span>Double-check all information before submitting</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span>Ensure all documents are clear and readable</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span>Save your application as draft frequently</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span>Keep your application number safe for future reference</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Message (Hidden by default) */}
      <div
        id="success-message"
        className="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <Card className="max-w-md mx-4">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Application Submitted Successfully!</h3>
            <p className="text-gray-600 mb-4">
              Your application has been received. You will receive a confirmation email with your application number
              shortly.
            </p>
            <div className="bg-gray-50 p-3 rounded-lg mb-4">
              <div className="text-sm font-semibold">Application Number</div>
              <div className="text-lg font-bold text-blue-600">SSEI2025001234</div>
            </div>
            <Button className="w-full">Download Application Receipt</Button>
          </CardContent>
        </Card>
      </div>

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
                  <p className="text-sm text-gray-400">Online Application</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Secure and easy online application process for all courses.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Application Help</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/application-guide" className="text-gray-400 hover:text-white">
                    Application Guide
                  </Link>
                </li>
                <li>
                  <Link href="/document-requirements" className="text-gray-400 hover:text-white">
                    Document Requirements
                  </Link>
                </li>
                <li>
                  <Link href="/fee-structure" className="text-gray-400 hover:text-white">
                    Fee Structure
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/technical-support" className="text-gray-400 hover:text-white">
                    Technical Support
                  </Link>
                </li>
                <li>
                  <Link href="/application-status" className="text-gray-400 hover:text-white">
                    Check Application Status
                  </Link>
                </li>
                <li>
                  <Link href="/contact-admissions" className="text-gray-400 hover:text-white">
                    Contact Admissions
                  </Link>
                </li>
                <li>
                  <Link href="/live-chat" className="text-gray-400 hover:text-white">
                    Live Chat
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Admissions: 73 73 672 999</li>
                <li>admissions@shanmugha.edu.in</li>
                <li>Mon-Sat: 9:00 AM - 6:00 PM</li>
                <li>Technical Support Available</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Sri Shanmugha Educational Institutions - Online Application Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
