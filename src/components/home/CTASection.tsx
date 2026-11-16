"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { partners } from "@/data/about";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-brand-green py-20 md:py-28">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,var(--delamere-gold)_0%,transparent_50%)]" />
      </div>

      <div className="container-wide relative z-10 px-6 text-center md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-3xl text-brand-cream md:text-4xl lg:text-5xl"
        >
          Experience the Digital Future of African Ranching
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-4 max-w-xl text-brand-cream/60"
        >
          Whether you&apos;re a buyer, tourist, farmer, or distributor — Delamere
          welcomes you to Kenya&apos;s most prestigious ranch.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/visits" variant="gold" size="lg">
            Plan Your Visit
          </Button>
          <Button href="/wholesale" variant="outline" size="lg">
            Partner With Us
          </Button>
        </motion.div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-40">
          {partners.map((partner) => (
            <span
              key={partner}
              className="text-xs font-medium uppercase tracking-wider text-brand-cream"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
