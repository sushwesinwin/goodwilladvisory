"use client"

import Image from "next/image"

const clients = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
  "19.png",
  "20.png",
  "21.png",
  "22.png",
  "23.png",
  "24.png",
  "25.png",
  "26.png",
  "27.png",
  "28.png",
  "29.png",
  "30.png",
  "31.png",
  "32.png",
  "33.png",
  "34.png",
  "35.png",
  "36.png",
  "37.png",
  "38.png",
  "39.png",
  "40.png",
  "41.png",
  "42.png",
  "43.png",
  "44.png",
  "45.jpeg",
]

export function ClientCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-12">
      <div className="animate-infinite-scroll-fast flex gap-8">
        {clients.concat(clients).map((client, index) => (
          <div key={index} className="flex-shrink-0">
            <div className="relative h-20 w-32 rounded-lg bg-white p-2 shadow-sm">
              <Image
                src={`/client logo/${client}`}
                alt={`Client ${index + 1}`}
                fill
                className="object-contain p-2"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
