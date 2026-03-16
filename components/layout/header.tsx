"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Container } from "./container"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Header() {
  const t = useTranslations("nav")

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Left: Logo and Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="transition-opacity hover:opacity-80">
              <Image
                src="/logo.png"
                alt="Goodwill Advisory"
                width={240}
                height={96}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>

            {/* Navigation */}
            <nav className="flex gap-8">
              <Link
                href="/#services"
                className="text-foreground/60 hover:text-primary text-sm font-medium transition-colors"
              >
                {t("services")}
              </Link>
              <Link
                href="/#about"
                className="text-foreground/60 hover:text-primary text-sm font-medium transition-colors"
              >
                {t("about")}
              </Link>
              <Link
                href="/#contact"
                className="text-foreground/60 hover:text-primary text-sm font-medium transition-colors"
              >
                {t("contact")}
              </Link>
            </nav>
          </div>

          {/* Right: Language Switcher */}
          <LanguageSwitcher />
        </div>
      </Container>
    </header>
  )
}
