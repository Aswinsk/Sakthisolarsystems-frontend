"use client";
import { Estimator } from "@/components/Estimator";
import { useLang } from "@/components/Lang";
import { motion } from "framer-motion";

export default function Page() {
  const lang = useLang();

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0B1220]">
        <div className="absolute inset-0">
          <img
            src="/images/hero-rooftop.jpg"
            alt="Solar panels"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6"
          >
            Solar Panels
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Schedule a Virtual Consultation
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-[#BB1F2C] text-white px-12 py-4 rounded-sm text-lg font-medium hover:bg-[#892238] transition-colors"
          >
            Order Now
          </motion.button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-[#0B1220] mb-2">₹18,000</div>
              <div className="text-lg text-gray-600">Per kW Subsidy</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-[#0B1220] mb-2">90%</div>
              <div className="text-lg text-gray-600">Bill Reduction</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-[#0B1220] mb-2">25 Years</div>
              <div className="text-lg text-gray-600">Warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="min-h-screen flex items-center bg-[#182954]">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Electricity For Less
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Produce clean energy and help reduce your electricity costs. With MNRE subsidies and net metering, solar has never been more affordable in Kerala.
              </p>
              <a
                href="#calculator"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-sm font-medium hover:bg-white hover:text-[#182954] transition-colors"
              >
                Calculate Savings
              </a>
            </div>
            <div>
              <img
                src="/images/solar-panels-hero.jpg"
                alt="Solar installation"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-[#0B1220] mb-16">
            Solar Calculator
          </h2>
          <Estimator />
        </div>
      </section>

      {/* Projects Grid - Full Width */}
      <section className="bg-[#0B1220]">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-16 text-center">
            Our Work
          </h2>
          <div className="grid md:grid-cols-3 gap-2">
            {["residential-kochi", "commercial-tvm", "industrial-calicut", "rooftop-thrissur", "hybrid-kannur", "villa-ernakulam"].map((n) => (
              <div key={n} className="aspect-square overflow-hidden group cursor-pointer">
                <img
                  src={`/images/projects/${n}.jpg`}
                  alt={n.replace("-", " ")}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-[#0B1220] mb-16 text-center">
            Specifications
          </h2>
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold text-[#182954] mb-6">
                Certifications
              </h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>MNRE Approved Channel Partner</li>
                <li>BIS Certified Components</li>
                <li>KSEB Net-Metering Ready</li>
                <li>Kerala State Electricity Board Empanelled</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#182954] mb-6">
                Warranty
              </h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>25 Years Panel Performance Warranty</li>
                <li>10 Years Inverter Warranty</li>
                <li>5 Years Installation Warranty</li>
                <li>24/7 Technical Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="min-h-screen flex items-center justify-center bg-[#182954] text-center px-4">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Schedule a free consultation and site survey
          </p>
          <button className="bg-[#BB1F2C] text-white px-12 py-4 rounded-sm text-lg font-medium hover:bg-[#892238] transition-colors">
            Get Started
          </button>
          <p className="mt-12 text-sm text-gray-400">
            Serving all of Kerala
          </p>
        </div>
      </section>
    </div>
  );
}
