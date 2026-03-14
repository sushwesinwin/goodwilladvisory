import { Home, Briefcase, Users, Mail } from "lucide-react"

export const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Services",
    href: "/#services",
    icon: Briefcase,
  },
  {
    label: "About",
    href: "/#about",
    icon: Users,
  },
  {
    label: "Contact",
    href: "/#contact",
    icon: Mail,
  },
] as const
