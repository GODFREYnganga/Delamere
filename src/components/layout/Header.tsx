"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-brand-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container-wide flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-xl tracking-wide text-brand-cream md:text-2xl">
            Delamere
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold">
            Ranch Kenya
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-brand-cream/80 transition-colors hover:text-brand-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/visits" variant="outline" size="sm">
            Book a Visit
          </Button>
          <Button href="/products" variant="gold" size="sm">
            Shop
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-brand-cream lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-[60px] z-40 bg-brand-dark lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-8">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-brand-cream/10 py-4 text-lg text-brand-cream transition-colors hover:text-brand-gold"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <Button href="/visits" variant="gold" size="lg">
                Book a Visit
              </Button>
              <Button href="/products" variant="outline" size="lg">
                Shop Products
              </Button>
            </div>
            <p className="mt-8 text-sm text-brand-cream/50">
              {siteConfig.location}
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
