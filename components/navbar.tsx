"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vyvayva%20logo-RIeD8lrTTx65QLaDHpQbHeL5GScMNs.png"
            alt="Vayavya Labs Logo"
            width={120}
            height={40}
          />
        </Link>
        <NavigationMenu className="ml-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <button onClick={() => scrollToSection("offerings")} className={navigationMenuTriggerStyle()}>
                Offerings
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button onClick={() => scrollToSection("about")} className={navigationMenuTriggerStyle()}>
                About
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button onClick={() => scrollToSection("contact")} className={navigationMenuTriggerStyle()}>
                Contact
              </button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}

