"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { Card } from "@/components/ui/card"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonialsData = [
  {
    name: "Ma Myat Bhone",
    position: "The NAY KYAR Brand Marketing Agency",
  },
  {
    name: "Ko Kyi Soe",
    position: "iBaby",
  },
  {
    name: "Ko Aung Ko Ko Moe",
    position: "BawGaLa Gp",
  },
  {
    name: "Nang Thandar",
    position: "Job Seeker",
  },
  {
    name: "Yang Guang Ming",
    position: "Job Seeker",
  },
]

import { motion } from "framer-motion"

export function TestimonialsCarousel() {
  const t = useTranslations("testimonials")
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

  const maxIndex = Math.max(0, testimonialsData.length - itemsPerPage)

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
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full flex-shrink-0 px-3 md:w-1/2 lg:w-1/3"
            >
              <Card className="flex h-full flex-col space-y-3 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                <Quote className="text-primary/80 h-8 w-8" />
                <p className="text-muted-foreground flex-1 text-[13px] leading-loose">
                  {t(`items.${index as 0 | 1 | 2 | 3 | 4}`)}
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
            </motion.div>
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
