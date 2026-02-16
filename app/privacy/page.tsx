"use client";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function PrivacyPage() {
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
                Privacy Policy
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
                  Information We Collect
                </h2>
                <p className="opacity-70 leading-relaxed mb-4">
                  When you request a quote or consultation, we collect:
                </p>
                <ul className="opacity-70 leading-relaxed space-y-2 ml-6">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Location and property details for system design</li>
                  <li>Electricity consumption data for sizing calculations</li>
                  <li>Installation preferences and requirements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-[32px] font-bold mb-4" style={{ letterSpacing: '-0.03em' }}>
                  How We Use Your Information
                </h2>
                <p className="opacity-70 leading-relaxed mb-4">
                  We use your information to:
                </p>
                <ul className="opacity-70 leading-relaxed space-y-2 ml-6">
                  <li>Design and quote solar systems tailored to your needs</li>
                  <li>Schedule site inspections and installations</li>
                  <li>Process government subsidy applications on your behalf</li>
                  <li>Provide ongoing system monitoring and support</li>
                  <li>Send important updates about your installation</li>
                </ul>
              </div>

              <div>
                <h2 className="text-[32px] font-bold mb-4" style={{ letterSpacing: '-0.03em' }}>
                  Data Security
                </h2>
                <p className="opacity-70 leading-relaxed">
                  We protect your information using industry-standard security measures. Your data is stored securely and never sold to third parties. We share information only with:
                </p>
                <ul className="opacity-70 leading-relaxed space-y-2 ml-6 mt-4">
                  <li>Government authorities for subsidy processing and approvals</li>
                  <li>KSEB for net metering applications</li>
                  <li>Our installation partners (under strict confidentiality agreements)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-[32px] font-bold mb-4" style={{ letterSpacing: '-0.03em' }}>
                  Cookies and Analytics
                </h2>
                <p className="opacity-70 leading-relaxed">
                  We use cookies and analytics tools to improve our website experience. This includes tracking page visits, form submissions, and user behavior to optimize our services. You can disable cookies in your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-[32px] font-bold mb-4" style={{ letterSpacing: '-0.03em' }}>
                  Your Rights
                </h2>
                <p className="opacity-70 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="opacity-70 leading-relaxed space-y-2 ml-6">
                  <li>Access your personal information we hold</li>
                  <li>Request corrections to inaccurate data</li>
                  <li>Request deletion of your information (subject to legal requirements)</li>
                  <li>Opt out of marketing communications</li>
                  <li>Receive a copy of your data in portable format</li>
                </ul>
              </div>

              <div>
                <h2 className="text-[32px] font-bold mb-4" style={{ letterSpacing: '-0.03em' }}>
                  Data Retention
                </h2>
                <p className="opacity-70 leading-relaxed">
                  We retain customer information for the duration of your warranty period (up to 25 years for solar systems) to provide ongoing support and honor our commitments. After this period, data is securely deleted unless required by law.
                </p>
              </div>

              <div>
                <h2 className="text-[32px] font-bold mb-4" style={{ letterSpacing: '-0.03em' }}>
                  Contact Us
                </h2>
                <p className="opacity-70 leading-relaxed">
                  For privacy-related questions or to exercise your rights, contact us at:
                </p>
                <p className="opacity-70 mt-4">
                  Email: privacy@sakthisolar.com<br />
                  Phone: +91 XXXXX XXXXX<br />
                  Address: Sakthi Solar Systems, Kerala, India
                </p>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <p className="opacity-60 text-sm">
                  We reserve the right to update this privacy policy. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
