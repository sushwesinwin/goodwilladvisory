import Link from "next/link"
import { Container } from "./container"
import { NAV_ITEMS } from "@/lib/constants"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Goodwill Advisory</span>
          </Link>

          <nav className="hidden md:flex md:gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/60 hover:text-foreground text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button asChild>
            <Link href="/#contact">Get Started</Link>
          </Button>
        </div>
      </Container>
    </header>
  )
}
