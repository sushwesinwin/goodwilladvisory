import Link from "next/link"
import { Container } from "./container"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/config/site"

import { Facebook, Linkedin, Music } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Company */}
            <div className="space-y-3">
              <h3 className="text-lg">Goodwill Advisory Group</h3>
              <p className="text-muted-foreground text-sm">
                Professional advisory services for strategic business growth.
              </p>
              <div className="flex gap-4 pt-2">
                <Link
                  href={siteConfig.links.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href={siteConfig.links.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Music className="h-5 w-5" />
                  <span className="sr-only">TikTok</span>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="text-sm">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/#services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-3">
              <h4 className="text-sm">Services</h4>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>Strategic Planning</li>
                <li>Business Consulting</li>
                <li>Financial Advisory</li>
                <li>Risk Management</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h4 className="text-sm">Contact</h4>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.contact.phone.split(" ")[0]}`}
                    className="hover:text-primary transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li>
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
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
