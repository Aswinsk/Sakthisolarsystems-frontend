"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LangLink, useLang } from "@/components/Lang";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#solutions", label: "Solutions" },
  { href: "#projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const path = usePathname();
  const r = useRouter();
  const p = useSearchParams();
  const lang = useLang();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <LangLink href="/">
          <motion.div whileHover={{ scale: 1.02 }} className="flex items-center">
            <Image
              src="/logo.png"
              width={180}
              height={40}
              alt="Sakthi Solar Systems"
              priority
              className="h-10 w-auto"
            />
          </motion.div>
        </LangLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#111111] text-base font-medium hover:text-[#0B3D2E] transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A4D037] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            whileHover={{ y: -2, boxShadow: "0 8px 16px rgba(164, 208, 55, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#A4D037] text-[#111111] px-6 py-2.5 rounded-lg text-sm font-medium transition-shadow"
          >
            Get Quote
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-[#111111] transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-[#111111] transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-[#111111] transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <nav className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#111111] text-lg font-medium hover:text-[#0B3D2E] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="bg-[#A4D037] text-[#111111] px-6 py-3 rounded-lg text-base font-medium w-full">
              Get Quote
            </button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
