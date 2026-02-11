"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LangLink, useLang } from "@/components/Lang";
import { motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const path = usePathname();
  const r = useRouter();
  const p = useSearchParams();
  const lang = useLang();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sw = (l: "en" | "ml") => {
    const q = new URLSearchParams(p as any);
    q.set("lang", l);
    r.push(`${path}?${q.toString()}`);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 glass-card shadow-glow"
    >
      <div className="mx-auto max-w-7xl px-4 h-[var(--header-height)] flex items-center justify-between">
        {/* Logo */}
        <LangLink href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.svg"
              width={160}
              height={36}
              alt="Sakthi Solar Systems"
              priority
            />
            <span className="sr-only">Sakthi Solar Systems</span>
          </motion.div>
        </LangLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <LangLink
                href={link.href}
                className="relative hover:text-primary transition-colors duration-300 group"
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-bg group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </LangLink>
            </motion.div>
          ))}
        </nav>

        {/* CTA Buttons & Language Switcher */}
        <div className="flex items-center gap-3">
          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27m%20interested%20in%20a%20solar%20quote"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-gradient-to-r from-secondary to-secondary/80 text-white text-sm shadow-soft hover-glow transition-all duration-300"
          >
            WhatsApp
          </motion.a>

          {/* Phone Button */}
          <motion.a
            href="tel:+91XXXXXXXXXX"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--glow-primary)" }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-xl gradient-bg text-white text-sm shadow-soft transition-all duration-300"
          >
            +91-XXXXXXXXXX
          </motion.a>

          {/* Language Switcher */}
          <div className="ml-2 glass rounded-xl p-1 flex gap-1">
            <motion.button
              onClick={() => sw("en")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                lang === "en"
                  ? "gradient-bg text-white shadow-glow"
                  : "hover:bg-white/10"
              }`}
            >
              EN
            </motion.button>
            <motion.button
              onClick={() => sw("ml")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                lang === "ml"
                  ? "gradient-bg text-white shadow-glow"
                  : "hover:bg-white/10"
              }`}
            >
              ML
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Animated Gradient Bar */}
      <motion.div
        className="h-1 animated-gradient"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-strong border-t border-white/10"
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <LangLink
                  href={link.href}
                  className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </LangLink>
              </motion.div>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
