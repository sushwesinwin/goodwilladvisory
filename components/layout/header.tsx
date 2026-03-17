"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Container } from "./container"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const t = useTranslations("nav")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <Container>
        <div className="relative flex h-20 items-center justify-between">
          {/* Left: Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex gap-8">
              <Link
                href="/#about"
                className="hover:text-primary text-sm font-bold text-gray-500 transition-colors"
              >
                {t("about")}
              </Link>
              <Link
                href="/#services"
                className="hover:text-primary text-sm font-bold text-gray-500 transition-colors"
              >
                {t("services")}
              </Link>
              <Link
                href="/#contact"
                className="hover:text-primary text-sm font-bold text-gray-500 transition-colors"
              >
                {t("contact")}
              </Link>
            </nav>
          </div>

          {/* Center: Logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 transition-opacity hover:opacity-80"
          >
            <Image
              src="/logo.png"
              alt="Goodwill Advisory"
              width={240}
              height={96}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Right: Language Switcher */}
          <div className="hidden md:flex">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground/60 hover:text-primary md:hidden"
            aria-label={mobileMenuOpen ? t("closeMenu") : t("openMenu")}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="border-t border-gray-200/50 py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link
                href="/#about"
                className="hover:text-primary text-sm font-bold text-gray-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("about")}
              </Link>
              <Link
                href="/#services"
                className="hover:text-primary text-sm font-bold text-gray-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("services")}
              </Link>
              <Link
                href="/#contact"
                className="hover:text-primary text-sm font-bold text-gray-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("contact")}
              </Link>
              <div className="border-t border-gray-200/50 pt-4">
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        )}
      </Container>
    </header>
  )
}
