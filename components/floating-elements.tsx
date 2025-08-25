"use client"

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Circles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-orange-200 rounded-full opacity-30 animate-float-delay-1"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-green-200 rounded-full opacity-25 animate-float-delay-2"></div>
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-float-delay-3"></div>

      {/* Floating Shapes */}
      <div className="absolute top-60 left-1/4 w-8 h-8 bg-yellow-200 transform rotate-45 opacity-30 animate-float-delay-1"></div>
      <div className="absolute top-80 right-1/3 w-6 h-6 bg-pink-200 transform rotate-12 opacity-25 animate-float-delay-2"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay-1 {
          animation: float 6s ease-in-out infinite 1s;
        }
        
        .animate-float-delay-2 {
          animation: float 6s ease-in-out infinite 2s;
        }
        
        .animate-float-delay-3 {
          animation: float 6s ease-in-out infinite 3s;
        }
      `}</style>
    </div>
  )
}
