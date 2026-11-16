"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface InquiryFormProps {
  type: "wholesale" | "contact" | "academy" | "financing";
  title?: string;
}

export function InquiryForm({ type, title }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-sm border border-brand-green/10 bg-brand-green/5 p-8 text-center">
        <h3 className="text-xl text-brand-dark">Thank You</h3>
        <p className="mt-2 text-foreground/60">
          Your inquiry has been received. Our team will respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {title && (
        <h3 className="text-xl text-brand-dark mb-6">{title}</h3>
      )}
      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Full Name"
          required
          className="rounded-sm border border-brand-green/10 px-4 py-3 text-sm focus:border-brand-gold focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          className="rounded-sm border border-brand-green/10 px-4 py-3 text-sm focus:border-brand-gold focus:outline-none"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          required
          className="rounded-sm border border-brand-green/10 px-4 py-3 text-sm focus:border-brand-gold focus:outline-none"
        />
        {type === "wholesale" && (
          <input
            type="text"
            placeholder="Company Name"
            required
            className="rounded-sm border border-brand-green/10 px-4 py-3 text-sm focus:border-brand-gold focus:outline-none"
          />
        )}
      </div>
      <textarea
        placeholder={
          type === "wholesale"
            ? "Tell us about your procurement needs..."
            : type === "academy"
              ? "Which course interests you?"
              : type === "financing"
                ? "Describe your financing requirements..."
                : "How can we help you?"
        }
        rows={4}
        required
        className="w-full rounded-sm border border-brand-green/10 px-4 py-3 text-sm focus:border-brand-gold focus:outline-none"
      />
      <Button type="submit" variant="primary" size="lg">
        Submit Inquiry
      </Button>
    </form>
  );
}
