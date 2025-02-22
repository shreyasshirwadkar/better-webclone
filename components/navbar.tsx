"use client"

import Link from "next/link"
import { Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const navigationItems = [
  {
    title: "Buy",
    href: "/buy",
  },
  {
    title: "Refinance",
    href: "/refinance",
  },
  {
    title: "HELOC",
    href: "/heloc",
  },
  {
    title: "Rates",
    href: "/rates",
  },
  {
    title: "Better+",
    href: "/better-plus",
  },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-2xl font-bold text-[#008060]">Better</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    )}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex" aria-label="Call us">
            <Phone className="h-5 w-5" />
          </Button>
          <Button variant="ghost" className="hidden md:flex">
            Sign in
          </Button>
          <Button className="bg-[#008060] text-white hover:bg-[#006048]">Continue</Button>
        </div>
      </div>
    </header>
  )
}

