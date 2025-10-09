import { Suspense } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Solar Solutions in Kerala | Save on KSEB Bills",
  description: "On-grid, hybrid, and off-grid solar PV in Kerala. MNRE & BIS-compliant systems. Net-metering with KSEB. Free quotes and site visits.",
  openGraph: {
    title: "Solar Solutions in Kerala",
    description: "MNRE & BIS-compliant on-grid, hybrid & off-grid solar systems across Kerala.",
    metadataBase: new URL("https://sakthisolarsystems.vercel.app"),
    images: ["/og-image.png"],
    url: "https://example.com",
    siteName: "Kerala Solar"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerala Solar",
    description: "Save on KSEB bills with quality solar systems.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body text-neutral-800">
        <div className="ribbon text-center text-sm py-1">Established since 1999</div>
       <Suspense fallback={<div className="h-[var(--header-height)]" />}>
  <Header />
</Suspense>
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        {/* GA4 / Meta Pixel placeholders */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXX" /> */}
      </body>
    </html>
  );
}
