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
                  Expert guidance for data-driven, cutting-edge SaaS analytics
                  platforms tailored for businesses of all sizes.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Button size="lg" render={<Link href="/#contact" />}>
                    Contact Us
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/10"
                    render={<Link href="/#services" />}
                  >
                    View Services
                  </Button>
                </div>
              </div>

              {/* Right: Hero Image */}
              <div className="ring-border/50 relative aspect-video overflow-hidden rounded-2xl shadow-2xl ring-1">
                <Image
                  src="/hero.png"
                  alt="Goodwill Advisory Group team meeting"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="from-primary/5 absolute inset-0 bg-linear-to-tr to-transparent" />
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
                <p className="mb-1 text-sm">{siteConfig.contact.phone}</p>
                <p className="text-muted-foreground mx-auto max-w-xs text-sm">
                  {siteConfig.contact.address}
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
