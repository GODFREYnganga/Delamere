"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="text-sm text-brand-gold">
        Thank you for subscribing. Welcome to the Delamere community.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
        className="rounded-sm border border-brand-cream/20 bg-brand-cream/5 px-4 py-3 text-sm text-brand-cream placeholder:text-brand-cream/30 focus:border-brand-gold focus:outline-none"
      />
      <Button type="submit" variant="gold" size="sm">
        Subscribe
      </Button>
    </form>
  );
}
