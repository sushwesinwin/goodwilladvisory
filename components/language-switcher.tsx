"use client"

import { useState, useTransition, useRef, useEffect } from "react"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/lib/navigation"
import { locales, type Locale, localeNames, localeFlags } from "@/i18n/config"
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
          "border-border focus:ring-primary/20 flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 text-sm font-medium shadow-sm transition-all hover:bg-gray-50 focus:ring-2 focus:outline-none",
          isPending && "cursor-wait opacity-50"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg leading-none" aria-hidden="true">
            {localeFlags[locale]}
          </span>
          <span className="tracking-tight text-gray-700 uppercase">
            {localeNames[locale]}
          </span>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-gray-400 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="border-border animate-in fade-in zoom-in absolute right-0 z-50 mt-2 w-32 origin-top-right overflow-hidden rounded-xl border bg-white shadow-xl ring-1 ring-black/5 duration-200 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className={cn(
                  "flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-gray-50",
                  locale === loc
                    ? "bg-primary/5 text-primary font-semibold"
                    : "text-gray-700 hover:text-gray-900"
                )}
                role="menuitem"
              >
                <span className="text-lg leading-none" aria-hidden="true">
                  {localeFlags[loc]}
                </span>
                <span className="uppercase">{localeNames[loc]}</span>
                {locale === loc && (
                  <div className="bg-primary ml-auto h-1.5 w-1.5 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
