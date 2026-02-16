"use client";
import { LangLink } from "@/components/Lang";
import { motion } from "framer-motion";

const footerSections = [
  {
    title: "Address",
    content: (
      <>
        <p className="text-[#182954] text-sm" style={{ letterSpacing: '-0.01em' }}>Kerala, India</p>
        <p className="text-gray-400 text-xs mt-2" style={{ letterSpacing: '-0.01em' }}>
          Service statewide: Kochi, Thiruvananthapuram, Kozhikode, Thrissur & more
        </p>
      </>
    )
  },
  {
    title: "Quick Links",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/contact", label: "Contact Us" },
      { href: "/faqs", label: "FAQs" }
    ]
  },
  {
    title: "Certifications",
    content: (
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-[#BB1F2C]">✓</span>
          <span className="text-[#182954] text-sm" style={{ letterSpacing: '-0.01em' }}>MNRE Certified</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#BB1F2C]">✓</span>
          <span className="text-[#182954] text-sm" style={{ letterSpacing: '-0.01em' }}>BIS Compliant</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#BB1F2C]">✓</span>
          <span className="text-[#182954] text-sm" style={{ letterSpacing: '-0.01em' }}>ISI Approved</span>
        </div>
      </div>
    )
  },
  {
    title: "Follow Us",
    social: [
      { href: "#", label: "Facebook" },
      { href: "#", label: "Instagram" },
      { href: "#", label: "LinkedIn" },
      { href: "#", label: "YouTube" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-[#F8F9FA] pt-16 pb-8 mt-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {footerSections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <h4 className="font-bold text-base mb-4 text-[#182954]" style={{ letterSpacing: '-0.01em' }}>
                {section.title}
              </h4>

              {/* Content */}
              {section.content && <div>{section.content}</div>}

              {/* Links */}
              {section.links && (
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <LangLink
                        href={link.href}
                        className="text-[#182954] hover:text-[#BB1F2C] transition-colors duration-300 text-sm"
                      >
                        {link.label}
                      </LangLink>
                    </li>
                  ))}
                </ul>
              )}

              {/* Social Links */}
              {section.social && (
                <ul className="space-y-2">
                  {section.social.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        className="text-[#182954] hover:text-[#BB1F2C] transition-colors duration-300 text-sm"
                      >
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Simple Divider */}
        <div className="h-px bg-gray-200 mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-[#182954] opacity-40 text-sm" style={{ letterSpacing: '-0.01em' }}>
            © {new Date().getFullYear()} Sakthi Solar Systems. All rights reserved.
          </p>
          <p className="text-[#182954] opacity-30 text-xs mt-2" style={{ letterSpacing: '-0.01em' }}>
            Powering Kerala with clean, sustainable energy
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
