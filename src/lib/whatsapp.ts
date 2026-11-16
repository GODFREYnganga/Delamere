import { siteConfig } from "@/data/site";

export function whatsappUrl(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`;
}

export function productInquiry(productName: string) {
  return whatsappUrl(
    `Hello Delamere Ranch, I'm interested in ${productName}. Could you share availability and pricing?`
  );
}

export function visitInquiry(experienceName: string) {
  return whatsappUrl(
    `Hello Delamere Ranch, I'd like to book: ${experienceName}. Please share available dates.`
  );
}
