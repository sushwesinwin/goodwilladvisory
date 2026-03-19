"use client"

import Link from "next/link"
import Image from "next/image"
import { Container } from "./container"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/config/site"
import { useTranslations, useLocale } from "next-intl"
import { Facebook, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

export function Footer() {
  const locale = useLocale()
  const currentYear = new Date().getFullYear()
  const tCta = useTranslations("cta")
  const tFooter = useTranslations("footer")

  const handleNavClick = (hash: string) => {
    window.location.hash = hash
    const element = document.getElementById(hash)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer
      id="contact"
      className="scroll-mt-20 border-t"
      style={{ backgroundColor: "#363636" }}
    >
      <Container>
        <div className="py-6 md:py-10 lg:py-12">
          <div className="space-y-6 md:space-y-8 lg:space-y-12">
            {/* Top Contact Section */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4 text-center md:space-y-6 lg:text-left">
                <h2
                  className={cn(
                    "font-light tracking-tight text-white",
                    locale === "mm"
                      ? "text-xl leading-loose sm:text-2xl md:text-3xl lg:text-4xl"
                      : "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                  )}
                >
                  {tCta("title")}
                </h2>
                <p
                  className={cn(
                    "mx-auto max-w-md text-gray-400 lg:mx-0",
                    locale === "mm"
                      ? "text-[13px] leading-loose"
                      : "text-sm md:text-base lg:text-lg"
                  )}
                >
                  {tCta("description")}
                </p>
                <div className="flex justify-center gap-3 pt-2 md:gap-4 lg:justify-start">
                  <a
                    href={siteConfig.links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-white/10 md:h-10 md:w-10"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-4 w-4 md:h-5 md:w-5" />
                  </a>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-white/10 md:h-10 md:w-10"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
                  </a>
                  <a
                    href={siteConfig.links.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-white/10 md:h-10 md:w-10"
                    aria-label="TikTok"
                  >
                    <svg
                      className="h-4 w-4 md:h-5 md:w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl ring-1 ring-white/10 md:rounded-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.6766649057145!2d96.11690067641663!3d21.985369254234666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cb6de2e192549b%3A0xe359ca49e40052a5!2sGoodwill%20Advisory%20Group!5e0!3m2!1sen!2smm!4v1773762524877!5m2!1sen!2smm"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[200px] md:h-[250px] lg:h-[300px]"
                />
              </div>
            </div>

            {/* Bottom Links Grid */}
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-12">
              {/* Column 1: Info */}
              <div className="space-y-4 text-center md:space-y-6 lg:text-left">
                <Link
                  href="/"
                  className="inline-block cursor-pointer transition-opacity hover:opacity-80"
                >
                  <Image
                    src="/logo1.png"
                    alt="Goodwill Advisory"
                    width={180}
                    height={72}
                    className="h-8 w-auto brightness-0 invert md:h-10"
                  />
                </Link>
                <p
                  className={cn(
                    "leading-relaxed text-gray-400",
                    locale === "mm"
                      ? "text-[13px] leading-loose"
                      : "text-sm md:text-base"
                  )}
                >
                  {tFooter("tagline")}
                </p>
              </div>

              {/* Column 2: Quick Links */}
              <div className="space-y-4 md:space-y-6">
                <h4
                  className={cn(
                    "text-left font-bold tracking-wider text-white uppercase",
                    locale === "mm"
                      ? "text-[11px] md:text-[13px]"
                      : "text-sm md:text-base"
                  )}
                >
                  {tFooter("quickLinks")}
                </h4>
                <ul className="flex flex-col items-start space-y-3 md:space-y-4">
                  <li>
                    <button
                      onClick={() => handleNavClick("about")}
                      className="group hover:text-primary flex cursor-pointer items-center gap-2 text-gray-400 transition-colors"
                    >
                      <span className="opacity-0 transition-opacity group-hover:opacity-100">
                        ▸
                      </span>
                      <span
                        className={cn(
                          locale === "mm"
                            ? "text-[11px] leading-loose md:text-[12px]"
                            : "text-sm md:text-base"
                        )}
                      >
                        {tFooter("aboutUs")}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick("services")}
                      className="group hover:text-primary flex cursor-pointer items-center gap-2 text-gray-400 transition-colors"
                    >
                      <span className="opacity-0 transition-opacity group-hover:opacity-100">
                        ▸
                      </span>
                      <span
                        className={cn(
                          locale === "mm"
                            ? "text-[11px] leading-loose md:text-[12px]"
                            : "text-sm md:text-base"
                        )}
                      >
                        {tFooter("services")}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick("contact")}
                      className="group hover:text-primary flex cursor-pointer items-center gap-2 text-gray-400 transition-colors"
                    >
                      <span className="opacity-0 transition-opacity group-hover:opacity-100">
                        ▸
                      </span>
                      <span
                        className={cn(
                          locale === "mm"
                            ? "text-[11px] leading-loose md:text-[12px]"
                            : "text-sm md:text-base"
                        )}
                      >
                        {tFooter("contact")}
                      </span>
                    </button>
                  </li>
                </ul>
              </div>

              {/* Column 3: Services */}
              <div className="space-y-4 md:space-y-6">
                <h4
                  className={cn(
                    "text-left font-bold tracking-wider text-white uppercase",
                    locale === "mm"
                      ? "text-[11px] md:text-[13px]"
                      : "text-sm md:text-base"
                  )}
                >
                  {tFooter("ourServices")}
                </h4>
                <ul className="flex flex-col items-start space-y-3 md:space-y-4">
                  <li>
                    <button
                      onClick={() => handleNavClick("what-we-do-hr")}
                      className="group hover:text-primary flex cursor-pointer items-center gap-2 text-gray-400 transition-colors"
                    >
                      <span className="opacity-0 transition-opacity group-hover:opacity-100">
                        ▸
                      </span>
                      <span
                        className={cn(
                          locale === "mm"
                            ? "text-[11px] leading-loose md:text-[12px]"
                            : "text-sm md:text-base"
                        )}
                      >
                        {tFooter("peopleSolutions")}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick("what-we-do-finance")}
                      className="group hover:text-primary flex cursor-pointer items-center gap-2 text-gray-400 transition-colors"
                    >
                      <span className="opacity-0 transition-opacity group-hover:opacity-100">
                        ▸
                      </span>
                      <span
                        className={cn(
                          locale === "mm"
                            ? "text-[11px] leading-loose md:text-[12px]"
                            : "text-sm md:text-base"
                        )}
                      >
                        {tFooter("financeAdvisory")}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick("what-we-do-recruitment")}
                      className="group hover:text-primary flex cursor-pointer items-center gap-2 text-gray-400 transition-colors"
                    >
                      <span className="opacity-0 transition-opacity group-hover:opacity-100">
                        ▸
                      </span>
                      <span
                        className={cn(
                          locale === "mm"
                            ? "text-[11px] leading-loose md:text-[12px]"
                            : "text-sm md:text-base"
                        )}
                      >
                        {tFooter("careerSolutions")}
                      </span>
                    </button>
                  </li>
                </ul>
              </div>

              {/* Column 4: Contact */}
              <div className="space-y-4 md:space-y-6">
                <h4
                  className={cn(
                    "text-left font-bold tracking-wider text-white uppercase",
                    locale === "mm"
                      ? "text-[11px] md:text-[13px]"
                      : "text-sm md:text-base"
                  )}
                >
                  {tFooter("getInTouch")}
                </h4>
                <ul className="flex flex-col items-start space-y-3 md:space-y-4">
                  <li>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="group hover:text-primary flex cursor-pointer items-center gap-2 text-gray-400 transition-colors"
                    >
                      <span className="opacity-0 transition-opacity group-hover:opacity-100">
                        ▸
                      </span>
                      <span
                        className={cn(
                          locale === "mm"
                            ? "text-[11px] md:text-[12px]"
                            : "text-sm md:text-base"
                        )}
                      >
                        {siteConfig.contact.email}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="group hover:text-primary flex cursor-pointer items-center gap-2 text-gray-400 transition-colors"
                    >
                      <span className="opacity-0 transition-opacity group-hover:opacity-100">
                        ▸
                      </span>
                      <span
                        className={cn(
                          locale === "mm"
                            ? "text-[11px] md:text-[12px]"
                            : "text-sm md:text-base"
                        )}
                      >
                        {siteConfig.contact.phone}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.contact.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group hover:text-primary flex cursor-pointer items-start gap-2 text-left text-gray-400 transition-colors"
                    >
                      <span className="opacity-0 transition-opacity group-hover:opacity-100">
                        ▸
                      </span>
                      <span
                        className={cn(
                          locale === "mm"
                            ? "text-[11px] leading-loose md:text-[12px]"
                            : "text-sm md:text-base"
                        )}
                      >
                        {tFooter("address")}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <Separator className="bg-white/10" />
              <div className="flex items-center justify-center py-4">
                <p className="text-center text-xs text-gray-500">
                  © {currentYear} {siteConfig.name}. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
