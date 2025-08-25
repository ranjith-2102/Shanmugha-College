"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  Pause,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Copy,
  Facebook,
  Twitter,
  Linkedin,
  X,
  Clock,
} from "lucide-react"
import Image from "next/image"

interface Story {
  id: string
  type: "image" | "video"
  src: string
  thumbnail: string
  title: string
  description: string
  author: {
    name: string
    avatar: string
    role: string
  }
  timestamp: string
  category: string
  likes: number
  comments: number
  shares: number
  duration?: number
}

const stories: Story[] = [
  {
    id: "1",
    type: "image",
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=120&h=200&fit=crop",
    title: "Graduation Day 2025",
    description:
      "Celebrating our graduating class with pride and joy. Another milestone achieved in our journey of excellence.",
    author: {
      name: "Dr. Priya Sharma",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
      role: "Dean of Academics",
    },
    timestamp: "2 hours ago",
    category: "Achievement",
    likes: 245,
    comments: 32,
    shares: 18,
  },
  {
    id: "2",
    type: "image",
    src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=120&h=200&fit=crop",
    title: "Campus Innovation Lab",
    description:
      "State-of-the-art innovation laboratory where students bring their ideas to life through cutting-edge technology.",
    author: {
      name: "Prof. Rajesh Kumar",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      role: "Head of Engineering",
    },
    timestamp: "5 hours ago",
    category: "Campus Tour",
    likes: 189,
    comments: 24,
    shares: 15,
    duration: 30,
  },
  {
    id: "3",
    type: "image",
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=120&h=200&fit=crop",
    title: "Nursing Excellence Award",
    description:
      "Our nursing department receives national recognition for outstanding healthcare education and community service.",
    author: {
      name: "Dr. Meera Nair",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=50&h=50&fit=crop&crop=face",
      role: "Head of Nursing",
    },
    timestamp: "1 day ago",
    category: "Recognition",
    likes: 312,
    comments: 45,
    shares: 28,
  },
  {
    id: "4",
    type: "image",
    src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=120&h=200&fit=crop",
    title: "Research Breakthrough",
    description:
      "Students and faculty collaborate on groundbreaking research in allied health sciences, making headlines in medical journals.",
    author: {
      name: "Dr. Arun Patel",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=50&h=50&fit=crop&crop=face",
      role: "Research Director",
    },
    timestamp: "2 days ago",
    category: "Research",
    likes: 156,
    comments: 19,
    shares: 12,
  },
  {
    id: "5",
    type: "image",
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=120&h=200&fit=crop",
    title: "Pharmacy Innovation",
    description:
      "Our pharmacy students develop innovative drug delivery systems, showcasing the future of pharmaceutical sciences.",
    author: {
      name: "Dr. Kavitha Reddy",
      avatar: "https://images.unsplash.com/photo-1594824388853-d0c2d4e5b1b5?w=50&h=50&fit=crop&crop=face",
      role: "Pharmacy Dean",
    },
    timestamp: "3 days ago",
    category: "Innovation",
    likes: 203,
    comments: 31,
    shares: 22,
  },
  {
    id: "6",
    type: "image",
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=120&h=200&fit=crop",
    title: "Sports Excellence",
    description:
      "Our athletes bringing glory to the institution through outstanding achievements in national and international competitions.",
    author: {
      name: "Coach Suresh",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face",
      role: "Sports Director",
    },
    timestamp: "4 days ago",
    category: "Sports",
    likes: 178,
    comments: 26,
    shares: 14,
  },
]

