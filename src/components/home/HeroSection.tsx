"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={images.heroCattleGrazing}
          alt="Delamere Ranch landscape"
          fill
          className="animate-ken-burns object-cover"
          priority
          sizes="100vw"
        />
        <div className="overlay-dark absolute inset-0" />
        <div className="overlay-radial absolute inset-0" />
      </div>

      <div className="relative z-10 section-padding w-full text-center">
        <div className="container-wide">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-brand-gold"
          >
            Naivasha, Kenya
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-4xl text-4xl leading-tight text-brand-cream sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {siteConfig.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-cream/70 md:text-xl"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href="/about" variant="gold" size="lg">
              Explore the Ranch
            </Button>
            <Button href="/visits" variant="outline" size="lg">
              Book a Ranch Visit
            </Button>
            <Button href="/products" variant="secondary" size="lg">
              Shop Products
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="animate-bounce text-brand-cream/50" size={28} />
      </motion.div>
    </section>
  );
}
