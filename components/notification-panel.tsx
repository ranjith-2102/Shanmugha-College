"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Clock, Phone, Mail, MapPin, Building } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface NotificationItem {
  id: string
  type: "placement" | "event" | "lecture" | "achievement"
  title: string
  time: string
  icon?: React.ReactNode
}

export default function NotificationPanel() {
  const [isVisible, setIsVisible] = useState(true)

  const notifications: NotificationItem[] = [
    {
      id: "1",
      type: "placement",
      title: "Microsoft Campus Drive",
      time: "Today, 10:00 AM",
      icon: <Building className="w-4 h-4" />,
    },
    {
      id: "2",
      type: "event",
      title: "Technical Symposium 2025",
      time: "Tomorrow, 9:00 AM",
      icon: <Clock className="w-4 h-4" />,
    },
    {
      id: "3",
      type: "lecture",
      title: "AI & Machine Learning Workshop",
      time: "Jan 30, 2:00 PM",
      icon: <Clock className="w-4 h-4" />,
    },
    {
      id: "4",
      type: "achievement",
      title: "Students Win National Hackathon",
      time: "2 hours ago",
      icon: <Clock className="w-4 h-4" />,
    },
  ]

  const getTypeConfig = (type: string) => {
    switch (type) {
      case "placement":
        return {
          badge: "Placement",
          color: "bg-green-500",
          borderColor: "border-l-green-500",
          bgColor: "bg-green-50",
        }
      case "event":
        return {
          badge: "Event",
          color: "bg-blue-500",
          borderColor: "border-l-blue-500",
          bgColor: "bg-blue-50",
        }
      case "lecture":
        return {
          badge: "Lecture",
          color: "bg-purple-500",
          borderColor: "border-l-purple-500",
          bgColor: "bg-purple-50",
        }
      case "achievement":
        return {
          badge: "Achievement",
          color: "bg-orange-500",
          borderColor: "border-l-orange-500",
          bgColor: "bg-orange-50",
        }
      default:
        return {
          badge: "Update",
          color: "bg-gray-500",
          borderColor: "border-l-gray-500",
          bgColor: "bg-gray-50",
        }
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed top-20 right-4 z-40 w-80 md:w-96">
      <Card className="bg-white shadow-2xl border-0 rounded-2xl overflow-hidden">
        <div className="relative">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>

          <CardContent className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">What's Happening</h3>
              <p className="text-gray-600 text-sm">Live updates from campus</p>
            </div>

            <div className="space-y-4 mb-6">
              {notifications.map((notification) => {
                const config = getTypeConfig(notification.type)
                return (
                  <div
                    key={notification.id}
                    className={`border-l-4 ${config.borderColor} pl-4 py-2 ${config.bgColor} rounded-r-lg`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <Badge className={`${config.color} text-white text-xs px-2 py-1 rounded-full`}>
                        {config.badge}
                      </Badge>
                      {notification.icon && <div className="text-gray-500">{notification.icon}</div>}
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{notification.title}</h4>
                    <div className="flex items-center text-xs text-gray-600">
                      <Clock className="w-3 h-3 mr-1" />
                      {notification.time}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="border-t pt-4 space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2 text-red-500" />
                <span>0428-335-9999</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-2 text-red-500" />
                <span>admissions@shanmugha.edu.in</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2 text-red-500" />
                <span>Salem, Tamil Nadu</span>
              </div>
            </div>

            <Link href="/apply-now" className="block mt-4">
              <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg">
                Get Admission Info
              </Button>
            </Link>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}
