"use client"

import { useState, useTransition, useEffect, useRef } from "react"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/lib/navigation"
import { locales, localeNames, localeFlags, type Locale } from "@/i18n/config"
import { ChevronDown, Check } from "lucide-react"
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
          "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-light transition-opacity hover:opacity-60",
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
        <div className="border-border bg-background absolute right-0 mt-2 w-40 rounded-md border shadow-lg">
          <div className="py-1">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className={cn(
                  "hover:bg-muted flex w-full items-center justify-between px-4 py-2 text-sm transition-colors",
                  locale === loc && "bg-muted/50"
                )}
              >
                <span className="flex items-center gap-2">
                  <span>{localeFlags[loc]}</span>
                  <span>{localeNames[loc]}</span>
                </span>
                {locale === loc && <Check className="text-primary h-4 w-4" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
