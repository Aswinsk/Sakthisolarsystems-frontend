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
    { icon: "💰", text: "Lower KSEB bills", color: "from-yellow-500 to-orange-500" },
    { icon: "⚡", text: "Net-metering ready", color: "from-blue-500 to-cyan-500" },
    { icon: "🌧️", text: "Monsoon-proof design", color: "from-green-500 to-teal-500" },
    { icon: "🔧", text: "Low maintenance", color: "from-purple-500 to-pink-500" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Kochi, Kerala",
      rating: 5,
      text: "Reduced my electricity bill by 75%! The installation was professional and the system works flawlessly even during monsoons.",
      avatar: "👨‍💼"
    },
    {
      name: "Priya Menon",
      location: "Thiruvananthapuram",
      rating: 5,
      text: "Best investment I've made! The payback period is exactly as estimated. Highly recommend Sakthi Solar.",
      avatar: "👩‍💼"
    },
    {
      name: "Mohammed Ali",
      location: "Kozhikode",
      rating: 5,
      text: "Excellent service and support. The team handled everything from permits to installation seamlessly.",
      avatar: "👨‍🔧"
    }
  ];

  const techSpecs = [
    {
      title: "Certifications",
      items: [
        "✓ MNRE Certified - Ministry of New and Renewable Energy",
        "✓ BIS Compliant - Bureau of Indian Standards",
        "✓ ISI Approved - Quality Assurance",
        "✓ ISO 9001:2015 Certified"
      ]
    },
    {
      title: "Warranty Coverage",
      items: [
        "🛡️ 25 Years Performance Warranty on Solar Panels",
        "🔧 10 Years Warranty on Inverters",
        "⚙️ 5 Years Comprehensive System Warranty",
        "📞 Lifetime Technical Support"
      ]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Animated Background */}
        <div className="absolute inset-0 animated-gradient opacity-20" />
        <div className="absolute inset-0 grid-pattern opacity-10" />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-40"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 glass-card text-sm text-primary font-semibold"
            >
              ⚡ MNRE Certified Solar Solutions
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text text-glow">
                {t(lang, "home.title")}
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t(lang, "home.desc")}
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-4 hover-lift cursor-pointer group"
                >
                  <div className={`text-3xl mb-2 bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                    {benefit.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                    {benefit.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <GradientButton className="px-8 py-4 text-lg">
                Get Free Quote 🚀
              </GradientButton>
              <motion.a
                href="#calculator"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl glass-strong text-white font-medium hover-glow transition-all"
              >
                Calculate Savings 📊
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative glass-card p-8 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
              <img
                src="/images/hero-rooftop.svg"
                alt="Kerala Rooftop Solar"
                className="relative w-full h-full object-cover rounded-2xl"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute bottom-4 right-4 glass-card p-4 neon-border"
              >
                <img
                  src="/images/inverter.svg"
                  alt="Solar Inverter"
                  className="w-32 rounded-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 dots-pattern opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Calculate Your Solar Savings
            </h2>
            <p className="text-gray-400 text-lg">
              Get instant estimates for your solar investment
            </p>
          </motion.div>
          <Estimator />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg">
              Powering Kerala, one rooftop at a time
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["hero-rooftop", "array", "industrial", "battery", "inverter", "kochi", "tvm", "kozhikode"].map((n, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card overflow-hidden hover-lift cursor-pointer group"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={`/images/${n}.svg`}
                    alt={n}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold capitalize mb-1">{n.replace("-", " ")}</h3>
                      <p className="text-sm text-gray-300">View Project →</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-400 text-lg">
              Join hundreds of satisfied customers across Kerala
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-8 hover-lift"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, j) => (
                    <motion.span
                      key={j}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + j * 0.1 }}
                      className="text-yellow-400 text-xl"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                <p className="text-gray-300 mb-6 italic">"{item.text}"</p>

                <div className="flex items-center gap-4">
                  <div className="text-4xl">{item.avatar}</div>
                  <div>
                    <h4 className="font-bold text-white">{item.name}</h4>
                    <p className="text-sm text-gray-400">{item.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Certified Excellence
            </h2>
            <p className="text-gray-400 text-lg">
              Quality you can trust, warranties that protect
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {techSpecs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 neon-border"
              >
                <h3 className="text-2xl font-bold gradient-text mb-6">
                  {spec.title}
                </h3>
                <ul className="space-y-4">
                  {spec.items.map((item, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="text-xl">{item.split(" ")[0]}</span>
                      <span>{item.substring(item.indexOf(" ") + 1)}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center glass-card p-12 rounded-3xl neon-border"
          >
            <h3 className="text-3xl font-bold gradient-text mb-4">
              Ready to Go Solar?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Get a free consultation and site survey from our experts
            </p>
            <GradientButton className="px-10 py-5 text-xl">
              Contact Us Today 📞
            </GradientButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
