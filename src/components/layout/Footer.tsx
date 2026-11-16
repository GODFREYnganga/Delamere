import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-cream">
      <div className="section-padding !pb-12">
        <div className="container-wide">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block">
                <span className="font-serif text-2xl">Delamere</span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.3em] text-brand-gold">
                  Ranch Kenya
                </span>
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-brand-cream/60">
                {siteConfig.description}
              </p>
              <p className="mt-4 text-sm text-brand-cream/40">
                {siteConfig.location}
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-brand-gold">
                Explore
              </h4>
              <ul className="space-y-2">
                {footerNav.explore.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-brand-cream/60 transition-colors hover:text-brand-cream"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-brand-gold">
                Business
              </h4>
              <ul className="space-y-2">
                {footerNav.business.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-brand-cream/60 transition-colors hover:text-brand-cream"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-brand-gold">
                Stay Connected
              </h4>
              <NewsletterForm />
              <div className="mt-6 space-y-1 text-sm text-brand-cream/60">
                <p>{siteConfig.phone}</p>
                <p>{siteConfig.email}</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-brand-cream/10 pt-8 md:flex-row">
            <p className="text-xs text-brand-cream/40">
              &copy; {new Date().getFullYear()} Delamere Ranch. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              {footerNav.connect.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs text-brand-cream/40 transition-colors hover:text-brand-gold"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
