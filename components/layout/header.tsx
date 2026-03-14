import Link from "next/link"
import { Container } from "./container"
import { Leaf, Facebook, Linkedin, Music } from "lucide-react"
import { siteConfig } from "@/config/site"

export function Header() {
  return (
    <header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg shadow-sm">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">
              Goodwill Advisory
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex gap-8">
            <Link
              href="/"
              className="text-foreground/60 hover:text-primary text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="text-foreground/60 hover:text-primary text-sm font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="text-foreground/60 hover:text-primary text-sm font-medium transition-colors"
            >
              About us
            </Link>
            <Link
              href="/#contact"
              className="text-foreground/60 hover:text-primary text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="hidden items-center gap-4 border-l pl-8 md:flex">
            <Link
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href={siteConfig.links.tiktok}
              target="_blank"
              rel="noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Music className="h-4 w-4" />
              <span className="sr-only">TikTok</span>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}
