"use client"

import { useState } from "react"
import { X, Bell, Phone, Mail, MapPin, Calendar, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HeroNotificationPanel() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <Card className="w-full max-w-sm bg-white/95 backdrop-blur-sm shadow-2xl border-0 relative">
      <CardContent className="p-0">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-lg relative">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center space-x-2 mb-2">
            <Bell className="w-5 h-5" />
            <h3 className="font-bold text-lg">Campus Updates</h3>
          </div>
          <p className="text-blue-100 text-sm">Real-time notifications & alerts</p>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Latest Update */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r">
            <div className="flex items-start space-x-2">
              <Badge className="bg-yellow-500 text-white text-xs px-2 py-1 mt-0.5">NEW</Badge>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Admissions Open 2025-26</p>
                <p className="text-xs text-gray-600 mt-1">Applications now being accepted for all programs</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <Users className="w-6 h-6 text-blue-600 mx-auto mb-1" />
              <p className="text-lg font-bold text-blue-900">5000+</p>
              <p className="text-xs text-blue-600">Students</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <Award className="w-6 h-6 text-green-600 mx-auto mb-1" />
              <p className="text-lg font-bold text-green-900">100%</p>
              <p className="text-xs text-green-600">Placement</p>
            </div>
          </div>

          {/* Important Dates */}
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="w-4 h-4 text-gray-600" />
              <p className="text-sm font-semibold text-gray-900">Important Dates</p>
            </div>
            <div className="space-y-1 text-xs text-gray-600">
              <p>• Application Deadline: March 31, 2025</p>
              <p>• Entrance Exam: April 15, 2025</p>
              <p>• Results: May 1, 2025</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 text-xs">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="w-3 h-3" />
              <span>0428-335-9999</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail className="w-3 h-3" />
              <span>admissions@shanmugha.edu.in</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="w-3 h-3" />
              <span>Tiruchengode, Salem, TN</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 text-sm">
            Get Admission Info
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
