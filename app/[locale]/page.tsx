"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { Link } from "@/lib/navigation"
import { siteConfig } from "@/config/site"
import { ArrowRight, Facebook, Linkedin } from "lucide-react"
import Image from "next/image"
import { ClientCarousel } from "@/components/layout/client-carousel"
import { HeroSlider } from "@/components/layout/hero-slider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollDown } from "@/components/scroll-down"
import { WhatWeDoTabs } from "@/components/what-we-do-tabs"
import { useTranslations } from "next-intl"

export default function HomePage() {
  const tHero = useTranslations("hero")
  const tStats = useTranslations("stats")
  const tAbout = useTranslations("about")
  const tMission = useTranslations("mission")
  const tClients = useTranslations("clients")
  const tCta = useTranslations("cta")

  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-white py-12 md:py-16">
          <Container>
            <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Left: Hero Text */}
              <div className="flex h-[280px] flex-col justify-between lg:h-[320px]">
                <div className="space-y-8">
                  <p className="text-primary text-sm font-bold tracking-wider uppercase">
                    {tHero("tagline")}
                  </p>
                  <div className="space-y-3">
                    <h1 className="text-4xl font-light tracking-tight text-balance sm:text-5xl lg:text-6xl">
                      {tHero("title")}
                      <span className="text-primary font-extralight">
                        {tHero("titleHighlight")}
                      </span>
                    </h1>
                    <p className="text-muted-foreground max-w-xl text-base leading-relaxed font-normal">
                      {tHero("subtitle")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <Button
                    size="lg"
                    render={<Link href="/#services" />}
                    className="group gap-3 rounded-full py-6 pr-2 pl-6 shadow-lg transition-all hover:gap-4 hover:shadow-xl"
                  >
                    <span className="text-sm font-bold tracking-wide">
                      {tHero("cta")}
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md transition-all group-hover:translate-x-1 group-hover:shadow-lg">
                      <ArrowRight className="text-primary h-3.5 w-3.5" />
                    </span>
                  </Button>

                  {/* Social Icons */}
                  <div className="flex items-center gap-4">
                    <a
                      href={siteConfig.links.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href={siteConfig.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={siteConfig.links.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="TikTok"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Slider */}
              <div className="relative h-[280px] w-full lg:h-[320px]">
                <div className="ring-border/50 relative h-full w-full overflow-hidden rounded-lg shadow-2xl ring-1">
                  <HeroSlider />
                </div>
              </div>
            </div>
          </Container>

          {/* Stats Section */}
          <div className="mt-12 py-6 md:mt-16 md:py-8">
            <Container>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 lg:grid-cols-8">
                <div className="lg:col-span-2">
                  <div className="text-foreground mb-2 text-4xl font-normal lg:text-5xl">
                    {tStats("satisfaction.value")}
                  </div>
                  <p className="text-primary text-sm font-normal md:text-base">
                    {tStats("satisfaction.label")}
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <div className="text-foreground mb-2 text-4xl font-normal lg:text-5xl">
                    {tStats("experience.value")}
                  </div>
                  <p className="text-primary text-sm font-normal md:text-base">
                    {tStats("experience.label")}
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <div className="text-foreground mb-2 text-4xl font-normal lg:text-5xl">
                    {tStats("businesses.value")}
                  </div>
                  <p className="text-primary text-sm font-normal md:text-base">
                    {tStats("businesses.label")}
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <div className="text-foreground mb-2 text-4xl font-normal lg:text-5xl">
                    {tStats("placements.value")}
                  </div>
                  <p className="text-primary text-sm font-normal md:text-base">
                    {tStats("placements.label")}
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <div className="flex items-center justify-center gap-1 text-sm">
                <span className="text-primary">★★★★★</span>
                <span className="text-muted-foreground ml-2">
                  {tMission("rating")}
                </span>
              </div>
              <h2 className="text-4xl font-light tracking-tight text-balance sm:text-5xl lg:text-6xl">
                {tMission("statement")}
                <span className="text-muted-foreground">
                  {tMission("statementHighlight")}
                </span>
              </h2>
            </div>
          </Container>
        </section>

        {/* About Us Section */}
        <section
          id="about"
          className="relative overflow-hidden bg-gray-50 pt-8 pb-12 md:pt-10 md:pb-16"
        >
          {/* Green Accent Background */}
          <div className="bg-primary/5 absolute top-1/4 right-0 h-96 w-1/3 rounded-l-full blur-3xl" />

          <Container className="relative">
            <div className="mx-auto max-w-6xl">
              {/* Header: Two-Column Layout */}
              <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:gap-16">
                {/* Left: Heading */}
                <div className="lg:col-span-1">
                  <div className="border-primary mb-4 w-16 border-t-4" />
                  <h2 className="text-4xl font-light tracking-tight text-balance sm:text-5xl lg:text-6xl">
                    {tAbout("title")}
                  </h2>
                </div>

                {/* Right: Intro */}
                <div className="lg:col-span-1">
                  <p className="text-muted-foreground text-sm leading-relaxed font-normal">
                    We provide{" "}
                    <span className="text-foreground font-bold">
                      strategic HR, financial consulting, and recruitment
                      services
                    </span>{" "}
                    to help small and medium-sized enterprises (SMEs) grow and
                    succeed.
                  </p>
                </div>
              </div>

              {/* History & Image Section */}
              <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-16">
                {/* Left: History */}
                <div className="space-y-4 lg:col-span-1">
                  <p className="text-muted-foreground text-base leading-relaxed font-normal">
                    {tAbout("history.paragraph1")}
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed font-normal">
                    {tAbout("history.paragraph2")}
                  </p>
                </div>

                {/* Right: Team Photo */}
                <div className="lg:col-span-1">
                  <div className="group relative">
                    <div className="bg-primary/20 absolute inset-0 rounded blur-xl transition-all duration-300 group-hover:blur-2xl" />
                    <div className="ring-border/50 relative aspect-video overflow-hidden rounded shadow-2xl ring-1">
                      <Image
                        src="/aboutus.png"
                        alt="Goodwill Advisory Group team"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-6 left-6 rounded bg-white px-6 py-3 shadow-lg">
                        <p className="text-foreground text-base font-bold md:text-lg">
                          11 years of experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                {/* Left Column: Slogan Quote */}
                <div className="flex items-start justify-center pt-20 lg:col-span-1">
                  {/* Slogan Quote */}
                  <div className="relative flex items-center justify-center">
                    <div className="relative">
                      <Image
                        src="/quote.svg"
                        alt=""
                        width={48}
                        height={48}
                        className="text-primary/25 absolute -top-4 -left-6 h-10 w-10 opacity-50 md:-top-6 md:-left-8 md:h-12 md:w-12"
                      />
                      <blockquote className="px-4 md:px-6">
                        <p className="text-primary text-center font-serif text-3xl leading-tight italic md:text-4xl lg:text-5xl">
                          {tAbout("slogan.line1")} <br />{" "}
                          {tAbout("slogan.line2")}
                        </p>
                      </blockquote>
                      <Image
                        src="/quote.svg"
                        alt=""
                        width={48}
                        height={48}
                        className="text-primary/25 absolute -right-6 -bottom-4 h-10 w-10 rotate-180 opacity-50 md:-right-8 md:-bottom-6 md:h-12 md:w-12"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column: Approach */}
                <div className="space-y-6 lg:col-span-1">
                  <h3 className="text-4xl font-light tracking-tight text-balance sm:text-5xl lg:text-6xl">
                    {tAbout("approach.title")}
                  </h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed font-normal">
                      {tAbout("approach.paragraph1")}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed font-normal">
                      {tAbout("approach.paragraph2")}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed font-normal">
                      {tAbout("closing")}
                    </p>
                  </div>
                  <div>
                    <Button
                      size="lg"
                      render={<Link href="/#contact" />}
                      className="group gap-3 rounded-full py-6 pr-2 pl-6 shadow-lg transition-all hover:gap-4 hover:shadow-xl"
                    >
                      <span className="text-sm font-bold tracking-wide">
                        GET CONSULTATION
                      </span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md transition-all group-hover:translate-x-1 group-hover:shadow-lg">
                        <ArrowRight className="text-primary h-3.5 w-3.5" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* What We Do Section */}
        <section className="py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-center">
                <div className="border-primary mx-auto mb-8 w-16 border-t-4" />
                <h2 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
                  What We Do
                </h2>
              </div>
              <WhatWeDoTabs />
            </div>
          </Container>
        </section>

        {/* Founders Section */}
        <section className="bg-gray-50 py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-center">
                <div className="border-primary mx-auto mb-8 w-16 border-t-4" />
                <h2 className="mb-4 text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
                  Meet Our Founders
                </h2>
                <p className="text-muted-foreground text-base">
                  The visionary leaders behind Goodwill Advisory Group
                </p>
              </div>
              <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
                <div className="text-center">
                  <div className="ring-border/50 relative mx-auto mb-6 aspect-square max-w-xs overflow-hidden rounded-lg shadow-xl ring-1">
                    <Image
                      src="/D.png"
                      alt="Nay Nay Aung Thu"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mb-2 text-2xl font-semibold">
                    Mrs. Nay Nay Aung Thu
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Director and Founder
                  </p>
                </div>
                <div className="text-center">
                  <div className="ring-border/50 relative mx-auto mb-6 aspect-square max-w-xs overflow-hidden rounded-lg shadow-xl ring-1">
                    <Image
                      src="/MD.png"
                      alt="May Phyo THU"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mb-2 text-2xl font-semibold">
                    Mrs. May Phyo THU
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Managing Director & Founder
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Client Carousel Section */}
        <section className="bg-white py-12 md:py-16">
          <Container>
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-2xl sm:text-3xl">{tClients("title")}</h2>
              <p className="text-muted-foreground">{tClients("subtitle")}</p>
            </div>
            <ClientCarousel />
          </Container>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-16 md:py-20">
          <Container>
            <div className="bg-primary/5 rounded-2xl p-8 text-center md:p-12">
              <h2 className="mb-4 text-3xl">{tCta("title")}</h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-2xl">
                {tCta("description")}
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                <Button size="lg" render={<Link href="/#contact" />}>
                  {tCta("contactUs")}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  render={<Link href="/#services" />}
                >
                  {tCta("learnMore")}
                </Button>
              </div>
              <div className="border-border/50 mt-8 border-t pt-8">
                <p className="text-muted-foreground mb-2 text-sm font-medium">
                  {tCta("contactInfo")}
                </p>
                <p className="mb-1 text-sm">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>
                <p className="mb-1 text-sm">
                  <a
                    href={`tel:${siteConfig.contact.phone.split(" ")[0]}`}
                    className="hover:text-primary transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </p>
                <p className="text-muted-foreground mx-auto max-w-xs text-sm">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      siteConfig.contact.address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {siteConfig.contact.address}
                  </a>
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      <ScrollDown />
    </>
  )
}
