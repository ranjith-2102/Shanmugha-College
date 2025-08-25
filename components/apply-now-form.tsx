"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, BookOpen, MapPin, Upload, CheckCircle } from "lucide-react"

export default function ApplyNowForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    course: "",
    state: "",
    city: "",
    dateOfBirth: "",
    gender: "",
    category: "",
    tenthPercentage: "",
    twelfthPercentage: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const departments = [
    {
      name: "Engineering & Technology",
      courses: [
        "B.Tech - AI & Data Science",
        "B.E - Computer Science",
        "B.Tech - Information Technology",
        "B.E - Cyber Security",
        "B.E - Electronics & Communication",
        "B.E - Mechanical Engineering",
        "B.Tech - Agricultural Engineering",
        "B.E - Biomedical Engineering",
      ],
    },
    {
      name: "Pharmacy",
      courses: [
        "Pharm.D (Doctor of Pharmacy)",
        "M.Pharm - Pharmaceutical Chemistry",
        "M.Pharm - Pharmaceutics",
        "B.Pharm (Bachelor of Pharmacy)",
        "B.Pharm (Lateral Entry)",
        "D.Pharm (Diploma in Pharmacy)",
      ],
    },
    {
      name: "Nursing",
      courses: [
        "B.Sc. Nursing for Women (Dual Degree)",
        "B.Sc. Nursing",
        "BHSM (Bachelor of Humanistic & Social Medicine)",
      ],
    },
    {
      name: "Allied Health Science",
      courses: [
        "B.Sc. Occupational Therapy Assistant",
        "B.Sc. Cardiac Technology",
        "B.Sc. Medical Lab Technology",
        "B.Optometry",
      ],
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Handle form submission logic here
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const selectedDepartment = departments.find((dept) => dept.name === formData.department)

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto bg-white">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted Successfully!</h3>
          <p className="text-gray-600 mb-4">
            Thank you for your interest in Sri Shanmugha Educational Institutions. Our admissions team will contact you
            shortly.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <div className="text-sm font-semibold text-gray-700">Application Reference Number</div>
            <div className="text-lg font-bold text-blue-600">SSEI2025{Math.floor(Math.random() * 10000)}</div>
          </div>
          <Button onClick={() => setIsSubmitted(false)} className="bg-blue-600 hover:bg-blue-700 text-white">
            Submit Another Application
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white text-gray-900">
      <CardHeader>
        <CardTitle className="text-2xl text-center flex items-center justify-center">
          <User className="w-6 h-6 mr-2 text-blue-600" />
          Application Form - Admissions 2025-26
        </CardTitle>
        <p className="text-center text-gray-600">Fill in your details to apply for admission</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <User className="w-5 h-5 mr-2 text-blue-600" />
              Personal Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your last name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+91 9876543210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-blue-600" />
              Address Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select State</option>
                  <option value="tamil-nadu">Tamil Nadu</option>
                  <option value="kerala">Kerala</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="andhra-pradesh">Andhra Pradesh</option>
                  <option value="telangana">Telangana</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your city"
                />
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
              Academic Information
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Category</option>
                  <option value="general">General</option>
                  <option value="obc">OBC</option>
                  <option value="sc">SC</option>
                  <option value="st">ST</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">10th Percentage *</label>
                <input
                  type="number"
                  name="tenthPercentage"
                  value={formData.tenthPercentage}
                  onChange={handleInputChange}
                  required
                  min="0"
                  max="100"
                  step="0.01"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="85.5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">12th Percentage *</label>
                <input
                  type="number"
                  name="twelfthPercentage"
                  value={formData.twelfthPercentage}
                  onChange={handleInputChange}
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

          {/* Course Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
              Course Selection
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department *</label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Department</option>
                  {departments.map((dept) => (
                    <option key={dept.name} value={dept.name}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Course *</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                  disabled={!formData.department}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                >
                  <option value="">Select Course</option>
                  {selectedDepartment?.courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Document Upload */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Upload className="w-5 h-5 mr-2 text-blue-600" />
              Document Upload
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
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
            </div>
          </div>

          {/* Declaration */}
          <div className="bg-gray-50 p-4 rounded-lg">
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

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-3 text-lg font-semibold transform transition-all duration-300 hover:scale-105"
            >
              Submit Application
              <CheckCircle className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-gray-600 mt-4">
              Application fee: ₹500 (Non-refundable) | Payment after form submission
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
