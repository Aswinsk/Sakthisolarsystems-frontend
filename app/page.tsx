"use client";
import { Estimator } from "@/components/Estimator";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white">
      {/* Main content wrapper with 100px gaps */}
      <div className="flex flex-col gap-[100px] py-[100px]">

        {/* 1. Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          {/* Gradient blobs */}
          <div className="gradient-blob blob-red animate-float" style={{
            top: '-200px', right: '-200px',
            width: '600px', height: '600px'
          }} />
          <div className="gradient-blob blob-navy" style={{
            bottom: '-150px', left: '-150px',
            width: '500px', height: '500px',
            animationDelay: '4s'
          }} />

          {/* Minimal dot pattern */}
          <div className="absolute inset-0 dots-pattern-minimal" />

          <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 w-full">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="text-[56px] md:text-[72px] leading-[1.1] font-bold text-[#182954] mb-6"
                style={{ letterSpacing: '-0.04em' }}
              >
                Clean Energy for Kerala
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl"
                style={{ letterSpacing: '-0.01em' }}
              >
                Future-ready solar systems that reduce costs and deliver independence. Built to last.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{
                      y: -2,
                      boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 8px 24px rgba(187, 31, 44, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 rounded-xl text-base font-medium"
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
                    Start Now
                  </motion.button>
                </Link>

                <Link href="#projects">
                  <motion.button
                    whileHover={{
                      borderColor: 'rgba(187, 31, 44, 0.5)',
                      color: '#BB1F2C',
                      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 8px 24px rgba(187, 31, 44, 0.12)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 rounded-xl text-base font-medium text-[#182954]"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.4))',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      border: '1.5px solid rgba(24, 41, 84, 0.3)',
                      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 4px 16px rgba(24, 41, 84, 0.08)',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    View Work
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Trust & Social Proof */}
        <section className="w-full">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <motion.h2
              {...fadeInUp}
              className="text-[42px] md:text-[48px] font-bold text-center text-[#182954] mb-16"
              style={{ letterSpacing: '-0.03em' }}
            >
              Trusted Across Kerala
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                { number: "500+", label: "Installations" },
                { number: "10MW+", label: "Power Generated" },
                { number: "25-Year", label: "Warranty" },
                { number: "100%", label: "Subsidy Support" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-bold text-[#182954] mb-2"
                       style={{ letterSpacing: '-0.03em' }}>
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-400"
                       style={{ letterSpacing: '-0.01em' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.5 }}
              className="text-base text-[#182954] text-center font-medium"
              style={{ letterSpacing: '-0.01em' }}
            >
              Trusted systems. Transparent pricing.
            </motion.p>
          </div>
        </section>

        {/* 3. Why Solar - Merged Problem/Solution */}
        <section className="w-full bg-[#F8F9FA] py-24 -my-12">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <motion.h2
              {...fadeInUp}
              className="text-[42px] md:text-[48px] font-bold text-center text-[#182954] mb-6"
              style={{ letterSpacing: '-0.03em' }}
            >
              Rising Bills. Unreliable Power.
            </motion.h2>

            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl text-center text-[#182954] mb-16 max-w-2xl mx-auto"
              style={{ letterSpacing: '-0.01em' }}
            >
              Solar solves both.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "Lower bills",
                "Net metering",
                "Clean energy",
                "Long-term ROI"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-6 rounded-xl hover-lift-subtle"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6))',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 4px 16px rgba(24, 41, 84, 0.06)'
                  }}
                >
                  <span className="text-[#BB1F2C] text-2xl">✓</span>
                  <span className="text-[#182954] text-lg font-medium"
                        style={{ letterSpacing: '-0.01em' }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Solutions */}
        <section className="w-full">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <motion.h2
              {...fadeInUp}
              className="text-[42px] md:text-[48px] font-bold text-center text-[#182954] mb-6"
              style={{ letterSpacing: '-0.03em' }}
            >
              Solar Solutions
            </motion.h2>

            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16"
              style={{ letterSpacing: '-0.01em' }}
            >
              Designed for Every Energy Need
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Rooftop Solar",
                  desc: "Grid-connected systems for homes and businesses."
                },
                {
                  title: "On-Grid Systems",
                  desc: "Export excess power with net metering benefits."
                },
                {
                  title: "Off-Grid Systems",
                  desc: "Complete independence with battery storage."
                },
                {
                  title: "Hybrid Systems",
                  desc: "Grid connectivity plus battery backup."
                }
              ].map((solution, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-8 rounded-xl transition-all cursor-pointer border border-gray-100"
                  style={{
                    background: 'white'
                  }}
                >
                  <h3 className="text-xl font-bold text-[#182954] mb-3"
                      style={{ letterSpacing: '-0.01em' }}>
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed"
                     style={{ letterSpacing: '-0.01em' }}>
                    {solution.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Process - Simplified to 3 steps */}
        <section className="w-full bg-[#F8F9FA] py-24 -my-12">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <motion.h2
              {...fadeInUp}
              className="text-[42px] md:text-[48px] font-bold text-center text-[#182954] mb-16"
              style={{ letterSpacing: '-0.03em' }}
            >
              How It Works
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { num: "01", title: "Consult", desc: "Site inspection and custom design" },
                { num: "02", title: "Install", desc: "Professional installation and approvals" },
                { num: "03", title: "Monitor", desc: "Performance tracking and support" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className="text-6xl font-bold text-[#BB1F2C] mb-4 opacity-20"
                       style={{ letterSpacing: '-0.04em' }}>
                    {item.num}
                  </div>
                  <h3 className="text-2xl font-bold text-[#182954] mb-3"
                      style={{ letterSpacing: '-0.02em' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600"
                     style={{ letterSpacing: '-0.01em' }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.6 }}
              className="text-sm text-gray-400 text-center mt-16"
              style={{ letterSpacing: '-0.01em' }}
            >
              We assist with MNRE subsidies and net metering approvals
            </motion.p>
          </div>
        </section>

        {/* 6. Projects Showcase */}
        <section id="projects" className="w-full">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <motion.h2
              {...fadeInUp}
              className="text-[42px] md:text-[48px] font-bold text-center text-[#182954] mb-16"
              style={{ letterSpacing: '-0.03em' }}
            >
              Recent Installations
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: "Residential – Kochi", size: "5kW On-Grid" },
                { name: "Commercial – Thrissur", size: "25kW Hybrid" },
                { name: "Residential – Trivandrum", size: "8kW Rooftop" }
              ].map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl bg-white border border-gray-100"
                >
                  <Image
                    src={`/images/projects/${["residential-kochi", "commercial-tvm", "rooftop-thrissur"][i]}.jpg`}
                    alt={project.name}
                    width={800}
                    height={320}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                    style={{
                      background: 'linear-gradient(to top, rgba(24, 41, 84, 0.9), rgba(24, 41, 84, 0.3), transparent)',
                      backdropFilter: 'blur(4px)',
                      WebkitBackdropFilter: 'blur(4px)'
                    }}
                  >
                    <div className="p-6 text-white w-full">
                      <h3 className="text-xl font-bold mb-1"
                          style={{ letterSpacing: '-0.01em' }}>
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-200"
                         style={{ letterSpacing: '-0.01em' }}>
                        {project.size}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Calculator Section */}
        <section className="w-full bg-[#F8F9FA] py-24 -my-12">
          <div className="max-w-[800px] mx-auto px-6 md:px-12">
            <motion.h2
              {...fadeInUp}
              className="text-[42px] md:text-[48px] font-bold text-center text-[#182954] mb-6"
              style={{ letterSpacing: '-0.03em' }}
            >
              Calculate Your Savings
            </motion.h2>

            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 text-center mb-12"
              style={{ letterSpacing: '-0.01em' }}
            >
              See how much you can save with solar
            </motion.p>

            <Estimator />
          </div>
        </section>

        {/* 8. Final CTA */}
        <section className="w-full relative overflow-hidden">
          {/* Gradient blobs */}
          <div className="gradient-blob blob-navy animate-float" style={{
            top: '-100px', left: '50%',
            transform: 'translateX(-50%)',
            width: '800px', height: '800px',
            animationDelay: '2s'
          }} />

          <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 relative z-10 text-center">
            <motion.h2
              {...fadeInUp}
              className="text-[48px] md:text-[56px] font-bold text-[#182954] mb-6"
              style={{ letterSpacing: '-0.03em' }}
            >
              Ready for Solar?
            </motion.h2>

            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-12"
              style={{ letterSpacing: '-0.01em' }}
            >
              Book your free consultation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{
                    y: -2,
                    boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 12px 32px rgba(187, 31, 44, 0.5)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-12 py-5 rounded-xl text-lg font-medium"
                  style={{
                    background: 'linear-gradient(135deg, rgba(187, 31, 44, 0.85), rgba(187, 31, 44, 0.75))',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 8px 24px rgba(187, 31, 44, 0.4)',
                    color: 'white',
                    letterSpacing: '-0.01em'
                  }}
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
