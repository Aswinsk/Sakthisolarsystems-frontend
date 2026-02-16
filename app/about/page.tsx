"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { GlassCard } from "@/components/ui/GlassCard";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const stats = [
  { number: "2000+", label: "Systems Installed" },
  { number: "15+", label: "Years Experience" },
  { number: "98%", label: "Customer Satisfaction" },
  { number: "50MW+", label: "Total Capacity" }
];

const values = [
  {
    title: "Quality First",
    description: "Premium components from trusted global manufacturers. Every installation meets international standards."
  },
  {
    title: "Transparency",
    description: "Clear pricing, honest timelines, no hidden costs. You know exactly what you're getting."
  },
  {
    title: "Local Expertise",
    description: "Deep understanding of Kerala's climate, regulations, and energy needs. We're your neighbors."
  },
  {
    title: "Lifetime Support",
    description: "25-year warranty backed by responsive service. We're here for the long run."
  }
];

const team = [
  {
    role: "Engineering",
    description: "Certified solar engineers with expertise in system design, installation, and maintenance."
  },
  {
    role: "Project Management",
    description: "Experienced coordinators ensuring on-time delivery and seamless approvals."
  },
  {
    role: "Customer Support",
    description: "Dedicated support team available for monitoring, troubleshooting, and service."
  }
];

export default function AboutPage() {
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
                Powering Kerala&apos;s Energy Independence
              </h1>
              <p className="text-xl md:text-2xl text-[#182954] opacity-60"
                 style={{ letterSpacing: '-0.01em' }}>
                Since 2008, we&apos;ve helped thousands of Kerala families and businesses switch to clean, cost-effective solar energy.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  {...fadeInUp}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-[48px] md:text-[56px] font-bold text-[#BB1F2C] mb-2"
                       style={{ letterSpacing: '-0.03em' }}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-[#182954] opacity-60"
                       style={{ letterSpacing: '-0.01em' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="w-full bg-[#F8F9FA] py-16 md:py-24 -my-8 md:-my-12">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeInUp}>
                <h2 className="text-[42px] md:text-[48px] font-bold text-[#182954] mb-6"
                    style={{ letterSpacing: '-0.03em' }}>
                  Our Story
                </h2>
                <div className="space-y-4 text-[#182954] opacity-70 text-lg"
                     style={{ letterSpacing: '-0.01em' }}>
                  <p>
                    Founded in 2008, Sakthi Solar Systems began with a simple mission: make solar energy accessible and affordable for every Kerala household.
                  </p>
                  <p>
                    What started as a small team of engineers has grown into Kerala&apos;s most trusted solar provider. We&apos;ve installed over 2,000 systems across the state—from Thiruvananthapuram to Kasaragod.
                  </p>
                  <p>
                    Every installation teaches us something new. Every customer relationship strengthens our commitment. We&apos;re not just installing panels—we&apos;re building a cleaner future for Kerala.
                  </p>
                </div>
              </motion.div>

              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/solar-panels-hero.jpg"
                    alt="Sakthi Solar installation in Kerala"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.h2
            {...fadeInUp}
            className="text-[42px] md:text-[48px] font-bold text-center text-[#182954] mb-16"
            style={{ letterSpacing: '-0.03em' }}
          >
            What We Stand For
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                {...fadeInUp}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <GlassCard className="h-full">
                  <h3 className="text-2xl font-bold text-[#182954] mb-4"
                      style={{ letterSpacing: '-0.02em' }}>
                    {value.title}
                  </h3>
                  <p className="text-[#182954] opacity-70 text-lg"
                     style={{ letterSpacing: '-0.01em' }}>
                    {value.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="w-full bg-[#F8F9FA] py-16 md:py-24 -my-8 md:-my-12">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <motion.h2
              {...fadeInUp}
              className="text-[42px] md:text-[48px] font-bold text-center text-[#182954] mb-6"
              style={{ letterSpacing: '-0.03em' }}
            >
              Expert Team
            </motion.h2>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-center text-xl text-[#182954] opacity-60 mb-16 max-w-[700px] mx-auto"
              style={{ letterSpacing: '-0.01em' }}
            >
              Certified professionals committed to delivering exceptional solar solutions.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <motion.div
                  key={member.role}
                  {...fadeInUp}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <GlassCard>
                    <h3 className="text-xl font-bold text-[#182954] mb-3"
                        style={{ letterSpacing: '-0.02em' }}>
                      {member.role}
                    </h3>
                    <p className="text-[#182954] opacity-70"
                       style={{ letterSpacing: '-0.01em' }}>
                      {member.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
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
                Book a free consultation with our team.
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
                Get Started
              </motion.a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
