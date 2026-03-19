"use client"

import { useState, useTransition, useRef, useEffect } from "react"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/lib/navigation"
import { locales, type Locale, localeFlags } from "@/i18n/config"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export function LanguageSwitcher() {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

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

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
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

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={cn(
          "border-border focus:ring-primary/20 flex items-center gap-1.5 rounded-full border bg-white px-2.5 py-1.5 text-sm font-medium shadow-sm transition-all hover:bg-gray-50 focus:ring-2 focus:outline-none",
          isPending && "cursor-wait opacity-50"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-lg leading-none" aria-hidden="true">
          {localeFlags[locale]}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-gray-400 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="animate-in fade-in slide-in-from-top-1 absolute right-0 z-50 mt-2 min-w-full origin-top-right duration-150">
          <div
            className="flex flex-col gap-1 rounded-2xl border border-gray-100 bg-white p-1.5 shadow-2xl ring-1 ring-black/5"
            role="menu"
            aria-orientation="vertical"
          >
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className={cn(
                  "flex h-9 w-full items-center justify-center rounded-xl transition-all duration-150",
                  locale === loc
                    ? "cursor-default opacity-40"
                    : "hover:bg-gray-100"
                )}
                role="menuitem"
                aria-label={loc}
              >
                <span
                  className={cn(
                    "leading-none transition-transform duration-150",
                    locale === loc ? "text-2xl" : "text-xl"
                  )}
                  aria-hidden="true"
                >
                  {localeFlags[loc]}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
