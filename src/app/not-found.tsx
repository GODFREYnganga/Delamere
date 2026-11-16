import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center section-padding text-center">
      <h1 className="text-6xl text-brand-dark">404</h1>
      <p className="mt-4 text-lg text-foreground/60">
        This page could not be found on the ranch.
      </p>
      <Button href="/" variant="primary" size="lg" className="mt-8">
        Return Home
      </Button>
    </section>
  );
}
