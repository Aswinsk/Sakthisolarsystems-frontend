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
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="fixed left-1/2 z-50 transition-all duration-300"
        style={{
          top: scrolled ? '16px' : '20px',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 32px)',
          maxWidth: '1200px',
        }}
      >
      <div className={`flex items-center justify-between h-14 md:h-16 px-4 md:px-8 rounded-xl md:rounded-2xl transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-md shadow-glass-strong"
          : "bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md shadow-glass"
      }`}
      style={{
        border: '1px solid rgba(255, 255, 255, 0.5)',
        boxShadow: scrolled
          ? 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 12px 40px rgba(24, 41, 84, 0.12)'
          : 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 8px 32px rgba(24, 41, 84, 0.08)'
      }}>
        {/* Logo */}
        <LangLink href="/">
          <motion.div whileHover={{ scale: 1.02 }} className="flex items-center">
            <Image
              src="/logo.png"
              width={180}
              height={40}
              alt="Sakthi Solar Systems"
              priority
              className="h-8 w-auto"
            />
          </motion.div>
        </LangLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#182954] text-sm font-medium hover:text-[#BB1F2C] transition-colors relative group"
              style={{ letterSpacing: '-0.01em' }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-[#BB1F2C] to-transparent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href="/contact"
            whileHover={{
              y: -2,
              boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 8px 24px rgba(187, 31, 44, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2 rounded-lg text-sm font-medium transition-all"
            style={{
              background: 'linear-gradient(135deg, rgba(187, 31, 44, 0.85), rgba(187, 31, 44, 0.75))',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 4px 16px rgba(187, 31, 44, 0.3)',
              color: 'white',
              letterSpacing: '-0.01em'
            }}
          >
            Get Quote
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-[#182954] transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-[#182954] transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-[#182954] transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>
      </motion.header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden mt-2 rounded-xl overflow-hidden fixed left-1/2 z-40 transition-all duration-300"
          style={{
            transform: 'translateX(-50%)',
            width: 'calc(100% - 32px)',
            maxWidth: '1200px',
            top: scrolled ? '72px' : '76px',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 8px 32px rgba(24, 41, 84, 0.08)'
          }}
        >
          <nav className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#182954] text-base font-medium hover:text-[#BB1F2C] transition-colors"
                style={{ letterSpacing: '-0.01em' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              className="px-6 py-3 rounded-lg text-base font-medium w-full text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(187, 31, 44, 0.85), rgba(187, 31, 44, 0.75))',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 4px 16px rgba(187, 31, 44, 0.3)',
                color: 'white',
                letterSpacing: '-0.01em'
              }}
            >
              Get Quote
            </a>
          </nav>
        </motion.div>
      )}
    </>
  );
}
