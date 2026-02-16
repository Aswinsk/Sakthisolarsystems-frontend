import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LangProvider } from "@/components/Lang";
import BrandLoader from "@/components/BrandLoader";
import { Suspense } from "react";

const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sakthi Solar Systems | Premium Solar Solutions in Kerala",
  description: "Clean, reliable and future-ready solar systems for homes and businesses across Kerala.",
  metadataBase: new URL("https://sakthisolarsystems.vercel.app")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-[#182954] antialiased bg-white`} style={{ letterSpacing: '-0.01em' }}>
        <BrandLoader />
        <Suspense fallback={<div className='h-20' />}>
          <LangProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </LangProvider>
        </Suspense>
      </body>
    </html>
  );
}
