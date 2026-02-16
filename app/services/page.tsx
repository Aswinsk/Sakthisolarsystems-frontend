"use client";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const services = [
  {
    title: "Residential Solar",
    description: "Complete rooftop solutions for homes and villas. Reduce bills, increase property value.",
    features: [
      "Free site inspection and design",
      "1-10 kW systems for all home sizes",
      "Government subsidy assistance (up to ₹78,000)",
      "Net metering setup with KSEB",
      "25-year performance warranty",
      "Monthly monitoring and support"
    ]
  },
  {
    title: "Commercial Solar",
    description: "Offset daytime consumption for offices, shops, and businesses. Fast ROI with minimal disruption.",
    features: [
      "10-100 kW scalable systems",
      "Tax benefits and accelerated depreciation",
      "Custom financing options",
      "Minimal downtime installation",
      "Real-time energy monitoring",
      "Dedicated commercial support"
    ]
  },
  {
    title: "Industrial Solar",
    description: "Large-scale installations for factories, warehouses, and industrial facilities.",
    features: [
      "100+ kW ground-mount and rooftop",
      "Three-phase high-capacity inverters",
      "Load profiling and optimization",
      "Turnkey EPC solutions",
      "Performance guarantees",
      "Preventive maintenance contracts"
    ]
  },
  {
    title: "Hybrid Systems",
    description: "Grid-tied solar with battery backup for uninterrupted power during outages.",
    features: [
      "5-30 kWh lithium battery storage",
      "Automatic grid/battery switching",
      "Emergency backup (4-12 hours)",
      "Bi-directional inverters",
      "Smart load management",
      "Compatible with generators"
    ]
  },
  {
    title: "Net Metering Setup",
    description: "Complete KSEB net metering application and installation support.",
    features: [
      "Application preparation and submission",
      "Technical approvals coordination",
      "Bi-directional meter installation",
      "Grid connection supervision",
      "2-4 week typical approval time",
      "Lifetime billing support"
    ]
  },
  {
    title: "System Maintenance",
    description: "Keep your solar investment performing at peak efficiency year after year.",
    features: [
      "Quarterly cleaning and inspection",
      "Annual electrical safety checks",
      "Inverter firmware updates",
      "Performance monitoring and alerts",
      "Component replacement (under warranty)",
      "24/7 emergency support"
    ]
  }
];

const process = [
  {
    step: "1",
    title: "Free Consultation",
    description: "We visit your site, assess roof space, evaluate energy needs, and provide initial feasibility."
  },
  {
    step: "2",
    title: "Custom Design",
    description: "Detailed system design with 3D modeling, shading analysis, and accurate ROI calculation."
  },
  {
    step: "3",
    title: "Approval & Permits",
    description: "We handle all paperwork: KSEB approvals, subsidies, building permits. You just sign."
  },
  {
    step: "4",
    title: "Professional Installation",
    description: "Certified technicians complete installation in 1-2 days with minimal disruption."
  },
  {
    step: "5",
    title: "Commissioning & Handover",
    description: "Final inspection, grid connection, monitoring setup, and complete system training."
  },
  {
    step: "6",
    title: "Ongoing Support",
    description: "25-year warranty, performance monitoring, maintenance, and dedicated customer service."
  }
];

export default function ServicesPage() {
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
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-[#182954] opacity-60"
                 style={{ letterSpacing: '-0.01em' }}>
                Complete solar solutions from design to decades of support.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                {...fadeInUp}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <GlassCard className="h-full">
                  <h3 className="text-2xl font-bold text-[#182954] mb-4"
                      style={{ letterSpacing: '-0.02em' }}>
                    {service.title}
                  </h3>
                  <p className="text-[#182954] opacity-70 mb-6"
                     style={{ letterSpacing: '-0.01em' }}>
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-[#BB1F2C] mt-1 flex-shrink-0">✓</span>
                        <span className="text-[#182954] opacity-70"
                              style={{ letterSpacing: '-0.01em' }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="w-full bg-[#F8F9FA] py-16 md:py-24 -my-8 md:-my-12">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <motion.h2
              {...fadeInUp}
              className="text-[42px] md:text-[48px] font-bold text-center text-[#182954] mb-6"
              style={{ letterSpacing: '-0.03em' }}
            >
              How We Work
            </motion.h2>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-center text-xl text-[#182954] opacity-60 mb-16 max-w-[700px] mx-auto"
              style={{ letterSpacing: '-0.01em' }}
            >
              From first call to ongoing support, we handle everything.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8">
              {process.map((item, i) => (
                <motion.div
                  key={item.step}
                  {...fadeInUp}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <GlassCard>
                    <div className="text-[48px] font-bold text-[#BB1F2C] mb-4"
                         style={{ letterSpacing: '-0.03em' }}>
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-[#182954] mb-3"
                        style={{ letterSpacing: '-0.02em' }}>
                      {item.title}
                    </h3>
                    <p className="text-[#182954] opacity-70"
                       style={{ letterSpacing: '-0.01em' }}>
                      {item.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.h2
            {...fadeInUp}
            className="text-[42px] md:text-[48px] font-bold text-center text-[#182954] mb-16"
            style={{ letterSpacing: '-0.03em' }}
          >
            Why Sakthi Solar
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "15+ Years Experience",
                description: "Deep expertise in Kerala climate, regulations, and energy patterns."
              },
              {
                title: "Turnkey Solutions",
                description: "We handle everything from permits to monitoring. You just enjoy the savings."
              },
              {
                title: "Tier-1 Components",
                description: "Only premium brands with proven Kerala performance and global warranties."
              },
              {
                title: "Transparent Pricing",
                description: "No hidden costs. Fixed quotes. Clear payment schedules."
              },
              {
                title: "25-Year Warranty",
                description: "Industry-leading coverage on panels, inverters, and workmanship."
              },
              {
                title: "Local Support",
                description: "Kerala-based team available for service, maintenance, and emergencies."
              }
            ].map((reason, i) => (
              <motion.div
                key={reason.title}
                {...fadeInUp}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <GlassCard>
                  <h3 className="text-xl font-bold text-[#182954] mb-3"
                      style={{ letterSpacing: '-0.02em' }}>
                    {reason.title}
                  </h3>
                  <p className="text-[#182954] opacity-70"
                     style={{ letterSpacing: '-0.01em' }}>
                    {reason.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
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
                Ready to Go Solar?
              </h2>
              <p className="text-xl text-[#182954] opacity-60 mb-8"
                 style={{ letterSpacing: '-0.01em' }}>
                Schedule your free site inspection today.
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
                Book Consultation
              </motion.a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
