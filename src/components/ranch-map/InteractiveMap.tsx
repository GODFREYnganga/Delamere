"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X } from "lucide-react";
import { ranchZones, type MapZone } from "@/data/ranch-map";
import { images } from "@/data/images";
import { Badge } from "@/components/ui/Badge";

export function InteractiveMap() {
  const [active, setActive] = useState<MapZone | null>(null);

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-green lg:col-span-2 lg:aspect-auto lg:min-h-[500px]">
        <Image
          src={images.forestAerial}
          alt="Aerial view of Delamere Ranch"
          fill
          className="object-cover opacity-60"
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
        <div className="absolute inset-0 bg-brand-dark/30" />

        {ranchZones.map((zone) => (
          <button
            key={zone.id}
            type="button"
            onClick={() => setActive(zone)}
            className="group absolute z-10"
            style={{ left: `${zone.position.x}%`, top: `${zone.position.y}%` }}
            aria-label={zone.name}
          >
            <span className="relative flex h-8 w-8 items-center justify-center">
              <span className="absolute h-full w-full animate-ping rounded-full bg-brand-gold/40" />
              <span
                className={`relative flex h-6 w-6 items-center justify-center rounded-full transition-colors ${
                  active?.id === zone.id
                    ? "bg-brand-gold text-brand-dark"
                    : "bg-brand-cream/90 text-brand-green group-hover:bg-brand-gold group-hover:text-brand-dark"
                }`}
              >
                <MapPin size={14} />
              </span>
            </span>
            <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-sm bg-brand-dark/80 px-2 py-0.5 text-[10px] text-brand-cream opacity-0 transition-opacity group-hover:opacity-100">
              {zone.name}
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-col">
        <h3 className="text-lg text-brand-dark mb-4">Ranch Zones</h3>
        <div className="flex-1 space-y-2 overflow-y-auto max-h-[500px]">
          {ranchZones.map((zone) => (
            <button
              key={zone.id}
              type="button"
              onClick={() => setActive(zone)}
              className={`w-full text-left border p-4 transition-all ${
                active?.id === zone.id
                  ? "border-brand-gold bg-brand-gold/5"
                  : "border-brand-green/10 hover:border-brand-gold/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-brand-dark">{zone.name}</span>
                <Badge>{zone.type}</Badge>
              </div>
              <p className="mt-1 text-sm text-foreground/50 line-clamp-2">
                {zone.description}
              </p>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-4 border border-brand-gold/30 bg-white p-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <Badge variant="gold" className="mb-2">
                    {active.type}
                  </Badge>
                  <h4 className="text-lg text-brand-dark">{active.name}</h4>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="text-foreground/40 hover:text-foreground"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="relative mt-3 aspect-video overflow-hidden">
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
              <p className="mt-3 text-sm text-foreground/60">
                {active.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
