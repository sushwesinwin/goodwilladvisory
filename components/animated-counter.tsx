"use client"

import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  precision?: number
}

export function AnimatedCounter({
  value,
  precision = 1,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  })

  // Use a smaller margin to ensure it triggers early enough on mobile
  // and works consistently across screen sizes.
  const isInView = useInView(ref, { once: true, margin: "-10px 0px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(precision)
      }
    })

    // Set initial value
    if (ref.current) {
      ref.current.textContent = motionValue.get().toFixed(precision)
    }

    return () => unsubscribe()
  }, [springValue, precision, motionValue])

  return <span ref={ref} />
}
