"use client"

import { useState, useTransition, useEffect, useRef } from "react"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/lib/navigation"
import { locales, localeNames, localeFlags, type Locale } from "@/i18n/config"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function LanguageSwitcher() {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale === locale) {
      setIsOpen(false)
      return
    }

    startTransition(() => {
      router.replace(pathname, { locale: newLocale })
      setIsOpen(false)
    })
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={cn(
          "hover:text-primary flex items-center gap-2 text-sm font-bold text-gray-500 transition-colors",
          isPending && "cursor-wait opacity-50"
        )}
        aria-label="Switch language"
        aria-expanded={isOpen}
      >
        <span>{localeFlags[locale]}</span>
        <span className="hidden sm:inline">{localeNames[locale]}</span>
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 min-w-[120px] rounded-md border border-gray-200 bg-white shadow-lg">
          <div className="py-1">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className="hover:text-primary flex w-full items-center justify-start gap-2 px-4 py-2 text-sm font-bold text-gray-500 transition-colors hover:bg-gray-50"
              >
                <span>{localeFlags[loc]}</span>
                <span>{localeNames[loc]}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
