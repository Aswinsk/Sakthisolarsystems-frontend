"use client";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function TermsPage() {
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-[800px] mx-auto"
            >
              <h1 className="text-[56px] md:text-[72px] font-bold text-[#182954] mb-6"
                  style={{ letterSpacing: '-0.04em' }}>
                Terms of Service
              </h1>
              <p className="text-xl text-[#182954] opacity-60"
                 style={{ letterSpacing: '-0.01em' }}>
                Last updated: February 2024
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-[900px] mx-auto px-6 md:px-12">
          <motion.div
            {...fadeInUp}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8 text-[#182954]" style={{ letterSpacing: '-0.01em' }}>

              <div>
                <h2 className="text-[32px] font-bold mb-4" style={{ letterSpacing: '-0.03em' }}>
                  Agreement to Terms
                </h2>
                <p className="opacity-70 leading-relaxed">
                  By engaging Sakthi Solar Systems for consultation, quotation, or installation services, you agree to these terms. Please read them carefully before proceeding with any service.
                </p>
              </div>

              <div>
                <h2 className="text-[32px] font-bold mb-4" style={{ letterSpacing: '-0.03em' }}>
                  Services Provided
                </h2>
                <p className="opacity-70 leading-relaxed mb-4">
                  Sakthi Solar Systems offers:
                </p>
                <ul className="opacity-70 leading-relaxed space-y-2 ml-6">
                  <li>Free site inspection and solar system design</li>
                  <li>Detailed quotations and ROI analysis</li>
                  <li>Complete turnkey installation of solar photovoltaic systems</li>
                  <li>Government subsidy and net metering application assistance</li>
                  <li>25-year warranty and maintenance services</li>
                  <li>System monitoring and performance optimization</li>
                </ul>
              </div>

              <div>
                <h2 className="text-[32px] font-bold mb-4" style={{ letterSpacing: '-0.03em' }}>
                  Quotations and Pricing
                </h2>
                <p className="opacity-70 leading-relaxed">
                  All quotations are valid for 30 days from the date of issue. Prices are based on current component costs and government policies. We reserve the right to adjust pricing if significant market changes occur. Final pricing is locked upon contract signing with 30% advance payment.
                </p>
              </div>

              <div>
                <h2 className="text-[32px] font-bold mb-4" style={{ letterSpacing: '-0.03em' }}>
                  Payment Terms
                </h2>
                <p className="opacity-70 leading-relaxed mb-4">
                  Standard payment schedule:
                </p>
                <ul className="opacity-70 leading-relaxed space-y-2 ml-6">
                  <li>30% advance upon contract signing (non-refundable after material procurement)</li>
                  <li>40% upon delivery of materials to site</li>
                  <li>25% upon installation completion</li>
                  <li>5% upon net metering activation and final handover</li>
                </ul>
                <p className="opacity-70 leading-relaxed mt-4">
                  Government subsidy (if applicable) is adjusted in the final payment once received. Typical subsidy processing time: 60-180 days.
                </p>
              </div>

              <div>
                <h2 className="text-[32px] font-bold mb-4" style={{ letterSpacing: '-0.03em' }}>
                  Installation Timeline
                </h2>
                <p className="opacity-70 leading-relaxed">
                  Standard timeline: 3-6 weeks from contract signing to system activation. Delays may occur due to government approval processes, weather conditions, or material availability. We will keep you informed of any timeline changes.
                </p>
              </div>

              <div>
                <h2 className="text-[32px] font-bold mb-4" style={{ letterSpacing: '-0.03em' }}>
                  Customer Responsibilities
                </h2>
                <p className="opacity-70 leading-relaxed mb-4">
                  You are responsible for:
                </p>
                <ul className="opacity-70 leading-relaxed space-y-2 ml-6">
                  <li>Ensuring roof structural integrity (we&apos;ll assess and advise)</li>
                  <li>Providing access to property during installation</li>
                  <li>Obtaining building owner consent (if property is rented)</li>
                  <li>Maintaining clear access to panels for cleaning and maintenance</li>
                  <li>Promptly reporting any system issues or damage</li>
                </ul>
              </div>

              <div>
                <h2 className="text-[32px] font-bold mb-4" style={{ letterSpacing: '-0.03em' }}>
                  Warranties
                </h2>
                <p className="opacity-70 leading-relaxed mb-4">
                  Our warranty coverage:
                </p>
                <ul className="opacity-70 leading-relaxed space-y-2 ml-6">
                  <li>Solar panels: 25-year performance warranty (minimum 80% output at year 25)</li>
                  <li>Inverter: 10-year manufacturer warranty (extendable to 15 years)</li>
                  <li>Installation workmanship: 5 years</li>
                  <li>Mounting structure: 15 years against corrosion</li>
                </ul>
                <p className="opacity-70 leading-relaxed mt-4">
                  Warranties are void in cases of tampering, unauthorized modifications, natural disasters, or failure to maintain the system per our guidelines.
                </p>
              </div>

              <div>
                <h2 className="text-[32px] font-bold mb-4" style={{ letterSpacing: '-0.03em' }}>
                  Performance Expectations
                </h2>
                <p className="opacity-70 leading-relaxed">
                  System output varies based on weather, shading, maintenance, and grid conditions. Our estimates are based on historical data and standard test conditions. Actual performance may vary ±10% from estimates. We are not liable for grid outages, KSEB policy changes, or force majeure events affecting system performance.
                </p>
              </div>

              <div>
                <h2 className="text-[32px] font-bold mb-4" style={{ letterSpacing: '-0.03em' }}>
                  Cancellation Policy
                </h2>
                <p className="opacity-70 leading-relaxed">
                  You may cancel before material procurement with full refund of advance. After material procurement, cancellation incurs costs for ordered components and work completed. Installation cannot be cancelled once commenced. All cancellations must be in writing.
                </p>
              </div>

              <div>
                <h2 className="text-[32px] font-bold mb-4" style={{ letterSpacing: '-0.03em' }}>
                  Limitation of Liability
                </h2>
                <p className="opacity-70 leading-relaxed">
                  Our liability is limited to repair or replacement of defective components under warranty. We are not liable for indirect damages, lost savings, or consequential losses. Maximum liability: project contract value.
                </p>
              </div>

              <div>
                <h2 className="text-[32px] font-bold mb-4" style={{ letterSpacing: '-0.03em' }}>
                  Dispute Resolution
                </h2>
                <p className="opacity-70 leading-relaxed">
                  Any disputes will be resolved through good-faith negotiation. If unresolved, disputes will be subject to arbitration in Kerala under Indian Arbitration and Conciliation Act. Jurisdiction: Kerala courts only.
                </p>
              </div>

              <div>
                <h2 className="text-[32px] font-bold mb-4" style={{ letterSpacing: '-0.03em' }}>
                  Contact Us
                </h2>
                <p className="opacity-70 leading-relaxed">
                  For questions about these terms, contact:
                </p>
                <p className="opacity-70 mt-4">
                  Email: legal@sakthisolar.com<br />
                  Phone: +91 XXXXX XXXXX<br />
                  Address: Sakthi Solar Systems, Kerala, India
                </p>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <p className="opacity-60 text-sm">
                  These terms may be updated periodically. Continued use of our services after updates constitutes acceptance of revised terms. Check this page regularly for updates.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
