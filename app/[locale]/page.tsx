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
} from "lucide-react"
import Image from "next/image"
import { ClientCarousel } from "@/components/layout/client-carousel"
import { HeroSlider } from "@/components/layout/hero-slider"
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
        <section className="bg-white py-12 md:py-20 lg:py-24">
          <Container>
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Left: Hero Content */}
              <div className="space-y-6">
                <h1 className="text-4xl tracking-tight text-balance sm:text-5xl lg:text-6xl">
                  {tHero("title")}
                  <span className="text-primary">
                    {tHero("titleHighlight")}
                  </span>
                </h1>
                <p className="text-muted-foreground max-w-xl text-lg sm:text-xl">
                  {tHero("subtitle")}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Button size="lg" render={<Link href="/#services" />}>
                    {tHero("cta")}
                  </Button>
                </div>
              </div>

              {/* Right: Hero Slider */}
              <div className="ring-border/50 relative aspect-video overflow-hidden rounded-2xl shadow-2xl ring-1">
                <HeroSlider />
              </div>
            </div>
          </Container>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-50">
          <Container>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-primary mb-2 text-4xl lg:text-5xl">
                  {tStats("satisfaction.value")}
                </div>
                <p className="text-muted-foreground text-sm">
                  {tStats("satisfaction.label")}
                </p>
              </div>
              <div className="text-center">
                <div className="text-primary mb-2 text-4xl lg:text-5xl">
                  {tStats("experience.value")}
                </div>
                <p className="text-muted-foreground text-sm">
                  {tStats("experience.label")}
                </p>
              </div>
              <div className="text-center">
                <div className="text-primary mb-2 text-4xl lg:text-5xl">
                  {tStats("businesses.value")}
                </div>
                <p className="text-muted-foreground text-sm">
                  {tStats("businesses.label")}
                </p>
              </div>
              <div className="text-center">
                <div className="text-primary mb-2 text-4xl lg:text-5xl">
                  {tStats("placements.value")}
                </div>
                <p className="text-muted-foreground text-sm">
                  {tStats("placements.label")}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* About Us Section */}
        <section
          id="about"
          className="relative overflow-hidden bg-gray-50 py-20 md:py-28"
        >
          <Container className="relative">
            <div className="mx-auto max-w-6xl">
              {/* Header */}

              <h2 className="mb-5 text-4xl tracking-tight text-balance sm:text-5xl lg:text-6xl">
                {tAbout("title")}
              </h2>
              <p className="text-muted-foreground w-full text-lg sm:text-xl">
                {tAbout("intro")}
              </p>

              {/* Main Content Grid */}
              <div className="mb-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Left: Slogan */}
                <div className="relative flex items-center justify-center lg:justify-start">
                  <div className="relative">
                    {/* Opening Quote */}
                    <Image
                      src="/quote.svg"
                      alt=""
                      width={48}
                      height={48}
                      className="text-primary/25 absolute -top-4 -left-6 h-10 w-10 opacity-50 md:-top-6 md:-left-8 md:h-12 md:w-12"
                    />

                    <blockquote className="px-4 md:px-6">
                      <p className="text-primary text-center font-serif text-3xl leading-tight italic md:text-4xl lg:text-5xl">
                        {tAbout("slogan.line1")} <br /> {tAbout("slogan.line2")}
                      </p>
                    </blockquote>

                    {/* Closing Quote */}
                    <Image
                      src="/quote.svg"
                      alt=""
                      width={48}
                      height={48}
                      className="text-primary/25 absolute -right-6 -bottom-4 h-10 w-10 rotate-180 opacity-50 md:-right-8 md:-bottom-6 md:h-12 md:w-12"
                    />
                  </div>
                </div>

                {/* Right: Photo */}
                <div className="group relative">
                  <div className="bg-primary/20 absolute inset-0 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
                  <div className="ring-border/50 relative aspect-video overflow-hidden rounded-2xl shadow-2xl ring-1">
                    <Image
                      src="/images/aboutus.png"
                      alt="Goodwill Advisory Group team"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mb-16 space-y-4 text-base leading-relaxed md:text-lg">
                <p className="text-foreground/90">
                  {tAbout("history.paragraph1")}
                </p>

                <p className="text-foreground/90">
                  {tAbout("history.paragraph2")}
                </p>
              </div>

              {/* Our Approach Card */}
              <div className="from-background via-background to-primary/5 border-border/50 mb-12 rounded-2xl border bg-linear-to-br p-8 shadow-lg md:p-12">
                <div className="mb-6 flex items-center gap-3">
                  <div className="bg-primary h-10 w-1 rounded-full" />
                  <h3 className="text-2xl font-bold md:text-3xl">
                    {tAbout("approach.title")}
                  </h3>
                </div>

                <div className="text-foreground/90 grid gap-8 text-base leading-relaxed md:grid-cols-2 md:text-lg">
                  <p>{tAbout("approach.paragraph1")}</p>

                  <p>{tAbout("approach.paragraph2")}</p>
                </div>
              </div>

              {/* Closing Statement */}
              <div className="relative">
                <div className="bg-primary/5 absolute inset-0 rounded-2xl blur-xl" />
                <div className="from-primary/10 via-primary/5 to-primary/10 relative rounded-2xl bg-linear-to-r p-8 text-center md:p-12">
                  <p className="text-foreground/90 mx-auto max-w-4xl text-lg leading-relaxed italic md:text-xl">
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
    </>
  )
}
