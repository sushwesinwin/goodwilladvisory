"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { Container } from "./container"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function Header() {
  const t = useTranslations("nav")
  const tServices = useTranslations("servicesDropdown")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      if (hoverTimeout) clearTimeout(hoverTimeout)
      setServicesOpen(true)
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      const timeout = setTimeout(() => {
        setServicesOpen(false)
      }, 150)
      setHoverTimeout(timeout)
    }
  }
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileServicesRef = useRef<HTMLDivElement>(null)

  // Persist mobile menu state during locale changes
  useEffect(() => {
    const savedState = sessionStorage.getItem("mobileMenuOpen")
    if (savedState === "true") {
      setMobileMenuOpen(true) // eslint-disable-line react-hooks/set-state-in-effect
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem("mobileMenuOpen", mobileMenuOpen.toString())
  }, [mobileMenuOpen])

  const handleServiceClick = (hash: string) => {
    setServicesOpen(false)
    // Update hash and trigger hashchange event
    window.location.hash = hash
    // Scroll to section
    const element = document.getElementById(hash.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleNavClick = (hash: string) => {
    // Update hash and trigger hashchange event
    window.location.hash = hash
    // Scroll to section
    const element = document.getElementById(hash.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleMobileMenuToggle = () => {
    const newState = !mobileMenuOpen
    setMobileMenuOpen(newState)
    if (!newState) {
      // Clear sessionStorage when explicitly closing the menu
      sessionStorage.removeItem("mobileMenuOpen")
    }
  }

  const handleMobileNavClick = (hash: string) => {
    handleNavClick(hash)
    setMobileMenuOpen(false)
    sessionStorage.removeItem("mobileMenuOpen")
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutsideDesktop =
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      const isOutsideMobile =
        mobileServicesRef.current &&
        !mobileServicesRef.current.contains(event.target as Node)

      if (isOutsideDesktop && isOutsideMobile) {
        setServicesOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Close services dropdown when mobile menu closes
  useEffect(() => {
    if (!mobileMenuOpen) {
      setServicesOpen(false) // eslint-disable-line react-hooks/set-state-in-effect
    }
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <Container>
        <div className="relative flex h-20 items-center justify-between">
          {/* Left: Hamburger (mobile) + Desktop Navigation */}
          <div className="flex items-center gap-8">
            {/* Hamburger — mobile only */}
            <button
              onClick={handleMobileMenuToggle}
              className="text-foreground/60 hover:text-primary cursor-pointer md:hidden"
              aria-label={mobileMenuOpen ? t("closeMenu") : t("openMenu")}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Desktop Nav */}
            <nav className="hidden gap-8 md:flex">
              <button
                onClick={() => handleNavClick("about")}
                className="hover:text-primary cursor-pointer text-sm font-bold text-gray-500 transition-colors"
              >
                {t("about")}
              </button>

              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      setServicesOpen(!servicesOpen)
                    }
                  }}
                  className="hover:text-primary flex cursor-pointer items-center gap-1 text-sm font-bold text-gray-500 transition-colors"
                >
                  {t("services")}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      servicesOpen && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-max max-w-[calc(100vw-4rem)] min-w-[300px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg"
                    >
                      <div className="p-2">
                        <button
                          onClick={() => handleServiceClick("what-we-do-hr")}
                          className="hover:bg-primary/10 group block w-full cursor-pointer rounded-lg p-4 text-left transition-all duration-200 hover:pl-6"
                        >
                          <div className="group-hover:text-primary mb-2 text-[13px] font-bold text-gray-900 transition-colors md:text-sm">
                            {tServices("hr.title")}
                          </div>
                          <div className="text-xs font-normal text-gray-500 transition-colors group-hover:text-gray-700">
                            {tServices("hr.description")}
                          </div>
                        </button>
                        <button
                          onClick={() =>
                            handleServiceClick("what-we-do-finance")
                          }
                          className="hover:bg-primary/10 group block w-full cursor-pointer rounded-lg p-4 text-left transition-all duration-200 hover:pl-6"
                        >
                          <div className="group-hover:text-primary mb-2 text-[13px] font-bold text-gray-900 transition-colors md:text-sm">
                            {tServices("finance.title")}
                          </div>
                          <div className="text-xs font-normal text-gray-500 transition-colors group-hover:text-gray-700">
                            {tServices("finance.description")}
                          </div>
                        </button>
                        <button
                          onClick={() =>
                            handleServiceClick("what-we-do-recruitment")
                          }
                          className="hover:bg-primary/10 group block w-full cursor-pointer rounded-lg p-4 text-left transition-all duration-200 hover:pl-6"
                        >
                          <div className="group-hover:text-primary mb-2 text-[13px] font-bold text-gray-900 transition-colors md:text-sm">
                            {tServices("recruitment.title")}
                          </div>
                          <div className="text-xs font-normal text-gray-500 transition-colors group-hover:text-gray-700">
                            {tServices("recruitment.description")}
                          </div>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => handleNavClick("contact")}
                className="hover:text-primary cursor-pointer text-sm font-bold text-gray-500 transition-colors"
              >
                {t("contact")}
              </button>
            </nav>
          </div>

          {/* Center: Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute left-1/2 -translate-x-1/2 cursor-pointer transition-opacity hover:opacity-80"
          >
            <Image
              src="/logo1.png"
              alt="Goodwill Advisory"
              width={250}
              height={100}
              className="h-10 w-auto object-contain md:h-14"
              priority
            />
          </button>

          {/* Right: Language Switcher */}
          <div className="flex items-center">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="border-t border-gray-200 bg-gray-50/50 py-6 md:hidden">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleMobileNavClick("about")}
                className="hover:bg-primary/5 hover:text-primary cursor-pointer rounded-lg px-4 py-3 text-left text-base font-semibold text-gray-700 transition-all"
              >
                {t("about")}
              </button>

              {/* Mobile Services Submenu */}
              <div ref={mobileServicesRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="hover:bg-primary/5 hover:text-primary flex w-full cursor-pointer items-center justify-between rounded-lg px-4 py-3 text-base font-semibold text-gray-700 transition-all"
                >
                  {t("services")}
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform duration-200",
                      servicesOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 ml-2 space-y-1 overflow-hidden rounded-lg bg-white/80 p-2"
                    >
                      <button
                        onClick={() => {
                          handleServiceClick("what-we-do-hr")
                          setMobileMenuOpen(false)
                          sessionStorage.removeItem("mobileMenuOpen")
                        }}
                        className="hover:bg-primary/10 hover:text-primary block w-full cursor-pointer rounded-md px-4 py-2.5 text-left transition-all duration-200 hover:pl-6"
                      >
                        <div className="mb-1.5 text-xs font-bold text-gray-700">
                          {tServices("hr.title")}
                        </div>
                        <div className="text-[11px] font-normal text-gray-500">
                          {tServices("hr.description")}
                        </div>
                      </button>
                      <button
                        onClick={() => {
                          handleServiceClick("what-we-do-finance")
                          setMobileMenuOpen(false)
                          sessionStorage.removeItem("mobileMenuOpen")
                        }}
                        className="hover:bg-primary/10 hover:text-primary block w-full cursor-pointer rounded-md px-4 py-2.5 text-left transition-all duration-200 hover:pl-6"
                      >
                        <div className="mb-1.5 text-xs font-bold text-gray-700">
                          {tServices("finance.title")}
                        </div>
                        <div className="text-[11px] font-normal text-gray-500">
                          {tServices("finance.description")}
                        </div>
                      </button>
                      <button
                        onClick={() => {
                          handleServiceClick("what-we-do-recruitment")
                          setMobileMenuOpen(false)
                          sessionStorage.removeItem("mobileMenuOpen")
                        }}
                        className="hover:bg-primary/10 hover:text-primary block w-full cursor-pointer rounded-md px-4 py-2.5 text-left transition-all duration-200 hover:pl-6"
                      >
                        <div className="mb-1.5 text-xs font-bold text-gray-700">
                          {tServices("recruitment.title")}
                        </div>
                        <div className="text-[11px] font-normal text-gray-500">
                          {tServices("recruitment.description")}
                        </div>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => handleMobileNavClick("contact")}
                className="hover:bg-primary/5 hover:text-primary cursor-pointer rounded-lg px-4 py-3 text-left text-base font-semibold text-gray-700 transition-all"
              >
                {t("contact")}
              </button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  )
}
