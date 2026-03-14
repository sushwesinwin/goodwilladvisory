import { fontSans } from "@/lib/fonts"
import { constructMetadata } from "@/lib/metadata"
import { cn } from "@/lib/utils"
import "./globals.css"

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
