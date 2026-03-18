"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const heroImages = ["1.png", "2.png", "3.png", "4.png", "5.png"]

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-full w-full">
      {heroImages.map((image, index) => (
        <motion.div
          key={image}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            scale: index === currentIndex ? 1 : 1.1,
          }}
          transition={{
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: 6, ease: "linear" },
          }}
          className="absolute inset-0"
        >
          <Image
            src={`/hero/${image}`}
            alt={`Hero image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      ))}

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
