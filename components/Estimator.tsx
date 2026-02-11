"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { estimateSystemFromBill } from "@/lib/calc";
import { Counter } from "@/components/ui/Counter";
import { GradientButton } from "@/components/ui/GradientButton";

export function Estimator() {
  const [bill, setBill] = useState("3000");
  const [res, setRes] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = () => {
    setLoading(true);
    // Simulate loading for better UX
    setTimeout(() => {
      setRes(estimateSystemFromBill(Number(bill) || 0));
      setLoading(false);
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-card neon-border p-8"
    >
      {/* Input Section */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-3 gradient-text text-lg">
          Your Monthly KSEB Bill (₹)
        </label>
        <motion.div
          whileFocus={{ scale: 1.02 }}
          className="relative"
        >
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
            ₹
          </span>
          <input
            type="number"
            className="w-full glass-strong rounded-xl px-12 py-4 text-lg font-semibold focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            min={0}
            placeholder="3000"
          />
        </motion.div>
      </div>

      {/* Calculate Button */}
      <GradientButton
        onClick={handleCalculate}
        disabled={loading}
        className="w-full py-4 text-lg mb-6"
      >
        {loading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            ⚡
          </motion.div>
        ) : (
          "Calculate Savings ⚡"
        )}
      </GradientButton>

      {/* Results Section */}
      <AnimatePresence>
        {res && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {[
                {
                  label: "Recommended Size",
                  value: res.recommendedKW,
                  suffix: " kW",
                  icon: "⚡"
                },
                {
                  label: "Monthly Generation",
                  value: res.genKWh,
                  suffix: " kWh",
                  icon: "🔋"
                },
                {
                  label: "Bill Reduction",
                  value: res.billReductionPct,
                  suffix: "%",
                  icon: "📉"
                },
                {
                  label: "Payback Period",
                  value: res.paybackYears,
                  suffix: " years",
                  icon: "💰"
                }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-strong p-5 rounded-xl hover-lift"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs text-gray-400 uppercase tracking-wide">
                      {item.label}
                    </span>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className="text-3xl font-bold gradient-text">
                    <Counter
                      to={item.value}
                      duration={1.5}
                      suffix={item.suffix}
                      decimals={item.suffix === " years" ? 1 : 0}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Disclaimer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xs text-gray-400 text-center mt-4"
      >
        * Estimates based on average Kerala conditions. Actual results may vary
        based on site-specific factors.
      </motion.p>
    </motion.div>
  );
}

