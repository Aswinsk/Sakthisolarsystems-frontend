"use client";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const contactInfo = [
  {
    title: "Address",
    details: [
      "Sakthi Solar Systems",
      "Kerala, India"
    ]
  },
  {
    title: "Phone",
    details: [
      "+91 XXXXX XXXXX",
      "Mon-Sat: 9AM - 6PM"
    ]
  },
  {
    title: "Email",
    details: [
      "info@sakthisolar.com",
      "support@sakthisolar.com"
    ]
  }
];

const serviceAreas = [
  "Thiruvananthapuram",
  "Kochi",
  "Kozhikode",
  "Thrissur",
  "Kollam",
  "Palakkad",
  "Alappuzha",
  "Kannur",
  "Kottayam",
  "Malappuram"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    systemSize: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
                Let&apos;s Talk Solar
              </h1>
              <p className="text-xl md:text-2xl text-[#182954] opacity-60"
                 style={{ letterSpacing: '-0.01em' }}>
                Get a free consultation and custom quote for your home or business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-5 gap-12">

            {/* Form */}
            <div className="md:col-span-3">
              <motion.div {...fadeInUp}>
                <GlassCard>
                  <h2 className="text-[32px] font-bold text-[#182954] mb-6"
                      style={{ letterSpacing: '-0.03em' }}>
                    Request a Quote
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-[#182954] mb-2"
                             style={{ letterSpacing: '-0.01em' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg text-[#182954]"
                        style={{
                          background: 'rgba(255, 255, 255, 0.5)',
                          border: '1.5px solid rgba(24, 41, 84, 0.2)',
                          letterSpacing: '-0.01em'
                        }}
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#182954] mb-2"
                               style={{ letterSpacing: '-0.01em' }}>
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg text-[#182954]"
                          style={{
                            background: 'rgba(255, 255, 255, 0.5)',
                            border: '1.5px solid rgba(24, 41, 84, 0.2)',
                            letterSpacing: '-0.01em'
                          }}
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#182954] mb-2"
                               style={{ letterSpacing: '-0.01em' }}>
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg text-[#182954]"
                          style={{
                            background: 'rgba(255, 255, 255, 0.5)',
                            border: '1.5px solid rgba(24, 41, 84, 0.2)',
                            letterSpacing: '-0.01em'
                          }}
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#182954] mb-2"
                               style={{ letterSpacing: '-0.01em' }}>
                          Location *
                        </label>
                        <input
                          type="text"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg text-[#182954]"
                          style={{
                            background: 'rgba(255, 255, 255, 0.5)',
                            border: '1.5px solid rgba(24, 41, 84, 0.2)',
                            letterSpacing: '-0.01em'
                          }}
                          placeholder="City, Kerala"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#182954] mb-2"
                               style={{ letterSpacing: '-0.01em' }}>
                          System Size
                        </label>
                        <select
                          name="systemSize"
                          value={formData.systemSize}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg text-[#182954]"
                          style={{
                            background: 'rgba(255, 255, 255, 0.5)',
                            border: '1.5px solid rgba(24, 41, 84, 0.2)',
                            letterSpacing: '-0.01em'
                          }}
                        >
                          <option value="">Select size</option>
                          <option value="1-3kW">1-3 kW (Small Home)</option>
                          <option value="3-5kW">3-5 kW (Medium Home)</option>
                          <option value="5-10kW">5-10 kW (Large Home)</option>
                          <option value="10kW+">10+ kW (Commercial)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#182954] mb-2"
                             style={{ letterSpacing: '-0.01em' }}>
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg text-[#182954] resize-none"
                        style={{
                          background: 'rgba(255, 255, 255, 0.5)',
                          border: '1.5px solid rgba(24, 41, 84, 0.2)',
                          letterSpacing: '-0.01em'
                        }}
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{
                        y: -2,
                        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 8px 24px rgba(187, 31, 44, 0.4)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 rounded-xl text-lg font-medium transition-all"
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
                      {submitted ? "Message Sent! ✓" : "Send Message"}
                    </motion.button>
                  </form>
                </GlassCard>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2 space-y-8">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.title}
                  {...fadeInUp}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <GlassCard>
                    <h3 className="text-xl font-bold text-[#182954] mb-3"
                        style={{ letterSpacing: '-0.02em' }}>
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, j) => (
                        <p key={j} className="text-[#182954] opacity-70"
                           style={{ letterSpacing: '-0.01em' }}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="w-full bg-[#F8F9FA] py-16 md:py-24 -my-8 md:-my-12">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <motion.h2
              {...fadeInUp}
              className="text-[42px] md:text-[48px] font-bold text-center text-[#182954] mb-6"
              style={{ letterSpacing: '-0.03em' }}
            >
              Serving All of Kerala
            </motion.h2>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-center text-xl text-[#182954] opacity-60 mb-12"
              style={{ letterSpacing: '-0.01em' }}>
              We provide solar solutions across Kerala&apos;s major cities and towns.
            </motion.p>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 max-w-[900px] mx-auto"
            >
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="px-6 py-3 rounded-lg text-[#182954] font-medium"
                  style={{
                    background: 'rgba(255, 255, 255, 0.6)',
                    border: '1.5px solid rgba(24, 41, 84, 0.2)',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {area}
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
