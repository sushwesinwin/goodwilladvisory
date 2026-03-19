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
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { useTranslations, useLocale } from "next-intl"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/animated-counter"
import { Star } from "lucide-react"

export default function HomePage() {
  const locale = useLocale()
  const tHero = useTranslations("hero")
  const tStats = useTranslations("stats")
  const tAbout = useTranslations("about")
  const tMission = useTranslations("mission")
  const tServices = useTranslations("services")
  const tClients = useTranslations("clients")
  const tFounders = useTranslations("founders")
  const tTestimonials = useTranslations("testimonials")

  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-white py-6 md:py-10 lg:py-12">
          <Container>
            <div className="grid items-start gap-6 md:gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Left: Hero Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex min-h-[240px] flex-col justify-between text-center md:min-h-[280px] md:text-left lg:h-[320px]"
              >
                <div className="space-y-4 md:space-y-6">
                  <div className="space-y-2 md:space-y-3">
                    <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase md:text-sm">
                      {tHero("tagline")}
                    </p>
                    <h1 className="text-3xl font-light tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                      {tHero("title")}{" "}
                      <span className="text-primary font-light">
                        {tHero("titleHighlight")}
                      </span>
                    </h1>
                    <p className="text-muted-foreground mx-auto max-w-xl text-sm leading-relaxed md:mx-0 md:text-base">
                      {tHero("subtitle")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4 sm:flex-row md:items-center">
                  <Button
                    size="lg"
                    render={<Link href="/#services" />}
                    className="group cursor-pointer gap-3 rounded-full py-5 pr-2 pl-6 shadow-lg transition-all hover:gap-4 hover:shadow-xl"
                  >
                    <span className="text-sm font-bold tracking-wide">
                      {tHero("cta")}
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md transition-all group-hover:translate-x-1 group-hover:shadow-lg">
                      <ArrowRight className="text-primary h-3.5 w-3.5" />
                    </span>
                  </Button>

                  {/* Social Icons */}
                  <div className="flex items-center gap-3">
                    <a
                      href={siteConfig.links.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href={siteConfig.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={siteConfig.links.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
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
              </motion.div>

              {/* Right: Slider */}
              <div className="relative h-[240px] w-full md:h-[280px] lg:h-[320px]">
                <div className="ring-border/50 relative h-full w-full overflow-hidden rounded-xl shadow-2xl ring-1 md:rounded-2xl">
                  <HeroSlider />
                </div>
              </div>
            </div>
          </Container>

          {/* Stats Section */}
          <div className="border-border/30 mt-8 border-t pt-6 md:mt-16 md:pt-8 lg:mt-20 lg:pt-10">
            <Container>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 lg:gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="fill-mode-backwards text-center"
                >
                  <div className="text-foreground mb-1 text-3xl font-light md:mb-2 md:text-4xl lg:text-5xl">
                    <AnimatedCounter value={95} precision={0} />%
                  </div>
                  <p className="text-muted-foreground text-xs leading-tight font-medium md:text-sm">
                    {tStats("satisfaction.label")}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="fill-mode-backwards text-center"
                >
                  <div className="text-foreground mb-1 text-3xl font-light md:mb-2 md:text-4xl lg:text-5xl">
                    <AnimatedCounter value={10} precision={0} />+
                  </div>
                  <p className="text-muted-foreground text-xs leading-tight font-medium md:text-sm">
                    {tStats("experience.label")}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="fill-mode-backwards text-center"
                >
                  <div className="text-foreground mb-1 text-3xl font-light md:mb-2 md:text-4xl lg:text-5xl">
                    <AnimatedCounter value={50} precision={0} />+
                  </div>
                  <p className="text-muted-foreground text-xs leading-tight font-medium md:text-sm">
                    {tStats("businesses.label")}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="fill-mode-backwards text-center"
                >
                  <div className="text-foreground mb-1 text-3xl font-light md:mb-2 md:text-4xl lg:text-5xl">
                    <AnimatedCounter value={100} precision={0} />+
                  </div>
                  <p className="text-muted-foreground text-xs leading-tight font-medium md:text-sm">
                    {tStats("placements.label")}
                  </p>
                </motion.div>
              </div>
            </Container>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <Container>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-3xl space-y-6 text-center"
            >
              <div className="flex items-center justify-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <span className="text-foreground ml-2 text-sm font-medium">
                  <AnimatedCounter value={4.9} precision={1} />
                  /5 {tMission("rating").replace("4.9/5 ", "")}
                </span>
              </div>
              <h2
                className={cn(
                  "font-light tracking-tight text-balance",
                  locale === "mm"
                    ? "text-xl leading-loose sm:text-2xl lg:text-3xl"
                    : "text-4xl sm:text-5xl lg:text-6xl"
                )}
              >
                {tMission.rich("statement", {
                  nobreak: (chunks) => (
                    <span className="whitespace-nowrap">{chunks}</span>
                  ),
                })}
                <span className="text-muted-foreground">
                  {tMission("statementHighlight")}
                </span>
              </h2>
            </motion.div>
          </Container>
        </section>

        {/* About Us Section */}
        <section
          id="about"
          className="relative scroll-mt-20 overflow-hidden bg-gray-50 py-16 md:py-20"
        >
          {/* Green Accent Background */}
          <div className="bg-primary/5 absolute top-1/4 right-0 h-96 w-1/3 rounded-l-full blur-3xl" />

          <Container className="relative">
            <div className="mx-auto max-w-6xl">
              {/* Header: Two-Column Layout */}
              <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:gap-16">
                {/* Left: Heading */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-1"
                >
                  <div className="border-primary mb-4 w-16 border-t-4" />
                  <h2
                    className={cn(
                      "font-light tracking-tight text-balance",
                      locale === "mm"
                        ? "text-2xl sm:text-3xl lg:text-4xl"
                        : "text-4xl sm:text-5xl lg:text-6xl"
                    )}
                  >
                    {tAbout("title")}
                  </h2>
                </motion.div>

                {/* Right: Intro */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="lg:col-span-1"
                >
                  <p
                    className={cn(
                      "text-muted-foreground leading-relaxed font-normal",
                      locale === "mm" ? "text-[13px] leading-loose" : "text-sm"
                    )}
                  >
                    {tAbout("intro")}
                  </p>
                </motion.div>
              </div>

              {/* History & Image Section */}
              <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-16">
                {/* Left: History */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4 lg:col-span-1"
                >
                  <p
                    className={cn(
                      "text-muted-foreground font-normal",
                      locale === "mm"
                        ? "text-[13px] leading-loose"
                        : "text-base leading-relaxed"
                    )}
                  >
                    {tAbout("history.paragraph1")}
                  </p>
                  <p
                    className={cn(
                      "text-muted-foreground font-normal",
                      locale === "mm"
                        ? "text-[13px] leading-loose"
                        : "text-base leading-relaxed"
                    )}
                  >
                    {tAbout("history.paragraph2")}
                  </p>
                </motion.div>

                {/* Right: Team Photo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="lg:col-span-1"
                >
                  <div className="group relative">
                    <div className="bg-primary/20 absolute inset-0 rounded blur-xl transition-all duration-300 group-hover:blur-2xl" />
                    <div className="ring-border/50 relative aspect-video overflow-hidden rounded shadow-2xl ring-1">
                      <Image
                        src="/aboutus.png"
                        alt="Goodwill Advisory Group team"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute bottom-6 left-6 rounded-full bg-white px-6 py-2.5 shadow-lg">
                        <p className="text-foreground text-sm font-semibold md:text-base">
                          11 years of experience
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Content Grid */}
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                {/* Left Column: Slogan Quote */}
                <div className="flex items-center justify-center py-12 md:py-16 lg:col-span-1 lg:py-0">
                  {/* Slogan Quote */}
                  <div className="relative flex items-center justify-center">
                    <div className="bg-primary/5 relative rounded-2xl p-8 md:bg-transparent md:p-0">
                      <Image
                        src="/quote.svg"
                        alt=""
                        width={48}
                        height={48}
                        className="text-primary/25 absolute -top-2 -left-2 h-10 w-10 opacity-70 md:-top-6 md:-left-8 md:h-12 md:w-12 md:opacity-50"
                      />
                      <blockquote className="px-6 md:px-6">
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
                        className="text-primary/25 absolute -right-2 -bottom-2 h-10 w-10 rotate-180 opacity-70 md:-right-8 md:-bottom-6 md:h-12 md:w-12 md:opacity-50"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column: Approach */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-1"
                >
                  <h3
                    className={cn(
                      "mb-12 font-light tracking-tight text-balance",
                      locale === "mm"
                        ? "text-2xl sm:text-3xl lg:text-4xl"
                        : "text-4xl sm:text-5xl lg:text-6xl"
                    )}
                  >
                    {tAbout("approach.title")}
                  </h3>
                  <div className="space-y-4">
                    <p
                      className={cn(
                        "text-muted-foreground font-normal",
                        locale === "mm"
                          ? "text-[13px] leading-loose"
                          : "text-base leading-relaxed"
                      )}
                    >
                      {tAbout("approach.paragraph1")}
                    </p>
                    <p
                      className={cn(
                        "text-muted-foreground font-normal",
                        locale === "mm"
                          ? "text-[13px] leading-loose"
                          : "text-base leading-relaxed"
                      )}
                    >
                      {tAbout("approach.paragraph2")}
                    </p>
                    <p
                      className={cn(
                        "text-muted-foreground font-normal",
                        locale === "mm"
                          ? "text-[13px] leading-loose"
                          : "text-base leading-relaxed"
                      )}
                    >
                      {tAbout("closing")}
                    </p>
                  </div>
                  <div className="mt-8">
                    <Button
                      size="lg"
                      render={<Link href="/#contact" />}
                      className="group gap-3 rounded-full py-6 pr-2 pl-6 shadow-lg transition-all hover:gap-4 hover:shadow-xl"
                    >
                      <span
                        className={cn(
                          "font-bold tracking-wide",
                          locale === "mm" ? "text-[13px]" : "text-sm"
                        )}
                      >
                        {tAbout("getConsultation")}
                      </span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md transition-all group-hover:translate-x-1 group-hover:shadow-lg">
                        <ArrowRight className="text-primary h-3.5 w-3.5" />
                      </span>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        {/* What We Do Section */}
        <section
          id="services"
          className="bg-primary/5 scroll-mt-20 py-16 md:py-20"
        >
          <Container>
            <div className="mx-auto max-w-6xl">
              {/* Hidden anchor points for navigation */}
              <div id="what-we-do-hr" className="scroll-mt-20" />
              <div id="what-we-do-finance" className="scroll-mt-20" />
              <div id="what-we-do-recruitment" className="scroll-mt-20" />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12 text-center"
              >
                <div className="border-primary mx-auto mb-8 w-16 border-t-4" />
                <h2
                  className={cn(
                    "font-light tracking-tight text-balance",
                    locale === "mm"
                      ? "text-2xl sm:text-3xl lg:text-4xl"
                      : "text-4xl sm:text-5xl lg:text-6xl"
                  )}
                >
                  {tServices("whatWeDo")}
                </h2>
              </motion.div>
              <WhatWeDoTabs />
            </div>
          </Container>
        </section>

        {/* Founders Section */}
        <section className="bg-gray-50 py-5 md:py-10">
          <Container>
            <div className="mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12 text-center"
              >
                <div className="border-primary mx-auto mb-8 w-16 border-t-4" />
                <h2
                  className={cn(
                    "mb-4 font-light tracking-tight text-balance",
                    locale === "mm"
                      ? "text-2xl sm:text-3xl lg:text-4xl"
                      : "text-4xl sm:text-5xl lg:text-6xl"
                  )}
                >
                  {tFounders("title")}
                </h2>
                <p className="text-muted-foreground text-base">
                  {tFounders("subtitle")}
                </p>
              </motion.div>
              <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center"
                >
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
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-center"
                >
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
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        {/* Testimonials Section */}
        <section className="bg-primary/5 py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12 text-center"
              >
                <div className="border-primary mx-auto mb-8 w-16 border-t-4" />
                <h2
                  className={cn(
                    "mb-4 font-light tracking-tight text-balance",
                    locale === "mm"
                      ? "text-2xl sm:text-3xl lg:text-4xl"
                      : "text-4xl sm:text-5xl lg:text-6xl"
                  )}
                >
                  {tTestimonials("title")}
                </h2>
                <p className="text-muted-foreground text-base">
                  {tTestimonials("subtitle")}
                </p>
              </motion.div>
              <TestimonialsCarousel />
            </div>
          </Container>
        </section>

        {/* Client Carousel Section */}
        <section id="clients-section" className="bg-white py-16 md:py-20">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-center"
            >
              <h2
                className={cn(
                  "mb-2 font-light tracking-tight text-balance",
                  locale === "mm"
                    ? "text-2xl sm:text-3xl lg:text-4xl"
                    : "text-4xl sm:text-5xl lg:text-6xl"
                )}
              >
                {tClients("title")}
              </h2>
              <p
                className={cn(
                  "text-muted-foreground",
                  locale === "mm" ? "text-sm leading-loose" : ""
                )}
              >
                {tClients("subtitle")}
              </p>
            </motion.div>
            <ClientCarousel />
          </Container>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      <ScrollDown />
    </>
  )
}
