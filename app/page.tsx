"use client";
import { Estimator } from "@/components/Estimator";
import { useLang } from "@/components/Lang";
import { t } from "@/lib/i18n";
import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/GradientButton";
import { useState } from "react";

export default function Page() {
  const lang = useLang();
  const [activeFilter, setActiveFilter] = useState("all");

  const benefits = [
    { icon: "💰", text: "Save up to 90% on KSEB Bills", color: "from-yellow-500 to-orange-500" },
    { icon: "⚡", text: "MNRE Subsidy Available (₹18,000/kW)", color: "from-blue-500 to-cyan-500" },
    { icon: "🌧️", text: "Kerala Monsoon-Tested Design", color: "from-green-500 to-teal-500" },
    { icon: "🔧", text: "Minimal Maintenance Required", color: "from-purple-500 to-pink-500" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Kadavanthra, Kochi",
      rating: 5,
      text: "Installed a 5kW system last year. My KSEB bill dropped from ₹8,000 to ₹1,500! Net metering setup was hassle-free. The panels survived last monsoon without any issues.",
      avatar: "👨‍💼",
      system: "5kW On-Grid"
    },
    {
      name: "Priya Menon",
      location: "Pattom, Thiruvananthapuram",
      rating: 5,
      text: "Sakthi Solar completed my 3kW rooftop installation in just 2 days. Everything from KSEB paperwork to MNRE subsidy was handled by their team. Already seeing 70% reduction in bills!",
      avatar: "👩‍💼",
      system: "3kW On-Grid"
    },
    {
      name: "Mohammed Ali",
      location: "Mavoor Road, Kozhikode",
      rating: 5,
      text: "Got a hybrid 7kW system with battery backup. No more power cuts affecting my business! ROI will be in 4 years. Professional installation and excellent after-sales support.",
      avatar: "👨‍🔧",
      system: "7kW Hybrid"
    }
  ];

  const techSpecs = [
    {
      title: "Certifications & Compliance",
      items: [
        "✓ MNRE Approved Channel Partner - Eligible for Central Government Subsidies",
        "✓ BIS Certified Components - All panels & inverters meet IS standards",
        "✓ KSEB Net-Metering Ready - Approved for grid connection",
        "✓ Kerala State Electricity Board Empanelled Vendor"
      ]
    },
    {
      title: "Warranty & Support",
      items: [
        "🛡️ 25 Years Linear Performance Warranty (Tier-1 Panels)",
        "🔧 10 Years Comprehensive Inverter Warranty",
        "⚙️ 5 Years Installation & Workmanship Warranty",
        "📞 24/7 Kerala-based Technical Support Team"
      ]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
        {/* Background image (shows immediately, video optional) */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-rooftop.jpg"
            alt="Solar panels on rooftop"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              {t(lang, "home.title")}
            </h1>

            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-xl">
              {t(lang, "home.desc")}
            </p>

            {/* CTA Buttons - Tesla Style */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ backgroundColor: "#E82127" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-white text-black font-semibold rounded transition-all"
              >
                Order Now
              </motion.button>
              <motion.a
                href="#calculator"
                whileHover={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded transition-all"
              >
                Calculate Savings
              </motion.a>
            </motion.div>

            {/* Stats - Tesla Style */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex flex-wrap gap-8 text-sm"
            >
              <div>
                <div className="text-2xl font-bold text-white">₹18,000/kW</div>
                <div className="text-gray-400">MNRE Subsidy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">90%</div>
                <div className="text-gray-400">Bill Reduction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">25 Years</div>
                <div className="text-gray-400">Warranty</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image - Replace with actual solar panel image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden md:block"
          >
            <img
              src="/images/solar-panels-hero.jpg"
              alt="Kerala Rooftop Solar Installation"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Calculator Section - Tesla Minimal Style */}
      <section id="calculator" className="py-20 bg-black relative">
        <div className="relative mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Calculate Your Solar Savings
            </h2>
            <p className="text-gray-400 text-lg">
              See how much you can save with solar
            </p>
          </motion.div>
          <Estimator />
        </div>
      </section>

      {/* Gallery Section - Tesla Clean Grid */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg">
              Real installations across Kerala
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {["residential-kochi", "commercial-tvm", "industrial-calicut", "rooftop-thrissur", "hybrid-kannur", "villa-ernakulam"].map((n, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative overflow-hidden aspect-square group cursor-pointer"
              >
                {/* Replace with actual project images */}
                <img
                  src={`/images/projects/${n}.jpg`}
                  alt={n.replace("-", " ")}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-semibold capitalize mb-1">{n.replace("-", " ")}</h3>
                    <p className="text-sm">View Details →</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Minimal */}
      <section className="py-20 bg-zinc-900 relative">
        <div className="relative mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Customer Stories
            </h2>
            <p className="text-gray-400 text-lg">
              Thousands of Kerala homes powered by solar
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-800 p-8 rounded"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, j) => (
                    <span key={j} className="text-white text-xl">★</span>
                  ))}
                </div>

                <p className="text-gray-300 mb-6">&ldquo;{item.text}&rdquo;</p>

                <div>
                  <h4 className="font-semibold text-white">{item.name}</h4>
                  <p className="text-sm text-gray-400">{item.location}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.system}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section - Tesla Clean Layout */}
      <section className="py-20 bg-black relative">
        <div className="relative mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical Specifications
            </h2>
            <p className="text-gray-400 text-lg">
              MNRE certified components with comprehensive warranties
            </p>
          </motion.div>

          <div className="space-y-12">
            {techSpecs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-t border-gray-800 pt-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  {spec.title}
                </h3>
                <ul className="space-y-3">
                  {spec.items.map((item, j) => (
                    <li key={j} className="text-gray-400 text-lg">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section - Add Installation/Product Video */}
      <section className="py-20 bg-zinc-900 relative">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              See Solar in Action
            </h2>
            <p className="text-gray-400 text-lg">
              Watch how we transform Kerala homes
            </p>
          </motion.div>

          {/* Video Player - Shows thumbnail until video is added */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-video bg-black rounded-lg overflow-hidden relative group cursor-pointer"
          >
            <img
              src="/images/video-thumbnail.jpg"
              alt="Solar installation video"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-l-[20px] border-l-black border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-2" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-black relative">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Go Solar?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Schedule a free consultation and site survey
            </p>
            <motion.button
              whileHover={{ backgroundColor: "#E82127" }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-4 bg-white text-black font-semibold rounded text-lg transition-all"
            >
              Get Started
            </motion.button>
            <p className="mt-6 text-sm text-gray-500">
              Serving Kochi · Thiruvananthapuram · Kozhikode · Thrissur · Kannur · All Kerala
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
