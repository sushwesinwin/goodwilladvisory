"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Link } from "@/lib/navigation"
import { siteConfig } from "@/config/site"
import {
  Briefcase,
  Users,
  TrendingUp,
  Target,
  BarChart3,
  Shield,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import { ClientCarousel } from "@/components/layout/client-carousel"
import { HeroSlider } from "@/components/layout/hero-slider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { useTranslations } from "next-intl"

export default function HomePage() {
  const tHero = useTranslations("hero")
  const tStats = useTranslations("stats")
  const tAbout = useTranslations("about")
  const tMission = useTranslations("mission")
  const tServices = useTranslations("services")
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
              <div className="flex h-[350px] flex-col justify-between pt-4 lg:h-[400px]">
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
                  <div>
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
                  </div>
                </div>

                <div></div>
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
          <div className="bg-primary mt-10 py-6 md:mt-12 md:py-8">
            <Container>
              <p className="mb-4 text-center text-[10px] font-normal tracking-wider text-white/80 uppercase md:text-xs">
                Trusted by leading businesses
              </p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                <div className="text-center">
                  <div className="mb-1 text-2xl font-semibold text-white lg:text-3xl">
                    {tStats("satisfaction.value")}
                  </div>
                  <p className="text-[10px] font-normal text-white/70 md:text-xs">
                    {tStats("satisfaction.label")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-1 text-2xl font-semibold text-white lg:text-3xl">
                    {tStats("experience.value")}
                  </div>
                  <p className="text-[10px] font-normal text-white/70 md:text-xs">
                    {tStats("experience.label")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-1 text-2xl font-semibold text-white lg:text-3xl">
                    {tStats("businesses.value")}
                  </div>
                  <p className="text-[10px] font-normal text-white/70 md:text-xs">
                    {tStats("businesses.label")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-1 text-2xl font-semibold text-white lg:text-3xl">
                    {tStats("placements.value")}
                  </div>
                  <p className="text-[10px] font-normal text-white/70 md:text-xs">
                    {tStats("placements.label")}
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </section>

        {/* About Us Section */}
        <section
          id="about"
          className="relative overflow-hidden bg-gray-50 py-20 md:py-28"
        >
          <Container className="relative">
            <div className="mx-auto max-w-6xl">
              {/* Two-Column Layout */}
              <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                {/* Left Column: Content */}
                <div className="space-y-8 lg:col-span-5">
                  <div>
                    <h2 className="mb-5 text-4xl font-light tracking-tight text-balance sm:text-5xl lg:text-6xl">
                      {tAbout("title")}
                    </h2>
                    <p className="text-muted-foreground text-lg font-normal sm:text-xl">
                      {tAbout("intro")}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-foreground/90 text-base leading-relaxed font-normal md:text-lg">
                      {tAbout("history.paragraph1")}
                    </p>
                    <p className="text-foreground/90 text-base leading-relaxed font-normal md:text-lg">
                      {tAbout("history.paragraph2")}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary h-10 w-1 rounded-full" />
                      <h3 className="text-2xl font-bold md:text-3xl">
                        {tAbout("approach.title")}
                      </h3>
                    </div>
                    <p className="text-foreground/90 text-base leading-relaxed font-normal md:text-lg">
                      {tAbout("approach.paragraph1")}
                    </p>
                  </div>
                </div>

                {/* Right Column: Visual + Supporting */}
                <div className="space-y-8 lg:col-span-7">
                  {/* Team Photo */}
                  <div className="group relative">
                    <div className="bg-primary/20 absolute inset-0 rounded-lg blur-xl transition-all duration-300 group-hover:blur-2xl" />
                    <div className="ring-border/50 relative aspect-video overflow-hidden rounded-lg shadow-2xl ring-1">
                      <Image
                        src="/images/aboutus.png"
                        alt="Goodwill Advisory Group team"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Slogan Quote */}
                  <div className="relative flex items-center justify-center lg:justify-start">
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

                  {/* Approach Paragraph 2 */}
                  <p className="text-foreground/90 text-base leading-relaxed font-normal md:text-lg">
                    {tAbout("approach.paragraph2")}
                  </p>
                </div>
              </div>

              {/* Closing Statement - Full Width */}
              <div className="relative mt-12">
                <div className="bg-primary/5 absolute inset-0 rounded-lg blur-xl" />
                <div className="from-primary/10 via-primary/5 to-primary/10 relative rounded-lg bg-linear-to-r p-8 text-center md:p-12">
                  <p className="text-foreground/90 mx-auto max-w-4xl text-lg leading-relaxed font-normal italic md:text-xl">
                    {tAbout("closing")}
                  </p>
                </div>
              </div>
            </div>
          </Container>
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl">
                {tMission("statement")}
                <span className="text-muted-foreground">
                  {tMission("statementHighlight")}
                </span>
              </h2>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section id="services" className="bg-muted/30 py-16 md:py-20">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl">{tServices("title")}</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="space-y-4 p-6">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Briefcase className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl">
                  {tServices("strategicPlanning.title")}
                </h3>
                <p className="text-muted-foreground">
                  {tServices("strategicPlanning.description")}
                </p>
              </Card>

              <Card className="space-y-4 p-6">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Users className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl">
                  {tServices("teamDevelopment.title")}
                </h3>
                <p className="text-muted-foreground">
                  {tServices("teamDevelopment.description")}
                </p>
              </Card>

              <Card className="space-y-4 p-6">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <TrendingUp className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl">{tServices("growthStrategy.title")}</h3>
                <p className="text-muted-foreground">
                  {tServices("growthStrategy.description")}
                </p>
              </Card>

              <Card className="space-y-4 p-6">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Target className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl">
                  {tServices("businessConsulting.title")}
                </h3>
                <p className="text-muted-foreground">
                  {tServices("businessConsulting.description")}
                </p>
              </Card>

              <Card className="space-y-4 p-6">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <BarChart3 className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl">
                  {tServices("financialAdvisory.title")}
                </h3>
                <p className="text-muted-foreground">
                  {tServices("financialAdvisory.description")}
                </p>
              </Card>

              <Card className="space-y-4 p-6">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Shield className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl">{tServices("riskManagement.title")}</h3>
                <p className="text-muted-foreground">
                  {tServices("riskManagement.description")}
                </p>
              </Card>
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
    </>
  )
}
