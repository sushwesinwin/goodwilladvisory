"use client"

import { useState, useEffect } from "react"
import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function ScrollDown() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollDown}
      className={cn(
        "bg-primary hover:bg-primary/90 fixed right-8 bottom-8 z-50 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:shadow-xl",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-16 opacity-0"
      )}
      aria-label="Scroll down"
    >
      <ArrowDown className="h-5 w-5 text-white" />
    </button>
  )
}
