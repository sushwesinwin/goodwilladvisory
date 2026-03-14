import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Temporary content - sections will be built in future parts */}
        <section className="py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <div className="bg-muted mb-8 inline-block rounded-lg px-3 py-1 text-sm">
                Infrastructure Complete
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Welcome to{" "}
                <span className="text-primary">Goodwill Advisory</span>
              </h1>
              <p className="text-muted-foreground mb-8 text-lg sm:text-xl">
                Professional advisory services for strategic business growth and
                transformation. Infrastructure is ready, content sections coming
                soon.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" render={<Link href="/#contact" />}>
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  render={<Link href="/#services" />}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Placeholder sections */}
        <section id="services" className="bg-muted/50 py-16">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl font-bold">Services</h2>
              <p className="text-muted-foreground mt-4">
                Coming in Part 3: Services & Offerings
              </p>
            </div>
          </Container>
        </section>

        <section id="about" className="py-16">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl font-bold">About Us</h2>
              <p className="text-muted-foreground mt-4">
                Coming in Part 4: About & Team
              </p>
            </div>
          </Container>
        </section>

        <section id="contact" className="bg-muted/50 py-16">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl font-bold">Contact</h2>
              <p className="text-muted-foreground mt-4">
                Coming in Part 5: Contact Form & CTA
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
