"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { LogoMark } from "@/components/logo-mark";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function closeMobileNavigation({ restoreFocus = false } = {}) {
    setIsOpen(false);

    if (restoreFocus) {
      menuButtonRef.current ??= document.getElementById(
        "mobile-menu-button",
      ) as HTMLButtonElement | null;
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMobileNavigation({ restoreFocus: true });
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/45 bg-background/78 shadow-[0_12px_38px_rgba(24,58,90,0.08)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/68">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <LogoMark />
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActivePath(pathname, item.href) ? "page" : undefined}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActivePath(pathname, item.href) && "bg-secondary text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/contact">
              <span className="hidden xl:inline">AI Operations Review</span>
              <span className="xl:hidden">Review</span>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
          <Button
            id="mobile-menu-button"
            type="button"
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>
      <div className="border-t border-border/70 px-4 py-3 sm:hidden">
        <Button asChild size="sm" className="w-full">
          <Link href="/contact" onClick={() => closeMobileNavigation({ restoreFocus: true })}>
            AI Operations Review
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={cn(
          "border-t border-border/70 bg-card px-4 py-3 lg:hidden",
          !isOpen && "hidden",
        )}
      >
        <div className="grid gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActivePath(pathname, item.href) ? "page" : undefined}
              onClick={() => closeMobileNavigation({ restoreFocus: true })}
              className={cn(
                "min-h-11 rounded-md px-3 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActivePath(pathname, item.href) && "bg-secondary text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
