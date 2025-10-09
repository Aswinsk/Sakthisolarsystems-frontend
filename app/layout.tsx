import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LangProvider } from "@/components/Lang";
import BrandLoader from "@/components/BrandLoader";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Solar Solutions in Kerala | Save on KSEB Bills",
  description: "MNRE & BIS-compliant solar PV across Kerala.",
  metadataBase: new URL("https://sakthisolarsystems.vercel.app")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body text-gray-900">
        <BrandLoader />
        <div className="ribbon text-center text-sm py-1">Established since 1999</div>
        <Suspense fallback={<div className='h-[var(--header-height)]' />}>
          <LangProvider>
            <Header />
            <main className="min-h-[60vh]">{children}</main>
            <Footer />
          </LangProvider>
        </Suspense>
      </body>
    </html>
  );
}
