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
      {/* Hero Section - Full Viewport */}
      <section className="min-h-screen flex items-center bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]"
             style={{
               backgroundImage: `radial-gradient(circle, #0B3D2E 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }}
        />

        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[56px] md:text-[72px] leading-[1.1] font-bold text-[#111111] mb-6"
            >
              Powering Kerala with Intelligent Solar Energy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl"
            >
              Clean. Reliable. Future-ready solar systems designed for homes and businesses.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base md:text-lg text-gray-500 mb-10 leading-relaxed max-w-2xl"
            >
              We help you reduce electricity bills, increase energy independence, and invest in a smarter tomorrow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ y: -2, boxShadow: "0 12px 24px rgba(164, 208, 55, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#A4D037] text-[#111111] px-8 py-4 rounded-lg text-base font-medium transition-shadow"
                >
                  Get Free Consultation
                </motion.button>
              </Link>

              <Link href="#projects">
                <motion.button
                  whileHover={{ y: -2, borderColor: "#0B3D2E" }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-gray-300 text-[#111111] px-8 py-4 rounded-lg text-base font-medium transition-all"
                >
                  View Our Projects
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center text-[#111111] mb-6"
          >
            Trusted Across Kerala
          </motion.h2>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16"
          >
            Over the years, Sakthi Solar has helped hundreds of homeowners and businesses transition to clean energy with confidence.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { number: "500+", label: "Installations Completed" },
              { number: "10MW+", label: "Solar Power Generated" },
              { number: "25-Year", label: "Performance Warranty" },
              { number: "100%", label: "Government Subsidy Support" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center border-l-2 border-gray-200 first:border-l-0"
              >
                <div className="text-5xl md:text-6xl font-bold text-[#0B3D2E] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            className="text-base text-gray-700 text-center font-medium"
          >
            Reliable systems. Transparent pricing. Long-term value.
          </motion.p>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="py-32 bg-[#F7F9FB]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div {...fadeInUp}>
              <h2 className="text-[42px] md:text-[48px] font-bold text-[#111111] leading-tight mb-6">
                Rising Electricity Bills? Uncertain Power Supply?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Energy costs are increasing year after year. Grid instability, power cuts, and generator dependency continue to impact homes and businesses.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <p className="text-2xl md:text-3xl font-bold text-[#0B3D2E] mb-6 leading-tight">
                Solar energy is no longer optional — it&apos;s essential.
              </p>
            </motion.div>
          </div>

          <motion.div
            {...fadeInUp}
            className="bg-white rounded-2xl p-12 md:p-16 shadow-sm"
          >
            <h2 className="text-[42px] md:text-[48px] font-bold text-[#0B3D2E] mb-6 text-center leading-tight">
              Smart Solar Systems Built for Long-Term Savings
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
              At Sakthi Solar, we design and install efficient, high-performance solar systems tailored to your property and usage needs.
            </p>
            <ul className="space-y-3 max-w-2xl mx-auto">
              {[
                "Lower monthly electricity bills",
                "Protection against tariff increases",
                "Net metering benefits",
                "Clean renewable energy",
                "Long-term return on investment"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-lg">
                  <span className="text-[#A4D037] text-2xl mt-[-4px]">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-center text-xl font-medium text-[#111111] mt-10">
              Make the switch once. Save for decades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Solar Solutions */}
      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.h2
            {...fadeInUp}
            className="text-[42px] md:text-[48px] font-bold text-center text-[#111111] mb-6"
          >
            Our Solar Solutions
          </motion.h2>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16"
          >
            Designed for Every Energy Need
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Rooftop Solar Systems",
                desc: "Efficient rooftop solar installations designed for residential and commercial properties.",
                icon: "🏠"
              },
              {
                title: "On-Grid Solar Systems",
                desc: "Connected directly to the electricity board, allowing you to export excess power and benefit from net metering.",
                icon: "⚡"
              },
              {
                title: "Off-Grid Solar Systems",
                desc: "Complete energy independence with battery storage. Ideal for remote areas and backup reliability.",
                icon: "🔋"
              },
              {
                title: "Hybrid Solar Systems",
                desc: "The best of both worlds — grid connectivity combined with battery backup for uninterrupted power.",
                icon: "🔌"
              }
            ].map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.08)" }}
                className="bg-white border border-gray-200 rounded-xl p-8 transition-all cursor-pointer group"
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {solution.desc}
                </p>
                <span className="text-[#0B3D2E] font-medium group-hover:underline text-sm">
                  Learn More →
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-[#F7F9FB]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.h2
            {...fadeInUp}
            className="text-[42px] md:text-[48px] font-bold text-center text-[#111111] mb-6"
          >
            How It Works
          </motion.h2>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-20"
          >
            Simple. Transparent. Efficient.
          </motion.p>

          <div className="grid md:grid-cols-5 gap-6 relative mb-16">
            {/* Connection line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0B3D2E] via-[#A4D037] to-[#0B3D2E] opacity-20" />

            {[
              { step: "1", title: "Free Site Inspection", desc: "Our experts assess your property, roof structure, and energy consumption." },
              { step: "2", title: "Custom System Design", desc: "We design a system tailored to maximise output and long-term savings." },
              { step: "3", title: "Professional Installation", desc: "Certified technicians install your system with strict quality standards." },
              { step: "4", title: "Net Metering & Documentation", desc: "We handle approvals, applications, and compliance paperwork." },
              { step: "5", title: "Monitoring & Support", desc: "Ongoing performance monitoring and post-installation support." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center relative"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white border-4 border-[#A4D037] flex items-center justify-center relative z-10">
                  <span className="text-3xl font-bold text-[#0B3D2E]">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.8 }}
            className="text-xl font-medium text-center text-[#111111]"
          >
            Solar made simple.
          </motion.p>
        </div>
      </section>

      {/* Why Choose Sakthi Solar */}
      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.h2
            {...fadeInUp}
            className="text-[42px] md:text-[48px] font-bold text-center text-[#111111] mb-6"
          >
            Why Choose Sakthi Solar
          </motion.h2>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16"
          >
            Built on Trust. Driven by Quality.
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed">
              We are not just installers — we are long-term energy partners.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Tier-1 solar panels",
                "High-efficiency inverters",
                "Professional engineering team",
                "Transparent quotations",
                "No hidden costs",
                "Long-term service support"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-gray-700 text-base"
                >
                  <span className="text-[#A4D037] text-2xl">•</span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-lg font-medium text-center text-[#111111]">
              Every installation is executed with precision and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-32 bg-[#F7F9FB]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.h2
            {...fadeInUp}
            className="text-[42px] md:text-[48px] font-bold text-center text-[#111111] mb-6"
          >
            Our Recent Installations
          </motion.h2>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16"
          >
            From small residential rooftops to large commercial projects, our work speaks for itself.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              { name: "Residential – Kochi", size: "5kW On-Grid Solar System", location: "Kochi" },
              { name: "Commercial – Thrissur", size: "25kW Hybrid Installation", location: "Thrissur" },
              { name: "Residential – Trivandrum", size: "8kW Rooftop Solar", location: "Trivandrum" }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg bg-white border border-gray-200"
              >
                <Image
                  src={`/images/projects/${["residential-kochi", "commercial-tvm", "rooftop-thrissur"][i]}.jpg`}
                  alt={project.name}
                  width={800}
                  height={320}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                    <p className="text-sm text-gray-200">{project.size}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            className="text-base text-gray-700 text-center font-medium"
          >
            Clean installations. Maximum performance.
          </motion.p>
        </div>
      </section>

      {/* Subsidy Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.h2
            {...fadeInUp}
            className="text-[42px] md:text-[48px] font-bold text-center text-[#111111] mb-6"
          >
            Government Subsidy Support
          </motion.h2>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16"
          >
            Solar adoption is more affordable than ever.
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-700 mb-8 text-center">We assist you with:</p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                "MNRE subsidy eligibility",
                "Net metering approvals",
                "Application documentation",
                "Local electricity board coordination"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-gray-700 text-base bg-[#F7F9FB] p-4 rounded-lg"
                >
                  <span className="text-[#A4D037] text-2xl">•</span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-lg font-medium text-center text-[#111111]">
              Our team handles the paperwork so you can focus on savings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ROI / Savings Section */}
      <section className="py-32 bg-[#F7F9FB]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.h2
            {...fadeInUp}
            className="text-[42px] md:text-[48px] font-bold text-center text-[#111111] mb-6"
          >
            An Investment That Pays for Itself
          </motion.h2>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16"
          >
            A typical residential solar system:
          </motion.p>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              { stat: "70%", label: "Reduces electricity bills by up to" },
              { stat: "4–6", label: "Years to pay back" },
              { stat: "20+", label: "Years of savings delivered" },
              { stat: "↑", label: "Increases property value" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-white p-8 rounded-xl border border-gray-200"
              >
                <div className="text-5xl font-bold text-[#0B3D2E] mb-4">
                  {item.stat}
                </div>
                <p className="text-sm text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            className="text-xl font-medium text-center text-[#111111]"
          >
            Smart energy decisions today create financial freedom tomorrow.
          </motion.p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.h2
            {...fadeInUp}
            className="text-[42px] md:text-[48px] font-bold text-center text-[#111111] mb-16"
          >
            What Our Customers Say
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "Professional installation and clear communication throughout. Our electricity bill has dropped significantly.",
                name: "Homeowner, Ernakulam"
              },
              {
                quote: "Excellent service from consultation to net metering approval.",
                name: "Business Owner, Kochi"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-[#F7F9FB] p-8 rounded-xl border border-gray-200"
              >
                <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-sm font-medium text-[#0B3D2E]">
                  — {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-32 bg-[#F7F9FB]">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <motion.h2
            {...fadeInUp}
            className="text-[42px] md:text-[48px] font-bold text-center text-[#111111] mb-16"
          >
            Calculate Your Savings
          </motion.h2>
          <Estimator />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#F7F9FB]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <motion.h2
            {...fadeInUp}
            className="text-[56px] md:text-[64px] font-bold text-[#111111] mb-6 leading-tight"
          >
            Start Saving with Solar Today
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto"
          >
            Switch to clean, reliable energy with Sakthi Solar.
          </motion.p>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Book your free site inspection and receive a customised solar proposal.
          </motion.p>
          <Link href="/contact">
            <motion.button
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -2, boxShadow: "0 12px 24px rgba(164, 208, 55, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#A4D037] text-[#111111] px-12 py-5 rounded-lg text-lg font-medium"
            >
              Book Free Site Visit
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
