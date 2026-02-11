"use client";
import { LangLink } from "@/components/Lang";
import { motion } from "framer-motion";

const footerSections = [
  {
    title: "Address",
    content: (
      <>
        <p className="text-gray-300">Kerala, India</p>
        <p className="text-gray-400 text-xs mt-2">
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
          <span className="text-2xl">✓</span>
          <span className="text-gray-300">MNRE Certified</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">✓</span>
          <span className="text-gray-300">BIS Compliant</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">✓</span>
          <span className="text-gray-300">ISI Approved</span>
        </div>
      </div>
    )
  },
  {
    title: "Follow Us",
    social: [
      { href: "#", label: "Facebook", icon: "📘" },
      { href: "#", label: "Instagram", icon: "📷" },
      { href: "#", label: "LinkedIn", icon: "💼" },
      { href: "#", label: "YouTube", icon: "🎥" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden mt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-darker via-surface-dark to-surface-darker" />
      <div className="absolute inset-0 animated-gradient opacity-10" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative">
        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {footerSections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card p-6 hover-lift"
              >
                <h4 className="font-bold text-lg mb-4 gradient-text">
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
                          className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                        >
                          <motion.span
                            className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={{ x: -5 }}
                            whileHover={{ x: 0 }}
                          >
                            →
                          </motion.span>
                          {link.label}
                        </LangLink>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Social Links */}
                {section.social && (
                  <ul className="space-y-3">
                    {section.social.map((social) => (
                      <motion.li key={social.label}>
                        <motion.a
                          href={social.href}
                          whileHover={{ scale: 1.05, x: 5 }}
                          className="text-gray-300 hover:text-primary transition-all duration-300 flex items-center gap-3 group"
                        >
                          <motion.span
                            className="text-2xl"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                          >
                            {social.icon}
                          </motion.span>
                          <span className="group-hover:glow-primary">
                            {social.label}
                          </span>
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated Separator */}
        <motion.div
          className="h-1 animated-gradient mx-auto max-w-7xl"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="py-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Sakthi Solar Systems. All rights
            reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Powering Kerala with clean, sustainable energy
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
