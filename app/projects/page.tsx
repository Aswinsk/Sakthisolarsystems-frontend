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

const projects = [
  {
    title: "Residential Rooftop - Kochi",
    location: "Kochi, Kerala",
    capacity: "5 kW",
    type: "Grid-Tied",
    description: "Premium rooftop installation for a modern home. Generates 20-25 units daily, eliminating 90% of grid dependence.",
    image: "/images/projects/residential-kochi.jpg",
    stats: ["25-year warranty", "₹4,500/month savings", "90% bill reduction"]
  },
  {
    title: "Villa Complex - Ernakulam",
    location: "Ernakulam, Kerala",
    capacity: "8 kW",
    type: "Grid-Tied with Battery Backup",
    description: "High-capacity system with hybrid inverter for backup power during grid outages.",
    image: "/images/projects/villa-ernakulam.jpg",
    stats: ["15kWh battery", "4-hour backup", "Zero bills"]
  },
  {
    title: "Commercial Building - Thiruvananthapuram",
    location: "Thiruvananthapuram, Kerala",
    capacity: "25 kW",
    type: "Commercial Grid-Tied",
    description: "Large-scale rooftop installation for office complex. Delivers significant cost savings with 8-10 year ROI.",
    image: "/images/projects/commercial-tvm.jpg",
    stats: ["100 units/day", "₹25,000/month savings", "Net metering"]
  },
  {
    title: "Rooftop System - Thrissur",
    location: "Thrissur, Kerala",
    capacity: "6 kW",
    type: "Grid-Tied",
    description: "Optimal east-west panel orientation maximizing daily generation across both morning and evening peak hours.",
    image: "/images/projects/rooftop-thrissur.jpg",
    stats: ["22 units/day", "₹5,000/month savings", "MNRE subsidy"]
  },
  {
    title: "Industrial Facility - Kozhikode",
    location: "Kozhikode, Kerala",
    capacity: "50 kW",
    type: "Industrial Scale",
    description: "Multi-phase industrial installation offsetting daytime consumption with clean solar energy.",
    image: "/images/projects/industrial-calicut.jpg",
    stats: ["200 units/day", "₹60,000/month savings", "3-shift operation"]
  },
  {
    title: "Hybrid System - Kannur",
    location: "Kannur, Kerala",
    capacity: "7 kW",
    type: "Hybrid with Storage",
    description: "Grid-tied system with battery storage for uninterrupted power. Ideal for areas with frequent outages.",
    image: "/images/projects/hybrid-kannur.jpg",
    stats: ["20kWh storage", "8-hour backup", "Smart monitoring"]
  }
];

export default function ProjectsPage() {
  return (
    <div className="bg-white overflow-x-hidden">
      <div className="flex flex-col gap-[60px] md:gap-[100px] pt-28 md:pt-32 pb-[60px] md:pb-[100px]">

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="gradient-blob blob-navy animate-float" style={{
            position: 'absolute',
            top: '-150px', right: '-150px',
            width: '500px', height: '500px'
          }} />

          <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-[800px] mx-auto"
            >
              <h1 className="text-[56px] md:text-[72px] font-bold text-[#182954] mb-6"
                  style={{ letterSpacing: '-0.04em' }}>
                Our Projects
              </h1>
              <p className="text-xl md:text-2xl text-[#182954] opacity-60"
                 style={{ letterSpacing: '-0.01em' }}>
                Real installations. Real results. Real savings for Kerala families and businesses.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                {...fadeInUp}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <GlassCard className="h-full p-0 overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 px-4 py-2 rounded-lg"
                         style={{
                           background: 'linear-gradient(135deg, rgba(187, 31, 44, 0.95), rgba(187, 31, 44, 0.85))',
                           backdropFilter: 'blur(8px)',
                           color: 'white',
                           letterSpacing: '-0.01em'
                         }}>
                      {project.capacity}
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#182954] mb-2"
                        style={{ letterSpacing: '-0.02em' }}>
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm text-[#182954] opacity-60"
                            style={{ letterSpacing: '-0.01em' }}>
                        {project.location}
                      </span>
                      <span className="text-[#BB1F2C]">•</span>
                      <span className="text-sm text-[#182954] opacity-60"
                            style={{ letterSpacing: '-0.01em' }}>
                        {project.type}
                      </span>
                    </div>
                    <p className="text-[#182954] opacity-70 mb-6"
                       style={{ letterSpacing: '-0.01em' }}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {project.stats.map((stat, j) => (
                        <div
                          key={j}
                          className="px-4 py-2 rounded-lg text-sm text-[#182954]"
                          style={{
                            background: 'rgba(24, 41, 84, 0.05)',
                            letterSpacing: '-0.01em'
                          }}
                        >
                          {stat}
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="w-full bg-[#F8F9FA] py-16 md:py-24 -my-8 md:-my-12">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <motion.h2
              {...fadeInUp}
              className="text-[42px] md:text-[48px] font-bold text-center text-[#182954] mb-16"
              style={{ letterSpacing: '-0.03em' }}
            >
              Combined Impact
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "2000+", label: "Total Installations" },
                { number: "50 MW+", label: "Cumulative Capacity" },
                { number: "₹3Cr+", label: "Annual Savings" },
                { number: "40,000T", label: "CO₂ Avoided/Year" }
              ].map((stat, i) => (
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

        {/* CTA */}
        <section className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            {...fadeInUp}
            className="relative"
          >
            <div className="gradient-blob blob-red animate-float" style={{
              position: 'absolute',
              top: '-100px', left: '50%',
              transform: 'translateX(-50%)',
              width: '600px', height: '600px'
            }} />

            <div className="relative z-10">
              <h2 className="text-[48px] md:text-[56px] font-bold text-[#182954] mb-6"
                  style={{ letterSpacing: '-0.03em' }}>
                Your Project Could Be Next
              </h2>
              <p className="text-xl text-[#182954] opacity-60 mb-8"
                 style={{ letterSpacing: '-0.01em' }}>
                Get a custom quote for your home or business.
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
                Request Quote
              </motion.a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