export default function VisualStories() {
  const [currentStory, setCurrentStory] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const [showShareModal, setShowShareModal] = useState(false)
  const [likedStories, setLikedStories] = useState<Set<string>>(new Set())
  const [bookmarkedStories, setBookmarkedStories] = useState<Set<string>>(new Set())
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const progressInterval = useRef<NodeJS.Timeout | null>(null)
  const storyDuration = 5000 // 5 seconds per story
  const minSwipeDistance = 50

  const startProgress = useCallback(() => {
    if (progressInterval.current) clearInterval(progressInterval.current)

    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Move to next story
          setCurrentStory((current) => (current + 1) % stories.length)
          return 0
        }
        return prev + 100 / (storyDuration / 100)
      })
    }, 100)
  }, [])

  const pauseProgress = useCallback(() => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current)
      progressInterval.current = null
    }
  }, [])

  const resetProgress = useCallback(() => {
    setProgress(0)
    pauseProgress()
  }, [pauseProgress])

  useEffect(() => {
    if (isPlaying) {
      startProgress()
    } else {
      pauseProgress()
    }

    return () => pauseProgress()
  }, [isPlaying, currentStory, startProgress, pauseProgress])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          goToPrevious()
          break
        case "ArrowRight":
          goToNext()
          break
        case " ":
          e.preventDefault()
          togglePlayPause()
          break
        case "Escape":
          setShowShareModal(false)
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const goToNext = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length)
    resetProgress()
    setIsPlaying(true)
  }

  const goToPrevious = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length)
    resetProgress()
    setIsPlaying(true)
  }

  const goToStory = (index: number) => {
    setCurrentStory(index)
    resetProgress()
    setIsPlaying(true)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleLike = (storyId: string) => {
    setLikedStories((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(storyId)) {
        newSet.delete(storyId)
      } else {
        newSet.add(storyId)
      }
      return newSet
    })
  }

  const toggleBookmark = (storyId: string) => {
    setBookmarkedStories((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(storyId)) {
        newSet.delete(storyId)
      } else {
        newSet.add(storyId)
      }
      return newSet
    })
  }

  const handleShare = async () => {
    const story = stories[currentStory]
    const shareData = {
      title: story.title,
      text: story.description,
      url: window.location.href,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        setShowShareModal(true)
      }
    } else {
      setShowShareModal(true)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setShowShareModal(false)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }
  }

  const currentStoryData = stories[currentStory]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Visual Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our campus life, achievements, and community through immersive visual stories
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Story Thumbnails - Desktop */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">All Stories</h3>
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  {stories.map((story, index) => (
                    <button
                      key={story.id}
                      onClick={() => goToStory(index)}
                      className={`w-full p-3 rounded-xl border-2 transition-all duration-300 text-left group ${
                        index === currentStory
                          ? "border-blue-500 bg-blue-50 shadow-md"
                          : "border-gray-200 hover:border-gray-300 bg-white hover:shadow-sm"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative w-14 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={story.thumbnail || "/placeholder.svg"}
                            alt={story.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="56px"
                          />
                          {story.duration && (
                            <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 py-0.5 rounded flex items-center">
                              <Clock className="w-2 h-2 mr-1" />
                              {story.duration}s
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate text-sm">{story.title}</p>
                          <p className="text-xs text-gray-500 mb-1">{story.author.name}</p>
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary" className="text-xs">
                              {story.category}
                            </Badge>
                            <span className="text-xs text-gray-400">{story.timestamp}</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Story Display */}
            <div className="lg:col-span-6">
              <Card className="relative overflow-hidden bg-black rounded-2xl shadow-2xl">
                {/* Progress Bars */}
                <div className="absolute top-4 left-4 right-4 z-20 flex space-x-1">
                  {stories.map((_, index) => (
                    <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white transition-all duration-100 ease-linear"
                        style={{
                          width: index < currentStory ? "100%" : index === currentStory ? `${progress}%` : "0%",
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Story Content */}
                <div
                  className="relative w-full bg-gray-900 cursor-pointer"
                  style={{ aspectRatio: "9/16", minHeight: "600px" }}
                  onClick={togglePlayPause}
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                >
                  <Image
                    src={currentStoryData.src || "/placeholder.svg"}
                    alt={currentStoryData.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

                  {/* Navigation Arrows - Desktop */}
                  <div className="hidden md:block">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        goToPrevious()
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10 backdrop-blur-sm"
                      aria-label="Previous story"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        goToNext()
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10 backdrop-blur-sm"
                      aria-label="Next story"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Play/Pause Indicator */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div
                      className={`w-20 h-20 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                        isPlaying ? "opacity-0 scale-75" : "opacity-100 scale-100"
                      }`}
                    >
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                  </div>

                  {/* Story Header */}
                  <div className="absolute top-16 left-4 right-4 z-30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Image
                          src={currentStoryData.author.avatar || "/placeholder.svg"}
                          alt={currentStoryData.author.name}
                          width={44}
                          height={44}
                          className="rounded-full border-2 border-white"
                        />
                        <div>
                          <p className="text-white font-semibold text-sm">{currentStoryData.author.name}</p>
                          <p className="text-white/80 text-xs">{currentStoryData.author.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 text-xs">
                          {currentStoryData.category}
                        </Badge>
                        <span className="text-white/70 text-xs">{currentStoryData.timestamp}</span>
                      </div>
                    </div>
                  </div>

                  {/* Story Footer */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                    <h3 className="text-white font-bold text-xl mb-3">{currentStoryData.title}</h3>
                    <p className="text-white/90 text-sm mb-6 leading-relaxed line-clamp-3">
                      {currentStoryData.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleLike(currentStoryData.id)
                          }}
                          className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors group"
                          aria-label="Like story"
                        >
                          <Heart
                            className={`w-6 h-6 group-hover:scale-110 transition-transform ${
                              likedStories.has(currentStoryData.id) ? "fill-red-500 text-red-500" : ""
                            }`}
                          />
                          <span className="text-sm font-medium">
                            {currentStoryData.likes + (likedStories.has(currentStoryData.id) ? 1 : 0)}
                          </span>
                        </button>

                        <button className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors group">
                          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                          <span className="text-sm font-medium">{currentStoryData.comments}</span>
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleShare()
                          }}
                          className="flex items-center space-x-2 text-white hover:text-green-400 transition-colors group"
                          aria-label="Share story"
                        >
                          <Share2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
                          <span className="text-sm font-medium">{currentStoryData.shares}</span>
                        </button>
                      </div>

                      <div className="flex items-center space-x-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            togglePlayPause()
                          }}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          aria-label={isPlaying ? "Pause" : "Play"}
                        >
                          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleBookmark(currentStoryData.id)
                          }}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          aria-label="Bookmark story"
                        >
                          <Bookmark
                            className={`w-5 h-5 ${
                              bookmarkedStories.has(currentStoryData.id) ? "fill-yellow-400 text-yellow-400" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Mobile Story Navigation */}
              <div className="lg:hidden mt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Stories</h3>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={goToPrevious}>
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={goToNext}>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex space-x-3 overflow-x-auto pb-2">
                  {stories.map((story, index) => (
                    <button
                      key={story.id}
                      onClick={() => goToStory(index)}
                      className={`flex-shrink-0 w-16 h-28 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentStory ? "border-blue-500 shadow-md" : "border-gray-200"
                      }`}
                    >
                      <Image
                        src={story.thumbnail || "/placeholder.svg"}
                        alt={story.title}
                        width={64}
                        height={112}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Story Details - Desktop */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-8">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Story Details</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">{currentStoryData.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{currentStoryData.description}</p>
                    </div>

                    <div className="flex items-center space-x-3 py-3 border-t border-gray-100">
                      <Image
                        src={currentStoryData.author.avatar || "/placeholder.svg"}
                        alt={currentStoryData.author.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{currentStoryData.author.name}</p>
                        <p className="text-xs text-gray-500">{currentStoryData.author.role}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 py-3 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-lg font-bold text-red-500">
                          {currentStoryData.likes + (likedStories.has(currentStoryData.id) ? 1 : 0)}
                        </div>
                        <div className="text-xs text-gray-500">Likes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-500">{currentStoryData.comments}</div>
                        <div className="text-xs text-gray-500">Comments</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-500">{currentStoryData.shares}</div>
                        <div className="text-xs text-gray-500">Shares</div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-100">
                      <Badge className="mb-2">{currentStoryData.category}</Badge>
                      <p className="text-xs text-gray-500">{currentStoryData.timestamp}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p className="mb-2">
            <span className="hidden md:inline">Use arrow keys or click buttons to navigate • </span>
            <span className="md:hidden">Swipe left/right to navigate • </span>
            Tap to play/pause stories
          </p>
          <p>Press space to play/pause • Click share to share stories with others</p>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Share Story</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-6">
              <button className="flex flex-col items-center space-y-2 p-3 rounded-xl hover:bg-blue-50 transition-colors group">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-gray-600 font-medium">Facebook</span>
              </button>

              <button className="flex flex-col items-center space-y-2 p-3 rounded-xl hover:bg-blue-50 transition-colors group">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Twitter className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-gray-600 font-medium">Twitter</span>
              </button>

              <button className="flex flex-col items-center space-y-2 p-3 rounded-xl hover:bg-blue-50 transition-colors group">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-gray-600 font-medium">LinkedIn</span>
              </button>

              <button
                onClick={copyToClipboard}
                className="flex flex-col items-center space-y-2 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Copy className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-gray-600 font-medium">Copy Link</span>
              </button>
            </div>

            <Button onClick={() => setShowShareModal(false)} className="w-full" variant="outline">
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}
