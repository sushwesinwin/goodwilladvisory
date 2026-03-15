import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
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

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 lg:py-24">
          <Container>
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Left: Hero Content */}
              <div className="space-y-6">
                <h1 className="text-4xl tracking-tight text-balance sm:text-5xl lg:text-6xl">
                  Build & growth with{" "}
                  <span className="text-primary">strategic advisory</span>
                </h1>
                <p className="text-muted-foreground max-w-xl text-lg sm:text-xl">
                  We help businesses grow through expert HR consulting,
                  financial advisory, and recruitment solutions.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Button size="lg" render={<Link href="/#services" />}>
                    EXPLORE MORE
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
        <section className="bg-muted/30 py-12 md:py-16">
          <Container>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-primary mb-2 text-4xl lg:text-5xl">
                  95%
                </div>
                <p className="text-muted-foreground text-sm">
                  Customer satisfaction rate, reflecting our dedication
                </p>
              </div>
              <div className="text-center">
                <div className="text-primary mb-2 text-4xl lg:text-5xl">
                  10+
                </div>
                <p className="text-muted-foreground text-sm">
                  Innovation and insight to user's business operation
                </p>
              </div>
              <div className="text-center">
                <div className="text-primary mb-2 text-4xl lg:text-5xl">
                  50+
                </div>
                <p className="text-muted-foreground text-sm">
                  Platform leveraging secure and efficient financial
                </p>
              </div>
              <div className="text-center">
                <div className="text-primary mb-2 text-4xl lg:text-5xl">
                  100+
                </div>
                <p className="text-muted-foreground text-sm">
                  Users worldwide, providing them with financial solutions
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Client Carousel Section */}
        <section className="py-12 md:py-16">
          <Container>
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-2xl sm:text-3xl">
                Trusted by Leading Organizations
              </h2>
              <p className="text-muted-foreground">
                Partnering with industry leaders across various sectors
              </p>
            </div>
            <ClientCarousel />
          </Container>
        </section>

        {/* About Us Section */}
        <section id="about" className="relative overflow-hidden py-20 md:py-28">
          {/* Background Decoration */}
          <div className="from-muted/40 via-background to-muted/20 absolute inset-0 bg-linear-to-b" />
          <Container className="relative">
            <div className="mx-auto max-w-6xl">
              {/* Header */}

              <h2 className="mb-5 text-4xl tracking-tight text-balance sm:text-5xl lg:text-6xl">
                About Us
              </h2>
              <p className="text-muted-foreground w-full text-lg sm:text-xl">
                We provide strategic HR, financial consulting, and recruitment
                services to help small and medium-sized enterprises (SMEs) grow
                and succeed.
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
                        Goodwill for <br /> Good Value
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
                  Goodwill Advisory Group is founded in 2015 by a group of young
                  professionals with international exposure to provide
                  professional Human Resources Consulting, Accounting and
                  Financial Services to organizations of all sizes.
                </p>

                <p className="text-foreground/90">
                  Goodwill Advisory has been providing vital services to
                  progressive business owners to create successful strategies
                  for growth and efficiency in the organizations. Our
                  experienced team of professionals has expertise in a broad
                  range of specialties in Asia.
                </p>
              </div>

              {/* Our Approach Card */}
              <div className="from-background via-background to-primary/5 border-border/50 mb-12 rounded-2xl border bg-linear-to-br p-8 shadow-lg md:p-12">
                <div className="mb-6 flex items-center gap-3">
                  <div className="bg-primary h-10 w-1 rounded-full" />
                  <h3 className="text-2xl font-bold md:text-3xl">
                    Our Approach
                  </h3>
                </div>

                <div className="text-foreground/90 grid gap-8 text-base leading-relaxed md:grid-cols-2 md:text-lg">
                  <p>
                    Goodwill Advisory Services is dedicated to not only hiring
                    exceptional people but also to thinking outside the box and
                    reevaluating the status quo to develop truly unique
                    solutions.
                  </p>

                  <p>
                    We customize our services to your specific needs and stage
                    of development. We are very analytical, data-oriented and
                    business-minded team that provide frequent feedback and
                    design and develop programs with you, not for you.
                  </p>
                </div>
              </div>

              {/* Closing Statement */}
              <div className="relative">
                <div className="bg-primary/5 absolute inset-0 rounded-2xl blur-xl" />
                <div className="from-primary/10 via-primary/5 to-primary/10 relative rounded-2xl bg-linear-to-r p-8 text-center md:p-12">
                  <p className="text-foreground/90 mx-auto max-w-4xl text-lg leading-relaxed italic md:text-xl">
                    This ensures the end product is exactly what you need and
                    will take your business to the next level. We truly care
                    about our clients' business growth as well as our own. We
                    serve as your strategic partner, providing you with the
                    details you need to make informed, effective decisions that
                    will benefit your business now and into the future.
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
                  4.9/5 reviews
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl">
                We are passionate about empowering individuals and{" "}
                <span className="text-muted-foreground">
                  businesses to take control of their finances and achieve their
                  financial goals.
                </span>
              </h2>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section id="services" className="bg-muted/30 py-16 md:py-20">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl">
                Empowering and strengthening your business success
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="space-y-4 p-6">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Briefcase className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl">Strategic Planning</h3>
                <p className="text-muted-foreground">
                  We deliver an intuitive and user-friendly interface design
                  that provides effortless interaction. Our interface makes it
                  easy to navigate and use our platform.
                </p>
              </Card>

              <Card className="space-y-4 p-6">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Users className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl">Team Development</h3>
                <p className="text-muted-foreground">
                  Build high-performing teams with tailored development programs
                  and leadership training designed to drive organizational
                  excellence.
                </p>
              </Card>

              <Card className="space-y-4 p-6">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <TrendingUp className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl">Growth Strategy</h3>
                <p className="text-muted-foreground">
                  Accelerate your business growth with data-driven strategies
                  and market insights tailored to your industry and goals.
                </p>
              </Card>

              <Card className="space-y-4 p-6">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Target className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl">Business Consulting</h3>
                <p className="text-muted-foreground">
                  Expert consulting services to optimize operations, improve
                  efficiency, and achieve sustainable competitive advantage.
                </p>
              </Card>

              <Card className="space-y-4 p-6">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <BarChart3 className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl">Financial Advisory</h3>
                <p className="text-muted-foreground">
                  Comprehensive financial planning and advisory services to
                  secure your business's financial future and maximize returns.
                </p>
              </Card>

              <Card className="space-y-4 p-6">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Shield className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl">Risk Management</h3>
                <p className="text-muted-foreground">
                  Identify, assess, and mitigate business risks with our
                  comprehensive risk management strategies and solutions.
                </p>
              </Card>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-16 md:py-20">
          <Container>
            <div className="bg-primary/5 rounded-2xl p-8 text-center md:p-12">
              <h2 className="mb-4 text-3xl">
                Ready to transform your business?
              </h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-2xl">
                Get in touch with our team to discuss how we can help you
                achieve your strategic goals and drive sustainable growth.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                <Button size="lg" render={<Link href="/#contact" />}>
                  Contact Us
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  render={<Link href="/#services" />}
                >
                  Learn More
                </Button>
              </div>
              <div className="border-border/50 mt-8 border-t pt-8">
                <p className="text-muted-foreground mb-2 text-sm font-medium">
                  Contact Information
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
