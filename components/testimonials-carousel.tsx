"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "A highly professional team with a unique approach. Led by two independent and confident female leaders, Goodwill brings both style and expertise to everything they do.",
    name: "Ma Myat Bhone",
    position: "The NAY KYAR Brand Marketing Agency",
  },
  {
    quote:
      "Goodwill provides top-tier professional Financial and HR planning with a client-first approach. I highly recommend them for anyone seeking expert, personalized service.",
    name: "Ko Kyi Soe",
    position: "iBaby",
  },
  {
    quote:
      "I feel at peace and can manage my businesses with ease because they set up a solid system for both of them. I truly appreciate our relationship, as they are always there to consult and discuss every challenge I face, even to this day.",
    name: "Ko Aung Ko Ko Moe",
    position: "BawGaLa Gp",
  },
  {
    quote:
      "Huge thanks to the Goodwill Team! They found me the perfect position so quickly and provided dedicated support—completely free of charge—until I landed the job. Truly appreciate the care!",
    name: "Nang Thandar",
    position: "Job Seeker",
  },
  {
    quote:
      "In a challenging job market, Goodwill helped me land a great role at a top company. I really appreciate their free service for job seekers and the excellent follow-up care. Thank you to the team, and much success to Goodwill Group!",
    name: "Yang Guang Ming",
    position: "Job Seeker",
  },
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2)
      } else {
        setItemsPerPage(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage)

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  return (
    <div className="relative px-4 md:px-0">
      <div className="overflow-hidden py-4">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-3 md:w-1/2 lg:w-1/3"
            >
              <Card className="flex h-full flex-col space-y-4 bg-white p-6 shadow-sm">
                <Quote className="text-primary/80 h-8 w-8" />
                <p className="text-muted-foreground flex-1 text-sm leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="border-border/50 border-t pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        disabled={currentIndex === 0}
        className={cn(
          "bg-primary hover:bg-primary/90 absolute top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition-all",
          "left-4 md:left-0 md:-translate-x-1/2",
          currentIndex === 0 && "cursor-not-allowed opacity-50"
        )}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={handleNext}
        disabled={currentIndex === maxIndex}
        className={cn(
          "bg-primary hover:bg-primary/90 absolute top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition-all",
          "right-4 md:right-0 md:translate-x-1/2",
          currentIndex === maxIndex && "cursor-not-allowed opacity-50"
        )}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
    </div>
  )
}
