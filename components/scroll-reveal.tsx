"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  className?: string
}

export default function ScrollReveal({ children, direction = "up", delay = 0, className = "" }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0)"

    switch (direction) {
      case "up":
        return "translate3d(0, 50px, 0)"
      case "down":
        return "translate3d(0, -50px, 0)"
      case "left":
        return "translate3d(50px, 0, 0)"
      case "right":
        return "translate3d(-50px, 0, 0)"
      default:
        return "translate3d(0, 50px, 0)"
    }
  }

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      {children}
    </div>
  )
}
