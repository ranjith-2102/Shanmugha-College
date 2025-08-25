"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface LoadingScreenProps {
  department?: "engineering" | "pharmacy" | "nursing" | "allied-health" | "home"
}

export default function LoadingScreen({ department = "home" }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressTimer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prevProgress + 2
      })
    }, 50)

    return () => clearInterval(progressTimer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center z-50">
      <div className="text-center text-white">
        {/* Logo */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Image src="/logo.svg" alt="Sri Shanmugha Logo" width={60} height={60} className="w-15 h-15" />
          </div>
        </div>

        {/* Institution Name */}
        <h1 className="text-4xl font-bold mb-2">Sri Shanmugha</h1>
        <p className="text-xl text-blue-200 mb-8">Educational Institutions</p>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-4">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-orange-400 to-orange-600 h-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-blue-200">
            <span>Loading...</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-blue-200 animate-pulse">Preparing your educational journey...</p>
      </div>
    </div>
  )
}
