/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils"; // Optional helper if you're using clsx + tailwind-merge

export function NavbarDemo() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Skills", link: "/skills" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <div className="flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.link;
              return (
                <Link
                  key={item.name}
                  href={item.link}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isActive ? "text-primary underline underline-offset-4" : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.link;
              return (
                <Link
                  key={`mobile-${item.name}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block py-2 text-lg transition-colors",
                    isActive ? "text-primary font-semibold underline underline-offset-4" : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="flex w-full flex-col gap-4 mt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
