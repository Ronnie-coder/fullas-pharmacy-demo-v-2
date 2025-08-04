import Link from "next/link"
import { Pill, Syringe } from "lucide-react"
import { ModeToggle } from "./theme-toggle"
import { Button } from "./ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Pill className="h-6 w-6 text-brand-primary" />
            <span className="hidden font-bold sm:inline-block">
              Fullas Pharmacy
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/#services"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Services
            </Link>
            <Link
              href="/delivery"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Track Delivery
            </Link>
             <Link
              href="/blog"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <Button asChild>
              <Link href="/upload">
                <Syringe className="mr-2 h-4 w-4" /> Upload Prescription
              </Link>
            </Button>
            <div className="ml-4">
              <ModeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}