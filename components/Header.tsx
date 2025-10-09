"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { t, type Locale } from "@/lib/i18n";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();
  const locale = (params.get("lang") as Locale) || "en";
  const switchLocale = (l: Locale) => {
    const qs = new URLSearchParams(params as any);
    qs.set("lang", l);
    router.push(`${pathname}?${qs.toString()}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 h-[var(--header-height)] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" width={120} height={30} alt="Logo" priority />
          <span className="sr-only">{t(locale, "common.companyName")}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/faqs">FAQs</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27m%20interested%20in%20a%20solar%20quote"
            className="hidden sm:inline-flex px-3 py-2 rounded-md bg-secondary text-white text-sm"
          >
            {t(locale, "common.whatsapp")}
          </a>
          <a
            href="tel:+91XXXXXXXXXX"
            className="px-3 py-2 rounded-md bg-primary text-white text-sm"
          >
            {t(locale, "common.phone")}
          </a>
          <div className="ml-2 border rounded-md overflow-hidden">
            <button
              onClick={() => switchLocale("en")}
              className={`px-2 py-2 text-xs ${locale === "en" ? "bg-neutral-100" : ""}`}
            >
              EN
            </button>
            <button
              onClick={() => switchLocale("ml")}
              className={`px-2 py-2 text-xs ${locale === "ml" ? "bg-neutral-100" : ""}`}
            >
              ML
            </button>
          </div>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-secondary to-primary" />
    </header>
  );
}
