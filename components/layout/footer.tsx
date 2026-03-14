import Link from "next/link"
import { Container } from "./container"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/config/site"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Company */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Goodwill Advisory Group</h3>
              <p className="text-muted-foreground text-sm">
                Professional advisory services for strategic business growth.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/#services"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Services</h4>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>Strategic Planning</li>
                <li>Business Consulting</li>
                <li>Financial Advisory</li>
                <li>Risk Management</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Contact</h4>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>goodwilladvisory.hr@gmail.com</li>
                <li>09255572225 (Viber)</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-muted-foreground text-sm">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
