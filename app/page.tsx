"use client";
import { Estimator } from "@/components/Estimator";
import { motion } from "framer-motion";
import Link from "next/link";

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
              Clean, reliable and future-ready solar systems for homes and businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ y: -2, boxShadow: "0 12px 24px rgba(164, 208, 55, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#A4D037] text-[#111111] px-8 py-4 rounded-lg text-base font-medium transition-shadow"
              >
                Get Free Consultation
              </motion.button>

              <motion.button
                whileHover={{ y: -2, borderColor: "#0B3D2E" }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-gray-300 text-[#111111] px-8 py-4 rounded-lg text-base font-medium transition-all"
              >
                View Projects
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center text-[#111111] mb-16"
          >
            Trusted by 500+ Customers Across Kerala
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Installations" },
              { number: "10MW+", label: "Generated" },
              { number: "25-Year", label: "Performance" },
              { number: "100%", label: "Subsidy Support" }
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
                <div className="text-base text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="py-32 bg-[#F7F9FB]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div {...fadeInUp}>
              <h2 className="text-[42px] md:text-[48px] font-bold text-[#111111] leading-tight">
                Tired of Rising Electricity Bills?
              </h2>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Kerala households are facing increasing KSEB charges every year. Traditional energy costs continue to climb while solar provides a fixed, predictable alternative.
              </p>
              <ul className="space-y-3">
                {[
                  "Average bills increasing 12% annually",
                  "Peak-hour charges hitting family budgets",
                  "No control over energy costs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-[#A4D037] text-xl">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            {...fadeInUp}
            className="bg-white rounded-2xl p-12 md:p-16 shadow-sm"
          >
            <h2 className="text-[42px] md:text-[48px] font-bold text-[#0B3D2E] mb-6 text-center">
              Smart Solar Systems Designed for Savings
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Lock in your energy costs for 25+ years. Generate clean power, reduce bills by up to 90%, and benefit from MNRE subsidies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Solar Solutions */}
      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.h2
            {...fadeInUp}
            className="text-[42px] md:text-[48px] font-bold text-center text-[#111111] mb-16"
          >
            Our Solar Solutions
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Rooftop Solar",
                desc: "Perfect for homes and small businesses looking to offset daytime consumption.",
                icon: "🏠"
              },
              {
                title: "On-Grid Systems",
                desc: "Connect to KSEB grid with net metering for maximum savings and reliability.",
                icon: "⚡"
              },
              {
                title: "Off-Grid Systems",
                desc: "Complete energy independence with battery storage for remote locations.",
                icon: "🔋"
              },
              {
                title: "Hybrid Systems",
                desc: "Best of both worlds—grid connection plus battery backup for power security.",
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
                <h3 className="text-2xl font-bold text-[#111111] mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {solution.desc}
                </p>
                <span className="text-[#0B3D2E] font-medium group-hover:underline">
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
            className="text-[42px] md:text-[48px] font-bold text-center text-[#111111] mb-20"
          >
            How It Works
          </motion.h2>

          <div className="grid md:grid-cols-5 gap-6 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0B3D2E] via-[#A4D037] to-[#0B3D2E] opacity-20" />

            {[
              { step: "1", title: "Site Inspection", desc: "Free assessment of your property" },
              { step: "2", title: "Custom Design", desc: "Tailored system proposal" },
              { step: "3", title: "Installation", desc: "Professional setup in 2-3 days" },
              { step: "4", title: "Net Metering", desc: "KSEB approval assistance" },
              { step: "5", title: "Monitoring", desc: "24/7 performance tracking" }
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
                <h3 className="text-xl font-bold text-[#111111] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.h2
            {...fadeInUp}
            className="text-[42px] md:text-[48px] font-bold text-center text-[#111111] mb-16"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Residential Villa, Kochi", size: "5 kW" },
              { name: "Commercial Building, TVM", size: "25 kW" },
              { name: "Industrial Unit, Calicut", size: "100 kW" },
              { name: "Rooftop System, Thrissur", size: "7 kW" },
              { name: "Hybrid Setup, Kannur", size: "10 kW" },
              { name: "Premium Home, Ernakulam", size: "8 kW" }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
              >
                <img
                  src={`/images/projects/${["residential-kochi", "commercial-tvm", "industrial-calicut", "rooftop-thrissur", "hybrid-kannur", "villa-ernakulam"][i]}.jpg`}
                  alt={project.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                    <p className="text-sm text-gray-300">System Size: {project.size}</p>
                  </div>
                </div>
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
            className="text-[56px] md:text-[64px] font-bold text-[#111111] mb-6"
          >
            Start Saving with Solar Today
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Book a free site visit and discover how much you can save with intelligent solar energy.
          </motion.p>
          <motion.button
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -2, boxShadow: "0 12px 24px rgba(164, 208, 55, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#A4D037] text-[#111111] px-12 py-5 rounded-lg text-lg font-medium"
          >
            Book Free Site Visit
          </motion.button>
          <p className="text-sm text-gray-500 mt-8">
            Serving Kochi, Thiruvananthapuram, Kozhikode, Thrissur, Kannur & all of Kerala
          </p>
        </div>
      </section>
    </div>
  );
}
