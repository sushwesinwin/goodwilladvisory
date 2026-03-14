import Link from "next/link"
import { Container } from "./container"
import { Leaf } from "lucide-react"

export function Header() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold">Goodwill Advisory</span>
          </Link>

          {/* Navigation */}
          <nav className="flex gap-8">
            <Link
              href="/"
              className="text-foreground/60 hover:text-foreground text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="text-foreground/60 hover:text-foreground text-sm font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="text-foreground/60 hover:text-foreground text-sm font-medium transition-colors"
            >
              About us
            </Link>
            <Link
              href="/#contact"
              className="text-foreground/60 hover:text-foreground text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  )
}
