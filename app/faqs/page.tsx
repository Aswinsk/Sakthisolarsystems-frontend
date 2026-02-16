"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How much does a solar system cost?",
        a: "Residential systems typically range from ₹60,000-₹1,20,000 per kW installed. A 5kW system (suitable for most homes) costs around ₹3-6 lakhs before subsidies. Government subsidies can reduce this by 40-60%."
      },
      {
        q: "How long does installation take?",
        a: "Site inspection and design: 2-3 days. Installation: 1-2 days. Government approvals and net metering: 2-4 weeks. Total timeline: 3-6 weeks from contract signing to activation."
      },
      {
        q: "Do I need to modify my roof?",
        a: "No major modifications needed. We install on existing roofs using non-penetrating mounting systems. We assess structural integrity during site inspection and recommend reinforcements only if necessary."
      },
      {
        q: "What size system do I need?",
        a: "Based on your monthly electricity bill: ₹2,000-3,000 → 2-3kW | ₹3,000-5,000 → 3-5kW | ₹5,000-8,000 → 5-7kW | ₹8,000+ → 7-10kW. We calculate exact sizing during site inspection."
      }
    ]
  },
  {
    category: "Performance & Savings",
    questions: [
      {
        q: "How much will I save on electricity?",
        a: "Most customers see 70-90% reduction in electricity bills. A typical 5kW system generates 20-25 units per day, saving ₹4,000-6,000 monthly. Payback period: 4-6 years. Lifetime savings: ₹15-25 lakhs over 25 years."
      },
      {
        q: "What happens on cloudy days?",
        a: "Panels still generate power on cloudy days—about 10-25% of normal output. Kerala's annual sunshine is excellent for solar. You'll use grid power when generation is low, and export excess when it's sunny."
      },
      {
        q: "Do I need batteries?",
        a: "No. Grid-tied systems don't need batteries—excess power goes to the grid, earning you credits via net metering. Batteries add ₹1-2 lakhs to cost and are only needed for off-grid locations or backup power requirements."
      },
      {
        q: "How long do panels last?",
        a: "25-30 years minimum. Panels degrade about 0.5% per year. After 25 years, they'll still produce 85-90% of original output. Inverters last 10-15 years and may need one replacement during system lifetime."
      }
    ]
  },
  {
    category: "Technical Details",
    questions: [
      {
        q: "What is net metering?",
        a: "Net metering lets you export excess solar power to the grid and earn credits. Your meter runs backward when exporting. Monthly, you're billed only for net consumption (grid import minus solar export). Available through KSEB."
      },
      {
        q: "Will it work during power cuts?",
        a: "Standard grid-tied systems shut off during outages for safety. For backup power, you need a hybrid inverter with battery (adds ₹1.5-2.5 lakhs). This provides both grid-tie benefits and backup during cuts."
      },
      {
        q: "What maintenance is required?",
        a: "Minimal. Clean panels 2-4 times per year (monsoon rains help). Check inverter display monthly. Annual professional inspection recommended. We provide 25-year O&M packages with monitoring, cleaning, and repairs."
      },
      {
        q: "What components are included?",
        a: "Complete system includes: Solar panels (monocrystalline), inverter (string or micro), mounting structure (aluminum), cabling, earthing, AC/DC protection, net meter, monitoring system. All MNRE-approved components with warranties."
      }
    ]
  },
  {
    category: "Government & Approvals",
    questions: [
      {
        q: "What subsidies are available?",
        a: "Central Government (MNRE): 40% subsidy up to 3kW (₹18,000/kW), 20% for 3-10kW (₹9,000/kW). Kerala State: Additional incentives for certain categories. Maximum subsidy: ₹78,000 for residential systems. We handle all subsidy applications."
      },
      {
        q: "What approvals do I need?",
        a: "KSEB net metering approval (we apply for you). Building owner consent if rented. Electrical safety inspection. Typically takes 2-4 weeks. We manage the entire approval process—you just sign documents."
      },
      {
        q: "Are there any taxes?",
        a: "Solar equipment attracts 5% GST (reduced rate). Installation is tax-free. No property tax increase. Income from solar power is non-taxable for residential systems under net metering."
      },
      {
        q: "Can I install on rented property?",
        a: "Yes, with landlord written consent. Many landlords agree since it increases property value and reduces electricity costs. We provide landlord agreement templates. ROI remains attractive even for 5-10 year tenancies."
      }
    ]
  },
  {
    category: "Sakthi Solar Specific",
    questions: [
      {
        q: "What warranty do you provide?",
        a: "Panels: 25-year performance warranty (80% output guaranteed). Inverter: 10-year warranty (extendable to 15). Installation: 5-year workmanship warranty. Mounting structure: 15-year warranty. Free monitoring for 1 year."
      },
      {
        q: "What brands do you use?",
        a: "We use tier-1 components only: Panels (Trina, Jinko, Canadian Solar, Vikram), Inverters (SMA, Fronius, SolarEdge, Delta), All MNRE-approved and BIS-certified with proven Kerala performance."
      },
      {
        q: "Do you offer financing?",
        a: "Yes. Partner banks offer green loans at 8-10% interest for solar. Loan tenure: 5-7 years. EMI often lower than current electricity bills. We assist with loan applications and documentation."
      },
      {
        q: "What happens if I move?",
        a: "Solar systems increase property value by ₹2-4 lakhs. You can: 1) Leave it (major selling point), 2) Transfer net metering to new owner (simple KSEB form), 3) Relocate system to new property (₹30,000-50,000 reinstallation cost)."
      }
    ]
  }
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (category: string, index: number) => {
    const key = `${category}-${index}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="bg-white overflow-x-hidden">
      <div className="flex flex-col gap-[60px] md:gap-[100px] pt-28 md:pt-32 pb-[60px] md:pb-[100px]">

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="gradient-blob blob-red animate-float" style={{
            position: 'absolute',
            top: '-150px', right: '-150px',
            width: '500px', height: '500px'
          }} />

          <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-[800px] mx-auto"
            >
              <h1 className="text-[56px] md:text-[72px] font-bold text-[#182954] mb-6"
                  style={{ letterSpacing: '-0.04em' }}>
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-[#182954] opacity-60"
                 style={{ letterSpacing: '-0.01em' }}>
                Everything you need to know about going solar in Kerala.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-[900px] mx-auto px-6 md:px-12">
          {faqs.map((section, sectionIdx) => (
            <motion.div
              key={section.category}
              {...fadeInUp}
              transition={{ delay: sectionIdx * 0.1, duration: 0.6 }}
              className="mb-16 last:mb-0"
            >
              <h2 className="text-[32px] md:text-[36px] font-bold text-[#182954] mb-8"
                  style={{ letterSpacing: '-0.03em' }}>
                {section.category}
              </h2>

              <div className="space-y-4">
                {section.questions.map((faq, idx) => {
                  const isOpen = openIndex === `${section.category}-${idx}`;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl overflow-hidden transition-all"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6))',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        boxShadow: isOpen
                          ? 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 12px 32px rgba(24, 41, 84, 0.12)'
                          : 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 8px 32px rgba(24, 41, 84, 0.08)'
                      }}
                    >
                      <button
                        onClick={() => toggleFAQ(section.category, idx)}
                        className="w-full px-6 py-5 text-left flex justify-between items-start gap-4 transition-colors"
                      >
                        <span className="font-bold text-lg text-[#182954] flex-1"
                              style={{ letterSpacing: '-0.02em' }}>
                          {faq.q}
                        </span>
                        <span className="text-[#BB1F2C] text-2xl font-bold flex-shrink-0 transition-transform"
                              style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                          +
                        </span>
                      </button>

                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-5"
                        >
                          <p className="text-[#182954] opacity-70 leading-relaxed"
                             style={{ letterSpacing: '-0.01em' }}>
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </section>

        {/* CTA */}
        <section className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            {...fadeInUp}
            className="relative"
          >
            <div className="gradient-blob blob-navy animate-float" style={{
              position: 'absolute',
              top: '-100px', left: '50%',
              transform: 'translateX(-50%)',
              width: '600px', height: '600px'
            }} />

            <div className="relative z-10">
              <h2 className="text-[48px] md:text-[56px] font-bold text-[#182954] mb-6"
                  style={{ letterSpacing: '-0.03em' }}>
                Still Have Questions?
              </h2>
              <p className="text-xl text-[#182954] opacity-60 mb-8"
                 style={{ letterSpacing: '-0.01em' }}>
                Our team is here to help. Get in touch for personalized answers.
              </p>
              <motion.a
                href="/contact"
                whileHover={{
                  y: -2,
                  boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 8px 24px rgba(187, 31, 44, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 rounded-xl text-lg font-medium transition-all"
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
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
