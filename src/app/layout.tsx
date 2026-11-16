import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delamere Ranch | Kenya's Heritage Ranching Excellence",
  description:
    "Experience premium dairy, pedigree livestock, and luxury farm tours at Delamere Ranch, Naivasha. East Africa's leading agricultural authority.",
  openGraph: {
    title: "Delamere Ranch | Kenya's Heritage Ranching Excellence",
    description:
      "Premium dairy, pedigree livestock, agricultural innovation, and immersive farm experiences from the heart of Naivasha.",
    type: "website",
    locale: "en_KE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
