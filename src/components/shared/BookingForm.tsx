"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Calendar, Users, CreditCard } from "lucide-react";

interface BookingFormProps {
  experienceName: string;
}

export function BookingForm({ experienceName }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-sm border border-brand-green/10 bg-brand-green/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-green text-brand-cream">
          <Calendar size={28} />
        </div>
        <h3 className="text-xl text-brand-dark">Booking Confirmed</h3>
        <p className="mt-2 text-foreground/60">
          Your reservation for <strong>{experienceName}</strong> is confirmed.
          A confirmation email with your QR ticket has been sent.
        </p>
        <p className="mt-4 text-sm text-brand-gold">
          Booking Reference: DLR-{Math.random().toString(36).substring(2, 8).toUpperCase()}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center gap-4 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                step >= s
                  ? "bg-brand-green text-brand-cream"
                  : "bg-brand-green/10 text-brand-green/40"
              }`}
            >
              {s}
            </div>
            <span className="hidden text-sm text-foreground/60 sm:inline">
              {s === 1 ? "Date & Guests" : s === 2 ? "Details" : "Payment"}
            </span>
            {s < 3 && <div className="hidden h-px w-8 bg-brand-green/20 sm:block" />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-brand-dark">
              <Calendar size={14} className="inline mr-1" />
              Select Date
            </label>
            <input
              type="date"
              required
              className="w-full rounded-sm border border-brand-green/10 px-4 py-3 text-sm focus:border-brand-gold focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-brand-dark">
              <Users size={14} className="inline mr-1" />
              Number of Guests
            </label>
            <select
              required
              className="w-full rounded-sm border border-brand-green/10 px-4 py-3 text-sm focus:border-brand-gold focus:outline-none"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "guest" : "guests"}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full rounded-sm border border-brand-green/10 px-4 py-3 text-sm focus:border-brand-gold focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full rounded-sm border border-brand-green/10 px-4 py-3 text-sm focus:border-brand-gold focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number (M-Pesa)"
            required
            className="w-full rounded-sm border border-brand-green/10 px-4 py-3 text-sm focus:border-brand-gold focus:outline-none"
          />
          <textarea
            placeholder="Special requests or dietary requirements"
            rows={3}
            className="w-full rounded-sm border border-brand-green/10 px-4 py-3 text-sm focus:border-brand-gold focus:outline-none"
          />
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <p className="text-sm text-foreground/60">
            Choose your preferred payment method:
          </p>
          <label className="flex cursor-pointer items-center gap-3 rounded-sm border border-brand-green/10 p-4 transition-colors hover:border-brand-gold">
            <input type="radio" name="payment" value="mpesa" defaultChecked className="accent-brand-green" />
            <div>
              <span className="font-medium text-brand-dark">M-Pesa</span>
              <p className="text-xs text-foreground/50">Pay via STK push to your phone</p>
            </div>
          </label>
          <label className="flex cursor-pointer items-center gap-3 rounded-sm border border-brand-green/10 p-4 transition-colors hover:border-brand-gold">
            <input type="radio" name="payment" value="card" className="accent-brand-green" />
            <div>
              <span className="font-medium text-brand-dark">Card Payment</span>
              <p className="text-xs text-foreground/50">Visa, Mastercard via Stripe</p>
            </div>
          </label>
          <div className="flex items-center gap-2 rounded-sm bg-brand-sand/50 p-4 text-sm text-foreground/60">
            <CreditCard size={16} />
            Payment integration ready for M-Pesa and Stripe configuration.
          </div>
        </div>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-full">
        {step < 3 ? "Continue" : "Confirm Booking"}
      </Button>
    </form>
  );
}
